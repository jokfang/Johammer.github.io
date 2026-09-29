import rulesEn from "../../public/locales/rules/common-rules/rules.en.json";
import rulesFr from "../../public/locales/rules/common-rules/rules.fr.json";
import rulesPl from "../../public/locales/rules/common-rules/rules.pl.json";
import spellsEn from "../../public/locales/rules/common-rules/spells.en.json";
import spellsFr from "../../public/locales/rules/common-rules/spells.fr.json";
import factionsEn from "../../public/locales/rules/common-rules/factions.en.json";
import factionsFr from "../../public/locales/rules/common-rules/factions.fr.json";
import type {
  FactionData,
  FactionDataByLanguage,
  RuleTranslationEntry,
  RulesByLanguage,
  SpellTranslationEntry,
  SpellsByLanguage,
} from "../../public/locales/rules/common-rules.types";

const normalizeLanguage = (language?: string) =>
  (language || "en").slice(0, 2).toLowerCase();

const commonRulesDictionary: RulesByLanguage = {
  en: rulesEn,
  fr: rulesFr,
  pl: rulesPl,
};

const commonSpellsDictionary: SpellsByLanguage = {
  en: spellsEn,
  fr: spellsFr,
};

const factionData: FactionDataByLanguage = {
  en: factionsEn,
  fr: factionsFr,
};

const containsSystemTag = (value: string, normalizedSystem: string) =>
  value
    .split("/")
    .some((tag) => tag.trim().toLowerCase() === normalizedSystem);

const filterTranslationsBySystem = <T extends { system: string }>(
  translations: Record<string, T>,
  system?: string
): Record<string, T> => {
  const normalizedSystem = system?.trim().toLowerCase();
  if (!normalizedSystem) {
    return translations;
  }

  return Object.fromEntries(
    Object.entries(translations).filter(([, entry]) =>
      containsSystemTag(entry.system, normalizedSystem)
    )
  );
};

const filterDictionaryBySystem = <T extends { system: string }>(
  dictionary: Record<string, Record<string, T>>,
  system?: string
): Record<string, Record<string, T>> => {
  if (!system?.trim()) {
    return dictionary;
  }

  return Object.fromEntries(
    Object.entries(dictionary).map(([language, translations]) => [
      language,
      filterTranslationsBySystem(translations, system),
    ])
  );
};

export const getCommonRulesDictionary = (
  system?: string
): RulesByLanguage => filterDictionaryBySystem(commonRulesDictionary, system);

export const getCommonSpellsDictionary = (
  system?: string
): SpellsByLanguage => filterDictionaryBySystem(commonSpellsDictionary, system);

export const getFactionData = (system?: string): FactionDataByLanguage => {
  const normalizedSystem = system?.trim().toLowerCase();
  if (!normalizedSystem) {
    return factionData;
  }

  return Object.fromEntries(
    Object.entries(factionData).map(([language, entries]) => [
      language,
      entries.filter((entry) =>
        containsSystemTag(entry.systemCode, normalizedSystem)
      ),
    ])
  );
};

export const getCommonRuleTranslations = (
  language: string,
  system?: string
): Record<string, RuleTranslationEntry> => {
  const normalizedLanguage = normalizeLanguage(language);
  const translations =
    commonRulesDictionary[normalizedLanguage] || commonRulesDictionary.en || {}
  return filterTranslationsBySystem(translations, system);
};

export const getCommonSpellTranslations = (
  language: string,
  system?: string
): Record<string, SpellTranslationEntry> => {
  const normalizedLanguage = normalizeLanguage(language);
  const translations =
    commonSpellsDictionary[normalizedLanguage] ||
    commonSpellsDictionary.en ||
    {};
  return filterTranslationsBySystem(translations, system);
};

export const fetchCommonRulesDictionary = async (
  system?: string
): Promise<RulesByLanguage> => getCommonRulesDictionary(system);

export const fetchCommonSpellsDictionary = async (
  system?: string
): Promise<SpellsByLanguage> => getCommonSpellsDictionary(system);

export type {
  FactionData,
  FactionDataByLanguage,
  RuleTranslationEntry,
  RulesByLanguage,
  SpellTranslationEntry,
  SpellsByLanguage,
};
