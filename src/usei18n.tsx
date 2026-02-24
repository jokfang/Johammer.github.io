import useLocalStorageState from "use-local-storage-state";
import { i18n } from "./i18n";
import * as _ from "lodash";
export const usei18n = () => {
  const getInitialLanguage = () => {
    const browserLang = navigator.language.split("-")[0];
    if (Object.keys(i18n).includes(browserLang)) {
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

  //   @ts-ignore
  const currentLanguage = i18n[currentLanguageId];

  const t = (key: string) => {
    const val = _.get(currentLanguage, key);
    if (val) {
      return val;
    }
    return _.get(i18n["en"], key) || "[[MISSING TRANSLATION]]";
  };

  return {
    currentLanguageId,
    currentLanguage,
    t,
  };
};
