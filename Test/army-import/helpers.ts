
import React from "react";
import { expect, vi } from "vitest";
import { eGameSystemInitials } from "../../src/army-forge-types";
import { state } from "../../src/state";
import { eNetworkRequestState } from "../../src/types";

type AnyElement = React.ReactElement<any, any>;

export const flattenElements = (node: any): AnyElement[] => {
  if (!node || typeof node !== "object" || !("props" in node)) {
    return [];
  }
  const el = node as AnyElement;
  const children = React.Children.toArray(el.props?.children);
  return [el, ...children.flatMap((c) => flattenElements(c))];
};

export const elementIncludesText = (node: any, text: string): boolean => {
  if (typeof node === "string") {
    return node.toLowerCase().includes(text.toLowerCase());
  }
  if (!node || typeof node !== "object" || !("props" in node)) {
    return false;
  }
  const children = React.Children.toArray((node as AnyElement).props?.children);
  return children.some((child) => elementIncludesText(child, text));
};

export const waitFor = async (predicate: () => boolean, timeoutMs = 3000) => {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    if (predicate()) return;
    await new Promise((resolve) => setTimeout(resolve, 10));
  }
  throw new Error("Timed out waiting for condition");
};

export const fetchArmyListByIdMock = vi.fn();
export const fetchCommonRulesByGameSystemMock = vi.fn();

export const greatScreecherArmyListResponse = {
  creationTime: "2026-03-06T00:00:00.000Z",
  name: "Shadow Stalkers",
  points: 1500,
  gameSystem: eGameSystemInitials.AOF,
  units: [
    {
      sortId: 1,
      name: "Great Screecher",
      size: 1,
      quality: "4",
      defense: "5",
      rules: [
        { name: "Caster", key: "Caster", rating: "3" },
        { name: "Ethereal", key: "Ethereal", rating: "" },
        { name: "Fear", key: "Fear", rating: "1" },
        { name: "Tough", key: "Tough", rating: "6" },
        { name: "Shadowborn", key: "Shadowborn", rating: "" },
        { name: "Resistance", key: "Resistance", rating: "" },
      ],
      loadout: [
        {
          name: "Dual Hand Weapons",
          label: "(A6)",
          count: 1,
          originalCount: 1,
          type: "ArmyBookWeapon",
          attacks: 6,
          specialRules: [],
        },
        {
          name: "Scourging Censer",
          type: "ArmyBookItem",
          label: "Scourging Censer (Shadowborn Boost)",
          content: [
            {
              name: "Shadowborn Boost",
              key: "Shadowborn Boost",
              type: "ArmyBookRule",
              count: 1,
              originalCount: 1,
              label: "",
            },
          ],
          count: 1,
          originalCount: 1,
        },
      ],
      selectedUpgrades: [],
      selectionId: "sFKuv",
      xp: 0,
      traits: [],
    },
  ],
  specialRules: [],
};

export const greatScreecherCommonRulesEN = {
  rules: [
    {
      name: "Fear",
      shortDescription: "Counts as extra wounds when resolving melee.",
      description: "This model counts as having dealt +X wounds in melee.",
    },
    {
      name: "Caster",
      shortDescription: "Receives spell tokens each round.",
      description:
        "Receives X spell tokens at the start of each round, up to 6.",
    },
    {
      name: "Ethereal",
      shortDescription: "Teleport-like reposition each activation.",
      description:
        "Once per activation, before attacking, place this model within 6\".",
    },
    {
      name: "Tough",
      shortDescription: "Requires multiple wounds before being removed.",
      description:
        "This model must take X wounds before being killed.",
    },
    {
      name: "Shadowborn",
      shortDescription: "Harder to shoot and charge.",
      description:
        "Enemies get -4\" range when shooting and -2\" movement when charging.",
    },
    {
      name: "Resistance",
      shortDescription: "Chance to ignore wounds.",
      description:
        "When taking wounds, roll one die for each. On a 6+ it is ignored.",
    },
    {
      name: "Shadowborn Boost",
      shortDescription: "Improves Shadowborn penalties.",
      description:
        "If all models have Shadowborn, enemies get stronger range/charge penalties.",
    },
  ],
};
export const greatScreecherCommonRulesFR = {
  rules: [
    {
      name: "Fear",
      shortDescription: "Compte comme blessures supplementaires en melee.",
      description:
        "Ce modele compte comme ayant inflige +X blessures en melee.",
    },
    {
      name: "Caster",
      shortDescription: "Recoit des jetons de sort chaque tour.",
      description:
        "Recoit X jetons de sort au debut de chaque tour, jusqu'a 6.",
    },
    {
      name: "Ethereal",
      shortDescription: "Peut se replacer rapidement a chaque activation.",
      description:
        "Une fois par activation, avant d'attaquer, placez ce modele a 6 pouces.",
    },
    {
      name: "Tough",
      shortDescription: "Necessite plusieurs blessures avant d'etre elimine.",
      description:
        "Ce modele doit subir X blessures avant d'etre tue.",
    },
    {
      name: "Shadowborn",
      shortDescription: "Plus difficile a cibler au tir et a la charge.",
      description:
        "Les ennemis subissent -4 pouces de portee et -2 pouces en charge.",
    },
    {
      name: "Resistance",
      shortDescription: "Peut ignorer certaines blessures.",
      description:
        "Quand il subit des blessures, chaque blessure est ignoree sur 6+.",
    },
    {
      name: "Shadowborn Boost",
      shortDescription: "Renforce l'effet Shadowborn.",
      description:
        "Si tous les modeles ont Shadowborn, les penalites ennemies sont amplifiees.",
    },
  ],
};

