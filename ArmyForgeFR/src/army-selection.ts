import "./army-selection.css";
import { ARMY_SYSTEMS } from "./data/army-data";
import { initLoginMenu } from "./shared/login-menu";

initLoginMenu();

const titleNode = document.getElementById("systemTitle");
const descriptionNode = document.getElementById("systemDescription");
const errorNode = document.getElementById("systemError");
const coreCategoryNode = document.getElementById("coreCategory");
const coreListNode = document.getElementById("coreList");
const listNode = document.getElementById("armyList");

const params = new URLSearchParams(window.location.search);
const systeme = params.get("systeme") ?? params.get("gameSystem") ?? "";
const selectedSystem = ARMY_SYSTEMS[systeme];

if (
  !(titleNode instanceof HTMLElement) ||
  !(descriptionNode instanceof HTMLElement) ||
  !(errorNode instanceof HTMLElement) ||
  !(coreCategoryNode instanceof HTMLElement) ||
  !(coreListNode instanceof HTMLUListElement) ||
  !(listNode instanceof HTMLUListElement)
) {
  throw new Error("Impossible d'initialiser la page de choix d'armee.");
}

if (!selectedSystem) {
  errorNode.hidden = false;
  titleNode.textContent = "Systeme invalide";
  descriptionNode.textContent = "Passez `systeme=1` (Age of Fantasy) ou `systeme=2` (Grimdark Future).";
} else {
  titleNode.textContent = selectedSystem.title;
  descriptionNode.textContent = selectedSystem.description;

  selectedSystem.core.forEach((book) => {
    const listItem = document.createElement("li");
    listItem.className = "army-item";

    const bookLink = document.createElement("a");
    bookLink.className = "army-link army-link-core";
    bookLink.href = `./livre.html?systeme=${encodeURIComponent(systeme)}&livre=${encodeURIComponent(book.code)}`;
    bookLink.innerHTML = `<span class="army-name">${book.name}</span><span class="army-subtitle">${book.description}</span>`;

    listItem.append(bookLink);
    coreListNode.append(listItem);
  });

  coreCategoryNode.hidden = selectedSystem.core.length === 0;

  selectedSystem.armies.forEach((army) => {
    const listItem = document.createElement("li");
    listItem.className = "army-item";

    const armyLink = document.createElement("a");
    armyLink.className = "army-link";
    armyLink.href = `./liste-d-armee.html?systeme=${encodeURIComponent(systeme)}&armee=${encodeURIComponent(army.code)}`;
    armyLink.innerHTML = `<span class="army-name">${army.name}</span><span class="army-subtitle">${army.subtitle}</span>`;

    listItem.append(armyLink);
    listNode.append(listItem);
  });
}
