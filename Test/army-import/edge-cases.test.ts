
import { beforeEach, describe, it, vi } from "vitest";
import { runImportFlow } from "./helpers";
import { initialTtsOutputConfig, resetStateForTesting, state } from "../../src/state";
import { eNetworkRequestState } from "../../src/types";

describe("army import edge cases", () => {
  beforeEach(() => {
    resetStateForTesting();
    vi.clearAllMocks();
    vi.unstubAllGlobals();
    vi.stubGlobal("alert", vi.fn());
    localStorage.clear();

    vi.doMock("use-local-storage-state", () => ({
      default: () => ["en", vi.fn()],
    }));

    vi.doMock("valtio", async () => {
      const actual = await vi.importActual<typeof import("valtio")>("valtio");
      return {
        ...actual,
        useSnapshot: () => state,
      };
    });

    vi.doMock("react", async () => {
      const actual = await vi.importActual<typeof import("react")>("react");
      return {
        ...actual,
        useMemo: (factory: () => unknown) => factory(),
      };
    });

    vi.doMock("../../src/useAppDictionary", () => ({
      useAppDictionary: () => ({ t: (key: string) => key }),
    }));
  });

  it("uses isBeta=true when importing from a beta army-forge share link", async () => {
    await runImportFlow({
      armyListShareLink:
        "https://army-forge-beta.onepagerules.com/share?id=zrj60Gptp4Ce&name=Shadow_Stalkers",
      expectedArmyId: "zrj60Gptp4Ce",
      expectedIsBeta: true,
    });
  });

  it("shows a user-facing validation error when share link has no id", async () => {
    await runImportFlow({
      armyListShareLink:
        "https://army-forge.onepagerules.com/share?name=Shadow_Stalkers",
      expectedNetworkState: eNetworkRequestState.IDLE,
      expectFetchCall: false,
      skipOutputAssertions: true,
      expectedAlertIncludes: "Could not find an Army Forge army ID",
    });
  });

  it("sets network error state and alerts when army import fetch fails", async () => {
    await runImportFlow({
      fetchArmyShouldReject: true,
      expectedNetworkState: eNetworkRequestState.ERROR,
      skipOutputAssertions: true,
      expectedAlertIncludes: "There was an error fetching the army list",
    });
  });
});
