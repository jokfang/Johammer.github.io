import { describe, expect, it } from "vitest";
import {
  fetchCommonRulesDictionary,
  getFactionData,
  getCommonRuleTranslations,
  getCommonRulesDictionary,
  getCommonSpellTranslations,
  getCommonSpellsDictionary,
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
});
