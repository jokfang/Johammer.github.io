import { beforeEach, describe, expect, it, vi } from "vitest";
import { TranslateRules, getRuleTranslator } from "../src/common-rules";

describe("common-rules", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    localStorage.clear();
  });

  it("translates known keys and falls back to english/original key", () => {
    const tr = getRuleTranslator("fr-FR");
    expect(tr("Hero")).not.toBe("Hero");
    expect(tr("Unknown-Rule")).toBe("Unknown-Rule");

    const fallbackTranslator = getRuleTranslator("es-ES");
    expect(fallbackTranslator("Hero")).toBe("Hero");
  });

  it("returns original data for unknown dictionary and for english language", () => {
    const data = { rules: [{ name: "Hero", description: "desc" }] };
    expect(TranslateRules("other-dict", data)).toBe(data);

    localStorage.setItem(
      "tombolaopraftotts_currentLanguage",
      JSON.stringify("en")
    );
    expect(TranslateRules("common-rules", data)).toBe(data);
  });

  it("uses browser language fallback when localStorage is empty", () => {
    const originalNavigator = global.navigator;
    Object.defineProperty(global, "navigator", {
      value: { language: "fr-FR" },
      configurable: true,
    });

    const data = { rules: [{ name: "Hero", description: "line1\nline2" }] };
    const translated = TranslateRules("common-rules", data);
    expect(translated.rules[0].name).not.toBe("Hero");
    expect(translated.rules[0].description).not.toContain("\n");

    Object.defineProperty(global, "navigator", {
      value: originalNavigator,
      configurable: true,
    });
  });

  it("falls back to english when browser language is unsupported", () => {
    Object.defineProperty(global, "navigator", {
      value: { language: "es-ES" },
      configurable: true,
    });
    const data = { rules: [{ name: "Hero", description: "desc" }] };
    const translated = TranslateRules("common-rules", data);
    expect(translated).toBe(data);
  });

  it("handles invalid localStorage json and logs parsing error", () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});
    localStorage.setItem("tombolaopraftotts_currentLanguage", "{invalid-json");

    const data = { rules: [{ name: "Hero", description: "desc" }] };
    const translated = TranslateRules("common-rules", data);
    expect(translated.rules[0].name).toBe("Hero");
    expect(spy).toHaveBeenCalled();
  });

  it("falls back to original description when translated description is missing", () => {
    localStorage.setItem(
      "tombolaopraftotts_currentLanguage",
      JSON.stringify("fr")
    );
    const data = {
      rules: [
        {
          name: "UnknownRuleName",
          description: "  keep   this \n value ",
        },
      ],
    };

    const translated = TranslateRules("common-rules", data);
    expect(translated.rules[0].description).toBe("keep this value");
    expect(translated.rules[0].definition).toBe("keep this value");
  });

  it("uses definition when description is missing", () => {
    localStorage.setItem(
      "tombolaopraftotts_currentLanguage",
      JSON.stringify("fr")
    );
    const data = {
      rules: [
        {
          name: "UnknownRuleName2",
          definition: "definition text",
        },
      ],
    };
    const translated = TranslateRules("common-rules", data);
    expect(translated.rules[0].description).toBe("definition text");
  });

  it("translates Slow using default all description when no system-specific variant exists", () => {
    localStorage.setItem(
      "tombolaopraftotts_currentLanguage",
      JSON.stringify("fr")
    );

    const data = {
      gameSystem: "aof",
      rules: [{ name: "Slow" }],
    };

    const translated = TranslateRules("common-rules", data);
    expect(translated.rules[0].description).toContain("Se déplace de -2");
    expect(translated.rules[0].definition).toContain("Se déplace de -2");
  });

  it("translates Tough using system-specific description before falling back to all", () => {
    localStorage.setItem(
      "tombolaopraftotts_currentLanguage",
      JSON.stringify("fr")
    );

    const data = {
      gameSystem: "aof",
      rules: [{ name: "Tough" }],
    };

    const translated = TranslateRules("common-rules", data);
    expect(translated.rules[0].description).toContain("doit subir X blessures");
    expect(translated.rules[0].description).not.toContain("Mis K.O.");
  });
});
