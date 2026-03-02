import { beforeEach, describe, expect, it } from "vitest";
import {
  duplicateModel,
  initialTtsOutputConfig,
  state,
  updateWeaponIncludeInName,
  updateWeaponQuantity,
  deleteModel,
} from "../src/state";

const buildStateFixture = () => {
  state.unitProfiles = [
    {
      id: "up-1",
      originalName: "Unit",
      originalModelCountInUnit: 1,
      originalSelectionId: "sel-1",
      originalLoadoutCsvHelperString: "1x Gun",
      originalUnit: {} as any,
      models: [
        {
          id: "m-1",
          isGenerated: true,
          name: "Model",
          originalName: "Model",
          qua: 4,
          def: 4,
          originalSpecialRules: [],
          xp: 0,
          traits: [],
          loadout: [
            {
              id: "w-1",
              includeInName: true,
              name: "Gun",
              definition: "AP(1)",
              quantity: 2,
              originalLoadout: { name: "Gun" } as any,
            },
          ],
        },
      ],
    },
  ] as any;
};

describe("state mutations", () => {
  beforeEach(() => {
    buildStateFixture();
    state.ttsOutputConfig = { ...initialTtsOutputConfig };
  });

  it("updates weapon quantity and unsets includeInName when quantity <= 0", () => {
    updateWeaponQuantity("up-1", "m-1", "w-1", 0);
    expect(state.unitProfiles[0].models[0].loadout[0].quantity).toBe(0);
    expect(state.unitProfiles[0].models[0].loadout[0].includeInName).toBe(
      false
    );
  });

  it("updates includeInName value", () => {
    updateWeaponIncludeInName("up-1", "m-1", "w-1", false);
    expect(state.unitProfiles[0].models[0].loadout[0].includeInName).toBe(
      false
    );
  });

  it("duplicates a model and marks the duplicate as non-generated", () => {
    duplicateModel("up-1", "m-1");
    expect(state.unitProfiles[0].models).toHaveLength(2);
    expect(state.unitProfiles[0].models[1].isGenerated).toBe(false);
    expect(state.unitProfiles[0].models[1].id).not.toBe("m-1");
  });

  it("deletes an existing model and ignores unknown model ids", () => {
    deleteModel("up-1", "m-1");
    expect(state.unitProfiles[0].models).toHaveLength(0);

    state.unitProfiles[0].models = [
      {
        id: "m-2",
      } as any,
    ];
    deleteModel("up-1", "unknown");
    expect(state.unitProfiles[0].models).toHaveLength(1);
    expect(state.unitProfiles[0].models[0].id).toBe("m-2");
  });

  it("no-ops when unit/model/weapon are not found", () => {
    updateWeaponQuantity("unknown", "m-1", "w-1", 5);
    updateWeaponIncludeInName("up-1", "unknown", "w-1", true);
    updateWeaponIncludeInName("up-1", "m-1", "unknown", true);
    duplicateModel("up-1", "unknown");
    deleteModel("unknown", "m-1");
    expect(true).toBe(true);
  });
});
