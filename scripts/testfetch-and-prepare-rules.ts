
import fs from "fs/promises";
import path from "path";

// Le système de jeu pour lequel récupérer les règles.
// Vous pouvez changer cette valeur pour "aof", "aofs", "gff", etc.
const GAME_SYSTEM = "gf";

const API_URL = `https://army-forge.onepagerules.com/api/rules/common/${GAME_SYSTEM}`;
const OUTPUT_DIR = path.join(process.cwd(), "public", "locales", "rules");
const OUTPUT_FILE = path.join(OUTPUT_DIR, "en.json");

interface Rule {
  name: string;
  description: string;
  // Je suppose que d'autres propriétés existent, mais seul 'name' est utilisé pour le moment.
  [key: string]: any;
}

async function fetchAndPrepareRules() {
  console.log(`Récupération des règles communes pour ${GAME_SYSTEM}...`);
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`Erreur HTTP ! Statut : ${response.status}`);
    }
    const rules: Rule[] = await response.json();
    console.log(`${rules.length} règles récupérées.`);

    const translations: { [key: string]: string } = {};

    for (const rule of rules) {
      // Nous utilisons le nom de la règle comme clé, en supposant que les noms sont uniques.
      if (rule.name) {
        translations[rule.name] = rule.name;
        if (rule.description) {
          const cleanedDescription = rule.description.replace(/(\r\n|\n|\r)/gm, " ").replace(/\s\s+/g, ' ');
          translations[`${rule.name}-desc`] = cleanedDescription;
        }
      }
    }

    console.log(`${Object.keys(translations).length} textes uniques extraits pour la traduction.`);

    // S'assurer que le dossier de sortie existe
    await fs.mkdir(OUTPUT_DIR, { recursive: true });

    // Écrire le fichier source en anglais
    await fs.writeFile(OUTPUT_FILE, JSON.stringify(translations, null, 2), "utf-8");

    console.log(`Fichier de traduction anglaise créé ici : ${OUTPUT_FILE}`);
    
    console.log("Prochaines étapes :");
    console.log("1. Si vous ne l'avez pas, installez ts-node : npm install -D ts-node");
    console.log(`2. Exécutez le script : ts-node ${path.join("scripts", "fetch-and-prepare-rules.ts")}`);
    console.log("3. Une fois le script exécuté, créez une copie de 'public/locales/rules/en.json' pour votre langue (ex: 'fr.json').");
    console.log("4. Traduisez les valeurs (pas les clés) dans ce nouveau fichier 'fr.json'.");
    console.log("5. Prévenez-moi quand c'est fait, et nous créerons le fichier 'src/common-rules.ts' pour charger ces traductions.");

  } catch (error) {
    console.error("Une erreur est survenue :", error);
  }
}

fetchAndPrepareRules();
