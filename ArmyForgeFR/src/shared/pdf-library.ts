import { normalizePdfFileName } from "../data/army-data";
import { getLibraryDirectoryLabel, getSelectedLibraryVersion } from "./version-selection";

type LibraryEntry = {
  fileName: string;
  lastModified: string;
};

export const resolveLibraryPdfPath = async (expectedFileName: string): Promise<string | null> => {
  const selectedVersion = getSelectedLibraryVersion();

  try {
    const response = await fetch(`/.netlify/functions/list-library?version=${encodeURIComponent(selectedVersion)}`, {
      cache: "no-store"
    });

    if (!response.ok) {
      return null;
    }

    const payload = (await response.json().catch(() => null)) as { entries?: LibraryEntry[] } | null;
    const entries = payload?.entries ?? [];
    const normalizedExpected = normalizePdfFileName(expectedFileName);
    const matchingEntry = entries.find((entry) => normalizePdfFileName(entry.fileName) === normalizedExpected);

    return matchingEntry ? `${getLibraryDirectoryLabel(selectedVersion)}/${matchingEntry.fileName}` : null;
  } catch {
    return null;
  }
};
