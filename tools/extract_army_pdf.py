from __future__ import annotations

import argparse
import json
import re
import unicodedata
from dataclasses import dataclass
from pathlib import Path
from typing import Any

try:
    from pypdf import PdfReader
except ImportError as error:
    raise SystemExit("Missing dependency: install pypdf with `python -m pip install pypdf`.") from error


SYSTEM_NAMES = {
    "AOF": "Age of Fantasy",
    "GF": "Grimdark Future",
    "GFF": "Grimdark Future: Firefight",
}

SECTION_HEADINGS = {
    "INTRO",
    "ABOUT OPR",
    "BACKGROUND STORY",
    "ARMY-WIDE SPECIAL RULE",
    "SPECIAL RULES",
    "AURA SPECIAL RULES",
    "ARMY SPELLS",
}

UNIT_HEADER_RE = re.compile(r"^(?P<unique_marker>[★*✦✭]?\s*)?(?P<name>.+?) \[(?P<size>\d+)\] - (?P<cost>\d+)pts$")
STAT_RE = re.compile(r"^Quality (?P<quality>\d\+) Defense (?P<defense>\d\+)(?: Tough (?P<tough>\d+))?$")
WEAPON_RE = re.compile(r"^(?P<name>.+?) (?P<rng>-|\d+\") (?P<atk>A\d+) (?P<ap>-|\d+) ?(?P<spe>.*)$")
UPGRADE_HEADING_RE = re.compile(r"^(Upgrade|Replace)\b")
PRICED_OPTION_RE = re.compile(r"^(?P<text>.+?) (?P<cost>(?:\+\d+pts)|Free)$")
SPELL_RE = re.compile(r"^(?P<name>.+?) \((?P<cost>\d+)\): (?P<description>.+)$")


@dataclass
class PdfPage:
    number: int
    text: str


def normalize_text(value: str) -> str:
    normalized = unicodedata.normalize("NFKC", value)
    # Some OPR PDFs expose ligatures as NUL bytes via pypdf. The glyph can be
    # either "ft" (Rift in Beastmen) or "ff" (Buff/effect in Alien Hives), so
    # handle the known words before falling back to the most common case.
    null_replacements = {
        "Ri\x00": "Rift",
        "ri\x00": "rift",
        "a\x00er": "after",
        "A\x00er": "After",
        "Aircra\x00": "Aircraft",
        "aircra\x00": "aircraft",
        "gi\x00": "gift",
        "o\x00spring": "offspring",
        "e\x00orts": "efforts",
        "e\x00ect": "effect",
        "e\x00ects": "effects",
        "di\x00icult": "difficult",
        "Bu\x00": "Buff",
        "bu\x00": "buff",
        "Debu\x00": "Debuff",
        "debu\x00": "debuff",
        "o\x00 ": "off ",
        "o\x00.": "off.",
        "o\x00,": "off,",
        "o\x00\n": "off\n",
    }
    for source, replacement in null_replacements.items():
        normalized = normalized.replace(source, replacement)
    normalized = normalized.replace("\x00", "ff")
    normalized = normalized.replace("\uFFFD", "")
    normalized = normalized.replace("ﬁ", "fi").replace("ﬂ", "fl").replace("ﬀ", "ff")
    normalized = normalized.replace("ARMY-W IDE", "ARMY-WIDE")
    return normalized


def compact_lines(value: str) -> list[str]:
    return [line.strip() for line in normalize_text(value).splitlines() if line.strip()]


def read_pages(pdf_path: Path) -> list[PdfPage]:
    reader = PdfReader(str(pdf_path))
    pages: list[PdfPage] = []

    for index, page in enumerate(reader.pages, start=1):
        text = page.extract_text() or ""
        pages.append(PdfPage(number=index, text=normalize_text(text)))

    return pages


def parse_header(header: str) -> dict[str, str]:
    match = re.match(r"^(?P<system>[A-Z]+) - (?P<army>.+?) V(?P<version>[\d.]+)$", header)
    if not match:
        return {
            "systemCode": "",
            "systemName": "",
            "armyName": "",
            "version": "",
        }

    system_code = match.group("system")
    army_name = match.group("army").title()
    return {
        "systemCode": system_code,
        "systemName": SYSTEM_NAMES.get(system_code, system_code),
        "armyName": army_name,
        "version": match.group("version"),
    }


