import "./depot.css";
import { ARMY_SYSTEMS, getPdfNameForArmy, getPdfNameForBook, normalizePdfFileName } from "./data/army-data";
import { initLoginMenu } from "./shared/login-menu";
import { getLibraryDirectoryLabel, getSelectedLibraryVersion } from "./shared/version-selection";
import type { PatreonSession } from "./patreon/session-utils";

initLoginMenu();

const depotAllowedEmails = String(import.meta.env.VITE_DEPOT_ALLOWED_EMAILS ?? "")
  .split(";")
  .map((email) => email.trim().toLowerCase())
  .filter(Boolean);
const depotLogPrefix = "[depot]";
const allowedFileNames = Object.values(ARMY_SYSTEMS).flatMap((system) => [
  ...system.core.map((book) => getPdfNameForBook(system, book)),
  ...system.armies.map((army) => getPdfNameForArmy(system, army))
]);
const allowedFileNamesByNormalized = new Map(
  allowedFileNames.map((fileName) => [normalizePdfFileName(fileName), fileName])
);

const depotCard = document.getElementById("depotCard");
const depotError = document.getElementById("depotError");
const depotForm = document.getElementById("depotForm");
const fileNameInput = document.getElementById("fileName");
const dropZone = document.getElementById("dropZone");
const dropZoneFile = document.getElementById("dropZoneFile");
const pdfFileInput = document.getElementById("pdfFile");
const submitButton = document.getElementById("submitButton");
const statusMessage = document.getElementById("statusMessage");
const libraryStatus = document.getElementById("libraryStatus");
const libraryList = document.getElementById("libraryList");
const depotSubtitle = document.getElementById("depotSubtitle");

if (
  !(depotCard instanceof HTMLElement) ||
  !(depotError instanceof HTMLElement) ||
  !(depotForm instanceof HTMLFormElement) ||
  !(fileNameInput instanceof HTMLInputElement) ||
  !(dropZone instanceof HTMLElement) ||
  !(dropZoneFile instanceof HTMLElement) ||
  !(pdfFileInput instanceof HTMLInputElement) ||
  !(submitButton instanceof HTMLButtonElement) ||
  !(statusMessage instanceof HTMLElement) ||
  !(libraryStatus instanceof HTMLElement) ||
  !(libraryList instanceof HTMLUListElement) ||
  !(depotSubtitle instanceof HTMLElement)
) {
  throw new Error("Impossible d'initialiser la page depot.");
}

const readCookie = (name: string): string | null => {
  const cookies = document.cookie.split(";").map((item) => item.trim());
  console.log(`${depotLogPrefix} cookies disponibles`, cookies);
  const cookie = cookies.find((item) => item.startsWith(`${name}=`));
  if (!cookie) {
    console.log(`${depotLogPrefix} cookie introuvable`, { name });
    return null;
  }

  console.log(`${depotLogPrefix} cookie trouve`, {
    name,
    preview: `${cookie.substring(0, Math.min(cookie.length, 32))}${cookie.length > 32 ? "..." : ""}`
  });
  return decodeURIComponent(cookie.substring(name.length + 1));
};

const parsePatreonSession = (): PatreonSession | null => {
  const rawSession = readCookie("patreon_session");
  if (!rawSession) {
    console.log(`${depotLogPrefix} aucune session Patreon lue depuis le cookie`);
    return null;
  }

  try {
    const json = atob(rawSession);
    const session = JSON.parse(json) as PatreonSession;
    console.log(`${depotLogPrefix} session Patreon parsee`, {
      fullName: session.user.fullName,
      email: session.user.email,
      memberships: session.memberships.length
    });
    return session;
  } catch (error) {
    console.error(`${depotLogPrefix} echec du parsing de session Patreon`, error);
    return null;
  }
};

const isAllowedSession = (session: PatreonSession | null) => {
  const email = session?.user.email?.trim().toLowerCase();
  const allowed = Boolean(email && depotAllowedEmails.includes(email));
  console.log(`${depotLogPrefix} verification acces depot`, {
    envValue: import.meta.env.VITE_DEPOT_ALLOWED_EMAILS ?? null,
    allowedEmails: depotAllowedEmails,
    sessionEmailRaw: session?.user.email ?? null,
    sessionEmailNormalized: email ?? null,
    allowed
  });
  return allowed;
};

const setStatus = (state: "success" | "error", message: string) => {
  statusMessage.hidden = false;
  statusMessage.dataset.state = state;
  statusMessage.textContent = message;
};

const clearStatus = () => {
  statusMessage.hidden = true;
  statusMessage.textContent = "";
  delete statusMessage.dataset.state;
};

const fileToBase64 = async (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      if (typeof result !== "string") {
        reject(new Error("Lecture du fichier impossible."));
        return;
      }

      const [, base64 = ""] = result.split(",", 2);
      resolve(base64);
    };
    reader.onerror = () => reject(new Error("Lecture du fichier impossible."));
    reader.readAsDataURL(file);
  });

const getTargetFileName = (file: File) => {
  const customName = fileNameInput.value.trim();
  if (customName.length === 0) {
    return file.name;
  }

  return customName.toLowerCase().endsWith(".pdf") ? customName : `${customName}.pdf`;
};

type LibraryEntry = {
  fileName: string;
  lastModified: string;
};

