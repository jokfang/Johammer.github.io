export type RuleDescription = {
  system: string;
  text: string;
};

export type RuleTranslationEntry = {
  title: string;
  description: RuleDescription[];
};

export type RulesByLanguage = Record<string, Record<string, RuleTranslationEntry>>;

export const commonRules: RulesByLanguage = {
  "en": {
    "Aircraft": {
      "title": "Aircraft",
      "description": [
        {
          "system": "all",
          "text": "May only use Advance actions, moving in a straight line, and adding 30” to its total move (even if Shaken). Aircraft ignore all units and terrain when moving and stopping, can’t seize or contest objectives, can’t be charged, and units targeting them get -12” range."
        }
      ]
    },
    "Ambush": {
      "title": "Ambush",
      "description": [
        {
          "system": "all",
          "text": "May be set aside before deployment. At the start of any round after the first, may be deployed anywhere over 9” away from enemy units. Players alternate in placing Ambush units, starting with the player that activates next. Units that deploy via Ambush can’t seize or contest objectives on the round they deploy."
        },
        {
          "system": "aofr",
          "text": "May be set aside before deployment. At the start of any round after the first, may be deployed fully within 6” of any table edge, over 9\" away from enemy units. Players alternate in placing Ambush units, starting with the player that activates next. Units that deploy via Ambush can’t seize or contest objectives on the round they deploy."
        }
      ]
    },
    "AP": {
      "title": "AP",
      "description": [
        {
          "system": "all",
          "text": "Targets get -X to Defense rolls when blocking hits."
        }
      ]
    },
    "Artillery": {
      "title": "Artillery",
      "description": [
        {
          "system": "all",
          "text": "May only use Hold actions. When this model shoots at enemies over 9\" away, it gets +1 to hit rolls. When enemy units shoot at this model from over 9\" away, they get -2 to hit rolls."
        }
      ]
    },
    "Bane": {
      "title": "Bane",
      "description": [
        {
          "system": "all",
          "text": "Ignores Regeneration, and when attacking the target must re-roll unmodified Defense results of 6."
        }
      ]
    },
    "Banner": {
      "title": "Banner",
      "description": [
        {
          "system": "all",
          "text": "This model and up to 3 friendly units picked before the start of the game get +1 to morale test rolls. If this model is killed, picked models that are deployed lose the rule."
        },
        {
          "system": "gf",
          "text": "This model and its unit get +1 to morale test rolls."
        },
        {
          "system": "aof",
          "text": "This model and its unit get +1 to morale test rolls."
        },
        {
          "system": "aofr",
          "text": "This model and its unit get +1 to morale test rolls."
        }
      ]
    },
    "Blast": {
      "title": "Blast",
      "description": [
        {
          "system": "all",
          "text": "Ignores cover, and after resolving other special rules, each hit is multiplied by X, where X is up to as many hits as enemy models in the target unit and within 3” of it. Hits must be split evenly between all enemy units within 3” of any model from the target (defender picks how)."
        },
        {
          "system": "gf",
          "text": "Ignores cover, and after resolving other special rules, each hit is multiplied by X, where X is up to as many hits as models in the target unit."
        },
        {
          "system": "aof",
          "text": "Ignores cover, and after resolving other special rules, each hit is multiplied by X, where X is up to as many hits as models in the target unit."
        },
        {
          "system": "aofr",
          "text": "Ignores cover, and after resolving other special rules, each hit is multiplied by X, where X is up to as many hits as models in the target unit."
        }
      ]
    },
    "Caster": {
      "title": "Caster",
      "description": [
        {
          "system": "all",
          "text": "Gets X spell tokens at the start of each round, but can’t hold more than 6 tokens at once. At any point before attacking, spend as many tokens as the spell’s value to try casting one or more spells (only one try per spell). Roll one die, on 4+ resolve the effect on a target in line of sight. Models within 18” in line of sight of the caster’s unit may spend any number of spell tokens at the same time before rolling, to give the caster +1/-1 to the roll per token."
        },
        {
          "system": "aofr",
          "text": "Gets X spell tokens at the start of each round, but can’t hold more than 6 tokens at once. At any point before attacking, spend as many tokens as the spell’s value to try casting one or more spells (only one try per spell). Roll one die, on 4+ resolve the effect on a target in line of sight in any direction. Models within 18” in line of sight of the caster’s unit may spend any number of spell tokens at the same time before rolling, to give the caster +1/-1 to the roll per token."
        }
      ]
    },
    "Counter": {
      "title": "Counter",
      "description": [
        {
          "system": "all",
          "text": "Strikes first with this weapon when charged, and the charging unit gets -1 total Impact rolls per model with Counter."
        },
        {
          "system": "aofr",
          "text": "Strikes first with this weapon when charged, and the charging unit gets -1 total Impact rolls per model with Counter in the two front rows if charging in the front."
        }
      ]
    },
    "Deadly": {
      "title": "Deadly",
      "description": [
        {
          "system": "all",
          "text": "Assign each wound to one model, and multiply it by X. Hits from Deadly must be resolved first, and these wounds don’t carry over to other models if the original target is killed."
        }
      ]
    },
    "Entrenched": {
      "title": "Entrenched",
      "description": [
        {
          "system": "all",
          "text": "As long as a unit where all models have this rule hasn't moved during the round, enemy units shooting at it from over 9\" away get -2 to hit rolls."
        }
      ]
    },
    "Fast": {
      "title": "Fast",
      "description": [
        {
          "system": "all",
          "text": "Moves +2\" when using Advance, and +4” when using Rush/Charge."
        }
      ]
    },
    "Fear": {
      "title": "Fear",
      "description": [
        {
          "system": "all",
          "text": "This model counts as having dealt +X wounds when checking wound effects in melee (must deal at least one wound)."
        },
        {
          "system": "gf",
          "text": "This model counts as having dealt +X wounds when checking who won melee."
        },
        {
          "system": "aof",
          "text": "This model counts as having dealt +X wounds when checking who won melee."
        },
        {
          "system": "aofr",
          "text": "This model counts as having dealt +X wounds when checking who won melee."
        }
      ]
    },
    "Fearless": {
      "title": "Fearless",
      "description": [
        {
          "system": "all",
          "text": "When a unit where all models have this rule fails a morale test, roll one die. On a 4+ it counts as passed instead."
        }
      ]
    },
    "Flying": {
      "title": "Flying",
      "description": [
        {
          "system": "all",
          "text": "May move through units and terrain, and ignores terrain effects whilst moving, and automatically passes jumping rolls."
        },
        {
          "system": "gf",
          "text": "May move through units and terrain, and ignores terrain effects whilst moving."
        },
        {
          "system": "aof",
          "text": "May move through units and terrain, and ignores terrain effects whilst moving."
        },
        {
          "system": "aofr",
          "text": "May move through units and terrain, and ignores terrain effects whilst moving."
        }
      ]
    },
    "Furious": {
      "title": "Furious",
      "description": [
        {
          "system": "all",
          "text": "When charging, unmodified results of 6 to hit in melee deal 1 extra hit (only the original hit counts as a 6 for special rules)."
        }
      ]
    },
    "Hero": {
      "title": "Hero",
      "description": [
        {
          "system": "all",
          "text": "Friendly units within 12” may take morale tests using the hero’s Quality, as long as the hero isn’t Shaken. "
        },
        {
          "system": "gf",
          "text": "Heroes with up to Tough(6) may deploy as part of one multi-model unit without another Hero. The hero may take morale tests on behalf of the unit, but must use the unit’s Defense until all other models have been killed."
        },
        {
          "system": "aof",
          "text": "Heroes with up to Tough(6) may deploy as part of one multi-model unit without another Hero. The hero may take morale tests on behalf of the unit, but must use the unit’s Defense until all other models have been killed."
        },
        {
          "system": "aofr",
          "text": "Heroes with up to Tough(6) may deploy as part of one multi-model unit without another Hero. The hero may take morale tests on behalf of the unit, but must use the unit’s Defense until all other models have been killed."
        }
      ]
    },
    "Immobile": {
      "title": "Immobile",
      "description": [
        {
          "system": "all",
          "text": "May only use Hold actions."
        }
      ]
    },
    "Impact": {
      "title": "Impact",
      "description": [
        {
          "system": "all",
          "text": "Roll X dice when attacking after charging, unless fatigued. For each 2+ the target takes one hit."
        },
        {
          "system": "aofr",
          "text": "Models in the two front rows roll X dice when attacking after charging, unless fatigued. For each 2+ the target takes one hit."
        }
      ]
    },
    "Indirect": {
      "title": "Indirect",
      "description": [
        {
          "system": "all",
          "text": "Gets -1 to hit rolls when shooting after moving. May target enemies that are not in line of sight as if in line of sight, and ignores cover from sight obstructions."
        }
      ]
    },
    "Limited": {
      "title": "Limited",
      "description": [
        {
          "system": "all",
          "text": "May only be used once per game."
        }
      ]
    },
    "Morale": {
      "title": "Morale",
      "description": [
        {
          "system": "all",
          "text": "Gets +X to morale test rolls."
        }
      ]
    },
    "Musician": {
      "title": "Musician",
      "description": [
        {
          "system": "all",
          "text": "This model and up to 3 friendly units picked before the start of the game moves +1\" when using move actions. If this model is killed, picked models that are deployed lose the rule."
        },
        {
          "system": "gf",
          "text": "This model and its unit moves +1\" when using move actions."
        },
        {
          "system": "aof",
          "text": "This model and its unit moves +1\" when using move actions."
        },
        {
          "system": "aofr",
          "text": "This model and its unit moves +1\" when using move actions."
        }
      ]
    },
    "Regeneration": {
      "title": "Regeneration",
      "description": [
        {
          "system": "all",
          "text": "When a unit where all models have this rule takes wounds, roll one die for each. On a 5+ it is ignored."
        }
      ]
    },
    "Relentless": {
      "title": "Relentless",
      "description": [
        {
          "system": "all",
          "text": "When this model shoots at enemies over 9\" away, unmodified results of 6 to hit deal 1 extra hit (only the original hit counts as a 6 for special rules)."
        }
      ]
    },
    "Reliable": {
      "title": "Reliable",
      "description": [
        {
          "system": "all",
          "text": "Attacks at Quality 2+."
        }
      ]
    },
    "Rending": {
      "title": "Rending",
      "description": [
        {
          "system": "all",
          "text": "Ignores Regeneration, and on unmodified results of 6 to hit, those hits get AP(+4)."
        }
      ]
    },
    "Scout": {
      "title": "Scout",
      "description": [
        {
          "system": "all",
          "text": "May be set aside before deployment. After all other units are deployed, may be deployed anywhere fully within 12” of their deployment zone. Players alternate in placing Scout units, starting with the player that activates next."
        }
      ]
    },
    "Slow": {
      "title": "Slow",
      "description": [
        {
          "system": "all",
          "text": "Moves -2\" when using Advance, and -4” when using Rush/Charge."
        }
      ]
    },
    "Sniper REMOVE": {
      "title": "Sniper REMOVE",
      "description": [
        {
          "system": "all",
          "text": "Shoots at Quality 2+, and each model with Sniper may pick any model in the target unit as its individual target, which is resolved as if it was a unit of 1. Sniper shooting must be resolved before other weapons."
        }
      ]
    },
    "Stealth": {
      "title": "Stealth",
      "description": [
        {
          "system": "all",
          "text": "When units where all models have this rule are shot from over 9\" away, enemy units get -1 to hit rolls."
        }
      ]
    },
    "Strider": {
      "title": "Strider",
      "description": [
        {
          "system": "all",
          "text": "May ignore the effects of difficult terrain when moving, and only needs 2+ to pass jumping rolls."
        },
        {
          "system": "gf",
          "text": "May ignore the effects of difficult terrain when moving. "
        },
        {
          "system": "aof",
          "text": "May ignore the effects of difficult terrain when moving. "
        },
        {
          "system": "aofr",
          "text": "May ignore the effects of difficult terrain when moving. "
        }
      ]
    },
    "Takedown": {
      "title": "Takedown",
      "description": [
        {
          "system": "all",
          "text": "This model may pick any model in the target unit as its individual target, which is resolved as if it was a unit of [1]. Takedown attacks must be resolved before other weapons."
        }
      ]
    },
    "Thrust": {
      "title": "Thrust",
      "description": [
        {
          "system": "all",
          "text": "When charging, gets +1 to hit rolls and AP(+1) in melee."
        }
      ]
    },
    "Tough": {
      "title": "Tough",
      "description": [
        {
          "system": "all",
          "text": "This model only rolls to check wound effects once it has taken at least X wounds, and is only Knocked Out on rolls of 5+X or more."
        },
        {
          "system": "gf",
          "text": "This model must take X wounds before being killed. If a model with tough joins a unit without it, then it is removed last when the unit takes wounds. You must continue to put wounds on the tough model with most wounds in the unit until it is killed, before starting to put them on the next tough model (heroes must be assigned wounds last, even if already wounded)."
        },
        {
          "system": "aof",
          "text": "This model must take X wounds before being killed. If a model with tough joins a unit without it, then it is removed last when the unit takes wounds. You must continue to put wounds on the tough model with most wounds in the unit until it is killed, before starting to put them on the next tough model (heroes must be assigned wounds last, even if already wounded)."
        },
        {
          "system": "aofr",
          "text": "This model must take X wounds before being killed. If a model with tough joins a unit without it, then it is removed last when the unit takes wounds. You must continue to put wounds on the tough model with most wounds in the unit until it is killed, before starting to put them on the next tough model (heroes must be assigned wounds last, even if already wounded)."
        }
      ]
    },
    "Transport": {
      "title": "Transport",
      "description": [
        {
          "system": "all",
          "text": "May transport up to X models or Heroes with up to Tough(6), and non-Heroes with up to Tough(3) which occupy 3 spaces each. Transports may deploy with units inside, and units may enter/exit by using any move action, but must stay fully within 6\" of it when exiting. Units inside/outside transports may not target other units outside/inside transports, but may target the transport itself. When a transport is destroyed, units inside must take a dangerous terrain test, are Shaken, and must be placed fully within 6” of the transport before it’s removed."
        }
      ]
    },
    "Unstoppable": {
      "title": "Unstoppable",
      "description": [
        {
          "system": "all",
          "text": "Ignores Regeneration, and ignores all negative modifiers to this weapon."
        }
      ]
    },
    "Suppressor": {
      "title": "Suppressor",
      "description": [
        {
          "system": "all",
          "text": "Enemies that are shot at by the hero get -1 to hit when shooting until the end of the round."
        }
      ]
    },
    "Blinded Eye": {
      "title": "Blinded Eye",
      "description": [
        {
          "system": "all",
          "text": "Gets -1 to rolls when shooting."
        }
      ]
    },
    "Natural Talent": {
      "title": "Natural Talent",
      "description": [
        {
          "system": "all",
          "text": "The hero recovers and gets +1 XP."
        }
      ]
    },
    "Agile": {
      "title": "Agile",
      "description": [
        {
          "system": "all",
          "text": "Moves +1\" on advance and +2” on rush and charge."
        }
      ]
    },
    "Berserker": {
      "title": "Berserker",
      "description": [
        {
          "system": "all",
          "text": "Enemies get +1 to wound effect rolls when taking wounds from the hero in melee."
        }
      ]
    },
    "Fast Learner": {
      "title": "Fast Learner",
      "description": [
        {
          "system": "all",
          "text": "May pick any other trait from the list."
        }
      ]
    },
    "Bitter Rivalry": {
      "title": "Bitter Rivalry",
      "description": [
        {
          "system": "all",
          "text": "Gets +1 to hit against enemy heroes."
        }
      ]
    },
    "Duellist": {
      "title": "Duellist",
      "description": [
        {
          "system": "all",
          "text": "Enemy units get -1 in melee against the hero."
        }
      ]
    },
    "Climber": {
      "title": "Climber",
      "description": [
        {
          "system": "all",
          "text": "The hero needs to roll only 2+ when jumping."
        }
      ]
    },
    "Mastermind": {
      "title": "Mastermind",
      "description": [
        {
          "system": "all",
          "text": "Enemy units within 6\" of the Hero get -1 Defense."
        }
      ]
    },
    "Tactician": {
      "title": "Tactician",
      "description": [
        {
          "system": "all",
          "text": "Friendly units that activate within 6\" of the Hero get +1 to hit when shooting."
        }
      ]
    },
    "Hunter": {
      "title": "Hunter",
      "description": [
        {
          "system": "all",
          "text": "The hero may shoot even after rush actions."
        }
      ]
    },
    "Arm Injury": {
      "title": "Arm Injury",
      "description": [
        {
          "system": "all",
          "text": "Gets -1 to rolls when in melee."
        }
      ]
    },
    "Leader": {
      "title": "Leader",
      "description": [
        {
          "system": "all",
          "text": "Friendly units within 6\" of the Hero get +1 to morale test rolls."
        }
      ]
    },
    "Destroyer": {
      "title": "Destroyer",
      "description": [
        {
          "system": "all",
          "text": "The hero gets AP(+1) when shooting."
        }
      ]
    },
    "Herbalist": {
      "title": "Herbalist",
      "description": [
        {
          "system": "all",
          "text": "Friendly units within 6\" may ignore wounds on a roll of 6+."
        }
      ]
    },
    "Fanatic": {
      "title": "Fanatic",
      "description": [
        {
          "system": "all",
          "text": "The hero gets +1 attack when in melee."
        }
      ]
    },
    "Vanguard": {
      "title": "Vanguard",
      "description": [
        {
          "system": "all",
          "text": "Friendly units that activate within 6\" move +4” when using Charge actions."
        }
      ]
    },
    "Motivated": {
      "title": "Motivated",
      "description": [
        {
          "system": "all",
          "text": "Always passes the first morale test of the match."
        }
      ]
    },
    "Resilient": {
      "title": "Resilient",
      "description": [
        {
          "system": "all",
          "text": "Gets +1 to rolls when blocking hits."
        }
      ]
    },
    "Chemist": {
      "title": "Chemist",
      "description": [
        {
          "system": "all",
          "text": "Friendly units within 6” of the Hero get -1 to wound effect rolls."
        }
      ]
    },
    "Warden": {
      "title": "Warden",
      "description": [
        {
          "system": "all",
          "text": "When the hero is activated all friendly units within 6” of the hero stop being shaken."
        }
      ]
    },
    "Specialist": {
      "title": "Specialist",
      "description": [
        {
          "system": "all",
          "text": "Gets +1 to hit rolls in melee or shooting (pick one)."
        }
      ]
    },
    "Instigator": {
      "title": "Instigator",
      "description": [
        {
          "system": "all",
          "text": "Friendly units that activate within 6\" of the Hero get +1 to hit when in melee."
        }
      ]
    },
    "Crazed": {
      "title": "Crazed",
      "description": [
        {
          "system": "all",
          "text": "Gets +1 attack in melee when charging."
        }
      ]
    },
    "Headstrong": {
      "title": "Headstrong",
      "description": [
        {
          "system": "all",
          "text": "Gets +1 to rolls when taking morale tests."
        }
      ]
    },
    "Elite": {
      "title": "Elite",
      "description": [
        {
          "system": "all",
          "text": "May re-roll one roll of any kind once per round."
        }
      ]
    },
    "Toughened": {
      "title": "Toughened",
      "description": [
        {
          "system": "all",
          "text": "Gets Tough(+1)."
        }
      ]
    },
    "Scavenger": {
      "title": "Scavenger",
      "description": [
        {
          "system": "all",
          "text": "Friendly units that activate within 6\" of the Hero get +6” range when shooting."
        }
      ]
    },
    "Dead": {
      "title": "Dead",
      "description": [
        {
          "system": "all",
          "text": "Remove the hero from your strike team sheet."
        }
      ]
    },
    "Smashed Leg": {
      "title": "Smashed Leg",
      "description": [
        {
          "system": "all",
          "text": "Moves -1\" on advance and -2” on rush and charge actions."
        }
      ]
    },
    "Horrible Scars": {
      "title": "Horrible Scars",
      "description": [
        {
          "system": "all",
          "text": "Enemy units get -1 to hit when in melee against the hero."
        }
      ]
    },
    "Traumatized": {
      "title": "Traumatized",
      "description": [
        {
          "system": "all",
          "text": "Gets -1 to rolls when taking morale tests."
        }
      ]
    },
    "Prowler": {
      "title": "Prowler",
      "description": [
        {
          "system": "all",
          "text": "Enemy units further than 12\" get -1 to hit rolls when shooting at the hero."
        }
      ]
    },
    "Runner": {
      "title": "Runner",
      "description": [
        {
          "system": "all",
          "text": "The hero always moves +2\" (even in terrain)."
        }
      ]
    },
    "Chest Wound": {
      "title": "Chest Wound",
      "description": [
        {
          "system": "all",
          "text": "Gets -1 to rolls when blocking hits."
        }
      ]
    }
  },
  "fr": {
    "Aircraft": {
      "title": "Aéronef",
      "description": [
        {
          "system": "all",
          "text": "Ne peut utiliser que des actions d'Avancée, se déplaçant en ligne droite et ajoutant 30\" à son mouvement total (même si Secoué). Les aéronefs ignorent toutes les unités et tous les terrains lors de leurs déplacements et arrêts, ne peuvent pas prendre ou contester des objectifs, ne peuvent pas être chargés, et les unités qui les ciblent ont une portée réduite de 12\"."
        }
      ]
    },
    "Ambush": {
      "title": "Embuscade",
      "description": [
        {
          "system": "all",
          "text": "Peut être mis de côté avant le déploiement. Au début de n'importe quel tour après le premier, peut être déployé n'importe où à plus de 9\" des unités ennemies. Les joueurs placent alternativement les unités en Embuscade, en commençant par le joueur qui active ensuite. Les unités qui se déploient via Embuscade ne peuvent pas prendre ou contester des objectifs le tour où elles se déploient."
        },
        {
          "system": "aofr",
          "text": "Peut etre mis de cote avant le deploiement. Au debut de n'importe quel tour apres le premier, peut etre deploye entierement a moins de 6? de n'importe quel bord de table, a plus de 9\" des unites ennemies. Les joueurs placent alternativement les unites en Embuscade, en commencant par le joueur qui active ensuite. Les unites qui se deploient via Embuscade ne peuvent pas prendre ou contester des objectifs le tour ou elles se deploient."
        }
      ]
    },
    "AP": {
      "title": "PA",
      "description": [
        {
          "system": "all",
          "text": "Les cibles subissent -X à leurs jets de Défense lorsqu'elles bloquent des touches."
        }
      ]
    },
    "Artillery": {
      "title": "Artillerie",
      "description": [
        {
          "system": "all",
          "text": "Ne peut utiliser que des actions de Maintien. Lorsque ce modèle tire sur des ennemis à plus de 9\" de distance, il obtient +1 à ses jets pour toucher. Lorsque des unités ennemies tirent sur ce modèle à plus de 9\" de distance, elles subissent -2 à leurs jets pour toucher."
        }
      ]
    },
    "Bane": {
      "title": "Fléau",
      "description": [
        {
          "system": "all",
          "text": "Ignore la Régénération, et lors de l'attaque, la cible doit relancer les résultats de Défense non modifiés de 6."
        }
      ]
    },
    "Banner": {
      "title": "Bannière",
      "description": [
        {
          "system": "all",
          "text": "Ce modèle et jusqu'à 3 unités amies choisies avant le début de la partie obtiennent +1 à leurs jets de test de moral. Si ce modèle est tué, les modèles choisis qui sont déployés perdent cette règle."
        },
        {
          "system": "gf",
          "text": "Ce modele et son unite obtiennent +1 a leurs jets de test de moral."
        },
        {
          "system": "aof",
          "text": "Ce modele et son unite obtiennent +1 a leurs jets de test de moral."
        },
        {
          "system": "aofr",
          "text": "Ce modele et son unite obtiennent +1 a leurs jets de test de moral."
        }
      ]
    },
    "Blast": {
      "title": "Explosion",
      "description": [
        {
          "system": "all",
          "text": "Ignore le couvert, et après avoir résolu les autres règles spéciales, chaque touche est multipliée par X, où X peut aller jusqu'au nombre de modèles ennemis dans l'unité cible et à moins de 3\" de celle-ci. Les touches doivent être réparties équitablement entre toutes les unités ennemies à moins de 3\" de n'importe quel modèle de la cible (le défenseur choisit comment)."
        },
        {
          "system": "gf",
          "text": "Ignore le couvert, et apres avoir resolu les autres regles speciales, chaque touche est multipliee par X, ou X est au maximum egal au nombre de modeles dans l'unite cible."
        },
        {
          "system": "aof",
          "text": "Ignore le couvert, et apres avoir resolu les autres regles speciales, chaque touche est multipliee par X, ou X est au maximum egal au nombre de modeles dans l'unite cible."
        },
        {
          "system": "aofr",
          "text": "Ignore le couvert, et apres avoir resolu les autres regles speciales, chaque touche est multipliee par X, ou X est au maximum egal au nombre de modeles dans l'unite cible."
        }
      ]
    },
    "Caster": {
      "title": "Lanceur de sorts",
      "description": [
        {
          "system": "all",
          "text": "Reçoit X jetons de sort au début de chaque tour, mais ne peut pas détenir plus de 6 jetons à la fois. À tout moment avant d'attaquer, dépensez autant de jetons que la valeur du sort pour tenter de lancer un ou plusieurs sorts (un seul essai par sort). Lancez un dé, sur un 4+ résolvez l'effet sur une cible en ligne de vue. Les modèles à moins de 18\" en ligne de vue de l'unité du lanceur de sorts peuvent dépenser n'importe quel nombre de jetons de sort en même temps avant de lancer, pour donner au lanceur +1/-1 au jet par jeton."
        },
        {
          "system": "aofr",
          "text": "Recoit X jetons de sort au debut de chaque tour, mais ne peut pas detenir plus de 6 jetons a la fois. A tout moment avant d'attaquer, depensez autant de jetons que la valeur du sort pour tenter de lancer un ou plusieurs sorts (un seul essai par sort). Lancez un de, sur un 4+ resolvez l'effet sur une cible en ligne de vue dans n'importe quelle direction. Les modeles a moins de 18? en ligne de vue de l'unite du lanceur de sorts peuvent depenser n'importe quel nombre de jetons de sort en meme temps avant de lancer, pour donner au lanceur +1/-1 au jet par jeton."
        }
      ]
    },
    "Counter": {
      "title": "Contre",
      "description": [
        {
          "system": "all",
          "text": "Frappe en premier avec cette arme lorsqu'il est chargé, et l'unité chargeante subit -1 au total des jets d'Impact par modèle avec Contre."
        },
        {
          "system": "aofr",
          "text": "Frappe en premier avec cette arme lorsqu'il est charge, et l'unite chargeante subit -1 au total des jets d'Impact par modele avec Contre dans les deux rangs avant en cas de charge de front."
        }
      ]
    },
    "Deadly": {
      "title": "Mortel",
      "description": [
        {
          "system": "all",
          "text": "Assignez chaque blessure à un modèle et multipliez-la par X. Les touches de Mortel doivent être résolues en premier, et ces blessures ne se reportent pas sur d'autres modèles si la cible d'origine est tuée."
        }
      ]
    },
    "Entrenched": {
      "title": "Tranché",
      "description": [
        {
          "system": "all",
          "text": "Tant qu'une unité où tous les modèles ont cette règle n'a pas bougé pendant le tour, les unités ennemies qui lui tirent dessus à plus de 9\" de distance subissent -2 à leurs jets pour toucher."
        }
      ]
    },
    "Fast": {
      "title": "Rapide",
      "description": [
        {
          "system": "all",
          "text": "Se déplace de +2\" en utilisant Avancée, et de +4\" en utilisant Précipitation/Charge."
        }
      ]
    },
    "Fear": {
      "title": "Peur",
      "description": [
        {
          "system": "all",
          "text": "Ce modèle compte comme ayant infligé +X blessures lors de la vérification des effets de blessure en mêlée (doit infliger au moins une blessure)."
        },
        {
          "system": "gf",
          "text": "Ce modele compte comme ayant inflige +X blessures lorsqu'on determine qui a gagne la melee."
        },
        {
          "system": "aof",
          "text": "Ce modele compte comme ayant inflige +X blessures lorsqu'on determine qui a gagne la melee."
        },
        {
          "system": "aofr",
          "text": "Ce modele compte comme ayant inflige +X blessures lorsqu'on determine qui a gagne la melee."
        }
      ]
    },
    "Fearless": {
      "title": "Sans peur",
      "description": [
        {
          "system": "all",
          "text": "Lorsqu'une unité où tous les modèles ont cette règle échoue à un test de moral, lancez un dé. Sur un 4+, il est considéré comme réussi à la place."
        }
      ]
    },
    "Flying": {
      "title": "Volant",
      "description": [
        {
          "system": "all",
          "text": "Peut se déplacer à travers les unités et le terrain, ignore les effets du terrain lors de ses déplacements et réussit automatiquement les jets de saut."
        },
        {
          "system": "gf",
          "text": "Peut se deplacer a travers les unites et le terrain, et ignore les effets du terrain lors de ses deplacements."
        },
        {
          "system": "aof",
          "text": "Peut se deplacer a travers les unites et le terrain, et ignore les effets du terrain lors de ses deplacements."
        },
        {
          "system": "aofr",
          "text": "Peut se deplacer a travers les unites et le terrain, et ignore les effets du terrain lors de ses deplacements."
        }
      ]
    },
    "Furious": {
      "title": "Furieux",
      "description": [
        {
          "system": "all",
          "text": "Lors d'une charge, les résultats non modifiés de 6 pour toucher en mêlée infligent 1 touche supplémentaire (seule la touche originale compte comme un 6 pour les règles spéciales)."
        }
      ]
    },
    "Hero": {
      "title": "Héros",
      "description": [
        {
          "system": "all",
          "text": "Les unités amies à moins de 12\" peuvent effectuer des tests de moral en utilisant la Qualité du héros, tant que le héros n'est pas Secoué."
        },
        {
          "system": "gf",
          "text": "Les heros avec jusqu'a Robuste(6) peuvent etre deployes comme partie d'une unite multi-modeles sans autre Heros. Le heros peut faire des tests de moral au nom de l'unite, mais doit utiliser la Defense de l'unite jusqu'a ce que tous les autres modeles aient ete tues."
        },
        {
          "system": "aof",
          "text": "Les heros avec jusqu'a Robuste(6) peuvent etre deployes comme partie d'une unite multi-modeles sans autre Heros. Le heros peut faire des tests de moral au nom de l'unite, mais doit utiliser la Defense de l'unite jusqu'a ce que tous les autres modeles aient ete tues."
        },
        {
          "system": "aofr",
          "text": "Les heros avec jusqu'a Robuste(6) peuvent etre deployes comme partie d'une unite multi-modeles sans autre Heros. Le heros peut faire des tests de moral au nom de l'unite, mais doit utiliser la Defense de l'unite jusqu'a ce que tous les autres modeles aient ete tues."
        }
      ]
    },
    "Immobile": {
      "title": "Immobile",
      "description": [
        {
          "system": "all",
          "text": "Ne peut utiliser que des actions de Maintien."
        }
      ]
    },
    "Impact": {
      "title": "Impact",
      "description": [
        {
          "system": "all",
          "text": "Lancez X dés lors d'une attaque après une charge, sauf si fatigué. Pour chaque 2+, la cible subit une touche."
        },
        {
          "system": "aofr",
          "text": "Les modeles des deux rangs avant lancent X des lors d'une attaque apres une charge, sauf s'ils sont fatigues. Pour chaque 2+, la cible subit une touche."
        }
      ]
    },
    "Indirect": {
      "title": "Indirect",
      "description": [
        {
          "system": "all",
          "text": "Subit -1 à ses jets pour toucher en tirant après s'être déplacé. Peut cibler des ennemis qui ne sont pas en ligne de vue comme s'ils l'étaient, et ignore le couvert des obstructions de vue."
        }
      ]
    },
    "Limited": {
      "title": "Limité",
      "description": [
        {
          "system": "all",
          "text": "Ne peut être utilisé qu'une fois par partie."
        }
      ]
    },
    "Morale": {
      "title": "Moral",
      "description": [
        {
          "system": "all",
          "text": "Obtient +X aux jets de test de moral."
        }
      ]
    },
    "Musician": {
      "title": "Musicien",
      "description": [
        {
          "system": "all",
          "text": "Ce modèle et jusqu'à 3 unités amies choisies avant le début de la partie se déplacent de +1\" lorsqu'ils utilisent des actions de mouvement. Si ce modèle est tué, les modèles choisis qui sont déployés perdent cette règle."
        },
        {
          "system": "gf",
          "text": "Ce modele et son unite se deplacent de +1\" lorsqu'ils utilisent des actions de mouvement."
        },
        {
          "system": "aof",
          "text": "Ce modele et son unite se deplacent de +1\" lorsqu'ils utilisent des actions de mouvement."
        },
        {
          "system": "aofr",
          "text": "Ce modele et son unite se deplacent de +1\" lorsqu'ils utilisent des actions de mouvement."
        }
      ]
    },
    "Regeneration": {
      "title": "Régénération",
      "description": [
        {
          "system": "all",
          "text": "Lorsqu'une unité où tous les modèles ont cette règle subit des blessures, lancez un dé pour chacune. Sur un 5+, elle est ignorée."
        }
      ]
    },
    "Relentless": {
      "title": "Implacable",
      "description": [
        {
          "system": "all",
          "text": "Lorsque ce modèle tire sur des ennemis à plus de 9\" de distance, les résultats non modifiés de 6 pour toucher infligent 1 touche supplémentaire (seule la touche originale compte comme un 6 pour les règles spéciales)."
        }
      ]
    },
    "Reliable": {
      "title": "Fiable",
      "description": [
        {
          "system": "all",
          "text": "Attaque avec une Qualité de 2+."
        }
      ]
    },
    "Rending": {
      "title": "Perforant",
      "description": [
        {
          "system": "all",
          "text": "Ignore la Régénération, et sur des résultats non modifiés de 6 pour toucher, ces touches obtiennent PA(+4)."
        }
      ]
    },
    "Scout": {
      "title": "Éclaireur",
      "description": [
        {
          "system": "all",
          "text": "Peut être mis de côté avant le déploiement. Après que toutes les autres unités sont déployées, peut être déployé n'importe où entièrement à moins de 12\" de leur zone de déploiement. Les joueurs placent alternativement les unités Éclaireur, en commençant par le joueur qui active ensuite."
        }
      ]
    },
    "Slow": {
      "title": "Lent",
      "description": [
        {
          "system": "all",
          "text": "Se déplace de -2\" en utilisant Avancée, et de -4\" en utilisant Précipitation/Charge."
        }
      ]
    },
    "Sniper REMOVE": {
      "title": "Sniper REMOVE",
      "description": [
        {
          "system": "all",
          "text": "Tire avec une Qualité de 2+, et chaque modèle avec Sniper peut choisir n'importe quel modèle dans l'unité cible comme sa cible individuelle, ce qui est résolu comme s'il s'agissait d'une unité de 1. Le tir de Sniper doit être résolu avant les autres armes."
        }
      ]
    },
    "Stealth": {
      "title": "Furtif",
      "description": [
        {
          "system": "all",
          "text": "Lorsque des unités où tous les modèles ont cette règle sont la cible de tirs à plus de 9\" de distance, les unités ennemies subissent -1 à leurs jets pour toucher."
        }
      ]
    },
    "Strider": {
      "title": "Marcheur",
      "description": [
        {
          "system": "all",
          "text": "Peut ignorer les effets du terrain difficile lors de ses déplacements, et n'a besoin que d'un 2+ pour réussir les jets de saut."
        },
        {
          "system": "gf",
          "text": "Peut ignorer les effets du terrain difficile lors de ses deplacements."
        },
        {
          "system": "aof",
          "text": "Peut ignorer les effets du terrain difficile lors de ses deplacements."
        },
        {
          "system": "aofr",
          "text": "Peut ignorer les effets du terrain difficile lors de ses deplacements."
        }
      ]
    },
    "Takedown": {
      "title": "Mise à terre",
      "description": [
        {
          "system": "all",
          "text": "Ce modèle peut choisir n'importe quel modèle dans l'unité cible comme sa cible individuelle, ce qui est résolu comme s'il s'agissait d'une unité de [1]. Les attaques de Mise à terre doivent être résolues avant les autres armes."
        }
      ]
    },
    "Thrust": {
      "title": "Poussée",
      "description": [
        {
          "system": "all",
          "text": "Lors d'une charge, obtient +1 à ses jets pour toucher et PA(+1) en mêlée."
        }
      ]
    },
    "Tough": {
      "title": "Robuste",
      "description": [
        {
          "system": "all",
          "text": "Ce modèle ne fait un jet pour vérifier les effets de blessure qu'une fois qu'il a subi au moins X blessures, et n'est Mis K.O. que sur des jets de 5+X ou plus."
        },
        {
          "system": "gf",
          "text": "Ce modele doit subir X blessures avant d'etre tue. Si un modele avec Robuste rejoint une unite sans cette regle, il est retire en dernier quand l'unite subit des blessures. Vous devez continuer a placer les blessures sur le modele Robuste avec le plus de blessures dans l'unite jusqu'a ce qu'il soit tue, avant de commencer a les placer sur le modele Robuste suivant (les heros doivent recevoir les blessures en dernier, meme s'ils sont deja blesses)."
        },
        {
          "system": "aof",
          "text": "Ce modele doit subir X blessures avant d'etre tue. Si un modele avec Robuste rejoint une unite sans cette regle, il est retire en dernier quand l'unite subit des blessures. Vous devez continuer a placer les blessures sur le modele Robuste avec le plus de blessures dans l'unite jusqu'a ce qu'il soit tue, avant de commencer a les placer sur le modele Robuste suivant (les heros doivent recevoir les blessures en dernier, meme s'ils sont deja blesses)."
        },
        {
          "system": "aofr",
          "text": "Ce modele doit subir X blessures avant d'etre tue. Si un modele avec Robuste rejoint une unite sans cette regle, il est retire en dernier quand l'unite subit des blessures. Vous devez continuer a placer les blessures sur le modele Robuste avec le plus de blessures dans l'unite jusqu'a ce qu'il soit tue, avant de commencer a les placer sur le modele Robuste suivant (les heros doivent recevoir les blessures en dernier, meme s'ils sont deja blesses)."
        }
      ]
    },
    "Transport": {
      "title": "Transport",
      "description": [
        {
          "system": "all",
          "text": "Peut transporter jusqu'à X modèles ou Héros avec jusqu'à Robuste(6), et des non-Héros avec jusqu'à Robuste(3) qui occupent 3 places chacun. Les transports peuvent se déployer avec des unités à l'intérieur, et les unités peuvent entrer/sortir en utilisant n'importe quelle action de mouvement, mais doivent rester entièrement à moins de 6\" de celui-ci en sortant. Les unités à l'intérieur/extérieur des transports ne peuvent pas cibler d'autres unités à l'extérieur/intérieur des transports, mais peuvent cibler le transport lui-même. Lorsqu'un transport est détruit, les unités à l'intérieur doivent effectuer un test de terrain dangereux, sont Secouées, et doivent être placées entièrement à moins de 6\" du transport avant qu'il ne soit retiré."
        }
      ]
    },
    "Unstoppable": {
      "title": "Inarrêtable",
      "description": [
        {
          "system": "all",
          "text": "Ignore la Régénération et ignore tous les modificateurs négatifs de cette arme."
        }
      ]
    },
    "Suppressor": {
      "title": "Suppresseur",
      "description": [
        {
          "system": "all",
          "text": "Les ennemis qui sont la cible du héros subissent -1 pour toucher en tirant jusqu'à la fin du tour."
        }
      ]
    },
    "Blinded Eye": {
      "title": "Œil aveuglé",
      "description": [
        {
          "system": "all",
          "text": "Subit -1 à ses jets en tirant."
        }
      ]
    },
    "Natural Talent": {
      "title": "Talent naturel",
      "description": [
        {
          "system": "all",
          "text": "Le héros récupère et gagne +1 XP."
        }
      ]
    },
    "Agile": {
      "title": "Agile",
      "description": [
        {
          "system": "all",
          "text": "Se déplace de +1\" en avancée et de +2\" en précipitation et charge."
        }
      ]
    },
    "Berserker": {
      "title": "Berserker",
      "description": [
        {
          "system": "all",
          "text": "Les ennemis obtiennent +1 aux jets d'effet de blessure lorsqu'ils subissent des blessures du héros en mêlée."
        }
      ]
    },
    "Fast Learner": {
      "title": "Apprenant rapide",
      "description": [
        {
          "system": "all",
          "text": "Peut choisir n'importe quel autre trait de la liste."
        }
      ]
    },
    "Bitter Rivalry": {
      "title": "Rivalité acharnée",
      "description": [
        {
          "system": "all",
          "text": "Obtient +1 pour toucher contre les héros ennemis."
        }
      ]
    },
    "Duellist": {
      "title": "Duelliste",
      "description": [
        {
          "system": "all",
          "text": "Les unités ennemies subissent -1 en mêlée contre le héros."
        }
      ]
    },
    "Climber": {
      "title": "Grimpeur",
      "description": [
        {
          "system": "all",
          "text": "Le héros n'a besoin de lancer qu'un 2+ en sautant."
        }
      ]
    },
    "Mastermind": {
      "title": "Cerveau",
      "description": [
        {
          "system": "all",
          "text": "Les unités ennemies à moins de 6\" du Héros subissent -1 en Défense."
        }
      ]
    },
    "Tactician": {
      "title": "Tacticien",
      "description": [
        {
          "system": "all",
          "text": "Les unités amies qui s'activent à moins de 6\" du Héros obtiennent +1 pour toucher en tirant."
        }
      ]
    },
    "Hunter": {
      "title": "Chasseur",
      "description": [
        {
          "system": "all",
          "text": "Le héros peut tirer même après des actions de précipitation."
        }
      ]
    },
    "Arm Injury": {
      "title": "Blessure au bras",
      "description": [
        {
          "system": "all",
          "text": "Subit -1 à ses jets en mêlée."
        }
      ]
    },
    "Leader": {
      "title": "Chef",
      "description": [
        {
          "system": "all",
          "text": "Les unités amies à moins de 6\" du Héros obtiennent +1 à leurs jets de test de moral."
        }
      ]
    },
    "Destroyer": {
      "title": "Destructeur",
      "description": [
        {
          "system": "all",
          "text": "Le héros obtient PA(+1) en tirant."
        }
      ]
    },
    "Herbalist": {
      "title": "Herboriste",
      "description": [
        {
          "system": "all",
          "text": "Les unités amies à moins de 6\" peuvent ignorer les blessures sur un jet de 6+."
        }
      ]
    },
    "Fanatic": {
      "title": "Fanatique",
      "description": [
        {
          "system": "all",
          "text": "Le héros obtient +1 attaque en mêlée."
        }
      ]
    },
    "Vanguard": {
      "title": "Avant-garde",
      "description": [
        {
          "system": "all",
          "text": "Les unités amies qui s'activent à moins de 6\" se déplacent de +4\" lorsqu'elles utilisent des actions de Charge."
        }
      ]
    },
    "Motivated": {
      "title": "Motivé",
      "description": [
        {
          "system": "all",
          "text": "Réussit toujours le premier test de moral du match."
        }
      ]
    },
    "Resilient": {
      "title": "Résistant",
      "description": [
        {
          "system": "all",
          "text": "Obtient +1 à ses jets en bloquant les touches."
        }
      ]
    },
    "Chemist": {
      "title": "Chimiste",
      "description": [
        {
          "system": "all",
          "text": "Les unités amies à moins de 6\" du Héros subissent -1 aux jets d'effet de blessure."
        }
      ]
    },
    "Warden": {
      "title": "Gardien",
      "description": [
        {
          "system": "all",
          "text": "Lorsque le héros est activé, toutes les unités amies à moins de 6\" du héros cessent d'être secouées."
        }
      ]
    },
    "Specialist": {
      "title": "Spécialiste",
      "description": [
        {
          "system": "all",
          "text": "Obtient +1 à ses jets pour toucher en mêlée ou en tir (choisir un)."
        }
      ]
    },
    "Instigator": {
      "title": "Instigateur",
      "description": [
        {
          "system": "all",
          "text": "Les unités amies qui s'activent à moins de 6\" du Héros obtiennent +1 pour toucher en mêlée."
        }
      ]
    },
    "Crazed": {
      "title": "Fou furieux",
      "description": [
        {
          "system": "all",
          "text": "Obtient +1 attaque en mêlée en chargeant."
        }
      ]
    },
    "Headstrong": {
      "title": "Têtu",
      "description": [
        {
          "system": "all",
          "text": "Obtient +1 à ses jets lors des tests de moral."
        }
      ]
    },
    "Elite": {
      "title": "Élite",
      "description": [
        {
          "system": "all",
          "text": "Peut relancer un jet de n'importe quel type une fois par tour."
        }
      ]
    },
    "Toughened": {
      "title": "Endurci",
      "description": [
        {
          "system": "all",
          "text": "Obtient Robuste(+1)."
        }
      ]
    },
    "Scavenger": {
      "title": "Charognard",
      "description": [
        {
          "system": "all",
          "text": "Les unités amies qui s'activent à moins de 6\" du Héros obtiennent +6\" de portée en tirant."
        }
      ]
    },
    "Dead": {
      "title": "Mort",
      "description": [
        {
          "system": "all",
          "text": "Retirez le héros de votre feuille d'équipe d'intervention."
        }
      ]
    },
    "Smashed Leg": {
      "title": "Jambe écrasée",
      "description": [
        {
          "system": "all",
          "text": "Se déplace de -1\" en avancée et de -2\" en précipitation et charge."
        }
      ]
    },
    "Horrible Scars": {
      "title": "Cicatrices horribles",
      "description": [
        {
          "system": "all",
          "text": "Les unités ennemies subissent -1 pour toucher en mêlée contre le héros."
        }
      ]
    },
    "Traumatized": {
      "title": "Traumatisé",
      "description": [
        {
          "system": "all",
          "text": "Subit -1 à ses jets lors des tests de moral."
        }
      ]
    },
    "Prowler": {
      "title": "Rôdeur",
      "description": [
        {
          "system": "all",
          "text": "Les unités ennemies à plus de 12\" subissent -1 à leurs jets pour toucher en tirant sur le héros."
        }
      ]
    },
    "Runner": {
      "title": "Coureur",
      "description": [
        {
          "system": "all",
          "text": "Le héros se déplace toujours de +2\" (même en terrain)."
        }
      ]
    },
    "Chest Wound": {
      "title": "Blessure à la poitrine",
      "description": [
        {
          "system": "all",
          "text": "Subit -1 à ses jets en bloquant les touches."
        }
      ]
    }
  },
  "pl": {}
};
