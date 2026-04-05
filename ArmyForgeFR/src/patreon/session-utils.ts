export type PatreonMembership = {
  campaignName: string;
  campaignUrl?: string | null;
  tiers: string[];
  entitledAmountCents: number | null;
};

export type PatreonSession = {
  user: {
    fullName: string;
    email: string | null;
    vanity: string | null;
  };
  memberships: PatreonMembership[];
};

export const getHighestTierLabel = (tiers: string[]): string | null => {
  if (tiers.length === 0) {
    return null;
  }

  let highestNumericTier: number | null = null;
  tiers.forEach((tier) => {
    const match = tier.match(/\btier\s*([0-9]+)\b/i) ?? tier.match(/\b([0-9]+)\b/);
    if (!match) {
      return;
    }

    const numericValue = Number.parseInt(match[1], 10);
    if (Number.isNaN(numericValue)) {
      return;
    }

    if (highestNumericTier === null || numericValue > highestNumericTier) {
      highestNumericTier = numericValue;
    }
  });

  if (highestNumericTier !== null) {
    return String(highestNumericTier);
  }

  return tiers[0];
};

export const getOnePageRulesTierLine = (memberships: PatreonMembership[]): string => {
  const onePageRulesMembership = memberships.find((membership) => {
    const campaignName = membership.campaignName.toLowerCase().replace(/\s+/g, "");
    const campaignUrl = (membership.campaignUrl ?? "").toLowerCase();
    const tiersText = membership.tiers.join(" ").toLowerCase();

    return (
      campaignName.includes("onepagerules") ||
      campaignUrl.includes("onepagerules") ||
      tiersText.includes("one page rules") ||
      tiersText.includes("opr")
    );
  });

  const highestTier = onePageRulesMembership ? getHighestTierLabel(onePageRulesMembership.tiers) : null;
  return highestTier ? `Patreon - Tiers ${highestTier}` : "Aucun abonnement actif One Page Rules detecte.";
};
