import type { Handler } from "@netlify/functions";
import { readFile, readdir } from "node:fs/promises";
import { resolve } from "node:path";
import {
  ARMY_SYSTEMS,
  findArmy,
  findBook,
  getPdfNameForArmy,
  getPdfNameForBook,
  normalizePdfFileName
} from "../../src/data/army-data";

const DEFAULT_LIBRARY_VERSION = "3.5.2";
const CURRENT_LIBRARY_VERSION = "current";
const LIBRARY_VERSION_PATTERN = /^\d+\.\d+\.\d+$/;

const resolveLibraryVersion = (rawVersion: string | null): string => {
  if (!rawVersion) {
    return DEFAULT_LIBRARY_VERSION;
  }

  if (rawVersion === CURRENT_LIBRARY_VERSION) {
    return CURRENT_LIBRARY_VERSION;
  }

  return LIBRARY_VERSION_PATTERN.test(rawVersion) ? rawVersion : DEFAULT_LIBRARY_VERSION;
};

const getLibraryDirectory = (version: string) =>
  version === CURRENT_LIBRARY_VERSION
    ? resolve(process.cwd(), "Bibliotheque")
    : resolve(process.cwd(), "Bibliotheque", version);

const getLibraryDirectoryLabel = (version: string) =>
  version === CURRENT_LIBRARY_VERSION ? "Bibliotheque" : `Bibliotheque/${version}`;

type PatreonSession = {
  memberships?: Array<{
    campaignName?: string | null;
    campaignUrl?: string | null;
    tiers?: string[];
  }>;
};

const parseCookies = (cookieHeader: string | undefined): Record<string, string> => {
  if (!cookieHeader) {
    return {};
  }

  return cookieHeader.split(";").reduce<Record<string, string>>((acc, rawPair) => {
    const [rawKey, ...rawValue] = rawPair.trim().split("=");
    if (!rawKey || rawValue.length === 0) {
      return acc;
    }

    acc[rawKey] = decodeURIComponent(rawValue.join("="));
    return acc;
  }, {});
};

const parseSession = (cookieHeader: string | undefined): PatreonSession | null => {
  const cookies = parseCookies(cookieHeader);
  const rawSession = cookies.patreon_session;
  if (!rawSession) {
    return null;
  }

  try {
    return JSON.parse(Buffer.from(rawSession, "base64").toString("utf8")) as PatreonSession;
  } catch {
    return null;
  }
};

const getHighestTier = (tiers: string[]): number => {
  let highestTier = 0;

  tiers.forEach((tier) => {
    const match = tier.match(/\btier\s*([0-9]+)\b/i) ?? tier.match(/\b([0-9]+)\b/);
    if (!match) {
      return;
    }

    const numericValue = Number.parseInt(match[1], 10);
    if (!Number.isNaN(numericValue) && numericValue > highestTier) {
      highestTier = numericValue;
    }
  });

  return highestTier;
};

const getOnePageRulesTier = (session: PatreonSession | null): number => {
  if (!session?.memberships) {
    return 0;
  }

  const oprMembership = session.memberships.find((membership) => {
    const campaignName = (membership.campaignName ?? "").toLowerCase().replace(/\s+/g, "");
    const campaignUrl = (membership.campaignUrl ?? "").toLowerCase();
    const tiersText = (membership.tiers ?? []).join(" ").toLowerCase();

    return (
      campaignName.includes("onepagerules") ||
      campaignUrl.includes("onepagerules") ||
      tiersText.includes("one page rules") ||
      tiersText.includes("opr")
    );
  });

  return getHighestTier(oprMembership?.tiers ?? []);
};

const resolvePdfFromLibrary = async (expectedFileName: string, version: string): Promise<string | null> => {
  const libraryDir = getLibraryDirectory(version);
  let fileNames: string[] = [];

  try {
    fileNames = await readdir(libraryDir);
  } catch (error) {
    if (typeof error === "object" && error !== null && "code" in error && error.code === "ENOENT") {
      return null;
    }
    throw error;
  }

  const normalizedExpected = normalizePdfFileName(expectedFileName);
  const match = fileNames.find((fileName) => normalizePdfFileName(fileName) === normalizedExpected);

  return match ? resolve(libraryDir, match) : null;
};

const textResponse = (statusCode: number, body: string) => ({
  statusCode,
  headers: {
    "Content-Type": "text/plain; charset=utf-8"
  },
  body
});

export const handler: Handler = async (event) => {
  const params = new URLSearchParams(event.rawQuery ?? "");
  const systeme = params.get("systeme") ?? "";
  const kind = params.get("kind") ?? "";
  const key = params.get("key") ?? "";
  const version = resolveLibraryVersion(params.get("version"));
  const libraryDirLabel = getLibraryDirectoryLabel(version);

  const selectedSystem = ARMY_SYSTEMS[systeme];
  if (!selectedSystem) {
    return textResponse(404, "Systeme inconnu.");
  }

  let expectedFileName: string | null = null;
  let requiredTier = 0;

  if (kind === "army") {
    const army = findArmy(systeme, key);
    if (!army) {
      return textResponse(404, "Armee introuvable.");
    }

    expectedFileName = getPdfNameForArmy(selectedSystem, army);
    requiredTier = army.patreon;
  } else if (kind === "book") {
    const book = findBook(systeme, key);
    if (!book) {
      return textResponse(404, "Livre introuvable.");
    }

    expectedFileName = getPdfNameForBook(selectedSystem, book);
    requiredTier = book.patreon;
  } else {
    return textResponse(400, "Type de document invalide.");
  }

  const session = parseSession(event.headers.cookie);
  const userTier = getOnePageRulesTier(session);
  if (userTier < requiredTier) {
    return textResponse(403, `Acces refuse. Tiers Patreon requis: ${requiredTier}.`);
  }

  let filePath: string | null = null;
  try {
    filePath = await resolvePdfFromLibrary(expectedFileName, version);
  } catch {
    return textResponse(500, `Impossible de lire ${libraryDirLabel}.`);
  }

  if (!filePath) {
    return textResponse(404, "PDF introuvable.");
  }

  try {
    const fileBuffer = await readFile(filePath);
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="${expectedFileName}"`,
        "Cache-Control": "private, no-store"
      },
      body: fileBuffer.toString("base64"),
      isBase64Encoded: true
    };
  } catch {
    return textResponse(500, "Impossible de lire le PDF.");
  }
};
