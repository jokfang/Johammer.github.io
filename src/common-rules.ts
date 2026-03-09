import {
  commonRules,
  type RuleTranslationEntry,
} from "../public/locales/rules/common-rules.dictionary";

type RulesByLanguage = Record<string, Record<string, RuleTranslationEntry>>;
type TranslateField = "title" | "description";
type TranslateOptions = {
  field?: TranslateField;
  system?: string;
};

const translations: RulesByLanguage = commonRules;

const normalizeSystem = (value?: string) => (value || "").toLowerCase();
const stripKeyTags = (value: string) => value.replace(/<\/?key>/g, "");
const repairFrenchEncoding = (value: string) =>
  value
    .replace(/d[�?]place/g, "déplace")
    .replace(/Avanc[�?]e/g, "Avancée")
    .replace(/Pr[�?]cipitation/g, "Précipitation");

const pickDescriptionForSystem = (
  entry: RuleTranslationEntry | undefined,
  system?: string
) => {
  if (!entry || entry.description.length === 0) {
    return undefined;
  }

  const normalizedSystem = normalizeSystem(system);

  if (normalizedSystem) {
    const exact = entry.description.find(
      (d) => normalizeSystem(d.system) === normalizedSystem
    );
    if (exact?.text) {
      return exact.text;
    }
  }

  const allSystems = entry.description.find(
    (d) => normalizeSystem(d.system) === "all"
  );
  if (allSystems?.text) {
    return allSystems.text;
  }

  return entry.description[0].text;
};

/**
 * Retourne une fonction de traduction pour les règles, spécifique à une langue.
 * @param lang La langue souhaitée (ex: "en", "fr-FR").
 * @returns Une fonction qui prend une clé de traduction et retourne la chaîne traduite.
 */
export const getRuleTranslator = (lang: string) => {
  const langShort = lang.slice(0, 2);
  const rules = translations[langShort] || translations.en;
  const fallbackRules = translations.en;

  return (key: string, options?: TranslateOptions): string => {
    const field = options?.field ?? "title";
    const isLegacyDescriptionKey = key.endsWith("-desc");
    const baseKey = isLegacyDescriptionKey ? key.slice(0, -5) : key;
    const requestedField: TranslateField = isLegacyDescriptionKey
      ? "description"
      : field;

    const ruleEntry = rules[baseKey] || fallbackRules[baseKey];
    if (!ruleEntry) {
      return key;
    }

    if (requestedField === "description") {
      const desc = pickDescriptionForSystem(ruleEntry, options?.system);
      return desc || key;
    }

    return ruleEntry.title || key;
  };
};

const getLang = () => {
  const lsLang = localStorage.getItem("tombolaopraftotts_currentLanguage");
  if (lsLang) {
    try {
      const lang = JSON.parse(lsLang);
      return lang;
    } catch (e) {
      console.error("Failed to parse language from localStorage", e);
    }
  }
  const browserLang = navigator.language.split("-")[0];
  if (Object.keys(translations).includes(browserLang)) {
    return browserLang;
  }
  return "en";
};

export const TranslateRules = (dictionaryName: string, data: any) => {
  if (dictionaryName !== "common-rules") {
    return data;
  }

  const lang = getLang();
  if (lang === "en") {
    return data;
  }

  const translator = getRuleTranslator(lang);
  const dataSystem = data?.gameSystem || data?.system;

  const translatedRules = data.rules.map((rule: any) => {
    const translatedName = translator(rule.name, { field: "title" });
    const translatedDescription = translator(rule.name, {
      field: "description",
      system: rule?.system || rule?.gameSystem || dataSystem,
    });

    const originalDescription = rule.description || rule.definition;
    let newDescription =
      translatedDescription !== rule.name
        ? translatedDescription
        : originalDescription;

    if (newDescription) {
      newDescription = repairFrenchEncoding(stripKeyTags(newDescription))
        .replace(/(\r\n|\n|\r)/gm, " ")
        .replace(/\s\s+/g, " ")
        .trim();
    }

    return {
      ...rule,
      name: translatedName,
      description: newDescription,
      definition: newDescription,
    };
  });

  return {
    ...data,
    rules: translatedRules,
  };
};
