import ky from "ky";
import { eGameSystemInitials } from "../army-forge-types";
import {
  RulesBook as SharedRulesBook,
} from "../../shared/rulesbook";
import {
  type RuleTranslationEntry,
  getCommonRuleTranslations,
} from "./common-rules-api";

type CommonRule = {
  id: number;
  name: string;
  description: string;
  hasRating: boolean;
  shortDescription?: string;
};

type CommonRulesResponse = { rules: CommonRule[] };

const pickDescriptionForSystem = (
  entry: RuleTranslationEntry | undefined,
  system: eGameSystemInitials
) => {
  if (!entry || entry.description.length === 0) {
    return "";
  }

  const normalizedSystem = `${system}`.toLowerCase();
  const exact = entry.description.find(
    (d) => `${d.system || ""}`.toLowerCase() === normalizedSystem
  );
  if (exact?.text) {
    return exact.text;
  }

  const allSystems = entry.description.find(
    (d) => `${d.system || ""}`.toLowerCase() === "all"
  );
  if (allSystems?.text) {
    return allSystems.text;
  }

  return entry.description[0]?.text || "";
};

export class RulesBook extends SharedRulesBook {
  static async getCommonRulesForGameSystem(
    gameSystemInitials: eGameSystemInitials
  ): Promise<CommonRulesResponse> {
    const englishRules = getCommonRuleTranslations("en");

    return {
      rules: Object.entries(englishRules).map(([name, entry], index) => ({
        id: index + 1,
        name,
        description: pickDescriptionForSystem(entry, gameSystemInitials),
        hasRating: false,
      })),
    };
  }
}

export type { CommonRule, CommonRulesResponse };
