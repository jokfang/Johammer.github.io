import useLocalStorageState from "use-local-storage-state";
import { appDictionary } from "../public/locales/app.dictionary";
import * as _ from "lodash";
export const useAppDictionary = () => {
  const getInitialLanguage = () => {
    const browserLang = navigator.language.split("-")[0];
    if (Object.keys(appDictionary).includes(browserLang)) {
      return browserLang;
    }
    return "en";
  };

  const [currentLanguageId] = useLocalStorageState(
    "tombolaopraftotts_currentLanguage",
    {
      defaultValue: getInitialLanguage(),
    }
  );

  const dictionaries = appDictionary as Record<string, unknown>;
  const currentLanguage = dictionaries[currentLanguageId || "en"];

  const t = (key: string) => {
    const val = _.get(currentLanguage, key);
    if (val) {
      return val;
    }
    return _.get(appDictionary["en"], key) || "[[MISSING TRANSLATION]]";
  };

  return {
    currentLanguageId,
    currentLanguage,
    t,
  };
};
