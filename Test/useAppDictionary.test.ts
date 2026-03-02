import { beforeEach, describe, expect, it, vi } from "vitest";

describe("useAppDictionary", () => {
  beforeEach(() => {
    vi.resetModules();
    localStorage.clear();
  });

  it("uses stored language id and resolves known translation", async () => {
    vi.doMock("use-local-storage-state", () => ({
      default: () => ["fr"],
    }));
    const { useAppDictionary } = await import("../src/useAppDictionary");

    const { currentLanguageId, t } = useAppDictionary();
    expect(currentLanguageId).toBe("fr");
    expect(t("armyForge")).toBe("Army Forge");
  });

  it("falls back to english when translation key is missing", async () => {
    vi.doMock("use-local-storage-state", () => ({
      default: () => ["de"],
    }));
    const { useAppDictionary } = await import("../src/useAppDictionary");
    const { t } = useAppDictionary();
    expect(t("not.existing.key")).toBe("[[MISSING TRANSLATION]]");
  });

  it("picks navigator language when no stored value exists", async () => {
    Object.defineProperty(global, "navigator", {
      value: { language: "fr-FR" },
      configurable: true,
    });

    vi.doMock("use-local-storage-state", () => ({
      default: (_key: string, opts: { defaultValue: string }) => [
        opts.defaultValue,
      ],
    }));

    const { useAppDictionary } = await import("../src/useAppDictionary");
    const { currentLanguageId } = useAppDictionary();
    expect(currentLanguageId).toBe("fr");
  });

  it("defaults to english when navigator language is unsupported", async () => {
    Object.defineProperty(global, "navigator", {
      value: { language: "es-ES" },
      configurable: true,
    });
    vi.doMock("use-local-storage-state", () => ({
      default: (_key: string, opts: { defaultValue: string }) => [
        opts.defaultValue,
      ],
    }));
    const { useAppDictionary } = await import("../src/useAppDictionary");
    const { currentLanguageId } = useAppDictionary();
    expect(currentLanguageId).toBe("en");
  });

  it("handles falsy stored language id by falling back to english dictionary", async () => {
    vi.doMock("use-local-storage-state", () => ({
      default: () => [undefined],
    }));
    const { useAppDictionary } = await import("../src/useAppDictionary");
    const { t } = useAppDictionary();
    expect(t("armyForge")).toBe("Army Forge");
  });
});
