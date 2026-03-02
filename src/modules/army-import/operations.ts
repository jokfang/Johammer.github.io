import * as _ from "lodash";
import ky from "ky";
import pluralize from "pluralize";
import { nanoid } from "nanoid";
import * as ArmyForgeTypes from "../../army-forge-types";
import {
  eNetworkRequestState,
  iAppState,
  iTotalShareableOutput,
  iUnitProfile,
  iUnitProfileModelTTSOutput,
} from "../../types";
import { state } from "../../state";
import { type CommonRule } from "../../services/rulesbook";
import {
  fetchArmyListById,
  fetchCommonRulesByGameSystem,
} from "../../services/army-forge";
import { extractIdFromUrl, removeQuantityStringFromStartOfString } from "./parsers";
import {
  generateLoadoutItemDefinition,
  generateOriginalLoadoutCsvHelperString,
  getLoadoutIdentifier,
} from "./loadout";
import { generateUnitOutput } from "./output";
import { getUnitNameForSavedShareableOutput } from "./naming";

type iSaveListResponse = { listId: string };

/**
 * Imports the AF list, fetches common rules, and materializes editable unit profiles in app state.
 * This is the main "import + prepare" workflow used by the homepage.
 */
export const onGenerateDefinitions = async (stateView: Readonly<iAppState>) => {
  state.networkState.fetchArmyFromArmyForge = eNetworkRequestState.PENDING;
  state.unitProfiles = [];
  const [id, isBeta] = extractIdFromUrl(stateView.armyListShareLink);
  let data:
    | (ArmyForgeTypes.ListState & {
        error?: string;
        specialRules?: CommonRule[];
      })
    | undefined = undefined;
  let relevantCoreSpecialRules: CommonRule[];

  if (!id) {
    alert(
      "Could not find an Army Forge army ID. Please double check your Army Forge share link and try again."
    );
    state.networkState.fetchArmyFromArmyForge = eNetworkRequestState.IDLE;
    return;
  }

  try {
    data = await fetchArmyListById(id, isBeta);
    const commonRulesData = await fetchCommonRulesByGameSystem(data.gameSystem);

    state.listName = data.name;
    relevantCoreSpecialRules = [...commonRulesData.rules];
    state.gameSystem = data.gameSystem;
    state.coreSpecialRulesDict = relevantCoreSpecialRules;
    state.networkState.fetchArmyFromArmyForge = eNetworkRequestState.SUCCESS;
  } catch (e) {
    console.error(e);
    alert(
      "There was an error fetching the army list. Please check you have a valid share link and try again. More details may be in the developer console (F12)."
    );
    state.networkState.fetchArmyFromArmyForge = eNetworkRequestState.ERROR;
  }

  if (!data) {
    return;
  }
  state.armySpecialRulesDict = [
    ...state.coreSpecialRulesDict,
    ...(data.specialRules || []).map((sr) => ({ ...sr })),
  ];

  const unitProfiles: iUnitProfile[] = _.sortBy(data.units, ["sortId"]).map(
    (unit) => {
      const unitProfile: iUnitProfile = {
        id: nanoid(),
        originalName: unit.name,
        originalModelCountInUnit: unit.size,
        customName: unit.customName,
        originalSelectionId: unit.selectionId,
        originalJoinToUnit: unit.joinToUnit,
        originalLoadoutCsvHelperString:
          generateOriginalLoadoutCsvHelperString(unit),
        customNameSingular: unit.customName
          ? pluralize.singular(unit.customName)
          : undefined,
        originalUnit: unit,
        models: [
          {
            id: nanoid(),
            isGenerated: true,
            xp: unit.xp || 0,
            traits: unit.traits || [],
            name: pluralize.singular(
              removeQuantityStringFromStartOfString(unit.name).trim()
            ),
            originalName: unit.name,
            qua: parseInt(unit.quality),
            def: parseInt(unit.defense),
            originalSpecialRules: (unit.rules || []).map((rule) => ({
              ...rule,
            })),
            loadout: _.uniqBy(unit.loadout, "label").map((loadoutItem) => ({
              id: nanoid(),
              includeInName: false,
              name: pluralize.singular(loadoutItem.name),
              definition: generateLoadoutItemDefinition(loadoutItem),
              quantity: Math.floor(Math.max(loadoutItem.count / unit.size, 1)),
              originalLoadout: loadoutItem,
            })),
          },
        ],
      };

      const identifiersAlreadyInLoadout = unitProfile.models[0].loadout
        .map((li) => getLoadoutIdentifier(li.originalLoadout))
        .flat();

      unit.selectedUpgrades.forEach((su) => {
        su.option.gains.forEach((g) => {
          if (
            identifiersAlreadyInLoadout.includes(getLoadoutIdentifier(g)) ||
            g.type === "ArmyBookWeapon"
          ) {
            return;
          }

          unitProfile.models[0].loadout.push({
            id: nanoid(),
            includeInName: false,
            name: pluralize.singular(g.label),
            definition: "",
            quantity: 1,
            originalLoadout: {
              content: su.option.gains,
            } as unknown as ArmyForgeTypes.IUpgradeGains,
          });
        });
      });

      return unitProfile;
    }
  );

  state.unitProfiles = unitProfiles;
  state.shareableLinkForTTS = undefined;
};

