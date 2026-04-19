import {
  getCommonRuleTranslations,
  getCommonSpellTranslations,
  type RuleTranslationEntry,
  type SpellTranslationEntry,
} from "../../services/common-rules-api";

type ArmyBookRule = {
  id?: string;
  name: string;
  label?: string;
  description?: string;
  rating?: number;
  hasRating?: boolean | null;
  coreType?: number | null;
  targetType?: number;
  aliasedRuleId?: string | null;
};

type ArmyBookWeapon = {
  name: string;
  count?: number;
  range?: number | null;
  attacks: number;
  specialRules?: ArmyBookRule[];
  label?: string;
};

type ArmyBookGain = {
  name: string;
  type: string;
  label?: string;
  count?: number;
  range?: number | null;
  attacks?: number;
  specialRules?: ArmyBookRule[];
  content?: ArmyBookGain[];
};

type ArmyBookUpgradeOption = {
  id: string;
  label: string;
  cost?: number;
  costs?: { cost: number; unitId?: string }[];
  gains: ArmyBookGain[];
};

type ArmyBookUpgradeSection = {
  id: string;
  label: string;
  variant?: string;
  affects?: { type?: string | number };
  options?: ArmyBookUpgradeOption[];
  targets?: string[];
};

type ArmyBookUpgradePackage = {
  uid: string;
  sections: ArmyBookUpgradeSection[];
};

type ArmyBookSpell = {
  name: string;
  effect: string;
  threshold: number;
};

type ArmyBookUnit = {
  id: string;
  cost: number;
  name: string;
  size: number;
  unitType?: string;
  rules: ArmyBookRule[];
  defense: number;
  quality: number;
  weapons: ArmyBookWeapon[];
  upgrades?: string[];
};

type ArmyBookResponse = {
  uid: string;
  name: string;
  background?: string;
  backgroundFull?: string;
  units: ArmyBookUnit[];
  upgradePackages?: ArmyBookUpgradePackage[];
  spells?: ArmyBookSpell[];
  versionString?: string;
  specialRules?: ArmyBookRule[];
  gameSystemId?: number;
  gameSystemSlug?: string;
  aberration?: string;
  gameSystemKey?: string;
};

type TranslationEntry = RuleTranslationEntry | SpellTranslationEntry;

export type ParsedArmyBookUrl = {
  bookUid: string;
  gameSystemSlug: string;
  gameSystemId: number;
  isBeta: boolean;
  sourceUrl: string;
};

export type ExtractedArmyBook = {
  sourceUrl: string;
  sourceBookUid: string;
  systemCode: string;
  systemName: string;
  armyName: string;
  version: string;
  introduction: string;
  backgroundStory: string;
  armyWideSpecialRule: { name: string; keywords?: string[]; description?: string }[];
  specialRules: { name: string; keywords?: string[]; description?: string }[];
  auraSpecialRules: { name: string; keywords?: string[]; description?: string }[];
  armySpells: { name: string; cost: number; keywords?: string[]; description?: string }[];
  units: {
    name: string;
    size: number;
    cost: number;
    uniqueHero: boolean;
    quality: string;
    defense: string;
    tough: string;
    specialRules: string[];
    weapons: {
      name: string;
      range: string;
      attacks: string;
      ap: string;
      special: string;
    }[];
    upgrades: {
      type: string;
      options: { name: string; details: string; cost: string }[];
    }[];
  }[];
};

const GAME_SYSTEMS: Record<
  string,
  { id: number; code: string; name: string }
> = {
  "grimdark-future": {
    id: 2,
    code: "GF",
    name: "Grimdark Future",
  },
  "grimdark-future-firefight": {
    id: 3,
    code: "GFF",
    name: "Grimdark Future: Firefight",
  },
  "age-of-fantasy": {
    id: 4,
    code: "AOF",
    name: "Age of Fantasy",
  },
  "age-of-fantasy-skirmish": {
    id: 5,
    code: "AOFS",
    name: "Age of Fantasy: Skirmish",
  },
  "age-of-fantasy-regiments": {
    id: 6,
    code: "AOFR",
    name: "Age of Fantasy: Regiments",
  },
};

const normalizeText = (value: string) => {
  const replacements: Array<[string, string]> = [
    ["</key>", ""],
    ["<key>", ""],
    ["â€™", "'"],
    ["â??", "'"],
    ["ā??", "'"],
    ["â€œ", '"'],
    ["â€", '"'],
    ["â€", '"'],
    ["â€\"", '"'],
    ["ā?¯", '"'],
    ["â?", '"'],
    ["â?¯", '"'],
    ["Arâ??", "Ar'"],
    ["Arā??", "Ar'"],
    ["Motherâ??", "Mother's"],
    ["Motherā??", "Mother's"],
  ];

  let normalized = value;
  for (const [source, replacement] of replacements) {
    normalized = normalized.split(source).join(replacement);
  }

  return normalized.replace(/(\r\n|\r|\n){3,}/g, "\n\n").trim();
};

