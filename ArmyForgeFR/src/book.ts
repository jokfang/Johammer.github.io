import "./army-list.css";
import { ARMY_SYSTEMS, findBook, getPdfNameForBook } from "./data/army-data";
import { resolveLibraryPdfPath } from "./shared/pdf-library";
import { initLoginMenu } from "./shared/login-menu";
import { getSelectedLibraryVersion } from "./shared/version-selection";

initLoginMenu();

const systemLabelNode = document.getElementById("systemLabel");
const bookTitleNode = document.getElementById("bookTitle");
const bookSubtitleNode = document.getElementById("bookSubtitle");
const bookBodyTitleNode = document.getElementById("bookBodyTitle");
const bookBodyNode = document.getElementById("bookBody");
const bookErrorNode = document.getElementById("bookError");
const bookInfoGridNode = document.getElementById("bookInfoGrid");
const backToSelection = document.getElementById("backToSelection");
const bookActionsNode = document.getElementById("bookActions");
const pdfButtonNode = document.getElementById("pdfButton");

if (
  !(systemLabelNode instanceof HTMLElement) ||
  !(bookTitleNode instanceof HTMLElement) ||
  !(bookSubtitleNode instanceof HTMLElement) ||
  !(bookBodyTitleNode instanceof HTMLElement) ||
  !(bookBodyNode instanceof HTMLElement) ||
  !(bookErrorNode instanceof HTMLElement) ||
  !(bookInfoGridNode instanceof HTMLElement) ||
  !(backToSelection instanceof HTMLAnchorElement) ||
  !(bookActionsNode instanceof HTMLElement) ||
  !(pdfButtonNode instanceof HTMLAnchorElement)
) {
  throw new Error("Impossible d'initialiser la page livre.");
}

const setPdfButtonDisabled = (disabled: boolean, href = "#") => {
  pdfButtonNode.href = disabled ? "#" : href;
  pdfButtonNode.setAttribute("aria-disabled", String(disabled));
  pdfButtonNode.tabIndex = disabled ? -1 : 0;
};

const params = new URLSearchParams(window.location.search);
const systeme = params.get("systeme") ?? params.get("gameSystem") ?? "";
const livre = params.get("livre") ?? params.get("book") ?? "";
const selectedVersion = getSelectedLibraryVersion();

backToSelection.href = `./choix-d-armee.html?systeme=${encodeURIComponent(systeme)}`;

const selectedSystem = ARMY_SYSTEMS[systeme];
const selectedBook = findBook(systeme, livre);

if (!selectedSystem || !selectedBook) {
  bookErrorNode.hidden = false;
  systemLabelNode.textContent = "Systeme inconnu";
  bookTitleNode.textContent = "Livre introuvable";
  bookSubtitleNode.textContent = "Revenez au choix d'armee et selectionnez une entree valide.";
} else {
  const expectedPdfName = getPdfNameForBook(selectedSystem, selectedBook);
  const viewerPath = `./pdf-viewer.html?systeme=${encodeURIComponent(systeme)}&kind=book&key=${encodeURIComponent(selectedBook.code)}&version=${encodeURIComponent(selectedVersion)}`;

  systemLabelNode.textContent = selectedSystem.title;
  bookTitleNode.textContent = selectedBook.name;
  bookSubtitleNode.textContent = selectedBook.description;
  bookBodyTitleNode.textContent = selectedBook.title;
  bookBodyNode.innerHTML = selectedBook.body;
  setPdfButtonDisabled(true);
  bookActionsNode.hidden = false;
  bookInfoGridNode.hidden = false;
  void resolveLibraryPdfPath(expectedPdfName).then((resolvedPdfPath) => {
    if (!resolvedPdfPath) {
      setPdfButtonDisabled(true);
      return;
    }
    setPdfButtonDisabled(false, viewerPath);
  });
}
