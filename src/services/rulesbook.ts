import ky from "ky";
import { eGameSystemInitials } from "../army-forge-types";
import {
  RulesBook as SharedRulesBook,
} from "../../shared/rulesbook";

type CommonRule = {
  id: number;
  name: string;
  description: string;
  hasRating: boolean;
  shortDescription?: string;
};

type CommonRulesResponse = { rules: CommonRule[] };

export class RulesBook extends SharedRulesBook {
  static async getCommonRulesForGameSystem(
    gameSystemInitials: eGameSystemInitials
  ): Promise<CommonRulesResponse> {
    const key = RulesBook.toGameSystemKey(gameSystemInitials);
    const url = `${RulesBook.getArmyForgeHost(false)}${RulesBook.getCommonRulesPath(
      key
    )}`;
    return ky.get(url).json<CommonRulesResponse>();
  }
}

export type { CommonRule, CommonRulesResponse };
