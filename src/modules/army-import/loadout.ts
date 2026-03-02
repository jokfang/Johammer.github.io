import pluralize from "pluralize";
import * as ArmyForgeTypes from "../../army-forge-types";

export type iLoadoutWithContent = ArmyForgeTypes.IUpgradeGains & {
  content?: ArmyForgeTypes.IUpgradeGains[];
  range?: number;
  rating?: string;
  shouldHaveRatingInMainOutput?: boolean;
};

/** Returns nested AF content for loadout entries that embed other gains. */
export const getLoadoutContent = (loadout: ArmyForgeTypes.IUpgradeGains) =>
  (loadout as iLoadoutWithContent).content || [];

/** Builds a stable identifier for deduplication across inconsistent AF payloads. */
export const getLoadoutIdentifier = (loadout: ArmyForgeTypes.IUpgradeGains) =>
  loadout.id || loadout.key || loadout.name;

/** Extracts all nested special rules from content entries. */
export const getNestedSpecialRules = (loadout: ArmyForgeTypes.IUpgradeGains) =>
  getLoadoutContent(loadout)
    .map(
      (c) =>
        ((c as iLoadoutWithContent).specialRules || []) as iLoadoutWithContent[]
    )
    .flat();

/** Builds the textual chunks used in loadout definitions (range, attacks, special rules). */
const getDefinitionChunks = (loadoutItem: iLoadoutWithContent) => {
  const chunks: string[] = [];
  if (loadoutItem.range) {
    chunks.push(`${loadoutItem.range}''`);
  }
  if (loadoutItem.attacks) {
    chunks.push(`A${loadoutItem.attacks}`);
  }
  (loadoutItem.specialRules || []).forEach((sr) => {
    let srString = `${sr.name}`;
    if ((sr as iLoadoutWithContent).rating) {
      srString += `(${(sr as iLoadoutWithContent).rating})`;
    }
    chunks.push(srString);
  });
  return chunks;
};

/** Generates a compact textual definition for one loadout item. */
export const generateLoadoutItemDefinition = (
  loadoutItem: ArmyForgeTypes.IUpgradeGains
) => {
  const loadoutItemWithContent = loadoutItem as iLoadoutWithContent;

  if (loadoutItem.type === "ArmyBookWeapon") {
    return `(${getDefinitionChunks(loadoutItemWithContent).join(", ")})`;
  }

  if (loadoutItem.type === "ArmyBookItem") {
    let label = loadoutItem.label;
    if (!label) {
      // Fallback for inconsistent AF entries that provide content but no display label.
      label = getLoadoutContent(loadoutItem).map((c) => c.name).join(", ");
      label = `(${label})`;
    }
    return label.replace(loadoutItem.name, "").trim();
  }

  return `(${getDefinitionChunks(loadoutItemWithContent).join(", ")})`;
};

/** Produces the helper CSV string used to show original loadout summary in UI. */
export const generateOriginalLoadoutCsvHelperString = (
  unit: ArmyForgeTypes.ISelectedUnit
) => {
  const baseChunks = unit.loadout.map((l) => {
    return `${l.count}x ${l.name}`;
  });
  unit.selectedUpgrades
    .filter((su) => {
      return (
        su.option.gains.length === 1 &&
        su.option.gains[0].type === "ArmyBookRule"
      );
    })
    .forEach((su) => {
      baseChunks.push(`1x ${pluralize.singular(su.option.label)}`);
    });

  return baseChunks.join(", ");
};
