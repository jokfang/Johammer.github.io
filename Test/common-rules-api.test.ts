import { describe, expect, it } from "vitest";
import {
  fetchCommonRulesDictionary,
  getFactionData,
  getCommonRuleTranslations,
  getCommonRulesDictionary,
  getCommonSpellTranslations,
  getCommonSpellsDictionary,
  pickTranslationDescription,
} from "../src/services/common-rules-api";

describe("common-rules-api", () => {
  it("returns the dictionary content transparently", async () => {
    const rules = getCommonRulesDictionary();
    const spells = getCommonSpellsDictionary();
    const firstSpell = Object.values(spells.en)[0];

    expect(rules.en.Hero.title).toBe("Hero");
    expect(firstSpell?.title).toBeDefined();
    expect(getCommonRuleTranslations("fr-FR")).toBe(rules.fr);
    expect(getCommonSpellTranslations("es-ES")).toBe(spells.en);
    await expect(fetchCommonRulesDictionary()).resolves.toBe(rules);
  });

  it("filters entries by an exact, case-insensitive system tag", () => {
    const rules = getCommonRulesDictionary();
    const spells = getCommonSpellsDictionary();
    const filteredRules = getCommonRulesDictionary(" gf ");
    const filteredSpells = getCommonSpellTranslations("en", "AoF");

    expect(Object.keys(filteredRules.en).length).toBeGreaterThan(0);
    expect(Object.keys(filteredRules.en).length).toBeLessThan(Object.keys(rules.en).length);
    expect(Object.keys(filteredSpells).length).toBeGreaterThan(0);
    expect(Object.keys(filteredSpells).length).toBeLessThan(Object.keys(spells.en).length);
    expect(Object.keys(getCommonRulesDictionary("G").en)).toHaveLength(0);
    expect(Object.keys(getCommonSpellTranslations("en", "unknown"))).toHaveLength(0);
    expect(filteredRules.en["Hive Bond"].description[0].system).toBe("gf");
    expect(filteredSpells["Animate Spirit"].description[0].system).toBe("AoF");
    expect(
      Object.values(filteredRules.en).every((entry) =>
        entry.description.some((description) =>
          description.system
            .split("/")
            .some((tag) => tag.trim().toLowerCase() === "gf")
        )
      )
    ).toBe(true);
    expect(
      Object.values(filteredSpells).every((entry) =>
        entry.description.some((description) =>
          description.system
            .split("/")
            .some((tag) => tag.trim().toLowerCase() === "aof")
        )
      )
    ).toBe(true);
  });

  it("includes the missing AOFS translations and faction data", () => {
    const rules = getCommonRulesDictionary("AOFS");
    const spells = getCommonSpellsDictionary("AOFS");
    const factions = getFactionData("AOFS");

    expect(rules.en.Courageous.title).toBe("Courageous");
    expect(rules.fr.Courageous.title).toBe("Courageux");
    expect(spells.en["Clan Spirit"].description[0].cost).toBe(1);
    expect(spells.fr["Clan Spirit"].title).toBe("Esprit du Clan");
    expect(factions.en.some((entry) => entry.armyName === "Beastmen")).toBe(true);
    expect(factions.en.some((entry) => entry.armyName === "Brute Clans")).toBe(true);
  });

  it("keeps distinct AOFS rule and spell descriptions", () => {
    const rules = getCommonRulesDictionary("AOFS");
    const spells = getCommonSpellsDictionary("AOFS");
    const allRules = getCommonRulesDictionary();
    const allSpells = getCommonSpellsDictionary();

    const ambushAuraEn = rules.en["Ambush Aura"].description.find(
      (description) => description.system === "AOFS"
    );
    const ambushAuraFr = rules.fr["Ambush Aura"].description.find(
      (description) => description.system === "AOFS"
    );
    const surgeOfPowerEn = spells.en["Surge of Power"].description.find(
      (description) => description.system === "AOFS"
    );
    const surgeOfPowerFr = spells.fr["Surge of Power"].description.find(
      (description) => description.system === "AOFS"
    );

    expect(ambushAuraEn?.text).toContain("up to 3 friendly units");
    expect(ambushAuraFr?.text).toContain("jusqu'à 3 unités alliées");
    expect(surgeOfPowerEn?.text).toContain("up to two friendly units");
    expect(surgeOfPowerFr?.text).toContain("jusqu'à deux unités alliées");

    expect(
      Object.values(allRules.en).filter((entry) =>
        entry.description.some((description) => description.system === "AOFS")
      )
    ).toHaveLength(139);
    expect(
      Object.values(allSpells.en).filter((entry) =>
        entry.description.some((description) => description.system === "AOFS")
      )
    ).toHaveLength(217);
  });

  it("selects ambiguous AOFS spells by faction", () => {
    const spells = getCommonSpellsDictionary("AOFS");

    const kingdomBolt = pickTranslationDescription(
      spells.en["Lightning Bolt"].description,
      "AOFS",
      "Kingdom of Angels"
    );
    const wardensBolt = pickTranslationDescription(
      spells.en["Lightning Bolt"].description,
      "aofs",
      "eternal wardens"
    );
    const dragonWind = pickTranslationDescription(
      spells.en["Spirit Wind"].description,
      "AOFS",
      "Dragon Empire"
    );
    const shortlingWind = pickTranslationDescription(
      spells.en["Spirit Wind"].description,
      "AOFS",
      "Shortling Alliances"
    );
    const humanFireBall = pickTranslationDescription(
      spells.fr["Fire Ball"].description,
      "AOFS",
      "Human Empire"
    );
    const mercenaryFireBall = pickTranslationDescription(
      spells.fr["Fire Ball"].description,
      "AOFS",
      "Mercenaries"
    );
    const humanAura = pickTranslationDescription(
      spells.fr["Aura of Heroism"].description,
      "AOFS",
      "Human Empire"
    );
    const mercenaryAura = pickTranslationDescription(
      spells.fr["Aura of Heroism"].description,
      "AOFS",
      "Mercenaries"
    );

    expect(kingdomBolt?.cost).toBe(1);
    expect(kingdomBolt?.text).toContain("Deadly(3)");
    expect(wardensBolt?.cost).toBe(3);
    expect(wardensBolt?.text).toContain("Blast(3)");
    expect(dragonWind?.cost).toBe(1);
    expect(dragonWind?.text).toContain("up to two friendly units");
    expect(shortlingWind?.cost).toBe(2);
    expect(shortlingWind?.text).toContain("up to four friendly units");
    expect(humanFireBall?.text).toContain("Fissure");
    expect(mercenaryFireBall?.text).toContain("Surcharge");
    expect(humanAura?.text).toContain("Renforcement Tenir la Ligne");
    expect(mercenaryAura?.text).toContain("+1 aux jets de moral");
  });
});
