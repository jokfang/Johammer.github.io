import { describe, expect, it, vi, beforeEach } from "vitest";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import * as icons from "../src/components/icons";

type AnyElement = React.ReactElement<any, any>;

const flattenElements = (node: any): AnyElement[] => {
  if (!node || typeof node !== "object" || !("props" in node)) {
    return [];
  }
  const el = node as AnyElement;
  const children = React.Children.toArray(el.props?.children);
  return [el, ...children.flatMap((c) => flattenElements(c))];
};

describe("stateless components", () => {
  it("renders header/menu/tools/faq/maintenance", async () => {
    vi.doMock("react-router-dom", () => ({
      Link: ({ children }: any) => <a>{children}</a>,
    }));
    const Header = (await import("../src/components/Header")).default;
    const { MenuBar } = await import("../src/components/MenuBar");
    const { OutputFAQ } = await import("../src/components/OutputFAQ");
    const { Maintenance } = await import("../src/Maintenance");
    const Tools = (await import("../src/pages/Tools")).default;

    expect(renderToStaticMarkup(<Header />)).toContain("Army-Forge");
    const menuBarHtml = renderToStaticMarkup(<MenuBar />);
    expect(menuBarHtml.includes("Tools") || menuBarHtml.includes("Outils")).toBe(
      true
    );
    expect(renderToStaticMarkup(<OutputFAQ />)).toContain("TTS Output Notes");
    expect(renderToStaticMarkup(<Maintenance />)).toContain(
      "under maintenance"
    );
    const toolsHtml = renderToStaticMarkup(<Tools />);
    expect(toolsHtml.includes("Tools") || toolsHtml.includes("Outils")).toBe(
      true
    );
  });

  it("renders all icon components as svg", () => {
    const iconEntries = Object.entries(icons);
    expect(iconEntries.length).toBeGreaterThan(0);
    iconEntries.forEach(([, Icon]) => {
      const out = renderToStaticMarkup(
        <Icon className="x" width="10" height="10" />
      );
      expect(out.startsWith("<svg")).toBe(true);
    });
  });
});

describe("hook-based components with mocks", () => {
  beforeEach(() => {
    vi.resetModules();
  });

  it("toggles dark mode from light button and from dark button", async () => {
    const add = vi.fn();
    const remove = vi.fn();
    (document as any).documentElement = { classList: { add, remove } };

    vi.doMock("use-local-storage-state", () => ({
      default: () => [false, vi.fn()],
    }));
    vi.doMock("../src/useAppDictionary", () => ({
      useAppDictionary: () => ({ t: (k: string) => k }),
    }));
    const { DarkModeSwitch } = await import("../src/components/DarkModeSwitch");
    const lightTree = flattenElements(DarkModeSwitch());
    const lightButton = lightTree.find((x) => x.type === "button");
    lightButton?.props.onClick();
    expect(add).toHaveBeenCalledWith("dark");

    vi.resetModules();
    const setIsDarkMode = vi.fn();
    vi.doMock("use-local-storage-state", () => ({
      default: () => [true, setIsDarkMode],
    }));
    vi.doMock("../src/useAppDictionary", () => ({
      useAppDictionary: () => ({ t: (k: string) => k }),
    }));
    const { DarkModeSwitch: DarkModeSwitch2 } = await import(
      "../src/components/DarkModeSwitch"
    );
    const darkTree = flattenElements(DarkModeSwitch2());
    const darkButton = darkTree.find((x) => x.type === "button");
    darkButton?.props.onClick();
    expect(setIsDarkMode).toHaveBeenCalledWith(false);
    expect(remove).toHaveBeenCalledWith("dark");
  });

  it("expands language picker and selects a language", async () => {
    const setLang = vi.fn();
    const setExpanded = vi.fn();

    vi.doMock("use-local-storage-state", () => ({
      default: () => ["en", setLang],
    }));
    vi.doMock("react", async () => {
      const actual = await vi.importActual<typeof import("react")>("react");
      return {
        ...actual,
        useState: () => [false, setExpanded],
      };
    });

    const { LanguagePicker } = await import("../src/components/LanguagePicker");
    const collapsedTree = flattenElements(LanguagePicker());
    const collapsedButtons = collapsedTree.filter((x) => x.type === "button");
    expect(collapsedButtons).toHaveLength(1);
    collapsedButtons[0].props.onClick();
    expect(setExpanded).toHaveBeenCalledWith(true);

    vi.resetModules();
    vi.doMock("use-local-storage-state", () => ({
      default: () => ["en", setLang],
    }));
    vi.doMock("react", async () => {
      const actual = await vi.importActual<typeof import("react")>("react");
      return {
        ...actual,
        useState: () => [true, setExpanded],
      };
    });
    const { LanguagePicker: ExpandedPicker } = await import(
      "../src/components/LanguagePicker"
    );
    const expandedTree = flattenElements(ExpandedPicker());
    const buttons = expandedTree.filter((x) => x.type === "button");
    expect(buttons.length).toBeGreaterThan(1);
    buttons[1].props.onClick();
    expect(setLang).toHaveBeenCalled();
    expect(setExpanded).toHaveBeenCalledWith(false);
  });

  it("renders tutorial and version history from dictionary hook", async () => {
    vi.doMock("../src/useAppDictionary", () => ({
      useAppDictionary: () => ({
        t: (key: string) => {
          if (key === "versionHistory.v1_2.items") return ["A", "B"];
          if (key === "versionHistory.v1_1.items") return ["C"];
          return key;
        },
      }),
    }));

    const { Tutorial } = await import("../src/components/Tutorial");
    const { VersionHistory } = await import("../src/components/VersionHistory");

    const tutorialHtml = renderToStaticMarkup(<Tutorial />);
    const versionHtml = renderToStaticMarkup(<VersionHistory />);
    expect(tutorialHtml).toContain("tutorialHeader");
    expect(versionHtml).toContain("versionHistory.title");
    expect(versionHtml).toContain("A");
    expect(versionHtml).toContain("C");
  });
});

