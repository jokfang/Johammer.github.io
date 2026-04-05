import type { Handler } from "@netlify/functions";
import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { ARMY_SYSTEMS, getPdfNameForArmy, getPdfNameForBook, normalizePdfFileName } from "../../src/data/army-data";
import { readEnv } from "./_env";

type PatreonSession = {
  user?: {
    email?: string | null;
  };
};

type UploadPayload = {
  version?: unknown;
  fileName?: unknown;
  contentBase64?: unknown;
};

const DEFAULT_LIBRARY_VERSION = "3.5.2";
const CURRENT_LIBRARY_VERSION = "current";
const LIBRARY_VERSION_PATTERN = /^\d+\.\d+\.\d+$/;

const resolveLibraryVersion = (value: unknown): string => {
  if (typeof value !== "string") {
    return DEFAULT_LIBRARY_VERSION;
  }

  if (value === CURRENT_LIBRARY_VERSION) {
    return CURRENT_LIBRARY_VERSION;
  }

  return LIBRARY_VERSION_PATTERN.test(value) ? value : DEFAULT_LIBRARY_VERSION;
};

const getLibraryDirectory = (version: string) =>
  version === CURRENT_LIBRARY_VERSION
    ? resolve(process.cwd(), "Bibliotheque")
    : resolve(process.cwd(), "Bibliotheque", version);

const getLibraryDirectoryLabel = (version: string) =>
  version === CURRENT_LIBRARY_VERSION ? "Bibliotheque" : `Bibliotheque/${version}`;

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

const readAllowedEmails = () =>
  String(readEnv("VITE_DEPOT_ALLOWED_EMAILS") ?? "")
    .split(";")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);

const sanitizeFileName = (value: string) => {
  const normalized = value.trim().replace(/[\\/:*?"<>|]+/g, "-");
  const collapsed = normalized.replace(/\s+/g, " ");
  if (collapsed.length === 0) {
    return null;
  }

  return collapsed.toLowerCase().endsWith(".pdf") ? collapsed : `${collapsed}.pdf`;
};

const allowedFileNames = Object.values(ARMY_SYSTEMS).flatMap((system) => [
  ...system.core.map((book) => getPdfNameForBook(system, book)),
  ...system.armies.map((army) => getPdfNameForArmy(system, army))
]);
const allowedFileNamesByNormalized = new Map(
  allowedFileNames.map((fileName) => [normalizePdfFileName(fileName), fileName])
);

const jsonResponse = (statusCode: number, message: string, fileName?: string) => ({
  statusCode,
  headers: {
    "Content-Type": "application/json; charset=utf-8"
  },
  body: JSON.stringify({ message, fileName })
});

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return jsonResponse(405, "Methode non autorisee.");
  }

  const session = parseSession(event.headers.cookie);
  const email = session?.user?.email?.trim().toLowerCase();
  const allowedEmails = readAllowedEmails();
  if (!email || !allowedEmails.includes(email)) {
    return jsonResponse(403, "Vous n'etes pas autorise a deposer des fichiers.");
  }

  if (!event.body) {
    return jsonResponse(400, "Corps de requete manquant.");
  }

  let payload: UploadPayload;
  try {
    const rawBody = event.isBase64Encoded ? Buffer.from(event.body, "base64").toString("utf8") : event.body;
    payload = JSON.parse(rawBody) as UploadPayload;
  } catch {
    return jsonResponse(400, "Le corps de requete est invalide.");
  }

  const rawFileName = typeof payload.fileName === "string" ? payload.fileName : "";
  const contentBase64 = typeof payload.contentBase64 === "string" ? payload.contentBase64 : "";
  const selectedVersion = resolveLibraryVersion(payload.version);
  const libraryDirLabel = getLibraryDirectoryLabel(selectedVersion);
  const fileName = sanitizeFileName(rawFileName);
  if (!fileName) {
    return jsonResponse(400, "Le nom du fichier est invalide.");
  }

  const canonicalFileName = allowedFileNamesByNormalized.get(normalizePdfFileName(fileName));
  if (!canonicalFileName) {
    return jsonResponse(400, "Le nom du fichier doit correspondre a une entree connue de army-data.ts.");
  }

  if (!fileName.toLowerCase().endsWith(".pdf")) {
    return jsonResponse(400, "Seuls les fichiers PDF sont acceptes.");
  }

  if (contentBase64.trim().length === 0) {
    return jsonResponse(400, "Le contenu du fichier est vide.");
  }

  let fileBuffer: Buffer;
  try {
    fileBuffer = Buffer.from(contentBase64, "base64");
  } catch {
    return jsonResponse(400, "Le contenu du fichier est invalide.");
  }

  if (fileBuffer.length === 0) {
    return jsonResponse(400, "Le contenu du fichier est vide.");
  }

  const pdfSignature = fileBuffer.subarray(0, 4).toString("ascii");
  if (pdfSignature !== "%PDF") {
    return jsonResponse(400, "Le fichier transmis n'est pas un PDF valide.");
  }

  const libraryDir = getLibraryDirectory(selectedVersion);
  const filePath = resolve(libraryDir, canonicalFileName);

  try {
    await mkdir(libraryDir, { recursive: true });
    await writeFile(filePath, fileBuffer);
  } catch (error) {
    console.error("[upload-pdf] Write failed", { filePath, error });
    return jsonResponse(500, "L'enregistrement du fichier a echoue.");
  }

  return jsonResponse(
    200,
    `Le fichier ${canonicalFileName} a ete enregistre dans ${libraryDirLabel}.`,
    canonicalFileName
  );
};
