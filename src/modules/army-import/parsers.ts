import { eGameSystemInitials } from "../../army-forge-types";
import { RulesBook } from "../../services/rulesbook";

/** Maps AF game system initials to the public slug used in API routing. */
export const getUrlSlugForGameSystem = (
  gameSystemInitials: eGameSystemInitials
) => {
  return RulesBook.getGameSystemSlug(RulesBook.toGameSystemKey(gameSystemInitials));
};

/** Removes a leading quantity prefix like `3x ` from unit/model names. */
export const removeQuantityStringFromStartOfString = (str: string) => {
  if (/^\d+x /.test(str)) {
    return str.split(" ").slice(1).join(" ");
  } else {
    return str;
  }
};

/** Extracts the AF list id from a share URL and flags beta URLs. */
export const extractIdFromUrl = (url: string): [string | null, boolean] => {
  const idRegex = /id=([^&]+)/;
  const idMatch = idRegex.exec(url);
  const isBeta = url.includes("army-forge-beta.onepagerules.com");
  return [idMatch ? idMatch[1] : null, isBeta];
};

/**
 * Inserts line breaks near 54-char cadence to avoid long-line rendering issues in TTS BBCode.
 * Breaks are moved to nearest previous whitespace when possible.
 */
export const insertLineBreaksIntoString = (str: string) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += str.charAt(i);
    if ((i + 1) % 54 === 0) {
      let j = i;
      while (j >= 0 && result.charAt(j) !== " ") {
        j--;
      }
      if (j >= 0) {
        result = result.substring(0, j) + "\r\n" + result.substring(j + 1);
      }
    }
  }
  return result;
};