const formatLastModified = (isoValue: string) => {
  const date = new Date(isoValue);
  if (Number.isNaN(date.getTime())) {
    return isoValue;
  }

  return new Intl.DateTimeFormat("fr-FR", {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(date);
};

const renderLibrary = (entries: LibraryEntry[]) => {
  libraryList.innerHTML = "";

  if (entries.length === 0) {
    libraryList.hidden = true;
    libraryStatus.hidden = false;
    libraryStatus.textContent = "Aucun fichier dans Bibliotheque.";
    return;
  }

  entries.forEach((entry) => {
    const item = document.createElement("li");
    item.className = "library-item";

    const fileName = document.createElement("p");
    fileName.className = "library-file";
    fileName.textContent = entry.fileName;

    const lastModified = document.createElement("p");
    lastModified.className = "library-date";
    lastModified.textContent = formatLastModified(entry.lastModified);

    item.append(fileName, lastModified);
    libraryList.append(item);
  });

  libraryStatus.hidden = true;
  libraryList.hidden = false;
};

const loadLibrary = async () => {
  const selectedVersion = getSelectedLibraryVersion();
  const libraryDirectory = getLibraryDirectoryLabel(selectedVersion);
  depotSubtitle.textContent = `Chargez un fichier PDF qui sera enregistre dans ${libraryDirectory}.`;
  libraryStatus.hidden = false;
  libraryStatus.textContent = "Chargement du repertoire...";
  libraryList.hidden = true;

  try {
    const response = await fetch(`/.netlify/functions/list-library?version=${encodeURIComponent(selectedVersion)}`, {
      cache: "no-store"
    });
    const payload = (await response.json().catch(() => null)) as
      | { entries?: LibraryEntry[]; message?: string }
      | null;

    if (!response.ok) {
      libraryStatus.textContent = payload?.message ?? "Impossible de charger Bibliotheque.";
      return;
    }

    renderLibrary(payload?.entries ?? []);
  } catch {
    libraryStatus.textContent = "Impossible de charger Bibliotheque.";
  }
};

console.log(`${depotLogPrefix} noms de fichiers autorises`, {
  allowedFileNames
});

const setSelectedFile = (file: File | null) => {
  dropZoneFile.textContent = file ? file.name : "Aucun fichier selectionne.";

  if (file && fileNameInput.value.trim().length === 0) {
    fileNameInput.value = file.name;
  }
};

const assignFileList = (files: FileList) => {
  pdfFileInput.files = files;
  setSelectedFile(files[0] ?? null);
};

const session = parsePatreonSession();
console.log(`${depotLogPrefix} initialisation page depot`, {
  currentUrl: window.location.href,
  hasSession: Boolean(session)
});

if (isAllowedSession(session)) {
  depotCard.hidden = false;
  depotError.hidden = true;
  console.log(`${depotLogPrefix} affichage zone de depot autorise`);
} else {
  depotCard.hidden = true;
  depotError.hidden = false;
  console.warn(`${depotLogPrefix} affichage message acces refuse`);
}

void loadLibrary();

pdfFileInput.addEventListener("change", () => {
  clearStatus();
  const file = pdfFileInput.files?.[0];
  setSelectedFile(file ?? null);
});

dropZone.addEventListener("click", () => {
  pdfFileInput.click();
});

dropZone.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") {
    return;
  }

  event.preventDefault();
  pdfFileInput.click();
});

dropZone.addEventListener("dragenter", (event) => {
  event.preventDefault();
  dropZone.dataset.dragActive = "true";
});

dropZone.addEventListener("dragover", (event) => {
  event.preventDefault();
  dropZone.dataset.dragActive = "true";
});

dropZone.addEventListener("dragleave", (event) => {
  event.preventDefault();
  if (event.target === dropZone) {
    delete dropZone.dataset.dragActive;
  }
});

dropZone.addEventListener("drop", (event) => {
  event.preventDefault();
  delete dropZone.dataset.dragActive;

  const files = event.dataTransfer?.files;
  if (!files || files.length === 0) {
    return;
  }

  assignFileList(files);
  clearStatus();
});

depotForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  clearStatus();

  const liveSession = parsePatreonSession();
  if (!isAllowedSession(liveSession)) {
    console.warn(`${depotLogPrefix} soumission bloquee`, {
      sessionEmail: liveSession?.user.email ?? null
    });
    setStatus("error", "Vous n'etes pas autorise a deposer des fichiers.");
    return;
  }

  const file = pdfFileInput.files?.[0];
  if (!file) {
    setStatus("error", "Selectionnez un fichier PDF.");
    return;
  }

  if (file.type !== "application/pdf" && !file.name.toLowerCase().endsWith(".pdf")) {
    setStatus("error", "Le fichier doit etre un PDF.");
    return;
  }

  const targetFileName = getTargetFileName(file);
  const canonicalFileName = allowedFileNamesByNormalized.get(normalizePdfFileName(targetFileName));
  if (!canonicalFileName) {
    setStatus("error", "Le nom du fichier doit correspondre a une entree connue de army-data.ts.");
    return;
  }

  submitButton.disabled = true;

  try {
    const selectedVersion = getSelectedLibraryVersion();
    const response = await fetch("/.netlify/functions/upload-pdf", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        version: selectedVersion,
        fileName: canonicalFileName,
        contentBase64: await fileToBase64(file)
      })
    });

    const payload = (await response.json().catch(() => null)) as { message?: string; fileName?: string } | null;
    if (!response.ok) {
      setStatus("error", payload?.message ?? "Le depot du PDF a echoue.");
      return;
    }

    depotForm.reset();
    setSelectedFile(null);
    setStatus("success", payload?.message ?? "Le PDF a ete depose avec succes.");
    void loadLibrary();
  } catch {
    setStatus("error", "Le depot du PDF a echoue.");
  } finally {
    submitButton.disabled = false;
  }
});
