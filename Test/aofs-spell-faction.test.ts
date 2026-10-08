import { describe, expect, it } from "vitest";
import {
  extractArmyBookData,
  parseArmyBookUrl,
} from "../src/modules/army-book-extractor";

const extractSpell = (armyName: string, spellName: string) => {
  const parsedUrl = parseArmyBookUrl(
    "https://army-forge.onepagerules.com/army-info/age-of-fantasy-skirmish/test-book"
  );
  const source = {
    uid: `book-${armyName}`,
    name: armyName,
    gameSystemSlug: "age-of-fantasy-skirmish",
    aberration: "AOFS",
    units: [],
    upgradePackages: [],
    specialRules: [],
    spells: [{ name: spellName, effect: "upstream fallback", threshold: 1 }],
  };

  return extractArmyBookData(source as any, parsedUrl!, "fr").armySpells[0];
};

describe("AOFS faction-specific spells", () => {
  it("selects each Lightning Bolt variant from the source army name", () => {
    expect(extractSpell("Kingdom of Angels", "Lightning Bolt").description).toContain(
      "Mortel"
    );
    expect(extractSpell("Eternal Wardens", "Lightning Bolt").description).toContain(
      "Explosion"
    );
  });

  it("selects each Spirit Wind variant from the source army name", () => {
    expect(extractSpell("Dragon Empire", "Spirit Wind").description).toContain(
      "deux unités alliées"
    );
    expect(
      extractSpell("Shortling Alliances", "Spirit Wind").description
    ).toContain("quatre unités alliées");
  });
});
