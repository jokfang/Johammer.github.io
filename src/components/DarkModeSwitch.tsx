import useLocalStorageState from "use-local-storage-state";
import { useAppDictionary } from "../useAppDictionary";
import { Moon, Sun } from "./icons";
export const DarkModeSwitch = () => {
  const { t } = useAppDictionary();
  const [isDarkMode, setIsDarkMode] = useLocalStorageState<any>(
    "tombolaopraftotts_isDarkMode",
    {
      defaultValue: false,
    }
  );

  return (
    <>
      {isDarkMode && (
        <button
          className="dark:text-white"
          title={t("lightMode")}
          onClick={() => {
            setIsDarkMode(false);
            document.documentElement.classList.remove("dark");
          }}
        >
          <Sun />
        </button>
      )}
      {!isDarkMode && (
        <button
          className="dark:text-white"
          title={t("darkMode")}
          onClick={() => {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
          }}
        >
          <Moon />
        </button>
      )}
    </>
  );
};
