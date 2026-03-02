import got from "got";
import { RulesBook as SharedRulesBook } from "../../../shared/rulesbook";

export class RulesBook extends SharedRulesBook {
  static async fetchTtsExport(armyId: string, isBeta: boolean) {
    const url = `${RulesBook.getArmyForgeHost(isBeta)}${RulesBook.getTtsExportPath(
      armyId
    )}`;
    return got.get(url).json();
  }
}
