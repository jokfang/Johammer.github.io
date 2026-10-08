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

type SystemScopedTranslation = {
  system: string;
  description: Array<{ system: string; faction?: string; text?: string }>;
};

const normalizeFaction = (value?: string) => (value || "").trim().toLowerCase();

export const pickTranslationDescription = <
  T extends { system: string; faction?: string; text?: string }
>(
  descriptions: T[] | undefined,
  system?: string,
  faction?: string
): T | undefined => {
  if (!descriptions?.length) {
    return undefined;
  }

  const normalizedSystem = system?.trim().toLowerCase() || "";
  const normalizedFaction = normalizeFaction(faction);
  const matchesSystem = (description: T, expected: string) =>
    containsSystemTag(description.system, expected);
  const matchesFaction = (description: T) =>
    normalizeFaction(description.faction) === normalizedFaction;
  const hasNoFaction = (description: T) => !normalizeFaction(description.faction);

  if (normalizedSystem && normalizedFaction) {
    const scopedToFaction = descriptions.find(
      (description) =>
        matchesSystem(description, normalizedSystem) && matchesFaction(description)
    );
    if (scopedToFaction?.text) {
      return scopedToFaction;
    }
  }

  if (normalizedSystem) {
    const scopedToSystem = descriptions.find(
      (description) =>
        matchesSystem(description, normalizedSystem) && hasNoFaction(description)
    );
    if (scopedToSystem?.text) {
      return scopedToSystem;
    }
  }

  if (normalizedFaction) {
    const genericForFaction = descriptions.find(
      (description) =>
        description.system.trim().toLowerCase() === "all" &&
        matchesFaction(description)
    );
    if (genericForFaction?.text) {
      return genericForFaction;
    }
  }

  const generic = descriptions.find(
    (description) =>
      description.system.trim().toLowerCase() === "all" &&
      hasNoFaction(description)
  );
  return generic?.text ? generic : descriptions[0];
};

const filterTranslationsBySystem = <T extends SystemScopedTranslation>(
  translations: Record<string, T>,
  system?: string
): Record<string, T> => {
  const normalizedSystem = system?.trim().toLowerCase();
  if (!normalizedSystem) {
    return translations;
  }

  const responseSystem = system?.trim() || normalizedSystem;
  return Object.fromEntries(
    Object.entries(translations)
      .filter(([, entry]) => containsSystemTag(entry.system, normalizedSystem))
      .map(([key, entry]) => [
        key,
        {
          ...entry,
          description: (() => {
            const matchingDescriptions = entry.description.filter(
              (description) =>
                description.system.trim().toLowerCase() === "all" ||
                containsSystemTag(description.system, normalizedSystem)
            );
            const descriptions =
              matchingDescriptions.length > 0
                ? matchingDescriptions
                : entry.description.slice(0, 1);
            return descriptions.map((description) => ({
              ...description,
              system: responseSystem,
            }));
          })(),
        },
      ])
  ) as Record<string, T>;
};

const filterDictionaryBySystem = <T extends SystemScopedTranslation>(
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
