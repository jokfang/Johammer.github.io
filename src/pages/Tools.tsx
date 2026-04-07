import React, { useMemo, useState } from "react";
import classNames from "classnames";
import { useAppDictionary } from "../useAppDictionary";
import { fetchArmyBookByUid } from "../services/army-book";
import {
  extractArmyBookData,
  parseArmyBookUrl,
} from "../modules/army-book-extractor";

const Tools: React.FC = () => {
  const { t, currentLanguageId } = useAppDictionary();
  const [url, setUrl] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const canRun = url.trim().length > 0 && !isLoading;
  const parsed = useMemo(() => parseArmyBookUrl(url), [url]);

  const onGenerate = async () => {
    if (!parsed) {
      setError(t("tools.armyBookExtractor.invalidUrl"));
      setOutput("");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await fetchArmyBookByUid(
        parsed.bookUid,
        parsed.gameSystemId,
        parsed.isBeta
      );
      const data = extractArmyBookData(
        response as any,
        parsed,
        currentLanguageId || "en"
      );
      setOutput(`${JSON.stringify(data, null, 2)}\n`);
    } catch (fetchError) {
      console.error(fetchError);
      setError(t("tools.armyBookExtractor.fetchError"));
      setOutput("");
    } finally {
      setIsLoading(false);
    }
  };

  const onCopy = async () => {
    if (!output) {
      return;
    }
    await navigator.clipboard.writeText(output);
  };

  const onDownload = () => {
    if (!output || !parsed) {
      return;
    }
    const blob = new Blob([output], { type: "application/json;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${parsed.bookUid}.json`;
    link.click();
    URL.revokeObjectURL(link.href);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold dark:text-white">
          {t("tools.title")}
        </h1>
        <p className="mt-3 max-w-3xl text-sm text-stone-600 dark:text-stone-300">
          {t("tools.armyBookExtractor.description")}
        </p>
      </div>

      <section className="border border-stone-200 bg-white p-5 shadow-lg dark:border-zinc-700 dark:bg-zinc-900">
        <div className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-semibold dark:text-white">
              {t("tools.armyBookExtractor.inputLabel")}
            </label>
            <input
              value={url}
              onChange={(event) => setUrl(event.currentTarget.value)}
              placeholder={t("tools.armyBookExtractor.placeholder")}
              className="mt-2 w-full border border-stone-400 px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
              type="text"
            />
            <p className="mt-2 text-xs text-stone-500 dark:text-stone-400">
              {t("tools.armyBookExtractor.help")}
            </p>
            {parsed && (
              <p className="mt-2 text-xs text-emerald-700 dark:text-emerald-400">
                {t("tools.armyBookExtractor.detectedPrefix")}
                {parsed.gameSystemSlug} / {parsed.bookUid}
              </p>
            )}
            {error && (
              <p className="mt-2 text-sm text-red-700 dark:text-red-400">
                {error}
              </p>
            )}
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              disabled={!canRun}
              onClick={onGenerate}
              className={classNames(
                "border border-stone-700 bg-stone-800 px-4 py-2 text-sm font-semibold text-white transition dark:border-zinc-600 dark:bg-zinc-100 dark:text-zinc-900",
                {
                  "opacity-60": !canRun,
                  "hover:scale-[1.02] active:scale-[0.98]": canRun,
                }
              )}
            >
              {isLoading
                ? t("tools.armyBookExtractor.loading")
                : t("tools.armyBookExtractor.generate")}
            </button>

            <button
              disabled={!output}
              onClick={onCopy}
              className="border border-stone-300 px-4 py-2 text-sm font-semibold text-stone-700 disabled:opacity-50 dark:border-zinc-700 dark:text-stone-200"
            >
              {t("tools.armyBookExtractor.copy")}
            </button>

            <button
              disabled={!output}
              onClick={onDownload}
              className="border border-stone-300 px-4 py-2 text-sm font-semibold text-stone-700 disabled:opacity-50 dark:border-zinc-700 dark:text-stone-200"
            >
              {t("tools.armyBookExtractor.download")}
            </button>
          </div>
        </div>
      </section>

      <section className="border border-stone-200 bg-stone-50 p-5 shadow-lg dark:border-zinc-700 dark:bg-zinc-950">
        <div className="mb-3 flex items-center justify-between gap-3">
          <h2 className="text-xl font-semibold dark:text-white">
            {t("tools.armyBookExtractor.outputTitle")}
          </h2>
          {output && (
            <span className="text-xs text-stone-500 dark:text-stone-400">
              {t("tools.armyBookExtractor.outputReady")}
            </span>
          )}
        </div>
        <textarea
          readOnly
          value={output}
          className="min-h-[28rem] w-full resize-y border border-stone-300 bg-white p-3 font-mono text-xs dark:border-zinc-700 dark:bg-zinc-900 dark:text-stone-100"
        />
      </section>
    </div>
  );
};

export default Tools;
