
import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  greatScreecherArmyListResponse,
  greatScreecherCommonRulesEN,
  greatScreecherCommonRulesFR,
  runImportFlow,
} from "./helpers";
import { state, initialTtsOutputConfig, resetStateForTesting } from "../../src/state";
import { eNetworkRequestState } from "../../src/types";

describe("army import flow", () => {
  beforeEach(() => {
    resetStateForTesting();
    vi.clearAllMocks();
    vi.unstubAllGlobals();
    vi.stubGlobal("alert", vi.fn());
    localStorage.clear();

    vi.doMock("use-local-storage-state", () => ({
      default: () => ["en", vi.fn()],
    }));

    vi.doMock("valtio", async () => {
      const actual = await vi.importActual<typeof import("valtio")>("valtio");
      return {
        ...actual,
        useSnapshot: () => state,
      };
    });

    vi.doMock("react", async () => {
      const actual = await vi.importActual<typeof import("react")>("react");
      return {
        ...actual,
        useMemo: (factory: () => unknown) => factory(),
      };
    });

    vi.doMock("../../src/useAppDictionary", () => ({
      useAppDictionary: () => ({ t: (key: string) => key }),
    }));
  });

  it("presses importArmyAndGenerateDefinitions with the Shadow Stalkers share link", async () => {
    await runImportFlow();
  });

  it("presses importArmyAndGenerateDefinitions with browser language set to french", async () => {
    await runImportFlow({
      browserLanguage: "fr-FR",
      expectedRuleLabel: "Embuscade",
      unexpectedRuleLabel: "Ambush",
      commonRulesResponse: {
        rules: [
          {
            name: "Ambush",
            shortDescription: "Peut etre deploye plus tard depuis la reserve.",
            description:
              "Peut etre place en reserve avant le deploiement, puis deploye a plus de 9 pouces.",
          },
          {
            name: "AP",
            shortDescription: "Perforant.",
            description:
              "Les cibles subissent -X aux jets de Defense lors du blocage des touches.",
          },
        ],
      },
    });
  });

  it("keeps core and army special rules dictionaries in sync after a successful import", async () => {
    await runImportFlow({
      postAssert: () => {
        expect(state.coreSpecialRulesDict.map((r) => r.name)).toEqual(
          expect.arrayContaining(["Ambush", "AP"])
        );
        expect(state.armySpecialRulesDict.map((r) => r.name)).toEqual(
          expect.arrayContaining(["Ambush", "AP", "Shadow Veil"])
        );
      },
    });
  });

  it("presses importArmyAndGenerateDefinitions with the Great Screecher share link", async () => {
    await runImportFlow({
      expectedUnitName: "Great Screecher",
      expectedDefenseLabel: "D5",
      expectedWeaponName: "Dual Hand Weapon",
      expectedRuleLabel: "Fear",
      expectedSecondaryRuleLabel: "Shadowborn",
      expectedRuleLabels: [
        "Fear",
        "Caster",
        "Ethereal",
        "Tough",
        "Shadowborn",
        "Resistance",
        "Shadowborn Boost",
      ],
      expectAP: false,
      armyListResponse: greatScreecherArmyListResponse,
      commonRulesResponse: greatScreecherCommonRulesEN,
    });
  });

  it("presses importArmyAndGenerateDefinitions with Great Screecher and browser language set to french", async () => {
    await runImportFlow({
      browserLanguage: "fr-FR",
      expectedUnitName: "Great Screecher",
      expectedDefenseLabel: "D5",
      expectedWeaponName: "Dual Hand Weapon",
      expectedRuleLabel: "Peur",
      expectedSecondaryRuleLabel: "Shadowborn",
      unexpectedRuleLabel: "Fear",
      expectedRuleLabels: [
        "Peur",
        "Lanceur de sorts",
        "Ethere",
        "Robuste",
        "Shadowborn",
        "Resistance",
        "Amplification Shadowborn",
      ],
      unexpectedRuleLabels: ["Tough", "Ethereal", "Caster"],
      expectAP: false,
      armyListResponse: greatScreecherArmyListResponse,
      commonRulesResponse: greatScreecherCommonRulesFR,
      postAssert: () => {
        const loadoutNames = state.unitProfiles[0].models[0].loadout.map(
          (l) => l.name
        );
        expect(
          loadoutNames.filter((n) => n.toLowerCase().includes("scourging"))
            .length
        ).toBe(1);
      },
    });
  });
});
