import { nanoid } from "nanoid";
import { state, initialTtsOutputConfig } from "../state";
import { useSnapshot } from "valtio";
import useLocalStorageState from "use-local-storage-state";
import { Cross } from "./icons";
import { useAppDictionary } from "../useAppDictionary";
import { iAppState } from "../types";

type iSavedTtsConfig = {
  id: string;
  config: iAppState["ttsOutputConfig"];
  timestamp: number;
};

type iBooleanOption = {
  key: keyof Pick<
    iAppState["ttsOutputConfig"],
    | "includeCoreSpecialRules"
    | "includeFullCoreSpecialRulesText"
    | "includeArmySpecialRules"
    | "includeFullArmySpecialRulesText"
    | "includeWeaponsListInName"
    | "includeSpecialRulesListInName"
    | "swapCustomNameBracketingForUnitsWithMultipleModels"
    | "completelyReplaceNameWithCustomName"
    | "disableSmallText"
  >;
  nameKey: string;
  labelKey: string;
  withDividerBefore?: boolean;
};

type iColorOption = {
  key: keyof Pick<
    iAppState["ttsOutputConfig"],
    | "modelQuaOutputColour"
    | "modelDefOutputColour"
    | "modelWeaponOutputColour"
    | "modelSpecialRulesOutputColour"
    | "modelToughOutputColour"
  >;
  nameKey: string;
  labelKey: string;
};

const BOOLEAN_OPTIONS: iBooleanOption[] = [
  {
    key: "includeCoreSpecialRules",
    nameKey: "ttsOutputConfiguration1.name",
    labelKey: "ttsOutputConfiguration1.label",
  },
  {
    key: "includeFullCoreSpecialRulesText",
    nameKey: "ttsOutputConfiguration2.name",
    labelKey: "ttsOutputConfiguration2.label",
  },
  {
    key: "includeArmySpecialRules",
    nameKey: "ttsOutputConfiguration3.name",
    labelKey: "ttsOutputConfiguration3.label",
    withDividerBefore: true,
  },
  {
    key: "includeFullArmySpecialRulesText",
    nameKey: "ttsOutputConfiguration4.name",
    labelKey: "ttsOutputConfiguration4.label",
  },
  {
    key: "includeWeaponsListInName",
    nameKey: "ttsOutputConfiguration5.name",
    labelKey: "ttsOutputConfiguration5.label",
    withDividerBefore: true,
  },
  {
    key: "includeSpecialRulesListInName",
    nameKey: "ttsOutputConfiguration6.name",
    labelKey: "ttsOutputConfiguration6.label",
  },
  {
    key: "swapCustomNameBracketingForUnitsWithMultipleModels",
    nameKey: "ttsOutputConfiguration7.name",
    labelKey: "ttsOutputConfiguration7.label",
  },
  {
    key: "completelyReplaceNameWithCustomName",
    nameKey: "ttsOutputConfiguration8.name",
    labelKey: "ttsOutputConfiguration8.label",
  },
  {
    key: "disableSmallText",
    nameKey: "ttsOutputConfiguration9.name",
    labelKey: "ttsOutputConfiguration9.label",
    withDividerBefore: true,
  },
];

const COLOR_OPTIONS: iColorOption[] = [
  {
    key: "modelQuaOutputColour",
    nameKey: "ttsOutputConfigQualityOutputColour.name",
    labelKey: "ttsOutputConfigQualityOutputColour.label",
  },
  {
    key: "modelDefOutputColour",
    nameKey: "ttsOutputConfigDefenseOutputColour.name",
    labelKey: "ttsOutputConfigDefenseOutputColour.label",
  },
  {
    key: "modelWeaponOutputColour",
    nameKey: "ttsOutputConfigLoadoutOutputColour.name",
    labelKey: "ttsOutputConfigLoadoutOutputColour.label",
  },
  {
    key: "modelSpecialRulesOutputColour",
    nameKey: "ttsOutputConfigSpecialRulesOutputColour.name",
    labelKey: "ttsOutputConfigSpecialRulesOutputColour.label",
  },
  {
    key: "modelToughOutputColour",
    nameKey: "ttsOutputConfigToughOutputColour.name",
    labelKey: "ttsOutputConfigToughOutputColour.label",
  },
];

