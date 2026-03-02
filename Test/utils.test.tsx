import { describe, it, expect } from "vitest";
import {
  // parseString,
  getUrlSlugForGameSystem,
  removeQuantityStringFromStartOfString,
  extractIdFromUrl,
  insertLineBreaksIntoString,
  isUnitHero,
  generateOriginalLoadoutCsvHelperString,
  getModelNameForOutput,
  getUnitNameForSavedShareableOutput,
  generateUnitOutput,
} from "../src/utils";
import * as ArmyForgeTypes from "../src/army-forge-types";
import { eGameSystemInitials } from "../src/army-forge-types";
import { iAppState, iUnitProfile, iUnitProfileModel } from "../src/types";

// describe("parseString", () => {
//   it("should parse a simple string with one key-value pair", () => {
//     const input = "Rending (Attacks of 6 cause 2 extra Hits)";
//     const expected = { Rending: "(Attacks of 6 cause 2 extra Hits)" };
//     expect(parseString(input)).toEqual(expected);
//   });

//   it("should parse a string with multiple key-value pairs", () => {
//     const input = "Blast(3), Indirect, AP(1)";
//     const expected = {
//       Blast: "(3)",
//       Indirect: "",
//       AP: "(1)",
//     };
//     expect(parseString(input)).toEqual(expected);
//   });

//   it("should handle nested parentheses", () => {
//     const input =
//       "Wizard(Master (can cast 2 spells, and unbind 2 spells per round))";
//     const expected = {
//       Wizard: "(Master (can cast 2 spells, and unbind 2 spells per round))",
//     };
//     expect(parseString(input)).toEqual(expected);
//   });

//   it("should handle an empty string", () => {
//     const input = "";
//     const expected = {};
//     expect(parseString(input)).toEqual(expected);
//   });

//   it("should handle a string with no parentheses", () => {
//     const input = "Rule1, Rule2, Rule3";
//     const expected = { Rule1: "", Rule2: "", Rule3: "" };
//     expect(parseString(input)).toEqual(expected);
//   });
// });

describe("getUrlSlugForGameSystem", () => {
  it("should return the correct slug for each game system", () => {
    expect(getUrlSlugForGameSystem(eGameSystemInitials.GF)).toBe(
      "grimdark-future"
    );
    expect(getUrlSlugForGameSystem(eGameSystemInitials.GFF)).toBe(
      "grimdark-future-firefight"
    );
    expect(getUrlSlugForGameSystem(eGameSystemInitials.AOF)).toBe(
      "age-of-fantasy"
    );
    expect(getUrlSlugForGameSystem(eGameSystemInitials.AOFS)).toBe(
      "age-of-fantasy-skirmish"
    );
    expect(getUrlSlugForGameSystem(eGameSystemInitials.AOFR)).toBe(
      "age-of-fantasy-regiments"
    );
  });
});

describe("removeQuantityStringFromStartOfString", () => {
  it("should remove the quantity string from the start of the string", () => {
    expect(removeQuantityStringFromStartOfString("3x Model")).toBe("Model");
    expect(removeQuantityStringFromStartOfString("10x Model")).toBe("Model");
  });

  it("should not modify the string if it does not start with a quantity string", () => {
    expect(removeQuantityStringFromStartOfString("Model")).toBe("Model");
    expect(removeQuantityStringFromStartOfString("Model 3x")).toBe("Model 3x");
  });
});

describe("extractIdFromUrl", () => {
  it("should extract the id and beta status from a beta url", () => {
    const url =
      "https://army-forge-beta.onepagerules.com/army-books/view?id=e2a1259e-a8ac-489e-8224-6436f1cec4ac";
    const [id, isBeta] = extractIdFromUrl(url);
    expect(id).toBe("e2a1259e-a8ac-489e-8224-6436f1cec4ac");
    expect(isBeta).toBe(true);
  });

  it("should extract the id and beta status from a production url", () => {
    const url =
      "https://army-forge.onepagerules.com/army-books/view?id=e2a1259e-a8ac-489e-8224-6436f1cec4ac";
    const [id, isBeta] = extractIdFromUrl(url);
    expect(id).toBe("e2a1259e-a8ac-489e-8224-6436f1cec4ac");
    expect(isBeta).toBe(false);
  });

  it("should return null for id if not found", () => {
    const url = "https://army-forge.onepagerules.com/army-books/view/share";
    const [id, isBeta] = extractIdFromUrl(url);
    expect(id).toBe(null);
    expect(isBeta).toBe(false);
  });
});