/** Builds the final serializable TTS payload and persists it through the save-list function. */
export const onGenerateShareableId = async (stateView: Readonly<iAppState>) => {
  state.networkState.saveArmyListAsBBToDB = eNetworkRequestState.PENDING;
  state.shareableLinkForTTS = undefined;

  const totalOutput: iTotalShareableOutput = {
    gameSystem: stateView.gameSystem || ArmyForgeTypes.eGameSystemInitials.GF,
    units: [],
    listName: state.listName || "UNDEFINED",
  };

  stateView.unitProfiles.forEach((unitProfile) => {
    const thisUnitsModelDefinitions: iUnitProfileModelTTSOutput[] = [];
    const unitId = nanoid();

    unitProfile.models.forEach((model) => {
      const {
        name,
        loadoutCSV,
        ttsNameOutput,
        ttsDescriptionOutput,
        originalCasterValue = 0,
        originalToughValue = 0,
      } = generateUnitOutput(unitProfile, model, stateView);

      thisUnitsModelDefinitions.push({
        name,
        loadoutCSV,
        ttsNameOutput,
        ttsDescriptionOutput,
        originalToughValue,
        originalCasterValue,
      });
    });

    totalOutput.units.push({
      name: getUnitNameForSavedShareableOutput(unitProfile, stateView),
      modelDefinitions: thisUnitsModelDefinitions,
      selectionId: unitProfile.originalSelectionId,
      unitId,
    });
  });

  totalOutput.units.forEach((unit) => {
    const unitProfile = stateView.unitProfiles.find(
      (up) => up.originalSelectionId === unit.selectionId
    );
    if (!unitProfile || !unitProfile.originalJoinToUnit) {
      return;
    }
    const joinedToUnit = totalOutput.units.find(
      (u) => u.selectionId === unitProfile.originalJoinToUnit
    );
    if (!joinedToUnit) {
      return;
    }
    unit.unitId = joinedToUnit.unitId;
  });

  try {
    const data = await ky
      .post("/.netlify/functions/save-list", {
        json: {
          list_json: totalOutput,
        },
      })
      .json<iSaveListResponse>();

    const { listId } = data;
    state.shareableLinkForTTS = `${window.location.href}.netlify/functions/save-list?listId=${listId}`;
    state.networkState.saveArmyListAsBBToDB = eNetworkRequestState.SUCCESS;
  } catch (e) {
    console.error(e);
    state.networkState.saveArmyListAsBBToDB = eNetworkRequestState.ERROR;
  }
};