def extract_section(lines: list[str], start: str, end: str | None = None) -> str:
    try:
        start_index = lines.index(start) + 1
    except ValueError:
        return ""

    if end is None:
        end_index = len(lines)
    else:
        try:
            end_index = lines.index(end, start_index)
        except ValueError:
            end_index = len(lines)

    section_lines = [line for line in lines[start_index:end_index] if not line.isdigit()]
    return "\n".join(section_lines).strip()


def unwrap_rule_lines(value: str) -> list[str]:
    entries: list[str] = []
    current = ""

    for line in compact_lines(value):
        if re.match(r"^[A-Z][^:]{1,80}:", line):
            if current:
                entries.append(current.strip())
            current = line
        else:
            current = f"{current} {line}".strip()

    if current:
        entries.append(current.strip())

    return entries


def parse_rules(value: str) -> list[dict[str, str]]:
    rules: list[dict[str, str]] = []

    for entry in unwrap_rule_lines(value):
        if ":" not in entry:
            continue
        name, description = entry.split(":", 1)
        rules.append({"name": name.strip(), "description": description.strip()})

    return rules


def parse_spells(value: str) -> list[dict[str, Any]]:
    spells: list[dict[str, Any]] = []

    for entry in unwrap_rule_lines(value):
        match = SPELL_RE.match(entry)
        if not match:
            continue
        spells.append(
            {
                "name": match.group("name").strip(),
                "cost": int(match.group("cost")),
                "description": match.group("description").strip(),
            }
        )

    return spells


def split_units(unit_lines: list[str]) -> list[list[str]]:
    units: list[list[str]] = []
    current: list[str] = []

    for line in unit_lines:
        if UNIT_HEADER_RE.match(line):
            if current:
                units.append(current)
            current = [line]
        elif current:
            current.append(line)

    if current:
        units.append(current)

    return units


def parse_weapon(line: str) -> dict[str, str] | None:
    match = WEAPON_RE.match(line)
    if not match:
        return None

    return {
        "name": match.group("name").strip(),
        "range": match.group("rng").strip(),
        "attacks": match.group("atk").strip(),
        "ap": match.group("ap").strip(),
        "special": match.group("spe").strip(),
    }


def parse_upgrade_option(line: str) -> dict[str, str]:
    match = PRICED_OPTION_RE.match(line)
    if not match:
        return {"name": line, "details": "", "cost": ""}

    text = match.group("text").strip()
    details = ""
    name = text
    if " (" in text and text.endswith(")"):
        name, details = text.split(" (", 1)
        name = name.strip()
        if "), " in details:
            details = f"({details}".strip()
        else:
            details = details[:-1].strip()

    return {"name": name, "details": details, "cost": match.group("cost").strip()}


def parse_upgrades(lines: list[str], start_index: int) -> list[dict[str, Any]]:
    groups: list[dict[str, Any]] = []
    current_group: dict[str, Any] | None = None
    pending_option = ""

    def flush_pending() -> None:
        nonlocal pending_option
        if pending_option and current_group is not None:
            current_group["options"].append(parse_upgrade_option(pending_option))
        pending_option = ""

    for line in lines[start_index:]:
        if UPGRADE_HEADING_RE.match(line):
            flush_pending()
            current_group = {"type": line, "options": []}
            groups.append(current_group)
            continue

        if current_group is None:
            continue

        if pending_option:
            pending_option = f"{pending_option} {line}"
        else:
            pending_option = line

        if PRICED_OPTION_RE.match(pending_option) or current_group["type"] == "Upgrade SPE":
            flush_pending()

    flush_pending()
    return groups


