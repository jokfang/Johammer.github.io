import { describe, expect, it } from "vitest";
import { getOnePageRulesTierLine, type PatreonSession } from "./session-utils";

describe("getOnePageRulesTierLine", () => {
  it("returns highest One Page Rules tier from authentication payload sample", () => {
    const sampleSession: PatreonSession = {
      user: {
        fullName: "John Smith",
        email: "john.smith@nouseforamail.com",
        vanity: null
      },
      memberships: [
        {
          campaignName: "Creating amazing 3D print miniatures & tabletop games!",
          campaignUrl: "https://www.patreon.com/onepagerules",
          entitledAmountCents: 1800,
          tiers: ["Tier 3 - Miniature Collector Plus", "Tier 2 - Miniature Collector"]
        }
      ]
    };

    expect(getOnePageRulesTierLine(sampleSession.memberships)).toBe("Patreon - Tiers 3");
  });
});
