import * as _ from "lodash";
import { nanoid } from "nanoid";
import { TranslateRules } from "../../common-rules";
import { iAppState, iUnitProfile, iUnitProfileModel, iUnitProfileModelTTSOutput } from "../../types";
import { getModelNameForOutput } from "./naming";
import { insertLineBreaksIntoString } from "./parsers";
import {
  getLoadoutContent,
  getNestedSpecialRules,
  type iLoadoutWithContent,
} from "./loadout";

type iResolvedSpecialRule = {
  id: string;
  name: string;
  definition: string;
  rating?: string | number;
  shouldHaveRatingInMainOutput?: boolean;
};

/** Applies user config toggles to decide whether a special rule should appear in output. */
const shouldIncludeSpecialRule = (
  ruleName: string,
  stateView: Readonly<iAppState>
) => {
  const isCoreSpecialRule = stateView.coreSpecialRulesDict.some(
    (csr) => csr.name === ruleName
  );
  if (!stateView.ttsOutputConfig.includeArmySpecialRules && !isCoreSpecialRule) {
    return false;
  }
  if (!stateView.ttsOutputConfig.includeCoreSpecialRules && isCoreSpecialRule) {
    return false;
  }
  return true;
};

/** Resolves a special rule description from dictionaries with fallback handling. */
const getSpecialRuleDefinition = (
  ruleName: string,
  stateView: Readonly<iAppState>,
  key?: string
) => {
  let specialRule = stateView.armySpecialRulesDict.find((sr) =>
    key
      ? sr.name.toLowerCase() === key.toLowerCase()
      : sr.name.toLowerCase() === ruleName.toLowerCase()
  );
  if (!specialRule) {
    specialRule = stateView.armySpecialRulesDict.find(
      (sr) => sr.name.toLowerCase() === ruleName.toLowerCase()
    );
  }

  if (
    stateView.ttsOutputConfig.useShorterVersionOfCoreSpecialRules &&
    specialRule?.shortDescription
  ) {
    return (
      specialRule.shortDescription ||
      "[[Rule short description missing in Army Forge data!]]"
    );
  }
  return (
    specialRule?.description || "[[Rule description missing in Army Forge data!]]"
  );
};

const normalizeQuotesForTTS = (value: string) => {
  return value
    .replace(/\u2019/g, "'")
    .replace(/[\u201C\u201D]/g, "''")
    .replace(/["]/g, "''");
};

/** Parses "Name(value), Name(value)" definitions while preserving commas inside parentheses. */
function parseString(str: string) {
  const result: Record<string, string> = {};
  let current = "";
  let level = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char === "(") {
      level++;
    } else if (char === ")") {
      level--;
    } else if (char === "," && level === 0) {
      const key = current.split("(")[0].trim();
      const value = current.substring(current.indexOf("(")).trim();
      result[key] = value;
      current = "";
      continue;
    }

    current += char;
  }

  if (current.trim()) {
    const key = current.split("(")[0].trim();
    const value = current.substring(current.indexOf("(")).trim();
    result[key] = value;
  }

  return result;
}

/**
 * Converts one model profile into TTS name/description BBCode plus helper values.
 * This function centralizes loadout rendering, rule resolution, filtering, and rating aggregation.
 */
