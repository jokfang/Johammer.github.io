import { iAppState, iUnitProfile, iUnitProfileModel } from "../../types";

/** True when the first model carries the `hero` rule key. */
export const isUnitHero = (unit: iUnitProfile) => {
  return unit.models[0].originalSpecialRules.some((sr) => sr.key === "hero");
};

/** Returns 1-based display index of a unit by AF selection id. */
export const getUnitIndexForSelectionId = (
  selectionId: string,
  stateView: Readonly<iAppState>
) => {
  const index = stateView.unitProfiles.findIndex((u) => {
    return u.originalSelectionId === selectionId;
  });

  return index + 1;
};

/** Builds a human-readable unit name used in saved shareable payloads. */
export const getUnitNameForSavedShareableOutput = (
  unit: iUnitProfile,
  stateView: iAppState
) => {
  return getUnitNameForSavedShareableOutputInternal(unit, stateView, new Set());
};

const getUnitNameForSavedShareableOutputInternal = (
  unit: iUnitProfile,
  stateView: iAppState,
  visitedSelectionIds: Set<string>
) => {
  const nextVisited = new Set(visitedSelectionIds);
  nextVisited.add(unit.originalSelectionId);

  let name = "";
  if (unit.customName) {
    name = `${unit.customName} (${unit.originalName})`;
  } else {
    name = `${unit.originalName}`;
  }
  const armyUnitIndex = getUnitIndexForSelectionId(
    unit.originalSelectionId,
    stateView
  );
  name = `#${armyUnitIndex} ${name}`;

  const joinedTo = unit.originalJoinToUnit
    ? stateView.unitProfiles.find(
        (up) => up.originalSelectionId === unit.originalJoinToUnit
      )
    : undefined;

  if (joinedTo) {
    const joinText = isUnitHero(unit as iUnitProfile)
      ? "joined to"
      : "combined with";

    if (nextVisited.has(joinedTo.originalSelectionId)) {
      return `${name} (${joinText} [[Cycle detected]])`;
    }
    const joinedToName = getUnitNameForSavedShareableOutputInternal(
      joinedTo,
      stateView,
      nextVisited
    );

    name = `${name} (${joinText} ${joinedToName})`;
  }

  return name;
};

/** Resolves the model name text according to current naming options and custom-name settings. */
export const getModelNameForOutput = (
  unit: iUnitProfile,
  model: iUnitProfileModel,
  ttsOutputConfig: iAppState["ttsOutputConfig"]
) => {
  const {
    swapCustomNameBracketingForUnitsWithMultipleModels,
    completelyReplaceNameWithCustomName,
  } = ttsOutputConfig;

  if (completelyReplaceNameWithCustomName && unit.customNameSingular) {
    return unit.customNameSingular;
  }

  if (
    swapCustomNameBracketingForUnitsWithMultipleModels &&
    unit.originalModelCountInUnit > 1
  ) {
    if (unit.customName) {
      return `${model.name} (${unit.customName})`;
    }
    return unit.originalName;
  }
  if (unit.customName) {
    return `${unit.customName} (${model.name})`;
  }
  return unit.originalName;
};

/** Returns formatted unit display name for legend UI, preserving custom/original naming context. */
export const getUnitNameForLegend = (unit: iUnitProfile) => {
  if (unit.customName) {
    return (
      <>
        <span className="font-bold mr-1">{unit.customName}</span>
        <span>({unit.originalName})</span>
      </>
    );
  }
  return <span className="font-bold">{unit.originalName}</span>;
};