def parse_unit(lines: list[str], page_number: int) -> dict[str, Any] | None:
    header = UNIT_HEADER_RE.match(lines[0])
    if not header:
        return None

    unit: dict[str, Any] = {
        "name": header.group("name").strip(),
        "size": int(header.group("size")),
        "cost": int(header.group("cost")),
        "page": page_number,
        "uniqueHero": bool((header.group("unique_marker") or "").strip()),
        "quality": "",
        "defense": "",
        "tough": "",
        "specialRules": [],
        "weapons": [],
        "upgrades": [],
    }

    stat_index = next((index for index, line in enumerate(lines) if STAT_RE.match(line)), -1)
    if stat_index >= 0:
        stat_match = STAT_RE.match(lines[stat_index])
        if stat_match:
            unit["quality"] = stat_match.group("quality")
            unit["defense"] = stat_match.group("defense")
            unit["tough"] = stat_match.group("tough") or ""

        weapon_header_index = next((index for index, line in enumerate(lines) if line == "Weapon RNG ATK AP SPE"), -1)
        if weapon_header_index > stat_index:
            special_rules = " ".join(lines[stat_index + 1 : weapon_header_index]).strip()
            unit["specialRules"] = [rule.strip() for rule in special_rules.split(",") if rule.strip()]
            unit["uniqueHero"] = unit["uniqueHero"] or ("Hero" in unit["specialRules"] and "Unique" in unit["specialRules"])
        else:
            weapon_header_index = -1

        upgrade_index = next(
            (index for index, line in enumerate(lines) if index > weapon_header_index and UPGRADE_HEADING_RE.match(line)),
            len(lines),
        )

        if weapon_header_index >= 0:
            for weapon_line in lines[weapon_header_index + 1 : upgrade_index]:
                weapon = parse_weapon(weapon_line)
                if weapon is not None:
                    unit["weapons"].append(weapon)

        unit["upgrades"] = parse_upgrades(lines, upgrade_index)

    return unit


def parse_units(pages: list[PdfPage]) -> list[dict[str, Any]]:
    parsed_units: list[dict[str, Any]] = []

    for page in pages[3:]:
        lines = compact_lines(page.text)
        if lines and re.match(r"^[A-Z]+ - .+ V[\d.]+$", lines[0]):
            lines = lines[1:]
        lines = [line for line in lines if not line.isdigit()]

        for unit_lines in split_units(lines):
            unit = parse_unit(unit_lines, page.number)
            if unit is not None:
                parsed_units.append(unit)

    return parsed_units


def parse_pdf(pdf_path: Path) -> dict[str, Any]:
    pages = read_pages(pdf_path)
    cover_lines = compact_lines(pages[0].text if pages else "")
    rules_lines = compact_lines(pages[2].text if len(pages) >= 3 else "")
    header = next((line for line in cover_lines if re.match(r"^[A-Z]+ - .+ V[\d.]+$", line)), "")
    header_data = parse_header(header)

    army_wide_rule_text = extract_section(rules_lines, "ARMY-WIDE SPECIAL RULE", "SPECIAL RULES")

    return {
        "sourcePdf": pdf_path.as_posix(),
        **header_data,
        "introduction": extract_section(cover_lines, "INTRO", "ABOUT OPR"),
        "backgroundStory": extract_section(cover_lines, "BACKGROUND STORY"),
        "armyWideSpecialRule": parse_rules(army_wide_rule_text),
        "specialRules": parse_rules(extract_section(rules_lines, "SPECIAL RULES", "AURA SPECIAL RULES")),
        "auraSpecialRules": parse_rules(extract_section(rules_lines, "AURA SPECIAL RULES", "ARMY SPELLS")),
        "armySpells": parse_spells(extract_section(rules_lines, "ARMY SPELLS")),
        "units": parse_units(pages),
    }


def main() -> None:
    parser = argparse.ArgumentParser(description="Extract an OPR army PDF into a JSON data file.")
    parser.add_argument("pdf", type=Path, help="Path to the PDF to extract.")
    parser.add_argument("-o", "--output", type=Path, help="Path to write JSON output.")
    args = parser.parse_args()

    data = parse_pdf(args.pdf)
    output = json.dumps(data, ensure_ascii=False, indent=2)

    if args.output:
        args.output.parent.mkdir(parents=True, exist_ok=True)
        args.output.write_text(f"{output}\n", encoding="utf-8")
    else:
        print(output)


if __name__ == "__main__":
    main()
