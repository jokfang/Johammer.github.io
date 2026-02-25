import { commonRules } from '../public/locales/rules/common-rules';

type RuleTranslations = {
  [key: string]: string;
};

const translations: { [lang: string]: RuleTranslations } = {
  en: commonRules.en,
  fr: commonRules.fr,
};

/**
 * Retourne une fonction de traduction pour les règles, spécifique à une langue.
 * @param lang La langue souhaitée (ex: "en", "fr-FR").
 * @returns Une fonction qui prend une clé de traduction (le nom de la règle en anglais) et retourne la chaîne traduite.
 */
export const getRuleTranslator = (lang: string) => {
  const langShort = lang.slice(0, 2);
  const rules = translations[langShort] || translations.en;
  const fallbackRules = translations.en;

  return (key: string): string => {
    // 1. Essayer de trouver la traduction dans la langue demandée.
    // 2. Si elle n'existe pas, essayer de trouver la traduction en anglais.
    // 3. Si toujours introuvable, retourner la clé elle-même.
    return rules[key] || fallbackRules[key] || key;
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
  if (dictionaryName !== 'common-rules') {
    return data;
  }

  const lang = getLang();
  // We don't want to translate from english to english
  if (lang === 'en') {
    return data;
  }

  const translator = getRuleTranslator(lang);

  const translatedRules = data.rules.map((rule: any) => {
    // Translate name
    const translatedName = translator(rule.name);

    // Translate description
    const descriptionKey = `${rule.name}-desc`;
    const translatedDescription = translator(descriptionKey);

    const originalDescription = rule.description || rule.definition;

    let newDescription = (translatedDescription !== descriptionKey) ? translatedDescription : originalDescription;

    if (newDescription) {
      newDescription = newDescription.replace(/(\r\n|\n|\r)/gm, " ").replace(/\s\s+/g, ' ').trim();
    }

    return {
      ...rule,
      name: translatedName,
      description: newDescription,
      definition: newDescription,
    };
  });

  //console.log(translatedRules);


  return {
    ...data,
    rules: translatedRules,
  };
};