describe("insertLineBreaksIntoString", () => {
  it("should insert line breaks at the correct positions", () => {
    const longString =
      "This is a very long string that should be broken into multiple lines for better readability in some contexts.";
    const expectedString =
      "This is a very long string that should be broken into\r\nmultiple lines for better readability in some\r\ncontexts.";
    expect(insertLineBreaksIntoString(longString).split("\r\n")).toEqual(expectedString.split("\r\n"));
  });
});

describe("isUnitHero", () => {
  it("should return true if the unit has the hero special rule", () => {
    const unit = {
      models: [
        {
          originalSpecialRules: [{ key: "hero" }],
        },
      ],
    } as iUnitProfile;
    expect(isUnitHero(unit)).toBe(true);
  });

  it("should return false if the unit does not have the hero special rule", () => {
    const unit = {
      models: [
        {
          originalSpecialRules: [{ key: "not-hero" }],
        },
      ],
    } as iUnitProfile;
    expect(isUnitHero(unit)).toBe(false);
  });
});

describe("generateOriginalLoadoutCsvHelperString", () => {
  it("should generate a CSV string of the loadout", () => {
    const unit = {
      loadout: [
        { count: 1, name: "Rifle" },
        { count: 2, name: "Pistol" },
      ],
      selectedUpgrades: [
        {
          option: {
            label: "Veteran",
            gains: [{ type: "ArmyBookRule" }],
          },
        },
      ],
    } as unknown as ArmyForgeTypes.ISelectedUnit;
    expect(generateOriginalLoadoutCsvHelperString(unit)).toBe(
      "1x Rifle, 2x Pistol, 1x Veteran"
    );
  });
});

describe("getModelNameForOutput", () => {
  const ttsOutputConfig = {
    swapCustomNameBracketingForUnitsWithMultipleModels: false,
    completelyReplaceNameWithCustomName: false,
  } as iAppState["ttsOutputConfig"];

  const model = { name: "Model" } as iUnitProfileModel;

  it("should return the original name if no custom name is provided", () => {
    const unit = {
      originalName: "Original Unit",
      originalModelCountInUnit: 1,
    } as iUnitProfile;
    expect(getModelNameForOutput(unit, model, ttsOutputConfig)).toBe(
      "Original Unit"
    );
  });

  it("should use custom name when provided", () => {
    const unit = {
      originalName: "Original Unit",
      customName: "Custom Unit",
      originalModelCountInUnit: 1,
    } as iUnitProfile;
    expect(getModelNameForOutput(unit, model, ttsOutputConfig)).toBe(
      "Custom Unit (Model)"
    );
  });

  it("should completely replace name with custom name if configured", () => {
    const unit = {
      originalName: "Original Unit",
      customNameSingular: "Custom Singular",
      originalModelCountInUnit: 1,
    } as iUnitProfile;
    const config = {
      ...ttsOutputConfig,
      completelyReplaceNameWithCustomName: true,
    };
    expect(getModelNameForOutput(unit, model, config)).toBe("Custom Singular");
  });

  it("should swap custom name bracketing for units with multiple models", () => {
    const unit = {
      originalName: "Original Unit",
      customName: "Custom Unit",
      originalModelCountInUnit: 5,
    } as iUnitProfile;
    const config = {
      ...ttsOutputConfig,
      swapCustomNameBracketingForUnitsWithMultipleModels: true,
    };
    expect(getModelNameForOutput(unit, model, config)).toBe(
      "Model (Custom Unit)"
    );
  });
});

