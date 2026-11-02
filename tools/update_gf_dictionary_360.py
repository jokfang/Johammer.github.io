from __future__ import annotations

import argparse
import html
import json
import re
import time
import urllib.error
import urllib.parse
import urllib.request
from collections import defaultdict
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path
from typing import Any, Callable


ROOT = Path(__file__).resolve().parents[1]
DICTIONARY_DIR = ROOT / "public/locales/rules/common-rules"
MONOLITHIC_DICTIONARY = ROOT / "public/locales/rules/common-rules.dictionary.ts"
SYSTEM = ""
GAME_SYSTEM_IDS = {
    "GF": 2,
    "GFF": 3,
    "AOF": 4,
    "AOFS": 5,
    "AOFR": 6,
}
URL_RE = re.compile(r"sourceUrl=(?P<url>https?://\S+)")


def read_json(path: Path) -> Any:
    return json.loads(path.read_text(encoding="utf-8"))


def write_json(path: Path, value: Any) -> None:
    path.write_text(
        json.dumps(value, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
        newline="\n",
    )


def parse_review_log(
    path: Path, system: str
) -> tuple[dict[str, set[str]], dict[str, set[str]], set[str], dict[str, str]]:
    issue_re = re.compile(
        rf"\[INFO\] (?P<type>[^:]+): system={re.escape(system)} army=(?P<army>.*?) "
        r"(?:(?:section=\S+ rule=(?P<rule>.*?))|(?:spell=(?P<spell>.*?))|(?=sourceUrl=))"
        r"(?=storedEnglishDescription=|englishDescription=|sourceUrl=|$)"
    )
    rule_issues: dict[str, set[str]] = defaultdict(set)
    spell_issues: dict[str, set[str]] = defaultdict(set)
    faction_issues: set[str] = set()
    army_urls: dict[str, str] = {}

    for line in path.read_text(encoding="utf-8").splitlines():
        match = issue_re.search(line)
        if not match:
            continue
        issue_type = match.group("type")
        army = match.group("army").strip()
        rule = (match.group("rule") or "").strip()
        spell = (match.group("spell") or "").strip()
        url_match = URL_RE.search(line)
        if url_match:
            army_urls[army] = url_match.group("url")

        if "faction" in issue_type:
            faction_issues.add(army)
        elif "rule" in issue_type and rule:
            rule_issues[rule].add(army)
        elif "spell" in issue_type and spell:
            spell_issues[spell].add(army)

    missing_urls = sorted(
        ({army for armies in rule_issues.values() for army in armies}
         | {army for armies in spell_issues.values() for army in armies}
         | faction_issues)
        - set(army_urls)
    )
    if missing_urls:
        raise ValueError(f"No source URL found for: {', '.join(missing_urls)}")
    return rule_issues, spell_issues, faction_issues, army_urls


def army_book_api_url(source_url: str) -> str:
    parsed = urllib.parse.urlparse(source_url)
    segments = [segment for segment in parsed.path.split("/") if segment]
    book_uid = segments[segments.index("army-info") + 2]
    return (
        f"{parsed.scheme}://{parsed.netloc}/api/army-books/{book_uid}"
        f"?gameSystem={GAME_SYSTEM_IDS[SYSTEM]}&simpleMode=false"
    )


def fetch_json(url: str) -> dict[str, Any]:
    request = urllib.request.Request(
        url,
        headers={
            "User-Agent": "Mozilla/5.0",
            "Accept": "application/json, text/plain, */*",
        },
    )
    last_error: Exception | None = None
    for attempt in range(3):
        try:
            with urllib.request.urlopen(request, timeout=45) as response:
                return json.loads(response.read().decode("utf-8"))
        except Exception as error:  # pragma: no cover - network retry
            last_error = error
            time.sleep(attempt + 1)
    assert last_error is not None
    raise last_error


def fetch_books(army_urls: dict[str, str]) -> dict[str, dict[str, Any]]:
    books: dict[str, dict[str, Any]] = {}
    with ThreadPoolExecutor(max_workers=6) as executor:
        futures = {
            executor.submit(fetch_json, army_book_api_url(url)): army
            for army, url in army_urls.items()
        }
        for future in as_completed(futures):
            army = futures[future]
            book = future.result()
            if book.get("versionString") != "3.6.0":
                raise ValueError(
                    f"Expected {army} to be 3.6.0, got {book.get('versionString')!r}"
                )
            books[army] = book
    return books


def normalize_source_text(value: Any) -> str:
    return html.unescape(str(value or "")).strip()


def collect_rule_variants(
    issues: dict[str, set[str]], books: dict[str, dict[str, Any]]
) -> dict[str, list[dict[str, Any]]]:
    result: dict[str, list[dict[str, Any]]] = {}
    for name, armies in issues.items():
        variants = []
        for army in sorted(armies):
            matches = [
                rule
                for rule in books[army].get("specialRules", [])
                if str(rule.get("name") or "").strip() == name
            ]
            if not matches:
                raise ValueError(f"Rule {name!r} not found in {army}")
            variants.append(
                {
                    "army": army,
                    "text": normalize_source_text(matches[0].get("description")),
                }
            )
        result[name] = variants
    return result


def collect_spell_variants(
    issues: dict[str, set[str]], books: dict[str, dict[str, Any]]
) -> dict[str, list[dict[str, Any]]]:
    result: dict[str, list[dict[str, Any]]] = {}
    for name, armies in issues.items():
        variants = []
        for army in sorted(armies):
            matches = [
                spell
                for spell in books[army].get("spells", [])
                if str(spell.get("name") or "").strip() == name
            ]
            if not matches:
                raise ValueError(f"Spell {name!r} not found in {army}")
            spell = matches[0]
            variants.append(
                {
                    "army": army,
                    "cost": int(spell.get("threshold") or 0),
                    "text": normalize_source_text(spell.get("effect")),
                }
            )
        result[name] = variants
    return result


def remove_system_from_descriptions(descriptions: list[dict[str, Any]]) -> list[dict[str, Any]]:
    result = []
    for description in descriptions:
        tags = [tag.strip() for tag in str(description.get("system", "")).split("/")]
        if SYSTEM.lower() not in {tag.lower() for tag in tags}:
            result.append(description)
            continue
        remaining = [tag for tag in tags if tag.lower() != SYSTEM.lower()]
        if remaining:
            result.append({**description, "system": "/".join(remaining)})
    return result


def add_system_tag(value: str) -> str:
    tags = [tag.strip() for tag in str(value or "").split("/") if tag.strip()]
    if SYSTEM.lower() not in {tag.lower() for tag in tags}:
        tags.insert(0, SYSTEM)
    return "/".join(tags)


def compact_variants(
    variants: list[dict[str, Any]], translate: Callable[[str], str], *, spell: bool
) -> list[dict[str, Any]]:
    signature_fields = ("cost", "text") if spell else ("text",)
    signatures = {
        tuple(variant.get(field) for field in signature_fields) for variant in variants
    }
    if len(signatures) == 1:
        variant = variants[0]
        description: dict[str, Any] = {"system": SYSTEM}
        if spell:
            description["cost"] = variant["cost"]
        description["text"] = translate(variant["text"])
        return [description]

    result = []
    for variant in variants:
        description = {"system": SYSTEM, "faction": variant["army"]}
        if spell:
            description["cost"] = variant["cost"]
        description["text"] = translate(variant["text"])
        result.append(description)
    return result


def build_google_translator(
    rules_en: dict[str, Any],
    rules_fr: dict[str, Any],
    spells_en: dict[str, Any],
    spells_fr: dict[str, Any],
    extra_terms: set[str],
    cache_path: Path,
) -> tuple[Callable[[str], str], Callable[[str], str]]:
    cache: dict[str, str] = read_json(cache_path) if cache_path.exists() else {}
    title_cache: dict[str, str] = {
        name: str(entry.get("title") or name) for name, entry in rules_fr.items()
    }
    title_cache.update(
        {name: str(entry.get("title") or name) for name, entry in spells_fr.items()}
    )

    def translate_chunk(text: str) -> str:
        query = urllib.parse.urlencode(
            {"client": "gtx", "sl": "en", "tl": "fr", "dt": "t", "q": text}
        )
        request = urllib.request.Request(
            f"https://translate.googleapis.com/translate_a/single?{query}",
            headers={"User-Agent": "Mozilla/5.0"},
        )
        last_error: Exception | None = None
        for attempt in range(5):
            try:
                with urllib.request.urlopen(request, timeout=45) as response:
                    payload = json.loads(response.read().decode("utf-8"))
                return "".join(segment[0] for segment in payload[0] if segment[0])
            except (urllib.error.URLError, TimeoutError, json.JSONDecodeError) as error:
                last_error = error
                time.sleep(2 ** attempt)
        assert last_error is not None
        raise last_error

    def split_long_text(text: str, limit: int = 3000) -> list[str]:
        if len(text) <= limit:
            return [text]
        chunks: list[str] = []
        for paragraph in text.split("\n\n"):
            if len(paragraph) <= limit:
                chunks.append(paragraph)
                continue
            sentences = re.split(r"(?<=[.!?])\s+", paragraph)
            current = ""
            for sentence in sentences:
                candidate = f"{current} {sentence}".strip()
                if current and len(candidate) > limit:
                    chunks.append(current)
                    current = sentence
                else:
                    current = candidate
            if current:
                chunks.append(current)
        return chunks

    def raw_translate(text: str) -> str:
        if not text:
            return text
        if text not in cache:
            translated_chunks = [translate_chunk(chunk) for chunk in split_long_text(text)]
            cache[text] = "\n\n".join(translated_chunks).strip()
            write_json(cache_path, cache)
            time.sleep(0.05)
        return cache[text]

    def translate_title(title: str) -> str:
        if title not in title_cache:
            title_cache[title] = raw_translate(title)
        return title_cache[title]

    all_terms = sorted(
        set(rules_en) | set(spells_en) | extra_terms,
        key=lambda value: (-len(value), value),
    )

    def polish_french_translation(value: str) -> str:
        replacements = (
            (r"\bRamassez jusqu'à\b", "Choisissez jusqu'à"),
            (r"\bRamassez une\b", "Choisissez une"),
            (r"\bactions? Avancement\b", "actions d'Avancée"),
            (r"\bactions? Avancer\b", "actions d'Avancée"),
            (r"\bactions? Advance\b", "actions d'Avancée"),
            (r"\bactions? Rush/Charge\b", "actions de Course/Charge"),
            (r"\bactions? Rush\b", "actions de Course"),
            (r"\bactions? Hold\b", "actions Immobile"),
            (r"\ben Avance\b", "en Avancée"),
            (r"\ben Rush/Charge\b", "en Course/Charge"),
            (r"\bAdvance\b", "Avancée"),
            (r"\bRush\b", "Course"),
            (r"\bDefense\b", "Défense"),
            (r"\bMorale\b", "Moral"),
            (r"\bRegeneration\b", "Régénération"),
            (r"\bCover\b", "Couvert"),
            (r"\bjets? de test Moral\b", "jets de moral"),
            (r"\btest Moral\b", "test de moral"),
            (r"\bjets? de Defense\b", "jets de défense"),
            (r"\brésultats Defense\b", "résultats de défense"),
            (r"\bmodificateurs Defense\b", "modificateurs de défense"),
            (r"\bIgnore Regeneration\b", "Ignore Régénération"),
            (r"\bCette arme Ignore\b", "Cette arme ignore"),
            (r"\bminimum\. de\b", "minimum de"),
            (r"\bappliquent cette règle\b", "possèdent cette règle"),
            (
                r"\belles sont tirées/chargées\b",
                "elles sont prises pour cible par un tir/une charge",
            ),
            (
                r"\best tirée/chargée\b",
                "est prise pour cible par un tir/une charge",
            ),
            (r"\bdes jets de \+1 en défense\b", "+1 aux jets de défense"),
            (
                r"une fois \(la prochaine fois, l'effet s'appliquera\)",
                "une fois (la prochaine fois que l'effet devrait s'appliquer)",
            ),
        )
        polished = value.replace("\u00a0", " ")
        for pattern, replacement in replacements:
            polished = re.sub(pattern, replacement, polished)
        polished = re.sub(r"\s+([,.;:!?])", r"\1", polished)
        return polished

    def translate_description(text: str) -> str:
        protected = text
        replacements: list[tuple[str, str]] = []
        for term in all_terms:
            if not re.search(rf"(?<!\w){re.escape(term)}(?!\w)", protected, re.IGNORECASE):
                continue
            placeholder = f"ZXQTERM{len(replacements):04d}QXZ"
            protected = re.sub(
                rf"(?<!\w){re.escape(term)}(?!\w)",
                placeholder,
                protected,
                flags=re.IGNORECASE,
            )
            replacements.append((placeholder, translate_title(term)))
        translated = raw_translate(protected)
        for placeholder, replacement in replacements:
            translated = re.sub(
                re.escape(placeholder), replacement, translated, flags=re.IGNORECASE
            )
        return polish_french_translation(translated)

    return translate_title, translate_description


def update_entries(
    entries_en: dict[str, Any],
    entries_fr: dict[str, Any],
    variants_by_name: dict[str, list[dict[str, Any]]],
    translate_title: Callable[[str], str],
    translate_description: Callable[[str], str],
    *,
    spell: bool,
) -> None:
    for name, variants in variants_by_name.items():
        entry_en = entries_en.setdefault(
            name, {"title": name, "system": SYSTEM, "description": []}
        )
        entry_fr = entries_fr.setdefault(
            name,
            {
                "title": translate_title(name),
                "system": SYSTEM,
                "description": [],
            },
        )
        entry_en["system"] = add_system_tag(entry_en.get("system", ""))
        entry_fr["system"] = add_system_tag(entry_fr.get("system", ""))
        entry_en["description"] = remove_system_from_descriptions(
            list(entry_en.get("description", []))
        ) + compact_variants(variants, lambda value: value, spell=spell)
        entry_fr["description"] = remove_system_from_descriptions(
            list(entry_fr.get("description", []))
        ) + compact_variants(variants, translate_description, spell=spell)


def update_factions(
    factions_en: list[dict[str, Any]],
    factions_fr: list[dict[str, Any]],
    faction_issues: set[str],
    books: dict[str, dict[str, Any]],
    translate_title: Callable[[str], str],
    translate_description: Callable[[str], str],
) -> None:
    factions_en[:] = [
        entry
        for entry in factions_en
        if not (entry.get("systemCode") == SYSTEM and entry.get("armyName") in faction_issues)
    ]
    translated_names = {translate_title(name) for name in faction_issues}
    reviewed_names = (
        faction_issues
        | translated_names
        | {f"{name} (GF)" for name in translated_names}
    )
    factions_fr[:] = [
        entry
        for entry in factions_fr
        if not (
            entry.get("systemCode") == SYSTEM
            and entry.get("armyName") in reviewed_names
        )
    ]

    for army in sorted(faction_issues):
        book = books[army]
        introduction = normalize_source_text(book.get("background"))
        background = normalize_source_text(
            book.get("backgroundFull") or book.get("background")
        )
        factions_en.append(
            {
                "systemCode": SYSTEM,
                "armyName": army,
                "introduction": introduction,
                "backgroundStory": background,
            }
        )
        translated_name = translate_title(army)
        factions_fr.append(
            {
                "systemCode": SYSTEM,
                "armyName": translated_name,
                "introduction": translate_description(introduction),
                "backgroundStory": translate_description(background),
            }
        )


def pick_system_description(entry: dict[str, Any], army: str) -> dict[str, Any] | None:
    descriptions = list(entry.get("description", []))
    scoped = [
        description
        for description in descriptions
        if SYSTEM.lower()
        in {
            tag.strip().lower()
            for tag in str(description.get("system", "")).split("/")
        }
    ]
    return next(
        (description for description in scoped if description.get("faction") == army),
        next((description for description in scoped if not description.get("faction")), None),
    )


def validate_updates(
    rules_en: dict[str, Any],
    rules_fr: dict[str, Any],
    spells_en: dict[str, Any],
    spells_fr: dict[str, Any],
    factions_en: list[dict[str, Any]],
    factions_fr: list[dict[str, Any]],
    rule_variants: dict[str, list[dict[str, Any]]],
    spell_variants: dict[str, list[dict[str, Any]]],
    faction_issues: set[str],
) -> dict[str, int]:
    checked_rules = 0
    checked_spells = 0
    for name, variants in rule_variants.items():
        for variant in variants:
            english = pick_system_description(rules_en[name], variant["army"])
            french = pick_system_description(rules_fr[name], variant["army"])
            if not english or english.get("text") != variant["text"]:
                raise ValueError(f"English rule validation failed: {variant['army']} / {name}")
            if not french or not str(french.get("text") or "").strip():
                raise ValueError(f"French rule validation failed: {variant['army']} / {name}")
            checked_rules += 1

    for name, variants in spell_variants.items():
        for variant in variants:
            english = pick_system_description(spells_en[name], variant["army"])
            french = pick_system_description(spells_fr[name], variant["army"])
            if (
                not english
                or english.get("text") != variant["text"]
                or english.get("cost") != variant["cost"]
            ):
                raise ValueError(f"English spell validation failed: {variant['army']} / {name}")
            if (
                not french
                or not str(french.get("text") or "").strip()
                or french.get("cost") != variant["cost"]
            ):
                raise ValueError(f"French spell validation failed: {variant['army']} / {name}")
            checked_spells += 1

    serialized_french = json.dumps(
        {"rules": rules_fr, "spells": spells_fr, "factions": factions_fr},
        ensure_ascii=False,
    )
    if re.search(r"ZXQ(?:TERM)?\d+QXZ", serialized_french, re.IGNORECASE):
        raise ValueError("Translation placeholder leaked into the French dictionary")

    english_factions = {
        entry.get("armyName")
        for entry in factions_en
        if entry.get("systemCode") == SYSTEM
    }
    if not faction_issues.issubset(english_factions):
        raise ValueError("At least one reviewed faction is still missing")

    return {
        "ruleVariants": checked_rules,
        "spellVariants": checked_spells,
        "factions": len(faction_issues),
    }


def regenerate_monolithic(
    rules_en: dict[str, Any],
    rules_pl: dict[str, Any],
    rules_fr: dict[str, Any],
    spells_en: dict[str, Any],
    spells_fr: dict[str, Any],
    factions_en: list[dict[str, Any]],
    factions_fr: list[dict[str, Any]],
) -> None:
    current = MONOLITHIC_DICTIONARY.read_text(encoding="utf-8")
    prefix = current[: current.index("export const commonRules")]
    sections = [
        prefix.rstrip(),
        "export const commonRules: RulesByLanguage = "
        + json.dumps(
            {"en": rules_en, "pl": rules_pl, "fr": rules_fr},
            ensure_ascii=False,
            indent=2,
        )
        + ";",
        "export const commonSpells: SpellsByLanguage = "
        + json.dumps({"en": spells_en, "fr": spells_fr}, ensure_ascii=False, indent=2)
        + ";",
        "export const factionData: FactionDataByLanguage = "
        + json.dumps({"en": factions_en, "fr": factions_fr}, ensure_ascii=False, indent=2)
        + ";",
    ]
    MONOLITHIC_DICTIONARY.write_text(
        "\n\n".join(sections) + "\n", encoding="utf-8", newline="\n"
    )


def main() -> None:
    global SYSTEM
    parser = argparse.ArgumentParser(
        description="Update current dictionary entries from a 3.6.0 review log."
    )
    parser.add_argument("review_log", type=Path)
    parser.add_argument(
        "--system",
        required=True,
        choices=tuple(GAME_SYSTEM_IDS),
        help="Game system to update from the review log.",
    )
    parser.add_argument(
        "--translation-cache",
        type=Path,
        default=ROOT / ".tmp-google-translations.json",
    )
    args = parser.parse_args()
    SYSTEM = args.system

    rule_issues, spell_issues, faction_issues, army_urls = parse_review_log(
        args.review_log, SYSTEM
    )
    books = fetch_books(army_urls)
    rule_variants = collect_rule_variants(rule_issues, books)
    spell_variants = collect_spell_variants(spell_issues, books)

    rules_en = read_json(DICTIONARY_DIR / "rules.en.json")
    rules_fr = read_json(DICTIONARY_DIR / "rules.fr.json")
    rules_pl = read_json(DICTIONARY_DIR / "rules.pl.json")
    spells_en = read_json(DICTIONARY_DIR / "spells.en.json")
    spells_fr = read_json(DICTIONARY_DIR / "spells.fr.json")
    factions_en = read_json(DICTIONARY_DIR / "factions.en.json")
    factions_fr = read_json(DICTIONARY_DIR / "factions.fr.json")

    translate_title, translate_description = build_google_translator(
        rules_en,
        rules_fr,
        spells_en,
        spells_fr,
        set(rule_variants) | set(spell_variants) | faction_issues,
        args.translation_cache,
    )
    update_entries(
        rules_en,
        rules_fr,
        rule_variants,
        translate_title,
        translate_description,
        spell=False,
    )
    update_entries(
        spells_en,
        spells_fr,
        spell_variants,
        translate_title,
        translate_description,
        spell=True,
    )
    update_factions(
        factions_en,
        factions_fr,
        faction_issues,
        books,
        translate_title,
        translate_description,
    )

    validation = validate_updates(
        rules_en,
        rules_fr,
        spells_en,
        spells_fr,
        factions_en,
        factions_fr,
        rule_variants,
        spell_variants,
        faction_issues,
    )

    write_json(DICTIONARY_DIR / "rules.en.json", rules_en)
    write_json(DICTIONARY_DIR / "rules.fr.json", rules_fr)
    write_json(DICTIONARY_DIR / "spells.en.json", spells_en)
    write_json(DICTIONARY_DIR / "spells.fr.json", spells_fr)
    write_json(DICTIONARY_DIR / "factions.en.json", factions_en)
    write_json(DICTIONARY_DIR / "factions.fr.json", factions_fr)
    regenerate_monolithic(
        rules_en,
        rules_pl,
        rules_fr,
        spells_en,
        spells_fr,
        factions_en,
        factions_fr,
    )

    print(
        json.dumps(
            {
                "books": len(books),
                "rules": len(rule_variants),
                "spells": len(spell_variants),
                "factions": len(faction_issues),
                "validated": validation,
            },
            ensure_ascii=False,
        )
    )


if __name__ == "__main__":
    main()
