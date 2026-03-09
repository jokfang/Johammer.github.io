
import { beforeEach, describe, expect, it, vi } from "vitest";
import { getOutputTextareas, runImportFlow } from "./helpers";
import {
  deleteModel,
  duplicateModel,
  initialTtsOutputConfig,
  resetStateForTesting,
  state,
  updateWeaponIncludeInName,
  updateWeaponQuantity,
} from "../../src/state";

// ... other imports

describe("army import output", () => {
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

  it("updates rule description rendering when using short core rule descriptions", async () => {
    await runImportFlow();

    state.ttsOutputConfig.useShorterVersionOfCoreSpecialRules = true;
    const outputTextareas = await getOutputTextareas();
    const outputValue = outputTextareas[0].props.value as string;

    expect(outputValue).toContain("Deploy later from reserve.");
    expect(outputValue).not.toContain(
      "May be set aside before deployment and deployed over 9\" away."
    );
  });

  it("recomputes output when weapon quantity changes", async () => {
    await runImportFlow();

    const unit = state.unitProfiles[0];
    const model = unit.models[0];
    const darkBlade = model.loadout.find((l) => l.name === "Dark Blade");
    expect(darkBlade).toBeTruthy();

    updateWeaponQuantity(unit.id, model.id, darkBlade!.id, 0);

    const outputTextareas = await getOutputTextareas();
    const outputValue = outputTextareas[0].props.value as string;

    expect(outputValue).not.toContain("Dark Blade");
    expect(outputValue).not.toContain("AP");
  });

  it("recomputes model name output when weapon include-in-name is toggled", async () => {
    await runImportFlow();

    state.ttsOutputConfig.includeWeaponsListInName = true;
    const unit = state.unitProfiles[0];
    const model = unit.models[0];
    const darkBlade = model.loadout.find((l) => l.name === "Dark Blade");
    expect(darkBlade).toBeTruthy();

    updateWeaponIncludeInName(unit.id, model.id, darkBlade!.id, true);

    const outputTextareas = await getOutputTextareas();
    const outputValue = outputTextareas[0].props.value as string;

    expect(outputValue).toContain("w/ Dark Blade");
  });

  it("supports duplicate and delete model processing in rendered output", async () => {
    await runImportFlow();

    const unit = state.unitProfiles[0];
    const model = unit.models[0];

    duplicateModel(unit.id, model.id);
    let outputTextareas = await getOutputTextareas();
    expect(outputTextareas.length).toBe(2);

    const duplicatedModel = unit.models.find((m) => m.isGenerated === false);
    expect(duplicatedModel).toBeTruthy();

    deleteModel(unit.id, duplicatedModel!.id);
    outputTextareas = await getOutputTextareas();
    expect(outputTextareas.length).toBe(1);
  });
});
