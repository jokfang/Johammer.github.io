import { beforeEach, describe, expect, it, vi } from "vitest";
import { generateUnitOutput, onGenerateDefinitions } from "../src/utils";
import { initialTtsOutputConfig, state } from "../src/state";
import { eNetworkRequestState } from "../src/types";
import { eGameSystemInitials } from "../src/army-forge-types";
import {
  fetchArmyListById,
  fetchCommonRulesByGameSystem,
} from "../src/services/army-forge";

vi.mock("../src/services/army-forge", () => ({
  fetchArmyListById: vi.fn(),
  fetchCommonRulesByGameSystem: vi.fn(),
}));

const mockedFetchArmyListById = vi.mocked(fetchArmyListById);
const mockedFetchCommonRulesByGameSystem = vi.mocked(
  fetchCommonRulesByGameSystem
);

const makeArmyListResponse = () =>
  ({
    name: "Test Army",
    gameSystem: eGameSystemInitials.GF,
    units: [
      {
        sortId: 1,
        name: "1x Tough Unit",
        size: 1,
        quality: "4",
        defense: "4",
        rules: [{ name: "Tough", key: "Tough", rating: "3" }],
        loadout: [],
        selectedUpgrades: [],
        selectionId: "sel-1",
        xp: 0,
        traits: [],
      },
    ],
    specialRules: [],
  }) as any;

const makeCommonRulesResponse = () =>
  ({
    rules: [
      {
        name: "Tough",
        description:
          "This model must take X wounds before being killed. Placeholder english.",
      },
    ],
  }) as any;

describe("army import translation flow", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    localStorage.clear();

    state.armyListShareLink = "";
    state.shareableLinkForTTS = undefined;
    state.gameSystem = undefined;
    state.listName = undefined;
    state.armySpecialRulesDict = [];
    state.coreSpecialRulesDict = [];
    state.armySpecialRulesDictNames = [];
    state.unitProfiles = [];
    state.ttsOutputConfig = { ...initialTtsOutputConfig };
    state.networkState.fetchArmyFromArmyForge = eNetworkRequestState.IDLE;
    state.networkState.saveArmyListAsBBToDB = eNetworkRequestState.IDLE;
  });

  it("keeps original rule keys in imported profiles (no premature translation)", async () => {
    mockedFetchArmyListById.mockResolvedValue(makeArmyListResponse());
    mockedFetchCommonRulesByGameSystem.mockResolvedValue(
      makeCommonRulesResponse()
    );

    await onGenerateDefinitions({
      armyListShareLink: "https://army-forge.onepagerules.com/?id=test-list-id",
    } as any);

    expect(state.unitProfiles).toHaveLength(1);
    expect(state.unitProfiles[0].models[0].originalSpecialRules[0].name).toBe(
      "Tough"
    );
  });

  it("does not emit missing-rule placeholder when translating Tough in french", async () => {
    mockedFetchArmyListById.mockResolvedValue(makeArmyListResponse());
    mockedFetchCommonRulesByGameSystem.mockResolvedValue(
      makeCommonRulesResponse()
    );
    localStorage.setItem(
      "tombolaopraftotts_currentLanguage",
      JSON.stringify("fr")
    );

    await onGenerateDefinitions({
      armyListShareLink: "https://army-forge.onepagerules.com/?id=test-list-id",
    } as any);

    const unit = state.unitProfiles[0];
    const model = unit.models[0];
    const output = generateUnitOutput(unit, model, state);

    expect(output.ttsDescriptionOutput).not.toContain(
      "[[Rule description missing in Army Forge data!]]"
    );
    expect(output.ttsDescriptionOutput).toContain("doit subir X blessures");
  });
});

