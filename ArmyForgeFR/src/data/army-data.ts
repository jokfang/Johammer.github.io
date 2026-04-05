export type Army = {
  code: string;
  name: string;
  subtitle: string;
  comment: string;
  version: string;
  visible: boolean;
  patreon: number;
};

export type Books = {
  code: string;
  title: string;
  name: string;
  description: string;
  body: string;
  version: string;
  visible: boolean;
  patreon: number;
};

export type ArmySystem = {
  title: string;
  short: string;
  description: string;
  core: Books[];
  armies: Army[];
};

export const ARMY_SYSTEMS: Record<string, ArmySystem> = {
  "4": {
    title: "Age of Fantasy",
    short: "AoF",
    description: "Armees de fantasy pour One Page Rules.",
    core: [
      {
        code: "core-rules",
        title: "Core rules",
        name: "Coeur des Regles",
        description: "Regles de base pour jouer a One Page Rules - Age of Fantasy",
        body: "<b>La regle la plus importante :</b> lorsque les regles ne sont pas claires, faites appel a votre bon sens et a vos preferences. Amusez-vous !<br><br><b>Test de Qualite :</b> jeter un de a six faces, si le resultat est egal ou superieur a la Qualite de la figurine, alors le Test est reussi.<br><br><b>Modificateurs :</b> independamment de tout modificateur, un jet de 6 est toujours une reussite, et un jet de 1 toujours un echec.",
        version: "3.5.1",
        visible: true,
        patreon: 0
      }
    ],
    armies: [
      { code: "beastmen", name: "Beastmen", subtitle: "", comment: "", version: "3.5.2", visible: true, patreon: 0 },
      { code: "change-disciples", name: "Change Disciples", subtitle: "", comment: "", version: "3.5.2", visible: true, patreon: 0 },
      { code: "chivalrous-kingdoms", name: "Chivalrous Kingdoms", subtitle: "", comment: "", version: "3.5.2", visible: true, patreon: 0 },
      { code: "dark-elves", name: "Dark Elves", subtitle: "", comment: "", version: "3.5.2", visible: true, patreon: 0 },
      { code: "deep-sea-elves", name: "Deep-Sea Elves", subtitle: "", comment: "", version: "3.5.2", visible: true, patreon: 0 },
      { code: "dragon-empire", name: "Dragon Empire", subtitle: "", comment: "", version: "3.5.1", visible: true, patreon: 0 },
      { code: "duchies-of-vinci", name: "Duchies of Vinci", subtitle: "", comment: "", version: "3.5.2", visible: true, patreon: 0 },
      { code: "dwarves", name: "Dwarves", subtitle: "", comment: "", version: "3.5.2", visible: true, patreon: 0 },
      { code: "eternal-wardens", name: "Eternal Wardens", subtitle: "", comment: "", version: "3.5.2", visible: true, patreon: 0 },
      { code: "ghostly-undead", name: "Ghostly Undead", subtitle: "", comment: "", version: "3.5.2", visible: true, patreon: 0 },
      { code: "giant-tribes", name: "Giant Tribes", subtitle: "", comment: "", version: "3.5.2", visible: true, patreon: 0 },
      { code: "goblins", name: "Goblins", subtitle: "", comment: "", version: "3.5.2", visible: true, patreon: 0 },
      { code: "halflings", name: "Halflings", subtitle: "", comment: "", version: "3.5.2", visible: true, patreon: 0 },
      { code: "havoc-dwarves", name: "Havoc Dwarves", subtitle: "", comment: "", version: "3.5.2", visible: true, patreon: 0 },
      { code: "havoc-warriors", name: "Havoc Warriors", subtitle: "", comment: "", version: "3.5.2", visible: true, patreon: 0 },
      { code: "high-elves", name: "High Elves", subtitle: "", comment: "", version: "3.5.2", visible: true, patreon: 0 },
      { code: "human-empire", name: "Human Empire", subtitle: "", comment: "", version: "3.5.2", visible: true, patreon: 0 },
      { code: "kingdom-of-angels", name: "Kingdom of Angels", subtitle: "", comment: "", version: "3.5.2", visible: true, patreon: 0 },
      { code: "lust-disciples", name: "Lust Disciples", subtitle: "", comment: "", version: "3.5.2", visible: true, patreon: 0 },
      { code: "mummified-undead", name: "Mummified Undead", subtitle: "", comment: "", version: "3.5.2", visible: true, patreon: 0 },
      { code: "ogres", name: "Ogres", subtitle: "", comment: "", version: "3.5.2", visible: true, patreon: 0 },
      { code: "orcs", name: "Orcs", subtitle: "", comment: "", version: "3.5.2", visible: true, patreon: 0 },
      { code: "ossified-undead", name: "Ossified Undead", subtitle: "", comment: "", version: "3.5.2", visible: true, patreon: 0 },
      { code: "plague-disciples", name: "Plague Disciples", subtitle: "", comment: "", version: "3.5.2", visible: true, patreon: 0 },
      { code: "ratmen", name: "Ratmen", subtitle: "", comment: "", version: "3.5.2", visible: true, patreon: 0 },
      { code: "rift-daemons-of-change", name: "Rift Daemons of Change", subtitle: "", comment: "", version: "3.5.2", visible: true, patreon: 0 },
      { code: "rift-daemons-of-lust", name: "Rift Daemons of Lust", subtitle: "", comment: "", version: "3.5.2", visible: true, patreon: 0 },
      { code: "rift-daemons-of-plague", name: "Rift Daemons of Plague", subtitle: "", comment: "", version: "3.5.2", visible: true, patreon: 0 },
      { code: "rift-daemons-of-war", name: "Rift Daemons of War", subtitle: "", comment: "", version: "3.5.2", visible: true, patreon: 0 },
      { code: "saurians", name: "Saurians", subtitle: "", comment: "", version: "3.5.2", visible: true, patreon: 0 },
      { code: "shadow-stalkers", name: "Shadow Stalkers", subtitle: "", comment: "", version: "3.5.2", visible: true, patreon: 0 },
      { code: "sky-city-dwarves", name: "Sky-City Dwarves", subtitle: "", comment: "", version: "3.5.2", visible: true, patreon: 0 },
      { code: "vampiric-undead", name: "Vampiric Undead", subtitle: "", comment: "", version: "3.5.2", visible: true, patreon: 0 },
      { code: "volcanic-dwarves", name: "Volcanic Dwarves", subtitle: "", comment: "", version: "3.5.2", visible: true, patreon: 0 },
      { code: "war-disciples", name: "War Disciples", subtitle: "", comment: "", version: "3.5.2", visible: true, patreon: 0 },
      { code: "wood-elves", name: "Wood Elves", subtitle: "", comment: "", version: "3.5.2", visible: true, patreon: 0 }
    ]
  },
  "2": {
    title: "Grimdark Future",
    short: "GF",
    description: "Armees de science-fiction pour One Page Rules.",
    core: [
      {
        code: "core-rules",
        title: "Core rules",
        name: "Coeur des Regles",
        description: "Regles de base pour jouer a One Page Rules - Grimdark Future",
        body: "Regles de base pour jouer a One Page Rules - Grimdark Future",
        version: "3.5.2",
        visible: true,
        patreon: 0
      }
    ],
    armies: [
      { code: "battle-brothers", name: "Battle Brothers", subtitle: "Super-soldats equilibres", comment: "Polyvalent", version: "3.5.1", visible: true, patreon: 0 },
      { code: "prime-brothers", name: "Prime Brothers", subtitle: "Infanterie d'elite et puissance de feu", comment: "Elite", version: "3.5.1", visible: true, patreon: 0 },
      { code: "alien-hives", name: "Alien Hives", subtitle: "Creatures predatrices et saturation", comment: "Corps-a-corps", version: "3.5.1", visible: true, patreon: 0 },
      { code: "robot-legions", name: "Robot Legions", subtitle: "Machines implacables et resilience", comment: "Defense", version: "3.5.1", visible: true, patreon: 0 },
      { code: "dao-union", name: "DAO Union", subtitle: "Tactiques de tir et drones", comment: "Tir", version: "3.5.1", visible: true, patreon: 0 },
      { code: "havoc-brothers", name: "Havoc Brothers", subtitle: "Guerriers corrompus et demoniaques", comment: "Agressif", version: "3.5.1", visible: true, patreon: 0 },
      { code: "orc-marauders", name: "Orc Marauders", subtitle: "Assauts massifs et vehicules bricoles", comment: "Pression", version: "3.5.1", visible: true, patreon: 0 },
      { code: "human-defense-force", name: "Human Defense Force", subtitle: "Combined arms et chars", comment: "Volume de feu", version: "3.5.1", visible: true, patreon: 0 }
    ]
  }
};

export const findArmy = (systeme: string, armee: string): Army | undefined => {
  const selectedSystem = ARMY_SYSTEMS[systeme];
  if (!selectedSystem) {
    return undefined;
  }

  const normalized = armee.trim().toLowerCase();
  return selectedSystem.armies.find((army) => army.code === normalized || army.name.toLowerCase() === normalized);
};

export const findBook = (systeme: string, livre: string): Books | undefined => {
  const selectedSystem = ARMY_SYSTEMS[systeme];
  if (!selectedSystem) {
    return undefined;
  }

  const normalized = livre.trim().toLowerCase();
  return selectedSystem.core.find(
    (book) => book.code === normalized || book.title.toLowerCase() === normalized || book.name.toLowerCase() === normalized
  );
};

export const getPdfNameForArmy = (systeme: ArmySystem, army: Army): string =>
  `${army.name}_${army.version}_${systeme.short}.pdf`;

export const getPdfNameForBook = (systeme: ArmySystem, book: Books): string =>
  `${book.name}_${book.version}_${systeme.short}.pdf`;

export const normalizePdfFileName = (value: string): string =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