export const runImportFlow = async (opts?: {
  armyListShareLink?: string;
  browserLanguage?: string;
  expectedRuleLabel?: string;
  expectedDefenseLabel?: string;
  expectedSecondaryRuleLabel?: string;
  expectedRuleLabels?: string[];
  unexpectedRuleLabel?: string;
  unexpectedRuleLabels?: string[];
  expectedUnitName?: string;
  expectedWeaponName?: string;
  expectAP?: boolean;
  expectedNetworkState?: eNetworkRequestState;
  expectedArmyId?: string;
  expectedIsBeta?: boolean;
  expectFetchCall?: boolean;
  expectedAlertIncludes?: string;
  skipOutputAssertions?: boolean;
  fetchArmyShouldReject?: boolean;
  postAssert?: () => void;
  armyListResponse?: any;
  commonRulesResponse?: {
    rules: Array<{
      name: string;
      shortDescription: string;
      description: string;
    }>;
  };
}) => {
  const armyListShareLink =
    opts?.armyListShareLink ||
    "https://army-forge.onepagerules.com/share?id=zrj60Gptp4Ce&name=Shadow_Stalkers";
  state.armyListShareLink = armyListShareLink;
  if (opts?.browserLanguage) {
    vi.stubGlobal("navigator", { language: opts.browserLanguage });
    localStorage.removeItem("tombolaopraftotts_currentLanguage");
  }

  const defaultArmyListResponse = {
    creationTime: "2026-03-06T00:00:00.000Z",
    name: "Shadow Stalkers",
    points: 250,
    gameSystem: eGameSystemInitials.AOFR,
    units: [
      {
        sortId: 1,
        name: "1x Shadow Fiend",
        size: 1,
        quality: "4",
        defense: "4",
        rules: [
          { name: "Ambush", key: "Ambush", rating: "1" },
          { name: "Shadow Veil", key: "Shadow Veil", rating: "1" },
        ],
        loadout: [
          {
            name: "Dark Blade",
            label: "(A3, AP(1))",
            count: 1,
            originalCount: 1,
            type: "ArmyBookWeapon",
            attacks: 3,
            specialRules: [
              {
                name: "AP",
                key: "AP",
                rating: "1",
                label: "",
                count: 1,
                originalCount: 1,
                type: "ArmyBookRule",
              },
            ],
          },
        ],
        selectedUpgrades: [],
        selectionId: "shadow-fiend-1",
        xp: 0,
        traits: [],
      },
    ],
    specialRules: [
      {
        name: "Shadow Veil",
        shortDescription: "Enemies suffer -1 to hit this unit when shooting.",
        description: "Enemies suffer -1 to hit this unit when shooting.",
      },
    ],
  };
  const resolvedArmyListResponse =
    opts?.armyListResponse || defaultArmyListResponse;

  if (opts?.fetchArmyShouldReject) {
    fetchArmyListByIdMock.mockRejectedValue(new Error("fetch failed"));
  } else {
    fetchArmyListByIdMock.mockResolvedValue(resolvedArmyListResponse);
  }

  const defaultCommonRulesResponse = {
    rules: [
      {
        name: "Ambush",
        shortDescription: "Deploy later from reserve.",
        description:
          "May be set aside before deployment and deployed over 9\" away.",
      },
      {
        name: "AP",
        shortDescription: "Armor piercing.",
        description: "Targets get -X to Defense rolls when blocking hits.",
      },
    ],
  };

  fetchCommonRulesByGameSystemMock.mockResolvedValue(
    opts?.commonRulesResponse || defaultCommonRulesResponse
  );

  vi.doMock("../../src/services/army-forge", async () => {
    const actual = await vi.importActual<
      typeof import("../../src/services/army-forge")
    >("../../src/services/army-forge");
    return {
      ...actual,
      fetchArmyListById: fetchArmyListByIdMock,
      fetchCommonRulesByGameSystem: fetchCommonRulesByGameSystemMock,
    };
  });

  const armyImportModule = await import("../../src/modules/army-import");
  const onGenerateDefinitionsSpy = vi.spyOn(
    armyImportModule,
    "onGenerateDefinitions"
  );
  const { default: HomePage } = await import("../../src/pages/HomePage");

  const updatedTree = flattenElements(HomePage());

  const importButton =
    updatedTree.find(
      (el) =>
        el.type === "button" &&
        elementIncludesText(el, "importArmyAndGenerateDefinitions")
    ) ||
    updatedTree.find(
      (el) =>
        el.type === "button" &&
        typeof el.props?.onClick === "function" &&
        el.props?.disabled !== true
    );

  expect(importButton).toBeTruthy();

  importButton!.props.onClick();
  expect(onGenerateDefinitionsSpy).toHaveBeenCalledTimes(1);

  await waitFor(
    () =>
      state.networkState.fetchArmyFromArmyForge !==
      eNetworkRequestState.PENDING
  );

  
  expect(state.networkState.fetchArmyFromArmyForge).toBe(
    opts?.expectedNetworkState || eNetworkRequestState.SUCCESS
  );

  if (opts?.expectedAlertIncludes) {
    expect(globalThis.alert).toHaveBeenCalled();
    expect((globalThis.alert as any).mock.calls[0][0]).toContain(
      opts.expectedAlertIncludes
    );
  }

  if (opts?.expectFetchCall !== false) {
    expect(fetchArmyListByIdMock).toHaveBeenCalledTimes(1);
    expect(fetchArmyListByIdMock).toHaveBeenCalledWith(
      opts?.expectedArmyId || "zrj60Gptp4Ce",
      opts?.expectedIsBeta || false
    );
  } else {
    expect(fetchArmyListByIdMock).not.toHaveBeenCalled();
  }

  if ((opts?.expectedNetworkState || eNetworkRequestState.SUCCESS) === eNetworkRequestState.SUCCESS) {
    expect(fetchCommonRulesByGameSystemMock).toHaveBeenCalledWith(
      resolvedArmyListResponse.gameSystem
    );
  } else {
    expect(fetchCommonRulesByGameSystemMock).not.toHaveBeenCalled();
  }

  if (opts?.skipOutputAssertions) {
    opts?.postAssert?.();
    return;
  }

  expect(state.unitProfiles.length).toBe(1);
  expect(state.unitProfiles[0].models.length).toBe(1);

  const renderedAfterImport = flattenElements(HomePage());
  const outputTextareas = renderedAfterImport.filter(
      (el) => el.type === "textarea" && el.props?.rows === 5
  );
  expect(outputTextareas.length).toBeGreaterThan(0);

  const outputValue = outputTextareas[0].props.value as string;
  expect(outputValue).toContain(opts?.expectedUnitName || "Shadow Fiend");
  expect(outputValue).toContain("Q4");
  expect(outputValue).toContain(opts?.expectedDefenseLabel || "D4");
  expect(outputValue).toContain(opts?.expectedWeaponName || "Dark Blade");
  if (opts?.expectAP !== false) {
    expect(outputValue).toContain("AP");
  }
  expect(outputValue).toContain(opts?.expectedRuleLabel || "Ambush");
  if (opts?.unexpectedRuleLabel) {
    expect(outputValue).not.toContain(opts.unexpectedRuleLabel);
  }
  (opts?.expectedRuleLabels || []).forEach((ruleLabel) => {
    expect(outputValue).toContain(ruleLabel);
  });
  (opts?.unexpectedRuleLabels || []).forEach((ruleLabel) => {
    expect(outputValue).not.toContain(ruleLabel);
  });
  expect(outputValue).toContain(
    opts?.expectedSecondaryRuleLabel || "Shadow Veil"
  );
  opts?.postAssert?.();
};

export const getOutputTextareas = async () => {
    const { default: HomePage } = await import("../../src/pages/HomePage");
    const rendered = flattenElements(HomePage());
    return rendered.filter(
        (el) => el.type === "textarea" && el.props?.rows === 5
    );
};
