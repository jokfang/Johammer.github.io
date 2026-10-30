import rulesEn353 from "../../../public/locales/rules/common-rules/3.5.3/rules.en.json";
import rulesFr353 from "../../../public/locales/rules/common-rules/3.5.3/rules.fr.json";
import rulesPl353 from "../../../public/locales/rules/common-rules/3.5.3/rules.pl.json";
import spellsEn353 from "../../../public/locales/rules/common-rules/3.5.3/spells.en.json";
import spellsFr353 from "../../../public/locales/rules/common-rules/3.5.3/spells.fr.json";
import factionsEn353 from "../../../public/locales/rules/common-rules/3.5.3/factions.en.json";
import factionsFr353 from "../../../public/locales/rules/common-rules/3.5.3/factions.fr.json";
import type {
  FactionDataByLanguage,
  RuleTranslationEntry,
  RulesByLanguage,
  SpellTranslationEntry,
  SpellsByLanguage,
} from "../../../public/locales/rules/common-rules.types";
import {
  containsSystemTag,
  filterDictionaryBySystem,
  filterTranslationsBySystem,
  getCommonRuleTranslations,
  getCommonRulesDictionary,
  getCommonSpellTranslations,
  getCommonSpellsDictionary,
  getFactionData,
  normalizeLanguage,
} from "../../../src/services/common-rules-api";

export const ARCHIVED_DICTIONARY_VERSIONS = ["3.5.3"] as const;
type ArchivedDictionaryVersion = (typeof ARCHIVED_DICTIONARY_VERSIONS)[number];

const archivedRules: Record<ArchivedDictionaryVersion, RulesByLanguage> = {
  "3.5.3": { en: rulesEn353, fr: rulesFr353, pl: rulesPl353 },
};

const archivedSpells: Record<ArchivedDictionaryVersion, SpellsByLanguage> = {
  "3.5.3": { en: spellsEn353, fr: spellsFr353 },
};

const archivedFactions: Record<ArchivedDictionaryVersion, FactionDataByLanguage> = {
  "3.5.3": { en: factionsEn353, fr: factionsFr353 },
};

const normalizeVersion = (version?: string) => version?.trim() || "current";

export const isDictionaryVersionSupported = (version?: string): boolean => {
  const normalizedVersion = normalizeVersion(version);
  return (
    normalizedVersion === "current" ||
    ARCHIVED_DICTIONARY_VERSIONS.some(
      (archivedVersion) => archivedVersion === normalizedVersion
    )
  );
};

const getArchivedVersion = (version?: string): ArchivedDictionaryVersion | null => {
  const normalizedVersion = normalizeVersion(version);
  if (normalizedVersion === "current") {
    return null;
  }
  if (!isDictionaryVersionSupported(normalizedVersion)) {
    throw new Error(`Unsupported dictionary version: ${normalizedVersion}`);
  }
  return normalizedVersion as ArchivedDictionaryVersion;
};

export const getVersionedCommonRulesDictionary = (
  system?: string,
  version?: string
): RulesByLanguage => {
  const archivedVersion = getArchivedVersion(version);
  return archivedVersion
    ? filterDictionaryBySystem(archivedRules[archivedVersion], system)
    : getCommonRulesDictionary(system);
};

export const getVersionedCommonSpellsDictionary = (
  system?: string,
  version?: string
): SpellsByLanguage => {
  const archivedVersion = getArchivedVersion(version);
  return archivedVersion
    ? filterDictionaryBySystem(archivedSpells[archivedVersion], system)
    : getCommonSpellsDictionary(system);
};

export const getVersionedFactionData = (
  system?: string,
  version?: string
): FactionDataByLanguage => {
  const archivedVersion = getArchivedVersion(version);
  if (!archivedVersion) {
    return getFactionData(system);
  }

  const factions = archivedFactions[archivedVersion];
  const normalizedSystem = system?.trim().toLowerCase();
  if (!normalizedSystem) {
    return factions;
  }

  return Object.fromEntries(
    Object.entries(factions).map(([language, entries]) => [
      language,
      entries.filter((entry) =>
        containsSystemTag(entry.systemCode, normalizedSystem)
      ),
    ])
  );
};

export const getVersionedCommonRuleTranslations = (
  language: string,
  system?: string,
  version?: string
): Record<string, RuleTranslationEntry> => {
  const archivedVersion = getArchivedVersion(version);
  if (!archivedVersion) {
    return getCommonRuleTranslations(language, system);
  }
  const dictionary = archivedRules[archivedVersion];
  const normalizedLanguage = normalizeLanguage(language);
  return filterTranslationsBySystem(
    dictionary[normalizedLanguage] || dictionary.en || {},
    system
  );
};

export const getVersionedCommonSpellTranslations = (
  language: string,
  system?: string,
  version?: string
): Record<string, SpellTranslationEntry> => {
  const archivedVersion = getArchivedVersion(version);
  if (!archivedVersion) {
    return getCommonSpellTranslations(language, system);
  }
  const dictionary = archivedSpells[archivedVersion];
  const normalizedLanguage = normalizeLanguage(language);
  return filterTranslationsBySystem(
    dictionary[normalizedLanguage] || dictionary.en || {},
    system
  );
};
