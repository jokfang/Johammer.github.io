import { describe, expect, it } from "vitest";
import {
  fetchCommonRulesDictionary,
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

    expect(Object.keys(filteredRules.en)).toHaveLength(Object.keys(rules.en).length);
    expect(Object.keys(filteredSpells)).toHaveLength(Object.keys(spells.en).length);
    expect(Object.keys(getCommonRulesDictionary("G").en)).toHaveLength(0);
    expect(Object.keys(getCommonSpellTranslations("en", "unknown"))).toHaveLength(0);
  });
});