const pickDescriptionForSystem = (
  entry: TranslationEntry | undefined,
  systemCode: string
) => {
  if (!entry?.description?.length) {
    return "";
  }

  const normalizedSystem = systemCode.toLowerCase();
  const exact = entry.description.find(
    (item) => `${item.system || ""}`.toLowerCase() === normalizedSystem
  );
  if (exact?.text) {
    return exact.text;
  }

  const all = entry.description.find(
    (item) => `${item.system || ""}`.toLowerCase() === "all"
  );
  if (all?.text) {
    return all.text;
  }

  return entry.description[0]?.text || "";
};

const translateLabel = (
  label: string,
  dictionary: Record<string, TranslationEntry>,
  language: string
) => {
  if (language === "en") {
    return normalizeText(label);
  }

  const match = /^(.+?)(\([^)]*\))?$/.exec(label.trim());
  const baseName = match?.[1]?.trim() || label.trim();
  const suffix = match?.[2] || "";
  const translation = dictionary[baseName];
  const title = translation?.title || baseName;
  return normalizeText(`${title}${suffix}`);
};

const translateDescription = (
  name: string,
  description: string,
  dictionary: Record<string, TranslationEntry>,
  systemCode: string,
  language: string
) => {
  if (language === "en") {
    return normalizeText(description);
  }

  const translation = dictionary[name];
  const translated = pickDescriptionForSystem(translation, systemCode);
  return normalizeText(translated || description);
};

const formatAp = (rules: ArmyBookRule[], language: string) => {
  const apRule = rules.find((rule) => rule.name === "AP");
  if (!apRule) {
    return "-";
  }

  const label = apRule.label || `AP(${apRule.rating ?? 0})`;
  const translated = translateLabel(
    label,
    getCommonRuleTranslations(language),
    language
  );
  const match = /\(([^)]+)\)/.exec(translated);
  return match?.[1] || "-";
};

const formatRuleList = (
  rules: ArmyBookRule[],
  language: string
) => {
  const dictionary = getCommonRuleTranslations(language);
  const entries = rules
    .filter((rule) => rule.name !== "AP")
    .map((rule) => translateLabel(rule.label || rule.name, dictionary, language));
  return entries.length > 0 ? entries.join(", ") : "-";
};

const formatWeaponRange = (range?: number | null) =>
  range && range > 0 ? `${range}"` : "-";

const formatWeaponGainDetails = (
  gain: ArmyBookGain,
  language: string
) => {
  const parts = [`A${gain.attacks ?? 0}`];
  const ap = formatAp(gain.specialRules || [], language);
  if (ap !== "-") {
    parts.push(`AP(${ap})`);
  }
  const rest = formatRuleList(gain.specialRules || [], language);
  if (rest !== "-") {
    parts.push(rest);
  }
  if (gain.range && gain.range > 0) {
    return `${gain.range}", ${parts.join(", ")}`;
  }
  return parts.join(", ");
};

const formatGainName = (gain: ArmyBookGain) => {
  if ((gain.count || 0) > 1) {
    return `${gain.count}x ${gain.name}`;
  }
  return gain.name;
};

const formatGainDetails = (
  gain: ArmyBookGain,
  language: string
) => {
  if (gain.type === "ArmyBookWeapon") {
    return formatWeaponGainDetails(gain, language);
  }

  if (gain.type === "ArmyBookItem" && Array.isArray(gain.content)) {
    return gain.content
      .map((item) =>
        translateLabel(
          item.label || item.name,
          getCommonRuleTranslations(language),
          language
        )
      )
      .join(", ");
  }

  return translateLabel(
    gain.label || gain.name,
    getCommonRuleTranslations(language),
    language
  );
};

const formatOption = (
  option: ArmyBookUpgradeOption,
  language: string
) => {
  const firstGain = option.gains[0];
  const name = firstGain ? formatGainName(firstGain) : option.label;
  const details = firstGain
    ? formatGainDetails(firstGain, language)
    : option.label;
  const rawCost = option.cost ?? option.costs?.[0]?.cost ?? 0;
  return {
    name: normalizeText(name),
    details: normalizeText(details),
    cost: rawCost === 0 ? "Free" : `+${rawCost}pts`,
  };
};

const countUnitRuleOccurrences = (units: ArmyBookUnit[]) => {
  const counts = new Map<string, number>();

  for (const unit of units) {
    const uniqueNames = new Set(unit.rules.map((rule) => rule.name));
    uniqueNames.forEach((name) => {
      counts.set(name, (counts.get(name) || 0) + 1);
    });
  }

  return counts;
};