describe("getUnitNameForSavedShareableOutput", () => {
  it("should stop recursion when joined units form a cycle", () => {
    const unitA = {
      id: "a",
      originalName: "Unit A",
      originalUnit: {} as ArmyForgeTypes.ISelectedUnit,
      originalModelCountInUnit: 1,
      originalSelectionId: "A",
      originalJoinToUnit: "B",
      originalLoadoutCsvHelperString: "",
      models: [{ originalSpecialRules: [{ key: "hero" }] }],
    } as unknown as iUnitProfile;

    const unitB = {
      id: "b",
      originalName: "Unit B",
      originalUnit: {} as ArmyForgeTypes.ISelectedUnit,
      originalModelCountInUnit: 1,
      originalSelectionId: "B",
      originalJoinToUnit: "A",
      originalLoadoutCsvHelperString: "",
      models: [{ originalSpecialRules: [{ key: "hero" }] }],
    } as unknown as iUnitProfile;

    const stateView = {
      unitProfiles: [unitA, unitB],
    } as iAppState;

    const result = getUnitNameForSavedShareableOutput(unitA, stateView);
    expect(result).toContain("[[Cycle detected]]");
  });
});

describe("generateUnitOutput", () => {
  it("should normalize smart quotes and apostrophes in output fields", () => {
    const model = {
      id: "m1",
      name: "Model",
      originalName: "Model",
      qua: 4,
      def: 4,
      isGenerated: true,
      originalSpecialRules: [{ name: "Curse", key: "curse" }],
      xp: 0,
      traits: [],
      loadout: [
        {
          id: "l1",
          name: `Scout\u2019s "Rifle"`,
          definition: "(A1)",
          quantity: 1,
          includeInName: false,
          originalLoadout: {
            name: `Scout\u2019s "Rifle"`,
            label: "(A1)",
            count: 1,
            originalCount: 1,
            type: "ArmyBookWeapon",
            attacks: 1,
            specialRules: [],
          } as ArmyForgeTypes.IUpgradeGains,
        },
      ],
    } as iUnitProfileModel;

    const unit = {
      id: "u1",
      originalName: "Unit",
      originalUnit: {} as ArmyForgeTypes.ISelectedUnit,
      originalModelCountInUnit: 1,
      originalSelectionId: "u1",
      originalLoadoutCsvHelperString: "",
      models: [model],
    } as unknown as iUnitProfile;

    const stateView = {
      armyListShareLink: "",
      armySpecialRulesDict: [
        {
          name: "Curse",
          description: "L\u2019ombre \u201Cvive\u201D",
        },
      ],
      armySpecialRulesDictNames: [],
      coreSpecialRulesDict: [],
      unitProfiles: [unit],
      ttsOutputConfig: {
        includeCoreSpecialRules: true,
        includeArmySpecialRules: true,
        useShorterVersionOfCoreSpecialRules: false,
        includeFullArmySpecialRulesText: true,
        includeFullCoreSpecialRulesText: true,
        completelyReplaceNameWithCustomName: false,
        swapCustomNameBracketingForUnitsWithMultipleModels: false,
        includeWeaponsListInName: false,
        includeSpecialRulesListInName: false,
        includeToughSpecialRuleRatingInName: false,
        disableSmallText: false,
        includeCampaignXp: false,
        includeCampaignTraits: false,
        includeCampaignTraitsFullText: false,
        modelWeaponOutputColour: "#ffffff",
        modelSpecialRulesOutputColour: "#ffffff",
        modelQuaOutputColour: "#ffffff",
        modelDefOutputColour: "#ffffff",
        modelToughOutputColour: "#ffffff",
        modelCampaignStuffOutputColour: "#ffffff",
      },
      networkState: {
        fetchArmyFromArmyForge: "IDLE",
        saveArmyListAsBBToDB: "IDLE",
      },
    } as unknown as iAppState;

    const result = generateUnitOutput(unit, model, stateView);

    expect(result.loadoutCSV).toContain("Scout's ''Rifle''");
    expect(result.ttsDescriptionOutput).toContain("L'ombre ''vive''");
  });
});
