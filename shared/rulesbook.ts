export type GameSystemKey = "gf" | "gff" | "aof" | "aofs" | "aofr";

export class RulesBook {
  private static readonly COMMON_RULES_BY_SYSTEM: Record<string, number> = {
    "grimdark-future": 2,
    "grimdark-future-firefight": 3,
    "age-of-fantasy": 4,
    "age-of-fantasy-skirmish": 5,
    "age-of-fantasy-regiments": 6,
  };

  static toGameSystemKey(value: string): GameSystemKey {
    switch (value) {
      case "gf":
      case "gff":
      case "aof":
      case "aofs":
      case "aofr":
        return value;
      default:
        throw new Error(`Unsupported game system: ${value}`);
    }
  }

  static getGameSystemSlug(gameSystemInitials: GameSystemKey) {
    switch (gameSystemInitials) {
      case "gf":
        return "grimdark-future";
      case "gff":
        return "grimdark-future-firefight";
      case "aof":
        return "age-of-fantasy";
      case "aofs":
        return "age-of-fantasy-skirmish";
      case "aofr":
        return "age-of-fantasy-regiments";
    }
  }

  static getCommonRulesIdForGameSystem(gameSystemInitials: GameSystemKey) {
    const slug = RulesBook.getGameSystemSlug(gameSystemInitials);
    const commonRulesId = RulesBook.COMMON_RULES_BY_SYSTEM[slug];
    if (!commonRulesId) {
      throw new Error(`No common rules id found for game system slug: ${slug}`);
    }
    return commonRulesId;
  }

  static getCommonRulesPath(gameSystemInitials: GameSystemKey) {
    const commonRulesId =
      RulesBook.getCommonRulesIdForGameSystem(gameSystemInitials);
    return `/api/rules/common/${commonRulesId}`;
  }

  static getTtsExportPath(armyId: string) {
    return `/api/tts?id=${armyId}`;
  }

  static getArmyForgeHost(isBeta: boolean) {
    return isBeta
      ? "https://army-forge-beta.onepagerules.com"
      : "https://army-forge.onepagerules.com";
  }
}