export const parseArmyBookUrl = (value: string): ParsedArmyBookUrl | null => {
  let url: URL;
  try {
    url = new URL(value.trim());
  } catch {
    return null;
  }

  const segments = url.pathname.split("/").filter(Boolean);
  const armyInfoIndex = segments.indexOf("army-info");
  if (armyInfoIndex < 0 || segments.length < armyInfoIndex + 3) {
    return null;
  }

  const gameSystemSlug = segments[armyInfoIndex + 1];
  const bookUid = segments[armyInfoIndex + 2];
  const gameSystem = GAME_SYSTEMS[gameSystemSlug];
  if (!gameSystem || !bookUid) {
    return null;
  }

  return {
    bookUid,
    gameSystemSlug,
    gameSystemId: gameSystem.id,
    isBeta: url.hostname.includes("beta"),
    sourceUrl: url.toString(),
  };
};

export const extractArmyBookData = (
  source: ArmyBookResponse,
  parsedUrl: ParsedArmyBookUrl,
  language = "fr"
): ExtractedArmyBook => {
  const normalizedLanguage = language.slice(0, 2);
  const rulesDictionary = getCommonRuleTranslations(normalizedLanguage);
  const spellsDictionary = getCommonSpellTranslations(normalizedLanguage);
  const system = GAME_SYSTEMS[source.gameSystemSlug || parsedUrl.gameSystemSlug];
  const systemCode = source.aberration || source.gameSystemKey || system?.code || "";
  const systemName = system?.name || source.gameSystemSlug || "";

  const customRules = (source.specialRules || []).filter(
    (rule) => rule.coreType !== 1
  );
  const armyWideCounts = countUnitRuleOccurrences(source.units || []);
  const armyWideThreshold = Math.max(
    3,
    Math.ceil(((source.units || []).length || 1) * 0.5)
  );

  const translatedRuleEntry = (rule: ArmyBookRule) => ({
    name: translateLabel(rule.name, rulesDictionary, normalizedLanguage),
    description: translateDescription(
      rule.name,
      rule.description || "",
      rulesDictionary,
      systemCode,
      normalizedLanguage
    ),
  });

  const armyWideSpecialRule = customRules
    .filter(
      (rule) =>
        !rule.name.includes("Aura") &&
        (armyWideCounts.get(rule.name) || 0) >= armyWideThreshold
    )
    .map(translatedRuleEntry);

  const armyWideNames = new Set(armyWideSpecialRule.map((rule) => rule.name));

  const specialRules = customRules
    .filter(
      (rule) =>
        !rule.name.includes("Aura") &&
        !armyWideNames.has(
          translateLabel(rule.name, rulesDictionary, normalizedLanguage)
        )
    )
    .map(translatedRuleEntry);

  const auraSpecialRules = customRules
    .filter((rule) => rule.name.includes("Aura"))
    .map(translatedRuleEntry);

  const packageByUid = new Map(
    (source.upgradePackages || []).map((pkg) => [pkg.uid, pkg] as const)
  );

  return {
    sourceUrl: parsedUrl.sourceUrl,
    sourceBookUid: source.uid,
    systemCode,
    systemName,
    armyName: source.name,
    version: source.versionString || "",
    introduction: normalizeText(source.background || ""),
    backgroundStory: normalizeText(source.backgroundFull || source.background || ""),
    armyWideSpecialRule,
    specialRules,
    auraSpecialRules,
    armySpells: (source.spells || []).map((spell) => ({
      name: translateLabel(spell.name, spellsDictionary, normalizedLanguage),
      cost: spell.threshold,
      description: translateDescription(
        spell.name,
        spell.effect,
        spellsDictionary,
        systemCode,
        normalizedLanguage
      ),
    })),
    units: (source.units || []).map((unit) => {
      const rules = unit.rules || [];
      const translatedRules = rules.map((rule) =>
        translateLabel(rule.label || rule.name, rulesDictionary, normalizedLanguage)
      );
      const toughMatch = translatedRules.find((rule) =>
        /^(Tough|Coriace)\(/.test(rule)
      );
      const upgradeGroups = (unit.upgrades || [])
        .map((uid) => packageByUid.get(uid))
        .filter((pkg): pkg is ArmyBookUpgradePackage => Boolean(pkg))
        .flatMap((pkg) => pkg.sections || [])
        .filter((section) => (section.options || []).length > 0)
        .map((section) => ({
          type: normalizeText(section.label),
          options: (section.options || []).map((option) =>
            formatOption(option, normalizedLanguage)
          ),
        }));

      return {
        name: unit.name,
        size: unit.size,
        cost: unit.cost,
        uniqueHero:
          rules.some((rule) => rule.name === "Hero") &&
          rules.some((rule) => rule.name === "Unique"),
        quality: `${unit.quality}+`,
        defense: `${unit.defense}+`,
        tough: toughMatch ? toughMatch.replace(/^[^(]+\(/, "").replace(/\)$/, "") : "",
        specialRules: translatedRules,
        weapons: (unit.weapons || []).map((weapon) => ({
          name: normalizeText(weapon.name),
          range: formatWeaponRange(weapon.range),
          attacks: `A${weapon.attacks}`,
          ap: formatAp(weapon.specialRules || [], normalizedLanguage),
          special: formatRuleList(weapon.specialRules || [], normalizedLanguage),
        })),
        upgrades: upgradeGroups,
      };
    }),
  };
};