export const generateUnitOutput = (
  unit: iUnitProfile,
  model: iUnitProfileModel,
  stateView: Readonly<iAppState>
): iUnitProfileModelTTSOutput => {
  const TTS_WEAPON_COLOUR =
    stateView.ttsOutputConfig.modelWeaponOutputColour.replace("#", "");
  const TTS_SPECIAL_RULES_COLOUR =
    stateView.ttsOutputConfig.modelSpecialRulesOutputColour.replace("#", "");
  const TTS_QUA_COLOUR = stateView.ttsOutputConfig.modelQuaOutputColour.replace(
    "#",
    ""
  );
  const TTS_DEF_COLOUR = stateView.ttsOutputConfig.modelDefOutputColour.replace(
    "#",
    ""
  );
  const equippedLoadoutItems = model.loadout.filter((w) => w.quantity > 0);

  let modelNameString = `[b]${getModelNameForOutput(
    unit,
    model,
    stateView.ttsOutputConfig
  )}[/b]`;
  let modelNamePlainWithLoudoutString = getModelNameForOutput(
    unit,
    model,
    stateView.ttsOutputConfig
  );
  let totalToughRating = 0;
  let totalCasterRating = 0;
  const totalExtraDefense = 0;

  const loadoutNames = equippedLoadoutItems
    .filter((l) => l.includeInName)
    .map((l) => (l.quantity > 1 ? `${l.quantity}x ${l.name}` : l.name));
  if (loadoutNames.length >= 1) {
    modelNameString += ` w/ ${loadoutNames.join(", ")}`;
    modelNamePlainWithLoudoutString += ` w/ ${loadoutNames.join(", ")}`;
  }

  const modelSpecialRules = [
    ...model.originalSpecialRules,
    ...model.loadout
      .filter((l) => l.originalLoadout.type === "ArmyBookItem")
      .map((l) => [
        ...getLoadoutContent(l.originalLoadout),
        ...getNestedSpecialRules(l.originalLoadout),
      ])
      .flat(),
  ]
    .map((sr: iLoadoutWithContent) =>
      sr.rating ? `${sr.name}(${sr.rating})` : sr.name
    )
    .join(", ");

  const specialRulesFromLoadoutRaw = [
    ...equippedLoadoutItems.map((l) => l.originalLoadout.specialRules || []),
    ...equippedLoadoutItems
      .map((l) => getLoadoutContent(l.originalLoadout))
      .flat()
      .filter((c) => c.type === "ArmyBookRule" || c.type === "ArmyBookDefense")
      .map((c) => ({ ...c, shouldHaveRatingInMainOutput: true })),
    ...equippedLoadoutItems
      .map((l) => getLoadoutContent(l.originalLoadout))
      .flat()
      .map(
        (c) =>
          ((c as iLoadoutWithContent).specialRules || []) as iLoadoutWithContent[]
      )
      .flat()
      .filter((sr) => sr.type === "ArmyBookRule"),
    ...equippedLoadoutItems
      .map((l) => [...getNestedSpecialRules(l.originalLoadout)])
      .flat(),
  ];

  const activeSpecialRulesFromLoadout = _.uniqBy(
    specialRulesFromLoadoutRaw.flat(2) as iLoadoutWithContent[],
    (x) => x.key || x.name
  ).map((x: iLoadoutWithContent) => {
    if (!shouldIncludeSpecialRule(x.name, stateView)) {
      return null;
    }
    const definition = getSpecialRuleDefinition(x.name, stateView, x.key);
    return {
      id: nanoid(),
      name: `${x.name}`,
      definition,
      rating: x.rating,
      shouldHaveRatingInMainOutput: x.shouldHaveRatingInMainOutput,
    };
  }) as Array<iResolvedSpecialRule | null>;

  const activeSpecialRulesFromNotLoadout = _.uniqBy(
    unit.models
      .map((m) => (m.originalSpecialRules || []) as iLoadoutWithContent[])
      .flat(),
    (x) => x.key || x.name
  ).map((x: iLoadoutWithContent) => {
    if (!shouldIncludeSpecialRule(x.name, stateView)) {
      return null;
    }
    const definition = getSpecialRuleDefinition(x.name, stateView);
    return {
      id: nanoid(),
      name: `${x.name}`,
      definition,
      rating: x.rating,
      shouldHaveRatingInMainOutput: true,
    };
  }) as Array<iResolvedSpecialRule | null>;

  const activeWeaponNamesCommaSeparated = equippedLoadoutItems
    .map((x) => (x.quantity > 1 ? `${x.quantity}x ${x.name}` : `${x.name}`))
    .join(", ");

  let fallbackDefinitionData: Record<string, string> = {};
  const activeWeaponsList = _.flattenDeep([
    ...equippedLoadoutItems.filter(
      (l) => l.originalLoadout.type === "ArmyBookWeapon"
    ),
    ...equippedLoadoutItems
      .map((l) => {
        fallbackDefinitionData = {
          ...fallbackDefinitionData,
          ...parseString(l.definition.slice(1, -1)),
        };
        return getLoadoutContent(l.originalLoadout);
      })
      .flat()
      .filter((c) => c.type === "ArmyBookWeapon")
      .map((ci) => {
        const weapon = ci as iLoadoutWithContent;
        let label = weapon.label;
        let quantity = weapon.count;
        if (quantity == null) {
          label = fallbackDefinitionData[weapon.name];
          quantity = 1;
        }
        if (label == null) {
          label = `[[Weapon definition missing in Army Forge data]]`;
        }
        return {
          name: weapon.name,
          definition: label,
          quantity: quantity,
        };
      }),
  ])
    .map((w) => {
      if (w.quantity > 1) {
        return `[${TTS_WEAPON_COLOUR}]${w.quantity}x ${w.name}[-]
[sup]${w.definition}[/sup]`;
      } else {
        return `[${TTS_WEAPON_COLOUR}]${w.name}[-]
[sup]${w.definition}[/sup]`;
      }
    })
    .join("\r\n");

  const allApplicableSpecialRules = _.sortBy(
    [...activeSpecialRulesFromLoadout, ...activeSpecialRulesFromNotLoadout],
    "name"
  );
  const allApplicableSpecialRulesWithAddedUpRatings: iResolvedSpecialRule[] = [];
  allApplicableSpecialRules.forEach((sr) => {
    if (sr === null) {
      return;
    }
    const parsedRating = parseInt(`${sr.rating ?? ""}`);
    sr.rating = Number.isNaN(parsedRating) ? undefined : parsedRating;
    const existing = allApplicableSpecialRulesWithAddedUpRatings.find(
      (x) => x.name === sr.name
    );
    if (existing) {
      if (typeof existing.rating === "number" && typeof sr.rating === "number") {
        existing.rating += sr.rating;
      }
    } else {
      allApplicableSpecialRulesWithAddedUpRatings.push(sr);
    }
  });

  const translatedRules = TranslateRules("common-rules", {
    rules: allApplicableSpecialRulesWithAddedUpRatings,
    gameSystem: stateView.gameSystem,
  }).rules;

  const allApplicableSpecialRulesBBCode = translatedRules
    .map((w: iResolvedSpecialRule | null) => {
      if (w === null) {
        return "";
      }
      const isCoreSpecialRule = stateView.coreSpecialRulesDict.some(
        (csr) => csr.name === w.name
      );
      let name = w.name;
      if (w.rating && w.rating !== "" && w.shouldHaveRatingInMainOutput) {
        name += ` (${w.rating})`;
      }
      if (isCoreSpecialRule) {
        if (stateView.ttsOutputConfig.includeFullCoreSpecialRulesText) {
          return `[${TTS_SPECIAL_RULES_COLOUR}]${name}[-]
[sup]${insertLineBreaksIntoString(w.definition)}[/sup]`;
        } else {
          return `[${TTS_SPECIAL_RULES_COLOUR}]${name}[-]`;
        }
      } else {
        if (stateView.ttsOutputConfig.includeFullArmySpecialRulesText) {
          return `[${TTS_SPECIAL_RULES_COLOUR}]${name}[-]
[sup]${insertLineBreaksIntoString(w.definition)}[/sup]`;
        } else {
          return `[${TTS_SPECIAL_RULES_COLOUR}]${name}[-]`;
        }
      }
    })
    .filter((x: string) => x !== "")
    .join("\r\n");

  translatedRules.forEach((sr: iResolvedSpecialRule | null) => {
    if (sr === null) {
      return;
    }
    if (sr.name === "Tough") {
      totalToughRating += Number(sr.rating ?? 0);
    }
    if (sr.name === "Caster") {
      totalCasterRating += Number(sr.rating ?? 0);
    }
  });

  let nameLines = [
    `${modelNameString}`,
    `[${TTS_QUA_COLOUR}][b]Q${model.qua}[/b]+[-] / [${TTS_DEF_COLOUR}][b]D${
      model.def + totalExtraDefense
    }[/b]+[-]`,
    stateView.ttsOutputConfig.includeWeaponsListInName
      ? `[sup][${TTS_WEAPON_COLOUR}]${activeWeaponNamesCommaSeparated}[-][/sup]`
      : "",
    stateView.ttsOutputConfig.includeSpecialRulesListInName
      ? `[sup][${TTS_SPECIAL_RULES_COLOUR}]${modelSpecialRules}[-][/sup]`
      : "",
  ].filter((x) => x !== "");

  let descriptionFieldLines: string[] = [
    `${activeWeaponsList}`,
    `${allApplicableSpecialRulesBBCode}`,
  ];

  if (stateView.ttsOutputConfig.disableSmallText) {
    nameLines = nameLines.map((n) =>
      n.replace(/\[sup\]/g, "").replace(/\[\/sup\]/g, "")
    );
    descriptionFieldLines = descriptionFieldLines.map((n) =>
      n.replace(/\[sup\]/g, "").replace(/\[\/sup\]/g, "")
    );
  }

  return {
    name: `${modelNamePlainWithLoudoutString}`,
    loadoutCSV: normalizeQuotesForTTS(activeWeaponNamesCommaSeparated),
    ttsNameOutput: nameLines.filter((x) => x !== "").join("\r\n"),
    ttsDescriptionOutput: normalizeQuotesForTTS(
      descriptionFieldLines.filter((x) => x !== "").join("\r\n")
    ),
    originalToughValue: totalToughRating,
    originalCasterValue: totalCasterRating,
  };
};
