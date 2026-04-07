import { describe, expect, it } from "vitest";
import {
  extractArmyBookData,
  parseArmyBookUrl,
} from "../src/modules/army-book-extractor";

const sampleArmyBook = {
  uid: "w7qor7b2kuifcyvk",
  name: "Alien Hives",
  background: "Short intro",
  backgroundFull: "Long background",
  versionString: "3.5.2",
  gameSystemSlug: "grimdark-future",
  aberration: "GF",
  units: [
    {
      id: "unit-1",
      name: "Hive Lord",
      size: 1,
      cost: 345,
      quality: 3,
      defense: 2,
      rules: [
        { name: "Hero", label: "Hero" },
        { name: "Tough", label: "Tough(12)" },
        { name: "Hive Bond", label: "Hive Bond" },
      ],
      weapons: [
        {
          name: "Shredder Cannon",
          range: 18,
          attacks: 4,
          specialRules: [{ name: "Rending", label: "Rending" }],
        },
      ],
      upgrades: ["A1"],
    },
    {
      id: "unit-2",
      name: "Prime Warrior",
      size: 1,
      cost: 80,
      quality: 4,
      defense: 4,
      rules: [
        { name: "Hero", label: "Hero" },
        { name: "Tough", label: "Tough(6)" },
        { name: "Hive Bond", label: "Hive Bond" },
      ],
      weapons: [],
      upgrades: [],
    },
    {
      id: "unit-3",
      name: "Shooter Grunts",
      size: 10,
      cost: 110,
      quality: 5,
      defense: 5,
      rules: [{ name: "Hive Bond", label: "Hive Bond" }],
      weapons: [],
      upgrades: [],
    },
  ],
  upgradePackages: [
    {
      uid: "A1",
      sections: [
        {
          id: "sec-1",
          label: "Upgrade with",
          options: [
            {
              id: "opt-1",
              label: "Wings (Ambush, Flying)",
              cost: 65,
              gains: [
                {
                  name: "Wings",
                  type: "ArmyBookItem",
                  content: [
                    { name: "Ambush", label: "Ambush", type: "ArmyBookRule" },
                    { name: "Flying", label: "Flying", type: "ArmyBookRule" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  spells: [
    {
      name: "Animate Spirit",
      effect:
        "Pick one friendly unit within 12\", which gets Hit & Run Fighter once.",
      threshold: 1,
    },
  ],
  specialRules: [
    {
      name: "Hive Bond",
      description: "Units where all models have this rule get +1 morale.",
      coreType: null,
    },
    {
      name: "Rapid Charge Aura",
      description: "This model and its unit moves +4\" when using Charge actions.",
      coreType: null,
    },
    {
      name: "AP",
      description: "Targets get -X to Defense rolls when blocking hits.",
      coreType: 1,
    },
  ],
};

describe("army book extractor", () => {
  it("parses an Army Forge army-info URL", () => {
    expect(
      parseArmyBookUrl(
        "https://army-forge.onepagerules.com/army-info/grimdark-future/w7qor7b2kuifcyvk?armyId=6qXuEKD67vPAr88D&armyName=Alien+Hives"
      )
    ).toEqual({
      bookUid: "w7qor7b2kuifcyvk",
      gameSystemSlug: "grimdark-future",
      gameSystemId: 2,
      isBeta: false,
      sourceUrl:
        "https://army-forge.onepagerules.com/army-info/grimdark-future/w7qor7b2kuifcyvk?armyId=6qXuEKD67vPAr88D&armyName=Alien+Hives",
    });
  });

  it("extracts normalized data from an army book response", () => {
    const parsed = parseArmyBookUrl(
      "https://army-forge.onepagerules.com/army-info/grimdark-future/w7qor7b2kuifcyvk?armyId=6qXuEKD67vPAr88D&armyName=Alien+Hives"
    );
    expect(parsed).not.toBeNull();

    const extracted = extractArmyBookData(
      sampleArmyBook as any,
      parsed!,
      "fr"
    );

    expect(extracted.armyName).toBe("Alien Hives");
    expect(extracted.systemCode).toBe("GF");
    expect(extracted.version).toBe("3.5.2");
    expect(extracted.armyWideSpecialRule[0]?.name).toBe("Hive Bond");
    expect(extracted.auraSpecialRules[0]?.name).toContain("Aura");
    expect(extracted.armySpells[0]?.cost).toBe(1);
    expect(extracted.units[0]?.specialRules).toContain("Coriace(12)");
    expect(extracted.units[0]?.upgrades[0]?.options[0]?.details).toContain(
      "Embuscade"
    );
  });
});
