import "./army-list.css";
import { ARMY_SYSTEMS, findArmy, getPdfNameForArmy } from "./data/army-data";
import { resolveLibraryPdfPath } from "./shared/pdf-library";
import { initLoginMenu } from "./shared/login-menu";
import { getSelectedLibraryVersion } from "./shared/version-selection";

initLoginMenu();

const systemLabelNode = document.getElementById("systemLabel");
const armyTitleNode = document.getElementById("armyTitle");
const armySubtitleNode = document.getElementById("armySubtitle");
const armyStyleNode = document.getElementById("armyStyle");
const selectionMetaNode = document.getElementById("selectionMeta");
const armyErrorNode = document.getElementById("armyError");
const armyInfoGridNode = document.getElementById("armyInfoGrid");
const backToSelection = document.getElementById("backToSelection");
const armyActionsNode = document.getElementById("armyActions");
const pdfButtonNode = document.getElementById("pdfButton");

if (
  !(systemLabelNode instanceof HTMLElement) ||
  !(armyTitleNode instanceof HTMLElement) ||
  !(armySubtitleNode instanceof HTMLElement) ||
  !(armyStyleNode instanceof HTMLElement) ||
  !(selectionMetaNode instanceof HTMLElement) ||
  !(armyErrorNode instanceof HTMLElement) ||
  !(armyInfoGridNode instanceof HTMLElement) ||
  !(backToSelection instanceof HTMLAnchorElement) ||
  !(armyActionsNode instanceof HTMLElement) ||
  !(pdfButtonNode instanceof HTMLAnchorElement)
) {
  throw new Error("Impossible d'initialiser la page liste d'armee.");
}

const setPdfButtonDisabled = (disabled: boolean, href = "#") => {
  pdfButtonNode.href = disabled ? "#" : href;
  pdfButtonNode.setAttribute("aria-disabled", String(disabled));
  pdfButtonNode.tabIndex = disabled ? -1 : 0;
};

const params = new URLSearchParams(window.location.search);
const systeme = params.get("systeme") ?? params.get("gameSystem") ?? "";
const armee = params.get("armee") ?? params.get("armyName") ?? "";
const selectedVersion = getSelectedLibraryVersion();

backToSelection.href = `./choix-d-armee.html?systeme=${encodeURIComponent(systeme)}`;

const selectedSystem = ARMY_SYSTEMS[systeme];
const selectedArmy = findArmy(systeme, armee);

if (!selectedSystem || !selectedArmy) {
  armyErrorNode.hidden = false;
  systemLabelNode.textContent = "Systeme inconnu";
  armyTitleNode.textContent = "Armee introuvable";
  armySubtitleNode.textContent = "Revenez au choix d'armee et selectionnez une entree valide.";
} else {
  const expectedPdfName = getPdfNameForArmy(selectedSystem, selectedArmy);
  const viewerPath = `./pdf-viewer.html?systeme=${encodeURIComponent(systeme)}&kind=army&key=${encodeURIComponent(selectedArmy.code)}&version=${encodeURIComponent(selectedVersion)}`;

  systemLabelNode.textContent = selectedSystem.title;
  armyTitleNode.textContent = selectedArmy.name;
  armySubtitleNode.textContent = selectedArmy.subtitle;
  armyStyleNode.textContent = selectedArmy.comment;
  selectionMetaNode.textContent = `systeme=${systeme} | armee=${selectedArmy.code}`;
  armyInfoGridNode.hidden = false;
  setPdfButtonDisabled(true);
  armyActionsNode.hidden = false;
  void resolveLibraryPdfPath(expectedPdfName).then((resolvedPdfPath) => {
    if (!resolvedPdfPath) {
      setPdfButtonDisabled(true);
      return;
    }
    setPdfButtonDisabled(false, viewerPath);
  });
}