describe("router/app/main entry", () => {
  beforeEach(() => {
    vi.resetModules();
  });

  it("renders App with router provider", async () => {
    const createBrowserRouter = vi.fn(() => ({ mocked: true }));
    const RouterProvider = vi.fn(() => <div>RouterProvider</div>);
    vi.doMock("react-router-dom", () => ({
      createBrowserRouter,
      RouterProvider,
      Link: ({ children }: any) => <a>{children}</a>,
      Outlet: () => <div>outlet</div>,
    }));
    vi.doMock("../src/pages/HomePage", () => ({ default: () => <div>home</div> }));
    vi.doMock("../src/pages/Tools", () => ({ default: () => <div>tools</div> }));
    vi.doMock("../src/layouts/MainLayout", () => ({ default: () => <div>layout</div> }));

    const { default: App } = await import("../src/App");
    const html = renderToStaticMarkup(<App />);
    expect(html).toContain("RouterProvider");
    expect(createBrowserRouter).toHaveBeenCalled();

    const routes = createBrowserRouter.mock.calls[0]?.[0];
    expect(routes).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ path: "/ConstructeurArmee" }),
        expect.objectContaining({ path: "/ArmyForgeFR" }),
      ])
    );
  });

  it("renders MainLayout and includes outlet", async () => {
    vi.doUnmock("../src/layouts/MainLayout");
    vi.doMock("react-router-dom", () => ({
      Outlet: () => <div>OutletMock</div>,
      Link: ({ children }: any) => <a>{children}</a>,
    }));
    vi.doMock("../src/useAppDictionary", () => ({
      useAppDictionary: () => ({
        t: (key: string) => {
          if (key === "menuBar.title") return "Army-Forge > TTS";
          if (key === "menuBar.tools") return "Outils";
          return key;
        },
      }),
    }));
    const { default: MainLayout } = await import("../src/layouts/MainLayout");
    const html = renderToStaticMarkup(<MainLayout />);
    expect(html).toContain("OutletMock");
    expect(html).toContain("Army-Forge");
  });

  it("main.tsx mounts App in non-maintenance and Maintenance in maintenance mode", async () => {
    const renderFalse = vi.fn();
    const renderTrue = vi.fn();

    vi.doMock("react-dom/client", () => ({
      default: {
        createRoot: vi
          .fn()
          .mockReturnValueOnce({ render: renderFalse })
          .mockReturnValueOnce({ render: renderTrue }),
      },
    }));
    vi.doMock("../src/App", () => ({ default: () => <div>APP</div> }));
    vi.doMock("../src/Maintenance", () => ({
      Maintenance: () => <div>MAINTENANCE</div>,
    }));
    vi.doMock("../src/index.css", () => ({}));

    vi.stubEnv("VITE_IS_MAINTENANCE_MODE", "false");
    await import("../src/main");
    vi.resetModules();
    vi.stubEnv("VITE_IS_MAINTENANCE_MODE", "true");
    await import("../src/main");
    expect(renderFalse).toHaveBeenCalled();
    expect(renderTrue).toHaveBeenCalled();
  });
});
