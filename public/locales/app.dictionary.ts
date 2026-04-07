export const appDictionary = {
  en: {
    appTitle: "🎲 Tombola's OPR Army Forge to TTS Tool",
    menuBar: {
      title: "Army-Forge > TTS",
      tools: "Tools",
    },
    tools: {
      title: "Tools",
      armyBookExtractor: {
        description:
          "Generate a JSON extraction from an Army Forge army book URL. Paste an `army-info` URL, then copy or download the normalized result.",
        inputLabel: "Army Forge army book URL",
        placeholder:
          "https://army-forge.onepagerules.com/army-info/grimdark-future/w7qor7b2kuifcyvk?armyId=XXX&armyName=Alien+Hives",
        help: "This tool expects an Army Forge `army-info` URL, not a share link.",
        detectedPrefix: "Detected source: ",
        invalidUrl:
          "This URL doesn't look like an Army Forge army-info URL.",
        fetchError:
          "The army book couldn't be fetched right now. Please verify the URL and try again.",
        generate: "Generate JSON",
        loading: "Generating...",
        copy: "Copy JSON",
        download: "Download JSON",
        outputTitle: "Extracted Output",
        outputReady: "JSON ready",
      },
    },
    bugReport: "If you find any bugs, please report them on the",
    githubIssuesPage: "github issues page",
    thanks: ". Thanks!",
    lightMode: "Switch app theme to Light mode",
    darkMode: "Switch app theme to Dark mode",
    armyForgeShareLink: "Army Forge Share Link",
    armyForgeShareLinkAtdr_1: "tl;dr: go to ",
    armyForge: "Army Forge",
    armyForgeShareLinkAtdr_2:
      '→ army listing → menu at the top right → click "Share as Link" → paste that link into the box below → define model definitions → hit "Generate shareable link for TTS" at the bottom of the screen → paste ',
    that: "that",
    armyForgeShareLinkAtdr_3: " URL into ",
    thisMod: "this mod",
    armyForgeShareLinkPlaceholder:
      "https://army-forge.onepagerules.com/share?id=XXX&name=XXX",
    importArmyAndGenerateDefinitions: "Import Army & Generate Definitions",
    inlineOptions: "Inline Options",
    toggleAllLoadoutItems:
      "Check to toggle ALL loadout items to be included in the model name",
    originalUnitLoadout: "Original Unit Loadout",
    modelDefinition: "Model Definition",
    deleteThisDistinctModelDefinition: "Delete this distinct model definition",
    quantityOfThisItemPerModel: "Quantity of this item per model",
    qtyPerModel: "Qty per. model",
    checkToIncludeThisItemInTheModelName:
      "Check to include this item in the model name",
    duplicateThisModelDefinition: "Duplicate this model definition",
    ttsOutputPreview: "TTS output preview (name and description)",
    generateShareableLinkForTts: "Generate shareable link for TTS",
    copyAndPasteLinkBelow: "Copy and paste the link below into the TTS mod",
    models: "models",
    model: "model",
    joinedTo: "joined to",
    combinedWith: "combined with",
    tutorialHeader: "How-To / Tutorial",
    tutorialInstruction1: "Build your army in OPR's Army Forge.",
    tutorialInstruction2:
      'Click the menu at the top right of that page and hit "Share as Link".',
    tutorialInstruction3: "Paste that link into the box above on this page.",
    tutorialInstruction4: 'Click "Import Army & Generate Definitions" above.',
    tutorialInstruction5:
      "This app will then build a model definition for each unit in your army.",
    tutorialInstruction6:
      "It's then up to you to then assign quantities of loadout items onto your model, as per your desired army:",
    tutorialInstruction6a:
      "Change the quantity of a model's loadout items using the inputs on the left.",
    tutorialInstruction6b:
      "Check the box next to a loadout item's quantity to have that item name be present in the model's TTS name.",
    tutorialInstruction6c:
      'Duplicate any model definition using the "Duplicate this model definition" button.',
    tutorialInstruction7:
      'Once you\'re done, hit "Generate shareable link for TTS" at the bottom, and then paste that URL into the TTS mod.',
    hint: "Hint",
    hintInstruction1:
      'Check the "TTS Output Configuration" options below to adjust what is included in each model\'s name and description fields in TTS.',
    ttsOutputConfigurationHeader: "TTS Output Configuration",
    ttsOutputConfiguration1: {
      name: 'Include "Core" special rules in model description',
      label:
        'If enabled, the TTS "description" outputs will include the model\'s relevant core special rules.',
    },
    ttsOutputConfiguration2: {
      name: "Include the full text for core special rules",
      label:
        "If enabled, the TTS \"description\" outputs will include the model's relevant core special rules text in full. If disabled, only the special rule's name will be included.",
    },
    ttsOutputConfiguration3: {
      name: 'Include "Army" special rules in model description',
      label:
        "If enabled, the TTS \"description\" outputs will include the model's relevant rules from the army, and from that model's loadout.",
    },
    ttsOutputConfiguration4: {
      name: "Include the full text for army special rules",
      label:
        "If enabled, the TTS \"description\" outputs will include the model's relevant army special rules text in full. If disabled, only the special rule's name will be included.",
    },
    ttsOutputConfiguration5: {
      name: 'Include "Loadout List" in model name',
      label:
        "If enabled, the TTS \"name\" output will include a comma separated, colour coded list of the model's equipped loadout under the model's name.",
    },
    ttsOutputConfiguration6: {
      name: 'Include "Special Rules List" in model name',
      label:
        "If enabled, the TTS \"name\" output will include a comma separated, colour coded list of the model's relevant special rules under the model's name.",
    },
    ttsOutputConfiguration7: {
      name: "Swap custom name and original name ordering for units with multiple models in them",
      label:
        "If enabled, then a unit with a custom name and whose original model size is greater than 1 will have the custom name in the brackets in the output, instead of the original name. This often looks better and makes more semantic sense.",
    },
    ttsOutputConfiguration8: {
      name: "Completely replace original model names with any custom name",
      label:
        "If enabled, then a unit with a custom name will have that custom name completely replace the original, with the original not being in brackets or anywhere else on the model.",
    },
    ttsOutputConfiguration9: {
      name: "Disable small text",
      label:
        "If enabled, then none of the text in the name or description will be small. Enable this if you have trouble reading the small text in TTS.",
    },
    ttsOutputConfigQualityOutputColour: {
      name: "Model Quality Stat Output Colour",
      label: "HEX code for the model's quality value in the TTS output.",
    },
    ttsOutputConfigDefenseOutputColour: {
      name: "Model Defense Stat Output Colour",
      label: "HEX code for the model's defense value in the TTS output.",
    },
    ttsOutputConfigLoadoutOutputColour: {
      name: "Model Loadout Stat Output Colour",
      label: "HEX code for the model's loadouts details in the TTS output.",
    },
    ttsOutputConfigSpecialRulesOutputColour: {
      name: "Model Special Rules Output Colour",
      label:
        "HEX code for the model's special rules details in the TTS output.",
    },
    ttsOutputConfigToughOutputColour: {
      name: "Model Tough Special Rule Rating Output Colour",
      label:
        "HEX code for the model's Tough rating, if it has one, in the TTS output.",
    },
    saveAndLoadTtsOutputConfigHeader: "Save & Load TTS Output Configs",
    saveAndLoadTtsOutputConfigsLabel:
      "Save All of the above configuration into the local storage of your browser by hitting the button below. You can then quickly load different configs by hitting the load buttons below.",
    saveCurrentConfigButton: "Save Current Config",
    loadAppDefaultConfigButton: "Load app default config",
    loadConfig: "Load Config",
    loadCustomConfigHeader: "Load Custom Configs",
    loadCustomConfigPlaceholder: "You have no saved TTS output configs",
    versionHistory: {
      title: "Version History / Whats New",
      v1_2: {
        title: "v 1.2",
        items: [
          'more scripting in the TTS mod itself! Now you can right click a model and see "Activated". As the name implies, this will toggle an activated state against <em>all</em> models in the given model\'s unit, and draws some shapes around the model to make it nice and easily skimmable of which models are activated. Maybe it\'ll prove useful!',
        ],
      },
      v1_1: {
        title: "v 1.1",
        items: [
          "support for custom names, and a handful of TTS output config options to go with it",
          "TTS output config option to disable small text. Will remove ALL the [sup] fields from the BB code.",
          'doing the TTS assignment will now give models some scripting! I hope to keep expanding this. The first thing is "Measuring Circles". Right click a model and keep clicking "Measuring Circle" to put a circle around that model. Should help you for any abilities like "all models within 9\'\'", stuff like that. The TTS mod is already updated, so just reload it and the new scripting should be there!',
          "tiny styling changes to this webapp.",
        ],
      },
    },
    outputFAQ: {
      title: "TTS Output Notes",
      items: [
        'Special upgrades that apply specifically to entire units (such as Age of Fantasy "Musician" upgrades) are listed as individual loadout items here. While this isn\'t technically perfect, it\'s the best compromise, and still allows the most flexibility.',
      ],
    },
  },
  fr: {
    appTitle: "🎲 Outil Tombola's pour conversion OPR Army Forge vers TTS",
    menuBar: {
      title: "Army-Forge > TTS",
      tools: "Outils",
    },
    tools: {
      title: "Outils",
      armyBookExtractor: {
        description:
          "Génère un JSON d'extraction à partir d'une URL de livre d'armée Army Forge. Collez une URL `army-info`, puis copiez ou téléchargez le résultat normalisé.",
        inputLabel: "URL du livre d'armée Army Forge",
        placeholder:
          "https://army-forge.onepagerules.com/army-info/grimdark-future/w7qor7b2kuifcyvk?armyId=XXX&armyName=Alien+Hives",
        help: "Cet outil attend une URL Army Forge de type `army-info`, pas un lien de partage.",
        detectedPrefix: "Source détectée : ",
        invalidUrl:
          "Cette URL ne ressemble pas à une URL Army Forge `army-info`.",
        fetchError:
          "Impossible de récupérer ce livre d'armée pour le moment. Vérifiez l'URL puis réessayez.",
        generate: "Générer le JSON",
        loading: "Génération...",
        copy: "Copier le JSON",
        download: "Télécharger le JSON",
        outputTitle: "Sortie extraite",
        outputReady: "JSON prêt",
      },
    },
    bugReport: "Si vous trouvez des bugs, merci de les signaler sur la",
    githubIssuesPage: "page des bugs de github",
    thanks: ". Merci !",
    lightMode: "Passer l'application en mode clair",
    darkMode: "Passer l'application en mode sombre",
    armyForgeShareLink: "Lien de partage Army Forge",
    armyForgeShareLinkAtdr_1: "tl;dr: allez dans ",
    armyForge: "Army Forge",
    armyForgeShareLinkAtdr_2:
      '→ liste d\'armée → menu en haut à droite → cliquez sur "Partager comme lien" → collez ce lien dans la case ci-dessous → définissez les modèles → cliquez sur "Générer un lien partageable pour TTS" en bas de l\'écran → collez ',
    that: "cette",
    armyForgeShareLinkAtdr_3: " URL dans ",
    thisMod: "ce mod",
    armyForgeShareLinkPlaceholder:
      "https://army-forge.onepagerules.com/share?id=XXX&name=XXX",
    importArmyAndGenerateDefinitions: "Importer l'armée et générer les définitions",
    inlineOptions: "Options en ligne",
    toggleAllLoadoutItems:
      "Cochez pour inclure TOUS les équipements dans le nom du modèle",
    originalUnitLoadout: "Équipement d'origine de l'unité",
    modelDefinition: "Définition du modèle",
    deleteThisDistinctModelDefinition: "Supprimer cette définition de modèle",
    quantityOfThisItemPerModel: "Quantité de cet objet par modèle",
    qtyPerModel: "Qté par modèle",
    checkToIncludeThisItemInTheModelName:
      "Cochez pour inclure cet objet dans le nom du modèle",
    duplicateThisModelDefinition: "Dupliquer cette définition de modèle",
    ttsOutputPreview: "Aperçu de la sortie TTS (nom et description)",
    generateShareableLinkForTts: "Générer un lien partageable pour TTS",
    copyAndPasteLinkBelow: "Copiez et collez le lien ci-dessous dans le mod TTS",
    models: "modèles",
    model: "modèle",
    joinedTo: "rejoint à",
    combinedWith: "combiné avec",
    tutorialHeader: "Tutoriel / Comment faire",
    tutorialInstruction1: "Construisez votre armée dans l'Army Forge d'OPR.",
    tutorialInstruction2:
      'Cliquez sur le menu en haut à droite de cette page et appuyez sur "Partager comme lien".',
    tutorialInstruction3: "Collez ce lien dans la case ci-dessus sur cette page.",
    tutorialInstruction4: 'Cliquez sur "Importer l\'armée et générer les définitions" ci-dessus.',
    tutorialInstruction5:
      "Cette application créera alors une définition de modèle pour chaque unité de votre armée.",
    tutorialInstruction6:
      "C'est ensuite à vous d'assigner des quantités d'équipements à votre modèle, selon l'armée que vous souhaitez :",
    tutorialInstruction6a:
      "Changez la quantité d'équipements d'un modèle en utilisant les champs à gauche.",
    tutorialInstruction6b:
      "Cochez la case à côté de la quantité d'un équipement pour que le nom de cet objet soit présent in le nom TTS du modèle.",
    tutorialInstruction6c:
      'Dupliquez n\'importe quelle définition de modèle en utilisant le bouton "Dupliquer cette définition de modèle".',
    tutorialInstruction7:
      'Une fois que vous avez terminé, appuyez sur "Générer un lien partageable pour TTS" en bas, puis collez cette URL dans le mod TTS.',
    hint: "Astuce",
    hintInstruction1:
      'Cochez les options de "Configuration de la sortie TTS" ci-dessous pour ajuster ce qui est inclus dans les champs de nom et de description de chaque modèle dans TTS.',
    ttsOutputConfigurationHeader: "Configuration de la sortie TTS",
    ttsOutputConfiguration1: {
      name: 'Inclure les règles spéciales "de base" dans la description du modèle',
      label:
        'Si activé, les sorties de "description" TTS incluront les règles spéciales de base pertinentes du modèle.',
    },
    ttsOutputConfiguration2: {
      name: "Inclure le texte complet pour les règles spéciales de base",
      label:
        "Si activé, les sorties de \"description\" TTS incluront le texte des règles spéciales de base pertinentes du modèle dans son intégralité. Si désactivé, seul le nom de la règle spéciale sera inclus.",
    },
    ttsOutputConfiguration3: {
      name: 'Inclure les règles spéciales "d\'armée" dans la description du modèle',
      label:
        "Si activé, les sorties de \"description\" TTS incluront les règles pertinentes de l'armée, et de l'équipement de ce modèle.",
    },
    ttsOutputConfiguration4: {
      name: "Inclure le texte complet pour les règles spéciales d'armée",
      label:
        "Si activé, les sorties de \"description\" TTS incluront le texte des règles spéciales d'armée pertinentes du modèle dans son intégralité. Si désactivé, seul le nom de la règle spéciale sera inclus.",
    },
    ttsOutputConfiguration5: {
      name: 'Inclure la "Liste d\'équipements" in le nom du modèle',
      label:
        "Si activé, la sortie de \"nom\" TTS inclura une liste d'équipements du modèle, séparée par des virgules et codée par couleur, sous le nom du modèle.",
    },
    ttsOutputConfiguration6: {
      name: 'Inclure la "Liste des règles spéciales" in le nom du modèle',
      label:
        "Si activé, la sortie de \"nom\" TTS inclura une liste des règles spéciales pertinentes du modèle, séparée par des virgules et codée par couleur, sous le nom du modèle.",
    },
    ttsOutputConfiguration7: {
      name: "Inverser l'ordre du nom personnalisé et du nom d'origine pour les unités ayant plusieurs modèles",
      label:
        "Si activé, une unité avec un nom personnalisé et dont la taille de modèle d'origine est supérieure à 1 aura le nom personnalisé entre parenthèses dans la sortie, au lieu du nom d'origine. C'est souvent plus joli et plus logique.",
    },
    ttsOutputConfiguration8: {
      name: "Remplacer complètement les noms de modèles d'origine par un nom personnalisé",
      label:
        "Si activé, une unité avec un nom personnalisé aura ce nom personnalisé qui remplacera complètement l'original, l'original n'étant ni entre parenthèses ni nulle part ailleurs sur le modèle.",
    },
    ttsOutputConfiguration9: {
      name: "Désactiver le petit texte",
      label:
        "Si activé, aucun texte dans le nom ou la description ne sera petit. Activez cette option si vous avez du mal à lire le petit texte dans TTS.",
    },
    ttsOutputConfigQualityOutputColour: {
      name: "Couleur de sortie des statistiques de qualité du modèle",
      label: "Code HEX pour la valeur de qualité du modèle dans la sortie TTS.",
    },
    ttsOutputConfigDefenseOutputColour: {
      name: "Couleur de sortie des statistiques de défense du modèle",
      label: "Code HEX pour la valeur de défense du modèle dans la sortie TTS.",
    },
    ttsOutputConfigLoadoutOutputColour: {
      name: "Couleur de sortie des statistiques d'équipement du modèle",
      label: "Code HEX pour les détails des équipements du modèle dans la sortie TTS.",
    },
    ttsOutputConfigSpecialRulesOutputColour: {
      name: "Couleur de sortie des règles spéciales du modèle",
      label:
        "Code HEX pour les détails des règles spéciales du modèle dans la sortie TTS.",
    },
    ttsOutputConfigToughOutputColour: {
      name: "Couleur de sortie de la note de la règle spéciale Résistant du modèle",
      label:
        "Code HEX pour la note de Résistant du modèle, s'il en a une, dans la sortie TTS.",
    },
    saveAndLoadTtsOutputConfigHeader: "Enregistrer et charger les configurations de sortie TTS",
    saveAndLoadTtsOutputConfigsLabel:
      "Enregistrez toute la configuration ci-dessus dans le stockage local de votre navigateur en cliquant sur le bouton ci-dessous. Vous pouvez ensuite charger rapidement différentes configurations en cliquant sur les boutons de chargement ci-dessous.",
    saveCurrentConfigButton: "Enregistrer la configuration actuelle",
    loadAppDefaultConfigButton: "Charger la configuration par défaut de l'application",
    loadConfig: "Charger la configuration",
    loadCustomConfigHeader: "Charger les configurations personnalisées",
    loadCustomConfigPlaceholder: "Vous n'avez aucune configuration de sortie TTS enregistrée",
    versionHistory: {
      title: "Historique des versions / Nouveautés",
      v1_2: {
        title: "v 1.2",
        items: [
          'plus de scripts dans le mod TTS lui-même ! Vous pouvez maintenant faire un clic droit sur un modèle et voir "Activé". Comme son nom l\'indique, cela activera un état activé pour <em>tous</em> les modèles de l\'unité donnée, et dessinera des formes autour du modèle pour le rendre agréable et facilement identifiable. Peut-être que cela s\'avérera utile !',
        ],
      },
      v1_1: {
        title: "v 1.1",
        items: [
          "prise en charge des noms personnalisés, et quelques options de configuration de sortie TTS pour aller avec",
          "option de configuration de sortie TTS pour désactiver le petit texte. Supprimera TOUS les champs [sup] du code BB.",
          'l\'assignation TTS donnera désormais aux modèles des scripts ! J\'espère continuer à développer cela. La première chose est les "Cercles de mesure". Faites un clic droit sur un modèle et continuez à cliquer sur "Cercle de mesure" pour mettre un cercle autour de ce modèle. Cela devrait vous aider pour toutes les capacités comme "tous les modèles à moins de 9\'\'", etc. Le mod TTS est déjà mis à jour, il suffit de le recharger et les nouveaux scripts devraient être là !',
          "petits changements de style pour cette application web.",
        ],
      },
    },
    outputFAQ: {
      title: "Notes de sortie TTS",
      items: [
        "Les améliorations spéciales qui s'appliquent spécifiquement à des unités entières (telles que les améliorations \"Musicien\" d'Age of Fantasy) sont répertoriées ici comme des éléments d'équipement individuels. Bien que ce ne soit pas techniquement parfait, c'est le meilleur compromis, et cela permet toujours la plus grande flexibilité.",
      ],
    },
  },
  de: {
    // data here
  },
};
