import ky from "ky";
import type * as ArmyForgeTypes from "../army-forge-types";
import { RulesBook, type CommonRulesResponse } from "./rulesbook";

type ArmyListResponse = ArmyForgeTypes.ListState & { error?: string };

const hasApiError = (data: unknown): data is { error: string } => {
  return Boolean(
    data &&
      typeof data === "object" &&
      "error" in data &&
      typeof (data as { error?: unknown }).error === "string"
  );
};

export const fetchArmyListById = async (armyId: string, isBeta: boolean) => {
  const data = await ky
    .get(`/.netlify/functions/get-army?armyId=${armyId}&isBeta=${isBeta}`)
    .json<ArmyListResponse>();

  if (!data) {
    throw new Error("No data returned from army forge fetch.");
  }

  if (hasApiError(data)) {
    throw new Error(`Army Forge returned an error: ${data.error}`);
  }

  return data;
};

export const fetchCommonRulesByGameSystem = (
  gameSystem: ArmyForgeTypes.eGameSystemInitials
) => {
  return RulesBook.getCommonRulesForGameSystem(gameSystem);
};
