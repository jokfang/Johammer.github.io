import rulesEn from "../../public/locales/rules/common-rules/rules.en.json";
import rulesFr from "../../public/locales/rules/common-rules/rules.fr.json";
import rulesPl from "../../public/locales/rules/common-rules/rules.pl.json";
import spellsEn from "../../public/locales/rules/common-rules/spells.en.json";
import spellsFr from "../../public/locales/rules/common-rules/spells.fr.json";
import type {
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

export const getCommonRulesDictionary = (): RulesByLanguage =>
  commonRulesDictionary;

export const getCommonSpellsDictionary = (): SpellsByLanguage =>
  commonSpellsDictionary;

export const getCommonRuleTranslations = (
  language: string
): Record<string, RuleTranslationEntry> => {
  const normalizedLanguage = normalizeLanguage(language);
  return (
    commonRulesDictionary[normalizedLanguage] || commonRulesDictionary.en || {}
  );
};

export const getCommonSpellTranslations = (
  language: string
): Record<string, SpellTranslationEntry> => {
  const normalizedLanguage = normalizeLanguage(language);
  return (
    commonSpellsDictionary[normalizedLanguage] ||
    commonSpellsDictionary.en ||
    {}
  );
};

export const fetchCommonRulesDictionary = async (): Promise<RulesByLanguage> =>
  getCommonRulesDictionary();

export const fetchCommonSpellsDictionary = async (): Promise<SpellsByLanguage> =>
  getCommonSpellsDictionary();

export type {
  RuleTranslationEntry,
  RulesByLanguage,
  SpellTranslationEntry,
  SpellsByLanguage,
};