export const OutputOptions = () => {
  const { t } = useAppDictionary();

  const stateView = useSnapshot(state, { sync: true });

  const [allConfigs, setAllConfigs] = useLocalStorageState<iSavedTtsConfig[]>(
    "tombolaopraftotts_ttsOutputConfigs",
    {
      defaultValue: [],
    }
  );

  const toggleConfig = (key: iBooleanOption["key"]) => {
    state.ttsOutputConfig[key] = !stateView.ttsOutputConfig[key];
  };

  return (
    <details className="dark:text-slate-200">
      <summary className="cursor-pointer">{t("ttsOutputConfigurationHeader")}</summary>
      <div className="py-2 px-4 bg-stone-100 dark:bg-slate-600 space-y-4">
        {BOOLEAN_OPTIONS.map((option) => (
          <div key={option.key}>
            {option.withDividerBefore && <hr />}
            <label className="flex flex-row items-center space-x-4">
              <input
                checked={stateView.ttsOutputConfig[option.key]}
                className="w-5 h-5"
                type="checkbox"
                onChange={() => toggleConfig(option.key)}
              />
              <div className="w-11/12">
                <p className="font-bold">{t(option.nameKey)}</p>
                <p className="text-xs">{t(option.labelKey)}</p>
              </div>
            </label>
          </div>
        ))}
        <hr />
        {COLOR_OPTIONS.map((option) => (
          <label key={option.key} className="flex flex-row items-center space-x-4">
            <span
              style={{
                backgroundColor: stateView.ttsOutputConfig[option.key],
              }}
              className="block h-5 w-5 rounded-full border border-stone-600"
            ></span>
            <input
              className="border border-stone-500 px-2 py-1 w-20 dark:text-black"
              value={stateView.ttsOutputConfig[option.key]}
              onChange={(e) => {
                state.ttsOutputConfig[option.key] = e.currentTarget.value;
              }}
            />
            <div>
              <p className="font-bold">{t(option.nameKey)}</p>
              <p className="text-xs">{t(option.labelKey)}</p>
            </div>
          </label>
        ))}
        {/* <label className="flex flex-row items-center space-x-4">
          <span
            style={{
              backgroundColor:
                stateView.ttsOutputConfig.modelCampaignStuffOutputColour,
            }}
            className="block h-5 w-5 rounded-full border border-stone-600"
          ></span>
          <input
            className="border border-stone-500 px-2 py-1 w-20"
            value={stateView.ttsOutputConfig.modelCampaignStuffOutputColour}
            onChange={(e) => {
              state.ttsOutputConfig.modelCampaignStuffOutputColour =
                e.currentTarget.value;
            }}
          />

          <div>
            <p className="font-bold">Model "Campaign Stuff" Output Colour</p>
            <p className="text-xs">
              HEX code for the model's campaign XP and Traits in the TTS output.
            </p>
          </div>
        </label> */}
        <hr className="my-2" />
        <h3 className="text-base font-bold block">
          {t("saveAndLoadTtsOutputConfigHeader")}
        </h3>

        <p>{t("saveAndLoadTtsOutputConfigsLabel")}</p>

        <div className="flex flex-row space-x-4">
          <button
            onClick={() => {
              // get all the current configs out of local storage
              // const allConfigsRaw = localStorage.getItem(
              //   "tombolaopraftotts_ttsOutputConfigs"
              // );
              // // parse them into an array
              // const allConfigs = allConfigsRaw ? JSON.parse(allConfigsRaw) : [];
              // add the current config to the array
              // allConfigs.push({
              //   id: nanoid(),
              //   config: state.ttsOutputConfig,
              //   isActive: true,
              // });
              // save the array back to local storage
              // localStorage.setItem(
              //   "tombolaopraftotts_ttsOutputConfigs",
              //   JSON.stringify(allConfigs)
              // );

              setAllConfigs([
                ...allConfigs,
                {
                  id: nanoid(),
                  config: state.ttsOutputConfig,
                  timestamp: Date.now(),
                },
              ]);
            }}
            className="bg-stone-500 dark:bg-slate-500 border-stone-600 dark:border-zinc-800 text-white dark:border px-4 py-2 hover:scale-105 active:scale-95"
          >
            {t("saveCurrentConfigButton")}
          </button>

          <button
            onClick={() => {
              // we just want to reset the current config to the base initial config
              state.ttsOutputConfig = {
                ...initialTtsOutputConfig,
              };
            }}
            className="bg-stone-500 dark:bg-slate-500 border-stone-600 dark:border-zinc-800 text-white dark:border px-4 py-2 hover:scale-105 active:scale-95"
          >
            {t("loadAppDefaultConfigButton")}
          </button>
        </div>
        <div>
          <p className="font-bold">{t("loadCustomConfigHeader")}</p>
          {allConfigs.length >= 1 && (
            <div className="flex flex-row gap-3 flex-wrap mt-2">
              {allConfigs.map((config) => {
                return (
                  <div key={config.id} className="relative">
                    <button
                      onClick={() => {
                        state.ttsOutputConfig = {
                          ...config.config,
                        };
                      }}
                      className="text-xs bg-stone-500 dark:bg-slate-500 border-stone-600 dark:border-zinc-800 text-white dark:border pl-2 pr-6 py-2 text-center hover:scale-105 active:scale-95"
                    >
                      {t("loadConfig")}{" "}
                      <span className="font-mono">
                        [ {config.id.substring(0, 5)} ]
                      </span>
                    </button>
                    <button
                      onClick={() => {
                        setAllConfigs(
                          allConfigs.filter((c) => c.id !== config.id)
                        );
                      }}
                      className="shadow hover:scale-110 active:scale-95 absolute bg-red-500 -top-2 -right-2 text-white rounded-full p-1"
                    >
                      <Cross className="w-4 h-4" />
                    </button>
                  </div>
                );
              })}
            </div>
          )}
          {allConfigs.length === 0 && (
            <p className="text-stone-500 italic mt-2 dark:text-slate-300">
              {t("loadCustomConfigPlaceholder")}
            </p>
          )}
        </div>
      </div>
    </details>
  );
};
