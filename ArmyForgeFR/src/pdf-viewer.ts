import "./army-list.css";
import { ARMY_SYSTEMS, findArmy, findBook } from "./data/army-data";
import { initLoginMenu } from "./shared/login-menu";
import { getLibraryVersionLabel, getSelectedLibraryVersion } from "./shared/version-selection";

initLoginMenu();

const viewerTitleNode = document.getElementById("viewerTitle");
const viewerSubtitleNode = document.getElementById("viewerSubtitle");
const viewerStatusNode = document.getElementById("viewerStatus");
const viewerFrameNode = document.getElementById("viewerFrame");
const backLinkNode = document.getElementById("backLink");
const viewerFallbackNode = document.getElementById("viewerFallback");

if (
  !(viewerTitleNode instanceof HTMLElement) ||
  !(viewerSubtitleNode instanceof HTMLElement) ||
  !(viewerStatusNode instanceof HTMLElement) ||
  !(viewerFrameNode instanceof HTMLIFrameElement) ||
  !(backLinkNode instanceof HTMLAnchorElement) ||
  !(viewerFallbackNode instanceof HTMLAnchorElement)
) {
  throw new Error("Impossible d'initialiser le visionneur PDF.");
}

let currentBlobUrl: string | null = null;

const loadPdfIntoViewer = async (pdfUrl: string) => {
  const response = await fetch(pdfUrl, {
    credentials: "same-origin",
    cache: "no-store"
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  const blob = await response.blob();
  if (blob.type !== "application/pdf") {
    throw new Error("La reponse n'est pas un PDF.");
  }

  if (currentBlobUrl) {
    URL.revokeObjectURL(currentBlobUrl);
  }

  currentBlobUrl = URL.createObjectURL(blob);
  viewerFallbackNode.href = currentBlobUrl;
  viewerFallbackNode.target = "_blank";
  viewerFallbackNode.rel = "noopener";
  viewerFrameNode.hidden = false;
  viewerFrameNode.src = currentBlobUrl;
  viewerStatusNode.hidden = true;
};

const params = new URLSearchParams(window.location.search);
const systeme = params.get("systeme") ?? "";
const kind = params.get("kind") ?? "";
const key = params.get("key") ?? "";
const selectedVersion = getSelectedLibraryVersion();
const selectedSystem = ARMY_SYSTEMS[systeme];

if (!selectedSystem || !key || (kind !== "army" && kind !== "book")) {
  viewerTitleNode.textContent = "Document introuvable";
  viewerSubtitleNode.textContent = "Parametres invalides.";
  viewerStatusNode.textContent = "Impossible de charger ce document.";
} else {
  const selectedItem = kind === "army" ? findArmy(systeme, key) : findBook(systeme, key);

  backLinkNode.href =
    kind === "army"
      ? `./liste-d-armee.html?systeme=${encodeURIComponent(systeme)}&armee=${encodeURIComponent(key)}`
      : `./livre.html?systeme=${encodeURIComponent(systeme)}&livre=${encodeURIComponent(key)}`;

  if (!selectedItem) {
    viewerTitleNode.textContent = "Document introuvable";
    viewerSubtitleNode.textContent = "Aucune entree correspondante.";
    viewerStatusNode.textContent = "Impossible de charger ce document.";
  } else {
    const pdfUrl = `/.netlify/functions/pdf-file?systeme=${encodeURIComponent(systeme)}&kind=${encodeURIComponent(kind)}&key=${encodeURIComponent(key)}&version=${encodeURIComponent(selectedVersion)}`;

    viewerTitleNode.textContent = kind === "army" ? selectedItem.name : selectedItem.name;
    viewerSubtitleNode.textContent = `${selectedSystem.title} | Version ${getLibraryVersionLabel(selectedVersion)}`;
    void loadPdfIntoViewer(pdfUrl).catch((error: unknown) => {
      console.error("[pdf-viewer] Render failed", error);
      viewerStatusNode.hidden = false;
      viewerStatusNode.textContent = "Impossible d'afficher ce PDF dans le visionneur integre.";
      viewerFrameNode.hidden = true;
    });
  }
}

window.addEventListener("beforeunload", () => {
  if (currentBlobUrl) {
    URL.revokeObjectURL(currentBlobUrl);
    currentBlobUrl = null;
  }
});
