export const LIBRARY_VERSION_OPTIONS = [
  { value: "current", label: "Actuelle" },
  { value: "3.5.2", label: "3.5.2" }
] as const;

export type LibraryVersionValue = (typeof LIBRARY_VERSION_OPTIONS)[number]["value"];

const VERSION_STORAGE_KEY = "armyforge:library-version";
const DEFAULT_LIBRARY_VERSION: LibraryVersionValue = "3.5.2";
const CURRENT_LIBRARY_VERSION_VALUE: LibraryVersionValue = "current";

const isLibraryVersion = (value: string | null): value is LibraryVersionValue =>
  value !== null && LIBRARY_VERSION_OPTIONS.some((option) => option.value === value);

export const getSelectedLibraryVersion = (): LibraryVersionValue => {
  const queryValue = new URLSearchParams(window.location.search).get("version");
  if (isLibraryVersion(queryValue)) {
    try {
      localStorage.setItem(VERSION_STORAGE_KEY, queryValue);
    } catch {
      // localStorage peut etre indisponible selon le contexte navigateur.
    }
    return queryValue;
  }

  try {
    const savedValue = localStorage.getItem(VERSION_STORAGE_KEY);
    if (isLibraryVersion(savedValue)) {
      return savedValue;
    }
  } catch {
    // localStorage peut etre indisponible selon le contexte navigateur.
  }

  return DEFAULT_LIBRARY_VERSION;
};

export const setSelectedLibraryVersion = (value: string): LibraryVersionValue => {
  const version = isLibraryVersion(value) ? value : DEFAULT_LIBRARY_VERSION;

  try {
    localStorage.setItem(VERSION_STORAGE_KEY, version);
  } catch {
    // localStorage peut etre indisponible selon le contexte navigateur.
  }

  return version;
};

export const getLibraryVersionLabel = (value: LibraryVersionValue): string => {
  const match = LIBRARY_VERSION_OPTIONS.find((option) => option.value === value);
  return match?.label ?? DEFAULT_LIBRARY_VERSION;
};

export const getLibraryDirectoryLabel = (value: LibraryVersionValue): string =>
  value === CURRENT_LIBRARY_VERSION_VALUE ? "Bibliotheque" : `Bibliotheque/${value}`;
