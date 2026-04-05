import type { Handler } from "@netlify/functions";
import { readdir, stat } from "node:fs/promises";
import { resolve } from "node:path";

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

const jsonResponse = (statusCode: number, body: unknown) => ({
  statusCode,
  headers: {
    "Content-Type": "application/json; charset=utf-8"
  },
  body: JSON.stringify(body)
});

export const handler: Handler = async (event) => {
  const params = new URLSearchParams(event.rawQuery ?? "");
  const version = resolveLibraryVersion(params.get("version"));
  const libraryDir = getLibraryDirectory(version);
  const libraryDirLabel = getLibraryDirectoryLabel(version);

  try {
    const names = await readdir(libraryDir);
    const pdfNames = names.filter((name) => name.toLowerCase().endsWith(".pdf"));
    const entries = await Promise.all(
      pdfNames.map(async (fileName) => {
        const fileStat = await stat(resolve(libraryDir, fileName));
        return {
          fileName,
          lastModified: fileStat.mtime.toISOString()
        };
      })
    );

    entries.sort((a, b) => b.lastModified.localeCompare(a.lastModified));
    return jsonResponse(200, { version, entries });
  } catch (error) {
    if (typeof error === "object" && error !== null && "code" in error && error.code === "ENOENT") {
      return jsonResponse(200, { version, entries: [] });
    }

    console.error("[list-library] Read failed", { libraryDir, version, error });
    return jsonResponse(500, { message: `Impossible de lire le repertoire ${libraryDirLabel}.` });
  }
};
