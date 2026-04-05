export type UniteStat = {
  label: string;
  value: string;
};

export type UniteWeapon = {
  name: string;
  range: string;
  attacks: string;
  armorPiercing: string;
  special: string;
};

export type UniteUpgrade = {
  name: string;
  special: string;
};

export type UniteData = {
  name: string;
  count: number;
  points: number;
  stats: UniteStat[];
  rules: string[];
  weapons: UniteWeapon[];
  upgrades: UniteUpgrade[];
  note?: string;
};

const createCell = (value: string): HTMLTableCellElement => {
  const cell = document.createElement("td");
  cell.className = "unite-table-cell";
  cell.textContent = value;
  return cell;
};

export const createUniteCard = (data: UniteData): HTMLElement => {
  const card = document.createElement("article");
  card.className = "unite-card";

  const heading = document.createElement("h3");
  heading.className = "unite-heading";

  const toggleButton = document.createElement("button");
  toggleButton.className = "unite-summary";
  toggleButton.type = "button";
  toggleButton.setAttribute("aria-expanded", "false");

  const title = document.createElement("span");
  title.className = "unite-title";
  title.textContent = `${data.name} [${data.count}] - ${data.points}pts`;

  const icon = document.createElement("span");
  icon.className = "unite-icon";
  icon.textContent = "v";

  toggleButton.append(title, icon);
  heading.append(toggleButton);

  const content = document.createElement("div");
  content.className = "unite-content";
  content.hidden = true;

  const statsGrid = document.createElement("div");
  statsGrid.className = "unite-stats";
  data.stats.forEach((stat) => {
    const statRow = document.createElement("div");
    statRow.className = "unite-stat";

    const statLabel = document.createElement("span");
    statLabel.textContent = stat.label;

    const statBreak = document.createElement("span");
    statBreak.className = "unite-stat-break";

    const statValue = document.createElement("span");
    statValue.textContent = stat.value;

    statRow.append(statLabel, statBreak, statValue);
    statsGrid.append(statRow);
  });

  const ruleLine = document.createElement("p");
  ruleLine.className = "unite-rules";
  ruleLine.textContent = data.rules.join(", ");

  const weaponsTable = document.createElement("table");
  weaponsTable.className = "unite-table";
  weaponsTable.innerHTML =
    "<thead><tr><th>Weapon</th><th>RNG</th><th>ATK</th><th>PA</th><th>SPE</th></tr></thead>";
  const weaponsBody = document.createElement("tbody");
  data.weapons.forEach((weapon) => {
    const row = document.createElement("tr");
    row.append(
      createCell(weapon.name),
      createCell(weapon.range),
      createCell(weapon.attacks),
      createCell(weapon.armorPiercing),
      createCell(weapon.special)
    );
    weaponsBody.append(row);
  });
  weaponsTable.append(weaponsBody);

  const upgradesTable = document.createElement("table");
  upgradesTable.className = "unite-table";
  upgradesTable.innerHTML =
    "<thead><tr><th>Upgrade</th><th>SPE</th></tr></thead>";
  const upgradesBody = document.createElement("tbody");
  data.upgrades.forEach((upgrade) => {
    const row = document.createElement("tr");
    row.append(createCell(upgrade.name), createCell(upgrade.special));
    upgradesBody.append(row);
  });
  upgradesTable.append(upgradesBody);

  content.append(statsGrid, ruleLine, weaponsTable, upgradesTable);

  if (data.note) {
    const note = document.createElement("p");
    note.className = "unite-note";
    note.textContent = data.note;
    content.append(note);
  }

  toggleButton.addEventListener("click", () => {
    const opened = content.hidden;
    content.hidden = !opened;
    card.classList.toggle("unite-open", opened);
    toggleButton.setAttribute("aria-expanded", opened ? "true" : "false");
  });

  card.append(heading, content);
  return card;
};
