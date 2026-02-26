import { useAppDictionary } from "../useAppDictionary";

export const VersionHistory = () => {
  const { t } = useAppDictionary();

  return (
    <details className="dark:text-slate-200 text-sm">
      <summary className="cursor-pointer">{t("versionHistory.title")}</summary>
      <div className="p-2 bg-stone-100 dark:bg-slate-600 space-y-2">
        <p className="font-bold text-lg">{t("versionHistory.v1_2.title")}</p>
        <ul className="list-disc ml-6">
          {(t("versionHistory.v1_2.items") as any).map((item: string) => (
            <li
              key={item}
              dangerouslySetInnerHTML={{
                __html: item,
              }}
            />
          ))}
        </ul>
        <details>
          <summary className="cursor-pointer">
            {t("versionHistory.v1_1.title")}
          </summary>
          <ul className="list-disc ml-6">
            {(t("versionHistory.v1_1.items") as any).map((item: string) => (
              <li
                key={item}
                dangerouslySetInnerHTML={{
                  __html: item,
                }}
              />
            ))}
          </ul>
        </details>
      </div>
    </details>
  );
};
