export type RuleDescription = {
  system: string;
  text: string;
};

export type SpellDescription = {
  system: string;
  cost: number;
  text: string;
};

export enum SpecialRuleId {
  AoF_Ossified_Undead = "0zpUZx5GkSHb",
  AoF_Rift_Daemons_of_Change = "56Tb7FFgHuyX",
  AoF_Moonmire_s_Proving_Grounds_Rammit_Den_Geddul_Battalion = "5xPzQn4Qdzz6",
  AoF_Viper_Matriarch_Warband = "AiReKTM86F3e",
  AoF_Eternal_Wardens = "AxiZW7zj2hUK",
  AoF_Goblins = "GgMdmXsCVdK2",
  AoF_Centaur_Starting_Stampede = "H18g-ND_uWiZ",
  AoF_Lovent_House_Army = "HH7O68qvHVR0",
  AoF_Ogres = "K44UD3HPQAfg",
  AoF_Lust_Disciples = "OJr14Si4C1Uj",
  AoF_Moonmire_s_Proving_Grounds_Hakemba_Battalion = "OyVVPwEw7Uep",
  AoF_Sky_City_Dwarves = "Q7nWXE-8DEHN",
  AoF_War_Disciples_Rift_Daemons_of_War = "RMi35vAtYNb-",
  AoF_High_Elves = "SY80P2vKJGrY",
  AoF_Dwarves = "SshMejY9Kz7s",
  AoF_Plague_Disciples_Plague_Daemons = "_k9nd29ZX-FQ",
  AoF_Heroes_of_Morale_Magic = "aHBBAhsdAqyz",
  AoF_Wood_Elves = "cJJJPqOuiHWx",
  AoF_Moonmire_s_Proving_Grounds_Moonmire_Battalion = "cyQpyja0EDRj",
  AoF_Secrets_of_Tixal_Ignatio_Lucrezza_Battalion = "dRAJ8qnYDOxm",
  AoF_Vampiric_Undead = "f78kQxkgtIs1",
  AoF_The_nasty_ones = "fLQMyzi3zbFI",
  AoF_Secrets_of_Tixal_Teqi_Hakatlo_Battalion = "iv1Jm6zZiZPJ",
  AoF_Havoc_Warriors = "ndODzgAqJGDz",
  AoF_Sea_Elves = "oACH5PrePLfv",
  AoF_Giant_s = "p9iL_bzUnY7A",
  AoF_Plague_Daemons = "tKa31SeqrzS1",
  AoF_Volcanic_Dwarf = "uAXC1RxdtELq",
  AoF_The_Last_Tear_Ironpride_Cleaverfang_Battalion = "vhKZ0CIT6dBt",
  AoF_Human_Empire = "voFsQwaDph1Y",
  AoF_Orcs = "wLKHbRBBr4NI",
  AoF_Ghostly_Undead = "x2_Lkyj0JPk2",
  AoF_Change_Disciples_Change_Daemons = "xw2YHtZNkhIV",
  AoF_The_Last_Tear_Kedseit_Hepalit_Battalion = "ylxJ4fFb6cZf",
  AoF_Shadow_Stalkers = "zrj60Gptp4Ce",
}

export type SpecialRuleIdValue = `${SpecialRuleId}`;

export type RuleTranslationEntry = {
  title: string;
  specialRule?: SpecialRuleIdValue[];
  description: RuleDescription[];
};

export type SpellTranslationEntry = {
  title: string;
  specialRule?: SpecialRuleIdValue[];
  description: SpellDescription[];
};

export type RulesByLanguage = Record<string, Record<string, RuleTranslationEntry>>;
export type SpellsByLanguage = Record<string, Record<string, SpellTranslationEntry>>;

export const commonRules: RulesByLanguage = {
  "en": {
    "Ambush Beacon": {
      "title": "Ambush Beacon",
      "description": [
        {
          "system": "all",
          "text": "Friendly units using <key>Ambush</key> may ignore distance restrictions from enemies if they are deployed within 6\" of this model."
        }
      ]
    },
    "Bad Shot": {
      "title": "Bad Shot",
      "description": [
        {
          "system": "all",
          "text": "This model gets -1 to hit rolls when shooting."
        }
      ]
    },
    "Badlands Hunter": {
      "title": "Badlands Hunter",
      "description": [
        {
          "system": "all",
          "text": "Enemies that roll to block hits from this model's weapons take 1 extra wound for each unmodified result of 1 that they roll."
        }
      ]
    },
    "Badlands Hunter Boost": {
      "title": "Badlands Hunter Boost",
      "description": [
        {
          "system": "all",
          "text": "If this model has <key>Badlands <key>Hunter</key></key>, enemies taking wounds from it take extra wounds on failed defense rolls of 1-2 from <key>Badlands <key>Hunter</key></key> (instead of only on 1)."
        }
      ]
    },
    "Badlands Hunter Boost Aura": {
      "title": "Badlands Hunter Boost Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and up to 3 friendly units picked before the start of the game get <key><key>Badlands <key>Hunter</key></key> Boost</key>. If this model is killed, picked models that are deployed lose the rule."
        }
      ]
    },
    "Ballistic Vest": {
      "title": "Ballistic Vest",
      "description": [
        {
          "system": "all",
          "text": "When units where all models have this rule are shot or charged from over 9\" away and take hits, those hits count as having <key>AP</key>(-1), to a min. of <key>AP</key>(0)."
        }
      ]
    },
    "Ballistic Vest Boost": {
      "title": "Ballistic Vest Boost",
      "description": [
        {
          "system": "all",
          "text": "If all models in this unit have <key>Ballistic Vest</key>, enemy hits always count as having <key>AP</key>(-1) from <key>Ballistic Vest</key> (instead of only when being shot/charged from over 9\" away)."
        }
      ]
    },
    "Ballistic Vest Boost Aura": {
      "title": "Ballistic Vest Boost Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and up to 3 friendly units picked before the start of the game get <key><key>Ballistic Vest</key> Boost</key>. If this model is killed, picked models that are deployed lose the rule."
        }
      ]
    },
    "Bane in Melee Buff": {
      "title": "Bane in Melee Buff",
      "description": [
        {
          "system": "all",
          "text": "Once per activation, before attacking, pick up to 4 friendly units within 12\", which gets <key>Bane</key> in melee once (next time the effect would apply)."
        }
      ]
    },
    "Battle-Hardened": {
      "title": "Battle-Hardened",
      "description": [
        {
          "system": "all",
          "text": "Units where all models have this rule get +1 to morale test rolls."
        }
      ]
    },
    "Battleborn": {
      "title": "Battleborn",
      "description": [
        {
          "system": "all",
          "text": "If a unit where all models have this rule is Shaken at the beginning of the round, roll one die. On a 4+, it stops being Shaken."
        }
      ]
    },
    "Berserker Boost": {
      "title": "Berserker Boost",
      "description": [
        {
          "system": "all",
          "text": "If this model has <key>Berserker</key>, it deals extra hits on successful unmodified hit results of 5-6 from <key>Berserker</key> (instead of only on 6)."
        }
      ]
    },
    "Berserker Boost Aura": {
      "title": "Berserker Boost Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and up to 3 friendly units picked before the start of the game get <key><key>Berserker</key> Boost</key>. If this model is killed, picked models that are deployed lose the rule."
        }
      ]
    },
    "Bloodborn": {
      "title": "Bloodborn",
      "description": [
        {
          "system": "all",
          "text": "For each unmodified roll of 6 to hit when attacking, this model may roll +1 attack with that weapon. This rule doesn’t apply to newly generated attacks."
        }
      ]
    },
    "Brute Courage": {
      "title": "Brute Courage",
      "description": [
        {
          "system": "all",
          "text": "If a unit where all models have this rule is Shaken at the beginning of the round, roll one die. On a 4+, it stops being Shaken."
        }
      ]
    },
    "Clan Warrior": {
      "title": "Clan Warrior",
      "description": [
        {
          "system": "all",
          "text": "For each unmodified roll of 6 to hit when attacking, this model may roll +1 attack with that weapon. This rule doesn’t apply to newly generated attacks."
        }
      ]
    },
    "Clan Warrior Boost": {
      "title": "Clan Warrior Boost",
      "description": [
        {
          "system": "all",
          "text": "If this model has <key>Clan Warrior</key>, it gets extra attacks on successful unmodified hit results of 5-6 from <key>Clan Warrior</key> (instead of only on 6)."
        }
      ]
    },
    "Clan Warrior Boost Aura": {
      "title": "Clan Warrior Boost Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and up to 3 friendly units picked before the start of the game get <key><key>Clan Warrior</key> Boost</key>. If this model is killed, picked models that are deployed lose the rule."
        }
      ]
    },
    "Cyber-Eyes": {
      "title": "Cyber-Eyes",
      "description": [
        {
          "system": "all",
          "text": "When this model shoots at enemies over 9\" away, it gets +1 to hit rolls."
        }
      ]
    },
    "Cyber-Eyes Boost": {
      "title": "Cyber-Eyes Boost",
      "description": [
        {
          "system": "all",
          "text": "If this model has <key>Cyber-Eyes</key>, it always gets +1 to hit rolls from <key>Cyber-Eyes</key> (instead of only when shooting over 9\" away)."
        }
      ]
    },
    "Cyber-Eyes Boost Aura": {
      "title": "Cyber-Eyes Boost Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and up to 3 friendly units picked before the start of the game get <key><key>Cyber-Eyes</key> Boost</key>. If this model is killed, picked models that are deployed lose the rule."
        }
      ]
    },
    "Darkborn": {
      "title": "Darkborn",
      "description": [
        {
          "system": "all",
          "text": "This model gets +3\" range when shooting and moves +3\" when using Charge actions."
        }
      ]
    },
    "Defensive Growth": {
      "title": "Defensive Growth",
      "description": [
        {
          "system": "all",
          "text": "Place one marker on this unit at the end of each round if it's on the table. For each marker models with this rule in it get +1 to defense rolls (up to a max. of +2). If this unit is ever Shaken, it loses all its markers."
        }
      ]
    },
    "Defensive Growth Aura": {
      "title": "Defensive Growth Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and up to 3 friendly units picked before the start of the game get <key>Defensive Growth</key>. If this model is killed, picked models that are deployed lose the rule."
        }
      ]
    },
    "Demolish": {
      "title": "Demolish",
      "description": [
        {
          "system": "all",
          "text": "<key>Ignores Cover</key>, and against non-<key>Hero</key> units with <key>Tough</key>(3) or more, this weapon gets <key>AP</key>(+2)."
        }
      ]
    },
    "Devout": {
      "title": "Devout",
      "description": [
        {
          "system": "all",
          "text": "When attacking, unmodified results of 6 to hit deal 1 extra hit (only the original hit counts as a 6 for special rules)."
        }
      ]
    },
    "Devout Boost": {
      "title": "Devout Boost",
      "description": [
        {
          "system": "all",
          "text": "If this model has <key>Devout</key>, it deals extra hits on successful unmodified hit results of 5-6 from <key>Devout</key> (instead of only on 6)."
        }
      ]
    },
    "Devout Boost Aura": {
      "title": "Devout Boost Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and up to 3 friendly units picked before the start of the game get <key><key>Devout</key> Boost</key>. If this model is killed, picked models that are deployed lose the rule."
        }
      ]
    },
    "Entrenched Buff": {
      "title": "Entrenched Buff",
      "description": [
        {
          "system": "all",
          "text": "Once per activation, before attacking, pick up to 4 friendly units within 12\", which gets <key>Entrenched</key> once (next time the effect would apply)."
        }
      ]
    },
    "Flying Aura": {
      "title": "Flying Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and up to 3 friendly units picked before the start of the game get <key>Flying</key>. If this model is killed, picked models that are deployed lose the rule."
        }
      ]
    },
    "Grounded Precision": {
      "title": "Grounded Precision",
      "description": [
        {
          "system": "all",
          "text": "If a unit where all models have this rule has most of them within 1\" of terrain, they get +1 to hit rolls when attacking."
        }
      ]
    },
    "Grounded Precision Aura": {
      "title": "Grounded Precision Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and up to 3 friendly units picked before the start of the game get <key>Grounded Precision</key>. If this model is killed, picked models that are deployed lose the rule."
        }
      ]
    },
    "Grounded Stealth": {
      "title": "Grounded Stealth",
      "description": [
        {
          "system": "all",
          "text": "If a unit where all models have this rule has most of them within 1\" of terrain, enemies get -1 to hit rolls when attacking them."
        }
      ]
    },
    "Guardian": {
      "title": "Guardian",
      "description": [
        {
          "system": "all",
          "text": "When units where all models have this rule are shot or charged from over 9\" away and take hits, those hits count as having <key>AP</key>(-1), to a min. of <key>AP</key>(0)."
        }
      ]
    },
    "Guardian Boost": {
      "title": "Guardian Boost",
      "description": [
        {
          "system": "all",
          "text": "If all models in this unit have <key>Guardian</key>, enemy hits always count as having <key>AP</key>(-1) from <key>Guardian</key> (instead of only when being shot/charged from over 9\" away)."
        }
      ]
    },
    "Guardian Boost Aura": {
      "title": "Guardian Boost Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and up to 3 friendly units picked before the start of the game get <key><key>Guardian</key> Boost</key>. If this model is killed, picked models that are deployed lose the rule."
        }
      ]
    },
    "Guerrilla": {
      "title": "Guerrilla",
      "description": [
        {
          "system": "all",
          "text": "Once per round, units where all models have this rule may move by up to 3\" after shooting or being in melee."
        }
      ]
    },
    "Guerrilla Boost": {
      "title": "Guerrilla Boost",
      "description": [
        {
          "system": "all",
          "text": "If most models in this unit have <key>Guerrilla</key>, they may move by up to 6\" from <key>Guerrilla</key> (instead of only 3\")."
        }
      ]
    },
    "Guerrilla Boost Aura": {
      "title": "Guerrilla Boost Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and up to 3 friendly units picked before the start of the game get <key><key>Guerrilla</key> Boost</key>. If this model is killed, picked models that are deployed lose the rule."
        }
      ]
    },
    "Hive Bond": {
      "title": "Hive Bond",
      "description": [
        {
          "system": "all",
          "text": "Units where all models have this rule get +1 to morale test rolls."
        }
      ]
    },
    "Hive Bond Boost": {
      "title": "Hive Bond Boost",
      "description": [
        {
          "system": "all",
          "text": "If all models in this unit have <key>Hive Bond</key>, they get +2 to morale test rolls from <key>Hive Bond</key> (instead of only +1)."
        }
      ]
    },
    "Hive Bond Boost Aura": {
      "title": "Hive Bond Boost Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and up to 3 friendly units picked before the start of the game get <key><key>Hive Bond</key> Boost</key>. If this model is killed, picked models that are deployed lose the rule."
        }
      ]
    },
    "Hold the Line Boost Aura": {
      "title": "Hold the Line Boost Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and up to 3 friendly units picked before the start of the game get <key><key>Hold the Line</key> Boost</key>. If this model is killed, picked models that are deployed lose the rule."
        }
      ]
    },
    "Ignores Cover Aura": {
      "title": "Ignores Cover Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and up to 3 friendly units picked before the start of the game get <key>Ignores Cover</key> when shooting. If this model is killed, picked models that are deployed lose the rule."
        }
      ]
    },
    "Ignores Cover when Shooting": {
      "title": "Ignores Cover when Shooting",
      "description": [
        {
          "system": "all",
          "text": "This model gets <key>Ignores Cover</key> when shooting."
        }
      ]
    },
    "Ignores Cover when Shooting Aura": {
      "title": "Ignores Cover when Shooting Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and up to 3 friendly units picked before the start of the game get <key>Ignores Cover</key> when shooting. If this model is killed, picked models that are deployed lose the rule."
        }
      ]
    },
    "Ignores Regeneration in Melee": {
      "title": "Ignores Regeneration in Melee",
      "description": [
        {
          "system": "all",
          "text": "This model gets Ignores Regeneration in melee."
        }
      ]
    },
    "Indirect Mark": {
      "title": "Indirect Mark",
      "description": [
        {
          "system": "all",
          "text": "Once per activation, before attacking, pick up to 4 enemy units within 18\", which friendly units gets <key>Indirect</key> against once (next time the effect would apply)."
        }
      ]
    },
    "Infected": {
      "title": "Infected",
      "description": [
        {
          "system": "all",
          "text": "Enemies that roll to block hits from this model's weapons take 1 extra wound for each unmodified result of 1 that they roll."
        }
      ]
    },
    "Infected Boost": {
      "title": "Infected Boost",
      "description": [
        {
          "system": "all",
          "text": "If this model has <key>Infected</key>, enemies taking wounds from it take extra wounds on failed defense rolls of 1-2 from <key>Infected</key> (instead of only on 1)."
        }
      ]
    },
    "Infected Boost Aura": {
      "title": "Infected Boost Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and up to 3 friendly units picked before the start of the game get <key><key>Infected</key> Boost</key>. If this model is killed, picked models that are deployed lose the rule."
        }
      ]
    },
    "Infiltrate Aura": {
      "title": "Infiltrate Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and up to 3 friendly units picked before the start of the game get <key>Infiltrate</key>. If this model is killed, picked models that are deployed lose the rule."
        }
      ]
    },
    "Inquisitorial Agent": {
      "title": "Inquisitorial Agent",
      "description": [
        {
          "system": "all",
          "text": "Once per game, if all models in this unit have this rule, it may be activated even if it had already activated this round (stops being fatigued when activated for the second time). Only up to half of the units in the army with this rule at the beginning of the game (rounding up) may use it in a single round."
        }
      ]
    },
    "Knightborn": {
      "title": "Knightborn",
      "description": [
        {
          "system": "all",
          "text": "When a unit where all models have this rule takes wounds, roll one die for each. On a 6+ it is ignored. If the wounds were from a spell, then they are ignored on a 4+ instead."
        }
      ]
    },
    "Machine-Fog": {
      "title": "Machine-Fog",
      "description": [
        {
          "system": "all",
          "text": "When units where all models have this rule are shot or charged from over 9\" away, enemy units get -1 to hit rolls."
        }
      ]
    },
    "Machine-Fog Boost": {
      "title": "Machine-Fog Boost",
      "description": [
        {
          "system": "all",
          "text": "If all models in this unit have <key>Machine-Fog</key>, enemies attacking them always get -1 to hit rolls from <key>Machine-Fog</key> (instead of only when being shot/charged from over 9\" away)."
        }
      ]
    },
    "Machine-Fog Boost Aura": {
      "title": "Machine-Fog Boost Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and up to 3 friendly units picked before the start of the game get <key><key>Machine-Fog</key> Boost</key>. If this model is killed, picked models that are deployed lose the rule."
        }
      ]
    },
    "Martial Prowess": {
      "title": "Martial Prowess",
      "description": [
        {
          "system": "all",
          "text": "Once per game, if all models in this unit have this rule, it may be activated even if it had already activated this round (stops being fatigued when activated for the second time). Only up to half of the units in the army with this rule at the beginning of the game (rounding up) may use it in a single round."
        }
      ]
    },
    "No Retreat Buff": {
      "title": "No Retreat Buff",
      "description": [
        {
          "system": "all",
          "text": "Once per activation, before attacking, pick up to 4 friendly units within 12\", which gets <key>No Retreat</key> once (next time the effect would apply)."
        }
      ]
    },
    "Piercing Growth": {
      "title": "Piercing Growth",
      "description": [
        {
          "system": "all",
          "text": "Place one marker on this unit at the end of each round if it's on the table. For each marker models with this rule in it get <key>AP</key>(+1) (up to a max. of +2). If this unit is ever Shaken, it loses all its markers."
        }
      ]
    },
    "Piercing Shooting Debuff": {
      "title": "Piercing Shooting Debuff",
      "description": [
        {
          "system": "all",
          "text": "Once per activation, before attacking, pick up to 4 enemy units within 18\", which loses <key>AP</key>(+1) when shooting once (next time the effect would apply)."
        }
      ]
    },
    "Piercing Shooting Mark": {
      "title": "Piercing Shooting Mark",
      "description": [
        {
          "system": "all",
          "text": "Once per activation, before attacking, pick up to 4 enemy units within 18\", which friendly units gets <key>AP</key>(+1) when shooting against once (next time the effect would apply)."
        }
      ]
    },
    "Point-Blank Piercing": {
      "title": "Point-Blank Piercing",
      "description": [
        {
          "system": "all",
          "text": "This model gets <key>AP</key>(+1) when shooting enemies within 12\"."
        }
      ]
    },
    "Point-Blank Piercing Aura": {
      "title": "Point-Blank Piercing Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and up to 3 friendly units picked before the start of the game get <key>Point-Blank Piercing</key>. If this model is killed, picked models that are deployed lose the rule."
        }
      ]
    },
    "Point-Blank Surge": {
      "title": "Point-Blank Surge",
      "description": [
        {
          "system": "all",
          "text": "When this model shoots at enemies within 12\", unmodified results of 6 to hit deal 1 extra hit (only the original hit counts as a 6 for special rules)."
        }
      ]
    },
    "Protected Aura": {
      "title": "Protected Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and up to 3 friendly units picked before the start of the game get <key>Protected</key>. If this model is killed, picked models that are deployed lose the rule."
        }
      ]
    },
    "Protection Feat Aura": {
      "title": "Protection Feat Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and up to 3 friendly units picked before the start of the game get <key>Protection Feat</key>. If this model is killed, picked models that are deployed lose the rule."
        }
      ]
    },
    "Psychotic": {
      "title": "Psychotic",
      "description": [
        {
          "system": "all",
          "text": "For each unmodified roll of 6 to hit when attacking, this model may roll +1 attack with that weapon. This rule doesn’t apply to newly generated attacks."
        }
      ]
    },
    "Psychotic Boost": {
      "title": "Psychotic Boost",
      "description": [
        {
          "system": "all",
          "text": "If this model has <key>Psychotic</key>, it gets extra attacks on successful unmodified hit results of 5-6 from <key>Psychotic</key> (instead of only on 6)."
        }
      ]
    },
    "Psychotic Boost Aura": {
      "title": "Psychotic Boost Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and up to 3 friendly units picked before the start of the game get <key><key>Psychotic</key> Boost</key>. If this model is killed, picked models that are deployed lose the rule."
        }
      ]
    },
    "Quake when Shooting": {
      "title": "Quake when Shooting",
      "description": [
        {
          "system": "all",
          "text": "This model gets <key>Quake</key> when shooting."
        }
      ]
    },
    "Rapid Advance Buff": {
      "title": "Rapid Advance Buff",
      "description": [
        {
          "system": "all",
          "text": "Once per activation, before attacking, pick up to 4 friendly units within 12\", which gets <key>Rapid Advance</key> once (next time the effect would apply)."
        }
      ]
    },
    "Rapid Ambush": {
      "title": "Rapid Ambush",
      "description": [
        {
          "system": "all",
          "text": "Counts as having <key>Ambush</key>, but may be deployed at the start of any round, including the first."
        }
      ]
    },
    "Rapid Blink": {
      "title": "Rapid Blink",
      "description": [
        {
          "system": "all",
          "text": "When this unit is activated, you may place all models with this rule in it anywhere fully within 3\" of their position."
        }
      ]
    },
    "Rapid Blink Boost": {
      "title": "Rapid Blink Boost",
      "description": [
        {
          "system": "all",
          "text": "If this model has <key>Rapid Blink</key>, it may be placed within 6\" from <key>Rapid Blink</key> (instead of only within 3\")."
        }
      ]
    },
    "Rapid Blink Boost Aura": {
      "title": "Rapid Blink Boost Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and up to 3 friendly units picked before the start of the game get <key><key>Rapid Blink</key> Boost</key>. If this model is killed, picked models that are deployed lose the rule."
        }
      ]
    },
    "Reinforced": {
      "title": "Reinforced",
      "description": [
        {
          "system": "all",
          "text": "When units where all models have this rule are shot or charged from over 9\" away and take hits, those hits count as having <key>AP</key>(-1), to a min. of <key>AP</key>(0)."
        }
      ]
    },
    "Runner Boost": {
      "title": "Runner Boost",
      "description": [
        {
          "system": "all",
          "text": "If this model has <key>Runner</key>, it moves +4\" on Advance and +4\" on Rush/Charge from <key>Runner</key> (instead of only +2\" and +2\")."
        }
      ]
    },
    "Runner Boost Aura": {
      "title": "Runner Boost Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and up to 3 friendly units picked before the start of the game get <key><key>Runner</key> Boost</key>. If this model is killed, picked models that are deployed lose the rule."
        }
      ]
    },
    "Safety Gear": {
      "title": "Safety Gear",
      "description": [
        {
          "system": "all",
          "text": "When units where all models have this rule are shot or charged from over 9\" away, they get +1 to defense rolls."
        }
      ]
    },
    "Safety Gear Boost": {
      "title": "Safety Gear Boost",
      "description": [
        {
          "system": "all",
          "text": "If all models in this unit have <key>Safety Gear</key>, they always get +1 to defense rolls from <key>Safety Gear</key> (instead of only when being shot/charged from over 9\" away)."
        }
      ]
    },
    "Safety Gear Boost Aura": {
      "title": "Safety Gear Boost Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and up to 3 friendly units picked before the start of the game get <key><key>Safety Gear</key> Boost</key>. If this model is killed, picked models that are deployed lose the rule."
        }
      ]
    },
    "Scrapper": {
      "title": "Scrapper",
      "description": [
        {
          "system": "all",
          "text": "When attacking, targets must re-roll unmodified <key>Defense</key> results of 6 when blocking hits from this model's weapons."
        }
      ]
    },
    "Scrapper Boost": {
      "title": "Scrapper Boost",
      "description": [
        {
          "system": "all",
          "text": "If this model has <key>Scrapper</key>, enemies taking hits from it must re-roll successful unmodified defense results of 5-6 from <key>Scrapper</key> (instead of only on 6)."
        }
      ]
    },
    "Scrapper Boost Aura": {
      "title": "Scrapper Boost Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and up to 3 friendly units picked before the start of the game get <key><key>Scrapper</key> Boost</key>. If this model is killed, picked models that are deployed lose the rule."
        }
      ]
    },
    "Screened": {
      "title": "Screened",
      "description": [
        {
          "system": "all",
          "text": "When units where all models have this rule are shot or charged from over 9\" away, enemy units get -1 to hit rolls."
        }
      ]
    },
    "Screened Aura": {
      "title": "Screened Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and up to 3 friendly units picked before the start of the game get <key>Screened</key>. If this model is killed, picked models that are deployed lose the rule."
        }
      ]
    },
    "Self-Destruct": {
      "title": "Self-Destruct",
      "description": [
        {
          "system": "all",
          "text": "If this model is killed in melee, the attacking unit takes X hits. If this model survives melee, after both sides have finished attacking, it is immediately killed, and the enemy unit takes X hits."
        }
      ]
    },
    "Self-Repair": {
      "title": "Self-Repair",
      "description": [
        {
          "system": "all",
          "text": "When a unit where all models have this rule takes wounds, roll one die for each. On a 6+ it is ignored."
        }
      ]
    },
    "Self-Repair Boost": {
      "title": "Self-Repair Boost",
      "description": [
        {
          "system": "all",
          "text": "If all models in this unit have <key>Self-Repair</key>, they ignore wounds on rolls of 5-6 from <key>Self-Repair</key> (instead of only on 6+)."
        }
      ]
    },
    "Shadow Operative": {
      "title": "Shadow Operative",
      "description": [
        {
          "system": "all",
          "text": "Enemies get -4\" range when trying to shoot at units where all models have this rule, and -2\" movement when trying to charge units where all models have this rule."
        }
      ]
    },
    "Shadow Operative Boost": {
      "title": "Shadow Operative Boost",
      "description": [
        {
          "system": "all",
          "text": "If all models in this unit have <key>Shadow Operative</key>, enemies get -8\" range when shooting them and -4\" movement when charging them from <key>Shadow Operative</key> (instead of only -4\" and -2\")."
        }
      ]
    },
    "Shadow Operative Boost Aura": {
      "title": "Shadow Operative Boost Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and up to 3 friendly units picked before the start of the game get <key><key>Shadow Operative</key> Boost</key>. If this model is killed, picked models that are deployed lose the rule."
        }
      ]
    },
    "Shred when Shooting": {
      "title": "Shred when Shooting",
      "description": [
        {
          "system": "all",
          "text": "This model gets <key>Shred</key> when shooting."
        }
      ]
    },
    "Surge when Shooting": {
      "title": "Surge when Shooting",
      "description": [
        {
          "system": "all",
          "text": "This model gets <key>Surge</key> when shooting."
        }
      ]
    },
    "Surprise Piercing Shot": {
      "title": "Surprise Piercing Shot",
      "description": [
        {
          "system": "all",
          "text": "Counts as having <key>Ambush</key>, and gets <key>AP</key>(+2) when shooting on the round in which it deploys via this rule."
        }
      ]
    },
    "Targeting Visor": {
      "title": "Targeting Visor",
      "description": [
        {
          "system": "all",
          "text": "When this model shoots at enemies over 9\" away, it gets +1 to hit rolls."
        }
      ]
    },
    "Targeting Visor Boost": {
      "title": "Targeting Visor Boost",
      "description": [
        {
          "system": "all",
          "text": "If this model has <key>Targeting Visor</key>, it always gets +1 to hit rolls when shooting from <key>Targeting Visor</key> (instead of only when shooting over 9\" away)."
        }
      ]
    },
    "Targeting Visor Boost Aura": {
      "title": "Targeting Visor Boost Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and up to 3 friendly units picked before the start of the game get <key><key>Targeting Visor</key> Boost</key>. If this model is killed, picked models that are deployed lose the rule."
        }
      ]
    },
    "Union Assault": {
      "title": "Union Assault",
      "description": [
        {
          "system": "all",
          "text": "After this model is deployed, it may be placed anywhere fully within 9” of its position."
        }
      ]
    },
    "Versatile Reach Aura": {
      "title": "Versatile Reach Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and up to 3 friendly units picked before the start of the game get <key>Versatile Reach</key>. If this model is killed, picked models that are deployed lose the rule."
        }
      ]
    },
    "Watchborn": {
      "title": "Watchborn",
      "description": [
        {
          "system": "all",
          "text": "When this unit is activated, pick one effect: until the end of the activation all models with this rule in it either get <key>AP</key>(+1) when attacking, or get +1 to hit rolls when attacking."
        }
      ]
    },
    "Wolfborn": {
      "title": "Wolfborn",
      "description": [
        {
          "system": "all",
          "text": "When this unit is activated, you may place all models with this rule in it anywhere fully within 3\" of their position."
        }
      ]
    },
    "Wreck": {
      "title": "Wreck",
      "description": [
        {
          "system": "all",
          "text": "<key>Ignores Cover</key>, and when attacking the target must re-roll unmodified <key>Defense</key> results of 6."
        }
      ]
    },
    "Aircraft": {
      "title": "Aircraft",
      "description": [
        {
          "system": "all",
          "text": "May only use Advance actions, moving in a straight line, and adding 30” to its total move (even if Shaken). <key>Aircraft</key> ignore all units and terrain when moving and stopping, can’t seize or contest objectives, can’t be charged, and units targeting them get -12” range."
        }
      ]
    },
    "Ambush": {
      "title": "Ambush",
      "description": [
        {
          "system": "all",
          "text": "May be set aside before deployment. At the start of any round after the first, may be deployed anywhere over 9” away from enemy units. Players alternate in placing <key>Ambush</key> units, starting with the player that activates next. Units that deploy via <key>Ambush</key> can’t seize or contest objectives on the round they deploy."
        },
        {
          "system": "aofr",
          "text": "May be set aside before deployment. At the start of any round after the first, may be deployed fully within 6” of any table edge, over 9\" away from enemy units. Players alternate in placing <key>Ambush</key> units, starting with the player that activates next. Units that deploy via <key>Ambush</key> can’t seize or contest objectives on the round they deploy."
        }
      ],
      "specialRule": [
        "cJJJPqOuiHWx",
        "f78kQxkgtIs1",
        "vhKZ0CIT6dBt",
        "tKa31SeqrzS1",
        "cyQpyja0EDRj",
        "ylxJ4fFb6cZf",
        "0zpUZx5GkSHb",
        "voFsQwaDph1Y",
        "RMi35vAtYNb-",
        "_k9nd29ZX-FQ",
        "xw2YHtZNkhIV",
        "GgMdmXsCVdK2",
        "x2_Lkyj0JPk2",
        "AxiZW7zj2hUK",
        "SshMejY9Kz7s",
        "dRAJ8qnYDOxm",
        "oACH5PrePLfv",
        "AiReKTM86F3e",
        "OyVVPwEw7Uep",
        "56Tb7FFgHuyX"
      ]
    },
    "AP": {
      "title": "AP",
      "description": [
        {
          "system": "all",
          "text": "Targets get -X to <key>Defense</key> rolls when blocking hits."
        }
      ],
      "specialRule": [
        "cJJJPqOuiHWx",
        "uAXC1RxdtELq",
        "f78kQxkgtIs1",
        "Q7nWXE-8DEHN",
        "iv1Jm6zZiZPJ",
        "vhKZ0CIT6dBt",
        "tKa31SeqrzS1",
        "cyQpyja0EDRj",
        "ylxJ4fFb6cZf",
        "0zpUZx5GkSHb",
        "wLKHbRBBr4NI",
        "5xPzQn4Qdzz6",
        "aHBBAhsdAqyz",
        "voFsQwaDph1Y",
        "SY80P2vKJGrY",
        "RMi35vAtYNb-",
        "_k9nd29ZX-FQ",
        "OJr14Si4C1Uj",
        "xw2YHtZNkhIV",
        "ndODzgAqJGDz",
        "H18g-ND_uWiZ",
        "fLQMyzi3zbFI",
        "GgMdmXsCVdK2",
        "p9iL_bzUnY7A",
        "x2_Lkyj0JPk2",
        "AxiZW7zj2hUK",
        "SshMejY9Kz7s",
        "dRAJ8qnYDOxm",
        "oACH5PrePLfv",
        "AiReKTM86F3e",
        "HH7O68qvHVR0",
        "OyVVPwEw7Uep",
        "K44UD3HPQAfg",
        "56Tb7FFgHuyX"
      ]
    },
    "Artillery": {
      "title": "Artillery",
      "description": [
        {
          "system": "all",
          "text": "May only use Hold actions. When this model shoots at enemies over 9\" away, it gets +1 to hit rolls. When enemy units shoot at this model from over 9\" away, they get -2 to hit rolls."
        }
      ],
      "specialRule": [
        "voFsQwaDph1Y",
        "AxiZW7zj2hUK",
        "SshMejY9Kz7s",
        "dRAJ8qnYDOxm"
      ]
    },
    "Bane": {
      "title": "Bane",
      "description": [
        {
          "system": "all",
          "text": "Ignores Regeneration, and when attacking the target must re-roll unmodified <key>Defense</key> results of 6."
        }
      ],
      "specialRule": [
        "iv1Jm6zZiZPJ",
        "tKa31SeqrzS1",
        "ylxJ4fFb6cZf",
        "0zpUZx5GkSHb",
        "wLKHbRBBr4NI",
        "5xPzQn4Qdzz6",
        "SY80P2vKJGrY",
        "_k9nd29ZX-FQ",
        "fLQMyzi3zbFI",
        "GgMdmXsCVdK2",
        "x2_Lkyj0JPk2",
        "AxiZW7zj2hUK",
        "dRAJ8qnYDOxm",
        "oACH5PrePLfv",
        "HH7O68qvHVR0"
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
      ],
      "specialRule": [
        "cJJJPqOuiHWx",
        "uAXC1RxdtELq",
        "f78kQxkgtIs1",
        "vhKZ0CIT6dBt",
        "0zpUZx5GkSHb",
        "5xPzQn4Qdzz6",
        "aHBBAhsdAqyz",
        "voFsQwaDph1Y",
        "SY80P2vKJGrY",
        "RMi35vAtYNb-",
        "_k9nd29ZX-FQ",
        "OJr14Si4C1Uj",
        "xw2YHtZNkhIV",
        "ndODzgAqJGDz",
        "H18g-ND_uWiZ",
        "fLQMyzi3zbFI",
        "AxiZW7zj2hUK",
        "SshMejY9Kz7s",
        "oACH5PrePLfv",
        "AiReKTM86F3e"
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
      ],
      "specialRule": [
        "f78kQxkgtIs1",
        "Q7nWXE-8DEHN",
        "ylxJ4fFb6cZf",
        "0zpUZx5GkSHb",
        "aHBBAhsdAqyz",
        "voFsQwaDph1Y",
        "SY80P2vKJGrY",
        "xw2YHtZNkhIV",
        "H18g-ND_uWiZ",
        "GgMdmXsCVdK2",
        "oACH5PrePLfv",
        "OyVVPwEw7Uep",
        "56Tb7FFgHuyX"
      ]
    },
    "Counter": {
      "title": "Counter",
      "description": [
        {
          "system": "all",
          "text": "Strikes first with this weapon when charged, and the charging unit gets -1 total <key>Impact</key> rolls per model with <key>Counter</key>."
        },
        {
          "system": "aofr",
          "text": "Strikes first with this weapon when charged, and the charging unit gets -1 total <key>Impact</key> rolls per model with <key>Counter</key> in the two front rows if charging in the front."
        }
      ],
      "specialRule": [
        "Q7nWXE-8DEHN",
        "iv1Jm6zZiZPJ",
        "cyQpyja0EDRj",
        "ylxJ4fFb6cZf",
        "HH7O68qvHVR0"
      ]
    },
    "Deadly": {
      "title": "Deadly",
      "description": [
        {
          "system": "all",
          "text": "Assign each wound to one model, and multiply it by X. Hits from <key>Deadly</key> must be resolved first, and these wounds don’t carry over to other models if the original target is killed."
        }
      ],
      "specialRule": [
        "uAXC1RxdtELq",
        "f78kQxkgtIs1",
        "ylxJ4fFb6cZf",
        "wLKHbRBBr4NI",
        "aHBBAhsdAqyz",
        "fLQMyzi3zbFI",
        "GgMdmXsCVdK2",
        "dRAJ8qnYDOxm",
        "AiReKTM86F3e",
        "K44UD3HPQAfg"
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
      ],
      "specialRule": [
        "SY80P2vKJGrY",
        "xw2YHtZNkhIV",
        "oACH5PrePLfv",
        "56Tb7FFgHuyX"
      ]
    },
    "Fearless": {
      "title": "Fearless",
      "description": [
        {
          "system": "all",
          "text": "When a unit where all models have this rule fails a morale test, roll one die. On a 4+ it counts as passed instead."
        }
      ],
      "specialRule": [
        "SY80P2vKJGrY",
        "xw2YHtZNkhIV",
        "fLQMyzi3zbFI",
        "oACH5PrePLfv",
        "56Tb7FFgHuyX"
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
      ],
      "specialRule": [
        "aHBBAhsdAqyz"
      ]
    },
    "Furious": {
      "title": "Furious",
      "description": [
        {
          "system": "all",
          "text": "When charging, unmodified results of 6 to hit in melee deal 1 extra hit (only the original hit counts as a 6 for special rules)."
        }
      ],
      "specialRule": [
        "vhKZ0CIT6dBt",
        "0zpUZx5GkSHb",
        "aHBBAhsdAqyz",
        "voFsQwaDph1Y",
        "RMi35vAtYNb-",
        "HH7O68qvHVR0",
        "OyVVPwEw7Uep"
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
          "text": "Heroes with up to <key>Tough</key>(6) may deploy as part of one multi-model unit without another <key>Hero</key>. The hero may take morale tests on behalf of the unit, but must use the unit’s <key>Defense</key> until all other models have been killed."
        },
        {
          "system": "aof",
          "text": "Heroes with up to <key>Tough</key>(6) may deploy as part of one multi-model unit without another <key>Hero</key>. The hero may take morale tests on behalf of the unit, but must use the unit’s <key>Defense</key> until all other models have been killed."
        },
        {
          "system": "aofr",
          "text": "Heroes with up to <key>Tough</key>(6) may deploy as part of one multi-model unit without another <key>Hero</key>. The hero may take morale tests on behalf of the unit, but must use the unit’s <key>Defense</key> until all other models have been killed."
        }
      ],
      "specialRule": [
        "voFsQwaDph1Y"
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
      ],
      "specialRule": [
        "iv1Jm6zZiZPJ",
        "ylxJ4fFb6cZf",
        "fLQMyzi3zbFI",
        "dRAJ8qnYDOxm",
        "HH7O68qvHVR0"
      ]
    },
    "Indirect": {
      "title": "Indirect",
      "description": [
        {
          "system": "all",
          "text": "Gets -1 to hit rolls when shooting after moving. May target enemies that are not in line of sight as if in line of sight, and ignores cover from sight obstructions."
        }
      ],
      "specialRule": [
        "ylxJ4fFb6cZf",
        "5xPzQn4Qdzz6",
        "SY80P2vKJGrY",
        "xw2YHtZNkhIV",
        "56Tb7FFgHuyX"
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
      ],
      "specialRule": [
        "iv1Jm6zZiZPJ",
        "vhKZ0CIT6dBt",
        "tKa31SeqrzS1",
        "cyQpyja0EDRj",
        "0zpUZx5GkSHb",
        "aHBBAhsdAqyz",
        "voFsQwaDph1Y",
        "RMi35vAtYNb-",
        "_k9nd29ZX-FQ",
        "H18g-ND_uWiZ",
        "fLQMyzi3zbFI",
        "AxiZW7zj2hUK",
        "SshMejY9Kz7s",
        "AiReKTM86F3e",
        "HH7O68qvHVR0",
        "OyVVPwEw7Uep",
        "K44UD3HPQAfg"
      ]
    },
    "Relentless": {
      "title": "Relentless",
      "description": [
        {
          "system": "all",
          "text": "When this model shoots at enemies over 9\" away, unmodified results of 6 to hit deal 1 extra hit (only the original hit counts as a 6 for special rules)."
        }
      ],
      "specialRule": [
        "tKa31SeqrzS1",
        "0zpUZx5GkSHb",
        "SY80P2vKJGrY",
        "_k9nd29ZX-FQ",
        "H18g-ND_uWiZ",
        "x2_Lkyj0JPk2",
        "SshMejY9Kz7s"
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
          "text": "Ignores Regeneration, and on unmodified results of 6 to hit, those hits get <key>AP</key>(+4)."
        }
      ],
      "specialRule": [
        "Q7nWXE-8DEHN",
        "iv1Jm6zZiZPJ",
        "tKa31SeqrzS1",
        "wLKHbRBBr4NI",
        "_k9nd29ZX-FQ",
        "fLQMyzi3zbFI",
        "SshMejY9Kz7s"
      ]
    },
    "Scout": {
      "title": "Scout",
      "description": [
        {
          "system": "all",
          "text": "May be set aside before deployment. After all other units are deployed, may be deployed anywhere fully within 12” of their deployment zone. Players alternate in placing <key>Scout</key> units, starting with the player that activates next."
        }
      ],
      "specialRule": [
        "f78kQxkgtIs1",
        "5xPzQn4Qdzz6",
        "RMi35vAtYNb-",
        "_k9nd29ZX-FQ",
        "OJr14Si4C1Uj",
        "xw2YHtZNkhIV",
        "ndODzgAqJGDz",
        "x2_Lkyj0JPk2"
      ]
    },
    "Slow": {
      "title": "Slow",
      "description": [
        {
          "system": "all",
          "text": "Moves -2\" when using Advance, and -4” when using Rush/Charge."
        }
      ],
      "specialRule": [
        "uAXC1RxdtELq",
        "0zpUZx5GkSHb",
        "H18g-ND_uWiZ",
        "fLQMyzi3zbFI",
        "SshMejY9Kz7s"
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
      ],
      "specialRule": [
        "uAXC1RxdtELq",
        "f78kQxkgtIs1",
        "ylxJ4fFb6cZf",
        "AxiZW7zj2hUK",
        "oACH5PrePLfv"
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
      ],
      "specialRule": [
        "uAXC1RxdtELq",
        "cyQpyja0EDRj",
        "HH7O68qvHVR0"
      ]
    },
    "Takedown": {
      "title": "Takedown",
      "description": [
        {
          "system": "all",
          "text": "This model may pick any model in the target unit as its individual target, which is resolved as if it was a unit of [1]. <key>Takedown</key> attacks must be resolved before other weapons."
        }
      ]
    },
    "Thrust": {
      "title": "Thrust",
      "description": [
        {
          "system": "all",
          "text": "When charging, gets +1 to hit rolls and <key>AP</key>(+1) in melee."
        }
      ],
      "specialRule": [
        "GgMdmXsCVdK2",
        "AiReKTM86F3e"
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
      ],
      "specialRule": [
        "cJJJPqOuiHWx",
        "uAXC1RxdtELq",
        "Q7nWXE-8DEHN",
        "iv1Jm6zZiZPJ",
        "cyQpyja0EDRj",
        "wLKHbRBBr4NI",
        "5xPzQn4Qdzz6",
        "aHBBAhsdAqyz",
        "voFsQwaDph1Y",
        "OJr14Si4C1Uj",
        "H18g-ND_uWiZ",
        "fLQMyzi3zbFI",
        "GgMdmXsCVdK2",
        "AxiZW7zj2hUK",
        "SshMejY9Kz7s",
        "dRAJ8qnYDOxm",
        "AiReKTM86F3e",
        "HH7O68qvHVR0",
        "OyVVPwEw7Uep",
        "K44UD3HPQAfg"
      ]
    },
    "Transport": {
      "title": "Transport",
      "description": [
        {
          "system": "all",
          "text": "May transport up to X models or Heroes with up to <key>Tough</key>(6), and non-Heroes with up to <key>Tough</key>(3) which occupy 3 spaces each. Transports may deploy with units inside, and units may enter/exit by using any move action, but must stay fully within 6\" of it when exiting. Units inside/outside transports may not target other units outside/inside transports, but may target the transport itself. When a transport is destroyed, units inside must take a dangerous terrain test, are Shaken, and must be placed fully within 6” of the transport before it’s removed."
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
      ],
      "specialRule": [
        "uAXC1RxdtELq",
        "cyQpyja0EDRj",
        "0zpUZx5GkSHb",
        "xw2YHtZNkhIV",
        "AxiZW7zj2hUK",
        "dRAJ8qnYDOxm",
        "K44UD3HPQAfg",
        "56Tb7FFgHuyX"
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
          "text": "Enemy units within 6\" of the <key>Hero</key> get -1 <key>Defense</key>."
        }
      ]
    },
    "Tactician": {
      "title": "Tactician",
      "description": [
        {
          "system": "all",
          "text": "Friendly units that activate within 6\" of the <key>Hero</key> get +1 to hit when shooting."
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
          "text": "Friendly units within 6\" of the <key>Hero</key> get +1 to morale test rolls."
        }
      ]
    },
    "Destroyer": {
      "title": "Destroyer",
      "description": [
        {
          "system": "all",
          "text": "The hero gets <key>AP</key>(+1) when shooting."
        }
      ],
      "specialRule": [
        "K44UD3HPQAfg"
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
          "text": "Friendly units within 6” of the <key>Hero</key> get -1 to wound effect rolls."
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
      ],
      "specialRule": [
        "AxiZW7zj2hUK"
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
          "text": "Friendly units that activate within 6\" of the <key>Hero</key> get +1 to hit when in melee."
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
          "text": "Gets <key>Tough</key>(+1)."
        }
      ]
    },
    "Scavenger": {
      "title": "Scavenger",
      "description": [
        {
          "system": "all",
          "text": "Friendly units that activate within 6\" of the <key>Hero</key> get +6” range when shooting."
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
    },
    "Fortified": {
      "title": "Fortified",
      "specialRule": [
        "zrj60Gptp4Ce",
        "iv1Jm6zZiZPJ",
        "5xPzQn4Qdzz6",
        "aHBBAhsdAqyz",
        "voFsQwaDph1Y",
        "ndODzgAqJGDz",
        "H18g-ND_uWiZ",
        "p9iL_bzUnY7A",
        "SshMejY9Kz7s",
        "dRAJ8qnYDOxm",
        "HH7O68qvHVR0",
        "K44UD3HPQAfg"
      ],
      "description": [
        {
          "system": "all",
          "text": "When units where all models have this rule take hits, those hits count as having <key>AP</key>(-1), to a min. of <key>AP</key>(0)."
        }
      ]
    },
    "Sergeant": {
      "title": "Sergeant",
      "specialRule": [
        "zrj60Gptp4Ce",
        "cJJJPqOuiHWx",
        "uAXC1RxdtELq",
        "f78kQxkgtIs1",
        "iv1Jm6zZiZPJ",
        "vhKZ0CIT6dBt",
        "tKa31SeqrzS1",
        "cyQpyja0EDRj",
        "ylxJ4fFb6cZf",
        "0zpUZx5GkSHb",
        "wLKHbRBBr4NI",
        "5xPzQn4Qdzz6",
        "aHBBAhsdAqyz",
        "voFsQwaDph1Y",
        "SY80P2vKJGrY",
        "RMi35vAtYNb-",
        "_k9nd29ZX-FQ",
        "OJr14Si4C1Uj",
        "xw2YHtZNkhIV",
        "ndODzgAqJGDz",
        "H18g-ND_uWiZ",
        "fLQMyzi3zbFI",
        "GgMdmXsCVdK2",
        "x2_Lkyj0JPk2",
        "AxiZW7zj2hUK",
        "SshMejY9Kz7s",
        "dRAJ8qnYDOxm",
        "oACH5PrePLfv",
        "AiReKTM86F3e",
        "HH7O68qvHVR0",
        "OyVVPwEw7Uep",
        "K44UD3HPQAfg",
        "56Tb7FFgHuyX"
      ],
      "description": [
        {
          "system": "all",
          "text": "When this model attacks, unmodified results of 6 to hit deal 1 extra hit (only the original hit counts as a 6 for special rules)."
        }
      ]
    },
    "Shadowborn Boost": {
      "title": "Shadowborn Boost",
      "specialRule": [
        "zrj60Gptp4Ce"
      ],
      "description": [
        {
          "system": "all",
          "text": "If all models in this unit have <key>Shadowborn</key>, enemies get -8\" range when shooting  them and -4\" movement when charging them from <key>Shadowborn</key> (instead of only -4\" and -2\")."
        }
      ]
    },
    "Breath Attack": {
      "title": "Breath Attack",
      "specialRule": [
        "zrj60Gptp4Ce",
        "cJJJPqOuiHWx",
        "uAXC1RxdtELq",
        "f78kQxkgtIs1",
        "0zpUZx5GkSHb",
        "5xPzQn4Qdzz6",
        "aHBBAhsdAqyz",
        "voFsQwaDph1Y",
        "SY80P2vKJGrY",
        "RMi35vAtYNb-",
        "_k9nd29ZX-FQ",
        "OJr14Si4C1Uj",
        "xw2YHtZNkhIV",
        "ndODzgAqJGDz",
        "AxiZW7zj2hUK",
        "AiReKTM86F3e"
      ],
      "description": [
        {
          "system": "all",
          "text": "Once per activation, before attacking, roll one die. On a 2+ one enemy unit within 6\" in line of sight takes 1 hit with <key>Blast</key>(3) and <key>AP</key>(1)."
        }
      ]
    },
    "Unique": {
      "title": "Unique",
      "specialRule": [
        "zrj60Gptp4Ce",
        "cJJJPqOuiHWx",
        "f78kQxkgtIs1",
        "iv1Jm6zZiZPJ",
        "vhKZ0CIT6dBt",
        "cyQpyja0EDRj",
        "ylxJ4fFb6cZf",
        "5xPzQn4Qdzz6",
        "RMi35vAtYNb-",
        "SshMejY9Kz7s",
        "dRAJ8qnYDOxm",
        "OyVVPwEw7Uep"
      ],
      "description": [
        {
          "system": "all",
          "text": "This unit may only be taken once per army."
        }
      ]
    },
    "Precision Target": {
      "title": "Precision Target",
      "specialRule": [
        "zrj60Gptp4Ce",
        "iv1Jm6zZiZPJ"
      ],
      "description": [
        {
          "system": "all",
          "text": "Once per game, during this model's activation, pick one enemy unit within 36\" and in line of sight of it, and place X markers on it. Friendly units get +X to hit rolls when attacking it."
        }
      ]
    },
    "Armor": {
      "title": "Armor",
      "specialRule": [
        "zrj60Gptp4Ce",
        "cJJJPqOuiHWx",
        "uAXC1RxdtELq",
        "f78kQxkgtIs1",
        "vhKZ0CIT6dBt",
        "cyQpyja0EDRj",
        "ylxJ4fFb6cZf",
        "0zpUZx5GkSHb",
        "wLKHbRBBr4NI",
        "5xPzQn4Qdzz6",
        "aHBBAhsdAqyz",
        "voFsQwaDph1Y",
        "SY80P2vKJGrY",
        "RMi35vAtYNb-",
        "xw2YHtZNkhIV",
        "H18g-ND_uWiZ",
        "fLQMyzi3zbFI",
        "GgMdmXsCVdK2",
        "x2_Lkyj0JPk2",
        "AxiZW7zj2hUK",
        "SshMejY9Kz7s",
        "dRAJ8qnYDOxm",
        "oACH5PrePLfv",
        "AiReKTM86F3e",
        "HH7O68qvHVR0",
        "OyVVPwEw7Uep",
        "K44UD3HPQAfg",
        "56Tb7FFgHuyX"
      ],
      "description": [
        {
          "system": "all",
          "text": "Counts as having <key>Defense</key> X+."
        }
      ]
    },
    "Repel Ambushers": {
      "title": "Repel Ambushers",
      "specialRule": [
        "zrj60Gptp4Ce",
        "cJJJPqOuiHWx",
        "f78kQxkgtIs1",
        "vhKZ0CIT6dBt",
        "ylxJ4fFb6cZf",
        "voFsQwaDph1Y",
        "RMi35vAtYNb-",
        "GgMdmXsCVdK2",
        "x2_Lkyj0JPk2",
        "AxiZW7zj2hUK",
        "dRAJ8qnYDOxm",
        "oACH5PrePLfv",
        "OyVVPwEw7Uep"
      ],
      "description": [
        {
          "system": "all",
          "text": "Enemy units using <key>Ambush</key> must be set up over 12\" away from this model's unit."
        }
      ]
    },
    "Ethereal": {
      "title": "Ethereal",
      "specialRule": [
        "zrj60Gptp4Ce",
        "x2_Lkyj0JPk2"
      ],
      "description": [
        {
          "system": "all",
          "text": "Once per activation, before attacking, place this model anywhere fully within 6\" of its position. This model moves -6\" when using Advance, and -6â when using Rush/Charge."
        }
      ]
    },
    "Melee Slayer": {
      "title": "Melee Slayer",
      "specialRule": [
        "zrj60Gptp4Ce",
        "cJJJPqOuiHWx",
        "uAXC1RxdtELq",
        "Q7nWXE-8DEHN",
        "ylxJ4fFb6cZf",
        "wLKHbRBBr4NI",
        "OJr14Si4C1Uj",
        "H18g-ND_uWiZ",
        "fLQMyzi3zbFI",
        "AxiZW7zj2hUK",
        "SshMejY9Kz7s",
        "dRAJ8qnYDOxm",
        "AiReKTM86F3e",
        "HH7O68qvHVR0",
        "OyVVPwEw7Uep",
        "K44UD3HPQAfg"
      ],
      "description": [
        {
          "system": "all",
          "text": "This model's melee weapons get <key>AP</key>(+2) against units where most models have <key>Tough</key>(3) or higher."
        }
      ]
    },
    "Thrust in Melee Aura": {
      "title": "Thrust in Melee Aura",
      "specialRule": [
        "zrj60Gptp4Ce",
        "GgMdmXsCVdK2"
      ],
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Thrust</key> in melee."
        }
      ]
    },
    "Melee Evasion": {
      "title": "Melee Evasion",
      "specialRule": [
        "zrj60Gptp4Ce",
        "cJJJPqOuiHWx",
        "vhKZ0CIT6dBt",
        "cyQpyja0EDRj",
        "wLKHbRBBr4NI",
        "RMi35vAtYNb-",
        "OJr14Si4C1Uj",
        "fLQMyzi3zbFI",
        "GgMdmXsCVdK2",
        "oACH5PrePLfv",
        "AiReKTM86F3e",
        "OyVVPwEw7Uep",
        "K44UD3HPQAfg"
      ],
      "description": [
        {
          "system": "all",
          "text": "Enemies get -1 to hit rolls in melee when attacking units where all models have this rule."
        }
      ]
    },
    "Shadowborn": {
      "title": "Shadowborn",
      "specialRule": [
        "zrj60Gptp4Ce"
      ],
      "description": [
        {
          "system": "all",
          "text": "Enemies get -4\" range when trying to shoot at units where all models have this rule, and -2\" movement when trying to charge units where all models have this rule."
        }
      ]
    },
    "Counter-Attack Aura": {
      "title": "Counter-Attack Aura",
      "specialRule": [
        "zrj60Gptp4Ce",
        "Q7nWXE-8DEHN",
        "iv1Jm6zZiZPJ",
        "cyQpyja0EDRj",
        "ylxJ4fFb6cZf"
      ],
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Counter-Attack</key>."
        }
      ]
    },
    "Increased Shooting Range Aura": {
      "title": "Increased Shooting Range Aura",
      "specialRule": [
        "zrj60Gptp4Ce",
        "ylxJ4fFb6cZf",
        "H18g-ND_uWiZ"
      ],
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get +6\" range when shooting."
        }
      ]
    },
    "Ravage": {
      "title": "Ravage",
      "specialRule": [
        "zrj60Gptp4Ce",
        "f78kQxkgtIs1",
        "iv1Jm6zZiZPJ",
        "wLKHbRBBr4NI",
        "SshMejY9Kz7s",
        "AiReKTM86F3e",
        "K44UD3HPQAfg"
      ],
      "description": [
        {
          "system": "all",
          "text": "When it's this model's turn to attack in melee, roll X dice. For each 6+ the target takes one wound."
        }
      ]
    },
    "Rapid Rush Aura": {
      "title": "Rapid Rush Aura",
      "specialRule": [
        "zrj60Gptp4Ce"
      ],
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Rapid Rush</key>."
        }
      ]
    },
    "Bane in Melee": {
      "title": "Bane in Melee",
      "specialRule": [
        "zrj60Gptp4Ce",
        "fLQMyzi3zbFI",
        "dRAJ8qnYDOxm"
      ],
      "description": [
        {
          "system": "all",
          "text": "This model gets <key>Bane</key> in melee."
        }
      ]
    },
    "Shadowborn Boost Aura": {
      "title": "Shadowborn Boost Aura",
      "specialRule": [
        "zrj60Gptp4Ce"
      ],
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Shadowborn Boost</key>."
        }
      ]
    },
    "Unpredictable Fighter Mark": {
      "title": "Unpredictable Fighter Mark",
      "specialRule": [
        "zrj60Gptp4Ce"
      ],
      "description": [
        {
          "system": "all",
          "text": "Once per activation, before attacking, pick one enemy unit within 18\", which friendly units gets <key>Unpredictable Fighter</key> against once (next time the effect would apply)."
        }
      ]
    },
    "Resistance": {
      "title": "Resistance",
      "specialRule": [
        "zrj60Gptp4Ce",
        "cJJJPqOuiHWx",
        "f78kQxkgtIs1",
        "Q7nWXE-8DEHN",
        "vhKZ0CIT6dBt",
        "cyQpyja0EDRj",
        "ylxJ4fFb6cZf",
        "5xPzQn4Qdzz6",
        "voFsQwaDph1Y",
        "SY80P2vKJGrY",
        "RMi35vAtYNb-",
        "xw2YHtZNkhIV",
        "x2_Lkyj0JPk2",
        "SshMejY9Kz7s",
        "OyVVPwEw7Uep",
        "K44UD3HPQAfg",
        "56Tb7FFgHuyX"
      ],
      "description": [
        {
          "system": "all",
          "text": "When a unit where all models have this rule takes wounds, roll one die for each. On a 6+ it is ignored. If the wounds were from a spell, then they are ignored on a 2+ instead."
        }
      ]
    },
    "Good Fighter": {
      "title": "Good Fighter",
      "specialRule": [
        "zrj60Gptp4Ce",
        "fLQMyzi3zbFI",
        "GgMdmXsCVdK2"
      ],
      "description": [
        {
          "system": "all",
          "text": "This model gets +1 to hit rolls in melee."
        }
      ]
    },
    "Fragment": {
      "title": "Fragment",
      "specialRule": [
        "zrj60Gptp4Ce"
      ],
      "description": [
        {
          "system": "all",
          "text": "<key>Ignores Cover</key>, and against units where most models have <key>Defense</key> 2+ to <key>Defense</key> 4+, this weapon gets <key>AP</key>(+1)."
        }
      ]
    },
    "Defense": {
      "title": "Defense",
      "specialRule": [
        "zrj60Gptp4Ce",
        "cJJJPqOuiHWx",
        "uAXC1RxdtELq",
        "f78kQxkgtIs1",
        "iv1Jm6zZiZPJ",
        "vhKZ0CIT6dBt",
        "cyQpyja0EDRj",
        "ylxJ4fFb6cZf",
        "0zpUZx5GkSHb",
        "wLKHbRBBr4NI",
        "5xPzQn4Qdzz6",
        "aHBBAhsdAqyz",
        "voFsQwaDph1Y",
        "SY80P2vKJGrY",
        "RMi35vAtYNb-",
        "_k9nd29ZX-FQ",
        "OJr14Si4C1Uj",
        "xw2YHtZNkhIV",
        "ndODzgAqJGDz",
        "H18g-ND_uWiZ",
        "fLQMyzi3zbFI",
        "GgMdmXsCVdK2",
        "x2_Lkyj0JPk2",
        "AxiZW7zj2hUK",
        "SshMejY9Kz7s",
        "dRAJ8qnYDOxm",
        "oACH5PrePLfv",
        "AiReKTM86F3e",
        "HH7O68qvHVR0",
        "OyVVPwEw7Uep",
        "K44UD3HPQAfg",
        "56Tb7FFgHuyX"
      ],
      "description": [
        {
          "system": "all",
          "text": "This model gets +X to defense rolls."
        }
      ]
    },
    "Counter-Attack": {
      "title": "Counter-Attack",
      "specialRule": [
        "zrj60Gptp4Ce",
        "Q7nWXE-8DEHN",
        "iv1Jm6zZiZPJ",
        "cyQpyja0EDRj",
        "ylxJ4fFb6cZf",
        "wLKHbRBBr4NI",
        "K44UD3HPQAfg"
      ],
      "description": [
        {
          "system": "all",
          "text": "Strikes first when charged."
        }
      ]
    },
    "Rapid Rush": {
      "title": "Rapid Rush",
      "specialRule": [
        "zrj60Gptp4Ce",
        "tKa31SeqrzS1",
        "voFsQwaDph1Y",
        "_k9nd29ZX-FQ"
      ],
      "description": [
        {
          "system": "all",
          "text": "This model moves +6\" when using Rush actions."
        }
      ]
    },
    "Unpredictable Fighter": {
      "title": "Unpredictable Fighter",
      "specialRule": [
        "zrj60Gptp4Ce",
        "cJJJPqOuiHWx",
        "iv1Jm6zZiZPJ",
        "vhKZ0CIT6dBt",
        "ylxJ4fFb6cZf",
        "0zpUZx5GkSHb",
        "5xPzQn4Qdzz6",
        "RMi35vAtYNb-",
        "_k9nd29ZX-FQ",
        "OJr14Si4C1Uj",
        "xw2YHtZNkhIV",
        "ndODzgAqJGDz",
        "GgMdmXsCVdK2",
        "x2_Lkyj0JPk2",
        "AxiZW7zj2hUK",
        "dRAJ8qnYDOxm",
        "AiReKTM86F3e",
        "OyVVPwEw7Uep",
        "K44UD3HPQAfg"
      ],
      "description": [
        {
          "system": "all",
          "text": "When in melee, roll one die and apply one effect to all models with this rule: on a 1-3 they get <key>AP</key>(+1), and on a 4-6 they get +1 to hit rolls instead."
        }
      ]
    },
    "Unpredictable": {
      "title": "Unpredictable",
      "specialRule": [
        "zrj60Gptp4Ce",
        "cJJJPqOuiHWx",
        "RMi35vAtYNb-",
        "_k9nd29ZX-FQ",
        "OJr14Si4C1Uj",
        "xw2YHtZNkhIV",
        "ndODzgAqJGDz",
        "x2_Lkyj0JPk2",
        "dRAJ8qnYDOxm",
        "K44UD3HPQAfg"
      ],
      "description": [
        {
          "system": "all",
          "text": "When attacking, roll one die and apply one effect to all models with this rule: on a 1-3 they get <key>AP</key>(+1), and on a 4-6 they get +1 to hit rolls instead."
        }
      ]
    },
    "Ignores Cover": {
      "title": "Ignores Cover",
      "specialRule": [
        "zrj60Gptp4Ce",
        "uAXC1RxdtELq",
        "5xPzQn4Qdzz6",
        "voFsQwaDph1Y",
        "RMi35vAtYNb-",
        "_k9nd29ZX-FQ",
        "OJr14Si4C1Uj",
        "xw2YHtZNkhIV",
        "ndODzgAqJGDz",
        "fLQMyzi3zbFI",
        "GgMdmXsCVdK2",
        "dRAJ8qnYDOxm",
        "56Tb7FFgHuyX"
      ],
      "description": [
        {
          "system": "all",
          "text": "This weapon ignores cover."
        }
      ]
    },
    "Evasive": {
      "title": "Evasive",
      "specialRule": [
        "zrj60Gptp4Ce",
        "iv1Jm6zZiZPJ",
        "ylxJ4fFb6cZf",
        "0zpUZx5GkSHb"
      ],
      "description": [
        {
          "system": "all",
          "text": "Enemies get -1 to hit rolls when attacking units where all models have this rule."
        }
      ]
    },
    "Grounded Protection Aura": {
      "title": "Grounded Protection Aura",
      "specialRule": [
        "cJJJPqOuiHWx",
        "uAXC1RxdtELq"
      ],
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Grounded Protection</key>."
        }
      ]
    },
    "Teleport": {
      "title": "Teleport",
      "specialRule": [
        "cJJJPqOuiHWx",
        "f78kQxkgtIs1",
        "fLQMyzi3zbFI"
      ],
      "description": [
        {
          "system": "all",
          "text": "Once per activation, before attacking, place this model anywhere fully within 6\" of its position."
        }
      ]
    },
    "Precise": {
      "title": "Precise",
      "specialRule": [
        "cJJJPqOuiHWx",
        "0zpUZx5GkSHb",
        "p9iL_bzUnY7A",
        "dRAJ8qnYDOxm"
      ],
      "description": [
        {
          "system": "all",
          "text": "Gets +1 to hit when attacking."
        }
      ]
    },
    "Wild Veil": {
      "title": "Wild Veil",
      "specialRule": [
        "cJJJPqOuiHWx"
      ],
      "description": [
        {
          "system": "all",
          "text": "Enemies get -4\" range when trying to shoot at units where all models have this rule, and -2\" movement when trying to charge units where all models have this rule."
        }
      ]
    },
    "Hit & Run Shooter": {
      "title": "Hit & Run Shooter",
      "specialRule": [
        "cJJJPqOuiHWx",
        "Q7nWXE-8DEHN",
        "iv1Jm6zZiZPJ"
      ],
      "description": [
        {
          "system": "all",
          "text": "Once per round, units where all models have this rule may move by up to 3\" after shooting."
        }
      ]
    },
    "Piercing Assault Aura": {
      "title": "Piercing Assault Aura",
      "specialRule": [
        "cJJJPqOuiHWx",
        "cyQpyja0EDRj",
        "wLKHbRBBr4NI",
        "OyVVPwEw7Uep"
      ],
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Piercing Assault</key>."
        }
      ]
    },
    "Grounded Protection": {
      "title": "Grounded Protection",
      "specialRule": [
        "cJJJPqOuiHWx",
        "uAXC1RxdtELq"
      ],
      "description": [
        {
          "system": "all",
          "text": "If a unit where all models have this rule has most of them within 1\" of terrain, when they take wounds roll one die per wound, and on a 5+ it is ignored."
        }
      ]
    },
    "Unpredictable Shooter Aura": {
      "title": "Unpredictable Shooter Aura",
      "specialRule": [
        "cJJJPqOuiHWx",
        "dRAJ8qnYDOxm"
      ],
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Unpredictable Shooter</key>."
        }
      ]
    },
    "Hit & Run Shooter Aura": {
      "title": "Hit & Run Shooter Aura",
      "specialRule": [
        "cJJJPqOuiHWx",
        "Q7nWXE-8DEHN",
        "iv1Jm6zZiZPJ"
      ],
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Hit & Run Shooter</key>."
        }
      ]
    },
    "Melee Evasion Aura": {
      "title": "Melee Evasion Aura",
      "specialRule": [
        "cJJJPqOuiHWx",
        "GgMdmXsCVdK2",
        "OyVVPwEw7Uep"
      ],
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Melee Evasion</key>."
        }
      ]
    },
    "Wild Veil Boost": {
      "title": "Wild Veil Boost",
      "specialRule": [
        "cJJJPqOuiHWx"
      ],
      "description": [
        {
          "system": "all",
          "text": "If all models in this unit have <key>Wild Veil</key>, enemies get -8\" range when shooting  them and -4\" movement when charging them from <key>Wild Veil</key> (instead of only -4\" and -2\")."
        }
      ]
    },
    "Quick Shot Mark": {
      "title": "Quick Shot Mark",
      "specialRule": [
        "cJJJPqOuiHWx",
        "cyQpyja0EDRj"
      ],
      "description": [
        {
          "system": "all",
          "text": "Once per activation, before attacking, pick one enemy unit within 18\", which friendly units gets <key>Quick Shot</key> against once (next time the effect would apply)."
        }
      ]
    },
    "Piercing Assault": {
      "title": "Piercing Assault",
      "specialRule": [
        "cJJJPqOuiHWx",
        "uAXC1RxdtELq",
        "cyQpyja0EDRj",
        "wLKHbRBBr4NI",
        "RMi35vAtYNb-",
        "GgMdmXsCVdK2",
        "AiReKTM86F3e",
        "OyVVPwEw7Uep"
      ],
      "description": [
        {
          "system": "all",
          "text": "This model gets <key>AP</key>(+1) when charging."
        }
      ]
    },
    "Wild Veil Boost Aura": {
      "title": "Wild Veil Boost Aura",
      "specialRule": [
        "cJJJPqOuiHWx"
      ],
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Wild Veil Boost</key>."
        }
      ]
    },
    "Spawn": {
      "title": "Spawn",
      "specialRule": [
        "cJJJPqOuiHWx",
        "f78kQxkgtIs1",
        "iv1Jm6zZiZPJ",
        "cyQpyja0EDRj",
        "SshMejY9Kz7s"
      ],
      "description": [
        {
          "system": "all",
          "text": "Once per game, when this model is activated, you may place a new unit of X fully within 6\" of it."
        }
      ]
    },
    "Pierce": {
      "title": "Pierce",
      "specialRule": [
        "cJJJPqOuiHWx"
      ],
      "description": [
        {
          "system": "all",
          "text": "On unmodified results of 6 to hit that aren't blocked, this weapon deals 1 extra wound."
        }
      ]
    },
    "Rapid Advance Aura": {
      "title": "Rapid Advance Aura",
      "specialRule": [
        "cJJJPqOuiHWx",
        "dRAJ8qnYDOxm"
      ],
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Rapid Advance</key>."
        }
      ]
    },
    "Speed Debuff": {
      "title": "Speed Debuff",
      "specialRule": [
        "cJJJPqOuiHWx",
        "SshMejY9Kz7s"
      ],
      "description": [
        {
          "system": "all",
          "text": "Once per activation, before attacking, pick one enemy unit within 18\", which moves -2\" when using Advance actions and -4\" when using Rush/Charge actions once (next time the effect would apply)."
        }
      ]
    },
    "Unpredictable Shooter": {
      "title": "Unpredictable Shooter",
      "specialRule": [
        "cJJJPqOuiHWx",
        "dRAJ8qnYDOxm"
      ],
      "description": [
        {
          "system": "all",
          "text": "When shooting, roll one die and apply one effect to all models with this rule: on a 1-3 they get <key>AP</key>(+1), and on a 4-6 they get +1 to hit rolls instead."
        }
      ]
    },
    "Hit & Run": {
      "title": "Hit & Run",
      "specialRule": [
        "cJJJPqOuiHWx",
        "Q7nWXE-8DEHN",
        "iv1Jm6zZiZPJ",
        "cyQpyja0EDRj",
        "wLKHbRBBr4NI"
      ],
      "description": [
        {
          "system": "all",
          "text": "Once per round, units where all models have this rule may move by up to 3\" after shooting or being in melee."
        }
      ]
    },
    "Quick": {
      "title": "Quick",
      "specialRule": [
        "cJJJPqOuiHWx",
        "uAXC1RxdtELq",
        "cyQpyja0EDRj",
        "GgMdmXsCVdK2",
        "AiReKTM86F3e"
      ],
      "description": [
        {
          "system": "all",
          "text": "Moves +2\" when using Advance, and +2” when using Rush/Charge."
        }
      ]
    },
    "Quick Shot": {
      "title": "Quick Shot",
      "specialRule": [
        "cJJJPqOuiHWx",
        "uAXC1RxdtELq",
        "cyQpyja0EDRj",
        "SY80P2vKJGrY",
        "OJr14Si4C1Uj",
        "GgMdmXsCVdK2",
        "oACH5PrePLfv",
        "AiReKTM86F3e"
      ],
      "description": [
        {
          "system": "all",
          "text": "This model may shoot after using Rush actions."
        }
      ]
    },
    "Rapid Advance": {
      "title": "Rapid Advance",
      "specialRule": [
        "cJJJPqOuiHWx",
        "dRAJ8qnYDOxm"
      ],
      "description": [
        {
          "system": "all",
          "text": "This model moves +4\" when using Advance actions."
        }
      ]
    },
    "Grounded Reinforcement": {
      "title": "Grounded Reinforcement",
      "specialRule": [
        "cJJJPqOuiHWx",
        "uAXC1RxdtELq"
      ],
      "description": [
        {
          "system": "all",
          "text": "If a unit where all models have this rule has most of them within 1\" of terrain, they get +1 to defense rolls."
        }
      ]
    },
    "Stealth Aura": {
      "title": "Stealth Aura",
      "specialRule": [
        "uAXC1RxdtELq",
        "f78kQxkgtIs1",
        "ylxJ4fFb6cZf",
        "AxiZW7zj2hUK"
      ],
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Stealth</key>."
        }
      ]
    },
    "Swift": {
      "title": "Swift",
      "specialRule": [
        "uAXC1RxdtELq",
        "Q7nWXE-8DEHN",
        "0zpUZx5GkSHb",
        "H18g-ND_uWiZ",
        "fLQMyzi3zbFI",
        "SshMejY9Kz7s"
      ],
      "description": [
        {
          "system": "all",
          "text": "This model may ignore the <key>Slow</key> rule."
        }
      ]
    },
    "Takedown Strike": {
      "title": "Takedown Strike",
      "specialRule": [
        "uAXC1RxdtELq",
        "ylxJ4fFb6cZf",
        "fLQMyzi3zbFI",
        "GgMdmXsCVdK2",
        "dRAJ8qnYDOxm",
        "AiReKTM86F3e",
        "K44UD3HPQAfg"
      ],
      "description": [
        {
          "system": "all",
          "text": "Once per game, when it's this model's turn to attack in melee, you may pick one model in the unit as its target, and make one attack at Quality 2+ with <key>AP</key>(2) and <key>Deadly</key>(3), which is resolved as if it's a unit of 1."
        }
      ]
    },
    "Drakesworn": {
      "title": "Drakesworn",
      "specialRule": [
        "uAXC1RxdtELq"
      ],
      "description": [
        {
          "system": "all",
          "text": "After this model is deployed, it may be placed anywhere fully within 9” of its position."
        }
      ]
    },
    "Grounded Reinforcement Aura": {
      "title": "Grounded Reinforcement Aura",
      "specialRule": [
        "uAXC1RxdtELq"
      ],
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Grounded Reinforcement</key>."
        }
      ]
    },
    "Grounded Speed": {
      "title": "Grounded Speed",
      "specialRule": [
        "uAXC1RxdtELq"
      ],
      "description": [
        {
          "system": "all",
          "text": "If a unit where all models have this rule has most of them within 1\" of terrain when activated, they move +2\" on Advance, and +4\" on Rush/Charge during this activation."
        }
      ]
    },
    "Shielded": {
      "title": "Shielded",
      "specialRule": [
        "uAXC1RxdtELq",
        "vhKZ0CIT6dBt",
        "ylxJ4fFb6cZf",
        "SY80P2vKJGrY",
        "RMi35vAtYNb-",
        "x2_Lkyj0JPk2",
        "dRAJ8qnYDOxm"
      ],
      "description": [
        {
          "system": "all",
          "text": "Units where all models have this rule get +1 to defense rolls against hits that are not from spells."
        }
      ]
    },
    "Quick Shot Aura": {
      "title": "Quick Shot Aura",
      "specialRule": [
        "uAXC1RxdtELq",
        "GgMdmXsCVdK2",
        "AiReKTM86F3e"
      ],
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Quick Shot</key>."
        }
      ]
    },
    "Swift Aura": {
      "title": "Swift Aura",
      "specialRule": [
        "uAXC1RxdtELq",
        "0zpUZx5GkSHb",
        "H18g-ND_uWiZ",
        "SshMejY9Kz7s"
      ],
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Swift</key>."
        }
      ]
    },
    "Strider Aura": {
      "title": "Strider Aura",
      "specialRule": [
        "uAXC1RxdtELq",
        "cyQpyja0EDRj",
        "HH7O68qvHVR0"
      ],
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Strider</key>."
        }
      ]
    },
    "Unstoppable in Melee Aura": {
      "title": "Unstoppable in Melee Aura",
      "specialRule": [
        "uAXC1RxdtELq",
        "xw2YHtZNkhIV",
        "AxiZW7zj2hUK",
        "dRAJ8qnYDOxm",
        "56Tb7FFgHuyX"
      ],
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Unstoppable</key> in melee."
        }
      ]
    },
    "Pulverize": {
      "title": "Pulverize",
      "specialRule": [
        "uAXC1RxdtELq"
      ],
      "description": [
        {
          "system": "all",
          "text": "<key>Ignores Cover</key>, and on unmodified results of 6 to hit, those hits get <key>AP</key>(+4)."
        }
      ]
    },
    "Piercing Assault Mark": {
      "title": "Piercing Assault Mark",
      "specialRule": [
        "uAXC1RxdtELq",
        "GgMdmXsCVdK2"
      ],
      "description": [
        {
          "system": "all",
          "text": "Once per activation, before attacking, pick one enemy unit within 18\", which friendly units gets <key>Piercing Assault</key> against once (next time the effect would apply)."
        }
      ]
    },
    "Reinforcement": {
      "title": "Reinforcement",
      "specialRule": [
        "uAXC1RxdtELq",
        "ylxJ4fFb6cZf"
      ],
      "description": [
        {
          "system": "all",
          "text": "When a unit where all models have this rule is Shaken or fully destroyed, you may remove it from the table as destroyed and place a new copy of it fully within 12\" of any table edge at the beginning of the next round after Ambushers have been deployed. Units that deploy via <key>Reinforcement</key> can’t seize or contest objectives on the round they deploy, and this rule doesn’t apply to the new copy of the unit."
        }
      ]
    },
    "Hit & Run Fighter": {
      "title": "Hit & Run Fighter",
      "specialRule": [
        "uAXC1RxdtELq",
        "cyQpyja0EDRj",
        "wLKHbRBBr4NI"
      ],
      "description": [
        {
          "system": "all",
          "text": "Once per round, units where all models have this rule may move by up to 3\" after being in melee."
        }
      ]
    },
    "Fast Aura": {
      "title": "Fast Aura",
      "specialRule": [
        "f78kQxkgtIs1"
      ],
      "description": [
        {
          "system": "all",
          "text": "This model and its unit moves +2\" when using Advance actions and +4\" when using Rush/Charge actions."
        }
      ]
    },
    "Instinctive": {
      "title": "Instinctive",
      "specialRule": [
        "f78kQxkgtIs1",
        "GgMdmXsCVdK2"
      ],
      "description": [
        {
          "system": "all",
          "text": "When this model is activated, if it is able to shoot/charge an enemy unit, then it must immediately attack the closest valid target and gets +1 to hit rolls for that attack."
        }
      ]
    },
    "No Retreat Aura": {
      "title": "No Retreat Aura",
      "specialRule": [
        "f78kQxkgtIs1",
        "0zpUZx5GkSHb",
        "5xPzQn4Qdzz6",
        "aHBBAhsdAqyz",
        "x2_Lkyj0JPk2"
      ],
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>No Retreat</key>."
        }
      ]
    },
    "Infiltrate": {
      "title": "Infiltrate",
      "specialRule": [
        "f78kQxkgtIs1",
        "0zpUZx5GkSHb",
        "5xPzQn4Qdzz6",
        "fLQMyzi3zbFI",
        "GgMdmXsCVdK2",
        "AxiZW7zj2hUK",
        "SshMejY9Kz7s"
      ],
      "description": [
        {
          "system": "all",
          "text": "Counts as having <key>Ambush</key>, but may be deployed up to 1\" away from enemy units."
        }
      ]
    },
    "Shred": {
      "title": "Shred",
      "specialRule": [
        "f78kQxkgtIs1",
        "Q7nWXE-8DEHN",
        "iv1Jm6zZiZPJ",
        "cyQpyja0EDRj",
        "5xPzQn4Qdzz6",
        "aHBBAhsdAqyz",
        "SY80P2vKJGrY",
        "RMi35vAtYNb-",
        "_k9nd29ZX-FQ",
        "OJr14Si4C1Uj",
        "xw2YHtZNkhIV",
        "ndODzgAqJGDz",
        "GgMdmXsCVdK2",
        "AxiZW7zj2hUK",
        "dRAJ8qnYDOxm",
        "oACH5PrePLfv",
        "HH7O68qvHVR0",
        "OyVVPwEw7Uep",
        "56Tb7FFgHuyX"
      ],
      "description": [
        {
          "system": "all",
          "text": "On unmodified results of 1 to block hits, this weapon deals 1 extra wound."
        }
      ]
    },
    "Piercing Hunter Aura": {
      "title": "Piercing Hunter Aura",
      "specialRule": [
        "f78kQxkgtIs1",
        "wLKHbRBBr4NI",
        "aHBBAhsdAqyz"
      ],
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Piercing Hunter</key>."
        }
      ]
    },
    "Reanimation Aura": {
      "title": "Reanimation Aura",
      "specialRule": [
        "f78kQxkgtIs1"
      ],
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Reanimation</key>."
        }
      ]
    },
    "Cursed Undead": {
      "title": "Cursed Undead",
      "specialRule": [
        "f78kQxkgtIs1"
      ],
      "description": [
        {
          "system": "all",
          "text": "When a unit where all models have this rule takes wounds, roll one die for each. On a 6+ it is ignored."
        }
      ]
    },
    "Scout Aura": {
      "title": "Scout Aura",
      "specialRule": [
        "f78kQxkgtIs1",
        "5xPzQn4Qdzz6",
        "RMi35vAtYNb-",
        "_k9nd29ZX-FQ",
        "OJr14Si4C1Uj",
        "xw2YHtZNkhIV",
        "ndODzgAqJGDz",
        "x2_Lkyj0JPk2"
      ],
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Scout</key>."
        }
      ]
    },
    "Surge": {
      "title": "Surge",
      "specialRule": [
        "f78kQxkgtIs1",
        "cyQpyja0EDRj",
        "p9iL_bzUnY7A",
        "x2_Lkyj0JPk2",
        "dRAJ8qnYDOxm",
        "OyVVPwEw7Uep"
      ],
      "description": [
        {
          "system": "all",
          "text": "On unmodified results of 6 to hit, this weapon deals 1 extra hits (only the original hit counts as a 6 for special rules)."
        }
      ]
    },
    "Mind Control": {
      "title": "Mind Control",
      "specialRule": [
        "f78kQxkgtIs1",
        "cyQpyja0EDRj",
        "OyVVPwEw7Uep"
      ],
      "description": [
        {
          "system": "all",
          "text": "Once per activation, before attacking, pick one enemy unit within 18\", which must take a morale test. If failed you may move it by up to 6\" in a straight line in any direction."
        }
      ]
    },
    "Morale Debuff": {
      "title": "Morale Debuff",
      "specialRule": [
        "f78kQxkgtIs1",
        "cyQpyja0EDRj",
        "H18g-ND_uWiZ",
        "fLQMyzi3zbFI",
        "OyVVPwEw7Uep"
      ],
      "description": [
        {
          "system": "all",
          "text": "Once per activation, before attacking, pick one enemy unit within 18\", which gets -1 to morale test rolls once (next time the effect would apply)."
        }
      ]
    },
    "Shred in Melee Aura": {
      "title": "Shred in Melee Aura",
      "specialRule": [
        "f78kQxkgtIs1",
        "Q7nWXE-8DEHN",
        "SY80P2vKJGrY"
      ],
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Shred</key> in melee."
        }
      ]
    },
    "Sever": {
      "title": "Sever",
      "specialRule": [
        "f78kQxkgtIs1"
      ],
      "description": [
        {
          "system": "all",
          "text": "Against units where most models have <key>Defense</key> 2+ to <key>Defense</key> 4+, this weapon gets <key>AP</key>(+1)."
        }
      ]
    },
    "Casting Buff": {
      "title": "Casting Buff",
      "specialRule": [
        "f78kQxkgtIs1"
      ],
      "description": [
        {
          "system": "all",
          "text": "Once per activation, before attacking, pick one friendly model within 12\" with <key>Caster</key>, which gets +1 to casting rolls once (next time the effect would apply)."
        }
      ]
    },
    "Cursed Undead Boost Buff": {
      "title": "Cursed Undead Boost Buff",
      "specialRule": [
        "f78kQxkgtIs1"
      ],
      "description": [
        {
          "system": "all",
          "text": "Once per activation, before attacking, pick one friendly unit within 12\", which gets <key>Cursed Undead Boost</key> once (next time the effect would apply)."
        }
      ]
    },
    "No Retreat": {
      "title": "No Retreat",
      "specialRule": [
        "f78kQxkgtIs1",
        "0zpUZx5GkSHb",
        "5xPzQn4Qdzz6",
        "aHBBAhsdAqyz",
        "x2_Lkyj0JPk2"
      ],
      "description": [
        {
          "system": "all",
          "text": "When a unit where most models have this rule fails a morale test that causes it to be Shaken or Routed, the test counts as passed instead. Then, roll as many dice as the number of wounds it would take to fully destroy it, and for each result of 1-3 the unit takes one wound, which can't be ignored."
        }
      ]
    },
    "Piercing Hunter": {
      "title": "Piercing Hunter",
      "specialRule": [
        "f78kQxkgtIs1",
        "wLKHbRBBr4NI",
        "aHBBAhsdAqyz",
        "H18g-ND_uWiZ"
      ],
      "description": [
        {
          "system": "all",
          "text": "When this model shoots at enemies over 9\" away, its weapons get <key>AP</key>(+1)."
        }
      ]
    },
    "Reanimation": {
      "title": "Reanimation",
      "specialRule": [
        "f78kQxkgtIs1"
      ],
      "description": [
        {
          "system": "all",
          "text": "When a unit where all models have this rule is activated, roll as many dice as the max. number of models/wounds it could restore. For each 5+ you may restore one model/wound. Note that new models may only be restored if they can be placed in coherency with non-restored models."
        }
      ]
    },
    "Cursed Undead Boost": {
      "title": "Cursed Undead Boost",
      "specialRule": [
        "f78kQxkgtIs1"
      ],
      "description": [
        {
          "system": "all",
          "text": "If all models in this unit have <key>Cursed Undead</key>, they ignore wounds on rolls of 5-6 from <key>Cursed Undead</key> (instead of only on 6+)."
        }
      ]
    },
    "Buccaneer": {
      "title": "Buccaneer",
      "specialRule": [
        "Q7nWXE-8DEHN"
      ],
      "description": [
        {
          "system": "all",
          "text": "When this model shoots at enemies over 9\" away, it gets +1 to hit rolls."
        }
      ]
    },
    "Crossing Barrage": {
      "title": "Crossing Barrage",
      "specialRule": [
        "Q7nWXE-8DEHN",
        "iv1Jm6zZiZPJ",
        "aHBBAhsdAqyz",
        "SY80P2vKJGrY",
        "fLQMyzi3zbFI",
        "GgMdmXsCVdK2",
        "SshMejY9Kz7s",
        "dRAJ8qnYDOxm"
      ],
      "description": [
        {
          "system": "all",
          "text": "Once per activation, when this model moves through enemy units, pick one of them and roll X dice. For each 4+ it takes 3 hits with <key>AP</key>(1)."
        }
      ]
    },
    "Mend": {
      "title": "Mend",
      "specialRule": [
        "Q7nWXE-8DEHN",
        "iv1Jm6zZiZPJ",
        "5xPzQn4Qdzz6",
        "voFsQwaDph1Y",
        "dRAJ8qnYDOxm"
      ],
      "description": [
        {
          "system": "all",
          "text": "Once per activation, before attacking, pick one friendly model within 3\" with <key>Tough</key>, and remove D3 wounds from it."
        }
      ]
    },
    "Rending when Shooting Aura": {
      "title": "Rending when Shooting Aura",
      "specialRule": [
        "Q7nWXE-8DEHN",
        "fLQMyzi3zbFI"
      ],
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Rending</key> when shooting."
        }
      ]
    },
    "Resistance Aura": {
      "title": "Resistance Aura",
      "specialRule": [
        "Q7nWXE-8DEHN",
        "5xPzQn4Qdzz6",
        "xw2YHtZNkhIV",
        "SshMejY9Kz7s",
        "56Tb7FFgHuyX"
      ],
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Resistance</key>."
        }
      ]
    },
    "Scratch": {
      "title": "Scratch",
      "specialRule": [
        "Q7nWXE-8DEHN"
      ],
      "description": [
        {
          "system": "all",
          "text": "Against units where most models have <key>Tough</key>(3) to <key>Tough</key>(9), this weapon gets <key>AP</key>(+2)."
        }
      ]
    },
    "Versatile Reach": {
      "title": "Versatile Reach",
      "specialRule": [
        "Q7nWXE-8DEHN"
      ],
      "description": [
        {
          "system": "all",
          "text": "When this unit is activated, pick one effect: until the end of the activation all models with this rule in it either get +4\" range when shooting, or move +2\" when charging."
        }
      ]
    },
    "Buccaneer Boost Aura": {
      "title": "Buccaneer Boost Aura",
      "specialRule": [
        "Q7nWXE-8DEHN"
      ],
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Buccaneer Boost</key>."
        }
      ]
    },
    "Casting Debuff": {
      "title": "Casting Debuff",
      "specialRule": [
        "Q7nWXE-8DEHN",
        "xw2YHtZNkhIV",
        "OyVVPwEw7Uep",
        "56Tb7FFgHuyX"
      ],
      "description": [
        {
          "system": "all",
          "text": "Once per activation, before attacking, pick one enemy unit within 18\" with <key>Caster</key>, which gets -1 to casting rolls once (next time the effect would apply)."
        }
      ]
    },
    "Buccaneer Boost": {
      "title": "Buccaneer Boost",
      "specialRule": [
        "Q7nWXE-8DEHN"
      ],
      "description": [
        {
          "system": "all",
          "text": "If this model has <key>Buccaneer</key>, it always gets +1 to hit rolls from <key>Buccaneer</key> (instead of only when shooting over 9\" away)."
        }
      ]
    },
    "Primal": {
      "title": "Primal",
      "specialRule": [
        "iv1Jm6zZiZPJ"
      ],
      "description": [
        {
          "system": "all",
          "text": "For each unmodified roll of 6 to hit when attacking, this model may roll +1 attack with that weapon. This rule doesn’t apply to newly generated attacks."
        }
      ]
    },
    "Crossing Strike": {
      "title": "Crossing Strike",
      "specialRule": [
        "iv1Jm6zZiZPJ",
        "aHBBAhsdAqyz"
      ],
      "description": [
        {
          "system": "all",
          "text": "Once per game, once during its activation when this model moves through enemy units, pick one of them, and roll X dice. For each 4+ it takes 3 hits with <key>AP</key>(1)."
        }
      ]
    },
    "Protection Feat": {
      "title": "Protection Feat",
      "specialRule": [
        "iv1Jm6zZiZPJ"
      ],
      "description": [
        {
          "system": "all",
          "text": "Once per game, when this unit takes wounds and all its models have this rule, you may use this rule and roll one die per wound, and on a 4+ it is ignored."
        }
      ]
    },
    "Heavy Impact": {
      "title": "Heavy Impact",
      "specialRule": [
        "iv1Jm6zZiZPJ",
        "ylxJ4fFb6cZf",
        "fLQMyzi3zbFI",
        "dRAJ8qnYDOxm",
        "HH7O68qvHVR0"
      ],
      "description": [
        {
          "system": "all",
          "text": "Counts as having <key>Impact</key>(X) with hits that have <key>AP</key>(1)."
        }
      ]
    },
    "Good Shot": {
      "title": "Good Shot",
      "specialRule": [
        "iv1Jm6zZiZPJ"
      ],
      "description": [
        {
          "system": "all",
          "text": "This model gets +1 to hit rolls when shooting."
        }
      ]
    },
    "Rapid Charge Aura": {
      "title": "Rapid Charge Aura",
      "specialRule": [
        "iv1Jm6zZiZPJ",
        "vhKZ0CIT6dBt",
        "RMi35vAtYNb-",
        "GgMdmXsCVdK2",
        "AiReKTM86F3e"
      ],
      "description": [
        {
          "system": "all",
          "text": "This model and its unit moves +4\" when using Charge actions."
        }
      ]
    },
    "Rending in Melee Aura": {
      "title": "Rending in Melee Aura",
      "specialRule": [
        "iv1Jm6zZiZPJ",
        "tKa31SeqrzS1",
        "_k9nd29ZX-FQ",
        "SshMejY9Kz7s"
      ],
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Rending</key> in melee."
        }
      ]
    },
    "Bounding": {
      "title": "Bounding",
      "specialRule": [
        "iv1Jm6zZiZPJ",
        "voFsQwaDph1Y",
        "xw2YHtZNkhIV",
        "fLQMyzi3zbFI",
        "GgMdmXsCVdK2",
        "p9iL_bzUnY7A",
        "56Tb7FFgHuyX"
      ],
      "description": [
        {
          "system": "all",
          "text": "When this unit is activated, you may place all models with this rule in it anywhere fully within D3+1\" of their position."
        }
      ]
    },
    "Disintegrate": {
      "title": "Disintegrate",
      "specialRule": [
        "iv1Jm6zZiZPJ"
      ],
      "description": [
        {
          "system": "all",
          "text": "Ignores Regeneration, and against units where most models have <key>Defense</key> 2+ to <key>Defense</key> 3+, this weapon gets <key>AP</key>(+2)."
        }
      ]
    },
    "Shred Mark": {
      "title": "Shred Mark",
      "specialRule": [
        "iv1Jm6zZiZPJ"
      ],
      "description": [
        {
          "system": "all",
          "text": "Once per activation, before attacking, pick one enemy unit within 18\", which friendly units gets <key>Shred</key> when attacking against once (next time the effect would apply)."
        }
      ]
    },
    "Primal Boost Buff": {
      "title": "Primal Boost Buff",
      "specialRule": [
        "iv1Jm6zZiZPJ"
      ],
      "description": [
        {
          "system": "all",
          "text": "Once per activation, before attacking, pick one friendly unit within 12\", which gets <key>Primal Boost</key> once (next time the effect would apply)."
        }
      ]
    },
    "Ignores Regeneration": {
      "title": "Ignores Regeneration",
      "specialRule": [
        "iv1Jm6zZiZPJ",
        "vhKZ0CIT6dBt",
        "tKa31SeqrzS1",
        "cyQpyja0EDRj",
        "aHBBAhsdAqyz",
        "RMi35vAtYNb-",
        "_k9nd29ZX-FQ",
        "H18g-ND_uWiZ",
        "AxiZW7zj2hUK",
        "SshMejY9Kz7s",
        "HH7O68qvHVR0",
        "K44UD3HPQAfg"
      ],
      "description": [
        {
          "system": "all",
          "text": "This weapon ignores Regeneration."
        }
      ]
    },
    "Primal Boost": {
      "title": "Primal Boost",
      "specialRule": [
        "iv1Jm6zZiZPJ"
      ],
      "description": [
        {
          "system": "all",
          "text": "If this model has <key>Primal</key>, it gets extra attacks on successful unmodified hit results of 5-6 from <key>Primal</key> (instead of only on 6)."
        }
      ]
    },
    "Steadfast": {
      "title": "Steadfast",
      "specialRule": [
        "iv1Jm6zZiZPJ",
        "tKa31SeqrzS1",
        "RMi35vAtYNb-",
        "_k9nd29ZX-FQ",
        "OJr14Si4C1Uj",
        "xw2YHtZNkhIV",
        "ndODzgAqJGDz",
        "H18g-ND_uWiZ",
        "dRAJ8qnYDOxm"
      ],
      "description": [
        {
          "system": "all",
          "text": "If a unit where all models have this rule is Shaken at the beginning of the round, roll one die. On a 4+, it stops being Shaken."
        }
      ]
    },
    "Storm of War": {
      "title": "Storm of War",
      "specialRule": [
        "vhKZ0CIT6dBt",
        "RMi35vAtYNb-"
      ],
      "description": [
        {
          "system": "all",
          "text": "Once per game, when this model is activated, before attacking, roll 3 dice. For each 2+ one enemy unit within 12\" takes 3 hits with <key>AP</key>(1)."
        }
      ]
    },
    "Crush": {
      "title": "Crush",
      "specialRule": [
        "vhKZ0CIT6dBt",
        "RMi35vAtYNb-",
        "OyVVPwEw7Uep"
      ],
      "description": [
        {
          "system": "all",
          "text": "When it's this model's turn to attack in melee, roll X dice. For each 6+ the target takes one hit with <key>AP</key>(2)."
        }
      ]
    },
    "Warbound Boost Aura": {
      "title": "Warbound Boost Aura",
      "specialRule": [
        "vhKZ0CIT6dBt",
        "RMi35vAtYNb-"
      ],
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Warbound Boost</key>."
        }
      ]
    },
    "Warbound Boost": {
      "title": "Warbound Boost",
      "specialRule": [
        "vhKZ0CIT6dBt",
        "RMi35vAtYNb-"
      ],
      "description": [
        {
          "system": "all",
          "text": "If this model has <key>Warbound</key>, enemies taking wounds from it take extra wounds on failed defense rolls of 1-2 from <key>Warbound</key> (instead of only on 1)."
        }
      ]
    },
    "Ambush Aura": {
      "title": "Ambush Aura",
      "specialRule": [
        "vhKZ0CIT6dBt",
        "tKa31SeqrzS1",
        "cyQpyja0EDRj",
        "ylxJ4fFb6cZf",
        "RMi35vAtYNb-",
        "_k9nd29ZX-FQ",
        "xw2YHtZNkhIV",
        "AiReKTM86F3e",
        "OyVVPwEw7Uep",
        "56Tb7FFgHuyX"
      ],
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Ambush</key>."
        }
      ]
    },
    "Warbound": {
      "title": "Warbound",
      "specialRule": [
        "vhKZ0CIT6dBt",
        "RMi35vAtYNb-",
        "p9iL_bzUnY7A"
      ],
      "description": [
        {
          "system": "all",
          "text": "Enemies that roll to block hits from this model's weapons take 1 extra wound for each unmodified result of 1 that they roll."
        }
      ]
    },
    "Destructive Frenzy": {
      "title": "Destructive Frenzy",
      "specialRule": [
        "vhKZ0CIT6dBt",
        "RMi35vAtYNb-"
      ],
      "description": [
        {
          "system": "all",
          "text": "Place one marker on this unit when it fully destroys an enemy unit. For each marker all models with this rule in this unit get +1 to hit rolls and <key>AP</key>(+1) until the end of the game (up to a max. of +2)."
        }
      ]
    },
    "Piercing Shooter Aura": {
      "title": "Piercing Shooter Aura",
      "specialRule": [
        "vhKZ0CIT6dBt",
        "RMi35vAtYNb-"
      ],
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>AP</key>(+1) when shooting."
        }
      ]
    },
    "Furious Aura": {
      "title": "Furious Aura",
      "specialRule": [
        "vhKZ0CIT6dBt",
        "aHBBAhsdAqyz",
        "RMi35vAtYNb-",
        "HH7O68qvHVR0",
        "OyVVPwEw7Uep"
      ],
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Furious</key>."
        }
      ]
    },
    "Rapid Charge": {
      "title": "Rapid Charge",
      "specialRule": [
        "vhKZ0CIT6dBt",
        "RMi35vAtYNb-",
        "SshMejY9Kz7s"
      ],
      "description": [
        {
          "system": "all",
          "text": "This model moves +4\" when using Charge actions."
        }
      ]
    },
    "Shielded Aura": {
      "title": "Shielded Aura",
      "specialRule": [
        "vhKZ0CIT6dBt",
        "SY80P2vKJGrY",
        "RMi35vAtYNb-",
        "x2_Lkyj0JPk2"
      ],
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Shielded</key>."
        }
      ]
    },
    "Piercing Fighter Aura": {
      "title": "Piercing Fighter Aura",
      "specialRule": [
        "vhKZ0CIT6dBt",
        "RMi35vAtYNb-"
      ],
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>AP</key>(+1) in melee."
        }
      ]
    },
    "Fatigue Debuff": {
      "title": "Fatigue Debuff",
      "specialRule": [
        "vhKZ0CIT6dBt",
        "RMi35vAtYNb-"
      ],
      "description": [
        {
          "system": "all",
          "text": "Once per activation, before attacking, pick one enemy unit within 18\", which must take a morale test. If failed, it becomes fatigued."
        }
      ]
    },
    "Break": {
      "title": "Break",
      "specialRule": [
        "vhKZ0CIT6dBt",
        "RMi35vAtYNb-"
      ],
      "description": [
        {
          "system": "all",
          "text": "Ignores Regeneration, and on unmodified results of 6 to hit, those hits get <key>AP</key>(+2)."
        }
      ]
    },
    "Reckless Piercing Aura": {
      "title": "Reckless Piercing Aura",
      "specialRule": [
        "vhKZ0CIT6dBt",
        "RMi35vAtYNb-"
      ],
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Reckless Piercing</key>."
        }
      ]
    },
    "Reckless Piercing": {
      "title": "Reckless Piercing",
      "specialRule": [
        "vhKZ0CIT6dBt",
        "RMi35vAtYNb-"
      ],
      "description": [
        {
          "system": "all",
          "text": "When a unit where all models have this rule is activated, you may roll one die. On a 2+ they get <key>AP</key>(+1) when attacking until the end of the round, but on a 1 enemy units get <key>AP</key>(+1) when attacking them instead."
        }
      ]
    },
    "Storm of Plague": {
      "title": "Storm of Plague",
      "specialRule": [
        "tKa31SeqrzS1",
        "_k9nd29ZX-FQ"
      ],
      "description": [
        {
          "system": "all",
          "text": "Once per game, when this model is activated, before attacking, roll 3 dice. For each 2+ one enemy unit within 12\" takes 3 hits with <key>Bane</key>."
        }
      ]
    },
    "Plaguebound": {
      "title": "Plaguebound",
      "specialRule": [
        "tKa31SeqrzS1",
        "_k9nd29ZX-FQ",
        "p9iL_bzUnY7A"
      ],
      "description": [
        {
          "system": "all",
          "text": "When a unit where all models have this rule takes wounds, roll one die for each. On a 6+ it is ignored."
        }
      ]
    },
    "Plaguebound Boost": {
      "title": "Plaguebound Boost",
      "specialRule": [
        "tKa31SeqrzS1",
        "_k9nd29ZX-FQ"
      ],
      "description": [
        {
          "system": "all",
          "text": "If all models in this unit have <key>Plaguebound</key>, they ignore wounds on rolls of 5-6 from <key>Plaguebound</key> (instead of only on 6+)."
        }
      ]
    },
    "Relentless Aura": {
      "title": "Relentless Aura",
      "specialRule": [
        "tKa31SeqrzS1",
        "0zpUZx5GkSHb",
        "SY80P2vKJGrY",
        "_k9nd29ZX-FQ",
        "x2_Lkyj0JPk2",
        "SshMejY9Kz7s"
      ],
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Relentless</key>."
        }
      ]
    },
    "Regeneration Aura": {
      "title": "Regeneration Aura",
      "specialRule": [
        "tKa31SeqrzS1",
        "0zpUZx5GkSHb",
        "voFsQwaDph1Y",
        "_k9nd29ZX-FQ",
        "fLQMyzi3zbFI"
      ],
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get Regeneration."
        }
      ]
    },
    "Precision Attacks Buff": {
      "title": "Precision Attacks Buff",
      "specialRule": [
        "tKa31SeqrzS1",
        "_k9nd29ZX-FQ"
      ],
      "description": [
        {
          "system": "all",
          "text": "Once per activation, before attacking, pick one friendly unit within 12\", which gets +1 to hit rolls when attacking once (next time the effect would apply)."
        }
      ]
    },
    "Fortified Growth": {
      "title": "Fortified Growth",
      "specialRule": [
        "tKa31SeqrzS1",
        "_k9nd29ZX-FQ"
      ],
      "description": [
        {
          "system": "all",
          "text": "Place one marker on this unit at the end of each round if it's on the table. If all models in it have this rule, for each marker enemies attacking them get <key>AP</key>(-1) to a min. of <key>AP</key>(0) (up to a max. of -2). If this unit is ever Shaken, it loses all its markers."
        }
      ]
    },
    "Steadfast Aura": {
      "title": "Steadfast Aura",
      "specialRule": [
        "tKa31SeqrzS1",
        "_k9nd29ZX-FQ"
      ],
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Steadfast</key>."
        }
      ]
    },
    "Butcher": {
      "title": "Butcher",
      "specialRule": [
        "tKa31SeqrzS1",
        "_k9nd29ZX-FQ"
      ],
      "description": [
        {
          "system": "all",
          "text": "Ignores Regeneration, and on unmodified results of 6 to hit, this weapon deals 1 extra hits (only the original hit counts as a 6 for special rules)."
        }
      ]
    },
    "Plaguebound Boost Aura": {
      "title": "Plaguebound Boost Aura",
      "specialRule": [
        "tKa31SeqrzS1",
        "_k9nd29ZX-FQ"
      ],
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Plaguebound Boost</key>."
        }
      ]
    },
    "Rending in Melee": {
      "title": "Rending in Melee",
      "specialRule": [
        "tKa31SeqrzS1",
        "_k9nd29ZX-FQ",
        "fLQMyzi3zbFI"
      ],
      "description": [
        {
          "system": "all",
          "text": "This model gets <key>Rending</key> in melee."
        }
      ]
    },
    "Difficult Terrain Debuff": {
      "title": "Difficult Terrain Debuff",
      "specialRule": [
        "tKa31SeqrzS1",
        "5xPzQn4Qdzz6",
        "_k9nd29ZX-FQ"
      ],
      "description": [
        {
          "system": "all",
          "text": "Once per activation, before attacking, pick one enemy unit within 18\", which counts as being in Difficult Terrain once (next time the effect would apply)."
        }
      ]
    },
    "Retaliate": {
      "title": "Retaliate",
      "description": [
        {
          "system": "all",
          "text": "When this model takes a wound in melee, the attacker takes X hits."
        }
      ],
      "specialRule": [
        "cyQpyja0EDRj",
        "oACH5PrePLfv"
      ]
    },
    "Hit & Run Fighter Aura": {
      "title": "Hit & Run Fighter Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Hit & Run Fighter</key>."
        }
      ],
      "specialRule": [
        "cyQpyja0EDRj",
        "wLKHbRBBr4NI"
      ]
    },
    "Storm of Lust": {
      "title": "Storm of Lust",
      "description": [
        {
          "system": "all",
          "text": "Once per game, when this model is activated, before attacking, roll 3 dice. For each 2+ one enemy unit within 12\" takes 3 hits with <key>Surge</key> (roll one die per hit to see if it triggers)."
        }
      ],
      "specialRule": [
        "cyQpyja0EDRj"
      ]
    },
    "Lustbound Boost": {
      "title": "Lustbound Boost",
      "description": [
        {
          "system": "all",
          "text": "If this model has <key>Lustbound</key>, it moves +2\" on Advance and +6\" on Rush/Charge from <key>Lustbound</key> (instead of only +1\" and +3\")."
        }
      ],
      "specialRule": [
        "cyQpyja0EDRj",
        "OJr14Si4C1Uj"
      ]
    },
    "Lustbound": {
      "title": "Lustbound",
      "description": [
        {
          "system": "all",
          "text": "Moves +1\" when using Advance, and +3\" when using Rush/Charge."
        }
      ],
      "specialRule": [
        "cyQpyja0EDRj",
        "OJr14Si4C1Uj",
        "p9iL_bzUnY7A"
      ]
    },
    "Shatter": {
      "title": "Shatter",
      "description": [
        {
          "system": "all",
          "text": "Ignores Regeneration, and against units where most models have <key>Tough</key>(3) to <key>Tough</key>(9), this weapon gets <key>AP</key>(+2)."
        }
      ],
      "specialRule": [
        "cyQpyja0EDRj",
        "OJr14Si4C1Uj"
      ]
    },
    "Unstoppable when Shooting Aura": {
      "title": "Unstoppable when Shooting Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Unstoppable</key> when shooting."
        }
      ],
      "specialRule": [
        "cyQpyja0EDRj",
        "K44UD3HPQAfg"
      ]
    },
    "Lustbound Boost Aura": {
      "title": "Lustbound Boost Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Lustbound Boost</key>."
        }
      ],
      "specialRule": [
        "cyQpyja0EDRj",
        "OJr14Si4C1Uj"
      ]
    },
    "Hazardous": {
      "title": "Hazardous",
      "description": [
        {
          "system": "all",
          "text": "Gets <key>AP</key>(4), but this model's unit takes one wound on unmodified rolls of 1 to hit."
        }
      ],
      "specialRule": [
        "ylxJ4fFb6cZf"
      ]
    },
    "Quick Readjustment": {
      "title": "Quick Readjustment",
      "description": [
        {
          "system": "all",
          "text": "This model ignores penalties from shooting after moving when using <key>Indirect</key> weapons."
        }
      ],
      "specialRule": [
        "ylxJ4fFb6cZf"
      ]
    },
    "Spell Conduit": {
      "title": "Spell Conduit",
      "description": [
        {
          "system": "all",
          "text": "Casters within 12\" that are from other friendly units may cast spells as if they were in this model's position, and get +1 to casting rolls when doing so."
        }
      ],
      "specialRule": [
        "ylxJ4fFb6cZf",
        "aHBBAhsdAqyz",
        "SY80P2vKJGrY",
        "H18g-ND_uWiZ"
      ]
    },
    "Precision Fighter Aura": {
      "title": "Precision Fighter Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get +1 to hit rolls in melee."
        }
      ],
      "specialRule": [
        "ylxJ4fFb6cZf",
        "fLQMyzi3zbFI"
      ]
    },
    "Evasive Aura": {
      "title": "Evasive Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Evasive</key>."
        }
      ],
      "specialRule": [
        "ylxJ4fFb6cZf",
        "0zpUZx5GkSHb"
      ]
    },
    "Scurry": {
      "title": "Scurry",
      "description": [
        {
          "system": "all",
          "text": "Moves +2\" when using Advance, and +2” when using Rush/Charge."
        }
      ],
      "specialRule": [
        "ylxJ4fFb6cZf"
      ]
    },
    "Defense Debuff": {
      "title": "Defense Debuff",
      "description": [
        {
          "system": "all",
          "text": "Once per activation, before attacking, pick one enemy unit within 18\", which gets -1 to defense rolls once (next time the effect would apply)."
        }
      ],
      "specialRule": [
        "ylxJ4fFb6cZf"
      ]
    },
    "Bane when Shooting Aura": {
      "title": "Bane when Shooting Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Bane</key> when shooting."
        }
      ],
      "specialRule": [
        "ylxJ4fFb6cZf",
        "AxiZW7zj2hUK"
      ]
    },
    "Bane in Melee Aura": {
      "title": "Bane in Melee Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Bane</key> in melee."
        }
      ],
      "specialRule": [
        "ylxJ4fFb6cZf",
        "0zpUZx5GkSHb",
        "5xPzQn4Qdzz6",
        "oACH5PrePLfv"
      ]
    },
    "Scurry Boost Aura": {
      "title": "Scurry Boost Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Scurry Boost</key>."
        }
      ],
      "specialRule": [
        "ylxJ4fFb6cZf"
      ]
    },
    "Precision Fighter Buff": {
      "title": "Precision Fighter Buff",
      "description": [
        {
          "system": "all",
          "text": "Once per activation, before attacking, pick one friendly unit within 12\", which gets +1 to hit rolls in melee once (next time the effect would apply)."
        }
      ],
      "specialRule": [
        "ylxJ4fFb6cZf",
        "voFsQwaDph1Y",
        "RMi35vAtYNb-",
        "_k9nd29ZX-FQ",
        "OJr14Si4C1Uj",
        "xw2YHtZNkhIV",
        "ndODzgAqJGDz",
        "GgMdmXsCVdK2",
        "AiReKTM86F3e"
      ]
    },
    "Scurry Boost": {
      "title": "Scurry Boost",
      "description": [
        {
          "system": "all",
          "text": "If this model has <key>Scurry</key>, it moves +4\" on Advance and +4\" on Rush/Charge from <key>Scurry</key> (instead of only +2\" and +2\")."
        }
      ],
      "specialRule": [
        "ylxJ4fFb6cZf"
      ]
    },
    "Ossified": {
      "title": "Ossified",
      "description": [
        {
          "system": "all",
          "text": "When units where all models have this rule are shot or charged from over 9\" away and take hits, those hits count as having <key>AP</key>(-1), to a min. of <key>AP</key>(0)."
        }
      ],
      "specialRule": [
        "0zpUZx5GkSHb"
      ]
    },
    "Destructive": {
      "title": "Destructive",
      "description": [
        {
          "system": "all",
          "text": "On unmodified results of 6 to hit, those hits get <key>AP</key>(+4)."
        }
      ],
      "specialRule": [
        "0zpUZx5GkSHb"
      ]
    },
    "Spell Accumulator": {
      "title": "Spell Accumulator",
      "description": [
        {
          "system": "all",
          "text": "Gets X accumulator tokens at the start of each round, but can’t hold more than 6 tokens at once. Casters from other friendly units within 12\" may spend this model's accumulator tokens as if they were their own spell tokens."
        }
      ],
      "specialRule": [
        "0zpUZx5GkSHb",
        "xw2YHtZNkhIV",
        "oACH5PrePLfv",
        "56Tb7FFgHuyX"
      ]
    },
    "Precision Feat": {
      "title": "Precision Feat",
      "description": [
        {
          "system": "all",
          "text": "Once per game, when this unit attacks and all its models have this rule, you may use this rule so that they get +2 to hit rolls."
        }
      ],
      "specialRule": [
        "0zpUZx5GkSHb",
        "x2_Lkyj0JPk2"
      ]
    },
    "Mobile Artillery": {
      "title": "Mobile Artillery",
      "description": [
        {
          "system": "all",
          "text": "When this model uses a Hold action and shoots at enemies over 9\" away, it gets +1 to hit rolls. As long this model hasn't moved during the round, when enemy units shoot at it from over 9\" away, they get -2 to hit rolls."
        }
      ],
      "specialRule": [
        "0zpUZx5GkSHb"
      ]
    },
    "Piercing Shooter": {
      "title": "Piercing Shooter",
      "description": [
        {
          "system": "all",
          "text": "This model gets <key>AP</key>(+1) when shooting."
        }
      ],
      "specialRule": [
        "0zpUZx5GkSHb",
        "HH7O68qvHVR0"
      ]
    },
    "Precision Feat Aura": {
      "title": "Precision Feat Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Precision Feat</key>."
        }
      ],
      "specialRule": [
        "0zpUZx5GkSHb",
        "x2_Lkyj0JPk2"
      ]
    },
    "Furious Mark": {
      "title": "Furious Mark",
      "description": [
        {
          "system": "all",
          "text": "Once per activation, before attacking, pick one enemy unit within 18\", which friendly units gets <key>Furious</key> against once (next time the effect would apply)."
        }
      ],
      "specialRule": [
        "0zpUZx5GkSHb"
      ]
    },
    "Ossified Boost Aura": {
      "title": "Ossified Boost Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Ossified Boost</key>."
        }
      ],
      "specialRule": [
        "0zpUZx5GkSHb"
      ]
    },
    "Regeneration Buff": {
      "title": "Regeneration Buff",
      "description": [
        {
          "system": "all",
          "text": "Once per activation, before attacking, pick one friendly unit within 12\", which gets Regeneration once (next time the effect would apply)."
        }
      ],
      "specialRule": [
        "0zpUZx5GkSHb"
      ]
    },
    "Ossified Boost": {
      "title": "Ossified Boost",
      "description": [
        {
          "system": "all",
          "text": "If all models in this unit have <key>Ossified</key>, enemy hits always count as having <key>AP</key>(-1) from <key>Ossified</key> (instead of only when being shot/charged from over 9\" away)."
        }
      ],
      "specialRule": [
        "0zpUZx5GkSHb"
      ]
    },
    "Melee Shrouding Aura": {
      "title": "Melee Shrouding Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Melee Shrouding</key>."
        }
      ],
      "specialRule": [
        "wLKHbRBBr4NI",
        "H18g-ND_uWiZ",
        "AiReKTM86F3e",
        "HH7O68qvHVR0"
      ]
    },
    "Ferocious": {
      "title": "Ferocious",
      "description": [
        {
          "system": "all",
          "text": "When attacking, unmodified results of 6 to hit deal 1 extra hit (only the original hit counts as a 6 for special rules)."
        }
      ],
      "specialRule": [
        "wLKHbRBBr4NI"
      ]
    },
    "Ferocious Boost Aura": {
      "title": "Ferocious Boost Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Ferocious Boost</key>."
        }
      ],
      "specialRule": [
        "wLKHbRBBr4NI"
      ]
    },
    "Ravage Aura": {
      "title": "Ravage Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Ravage</key>(+1)."
        }
      ],
      "specialRule": [
        "wLKHbRBBr4NI"
      ]
    },
    "Speed Feat Aura": {
      "title": "Speed Feat Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Speed Feat</key>."
        }
      ],
      "specialRule": [
        "wLKHbRBBr4NI"
      ]
    },
    "Impale": {
      "title": "Impale",
      "description": [
        {
          "system": "all",
          "text": "Against units where most models have <key>Tough</key>(3) to <key>Tough</key>(9), this weapon gets <key>Deadly</key>(+3)."
        }
      ],
      "specialRule": [
        "wLKHbRBBr4NI"
      ]
    },
    "Rending in Melee Mark": {
      "title": "Rending in Melee Mark",
      "description": [
        {
          "system": "all",
          "text": "Once per activation, before attacking, pick one enemy unit within 18\", which friendly units gets <key>Rending</key> in melee against once (next time the effect would apply)."
        }
      ],
      "specialRule": [
        "wLKHbRBBr4NI"
      ]
    },
    "Piercing Assault Buff": {
      "title": "Piercing Assault Buff",
      "description": [
        {
          "system": "all",
          "text": "Once per activation, before attacking, pick one friendly unit within 12\", which gets <key>Piercing Assault</key>."
        }
      ],
      "specialRule": [
        "wLKHbRBBr4NI",
        "AiReKTM86F3e"
      ]
    },
    "Melee Shrouding": {
      "title": "Melee Shrouding",
      "description": [
        {
          "system": "all",
          "text": "Enemies get -3\" movement when trying to charge units where all models have this rule."
        }
      ],
      "specialRule": [
        "wLKHbRBBr4NI",
        "H18g-ND_uWiZ",
        "AiReKTM86F3e",
        "HH7O68qvHVR0"
      ]
    },
    "Ferocious Boost": {
      "title": "Ferocious Boost",
      "description": [
        {
          "system": "all",
          "text": "If this model has <key>Ferocious</key>, it deals extra hits on successful unmodified hit results of 5-6 from <key>Ferocious</key> (instead of only on 6)."
        }
      ],
      "specialRule": [
        "wLKHbRBBr4NI"
      ]
    },
    "Speed Feat": {
      "title": "Speed Feat",
      "description": [
        {
          "system": "all",
          "text": "Once per game, when this unit moves and all its models have this rule, you may use this rule so that they move +3\" when using Advance actions and +6\" when using Rush/Charge actions."
        }
      ],
      "specialRule": [
        "wLKHbRBBr4NI"
      ]
    },
    "Piercing Spotter": {
      "title": "Piercing Spotter",
      "description": [
        {
          "system": "all",
          "text": "Once per activation, pick one enemy unit within 36\" and in line of sight of this model and roll one die, on a 4+ place a marker on it. When attacking, friendly units may remove markers from their target before rolling to block to get +<key>AP</key>(X), where X is the number of removed markers."
        }
      ],
      "specialRule": [
        "5xPzQn4Qdzz6"
      ]
    },
    "Royal Legion": {
      "title": "Royal Legion",
      "description": [
        {
          "system": "all",
          "text": "This model gets +3\" range when shooting and moves +3\" when using Charge actions."
        }
      ],
      "specialRule": [
        "5xPzQn4Qdzz6"
      ]
    },
    "Perforate": {
      "title": "Perforate",
      "description": [
        {
          "system": "all",
          "text": "<key>Ignores Cover</key>, and on unmodified results of 6 to hit that aren't blocked, this weapon deals 1 extra wound."
        }
      ],
      "specialRule": [
        "5xPzQn4Qdzz6"
      ]
    },
    "Royal Legion Boost Aura": {
      "title": "Royal Legion Boost Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Royal Legion Boost</key>."
        }
      ],
      "specialRule": [
        "5xPzQn4Qdzz6"
      ]
    },
    "Fortified Aura": {
      "title": "Fortified Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Fortified</key>."
        }
      ],
      "specialRule": [
        "5xPzQn4Qdzz6",
        "aHBBAhsdAqyz",
        "dRAJ8qnYDOxm",
        "K44UD3HPQAfg"
      ]
    },
    "Indirect when Shooting Aura": {
      "title": "Indirect when Shooting Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Indirect</key> when shooting."
        }
      ],
      "specialRule": [
        "5xPzQn4Qdzz6",
        "xw2YHtZNkhIV",
        "56Tb7FFgHuyX"
      ]
    },
    "Surprise Attack": {
      "title": "Surprise Attack",
      "description": [
        {
          "system": "all",
          "text": "Counts as having <key>Infiltrate</key>. Once deployed via this rule, roll X dice, for each 4+ one enemy unit within 3” takes 2 hits with <key>AP</key>(1)."
        }
      ],
      "specialRule": [
        "5xPzQn4Qdzz6",
        "fLQMyzi3zbFI",
        "GgMdmXsCVdK2"
      ]
    },
    "Royal Legion Boost": {
      "title": "Royal Legion Boost",
      "description": [
        {
          "system": "all",
          "text": "If this model has <key>Royal Legion</key>, it gets +6\" range when shooting and moves +6\" when using Charge actions from <key>Royal Legion</key> (instead of only +3\" and +3\")."
        }
      ],
      "specialRule": [
        "5xPzQn4Qdzz6"
      ]
    },
    "Deathstrike": {
      "title": "Deathstrike",
      "description": [
        {
          "system": "all",
          "text": "If this model is killed in melee, the attacking unit takes X hits."
        }
      ],
      "specialRule": [
        "aHBBAhsdAqyz"
      ]
    },
    "Angelic Blessing": {
      "title": "Angelic Blessing",
      "description": [
        {
          "system": "all",
          "text": "When a unit where all models have this rule takes wounds, roll one die for each. On a 6+ it is ignored. If the wounds were from a spell, then they are ignored on a 4+ instead."
        }
      ],
      "specialRule": [
        "aHBBAhsdAqyz"
      ]
    },
    "Precision Debuff": {
      "title": "Precision Debuff",
      "description": [
        {
          "system": "all",
          "text": "Once per activation, before attacking, pick one enemy unit within 18\", which gets -1 to hit rolls when attacking once (next time the effect would apply)."
        }
      ],
      "specialRule": [
        "aHBBAhsdAqyz",
        "SY80P2vKJGrY",
        "oACH5PrePLfv"
      ]
    },
    "Chop": {
      "title": "Chop",
      "description": [
        {
          "system": "all",
          "text": "Ignores Regeneration, and against units where most models have <key>Tough</key>(3) to <key>Tough</key>(9), this weapon gets <key>Deadly</key>(+3)."
        }
      ],
      "specialRule": [
        "aHBBAhsdAqyz"
      ]
    },
    "Slayer Mark": {
      "title": "Slayer Mark",
      "description": [
        {
          "system": "all",
          "text": "Once per activation, before attacking, pick one enemy unit within 18\", which friendly units gets <key>Slayer</key> against once (next time the effect would apply)."
        }
      ],
      "specialRule": [
        "aHBBAhsdAqyz"
      ]
    },
    "Angelic Blessing Boost Buff": {
      "title": "Angelic Blessing Boost Buff",
      "description": [
        {
          "system": "all",
          "text": "Once per activation, before attacking, pick one friendly unit within 12\", which gets <key>Angelic Blessing Boost</key> once (next time the effect would apply)."
        }
      ],
      "specialRule": [
        "aHBBAhsdAqyz"
      ]
    },
    "Versatile Attack Buff": {
      "title": "Versatile Attack Buff",
      "description": [
        {
          "system": "all",
          "text": "Once per activation, before attacking, pick one friendly unit within 12\", which gets <key>Versatile Attack</key> once (next time the effect would apply)."
        }
      ],
      "specialRule": [
        "aHBBAhsdAqyz"
      ]
    },
    "Slayer": {
      "title": "Slayer",
      "description": [
        {
          "system": "all",
          "text": "This model's weapons get <key>AP</key>(+2) against units where most models have <key>Tough</key>(3) or higher."
        }
      ],
      "specialRule": [
        "aHBBAhsdAqyz",
        "H18g-ND_uWiZ",
        "dRAJ8qnYDOxm",
        "HH7O68qvHVR0"
      ]
    },
    "Angelic Blessing Boost": {
      "title": "Angelic Blessing Boost",
      "description": [
        {
          "system": "all",
          "text": "If all models in this unit have <key>Angelic Blessing</key>, they ignore non-spell wounds on rolls of 5-6 from <key>Angelic Blessing</key> (instead of only on 6+)."
        }
      ],
      "specialRule": [
        "aHBBAhsdAqyz"
      ]
    },
    "Versatile Attack": {
      "title": "Versatile Attack",
      "description": [
        {
          "system": "all",
          "text": "When this unit is activated, pick one effect: until the end of the activation all models with this rule in it either get <key>AP</key>(+1) when attacking, or get +1 to hit rolls when attacking."
        }
      ],
      "specialRule": [
        "aHBBAhsdAqyz",
        "RMi35vAtYNb-",
        "_k9nd29ZX-FQ",
        "OJr14Si4C1Uj",
        "xw2YHtZNkhIV",
        "ndODzgAqJGDz",
        "HH7O68qvHVR0"
      ]
    },
    "Defense Buff": {
      "title": "Defense Buff",
      "description": [
        {
          "system": "all",
          "text": "Once per activation, before attacking, pick one friendly unit within 12\", which gets +1 to defense rolls once (next time the effect would apply)."
        }
      ],
      "specialRule": [
        "voFsQwaDph1Y"
      ]
    },
    "Coordinate": {
      "title": "Coordinate",
      "description": [
        {
          "system": "all",
          "text": "At the end of this unit's activation, another friendly unit within 12\" that hasn't activated yet may be activated immediately. May not be used if this unit was activated via <key>Coordinate</key>."
        }
      ],
      "specialRule": [
        "voFsQwaDph1Y"
      ]
    },
    "Extended Buff Range": {
      "title": "Extended Buff Range",
      "description": [
        {
          "system": "all",
          "text": "If this unit is within 24\" of another friendly unit with this rule that has a <key>Hero</key> in it, then that <key>Hero</key> may use special rules that allow it to pick friendly units within 12\" (except for spells) on this unit as if it was in range."
        }
      ],
      "specialRule": [
        "voFsQwaDph1Y"
      ]
    },
    "Hold the Line": {
      "title": "Hold the Line",
      "description": [
        {
          "system": "all",
          "text": "Units where all models have this rule get +1 to morale test rolls."
        }
      ],
      "specialRule": [
        "voFsQwaDph1Y"
      ]
    },
    "Rapid Rush Buff": {
      "title": "Rapid Rush Buff",
      "description": [
        {
          "system": "all",
          "text": "Once per activation, before attacking, pick one friendly unit within 12\", which gets <key>Rapid Rush</key> once (next time the effect would apply)."
        }
      ],
      "specialRule": [
        "voFsQwaDph1Y"
      ]
    },
    "Fracture": {
      "title": "Fracture",
      "description": [
        {
          "system": "all",
          "text": "<key>Ignores Cover</key>, and on unmodified results of 6 to hit, those hits get <key>AP</key>(+2)."
        }
      ],
      "specialRule": [
        "voFsQwaDph1Y"
      ]
    },
    "Precision Fighting Mark": {
      "title": "Precision Fighting Mark",
      "description": [
        {
          "system": "all",
          "text": "Once per activation, before attacking, pick one enemy unit within 18\", which friendly units get +1 to hit rolls in melee against once (next time the effect would apply)."
        }
      ],
      "specialRule": [
        "voFsQwaDph1Y"
      ]
    },
    "Precision Shooter Buff": {
      "title": "Precision Shooter Buff",
      "description": [
        {
          "system": "all",
          "text": "Once per activation, before attacking, pick one friendly unit within 12\", which gets +1 to hit rolls when shooting once (next time the effect would apply)."
        }
      ],
      "specialRule": [
        "voFsQwaDph1Y"
      ]
    },
    "Hold the Line Boost Buff": {
      "title": "Hold the Line Boost Buff",
      "description": [
        {
          "system": "all",
          "text": "Once per activation, before attacking, pick one friendly unit within 12\", which gets <key>Hold the Line Boost</key> once (next time the effect would apply)."
        }
      ],
      "specialRule": [
        "voFsQwaDph1Y"
      ]
    },
    "Furious Buff": {
      "title": "Furious Buff",
      "description": [
        {
          "system": "all",
          "text": "Once per activation, before attacking, pick one friendly unit within 12\", which gets <key>Furious</key> once (next time the effect would apply)."
        }
      ],
      "specialRule": [
        "voFsQwaDph1Y",
        "HH7O68qvHVR0"
      ]
    },
    "Re-Position Artillery": {
      "title": "Re-Position Artillery",
      "description": [
        {
          "system": "all",
          "text": "Once per activation, pick one friendly model within 6\" with <key>Artillery</key>, which may immediately move by up to 9\".\n\n"
        }
      ],
      "specialRule": [
        "voFsQwaDph1Y",
        "AxiZW7zj2hUK",
        "SshMejY9Kz7s",
        "dRAJ8qnYDOxm"
      ]
    },
    "Caster Group": {
      "title": "Caster Group",
      "description": [
        {
          "system": "all",
          "text": "Pick one model with this rule in this unit to have <key>Caster</key>(X), where X is the total number of models with this rule in this unit. If the model is killed, pick another to be the new caster, and transfer all spell tokens to it. The caster loses all unspent spell tokens at the end of the round."
        }
      ],
      "specialRule": [
        "voFsQwaDph1Y",
        "GgMdmXsCVdK2"
      ]
    },
    "Hold the Line Boost": {
      "title": "Hold the Line Boost",
      "description": [
        {
          "system": "all",
          "text": "If all models in this unit have <key>Hold the Line</key>, they get +2 to morale test rolls from <key>Hold the Line</key> (instead of only +1)."
        }
      ],
      "specialRule": [
        "voFsQwaDph1Y"
      ]
    },
    "Piercing Tag": {
      "title": "Piercing Tag",
      "description": [
        {
          "system": "all",
          "text": "Once per game, during this model's activation, pick one enemy unit within 36\" and in line of sight of it, and place X markers on it. When attacking, friendly units may remove markers from their target before rolling to block to get +<key>AP</key>(Y), where Y is the number of removed markers."
        }
      ],
      "specialRule": [
        "SY80P2vKJGrY"
      ]
    },
    "Highborn": {
      "title": "Highborn",
      "description": [
        {
          "system": "all",
          "text": "Moves +2\" when using Advance, and +2” when using Rush/Charge."
        }
      ],
      "specialRule": [
        "SY80P2vKJGrY"
      ]
    },
    "Fearless Aura": {
      "title": "Fearless Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Fearless</key>."
        }
      ],
      "specialRule": [
        "SY80P2vKJGrY",
        "xw2YHtZNkhIV",
        "oACH5PrePLfv",
        "56Tb7FFgHuyX"
      ]
    },
    "Indirect when Shooting": {
      "title": "Indirect when Shooting",
      "description": [
        {
          "system": "all",
          "text": "This model gets <key>Indirect</key> when shooting."
        }
      ],
      "specialRule": [
        "SY80P2vKJGrY"
      ]
    },
    "Precision Shooting Mark": {
      "title": "Precision Shooting Mark",
      "description": [
        {
          "system": "all",
          "text": "Once per activation, before attacking, pick one enemy unit within 18\", which friendly units get +1 to hit rolls when shooting against once (next time the effect would apply)."
        }
      ],
      "specialRule": [
        "SY80P2vKJGrY",
        "dRAJ8qnYDOxm"
      ]
    },
    "Crack": {
      "title": "Crack",
      "description": [
        {
          "system": "all",
          "text": "On unmodified results of 6 to hit, those hits get <key>AP</key>(+2)."
        }
      ],
      "specialRule": [
        "SY80P2vKJGrY"
      ]
    },
    "Highborn Boost Aura": {
      "title": "Highborn Boost Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Highborn Boost</key>."
        }
      ],
      "specialRule": [
        "SY80P2vKJGrY"
      ]
    },
    "Highborn Boost": {
      "title": "Highborn Boost",
      "description": [
        {
          "system": "all",
          "text": "If this model has <key>Highborn</key>, it moves +4\" on Advance and +4\" on Rush/Charge from <key>Highborn</key> (instead of only +2\" and +2\")."
        }
      ],
      "specialRule": [
        "SY80P2vKJGrY"
      ]
    },
    "Bloodthirsty Fighter": {
      "title": "Bloodthirsty Fighter",
      "description": [
        {
          "system": "all",
          "text": "For each unmodified roll of 1 that enemies roll when blocking hits from this model's weapons in melee, this model may roll +1 attack with that weapon. This rule doesn’t apply to newly generated attacks."
        }
      ],
      "specialRule": [
        "RMi35vAtYNb-"
      ]
    },
    "Slam": {
      "title": "Slam",
      "description": [
        {
          "system": "all",
          "text": "<key>Ignores Cover</key>, and on unmodified results of 1 to block hits, this weapon deals 1 extra wound."
        }
      ],
      "specialRule": [
        "RMi35vAtYNb-",
        "_k9nd29ZX-FQ",
        "OJr14Si4C1Uj",
        "xw2YHtZNkhIV",
        "ndODzgAqJGDz"
      ]
    },
    "Versatile Defense Aura": {
      "title": "Versatile Defense Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Versatile Defense</key>."
        }
      ],
      "specialRule": [
        "RMi35vAtYNb-",
        "_k9nd29ZX-FQ",
        "OJr14Si4C1Uj",
        "xw2YHtZNkhIV",
        "ndODzgAqJGDz",
        "H18g-ND_uWiZ"
      ]
    },
    "Shred when Shooting Aura": {
      "title": "Shred when Shooting Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Shred</key> when shooting."
        }
      ],
      "specialRule": [
        "RMi35vAtYNb-",
        "_k9nd29ZX-FQ",
        "OJr14Si4C1Uj",
        "xw2YHtZNkhIV",
        "ndODzgAqJGDz",
        "oACH5PrePLfv"
      ]
    },
    "Unpredictable Fighter Aura": {
      "title": "Unpredictable Fighter Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Unpredictable Fighter</key>."
        }
      ],
      "specialRule": [
        "RMi35vAtYNb-",
        "_k9nd29ZX-FQ",
        "OJr14Si4C1Uj",
        "xw2YHtZNkhIV",
        "ndODzgAqJGDz",
        "x2_Lkyj0JPk2",
        "K44UD3HPQAfg"
      ]
    },
    "Ranged Shrouding Aura": {
      "title": "Ranged Shrouding Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Ranged Shrouding</key>."
        }
      ],
      "specialRule": [
        "RMi35vAtYNb-",
        "_k9nd29ZX-FQ",
        "OJr14Si4C1Uj",
        "xw2YHtZNkhIV",
        "ndODzgAqJGDz",
        "oACH5PrePLfv"
      ]
    },
    "Shred in Melee": {
      "title": "Shred in Melee",
      "description": [
        {
          "system": "all",
          "text": "This model gets <key>Shred</key> in melee."
        }
      ],
      "specialRule": [
        "RMi35vAtYNb-",
        "_k9nd29ZX-FQ",
        "OJr14Si4C1Uj",
        "xw2YHtZNkhIV",
        "ndODzgAqJGDz",
        "GgMdmXsCVdK2",
        "OyVVPwEw7Uep"
      ]
    },
    "Steadfast Buff": {
      "title": "Steadfast Buff",
      "description": [
        {
          "system": "all",
          "text": "Once per activation, before attacking, pick one friendly unit within 12\", which gets <key>Steadfast</key> once (next time the effect would apply)."
        }
      ],
      "specialRule": [
        "RMi35vAtYNb-",
        "_k9nd29ZX-FQ",
        "OJr14Si4C1Uj",
        "xw2YHtZNkhIV",
        "ndODzgAqJGDz",
        "H18g-ND_uWiZ"
      ]
    },
    "Versatile Defense": {
      "title": "Versatile Defense",
      "description": [
        {
          "system": "all",
          "text": "When a unit where all models have this rule is deployed or activated, pick one effect: when shot or charged from over 9\" away, the unit either gets +1 to defense rolls, or enemy units get -1 to hit rolls against it. This effect lasts until the units' next activation.\n"
        }
      ],
      "specialRule": [
        "RMi35vAtYNb-",
        "_k9nd29ZX-FQ",
        "OJr14Si4C1Uj",
        "xw2YHtZNkhIV",
        "ndODzgAqJGDz",
        "H18g-ND_uWiZ"
      ]
    },
    "Ranged Shrouding": {
      "title": "Ranged Shrouding",
      "description": [
        {
          "system": "all",
          "text": "Enemies get -6\" range when trying to shoot units where all models have this rule."
        }
      ],
      "specialRule": [
        "RMi35vAtYNb-",
        "_k9nd29ZX-FQ",
        "OJr14Si4C1Uj",
        "xw2YHtZNkhIV",
        "ndODzgAqJGDz",
        "oACH5PrePLfv"
      ]
    },
    "Great Sergeant": {
      "title": "Great Sergeant",
      "description": [
        {
          "system": "all",
          "text": "When this model attacks, unmodified results of 5-6 to hit deal 1 extra hit (only the original hit counts as a 6 for special rules)."
        }
      ],
      "specialRule": [
        "_k9nd29ZX-FQ",
        "K44UD3HPQAfg"
      ]
    },
    "Great Musician": {
      "title": "Great Musician",
      "description": [
        {
          "system": "all",
          "text": "Once per activation, before attacking, pick one friendly unit within 12\", which moves +1\" when using move actions once (next time the effect would apply)."
        }
      ],
      "specialRule": [
        "_k9nd29ZX-FQ",
        "K44UD3HPQAfg"
      ]
    },
    "Great Banner": {
      "title": "Great Banner",
      "description": [
        {
          "system": "all",
          "text": "Once per activation, before attacking, pick one friendly unit within 12\", which gets +1 to morale test rolls once (next time the effect would apply)."
        }
      ],
      "specialRule": [
        "_k9nd29ZX-FQ",
        "K44UD3HPQAfg"
      ]
    },
    "Changebound": {
      "title": "Changebound",
      "description": [
        {
          "system": "all",
          "text": "When units where all models have this rule are shot or charged from over 9\" away, enemy units get -1 to hit rolls."
        }
      ],
      "specialRule": [
        "xw2YHtZNkhIV",
        "p9iL_bzUnY7A",
        "56Tb7FFgHuyX"
      ]
    },
    "Changebound Boost Aura": {
      "title": "Changebound Boost Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Changebound Boost</key>."
        }
      ],
      "specialRule": [
        "xw2YHtZNkhIV",
        "56Tb7FFgHuyX"
      ]
    },
    "Changebound Boost": {
      "title": "Changebound Boost",
      "description": [
        {
          "system": "all",
          "text": "If all models in this unit have <key>Changebound</key>, enemies attacking them always get -1 to hit rolls from <key>Changebound</key> (instead of only when being shot/charged from over 9\" away)."
        }
      ],
      "specialRule": [
        "xw2YHtZNkhIV",
        "56Tb7FFgHuyX"
      ]
    },
    "Slash": {
      "title": "Slash",
      "description": [
        {
          "system": "all",
          "text": "<key>Ignores Cover</key>, and on unmodified results of 6 to hit, this weapon deals 1 extra hits (only the original hit counts as a 6 for special rules)."
        }
      ],
      "specialRule": [
        "xw2YHtZNkhIV",
        "56Tb7FFgHuyX"
      ]
    },
    "Bane when Shooting": {
      "title": "Bane when Shooting",
      "description": [
        {
          "system": "all",
          "text": "This model gets <key>Bane</key> when shooting."
        }
      ],
      "specialRule": [
        "xw2YHtZNkhIV",
        "56Tb7FFgHuyX"
      ]
    },
    "Storm of Change": {
      "title": "Storm of Change",
      "description": [
        {
          "system": "all",
          "text": "Once per game, when this model is activated, before attacking, roll 3 dice. For each 2+ one enemy unit within 12\" takes 3 hits with <key>Shred</key>."
        }
      ],
      "specialRule": [
        "xw2YHtZNkhIV",
        "56Tb7FFgHuyX"
      ]
    },
    "Unstoppable in Melee": {
      "title": "Unstoppable in Melee",
      "description": [
        {
          "system": "all",
          "text": "This model gets <key>Unstoppable</key> in melee."
        }
      ],
      "specialRule": [
        "xw2YHtZNkhIV",
        "56Tb7FFgHuyX"
      ]
    },
    "Split": {
      "title": "Split",
      "description": [
        {
          "system": "all",
          "text": "When this unit is fully destroyed, you may place a new unit of X fully within 6\" of it before removing the last model."
        }
      ],
      "specialRule": [
        "xw2YHtZNkhIV",
        "56Tb7FFgHuyX"
      ]
    },
    "Bounding Aura": {
      "title": "Bounding Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Bounding</key>."
        }
      ],
      "specialRule": [
        "xw2YHtZNkhIV",
        "56Tb7FFgHuyX"
      ]
    },
    "Havocbound Boost Aura": {
      "title": "Havocbound Boost Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Havocbound Boost</key>."
        }
      ],
      "specialRule": [
        "ndODzgAqJGDz",
        "H18g-ND_uWiZ"
      ]
    },
    "Havocbound": {
      "title": "Havocbound",
      "description": [
        {
          "system": "all",
          "text": "When this model shoots at enemies over 9\" away, or when it charges, its weapons get <key>AP</key>(+1)."
        }
      ],
      "specialRule": [
        "ndODzgAqJGDz",
        "H18g-ND_uWiZ"
      ]
    },
    "Dangerous Terrain Debuff": {
      "title": "Dangerous Terrain Debuff",
      "description": [
        {
          "system": "all",
          "text": "Once per activation, before attacking, pick one enemy unit within 18\", which must immediately take a Dangerous Terrain test."
        }
      ],
      "specialRule": [
        "ndODzgAqJGDz"
      ]
    },
    "Havocbound Boost": {
      "title": "Havocbound Boost",
      "description": [
        {
          "system": "all",
          "text": "If this model has <key>Havocbound</key>, it always gets <key>AP</key>(+1) from <key>Havocbound</key> (instead of only when shooting over 9\" away, or when charging)."
        }
      ],
      "specialRule": [
        "ndODzgAqJGDz",
        "H18g-ND_uWiZ"
      ]
    },
    "Melee Slayer Aura": {
      "title": "Melee Slayer Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Melee Slayer</key>."
        }
      ],
      "specialRule": [
        "H18g-ND_uWiZ"
      ]
    },
    "Relentless Mark": {
      "title": "Relentless Mark",
      "description": [
        {
          "system": "all",
          "text": "Once per activation, before attacking, pick one enemy unit within 18\", which friendly units gets <key>Relentless</key> against once (next time the effect would apply)."
        }
      ],
      "specialRule": [
        "H18g-ND_uWiZ"
      ]
    },
    "Purge": {
      "title": "Purge",
      "description": [
        {
          "system": "all",
          "text": "Ignores Regeneration, and against units where most models have <key>Defense</key> 2+ to <key>Defense</key> 4+, this weapon gets <key>AP</key>(+1)."
        }
      ],
      "specialRule": [
        "H18g-ND_uWiZ"
      ]
    },
    "Lucky": {
      "title": "Lucky",
      "description": [
        {
          "system": "all",
          "text": "When attacking, unmodified results of 6 to hit deal 1 extra hit (only the original hit counts as a 6 for special rules)."
        }
      ],
      "specialRule": [
        "fLQMyzi3zbFI"
      ]
    },
    "Teleport Aura": {
      "title": "Teleport Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Teleport</key>."
        }
      ],
      "specialRule": [
        "fLQMyzi3zbFI"
      ]
    },
    "Lucky Boost Aura": {
      "title": "Lucky Boost Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Lucky Boost</key>."
        }
      ],
      "specialRule": [
        "fLQMyzi3zbFI"
      ]
    },
    "Vengeance": {
      "title": "Vengeance",
      "description": [
        {
          "system": "all",
          "text": "When this unit is fully destroyed, place as many <key>Vengeance</key> markers on the unit that destroyed it as models with this rule in this unit at the beginning of the game. Friendly units get +X to hit rolls with their weapons when attacking that unit, where X is the number of markers on it."
        }
      ],
      "specialRule": [
        "fLQMyzi3zbFI"
      ]
    },
    "Bash": {
      "title": "Bash",
      "description": [
        {
          "system": "all",
          "text": "<key>Ignores Cover</key>, and against units where most models have <key>Defense</key> 5+ to <key>Defense</key> 6+, this weapon gets <key>Blast</key>(+3)."
        }
      ],
      "specialRule": [
        "fLQMyzi3zbFI"
      ]
    },
    "Lucky Boost": {
      "title": "Lucky Boost",
      "description": [
        {
          "system": "all",
          "text": "If this model has <key>Lucky</key>, it deals extra hits on successful unmodified hit results of 5-6 from <key>Lucky</key> (instead of only on 6)."
        }
      ],
      "specialRule": [
        "fLQMyzi3zbFI"
      ]
    },
    "Mischievous": {
      "title": "Mischievous",
      "description": [
        {
          "system": "all",
          "text": "When attacking, targets must re-roll unmodified <key>Defense</key> results of 6 when blocking hits from this model's weapons."
        }
      ],
      "specialRule": [
        "GgMdmXsCVdK2"
      ]
    },
    "Traversal": {
      "title": "Traversal",
      "description": [
        {
          "system": "all",
          "text": "May move through friendly and enemy units."
        }
      ],
      "specialRule": [
        "GgMdmXsCVdK2",
        "x2_Lkyj0JPk2"
      ]
    },
    "Mischievous Boost Aura": {
      "title": "Mischievous Boost Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Mischievous Boost</key>."
        }
      ],
      "specialRule": [
        "GgMdmXsCVdK2"
      ]
    },
    "Skewer": {
      "title": "Skewer",
      "description": [
        {
          "system": "all",
          "text": "<key>Ignores Cover</key>, and against units where most models have <key>Tough</key>(3) to <key>Tough</key>(9), this weapon gets <key>Deadly</key>(+3)."
        }
      ],
      "specialRule": [
        "GgMdmXsCVdK2"
      ]
    },
    "Mischievous Boost": {
      "title": "Mischievous Boost",
      "description": [
        {
          "system": "all",
          "text": "If this model has <key>Mischievous</key>, enemies taking hits from it must re-roll successful unmodified defense results of 5-6 from <key>Mischievous</key> (instead of only on 6)."
        }
      ],
      "specialRule": [
        "GgMdmXsCVdK2"
      ]
    },
    "Unmovable": {
      "title": "Unmovable",
      "description": [
        {
          "system": "all",
          "text": "If a unit where all models have this rule is Shaken at the beginning of the round, roll one die. On a 4+, it stops being Shaken."
        }
      ],
      "specialRule": [
        "p9iL_bzUnY7A"
      ]
    },
    "Delayed Action": {
      "title": "Delayed Action",
      "description": [
        {
          "system": "all",
          "text": "Once per round, if your opponent has more units left to activate than you, then this model's unit may pass its turn instead of activating (may still be activated later)."
        }
      ],
      "specialRule": [
        "p9iL_bzUnY7A"
      ]
    },
    "Crossing Attack": {
      "title": "Crossing Attack",
      "description": [
        {
          "system": "all",
          "text": "Once per activation, when this model moves through enemy units, pick one of them and roll X dice. For each 6+ it takes 1 hit."
        }
      ],
      "specialRule": [
        "x2_Lkyj0JPk2"
      ]
    },
    "Empyrean Spirit": {
      "title": "Empyrean Spirit",
      "description": [
        {
          "system": "all",
          "text": "When units where all models have this rule are shot or charged from over 9\" away, enemy units get -1 to hit rolls."
        }
      ],
      "specialRule": [
        "x2_Lkyj0JPk2"
      ]
    },
    "Empyrean Spirit Boost Aura": {
      "title": "Empyrean Spirit Boost Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Empyrean Spirit Boost</key>."
        }
      ],
      "specialRule": [
        "x2_Lkyj0JPk2"
      ]
    },
    "Reap": {
      "title": "Reap",
      "description": [
        {
          "system": "all",
          "text": "Against units where most models have <key>Defense</key> 2+ to <key>Defense</key> 3+, this weapon gets <key>AP</key>(+2)."
        }
      ],
      "specialRule": [
        "x2_Lkyj0JPk2"
      ]
    },
    "Bane Mark": {
      "title": "Bane Mark",
      "description": [
        {
          "system": "all",
          "text": "Once per activation, before attacking, pick one enemy unit within 18\", which friendly units gets <key>Bane</key> when attacking against once (next time the effect would apply)."
        }
      ],
      "specialRule": [
        "x2_Lkyj0JPk2"
      ]
    },
    "Empyrean Spirit Boost": {
      "title": "Empyrean Spirit Boost",
      "description": [
        {
          "system": "all",
          "text": "If all models in this unit have <key>Empyrean Spirit</key>, enemies attacking them always get -1 to hit rolls from <key>Empyrean Spirit</key> (instead of only when being shot/charged from over 9\" away)."
        }
      ],
      "specialRule": [
        "x2_Lkyj0JPk2"
      ]
    },
    "Piercing Target": {
      "title": "Piercing Target",
      "description": [
        {
          "system": "all",
          "text": "Once per game, during this model's activation, pick one enemy unit within 36\" and in line of sight of it, and place X markers on it. Friendly units get +<key>AP</key>(X) when attacking it."
        }
      ],
      "specialRule": [
        "AxiZW7zj2hUK"
      ]
    },
    "Re-Deployment": {
      "title": "Re-Deployment",
      "description": [
        {
          "system": "all",
          "text": "After all other units are deployed (excluding units that were set aside), you may remove up to two friendly units from the table and deploy them again. Players alternate in placing <key>Re-Deployment</key> units, starting with the player that activates next."
        }
      ],
      "specialRule": [
        "AxiZW7zj2hUK"
      ]
    },
    "Warden Boost Aura": {
      "title": "Warden Boost Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Warden Boost</key>."
        }
      ],
      "specialRule": [
        "AxiZW7zj2hUK"
      ]
    },
    "Smash": {
      "title": "Smash",
      "description": [
        {
          "system": "all",
          "text": "Ignores Regeneration, and against units where most models have <key>Defense</key> 5+ to <key>Defense</key> 6+, this weapon gets <key>Blast</key>(+3)."
        }
      ],
      "specialRule": [
        "AxiZW7zj2hUK"
      ]
    },
    "Unstoppable Shooting Mark": {
      "title": "Unstoppable Shooting Mark",
      "description": [
        {
          "system": "all",
          "text": "Once per activation, before attacking, pick one enemy unit within 18\", which friendly units gets <key>Unstoppable</key> when shooting against once (next time the effect would apply)."
        }
      ],
      "specialRule": [
        "AxiZW7zj2hUK"
      ]
    },
    "Warden Boost": {
      "title": "Warden Boost",
      "description": [
        {
          "system": "all",
          "text": "If all models in this unit have <key>Warden</key>, enemy hits always count as having <key>AP</key>(-1) from <key>Warden</key> (instead of only when being shot/charged from over 9\" away)."
        }
      ],
      "specialRule": [
        "AxiZW7zj2hUK"
      ]
    },
    "Sturdy": {
      "title": "Sturdy",
      "description": [
        {
          "system": "all",
          "text": "When units where all models have this rule are shot or charged from over 9\" away, they get +1 to defense rolls."
        }
      ],
      "specialRule": [
        "SshMejY9Kz7s"
      ]
    },
    "Quake": {
      "title": "Quake",
      "description": [
        {
          "system": "all",
          "text": "Ignores Regeneration, and on unmodified results of 1 to block hits, this weapon deals 1 extra wound."
        }
      ],
      "specialRule": [
        "SshMejY9Kz7s"
      ]
    },
    "Devastating Frenzy": {
      "title": "Devastating Frenzy",
      "description": [
        {
          "system": "all",
          "text": "Place one marker on this unit when it fully destroys an enemy unit. For each marker all models with this rule in this unit get <key>AP</key>(+1) and +1 to defense rolls until the end of the game (up to a max. of +2)."
        }
      ],
      "specialRule": [
        "SshMejY9Kz7s"
      ]
    },
    "Precision Charge Aura": {
      "title": "Precision Charge Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get +1 to hit rolls when charging."
        }
      ],
      "specialRule": [
        "SshMejY9Kz7s"
      ]
    },
    "Sturdy Boost Aura": {
      "title": "Sturdy Boost Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Sturdy Boost</key>."
        }
      ],
      "specialRule": [
        "SshMejY9Kz7s"
      ]
    },
    "Sturdy Boost": {
      "title": "Sturdy Boost",
      "description": [
        {
          "system": "all",
          "text": "If all models in this unit have <key>Sturdy</key>, they always get +1 to defense rolls from <key>Sturdy</key> (instead of only when being shot/charged from over 9\" away)."
        }
      ],
      "specialRule": [
        "SshMejY9Kz7s"
      ]
    },
    "Vinci Tech": {
      "title": "Vinci Tech",
      "description": [
        {
          "system": "all",
          "text": "When this unit is activated, pick one effect: until the end of the activation all models with this rule in it either get <key>AP</key>(+1) when attacking, or get +1 to hit rolls when attacking."
        }
      ],
      "specialRule": [
        "dRAJ8qnYDOxm"
      ]
    },
    "Protected": {
      "title": "Protected",
      "description": [
        {
          "system": "all",
          "text": "When a unit where all models have this rule takes wounds, roll one die for each. On a 6+ it is ignored."
        }
      ],
      "specialRule": [
        "dRAJ8qnYDOxm"
      ]
    },
    "Ranged Slayer Aura": {
      "title": "Ranged Slayer Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Ranged Slayer</key>."
        }
      ],
      "specialRule": [
        "dRAJ8qnYDOxm",
        "HH7O68qvHVR0"
      ]
    },
    "Decimate": {
      "title": "Decimate",
      "description": [
        {
          "system": "all",
          "text": "<key>Ignores Cover</key>, and against units where most models have <key>Defense</key> 2+ to <key>Defense</key> 3+, this weapon gets <key>AP</key>(+2)."
        }
      ],
      "specialRule": [
        "dRAJ8qnYDOxm"
      ]
    },
    "Vinci Tech Boost Aura": {
      "title": "Vinci Tech Boost Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Vinci Tech Boost</key>."
        }
      ],
      "specialRule": [
        "dRAJ8qnYDOxm"
      ]
    },
    "Increased Shooting Range Mark": {
      "title": "Increased Shooting Range Mark",
      "description": [
        {
          "system": "all",
          "text": "Once per activation, before attacking, pick one enemy unit within 18\", which friendly units get +6\" range when shooting against once (next time the effect would apply)."
        }
      ],
      "specialRule": [
        "dRAJ8qnYDOxm"
      ]
    },
    "Precision Spotter": {
      "title": "Precision Spotter",
      "description": [
        {
          "system": "all",
          "text": "Once per activation, pick one enemy unit within 36\" and in line of sight of this model and roll one die, on a 4+ place a marker on it. Friendly units may remove markers from their target before rolling to hit to get +X to hit rolls when attacking, where X is the number of removed markers."
        }
      ],
      "specialRule": [
        "dRAJ8qnYDOxm"
      ]
    },
    "Ranged Slayer": {
      "title": "Ranged Slayer",
      "description": [
        {
          "system": "all",
          "text": "This model's ranged weapons get <key>AP</key>(+2) against units where most models have <key>Tough</key>(3) or higher."
        }
      ],
      "specialRule": [
        "dRAJ8qnYDOxm",
        "HH7O68qvHVR0"
      ]
    },
    "Vinci Tech Boost": {
      "title": "Vinci Tech Boost",
      "description": [
        {
          "system": "all",
          "text": "If this model has <key>Vinci Tech</key>, it always gets both <key>AP</key>(+1) and +1 to hit rolls from <key>Vinci Tech</key> (instead of having to pick between <key>AP</key>(+1) or +1 to hit rolls)."
        }
      ],
      "specialRule": [
        "dRAJ8qnYDOxm"
      ]
    },
    "Wave-Step": {
      "title": "Wave-Step",
      "description": [
        {
          "system": "all",
          "text": "When this unit is activated, you may place all models with this rule in it anywhere fully within 3\" of their position."
        }
      ],
      "specialRule": [
        "oACH5PrePLfv"
      ]
    },
    "Guarded": {
      "title": "Guarded",
      "description": [
        {
          "system": "all",
          "text": "When units where all models have this rule are shot or charged from over 9\" away, they get +1 to defense rolls."
        }
      ],
      "specialRule": [
        "oACH5PrePLfv"
      ]
    },
    "Stealth Buff": {
      "title": "Stealth Buff",
      "description": [
        {
          "system": "all",
          "text": "Once per activation, before attacking, pick one friendly unit within 12\", which gets <key>Stealth</key> once (next time the effect would apply)."
        }
      ],
      "specialRule": [
        "oACH5PrePLfv"
      ]
    },
    "Thrash": {
      "title": "Thrash",
      "description": [
        {
          "system": "all",
          "text": "Against units where most models have <key>Defense</key> 5+ to <key>Defense</key> 6+, this weapon gets <key>Blast</key>(+3)."
        }
      ],
      "specialRule": [
        "oACH5PrePLfv"
      ]
    },
    "Wave-Step Boost Aura": {
      "title": "Wave-Step Boost Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Wave-Step Boost</key>."
        }
      ],
      "specialRule": [
        "oACH5PrePLfv"
      ]
    },
    "Ambush Re-Deployment": {
      "title": "Ambush Re-Deployment",
      "description": [
        {
          "system": "all",
          "text": "Once per game, when a unit where all models have this rule ends its activation, you may immediately remove it from the table (dropping any objectives it might hold within 1\"), and deploy it as if it had <key>Ambush</key> at the beginning of the next round."
        }
      ],
      "specialRule": [
        "oACH5PrePLfv"
      ]
    },
    "Wave-Step Boost": {
      "title": "Wave-Step Boost",
      "description": [
        {
          "system": "all",
          "text": "If this model has <key>Wave-Step</key>, it may be placed within 6\" from <key>Wave-Step</key> (instead of only within 3\")."
        }
      ],
      "specialRule": [
        "oACH5PrePLfv"
      ]
    },
    "Harassing": {
      "title": "Harassing",
      "description": [
        {
          "system": "all",
          "text": "Once per round, units where all models have this rule may move by up to 3\" after shooting or being in melee."
        }
      ],
      "specialRule": [
        "AiReKTM86F3e"
      ]
    },
    "Retreating Strike": {
      "title": "Retreating Strike",
      "description": [
        {
          "system": "all",
          "text": "Once per round, when this unit ends its move within 3\" of enemy units after being in melee, pick one of them and roll as many dice as models with this rule in this unit, or as many dice as its <key>Tough</key> value (for single-model units). For each 6+ the target takes one wound."
        }
      ],
      "specialRule": [
        "AiReKTM86F3e"
      ]
    },
    "Regenerative Strength": {
      "title": "Regenerative Strength",
      "description": [
        {
          "system": "all",
          "text": "Place one marker on this model when it ignores a wound. When in melee, pick one of its weapons to get +X attacks, where X is the number of markers on it."
        }
      ],
      "specialRule": [
        "AiReKTM86F3e"
      ]
    },
    "Predator Fighter": {
      "title": "Predator Fighter",
      "description": [
        {
          "system": "all",
          "text": "For each unmodified roll of 6 to hit in melee, this model may roll +1 attack with that weapon. This rule doesn’t apply to newly generated attacks."
        }
      ],
      "specialRule": [
        "AiReKTM86F3e"
      ]
    },
    "Ruinous Frenzy": {
      "title": "Ruinous Frenzy",
      "description": [
        {
          "system": "all",
          "text": "Place one marker on this unit when it fully destroys an enemy unit. For each marker all models with this rule in this unit get +1 to hit rolls and +1 to defense rolls until the end of the game (up to a max. of +2)."
        }
      ],
      "specialRule": [
        "AiReKTM86F3e"
      ]
    },
    "Lacerate": {
      "title": "Lacerate",
      "description": [
        {
          "system": "all",
          "text": "When attacking the target must re-roll unmodified <key>Defense</key> results of 6."
        }
      ],
      "specialRule": [
        "AiReKTM86F3e"
      ]
    },
    "Harassing Boost Aura": {
      "title": "Harassing Boost Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Harassing Boost</key>."
        }
      ],
      "specialRule": [
        "AiReKTM86F3e"
      ]
    },
    "Thrust Mark": {
      "title": "Thrust Mark",
      "description": [
        {
          "system": "all",
          "text": "Once per activation, before attacking, pick one enemy unit within 18\", which friendly units gets <key>Thrust</key> in melee against once (next time the effect would apply)."
        }
      ],
      "specialRule": [
        "AiReKTM86F3e"
      ]
    },
    "Harassing Boost": {
      "title": "Harassing Boost",
      "description": [
        {
          "system": "all",
          "text": "If most models in this unit have <key>Harassing</key>, they may move by up to 6\" from <key>Harassing</key> (instead of only 3\")."
        }
      ],
      "specialRule": [
        "AiReKTM86F3e"
      ]
    },
    "Precision Growth": {
      "title": "Precision Growth",
      "description": [
        {
          "system": "all",
          "text": "Place one marker on this unit at the end of each round if it's on the table. For each marker models with this rule in it get +1 to hit rolls (up to a max. of +2). If this unit is ever Shaken, it loses all its markers."
        }
      ],
      "specialRule": [
        "HH7O68qvHVR0"
      ]
    },
    "Vale Formation": {
      "title": "Vale Formation",
      "description": [
        {
          "system": "all",
          "text": "This model gets +2\" range when shooting and moves +4\" when using Charge actions."
        }
      ],
      "specialRule": [
        "HH7O68qvHVR0"
      ]
    },
    "Courage Buff": {
      "title": "Courage Buff",
      "description": [
        {
          "system": "all",
          "text": "Once per activation, before attacking, pick one friendly unit within 12\", which gets +1 to morale test rolls once (next time the effect would apply)."
        }
      ],
      "specialRule": [
        "HH7O68qvHVR0"
      ]
    },
    "Counter in Melee": {
      "title": "Counter in Melee",
      "description": [
        {
          "system": "all",
          "text": "This model gets <key>Counter</key> in melee."
        }
      ],
      "specialRule": [
        "HH7O68qvHVR0"
      ]
    },
    "Puncture": {
      "title": "Puncture",
      "description": [
        {
          "system": "all",
          "text": "Ignores Regeneration, and against units where most models have <key>Tough</key>(3) to <key>Tough</key>(9), this weapon gets <key>AP</key>(+4)."
        }
      ],
      "specialRule": [
        "HH7O68qvHVR0"
      ]
    },
    "Vale Formation Boost Aura": {
      "title": "Vale Formation Boost Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Vale Formation Boost</key>."
        }
      ],
      "specialRule": [
        "HH7O68qvHVR0"
      ]
    },
    "Impact Mark": {
      "title": "Impact Mark",
      "description": [
        {
          "system": "all",
          "text": "Once per activation, before attacking, pick one enemy unit within 18\", which friendly units gets <key>Impact</key>(+1) against once (next time the effect would apply)."
        }
      ],
      "specialRule": [
        "HH7O68qvHVR0"
      ]
    },
    "Vale Formation Boost": {
      "title": "Vale Formation Boost",
      "description": [
        {
          "system": "all",
          "text": "If this model has <key>Vale Formation</key>, it gets +4\" range when shooting and moves +8\" when using Charge actions from <key>Vale Formation</key> (instead of only +2\" and +4\")."
        }
      ],
      "specialRule": [
        "HH7O68qvHVR0"
      ]
    },
    "Precision Shooter Aura": {
      "title": "Precision Shooter Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get +1 to hit rolls when shooting."
        }
      ],
      "specialRule": [
        "OyVVPwEw7Uep"
      ]
    },
    "Bestial": {
      "title": "Bestial",
      "description": [
        {
          "system": "all",
          "text": "When attacking, targets must re-roll unmodified <key>Defense</key> results of 6 when blocking hits from this model's weapons."
        }
      ],
      "specialRule": [
        "OyVVPwEw7Uep"
      ]
    },
    "Tear": {
      "title": "Tear",
      "description": [
        {
          "system": "all",
          "text": "Against units where most models have <key>Tough</key>(3) to <key>Tough</key>(9), this weapon gets <key>AP</key>(+4)."
        }
      ],
      "specialRule": [
        "OyVVPwEw7Uep"
      ]
    },
    "Bestial Boost Aura": {
      "title": "Bestial Boost Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Bestial Boost</key>."
        }
      ],
      "specialRule": [
        "OyVVPwEw7Uep"
      ]
    },
    "Precision Tag": {
      "title": "Precision Tag",
      "description": [
        {
          "system": "all",
          "text": "Once per game, during this model's activation, pick one enemy unit within 36\" and in line of sight of it, and place X markers on it. When attacking, friendly units may remove markers from their target before rolling to hit to get +Y to hit rolls, where Y is the number of removed markers."
        }
      ],
      "specialRule": [
        "OyVVPwEw7Uep"
      ]
    },
    "Bestial Boost": {
      "title": "Bestial Boost",
      "description": [
        {
          "system": "all",
          "text": "If this model has <key>Bestial</key>, enemies taking hits from it must re-roll successful unmodified defense results of 5-6 from <key>Bestial</key> (instead of only on 6)."
        }
      ],
      "specialRule": [
        "OyVVPwEw7Uep"
      ]
    },
    "Destroyer Boost Aura": {
      "title": "Destroyer Boost Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Destroyer Boost</key>."
        }
      ],
      "specialRule": [
        "K44UD3HPQAfg"
      ]
    },
    "Piercing Feat": {
      "title": "Piercing Feat",
      "description": [
        {
          "system": "all",
          "text": "Once per game, when this unit attacks and all its models have this rule, you may use this rule so that all their weapons get <key>AP</key>(+2)."
        }
      ],
      "specialRule": [
        "K44UD3HPQAfg"
      ]
    },
    "Piercing Feat Aura": {
      "title": "Piercing Feat Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get <key>Piercing Feat</key>."
        }
      ],
      "specialRule": [
        "K44UD3HPQAfg"
      ]
    },
    "Rupture": {
      "title": "Rupture",
      "description": [
        {
          "system": "all",
          "text": "Ignores Regeneration, and on unmodified results of 6 to hit that aren't blocked, this weapon deals 1 extra wound."
        }
      ],
      "specialRule": [
        "K44UD3HPQAfg"
      ]
    },
    "Melee Evasion Buff": {
      "title": "Melee Evasion Buff",
      "description": [
        {
          "system": "all",
          "text": "Once per activation, before attacking, pick one friendly unit within 12\", which gets <key>Melee Evasion</key> once (next time the effect would apply)."
        }
      ],
      "specialRule": [
        "K44UD3HPQAfg"
      ]
    },
    "Unwieldy Debuff": {
      "title": "Unwieldy Debuff",
      "description": [
        {
          "system": "all",
          "text": "Once per activation, before attacking, pick one enemy unit within 18\", which gets <key>Unwieldy</key> in melee once (next time the effect would apply)."
        }
      ],
      "specialRule": [
        "K44UD3HPQAfg"
      ]
    },
    "Courage Aura": {
      "title": "Courage Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and its unit get +1 to morale test rolls."
        }
      ],
      "specialRule": [
        "K44UD3HPQAfg"
      ]
    },
    "Destroyer Boost": {
      "title": "Destroyer Boost",
      "description": [
        {
          "system": "all",
          "text": "If this model has <key>Destroyer</key>, enemies taking wounds from it take extra wounds on failed defense rolls of 1-2 from <key>Destroyer</key> (instead of only on 1)."
        }
      ],
      "specialRule": [
        "K44UD3HPQAfg"
      ]
    },
    "Unwieldy": {
      "title": "Unwieldy",
      "description": [
        {
          "system": "all",
          "text": "Strikes last when charging."
        }
      ],
      "specialRule": [
        "K44UD3HPQAfg"
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
          "text": "peut être mise de côté avant le déploiement. Au début de n'importe quel round après le premier, les unités peuvent être déployées n'importe où à plus de 9” des unités ennemies. Les joueurs placent alternativement des unités en Embuscade, en commençant par le joueur qui doit s’activer en suivant. Les unités qui se déploient via une Embuscade ne peuvent pas s'emparer d'objectifs ou les contester lors du round où elles se déploient."
        },
        {
          "system": "aofr",
          "text": "Peut être mis de cote avant le deploiement. Au debut de n'importe quel tour apres le premier, peut être deploye entierement a moins de 6? de n'importe quel bord de table, a plus de 9\" des unités ennemies. Les joueurs placent alternativement les unités en <key>Embuscade</key>, en commencant par le joueur qui active ensuite. Les unités qui se deploient via <key>Embuscade</key> ne peuvent pas prendre ou contester des objectifs le tour ou elles se deploient."
        }
      ],
      "specialRule": [
        "cJJJPqOuiHWx",
        "f78kQxkgtIs1",
        "vhKZ0CIT6dBt",
        "tKa31SeqrzS1",
        "cyQpyja0EDRj",
        "ylxJ4fFb6cZf",
        "0zpUZx5GkSHb",
        "voFsQwaDph1Y",
        "RMi35vAtYNb-",
        "_k9nd29ZX-FQ",
        "xw2YHtZNkhIV",
        "GgMdmXsCVdK2",
        "x2_Lkyj0JPk2",
        "AxiZW7zj2hUK",
        "SshMejY9Kz7s",
        "dRAJ8qnYDOxm",
        "oACH5PrePLfv",
        "AiReKTM86F3e",
        "OyVVPwEw7Uep",
        "56Tb7FFgHuyX"
      ]
    },
    "AP": {
      "title": "PA",
      "description": [
        {
          "system": "all",
          "text": " les cibles obtiennent un malus de -X aux jets de Défense contre les attaques de cette arme."
        }
      ],
      "specialRule": [
        "cJJJPqOuiHWx",
        "uAXC1RxdtELq",
        "f78kQxkgtIs1",
        "Q7nWXE-8DEHN",
        "iv1Jm6zZiZPJ",
        "vhKZ0CIT6dBt",
        "tKa31SeqrzS1",
        "cyQpyja0EDRj",
        "ylxJ4fFb6cZf",
        "0zpUZx5GkSHb",
        "wLKHbRBBr4NI",
        "5xPzQn4Qdzz6",
        "aHBBAhsdAqyz",
        "voFsQwaDph1Y",
        "SY80P2vKJGrY",
        "RMi35vAtYNb-",
        "_k9nd29ZX-FQ",
        "OJr14Si4C1Uj",
        "xw2YHtZNkhIV",
        "ndODzgAqJGDz",
        "H18g-ND_uWiZ",
        "fLQMyzi3zbFI",
        "GgMdmXsCVdK2",
        "p9iL_bzUnY7A",
        "x2_Lkyj0JPk2",
        "AxiZW7zj2hUK",
        "SshMejY9Kz7s",
        "dRAJ8qnYDOxm",
        "oACH5PrePLfv",
        "AiReKTM86F3e",
        "HH7O68qvHVR0",
        "OyVVPwEw7Uep",
        "K44UD3HPQAfg",
        "56Tb7FFgHuyX"
      ]
    },
    "Artillery": {
      "title": "Artillerie",
      "description": [
        {
          "system": "all",
          "text": "ne peut utiliser que des actions Tenir. Lorsque cette figurine tire sur des ennemis situés à plus de 9”, elle obtient +1 aux jets pour toucher. Lorsque des unités ennemies tirent sur cette figurine à plus de 9”, elles obtiennent -2 aux jets pour toucher."
        }
      ],
      "specialRule": [
        "voFsQwaDph1Y",
        "AxiZW7zj2hUK",
        "SshMejY9Kz7s",
        "dRAJ8qnYDOxm"
      ]
    },
    "Bane": {
      "title": "Fléau",
      "description": [
        {
          "system": "all",
          "text": "ignore la Régénération, et lors d’une attaque, la cible doit relancer les résultats de défense non modifiés de 6."
        }
      ],
      "specialRule": [
        "iv1Jm6zZiZPJ",
        "tKa31SeqrzS1",
        "ylxJ4fFb6cZf",
        "0zpUZx5GkSHb",
        "wLKHbRBBr4NI",
        "5xPzQn4Qdzz6",
        "SY80P2vKJGrY",
        "_k9nd29ZX-FQ",
        "fLQMyzi3zbFI",
        "GgMdmXsCVdK2",
        "x2_Lkyj0JPk2",
        "AxiZW7zj2hUK",
        "dRAJ8qnYDOxm",
        "oACH5PrePLfv",
        "HH7O68qvHVR0"
      ]
    },
    "Banner": {
      "title": "Bannière",
      "description": [
        {
          "system": "all",
          "text": "Ce modèle et jusqu'à 3 unités alliées choisies avant le début de la partie obtiennent +1 à leurs jets de test de moral. Si ce modèle est tué, les modèles choisis qui sont déployés perdent cette règle."
        },
        {
          "system": "gf",
          "text": "Cette figurine et son unité obtiennent +1 a leurs jets de test de moral."
        },
        {
          "system": "aof",
          "text": "cette figurine et son unité gagne +1 pour leurs Tests de Moral."
        },
        {
          "system": "aofr",
          "text": "Cette figurine et son unité obtiennent +1 a leurs jets de test de moral."
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
          "text": "Ignore le couvert, et apres avoir resolu les autres règles speciales, chaque touche est multipliee par X, ou X est au maximum egal au nombre de modeles dans l'unité cible."
        },
        {
          "system": "aof",
          "text": "Ignore le couvert, et après la résolution des effets d’autres règles spéciales, chaque touche est multipliée par X, où X représente le minimum entre le nombre de figurines dans l’unité ciblée et le nombre de touche."
        },
        {
          "system": "aofr",
          "text": "Ignore le couvert, et apres avoir resolu les autres règles speciales, chaque touche est multipliee par X, ou X est au maximum egal au nombre de modeles dans l'unité cible."
        }
      ],
      "specialRule": [
        "cJJJPqOuiHWx",
        "uAXC1RxdtELq",
        "f78kQxkgtIs1",
        "vhKZ0CIT6dBt",
        "0zpUZx5GkSHb",
        "5xPzQn4Qdzz6",
        "aHBBAhsdAqyz",
        "voFsQwaDph1Y",
        "SY80P2vKJGrY",
        "RMi35vAtYNb-",
        "_k9nd29ZX-FQ",
        "OJr14Si4C1Uj",
        "xw2YHtZNkhIV",
        "ndODzgAqJGDz",
        "H18g-ND_uWiZ",
        "fLQMyzi3zbFI",
        "AxiZW7zj2hUK",
        "SshMejY9Kz7s",
        "oACH5PrePLfv",
        "AiReKTM86F3e"
      ]
    },
    "Caster": {
      "title": "Lanceur de sorts",
      "description": [
        {
          "system": "all",
          "text": "Obtient X jetons de sort au début de chaque round, mais ne peut pas posséder plus de six jetons à la fois. À tout moment avant d’attaquer, dépensez autant de jetons que la valeur d’un sort pour essayer de lancer un ou plusieurs sorts (un seul essai par sort). Lancez 1D6 : sur un résultat de 4+, résolvez l'effet sur une cible en ligne de vue. Les figurines dans un rayon de 18” en ligne de vue du Lanceur de sorts peuvent dépenser n'importe quel nombre de jetons de sort en même temps avant le lancer de dé pour donner au lanceur +1/-1 au jet de dé par jeton"
        },
        {
          "system": "aofr",
          "text": "Recoit X jetons de sort au debut de chaque tour, mais ne peut pas detenir plus de 6 jetons a la fois. A tout moment avant d'attaquer, depensez autant de jetons que la valeur du sort pour tenter de lancer un ou plusieurs sorts (un seul essai par sort). Lancez un de, sur un 4+ resolvez l'effet sur une cible en ligne de vue dans n'importe quelle direction. Les modeles a moins de 18? en ligne de vue de l'unité du lanceur de sorts peuvent depenser n'importe quel nombre de jetons de sort en meme temps avant de lancer, pour donner au lanceur +1/-1 au jet par jeton."
        }
      ],
      "specialRule": [
        "f78kQxkgtIs1",
        "Q7nWXE-8DEHN",
        "ylxJ4fFb6cZf",
        "0zpUZx5GkSHb",
        "aHBBAhsdAqyz",
        "voFsQwaDph1Y",
        "SY80P2vKJGrY",
        "xw2YHtZNkhIV",
        "H18g-ND_uWiZ",
        "GgMdmXsCVdK2",
        "oACH5PrePLfv",
        "OyVVPwEw7Uep",
        "56Tb7FFgHuyX"
      ]
    },
    "Counter": {
      "title": "Contre-charge",
      "description": [
        {
          "system": "all",
          "text": "frappe en premier avec cette arme quand elle est chargée, et l’unité qui charge a -1 jet de dé d’<key>Impact</key> par figurine possédant la Contre-charge."
        },
        {
          "system": "aofr",
          "text": "Frappe en premier avec cette arme lorsqu'il est charge, et l'unité chargeante subit -1 au total des jets d'<key>Impact</key> par modele avec <key>Contre</key> dans les deux rangs avant en cas de charge de front."
        }
      ],
      "specialRule": [
        "Q7nWXE-8DEHN",
        "iv1Jm6zZiZPJ",
        "cyQpyja0EDRj",
        "ylxJ4fFb6cZf",
        "HH7O68qvHVR0"
      ]
    },
    "Deadly": {
      "title": "Mortel",
      "description": [
        {
          "system": "all",
          "text": "Attribuez chaque blessure à une figurine, puis multipliez-les par X. Les blessures issues par cette règle spéciale doivent être résolues en premier et ces blessures ne sont pas répercutées sur les autres figurines si la cible d'origine est tuée."
        }
      ],
      "specialRule": [
        "uAXC1RxdtELq",
        "f78kQxkgtIs1",
        "ylxJ4fFb6cZf",
        "wLKHbRBBr4NI",
        "aHBBAhsdAqyz",
        "fLQMyzi3zbFI",
        "GgMdmXsCVdK2",
        "dRAJ8qnYDOxm",
        "AiReKTM86F3e",
        "K44UD3HPQAfg"
      ]
    },
    "Entrenched": {
      "title": "Retranché",
      "description": [
        {
          "system": "all",
          "text": " les ennemis ont -2 pour toucher lorsqu'ils tirent sur cette figurine à plus de 9” de distance, tant que celle-ci n'a pas bougé depuis le début de sa dernière activation."
        }
      ]
    },
    "Fast": {
      "title": "Rapide",
      "description": [
        {
          "system": "all",
          "text": "se déplace de +2” pour Avancer et +4” pour Courir ou Charger"
        }
      ]
    },
    "Fear": {
      "title": "Effrayant",
      "description": [
        {
          "system": "all",
          "text": "Ce modèle compte comme ayant infligé +X blessures lors de la vérification des effets de blessure en mêlée (doit infliger au moins une blessure)."
        },
        {
          "system": "gf",
          "text": "Ce modele compte comme ayant inflige +X blessures lorsqu'on determine qui a gagne la mêlée."
        },
        {
          "system": "aof",
          "text": " cette figurine compte toujours comme ayant infligé +X blessures supplémentaires pour déterminer qui a gagné la Mêlée."
        },
        {
          "system": "aofr",
          "text": "Ce modele compte comme ayant inflige +X blessures lorsqu'on determine qui a gagne la mêlée."
        }
      ],
      "specialRule": [
        "SY80P2vKJGrY",
        "xw2YHtZNkhIV",
        "oACH5PrePLfv",
        "56Tb7FFgHuyX"
      ]
    },
    "Fearless": {
      "title": "Sans peur",
      "description": [
        {
          "system": "all",
          "text": " lorsqu'une unité dont toutes les figurines possèdent cette règle spéciale échoue à un Test de Moral, 1D6: sur un résultat de 4+, le test est réussi à la place."
        }
      ],
      "specialRule": [
        "SY80P2vKJGrY",
        "xw2YHtZNkhIV",
        "fLQMyzi3zbFI",
        "oACH5PrePLfv",
        "56Tb7FFgHuyX"
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
          "text": "Peut se deplacer a travers les unités et le terrain, et ignore les effets du terrain lors de ses deplacements."
        },
        {
          "system": "aof",
          "text": "peut se déplacer à travers les unités et les décors, et peut ignorer les effets du terrain lors d’un déplacement."
        },
        {
          "system": "aofr",
          "text": "Peut se deplacer a travers les unités et le terrain, et ignore les effets du terrain lors de ses deplacements."
        }
      ],
      "specialRule": [
        "aHBBAhsdAqyz"
      ]
    },
    "Furious": {
      "title": "Furieux",
      "description": [
        {
          "system": "all",
          "text": "lors d'une Charge, les jets pour toucher de 6 non modifiés pour toucher en Mêlée infligent une touche supplémentaire (seule la touche initiale compte pour un 6 en regard des règles spéciales)."
        }
      ],
      "specialRule": [
        "vhKZ0CIT6dBt",
        "0zpUZx5GkSHb",
        "aHBBAhsdAqyz",
        "voFsQwaDph1Y",
        "RMi35vAtYNb-",
        "HH7O68qvHVR0",
        "OyVVPwEw7Uep"
      ]
    },
    "Hero": {
      "title": "Héros",
      "description": [
        {
          "system": "all",
          "text": "Les unités alliées à moins de 12\" peuvent effectuer des tests de moral en utilisant la Qualité du héros, tant que le héros n'est pas Secoué."
        },
        {
          "system": "gf",
          "text": "Les heros avec <key>Coriace</key>(6) ou moins peuvent être deployes comme partie d'une unité multi-modeles sans autre Heros. Le heros peut faire des tests de moral au nom de l'unité, mais doit utiliser la <key>Defense</key> de l'unité jusqu'à ce que tous les autres modeles aient ete tues."
        },
        {
          "system": "aof",
          "text": " un héros avec <key>Coriace</key>(6) ou moins peut être déployé dans une unité alliée composée de plusieurs figurines sans autre Héros. Le héros peut passer des Tests de Moral pour l’unité, mais doit utiliser la valeur de Défense de l’unité jusqu’à ce que toutes les autres figurines de l’unité aient été tuées."
        },
        {
          "system": "aofr",
          "text": "Les heros avec jusqu'à <key>Coriace</key>(6) peuvent être deployes comme partie d'une unité multi-modeles sans autre Heros. Le heros peut faire des tests de moral au nom de l'unité, mais doit utiliser la <key>Defense</key> de l'unité jusqu'à ce que tous les autres modeles aient ete tues."
        }
      ],
      "specialRule": [
        "voFsQwaDph1Y"
      ]
    },
    "Immobile": {
      "title": "Immobile",
      "description": [
        {
          "system": "all",
          "text": "ne peut utiliser que l’action Tenir."
        }
      ]
    },
    "Impact": {
      "title": "Impact",
      "description": [
        {
          "system": "all",
          "text": " jeter X dés lors d'une attaque après avoir Chargé, sauf si Fatigué. Pour chaque 2+ la cible subit une touche."
        },
        {
          "system": "aofr",
          "text": "Les modeles des deux rangs avant lancent X des lors d'une attaque apres une charge, sauf s'ils sont fatigues. Pour chaque 2+, la cible subit une touche."
        }
      ],
      "specialRule": [
        "iv1Jm6zZiZPJ",
        "ylxJ4fFb6cZf",
        "fLQMyzi3zbFI",
        "dRAJ8qnYDOxm",
        "HH7O68qvHVR0"
      ]
    },
    "Indirect": {
      "title": "Indirect",
      "description": [
        {
          "system": "all",
          "text": " a -1 aux jets de touche quand elle tire après s’être déplacée. Peut cibler des ennemis hors de la ligne de vue comme s’ils étaient en ligne de vue et ignore le Couvert dû aux obstacles."
        }
      ],
      "specialRule": [
        "ylxJ4fFb6cZf",
        "5xPzQn4Qdzz6",
        "SY80P2vKJGrY",
        "xw2YHtZNkhIV",
        "56Tb7FFgHuyX"
      ]
    },
    "Limited": {
      "title": "Limité",
      "description": [
        {
          "system": "all",
          "text": "Ne peut être utilisée qu’une seule fois par partie."
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
          "text": "Ce modèle et jusqu'à 3 unités alliées choisies avant le début de la partie se déplacent de +1\" lorsqu'ils utilisent des actions de mouvement. Si ce modèle est tué, les modèles choisis qui sont déployés perdent cette règle."
        },
        {
          "system": "gf",
          "text": "Cette figurine et son unité se deplacent de +1\" lorsqu'ils utilisent des actions de mouvement."
        },
        {
          "system": "aof",
          "text": "cette figurine et son unité se déplacent de +1” lorsqu’elles utilisent une action de mouvement. (Avancer, Courir, Charger)."
        },
        {
          "system": "aofr",
          "text": "Cette figurine et son unité se deplacent de +1\" lorsqu'ils utilisent des actions de mouvement."
        }
      ]
    },
    "Regeneration": {
      "title": "Régénération",
      "description": [
        {
          "system": "all",
          "text": "lorsqu'une unité dont toutes les figurines possèdent cette règle subit des blessures, lancez un dé pour chacune d'entre elles. Sur un résultat de 5+, la blessure est ignorée"
        }
      ],
      "specialRule": [
        "iv1Jm6zZiZPJ",
        "vhKZ0CIT6dBt",
        "tKa31SeqrzS1",
        "cyQpyja0EDRj",
        "0zpUZx5GkSHb",
        "aHBBAhsdAqyz",
        "voFsQwaDph1Y",
        "RMi35vAtYNb-",
        "_k9nd29ZX-FQ",
        "H18g-ND_uWiZ",
        "fLQMyzi3zbFI",
        "AxiZW7zj2hUK",
        "SshMejY9Kz7s",
        "AiReKTM86F3e",
        "HH7O68qvHVR0",
        "OyVVPwEw7Uep",
        "K44UD3HPQAfg"
      ]
    },
    "Relentless": {
      "title": "Implacable",
      "description": [
        {
          "system": "all",
          "text": " lorsque cette figurine tire sur des ennemis situé à  plus de 9”, les résultats non modifiés de 6 pour toucher infligent une touche supplémentaire (seule la touche initiale compte pour un 6 en regard des règles spéciales)."
        }
      ],
      "specialRule": [
        "tKa31SeqrzS1",
        "0zpUZx5GkSHb",
        "SY80P2vKJGrY",
        "_k9nd29ZX-FQ",
        "H18g-ND_uWiZ",
        "x2_Lkyj0JPk2",
        "SshMejY9Kz7s"
      ]
    },
    "Reliable": {
      "title": "Fiable",
      "description": [
        {
          "system": "all",
          "text": "Attaque avec une Qualité 2+."
        }
      ]
    },
    "Rending": {
      "title": "Perforant",
      "description": [
        {
          "system": "all",
          "text": "Ignore la Régénération et sur un résultat non modifié de 6 pour toucher ces touches gagnent une <key>PA</key>(4)."
        }
      ],
      "specialRule": [
        "Q7nWXE-8DEHN",
        "iv1Jm6zZiZPJ",
        "tKa31SeqrzS1",
        "wLKHbRBBr4NI",
        "_k9nd29ZX-FQ",
        "fLQMyzi3zbFI",
        "SshMejY9Kz7s"
      ]
    },
    "Scout": {
      "title": "Éclaireur",
      "description": [
        {
          "system": "all",
          "text": "peut être mis de côté avant le déploiement. Une fois que toutes les autres unités ont été déployées, l’unité doit être déployée et peut être placée n'importe où à moins de 12” de sa zone de déploiement. Les joueurs placent alternativement les unités d'Éclaireur, en suivant l'ordre d'activation."
        }
      ],
      "specialRule": [
        "f78kQxkgtIs1",
        "5xPzQn4Qdzz6",
        "RMi35vAtYNb-",
        "_k9nd29ZX-FQ",
        "OJr14Si4C1Uj",
        "xw2YHtZNkhIV",
        "ndODzgAqJGDz",
        "x2_Lkyj0JPk2"
      ]
    },
    "Slow": {
      "title": "Lent",
      "description": [
        {
          "system": "all",
          "text": "Se déplace de -2” pour Avancer et -4” pour Charger ou Courir."
        }
      ],
      "specialRule": [
        "uAXC1RxdtELq",
        "0zpUZx5GkSHb",
        "H18g-ND_uWiZ",
        "fLQMyzi3zbFI",
        "SshMejY9Kz7s"
      ]
    },
    "Sniper": {
      "title": "Sniper",
      "description": [
        {
          "system": "all",
          "text": "tire avec une Qualité de 2+, et chaque figurine possédant cette règle peut cibler n’importe quelle figurine dans l’unité ciblée comme si elle était seule, ce qui est résolu comme s’il s’agissait d’une unité d'une seule figurine. Les tirs avec Sniper doivent être résolus avant les autres armes."
        }
      ]
    },
    "Stealth": {
      "title": "Furtif",
      "description": [
        {
          "system": "all",
          "text": "lorsque des unités dont toutes les figurines possèdent cette règle sont ciblées par des tirs à plus de 9”, les unités ennemies subissent un malus de -1 aux jets pour toucher."
        }
      ],
      "specialRule": [
        "uAXC1RxdtELq",
        "f78kQxkgtIs1",
        "ylxJ4fFb6cZf",
        "AxiZW7zj2hUK",
        "oACH5PrePLfv"
      ]
    },
    "Strider": {
      "title": "Arpenteur",
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
          "text": "Peut ignorer les effets des Terrain Difficile lorsqu'elle se déplace."
        },
        {
          "system": "aofr",
          "text": "Peut ignorer les effets du terrain difficile lors de ses deplacements."
        }
      ],
      "specialRule": [
        "uAXC1RxdtELq",
        "cyQpyja0EDRj",
        "HH7O68qvHVR0"
      ]
    },
    "Takedown": {
      "title": "Élimination",
      "description": [
        {
          "system": "all",
          "text": "cette figurine peut cibler n’importe quelle figurine dans l’unité ciblée comme s’il s’agissait d’une figurine individuelle, qui est résolu comme s’il s’agissait d’une unité d’une seule figurine. Les attaques d’Élimination doivent être résolues avant les autres armes."
        }
      ]
    },
    "Thrust": {
      "title": "Percée",
      "description": [
        {
          "system": "all",
          "text": "lors d’une action Charger, gagne un bonus de +1 pour toucher et PA(1) en mêlée."
        }
      ],
      "specialRule": [
        "GgMdmXsCVdK2",
        "AiReKTM86F3e"
      ]
    },
    "Tough": {
      "title": "Coriace",
      "description": [
        {
          "system": "all",
          "text": "Ce modèle ne fait un jet pour vérifier les effets de blessure qu'une fois qu'il a subi au moins X blessures, et n'est Mis K.O. que sur des jets de 5+X ou plus."
        },
        {
          "system": "gf",
          "text": "Ce modele doit subir X blessures avant d'être tue. Si un modele avec <key>Coriace</key> rejoint une unité sans cette règle, il est retire en dernier quand l'unité subit des blessures. Vous devez continuer a placer les blessures sur le modele <key>Coriace</key> avec le plus de blessures dans l'unité jusqu'à ce qu'il soit tue, avant de commencer a les placer sur le modele <key>Coriace</key> suivant (les heros doivent recevoir les blessures en dernier, meme s'ils sont deja blesses)."
        },
        {
          "system": "aof",
          "text": "une figurine avec cette règle spéciale doit subir X blessures avant d’être retirée comme perte. Si une figurine Coriace rejoint une unité sans cette règle spéciale, alors elle est retirée en dernier lorsque l'unité subit des blessures. Vous devez continuer à infliger des blessures sur la figurine Coriace avec le plus de blessures dans l'unité jusqu'à ce qu'elle soit tuée, avant de commencer à les infliger à la prochaine figurine Coriace (les Héros doivent recevoir les blessures en dernier, même s'ils sont déjà blessés)."
        },
        {
          "system": "aofr",
          "text": "Ce modele doit subir X blessures avant d'être tue. Si un modele avec <key>Coriace</key> rejoint une unité sans cette règle, il est retire en dernier quand l'unité subit des blessures. Vous devez continuer a placer les blessures sur le modele <key>Coriace</key> avec le plus de blessures dans l'unité jusqu'à ce qu'il soit tue, avant de commencer a les placer sur le modele <key>Coriace</key> suivant (les heros doivent recevoir les blessures en dernier, meme s'ils sont deja blesses)."
        }
      ],
      "specialRule": [
        "cJJJPqOuiHWx",
        "uAXC1RxdtELq",
        "Q7nWXE-8DEHN",
        "iv1Jm6zZiZPJ",
        "cyQpyja0EDRj",
        "wLKHbRBBr4NI",
        "5xPzQn4Qdzz6",
        "aHBBAhsdAqyz",
        "voFsQwaDph1Y",
        "OJr14Si4C1Uj",
        "H18g-ND_uWiZ",
        "fLQMyzi3zbFI",
        "GgMdmXsCVdK2",
        "AxiZW7zj2hUK",
        "SshMejY9Kz7s",
        "dRAJ8qnYDOxm",
        "AiReKTM86F3e",
        "HH7O68qvHVR0",
        "OyVVPwEw7Uep",
        "K44UD3HPQAfg"
      ]
    },
    "Transport": {
      "title": "Transport",
      "description": [
        {
          "system": "all",
          "text": "peut transporter jusqu'à X figurines ou <key>Héros</key> avec <key>Coriace</key>(6) ou moins, et des non-héros avec <key>Coriace</key>(3) qui occupent 3 places chacun. Les Transports peuvent se déployer en contenant des unités. Elles peuvent entrer/sortir en utilisant une action de mouvement, mais doivent rester entièrement à moins de 6” en sortant. Lorsqu’un Transport est détruit, les unités à l’intérieur doivent alors effectuer un Test de terrain Dangereux, sont Ébranlées et doivent être placées entièrement à moins de 6” du Transport avant de le retirer."
        }
      ]
    },
    "Unstoppable": {
      "title": "Inarrêtable",
      "description": [
        {
          "system": "all",
          "text": "Ignore la Régénération et tous les modificateurs négatifs appliqués à cette arme."
        }
      ],
      "specialRule": [
        "uAXC1RxdtELq",
        "cyQpyja0EDRj",
        "0zpUZx5GkSHb",
        "xw2YHtZNkhIV",
        "AxiZW7zj2hUK",
        "dRAJ8qnYDOxm",
        "K44UD3HPQAfg",
        "56Tb7FFgHuyX"
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
          "text": "Les unités ennemies à moins de 6\" du <key>Héros</key> subissent -1 en Défense."
        }
      ]
    },
    "Tactician": {
      "title": "Tacticien",
      "description": [
        {
          "system": "all",
          "text": "Les unités alliées qui s'activent à moins de 6\" du <key>Héros</key> obtiennent +1 pour toucher en tirant."
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
          "text": "Les unités alliées à moins de 6\" du <key>Héros</key> obtiennent +1 à leurs jets de test de moral."
        }
      ]
    },
    "Destroyer": {
      "title": "Destructeur",
      "description": [
        {
          "system": "all",
          "text": "Le héros obtient <key>PA</key>(+1) en tirant."
        }
      ],
      "specialRule": [
        "K44UD3HPQAfg"
      ]
    },
    "Herbalist": {
      "title": "Herboriste",
      "description": [
        {
          "system": "all",
          "text": "Les unités alliées à moins de 6\" peuvent ignorer les blessures sur un jet de 6+."
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
          "text": "Les unités alliées qui s'activent à moins de 6\" se déplacent de +4\" lorsqu'elles utilisent des actions de Charge."
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
          "text": "Les unités alliées à moins de 6\" du <key>Héros</key> subissent -1 aux jets d'effet de blessure."
        }
      ]
    },
    "Warden": {
      "title": "Gardien",
      "description": [
        {
          "system": "all",
          "text": "Lorsqu'une unité dont toutes les figurines possèdant cette règle spéciale subis des tirs ou sont chargées d'une distance supérieur à 9”, les blessures comptent comme ayant <key>PA</key>(-1) jusqu'à <key>PA</key>(0)."
        }
      ],
      "specialRule": [
        "AxiZW7zj2hUK"
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
          "text": "Les unités alliées qui s'activent à moins de 6\" du <key>Héros</key> obtiennent +1 pour toucher en mêlée."
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
          "text": "Obtient <key>Coriace</key>(+1)."
        }
      ]
    },
    "Scavenger": {
      "title": "Charognard",
      "description": [
        {
          "system": "all",
          "text": "Les unités alliées qui s'activent à moins de 6\" du <key>Héros</key> obtiennent +6\" de portée en tirant."
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
    },
    "Fortified": {
      "title": "Blindé",
      "specialRule": [
        "zrj60Gptp4Ce",
        "iv1Jm6zZiZPJ",
        "5xPzQn4Qdzz6",
        "aHBBAhsdAqyz",
        "voFsQwaDph1Y",
        "ndODzgAqJGDz",
        "H18g-ND_uWiZ",
        "p9iL_bzUnY7A",
        "SshMejY9Kz7s",
        "dRAJ8qnYDOxm",
        "HH7O68qvHVR0",
        "K44UD3HPQAfg"
      ],
      "description": [
        {
          "system": "all",
          "text": "Lorsque une unité où toutes les figurines possèdent cette règle subit des touches, ces touches comptent comme ayant <key>PA</key>(-1), jusqu'à un minimum de <key>PA</key>(0)."
        }
      ]
    },
    "Sergeant": {
      "title": "Sergent",
      "specialRule": [
        "zrj60Gptp4Ce",
        "cJJJPqOuiHWx",
        "uAXC1RxdtELq",
        "f78kQxkgtIs1",
        "iv1Jm6zZiZPJ",
        "vhKZ0CIT6dBt",
        "tKa31SeqrzS1",
        "cyQpyja0EDRj",
        "ylxJ4fFb6cZf",
        "0zpUZx5GkSHb",
        "wLKHbRBBr4NI",
        "5xPzQn4Qdzz6",
        "aHBBAhsdAqyz",
        "voFsQwaDph1Y",
        "SY80P2vKJGrY",
        "RMi35vAtYNb-",
        "_k9nd29ZX-FQ",
        "OJr14Si4C1Uj",
        "xw2YHtZNkhIV",
        "ndODzgAqJGDz",
        "H18g-ND_uWiZ",
        "fLQMyzi3zbFI",
        "GgMdmXsCVdK2",
        "x2_Lkyj0JPk2",
        "AxiZW7zj2hUK",
        "SshMejY9Kz7s",
        "dRAJ8qnYDOxm",
        "oACH5PrePLfv",
        "AiReKTM86F3e",
        "HH7O68qvHVR0",
        "OyVVPwEw7Uep",
        "K44UD3HPQAfg",
        "56Tb7FFgHuyX"
      ],
      "description": [
        {
          "system": "all",
          "text": "lorsque cette figurine attaque, les résultats non modifiés de 6 pour toucher infligent 1 touche supplémentaire (seule la touche initiale compte pour un 6 en regard des règles spéciales)."
        }
      ]
    },
    "Shadowborn Boost": {
      "title": "Boost de l'Origine Ombreuse",
      "specialRule": [
        "zrj60Gptp4Ce"
      ],
      "description": [
        {
          "system": "all",
          "text": "Si toute les figurines de cette unité ont <key>Origine Ombreuse</key>, les ennemis ont -8” de portée lorsqu'ils tirent sur eux et -4” de mouvement lorsqu'ils les chargent via <key>Origine Ombreuse</key> (au lieu de seulement -4” et -2”)."
        }
      ]
    },
    "Breath Attack": {
      "title": "Attaque de souffle",
      "specialRule": [
        "zrj60Gptp4Ce",
        "cJJJPqOuiHWx",
        "uAXC1RxdtELq",
        "f78kQxkgtIs1",
        "0zpUZx5GkSHb",
        "5xPzQn4Qdzz6",
        "aHBBAhsdAqyz",
        "voFsQwaDph1Y",
        "SY80P2vKJGrY",
        "RMi35vAtYNb-",
        "_k9nd29ZX-FQ",
        "OJr14Si4C1Uj",
        "xw2YHtZNkhIV",
        "ndODzgAqJGDz",
        "AxiZW7zj2hUK",
        "AiReKTM86F3e"
      ],
      "description": [
        {
          "system": "all",
          "text": "Une fois par activation de cette figurine, avant d'attaquer, lancez 1D6. Sur un résultat de 2+, une unité ennemie dans un rayon de 6” en ligne de vue subit 1 touche avec <key>Explosion</key>(3) et <key>PA</key>(1)."
        }
      ]
    },
    "Unique": {
      "title": "Unique",
      "specialRule": [
        "zrj60Gptp4Ce",
        "cJJJPqOuiHWx",
        "f78kQxkgtIs1",
        "iv1Jm6zZiZPJ",
        "vhKZ0CIT6dBt",
        "cyQpyja0EDRj",
        "ylxJ4fFb6cZf",
        "5xPzQn4Qdzz6",
        "RMi35vAtYNb-",
        "SshMejY9Kz7s",
        "dRAJ8qnYDOxm",
        "OyVVPwEw7Uep"
      ],
      "description": [
        {
          "system": "all",
          "text": "cette unité ne peut être prise qu'une seule fois par armee."
        }
      ]
    },
    "Precision Target": {
      "title": "Cible désignée",
      "specialRule": [
        "zrj60Gptp4Ce",
        "iv1Jm6zZiZPJ"
      ],
      "description": [
        {
          "system": "all",
          "text": "Une fois par partie, durant l'activation de cette figurine, choisissez une unité ennemie a 36” ou moins et en ligne de vue, puis placez X marqueurs dessus. Les unités alliée obtiennent +X pour toucher lorsqu'elles l'attaquent."
        }
      ]
    },
    "Armor": {
      "title": "Armure",
      "specialRule": [
        "zrj60Gptp4Ce",
        "cJJJPqOuiHWx",
        "uAXC1RxdtELq",
        "f78kQxkgtIs1",
        "vhKZ0CIT6dBt",
        "cyQpyja0EDRj",
        "ylxJ4fFb6cZf",
        "0zpUZx5GkSHb",
        "wLKHbRBBr4NI",
        "5xPzQn4Qdzz6",
        "aHBBAhsdAqyz",
        "voFsQwaDph1Y",
        "SY80P2vKJGrY",
        "RMi35vAtYNb-",
        "xw2YHtZNkhIV",
        "H18g-ND_uWiZ",
        "fLQMyzi3zbFI",
        "GgMdmXsCVdK2",
        "x2_Lkyj0JPk2",
        "AxiZW7zj2hUK",
        "SshMejY9Kz7s",
        "dRAJ8qnYDOxm",
        "oACH5PrePLfv",
        "AiReKTM86F3e",
        "HH7O68qvHVR0",
        "OyVVPwEw7Uep",
        "K44UD3HPQAfg",
        "56Tb7FFgHuyX"
      ],
      "description": [
        {
          "system": "all",
          "text": "Compte comme ayant une Defense de X+."
        }
      ]
    },
    "Repel Ambushers": {
      "title": "Chasse à l'Embuscade",
      "specialRule": [
        "zrj60Gptp4Ce",
        "cJJJPqOuiHWx",
        "f78kQxkgtIs1",
        "vhKZ0CIT6dBt",
        "ylxJ4fFb6cZf",
        "voFsQwaDph1Y",
        "RMi35vAtYNb-",
        "GgMdmXsCVdK2",
        "x2_Lkyj0JPk2",
        "AxiZW7zj2hUK",
        "dRAJ8qnYDOxm",
        "oACH5PrePLfv",
        "OyVVPwEw7Uep"
      ],
      "description": [
        {
          "system": "all",
          "text": "Les unités ennemies utilisant <key>Embuscade</key> doivent être placées a plus de 12” de l'unité de cette figurine."
        }
      ]
    },
    "Ethereal": {
      "title": "Ethéré",
      "specialRule": [
        "zrj60Gptp4Ce",
        "x2_Lkyj0JPk2"
      ],
      "description": [
        {
          "system": "all",
          "text": "Une fois par activation, avant d'attaquer, placez ce modele n'importe ou entierement a 6” ou moins de sa position. Cette figurine se deplace de -6” en déplacement et de -6” en Course/Charge."
        }
      ]
    },
    "Melee Slayer": {
      "title": "Tueur en mêlée",
      "specialRule": [
        "zrj60Gptp4Ce",
        "cJJJPqOuiHWx",
        "uAXC1RxdtELq",
        "Q7nWXE-8DEHN",
        "ylxJ4fFb6cZf",
        "wLKHbRBBr4NI",
        "OJr14Si4C1Uj",
        "H18g-ND_uWiZ",
        "fLQMyzi3zbFI",
        "AxiZW7zj2hUK",
        "SshMejY9Kz7s",
        "dRAJ8qnYDOxm",
        "AiReKTM86F3e",
        "HH7O68qvHVR0",
        "OyVVPwEw7Uep",
        "K44UD3HPQAfg"
      ],
      "description": [
        {
          "system": "all",
          "text": "Les armes de mêlée de cette figurine gagnent <key>PA</key>(+2) contre les unités dont la majorité des figurines possèdent <key>Coriace</key>(3) ou plus."
        }
      ]
    },
    "Thrust in Melee Aura": {
      "title": "Aura de Percée en mêlée",
      "specialRule": [
        "zrj60Gptp4Ce",
        "GgMdmXsCVdK2"
      ],
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>Percée</key> en mêlée."
        }
      ]
    },
    "Melee Evasion": {
      "title": "Esquive en mêlée",
      "specialRule": [
        "zrj60Gptp4Ce",
        "cJJJPqOuiHWx",
        "vhKZ0CIT6dBt",
        "cyQpyja0EDRj",
        "wLKHbRBBr4NI",
        "RMi35vAtYNb-",
        "OJr14Si4C1Uj",
        "fLQMyzi3zbFI",
        "GgMdmXsCVdK2",
        "oACH5PrePLfv",
        "AiReKTM86F3e",
        "OyVVPwEw7Uep",
        "K44UD3HPQAfg"
      ],
      "description": [
        {
          "system": "all",
          "text": "Les ennemis subissent un malus de -1 pour toucher en mêlée lorsqu'ils attaquent une unité où toutes les figurines possèdent cette règle."
        }
      ]
    },
    "Shadowborn": {
      "title": "Origine Ombreuse",
      "specialRule": [
        "zrj60Gptp4Ce"
      ],
      "description": [
        {
          "system": "all",
          "text": "Les ennemis subissent -4” de portée lorsqu'ils tentent de tirer sur des unités où toutes les figurines ont cette règle, et -2” de mouvement lorsqu'ils tentent de les charger."
        }
      ]
    },
    "Counter-Attack Aura": {
      "title": "Aura de Contre-attaque",
      "specialRule": [
        "zrj60Gptp4Ce",
        "Q7nWXE-8DEHN",
        "iv1Jm6zZiZPJ",
        "cyQpyja0EDRj",
        "ylxJ4fFb6cZf"
      ],
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>Contre-attaque</key>."
        }
      ]
    },
    "Increased Shooting Range Aura": {
      "title": "Aura de Portée de tir accrue",
      "specialRule": [
        "zrj60Gptp4Ce",
        "ylxJ4fFb6cZf",
        "H18g-ND_uWiZ"
      ],
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent +6” de portee en tir."
        }
      ]
    },
    "Ravage": {
      "title": "Ravage",
      "specialRule": [
        "zrj60Gptp4Ce",
        "f78kQxkgtIs1",
        "iv1Jm6zZiZPJ",
        "wLKHbRBBr4NI",
        "SshMejY9Kz7s",
        "AiReKTM86F3e",
        "K44UD3HPQAfg"
      ],
      "description": [
        {
          "system": "all",
          "text": "Quand c'est au tour de cette figurine d'attaquer en mêlée, lancer X dés. Pour chaque 6+, la cible subit une blessure."
        }
      ]
    },
    "Rapid Rush Aura": {
      "title": "Aura de Charge rapide",
      "specialRule": [
        "zrj60Gptp4Ce"
      ],
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>Charge rapide</key>."
        }
      ]
    },
    "Bane in Melee": {
      "title": "Fleau en mêlée",
      "specialRule": [
        "zrj60Gptp4Ce",
        "fLQMyzi3zbFI",
        "dRAJ8qnYDOxm"
      ],
      "description": [
        {
          "system": "all",
          "text": "Ce modele gagne <key>Bane</key> en mêlée."
        }
      ]
    },
    "Shadowborn Boost Aura": {
      "title": "Aura de boost de l'Origine Ombreuse",
      "specialRule": [
        "zrj60Gptp4Ce"
      ],
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>Boost de l'Origine Ombreuse</key>."
        }
      ]
    },
    "Unpredictable Fighter Mark": {
      "title": "Marque de Combattant imprévisible",
      "specialRule": [
        "zrj60Gptp4Ce"
      ],
      "description": [
        {
          "system": "all",
          "text": "Une fois par activation, avant d'attaquer, choisissez une unité ennemie a 18”. Les unités alliées gagnent <key>Combattant imprévisible</key> contre elle (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Resistance": {
      "title": "Resistance",
      "specialRule": [
        "zrj60Gptp4Ce",
        "cJJJPqOuiHWx",
        "f78kQxkgtIs1",
        "Q7nWXE-8DEHN",
        "vhKZ0CIT6dBt",
        "cyQpyja0EDRj",
        "ylxJ4fFb6cZf",
        "5xPzQn4Qdzz6",
        "voFsQwaDph1Y",
        "SY80P2vKJGrY",
        "RMi35vAtYNb-",
        "xw2YHtZNkhIV",
        "x2_Lkyj0JPk2",
        "SshMejY9Kz7s",
        "OyVVPwEw7Uep",
        "K44UD3HPQAfg",
        "56Tb7FFgHuyX"
      ],
      "description": [
        {
          "system": "all",
          "text": "Lorsqu'une unité où toutes les figurines possèdent cette règle subit des blessures, 1D6 pour chacune. Sur 6+, elle est ignorée. Si les blessures proviennent d'un sort, elles sont ignorées sur 2+ à la place."
        }
      ]
    },
    "Good Fighter": {
      "title": "Bon combattant",
      "specialRule": [
        "zrj60Gptp4Ce",
        "fLQMyzi3zbFI",
        "GgMdmXsCVdK2"
      ],
      "description": [
        {
          "system": "all",
          "text": "Cette figurine gagne +1 pour toucher en mêlée."
        }
      ]
    },
    "Fragment": {
      "title": "Fragment",
      "specialRule": [
        "zrj60Gptp4Ce"
      ],
      "description": [
        {
          "system": "all",
          "text": "Ignore le couvert, et contre les unités où la majorité des figurines ont une <key>Défense</key> de 2+ a 4+, cette arme gagne <key>AP</key>(+1)."
        }
      ]
    },
    "Defense": {
      "title": "Defense",
      "specialRule": [
        "zrj60Gptp4Ce",
        "cJJJPqOuiHWx",
        "uAXC1RxdtELq",
        "f78kQxkgtIs1",
        "iv1Jm6zZiZPJ",
        "vhKZ0CIT6dBt",
        "cyQpyja0EDRj",
        "ylxJ4fFb6cZf",
        "0zpUZx5GkSHb",
        "wLKHbRBBr4NI",
        "5xPzQn4Qdzz6",
        "aHBBAhsdAqyz",
        "voFsQwaDph1Y",
        "SY80P2vKJGrY",
        "RMi35vAtYNb-",
        "_k9nd29ZX-FQ",
        "OJr14Si4C1Uj",
        "xw2YHtZNkhIV",
        "ndODzgAqJGDz",
        "H18g-ND_uWiZ",
        "fLQMyzi3zbFI",
        "GgMdmXsCVdK2",
        "x2_Lkyj0JPk2",
        "AxiZW7zj2hUK",
        "SshMejY9Kz7s",
        "dRAJ8qnYDOxm",
        "oACH5PrePLfv",
        "AiReKTM86F3e",
        "HH7O68qvHVR0",
        "OyVVPwEw7Uep",
        "K44UD3HPQAfg",
        "56Tb7FFgHuyX"
      ],
      "description": [
        {
          "system": "all",
          "text": "Ce modele gagne +X a ses jets de <key>Defense</key>."
        }
      ]
    },
    "Counter-Attack": {
      "title": "Contre-attaque",
      "specialRule": [
        "zrj60Gptp4Ce",
        "Q7nWXE-8DEHN",
        "iv1Jm6zZiZPJ",
        "cyQpyja0EDRj",
        "ylxJ4fFb6cZf",
        "wLKHbRBBr4NI",
        "K44UD3HPQAfg"
      ],
      "description": [
        {
          "system": "all",
          "text": "Frappe en premier lorsqu'elle est chargée."
        }
      ]
    },
    "Rapid Rush": {
      "title": "Charge rapide",
      "specialRule": [
        "zrj60Gptp4Ce",
        "tKa31SeqrzS1",
        "voFsQwaDph1Y",
        "_k9nd29ZX-FQ"
      ],
      "description": [
        {
          "system": "all",
          "text": "Cette figurine se déplace de +6” lorsqu'elle utilise des actions de Course."
        }
      ]
    },
    "Unpredictable Fighter": {
      "title": "Combattant imprévisible",
      "specialRule": [
        "zrj60Gptp4Ce",
        "cJJJPqOuiHWx",
        "iv1Jm6zZiZPJ",
        "vhKZ0CIT6dBt",
        "ylxJ4fFb6cZf",
        "0zpUZx5GkSHb",
        "5xPzQn4Qdzz6",
        "RMi35vAtYNb-",
        "_k9nd29ZX-FQ",
        "OJr14Si4C1Uj",
        "xw2YHtZNkhIV",
        "ndODzgAqJGDz",
        "GgMdmXsCVdK2",
        "x2_Lkyj0JPk2",
        "AxiZW7zj2hUK",
        "dRAJ8qnYDOxm",
        "AiReKTM86F3e",
        "OyVVPwEw7Uep",
        "K44UD3HPQAfg"
      ],
      "description": [
        {
          "system": "all",
          "text": "Lors d'une attaque en mêlée, pour toutes les figurines disposant de cette régle, 1D6: sur 1-3 ils gagnent <key>PA</key>(1), sur 4-6 ils gagnent +1 pour toucher."
        }
      ]
    },
    "Unpredictable": {
      "title": "Imprévisible",
      "specialRule": [
        "zrj60Gptp4Ce",
        "cJJJPqOuiHWx",
        "RMi35vAtYNb-",
        "_k9nd29ZX-FQ",
        "OJr14Si4C1Uj",
        "xw2YHtZNkhIV",
        "ndODzgAqJGDz",
        "x2_Lkyj0JPk2",
        "dRAJ8qnYDOxm",
        "K44UD3HPQAfg"
      ],
      "description": [
        {
          "system": "all",
          "text": "Pour toutes les figurines disposant de cette régle, lors d'une attaque, 1D6: sur 1-3 ils gagnent <key>PA</key>(1), sur 4-6 ils gagnent +1 pour toucher."
        }
      ]
    },
    "Ignores Cover": {
      "title": "Ignore le couvert",
      "specialRule": [
        "zrj60Gptp4Ce",
        "uAXC1RxdtELq",
        "5xPzQn4Qdzz6",
        "voFsQwaDph1Y",
        "RMi35vAtYNb-",
        "_k9nd29ZX-FQ",
        "OJr14Si4C1Uj",
        "xw2YHtZNkhIV",
        "ndODzgAqJGDz",
        "fLQMyzi3zbFI",
        "GgMdmXsCVdK2",
        "dRAJ8qnYDOxm",
        "56Tb7FFgHuyX"
      ],
      "description": [
        {
          "system": "all",
          "text": "Cette arme ignore le couvert."
        }
      ]
    },
    "Evasive": {
      "title": "Esquive",
      "specialRule": [
        "zrj60Gptp4Ce",
        "iv1Jm6zZiZPJ",
        "ylxJ4fFb6cZf",
        "0zpUZx5GkSHb"
      ],
      "description": [
        {
          "system": "all",
          "text": "Les ennemis subissent -1 pour toucher lorsqu'ils attaquent une unité où toutes les figurines ont cette règle."
        }
      ]
    },
    "Grounded Protection Aura": {
      "title": "Aura de Protection ancree",
      "specialRule": [
        "cJJJPqOuiHWx",
        "uAXC1RxdtELq"
      ],
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>Grounded Protection</key>."
        }
      ]
    },
    "Teleport": {
      "title": "Teleportation",
      "specialRule": [
        "cJJJPqOuiHWx",
        "f78kQxkgtIs1",
        "fLQMyzi3zbFI"
      ],
      "description": [
        {
          "system": "all",
          "text": "Une fois par activation, avant d'attaquer, placez ce modele n'importe ou entierement dans un rayon de 6\" de sa position."
        }
      ]
    },
    "Precise": {
      "title": "Precise",
      "specialRule": [
        "cJJJPqOuiHWx",
        "0zpUZx5GkSHb",
        "p9iL_bzUnY7A",
        "dRAJ8qnYDOxm"
      ],
      "description": [
        {
          "system": "all",
          "text": "Gagne +1 pour toucher lors d'une attaque."
        }
      ]
    },
    "Wild Veil": {
      "title": "Voile sauvage",
      "specialRule": [
        "cJJJPqOuiHWx"
      ],
      "description": [
        {
          "system": "all",
          "text": "Les ennemis subissent -4\" de portee lorsqu'ils tentent de tirer sur des unités dont tous les modeles ont cette règle, et -2\" de mouvement lorsqu'ils tentent de les charger."
        }
      ]
    },
    "Hit & Run Shooter": {
      "title": "Tir en mouvement",
      "specialRule": [
        "cJJJPqOuiHWx",
        "Q7nWXE-8DEHN",
        "iv1Jm6zZiZPJ"
      ],
      "description": [
        {
          "system": "all",
          "text": "Une fois par round, les unités où toutes les figurines possèdent cette règle peuvent se deplacer de 3” ou moins apres avoir tiré."
        }
      ]
    },
    "Piercing Assault Aura": {
      "title": "Aura d'Assaut perforant",
      "specialRule": [
        "cJJJPqOuiHWx",
        "cyQpyja0EDRj",
        "wLKHbRBBr4NI",
        "OyVVPwEw7Uep"
      ],
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>Piercing Assault</key>."
        }
      ]
    },
    "Grounded Protection": {
      "title": "Protection ancree",
      "specialRule": [
        "cJJJPqOuiHWx",
        "uAXC1RxdtELq"
      ],
      "description": [
        {
          "system": "all",
          "text": "Si une unité dont tous les modeles ont cette règle a la majorite de ses modeles a 1\" ou moins d'un terrain, lorsqu'elle subit des blessures lancez un de par blessure, et sur 5+ elle est ignoree."
        }
      ]
    },
    "Unpredictable Shooter Aura": {
      "title": "Aura de Tireur imprevisible",
      "specialRule": [
        "cJJJPqOuiHWx",
        "dRAJ8qnYDOxm"
      ],
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>Unpredictable Shooter</key>."
        }
      ]
    },
    "Hit & Run Shooter Aura": {
      "title": "Aura de Tireur en mouvement",
      "specialRule": [
        "cJJJPqOuiHWx",
        "Q7nWXE-8DEHN",
        "iv1Jm6zZiZPJ"
      ],
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>Tir en mouvement</key>."
        }
      ]
    },
    "Melee Evasion Aura": {
      "title": "Aura d'Esquive en mêlée",
      "specialRule": [
        "cJJJPqOuiHWx",
        "GgMdmXsCVdK2",
        "OyVVPwEw7Uep"
      ],
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>mêlée Evasion</key>."
        }
      ]
    },
    "Wild Veil Boost": {
      "title": "Amplification Voile sauvage",
      "specialRule": [
        "cJJJPqOuiHWx"
      ],
      "description": [
        {
          "system": "all",
          "text": "Si tous les modeles de cette unité ont <key>Wild Veil</key>, les ennemis subissent -8\" de portee en tir contre eux et -4\" de mouvement pour les charger via <key>Wild Veil</key> (au lieu de seulement -4\" et -2\")."
        }
      ]
    },
    "Quick Shot Mark": {
      "title": "Marquage Tir rapide",
      "specialRule": [
        "cJJJPqOuiHWx",
        "cyQpyja0EDRj"
      ],
      "description": [
        {
          "system": "all",
          "text": "Une fois par activation, avant d'attaquer, choisissez une unité ennemie a 18\" ; les unités alliées gagnent <key>Quick Shot</key> contre elle une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Piercing Assault": {
      "title": "Assaut perforant",
      "specialRule": [
        "cJJJPqOuiHWx",
        "uAXC1RxdtELq",
        "cyQpyja0EDRj",
        "wLKHbRBBr4NI",
        "RMi35vAtYNb-",
        "GgMdmXsCVdK2",
        "AiReKTM86F3e",
        "OyVVPwEw7Uep"
      ],
      "description": [
        {
          "system": "all",
          "text": "Cette figurine gagne <key>PA</key>(+1) lorsqu'elle charge."
        }
      ]
    },
    "Wild Veil Boost Aura": {
      "title": "Aura d'Amplification Voile sauvage",
      "specialRule": [
        "cJJJPqOuiHWx"
      ],
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>Wild Veil Boost</key>."
        }
      ]
    },
    "Spawn": {
      "title": "Génération",
      "specialRule": [
        "cJJJPqOuiHWx",
        "f78kQxkgtIs1",
        "iv1Jm6zZiZPJ",
        "cyQpyja0EDRj",
        "SshMejY9Kz7s"
      ],
      "description": [
        {
          "system": "all",
          "text": "Une fois par partie, lorsque cette figurine est activée, vous pouvez placer une nouvelle unité de X entièrement a 6” ou moins de lui."
        }
      ]
    },
    "Pierce": {
      "title": "Perce",
      "specialRule": [
        "cJJJPqOuiHWx"
      ],
      "description": [
        {
          "system": "all",
          "text": "Sur des resultats non modifiés de 6 pour toucher qui ne sont pas bloques, cette arme inflige 1 blessure supplementaire."
        }
      ]
    },
    "Rapid Advance Aura": {
      "title": "Aura d'Avance rapide",
      "specialRule": [
        "cJJJPqOuiHWx",
        "dRAJ8qnYDOxm"
      ],
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>Rapid Advance</key>."
        }
      ]
    },
    "Speed Debuff": {
      "title": "Affaiblissement de vitesse",
      "specialRule": [
        "cJJJPqOuiHWx",
        "SshMejY9Kz7s"
      ],
      "description": [
        {
          "system": "all",
          "text": "Une fois par activation, avant d'attaquer, choisissez une unité ennemie a 18\" ; elle se deplace de -2\" en action Advance et de -4\" en action Rush/Charge une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Unpredictable Shooter": {
      "title": "Tireur imprevisible",
      "specialRule": [
        "cJJJPqOuiHWx",
        "dRAJ8qnYDOxm"
      ],
      "description": [
        {
          "system": "all",
          "text": "Lors d'un tir, lancez un de et appliquez un effet a tous les modeles avec cette règle : sur 1-3 ils gagnent <key>AP</key>(+1), et sur 4-6 ils gagnent +1 pour toucher a la place."
        }
      ]
    },
    "Hit & Run": {
      "title": "Frappe et Repli",
      "specialRule": [
        "cJJJPqOuiHWx",
        "Q7nWXE-8DEHN",
        "iv1Jm6zZiZPJ",
        "cyQpyja0EDRj",
        "wLKHbRBBr4NI"
      ],
      "description": [
        {
          "system": "all",
          "text": "Une fois par round, les unités dont tous les modeles ont cette règle peuvent se deplacer jusqu'à 3\" apres avoir tire ou apres avoir ete en mêlée."
        }
      ]
    },
    "Quick": {
      "title": "Rapide",
      "specialRule": [
        "cJJJPqOuiHWx",
        "uAXC1RxdtELq",
        "cyQpyja0EDRj",
        "GgMdmXsCVdK2",
        "AiReKTM86F3e"
      ],
      "description": [
        {
          "system": "all",
          "text": "Se deplace de +2\" en action Advance, et de +2\" en action Rush/Charge."
        }
      ]
    },
    "Quick Shot": {
      "title": "Tir rapide",
      "specialRule": [
        "cJJJPqOuiHWx",
        "uAXC1RxdtELq",
        "cyQpyja0EDRj",
        "SY80P2vKJGrY",
        "OJr14Si4C1Uj",
        "GgMdmXsCVdK2",
        "oACH5PrePLfv",
        "AiReKTM86F3e"
      ],
      "description": [
        {
          "system": "all",
          "text": "Ce modele peut tirer apres avoir utilise une action Rush."
        }
      ]
    },
    "Rapid Advance": {
      "title": "Avance rapide",
      "specialRule": [
        "cJJJPqOuiHWx",
        "dRAJ8qnYDOxm"
      ],
      "description": [
        {
          "system": "all",
          "text": "Ce modele se deplace de +4\" lorsqu'il utilise une action Advance."
        }
      ]
    },
    "Grounded Reinforcement": {
      "title": "Renforcement ancre",
      "specialRule": [
        "cJJJPqOuiHWx",
        "uAXC1RxdtELq"
      ],
      "description": [
        {
          "system": "all",
          "text": "Si une unité dont tous les modeles ont cette règle a la majorite de ses modeles a 1\" ou moins d'un terrain, elle gagne +1 a ses jets de defense."
        }
      ]
    },
    "Stealth Aura": {
      "title": "Aura de Furtivite",
      "specialRule": [
        "uAXC1RxdtELq",
        "f78kQxkgtIs1",
        "ylxJ4fFb6cZf",
        "AxiZW7zj2hUK"
      ],
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>Furtif</key>."
        }
      ]
    },
    "Swift": {
      "title": "Vif",
      "specialRule": [
        "uAXC1RxdtELq",
        "Q7nWXE-8DEHN",
        "0zpUZx5GkSHb",
        "H18g-ND_uWiZ",
        "fLQMyzi3zbFI",
        "SshMejY9Kz7s"
      ],
      "description": [
        {
          "system": "all",
          "text": "Ce modele peut ignorer la règle <key>Slow</key>."
        }
      ]
    },
    "Takedown Strike": {
      "title": "Frappe de Mise a terre",
      "specialRule": [
        "uAXC1RxdtELq",
        "ylxJ4fFb6cZf",
        "fLQMyzi3zbFI",
        "GgMdmXsCVdK2",
        "dRAJ8qnYDOxm",
        "AiReKTM86F3e",
        "K44UD3HPQAfg"
      ],
      "description": [
        {
          "system": "all",
          "text": "Une fois par partie, quand c'est au tour de ce modele d'attaquer en mêlée, vous pouvez choisir un modele de l'unité comme cible et faire une attaque a Qualite 2+ avec <key>AP</key>(2) et <key>Deadly</key>(3), resolue comme s'il s'agissait d'une unité de 1."
        }
      ]
    },
    "Drakesworn": {
      "title": "Li? aux Drakes",
      "specialRule": [
        "uAXC1RxdtELq"
      ],
      "description": [
        {
          "system": "all",
          "text": "Apres le deploiement de ce modele, il peut être place n'importe ou entierement dans un rayon de 9\" de sa position."
        }
      ]
    },
    "Grounded Reinforcement Aura": {
      "title": "Aura de Renforcement ancre",
      "specialRule": [
        "uAXC1RxdtELq"
      ],
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>Grounded Reinforcement</key>."
        }
      ]
    },
    "Grounded Speed": {
      "title": "Vitesse ancree",
      "specialRule": [
        "uAXC1RxdtELq"
      ],
      "description": [
        {
          "system": "all",
          "text": "Si une unité dont tous les modeles ont cette règle a la majorite de ses modeles a 1\" ou moins d'un terrain lors de son activation, elle se deplace de +2\" en Advance et de +4\" en Rush/Charge pendant cette activation."
        }
      ]
    },
    "Shielded": {
      "title": "Bouclier magique",
      "specialRule": [
        "uAXC1RxdtELq",
        "vhKZ0CIT6dBt",
        "ylxJ4fFb6cZf",
        "SY80P2vKJGrY",
        "RMi35vAtYNb-",
        "x2_Lkyj0JPk2",
        "dRAJ8qnYDOxm"
      ],
      "description": [
        {
          "system": "all",
          "text": "Les unités dont tous les modeles ont cette règle gagnent +1 aux jets de defense contre les touches qui ne proviennent pas de sorts."
        }
      ]
    },
    "Quick Shot Aura": {
      "title": "Aura de Tir rapide",
      "specialRule": [
        "uAXC1RxdtELq",
        "GgMdmXsCVdK2",
        "AiReKTM86F3e"
      ],
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>Quick Shot</key>."
        }
      ]
    },
    "Swift Aura": {
      "title": "Aura de Vif",
      "specialRule": [
        "uAXC1RxdtELq",
        "0zpUZx5GkSHb",
        "H18g-ND_uWiZ",
        "SshMejY9Kz7s"
      ],
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>Swift</key>."
        }
      ]
    },
    "Strider Aura": {
      "title": "Aura de Marcheur",
      "specialRule": [
        "uAXC1RxdtELq",
        "cyQpyja0EDRj",
        "HH7O68qvHVR0"
      ],
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>Strider</key>."
        }
      ]
    },
    "Unstoppable in Melee Aura": {
      "title": "Aura Imparable en mêlée",
      "specialRule": [
        "uAXC1RxdtELq",
        "xw2YHtZNkhIV",
        "AxiZW7zj2hUK",
        "dRAJ8qnYDOxm",
        "56Tb7FFgHuyX"
      ],
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>Imparable</key> en mêlée."
        }
      ]
    },
    "Pulverize": {
      "title": "Pulverisation",
      "specialRule": [
        "uAXC1RxdtELq"
      ],
      "description": [
        {
          "system": "all",
          "text": "Ignore le couvert, et sur des resultats non modifiés de 6 pour toucher, ces touches gagnent <key>AP</key>(+4)."
        }
      ]
    },
    "Piercing Assault Mark": {
      "title": "Marquage d'Assaut perforant",
      "specialRule": [
        "uAXC1RxdtELq",
        "GgMdmXsCVdK2"
      ],
      "description": [
        {
          "system": "all",
          "text": "Une fois par activation, avant d'attaquer, choisissez une unité ennemie a 18\" ; les unités alliées gagnent <key>Piercing Assault</key> contre elle une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Reinforcement": {
      "title": "Renfort",
      "specialRule": [
        "uAXC1RxdtELq",
        "ylxJ4fFb6cZf"
      ],
      "description": [
        {
          "system": "all",
          "text": "Lorsqu'une unité dont tous les modeles ont cette règle est Secouee ou entierement detruite, vous pouvez la retirer de la table comme detruite et placer une nouvelle copie entierement a 12\" de n'importe quel bord de table au debut du round suivant, apres le deploiement des Ambushers. Les unités déployées via <key>Reinforcement</key> ne peuvent pas saisir ou contester des objectifs le round de leur deploiement, et cette règle ne s'applique pas a la nouvelle copie de l'unité."
        }
      ]
    },
    "Hit & Run Fighter": {
      "title": "Combattant Frappe et Repli",
      "specialRule": [
        "uAXC1RxdtELq",
        "cyQpyja0EDRj",
        "wLKHbRBBr4NI"
      ],
      "description": [
        {
          "system": "all",
          "text": "Une fois par round, les unités dont tous les modeles ont cette règle peuvent se deplacer jusqu'à 3\" apres avoir ete en mêlée."
        }
      ]
    },
    "Fast Aura": {
      "title": "Aura de Rapide",
      "specialRule": [
        "f78kQxkgtIs1"
      ],
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité se deplacent de +2\" en action Advance et de +4\" en action Rush/Charge."
        }
      ]
    },
    "Instinctive": {
      "title": "Instinctif",
      "specialRule": [
        "f78kQxkgtIs1",
        "GgMdmXsCVdK2"
      ],
      "description": [
        {
          "system": "all",
          "text": "Quand Cette figurine est active, s'il peut tirer/charger une unité ennemie, il doit immediatement attaquer la cible valide la plus proche et gagne +1 pour toucher pour cette attaque."
        }
      ]
    },
    "No Retreat Aura": {
      "title": "Aura de Sans retraite",
      "specialRule": [
        "f78kQxkgtIs1",
        "0zpUZx5GkSHb",
        "5xPzQn4Qdzz6",
        "aHBBAhsdAqyz",
        "x2_Lkyj0JPk2"
      ],
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>No Retreat</key>."
        }
      ]
    },
    "Infiltrate": {
      "title": "Infiltration",
      "specialRule": [
        "f78kQxkgtIs1",
        "0zpUZx5GkSHb",
        "5xPzQn4Qdzz6",
        "fLQMyzi3zbFI",
        "GgMdmXsCVdK2",
        "AxiZW7zj2hUK",
        "SshMejY9Kz7s"
      ],
      "description": [
        {
          "system": "all",
          "text": "Compte comme ayant <key>Embuscade</key>, mais peut être déployée jusqu'à 1” des unités ennemies."
        }
      ]
    },
    "Shred": {
      "title": "Lacération",
      "specialRule": [
        "f78kQxkgtIs1",
        "Q7nWXE-8DEHN",
        "iv1Jm6zZiZPJ",
        "cyQpyja0EDRj",
        "5xPzQn4Qdzz6",
        "aHBBAhsdAqyz",
        "SY80P2vKJGrY",
        "RMi35vAtYNb-",
        "_k9nd29ZX-FQ",
        "OJr14Si4C1Uj",
        "xw2YHtZNkhIV",
        "ndODzgAqJGDz",
        "GgMdmXsCVdK2",
        "AxiZW7zj2hUK",
        "dRAJ8qnYDOxm",
        "oACH5PrePLfv",
        "HH7O68qvHVR0",
        "OyVVPwEw7Uep",
        "56Tb7FFgHuyX"
      ],
      "description": [
        {
          "system": "all",
          "text": "Sur des résultats non modifiés de 1 pour bloquer, Les touches de cette arme infligent 1 blessure supplémentaire."
        }
      ]
    },
    "Piercing Hunter Aura": {
      "title": "Aura de Chasseur perforant",
      "specialRule": [
        "f78kQxkgtIs1",
        "wLKHbRBBr4NI",
        "aHBBAhsdAqyz"
      ],
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>Piercing Hunter</key>."
        }
      ]
    },
    "Reanimation Aura": {
      "title": "Aura de Reanimation",
      "specialRule": [
        "f78kQxkgtIs1"
      ],
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>Reanimation</key>."
        }
      ]
    },
    "Cursed Undead": {
      "title": "Mort-vivant maudit",
      "specialRule": [
        "f78kQxkgtIs1"
      ],
      "description": [
        {
          "system": "all",
          "text": "Lorsqu'une unité dont tous les modeles ont cette règle subit des blessures, lancez un de pour chacune. Sur 6+, elle est ignoree."
        }
      ]
    },
    "Scout Aura": {
      "title": "Aura d’Éclaireur",
      "specialRule": [
        "f78kQxkgtIs1",
        "5xPzQn4Qdzz6",
        "RMi35vAtYNb-",
        "_k9nd29ZX-FQ",
        "OJr14Si4C1Uj",
        "xw2YHtZNkhIV",
        "ndODzgAqJGDz",
        "x2_Lkyj0JPk2"
      ],
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>Éclaireur</key>."
        }
      ]
    },
    "Surge": {
      "title": "Surcharge",
      "specialRule": [
        "f78kQxkgtIs1",
        "cyQpyja0EDRj",
        "p9iL_bzUnY7A",
        "x2_Lkyj0JPk2",
        "dRAJ8qnYDOxm",
        "OyVVPwEw7Uep"
      ],
      "description": [
        {
          "system": "all",
          "text": "sur les résultats non modifiés de 6 pour toucher, cette arme inflige 1 touche supplémentaire (seule la touche initiale compte pour un 6 en regard des règles spéciales)."
        }
      ]
    },
    "Mind Control": {
      "title": "Controle mental",
      "specialRule": [
        "f78kQxkgtIs1",
        "cyQpyja0EDRj",
        "OyVVPwEw7Uep"
      ],
      "description": [
        {
          "system": "all",
          "text": "Une fois par activation, avant d'attaquer, choisissez une unité ennemie a 18\" ; elle doit faire un test de moral. En cas d'echec, vous pouvez la deplacer jusqu'à 6\" en ligne droite dans n'importe quelle direction."
        }
      ]
    },
    "Morale Debuff": {
      "title": "Affaiblissement du moral",
      "specialRule": [
        "f78kQxkgtIs1",
        "cyQpyja0EDRj",
        "H18g-ND_uWiZ",
        "fLQMyzi3zbFI",
        "OyVVPwEw7Uep"
      ],
      "description": [
        {
          "system": "all",
          "text": "Une fois par activation, avant d'attaquer, choisissez une unité ennemie a 18\" ; elle subit -1 a son prochain test de moral (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Shred in Melee Aura": {
      "title": "Aura de Laceration en mêlée",
      "specialRule": [
        "f78kQxkgtIs1",
        "Q7nWXE-8DEHN",
        "SY80P2vKJGrY"
      ],
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>Lacération</key> en mêlée."
        }
      ]
    },
    "Sever": {
      "title": "Sectionnement",
      "specialRule": [
        "f78kQxkgtIs1"
      ],
      "description": [
        {
          "system": "all",
          "text": "<key>Contre</key> les unités dont la majorite des modeles ont une <key>Defense</key> de 2+ a 4+, cette arme gagne <key>AP</key>(+1)."
        }
      ]
    },
    "Casting Buff": {
      "title": "Amelioration d'incantation",
      "specialRule": [
        "f78kQxkgtIs1"
      ],
      "description": [
        {
          "system": "all",
          "text": "Une fois par activation, avant d'attaquer, choisissez un modele allie a 12\" avec <key>Caster</key> ; il gagne +1 a son prochain jet d'incantation (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Cursed Undead Boost Buff": {
      "title": "Amelioration Mort-vivant maudit",
      "specialRule": [
        "f78kQxkgtIs1"
      ],
      "description": [
        {
          "system": "all",
          "text": "Une fois par activation, avant d'attaquer, choisissez une unité alliee a 12\" ; elle gagne <key>Cursed Undead Boost</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "No Retreat": {
      "title": "Sans retraite",
      "specialRule": [
        "f78kQxkgtIs1",
        "0zpUZx5GkSHb",
        "5xPzQn4Qdzz6",
        "aHBBAhsdAqyz",
        "x2_Lkyj0JPk2"
      ],
      "description": [
        {
          "system": "all",
          "text": "Lorsqu'une unité dont la majorite des modeles a cette règle echoue a un test de moral qui la rendrait Secouee ou Deroutee, le test est considere comme reussi a la place. Puis lancez autant de des que le nombre de blessures necessaires pour la detruire completement ; pour chaque resultat de 1-3, l'unité subit une blessure qui ne peut pas être ignoree."
        }
      ]
    },
    "Piercing Hunter": {
      "title": "Chasseur perforant",
      "specialRule": [
        "f78kQxkgtIs1",
        "wLKHbRBBr4NI",
        "aHBBAhsdAqyz",
        "H18g-ND_uWiZ"
      ],
      "description": [
        {
          "system": "all",
          "text": "Quand ce modele tire sur des ennemis a plus de 9\", ses armes gagnent <key>AP</key>(+1)."
        }
      ]
    },
    "Reanimation": {
      "title": "Reanimation",
      "specialRule": [
        "f78kQxkgtIs1"
      ],
      "description": [
        {
          "system": "all",
          "text": "Lorsqu'une unité dont tous les modeles ont cette règle est activée, lancez autant de des que le nombre max de modeles/blessures qu'elle pourrait restaurer. Pour chaque 5+, vous pouvez restaurer un modele/une blessure. Note : de nouveaux modeles ne peuvent être restaures que s'ils peuvent être places en coherente avec des modeles non restaures."
        }
      ]
    },
    "Cursed Undead Boost": {
      "title": "Amplification Mort-vivant maudit",
      "specialRule": [
        "f78kQxkgtIs1"
      ],
      "description": [
        {
          "system": "all",
          "text": "Si tous les modeles de cette unité ont <key>Cursed Undead</key>, ils ignorent les blessures sur des jets de 5-6 via <key>Cursed Undead</key> (au lieu de seulement sur 6+)."
        }
      ]
    },
    "Buccaneer": {
      "title": "Boucanier",
      "specialRule": [
        "Q7nWXE-8DEHN"
      ],
      "description": [
        {
          "system": "all",
          "text": "Quand ce modele tire sur des ennemis a plus de 9\", il gagne +1 pour toucher."
        }
      ]
    },
    "Crossing Barrage": {
      "title": "Barrage croisé",
      "specialRule": [
        "Q7nWXE-8DEHN",
        "iv1Jm6zZiZPJ",
        "aHBBAhsdAqyz",
        "SY80P2vKJGrY",
        "fLQMyzi3zbFI",
        "GgMdmXsCVdK2",
        "SshMejY9Kz7s",
        "dRAJ8qnYDOxm"
      ],
      "description": [
        {
          "system": "all",
          "text": "Une fois par activation, quand cette figurine traverse des unités ennemies, choisissez-en une et lancez X dés. Pour chaque 4+, elle subit 3 touches avec <key>PA</key>(1)."
        }
      ]
    },
    "Mend": {
      "title": "Guérison",
      "specialRule": [
        "Q7nWXE-8DEHN",
        "iv1Jm6zZiZPJ",
        "5xPzQn4Qdzz6",
        "voFsQwaDph1Y",
        "dRAJ8qnYDOxm"
      ],
      "description": [
        {
          "system": "all",
          "text": "Une fois par activation, avant d'attaquer, choisissez une figurine allie a 3” ou moins avec <key>Coriace</key> et retirez-lui AD3 blessures."
        }
      ]
    },
    "Rending when Shooting Aura": {
      "title": "Aura de Perforant au tir",
      "specialRule": [
        "Q7nWXE-8DEHN",
        "fLQMyzi3zbFI"
      ],
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>Rending</key> en tir."
        }
      ]
    },
    "Resistance Aura": {
      "title": "Aura de Resistance",
      "specialRule": [
        "Q7nWXE-8DEHN",
        "5xPzQn4Qdzz6",
        "xw2YHtZNkhIV",
        "SshMejY9Kz7s",
        "56Tb7FFgHuyX"
      ],
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>Resistance</key>."
        }
      ]
    },
    "Scratch": {
      "title": "Entaille",
      "specialRule": [
        "Q7nWXE-8DEHN"
      ],
      "description": [
        {
          "system": "all",
          "text": "<key>Contre</key> les unités dont la majorite des modeles ont <key>Tough</key>(3) a <key>Tough</key>(9), cette arme gagne <key>AP</key>(+2)."
        }
      ]
    },
    "Versatile Reach": {
      "title": "Portee polyvalente",
      "specialRule": [
        "Q7nWXE-8DEHN"
      ],
      "description": [
        {
          "system": "all",
          "text": "Quand cette unité est activée, choisissez un effet : jusqu'à la fin de l'activation, tous les modeles avec cette règle gagnent soit +4\" de portee en tir, soit +2\" de mouvement en charge."
        }
      ]
    },
    "Buccaneer Boost Aura": {
      "title": "Aura d'Amplification Boucanier",
      "specialRule": [
        "Q7nWXE-8DEHN"
      ],
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>Buccaneer Boost</key>."
        }
      ]
    },
    "Casting Debuff": {
      "title": "Affaiblissement d'incantation",
      "specialRule": [
        "Q7nWXE-8DEHN",
        "xw2YHtZNkhIV",
        "OyVVPwEw7Uep",
        "56Tb7FFgHuyX"
      ],
      "description": [
        {
          "system": "all",
          "text": "Une fois par activation, avant d'attaquer, choisissez une unité ennemie a 18\" avec <key>Caster</key> ; elle subit -1 a son prochain jet d'incantation (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Buccaneer Boost": {
      "title": "Amplification Boucanier",
      "specialRule": [
        "Q7nWXE-8DEHN"
      ],
      "description": [
        {
          "system": "all",
          "text": "Si ce modele a <key>Buccaneer</key>, il gagne toujours +1 pour toucher grace a <key>Buccaneer</key> (au lieu de seulement en tirant a plus de 9\")."
        }
      ]
    },
    "Primal": {
      "title": "Primal",
      "specialRule": [
        "iv1Jm6zZiZPJ"
      ],
      "description": [
        {
          "system": "all",
          "text": "Pour chaque jet non modifié à 6 pour toucher lors d'une attaque, cette figurine peut effectuer +1 attaque avec cette arme. Cette règle ne s'applique pas aux nouvelles attaques générées."
        }
      ]
    },
    "Crossing Strike": {
      "title": "Frappe croisée",
      "specialRule": [
        "iv1Jm6zZiZPJ",
        "aHBBAhsdAqyz"
      ],
      "description": [
        {
          "system": "all",
          "text": "Une fois par partie, durant son activation lorsque cette figurine traverse des unités ennemies, choisissez-en une et lancez X dés. Pour chaque 4+, elle subit 3 touches avec <key>PA</key>(1)."
        }
      ]
    },
    "Protection Feat": {
      "title": "Protection extraordinaire",
      "specialRule": [
        "iv1Jm6zZiZPJ"
      ],
      "description": [
        {
          "system": "all",
          "text": "Une fois par partie, quand une unité où toutes les figurines possèdent cette règle, 1D6 par blessure: sur 4+, elle est ignorée."
        }
      ]
    },
    "Heavy Impact": {
      "title": "Impact lourd",
      "specialRule": [
        "iv1Jm6zZiZPJ",
        "ylxJ4fFb6cZf",
        "fLQMyzi3zbFI",
        "dRAJ8qnYDOxm",
        "HH7O68qvHVR0"
      ],
      "description": [
        {
          "system": "all",
          "text": "Les touches d'<key>Impact</key>(X) de cette figurine gagne <key>PA</key>(1)."
        }
      ]
    },
    "Good Shot": {
      "title": "Bon tireur",
      "specialRule": [
        "iv1Jm6zZiZPJ"
      ],
      "description": [
        {
          "system": "all",
          "text": "Cette figurine gagne +1 pour toucher lorsqu'elle tir."
        }
      ]
    },
    "Rapid Charge Aura": {
      "title": "Aura de Charge véloce",
      "specialRule": [
        "iv1Jm6zZiZPJ",
        "vhKZ0CIT6dBt",
        "RMi35vAtYNb-",
        "GgMdmXsCVdK2",
        "AiReKTM86F3e"
      ],
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité se déplacent de +4” ou moins lors d'une Charge."
        }
      ]
    },
    "Rending in Melee Aura": {
      "title": "Aura de Perforation en mêlée",
      "specialRule": [
        "iv1Jm6zZiZPJ",
        "tKa31SeqrzS1",
        "_k9nd29ZX-FQ",
        "SshMejY9Kz7s"
      ],
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>Perforant</key> en mêlée."
        }
      ]
    },
    "Bounding": {
      "title": "Bond",
      "specialRule": [
        "iv1Jm6zZiZPJ",
        "voFsQwaDph1Y",
        "xw2YHtZNkhIV",
        "fLQMyzi3zbFI",
        "GgMdmXsCVdK2",
        "p9iL_bzUnY7A",
        "56Tb7FFgHuyX"
      ],
      "description": [
        {
          "system": "all",
          "text": "Quand cette unité est activée, vous pouvez placer toutes les figurines possédant cette règle n'importe où dans un rayon de D3+1” autour de leur position."
        }
      ]
    },
    "Disintegrate": {
      "title": "Désintegration",
      "specialRule": [
        "iv1Jm6zZiZPJ"
      ],
      "description": [
        {
          "system": "all",
          "text": "Ignore la Régénération, et contre les unités dont la majorité des figurines ont une Défense de 2+ à 3+, cette arme gagne <key>PA</key>(+2)."
        }
      ]
    },
    "Shred Mark": {
      "title": "Marquage de Lacération",
      "specialRule": [
        "iv1Jm6zZiZPJ"
      ],
      "description": [
        {
          "system": "all",
          "text": "Une fois par activation, avant d'attaquer, choisissez une unité ennemie a 18” ou moins, les unités alliées gagnent <key>Lacération</key> contre elle pour une attaque (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Primal Boost Buff": {
      "title": "Bonus de Boost de Primal",
      "specialRule": [
        "iv1Jm6zZiZPJ"
      ],
      "description": [
        {
          "system": "all",
          "text": "Une fois par activation, avant d'attaquer, choisissez une unité alliée a 12” ou moins, elle gagne <key>Boost de Primal</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Ignores Regeneration": {
      "title": "Ignore Regeneration",
      "specialRule": [
        "iv1Jm6zZiZPJ",
        "vhKZ0CIT6dBt",
        "tKa31SeqrzS1",
        "cyQpyja0EDRj",
        "aHBBAhsdAqyz",
        "RMi35vAtYNb-",
        "_k9nd29ZX-FQ",
        "H18g-ND_uWiZ",
        "AxiZW7zj2hUK",
        "SshMejY9Kz7s",
        "HH7O68qvHVR0",
        "K44UD3HPQAfg"
      ],
      "description": [
        {
          "system": "all",
          "text": "Cette arme ignore la Régénération."
        }
      ]
    },
    "Primal Boost": {
      "title": "Boost de Primal",
      "specialRule": [
        "iv1Jm6zZiZPJ"
      ],
      "description": [
        {
          "system": "all",
          "text": "Si cette figurine possède <key>Primal</key>, elle obtient des attaques supplementaires sur les touches non modifiées de 5-6 via <key>Primal</key> (au lieu de seulement sur 6)."
        }
      ]
    },
    "Steadfast": {
      "title": "Inébranlable",
      "specialRule": [
        "iv1Jm6zZiZPJ",
        "tKa31SeqrzS1",
        "RMi35vAtYNb-",
        "_k9nd29ZX-FQ",
        "OJr14Si4C1Uj",
        "xw2YHtZNkhIV",
        "ndODzgAqJGDz",
        "H18g-ND_uWiZ",
        "dRAJ8qnYDOxm"
      ],
      "description": [
        {
          "system": "all",
          "text": "Si une unité où toutes les figurines possèdent cette règle est Ébranlée au debut du round, 1D6: Sur 4+, elle cesse d'être Ébranlée."
        }
      ]
    },
    "Storm of War": {
      "title": "Tempete de guerre",
      "specialRule": [
        "vhKZ0CIT6dBt",
        "RMi35vAtYNb-"
      ],
      "description": [
        {
          "system": "all",
          "text": "Une fois par partie, lorsque Cette figurine est active, avant d'attaquer, lancez 3 des. Pour chaque 2+, une unité ennemie a 12\" subit 3 touches avec <key>AP</key>(1)."
        }
      ]
    },
    "Crush": {
      "title": "Ecrasement",
      "specialRule": [
        "vhKZ0CIT6dBt",
        "RMi35vAtYNb-",
        "OyVVPwEw7Uep"
      ],
      "description": [
        {
          "system": "all",
          "text": "Quand c'est au tour de ce modele d'attaquer en mêlée, lancez X des. Pour chaque 6+, la cible subit une touche avec <key>AP</key>(2)."
        }
      ]
    },
    "Warbound Boost Aura": {
      "title": "Aura de Boost de Guerrier-né",
      "specialRule": [
        "vhKZ0CIT6dBt",
        "RMi35vAtYNb-"
      ],
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>Boost de Guerrier-né</key>."
        }
      ]
    },
    "Warbound Boost": {
      "title": "Boost de Guerrier-né",
      "specialRule": [
        "vhKZ0CIT6dBt",
        "RMi35vAtYNb-"
      ],
      "description": [
        {
          "system": "all",
          "text": "Si cette figurine a <key>Guerrier-né</key>, les ennemis qui subissent des blessures de sa part, subiront des blessures supplémentaires pour chaque défense échouée à 1-2 via <key>Guerrier-né</key> (au lieu de seulement 1)."
        }
      ]
    },
    "Ambush Aura": {
      "title": "Aura d'Embuscade",
      "specialRule": [
        "vhKZ0CIT6dBt",
        "tKa31SeqrzS1",
        "cyQpyja0EDRj",
        "ylxJ4fFb6cZf",
        "RMi35vAtYNb-",
        "_k9nd29ZX-FQ",
        "xw2YHtZNkhIV",
        "AiReKTM86F3e",
        "OyVVPwEw7Uep",
        "56Tb7FFgHuyX"
      ],
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>Ambush</key>."
        }
      ]
    },
    "Warbound": {
      "title": "Guerrier-né",
      "specialRule": [
        "vhKZ0CIT6dBt",
        "RMi35vAtYNb-",
        "p9iL_bzUnY7A"
      ],
      "description": [
        {
          "system": "all",
          "text": "les ennemis qui lancent les dés pour bloquer les touches infligées par les armes de cette figurine subissent une blessure supplémentaire pour chaque résultat non modifié de 1 obtenu."
        }
      ]
    },
    "Destructive Frenzy": {
      "title": "Frénésie destructrice",
      "specialRule": [
        "vhKZ0CIT6dBt",
        "RMi35vAtYNb-"
      ],
      "description": [
        {
          "system": "all",
          "text": "Placez un marqueur sur cette unité lorsqu'elle detruit completement une unité ennemie. Pour chaque marqueur, tous les modeles avec cette règle dans cette unité gagnent +1 pour toucher et <key>AP</key>(+1) jusqu'à la fin de la partie (max +2)."
        }
      ]
    },
    "Piercing Shooter Aura": {
      "title": "Aura de Tireur perforant",
      "specialRule": [
        "vhKZ0CIT6dBt",
        "RMi35vAtYNb-"
      ],
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>AP</key>(+1) en tir."
        }
      ]
    },
    "Furious Aura": {
      "title": "Aura de Furieux",
      "specialRule": [
        "vhKZ0CIT6dBt",
        "aHBBAhsdAqyz",
        "RMi35vAtYNb-",
        "HH7O68qvHVR0",
        "OyVVPwEw7Uep"
      ],
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>Furious</key>."
        }
      ]
    },
    "Rapid Charge": {
      "title": "Charge rapide",
      "specialRule": [
        "vhKZ0CIT6dBt",
        "RMi35vAtYNb-",
        "SshMejY9Kz7s"
      ],
      "description": [
        {
          "system": "all",
          "text": "Ce modele se deplace de +4\" lorsqu'il utilise des actions Charge."
        }
      ]
    },
    "Shielded Aura": {
      "title": "Aura de Bouclier magique",
      "specialRule": [
        "vhKZ0CIT6dBt",
        "SY80P2vKJGrY",
        "RMi35vAtYNb-",
        "x2_Lkyj0JPk2"
      ],
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>Shielded</key>."
        }
      ]
    },
    "Piercing Fighter Aura": {
      "title": "Aura de Combattant perforant",
      "specialRule": [
        "vhKZ0CIT6dBt",
        "RMi35vAtYNb-"
      ],
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>AP</key>(+1) en mêlée."
        }
      ]
    },
    "Fatigue Debuff": {
      "title": "Affaiblissement de Fatigue",
      "specialRule": [
        "vhKZ0CIT6dBt",
        "RMi35vAtYNb-"
      ],
      "description": [
        {
          "system": "all",
          "text": "Une fois par activation, avant d'attaquer, choisissez une unité ennemie a 18\" ; elle doit effectuer un test de moral. En cas d'echec, elle devient fatiguee."
        }
      ]
    },
    "Break": {
      "title": "Dislocation",
      "specialRule": [
        "vhKZ0CIT6dBt",
        "RMi35vAtYNb-"
      ],
      "description": [
        {
          "system": "all",
          "text": "Ignore la Régénération, et sur des resultats non modifiés de 6 pour toucher, les touches gagnent <key>AP</key>(+2)."
        }
      ]
    },
    "Reckless Piercing Aura": {
      "title": "Aura de Percee temeraire",
      "specialRule": [
        "vhKZ0CIT6dBt",
        "RMi35vAtYNb-"
      ],
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>Reckless Piercing</key>."
        }
      ]
    },
    "Reckless Piercing": {
      "title": "Percee temeraire",
      "specialRule": [
        "vhKZ0CIT6dBt",
        "RMi35vAtYNb-"
      ],
      "description": [
        {
          "system": "all",
          "text": "Quand une unité dont tous les modeles ont cette règle est activée, vous pouvez lancer un de. Sur 2+, elle gagne <key>AP</key>(+1) lorsqu'elle attaque jusqu'à la fin du round ; sur 1, les unités ennemies gagnent <key>AP</key>(+1) lorsqu'elles l'attaquent a la place."
        }
      ]
    },
    "Storm of Plague": {
      "title": "Tempete de peste",
      "specialRule": [
        "tKa31SeqrzS1",
        "_k9nd29ZX-FQ"
      ],
      "description": [
        {
          "system": "all",
          "text": "Une fois par partie, lorsque Cette figurine est active, avant d'attaquer, lancez 3 des. Pour chaque 2+, une unité ennemie a 12\" subit 3 touches avec <key>Bane</key>."
        }
      ]
    },
    "Plaguebound": {
      "title": "Lie a la peste",
      "specialRule": [
        "tKa31SeqrzS1",
        "_k9nd29ZX-FQ",
        "p9iL_bzUnY7A"
      ],
      "description": [
        {
          "system": "all",
          "text": "Lorsqu'une unité dont tous les modeles ont cette règle subit des blessures, lancez un de pour chacune. Sur 6+, elle est ignoree."
        }
      ]
    },
    "Plaguebound Boost": {
      "title": "Amplification Lie a la peste",
      "specialRule": [
        "tKa31SeqrzS1",
        "_k9nd29ZX-FQ"
      ],
      "description": [
        {
          "system": "all",
          "text": "Si tous les modeles de cette unité ont <key>Plaguebound</key>, ils ignorent les blessures sur des jets de 5-6 via <key>Plaguebound</key> (au lieu de seulement sur 6+)."
        }
      ]
    },
    "Relentless Aura": {
      "title": "Aura d'Implacable",
      "specialRule": [
        "tKa31SeqrzS1",
        "0zpUZx5GkSHb",
        "SY80P2vKJGrY",
        "_k9nd29ZX-FQ",
        "x2_Lkyj0JPk2",
        "SshMejY9Kz7s"
      ],
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>Relentless</key>."
        }
      ]
    },
    "Regeneration Aura": {
      "title": "Aura de Regeneration",
      "specialRule": [
        "tKa31SeqrzS1",
        "0zpUZx5GkSHb",
        "voFsQwaDph1Y",
        "_k9nd29ZX-FQ",
        "fLQMyzi3zbFI"
      ],
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent la Régénération."
        }
      ]
    },
    "Precision Attacks Buff": {
      "title": "Amelioration Attaques de precision",
      "specialRule": [
        "tKa31SeqrzS1",
        "_k9nd29ZX-FQ"
      ],
      "description": [
        {
          "system": "all",
          "text": "Une fois par activation, avant d'attaquer, choisissez une unité alliee a 12\" ; elle gagne +1 pour toucher lorsqu'elle attaque une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Fortified Growth": {
      "title": "Croissance fortifiee",
      "specialRule": [
        "tKa31SeqrzS1",
        "_k9nd29ZX-FQ"
      ],
      "description": [
        {
          "system": "all",
          "text": "Placez un marqueur sur cette unité a la fin de chaque round si elle est sur la table. Si tous ses modeles ont cette règle, pour chaque marqueur les ennemis qui les attaquent gagnent <key>AP</key>(-1), jusqu'à un minimum de <key>AP</key>(0) (max -2). Si cette unité est Secouee, elle perd tous ses marqueurs."
        }
      ]
    },
    "Steadfast Aura": {
      "title": "Aura d'Inebranlable",
      "specialRule": [
        "tKa31SeqrzS1",
        "_k9nd29ZX-FQ"
      ],
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>Inébranlable</key>."
        }
      ]
    },
    "Butcher": {
      "title": "Boucher",
      "specialRule": [
        "tKa31SeqrzS1",
        "_k9nd29ZX-FQ"
      ],
      "description": [
        {
          "system": "all",
          "text": "Ignore la Régénération, et sur des resultats non modifiés de 6 pour toucher, cette arme inflige 1 touche supplementaire (seule la touche d'origine compte comme un 6 pour les règles speciales)."
        }
      ]
    },
    "Plaguebound Boost Aura": {
      "title": "Aura d'Amplification Lie a la peste",
      "specialRule": [
        "tKa31SeqrzS1",
        "_k9nd29ZX-FQ"
      ],
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>Plaguebound Boost</key>."
        }
      ]
    },
    "Rending in Melee": {
      "title": "Perforant en mêlée",
      "specialRule": [
        "tKa31SeqrzS1",
        "_k9nd29ZX-FQ",
        "fLQMyzi3zbFI"
      ],
      "description": [
        {
          "system": "all",
          "text": "Ce modele gagne <key>Rending</key> en mêlée."
        }
      ]
    },
    "Difficult Terrain Debuff": {
      "title": "Affaiblissement Terrain difficile",
      "specialRule": [
        "tKa31SeqrzS1",
        "5xPzQn4Qdzz6",
        "_k9nd29ZX-FQ"
      ],
      "description": [
        {
          "system": "all",
          "text": "Une fois par activation, avant d'attaquer, choisissez une unité ennemie a 18\" ; elle compte comme etant en terrain difficile une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Retaliate": {
      "title": "Riposte",
      "description": [
        {
          "system": "all",
          "text": "Quand ce modele subit une blessure en mêlée, l'attaquant subit X touches."
        }
      ],
      "specialRule": [
        "cyQpyja0EDRj",
        "oACH5PrePLfv"
      ]
    },
    "Hit & Run Fighter Aura": {
      "title": "Aura de Combattant Eclair",
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent Combattant Eclair."
        }
      ],
      "specialRule": [
        "cyQpyja0EDRj",
        "wLKHbRBBr4NI"
      ]
    },
    "Storm of Lust": {
      "title": "Tempete de Luxure",
      "description": [
        {
          "system": "all",
          "text": "Une fois par partie, quand Cette figurine est active, avant d'attaquer, lancez 3 des. Pour chaque 2+, une unité ennemie a 12\" subit 3 touches avec <key>Surge</key> (lancez un de par touche pour voir si l'effet se declenche)."
        }
      ],
      "specialRule": [
        "cyQpyja0EDRj"
      ]
    },
    "Lustbound Boost": {
      "title": "Renforcement Lie a la Luxure",
      "description": [
        {
          "system": "all",
          "text": "Si ce modele a <key>Lie a la Luxure</key>, il se deplace de +2\" en Avance et +6\" en Rush/Charge grace a cette règle (au lieu de seulement +1\" et +3\")."
        }
      ],
      "specialRule": [
        "cyQpyja0EDRj",
        "OJr14Si4C1Uj"
      ]
    },
    "Lustbound": {
      "title": "Lie a la Luxure",
      "description": [
        {
          "system": "all",
          "text": "Se deplace de +1\" avec Avance, et de +3\" avec Rush/Charge."
        }
      ],
      "specialRule": [
        "cyQpyja0EDRj",
        "OJr14Si4C1Uj",
        "p9iL_bzUnY7A"
      ]
    },
    "Shatter": {
      "title": "Fracasse",
      "description": [
        {
          "system": "all",
          "text": "Ignore la Régénération et, contre les unités dont la majorite des modeles ont <key>Tough</key>(3) a <key>Tough</key>(9), cette arme gagne <key>AP</key>(+2)."
        }
      ],
      "specialRule": [
        "cyQpyja0EDRj",
        "OJr14Si4C1Uj"
      ]
    },
    "Unstoppable when Shooting Aura": {
      "title": "Aura d'Inarretable au Tir",
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent Inarretable au tir."
        }
      ],
      "specialRule": [
        "cyQpyja0EDRj",
        "K44UD3HPQAfg"
      ]
    },
    "Lustbound Boost Aura": {
      "title": "Aura de Renforcement Lie a la Luxure",
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>Renforcement Lie a la Luxure</key>."
        }
      ],
      "specialRule": [
        "cyQpyja0EDRj",
        "OJr14Si4C1Uj"
      ]
    },
    "Hazardous": {
      "title": "Dangereux",
      "description": [
        {
          "system": "all",
          "text": "Obtient <key>AP</key>(4), mais l'unité de ce modele subit une blessure sur un resultat non modifié de 1 pour toucher."
        }
      ],
      "specialRule": [
        "ylxJ4fFb6cZf"
      ]
    },
    "Quick Readjustment": {
      "title": "Reajustement Rapide",
      "description": [
        {
          "system": "all",
          "text": "Ce modele ignore les penalites de tir apres mouvement lorsqu'il utilise des armes Indirectes."
        }
      ],
      "specialRule": [
        "ylxJ4fFb6cZf"
      ]
    },
    "Spell Conduit": {
      "title": "Conduit de Sort",
      "description": [
        {
          "system": "all",
          "text": "Les Lanceurs de sorts d'autres unités alliées a 12\" peuvent lancer des sorts comme s'ils etaient a la position de ce modele, et gagnent +1 aux jets de lancement en le faisant."
        }
      ],
      "specialRule": [
        "ylxJ4fFb6cZf",
        "aHBBAhsdAqyz",
        "SY80P2vKJGrY",
        "H18g-ND_uWiZ"
      ]
    },
    "Precision Fighter Aura": {
      "title": "Aura de Combattant de Precision",
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent +1 aux jets pour toucher en mêlée."
        }
      ],
      "specialRule": [
        "ylxJ4fFb6cZf",
        "fLQMyzi3zbFI"
      ]
    },
    "Evasive Aura": {
      "title": "Aura d'Evasion",
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>Evasive</key>."
        }
      ],
      "specialRule": [
        "ylxJ4fFb6cZf",
        "0zpUZx5GkSHb"
      ]
    },
    "Scurry": {
      "title": "Detale",
      "description": [
        {
          "system": "all",
          "text": "Se deplace de +2\" avec Avance, et de +2\" avec Rush/Charge."
        }
      ],
      "specialRule": [
        "ylxJ4fFb6cZf"
      ]
    },
    "Defense Debuff": {
      "title": "Affaiblissement de Defense",
      "description": [
        {
          "system": "all",
          "text": "Une fois par activation, avant d'attaquer, choisissez une unité ennemie a 18\"; elle subit -1 aux jets de defense une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ],
      "specialRule": [
        "ylxJ4fFb6cZf"
      ]
    },
    "Bane when Shooting Aura": {
      "title": "Aura de Fléau au Tir",
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>Fléau au tir</key>."
        }
      ],
      "specialRule": [
        "ylxJ4fFb6cZf",
        "AxiZW7zj2hUK"
      ]
    },
    "Bane in Melee Aura": {
      "title": "Aura de Fleau en mêlée",
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>Fleau en mêlée</key>."
        }
      ],
      "specialRule": [
        "ylxJ4fFb6cZf",
        "0zpUZx5GkSHb",
        "5xPzQn4Qdzz6",
        "oACH5PrePLfv"
      ]
    },
    "Scurry Boost Aura": {
      "title": "Aura de Renforcement de Detale",
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>Renforcement de Detale</key>."
        }
      ],
      "specialRule": [
        "ylxJ4fFb6cZf"
      ]
    },
    "Precision Fighter Buff": {
      "title": "Bonus de Combattant precis",
      "description": [
        {
          "system": "all",
          "text": "Une fois par activation, avant d'attaquer, choisissez une unité alliée a 12” ou moins, elle gagne +1 aux jets pour sa prochaine touche en mélée (la prochaine fois que l'effet s'appliquerait)."
        }
      ],
      "specialRule": [
        "ylxJ4fFb6cZf",
        "voFsQwaDph1Y",
        "RMi35vAtYNb-",
        "_k9nd29ZX-FQ",
        "OJr14Si4C1Uj",
        "xw2YHtZNkhIV",
        "ndODzgAqJGDz",
        "GgMdmXsCVdK2",
        "AiReKTM86F3e"
      ]
    },
    "Scurry Boost": {
      "title": "Renforcement de Detale",
      "description": [
        {
          "system": "all",
          "text": "Si ce modele a <key>Detale</key>, il se deplace de +4\" en Avance et +4\" en Rush/Charge grace a <key>Detale</key> (au lieu de seulement +2\" et +2\")."
        }
      ],
      "specialRule": [
        "ylxJ4fFb6cZf"
      ]
    },
    "Ossified": {
      "title": "Ossifie",
      "description": [
        {
          "system": "all",
          "text": "Quand des unités dont tous les modeles ont cette règle sont prises pour cible par des tirs ou des charges a plus de 9\" et subissent des touches, ces touches comptent comme ayant <key>AP</key>(-1), jusqu'à un minimum de <key>AP</key>(0)."
        }
      ],
      "specialRule": [
        "0zpUZx5GkSHb"
      ]
    },
    "Destructive": {
      "title": "Destructeur",
      "description": [
        {
          "system": "all",
          "text": "Sur des resultats non modifiés de 6 pour toucher, ces touches gagnent <key>AP</key>(+4)."
        }
      ],
      "specialRule": [
        "0zpUZx5GkSHb"
      ]
    },
    "Spell Accumulator": {
      "title": "Accumulateur de Sorts",
      "description": [
        {
          "system": "all",
          "text": "Recoit X jetons d'accumulation au debut de chaque round, sans pouvoir en conserver plus de 6 a la fois. Les Lanceurs d'autres unités alliées a 12\" peuvent depenser les jetons d'accumulation de ce modele comme s'ils etaient leurs propres jetons de sort."
        }
      ],
      "specialRule": [
        "0zpUZx5GkSHb",
        "xw2YHtZNkhIV",
        "oACH5PrePLfv",
        "56Tb7FFgHuyX"
      ]
    },
    "Precision Feat": {
      "title": "Exploit de Precision",
      "description": [
        {
          "system": "all",
          "text": "Une fois par partie, quand cette unité attaque et que tous ses modeles ont cette règle, vous pouvez utiliser cette règle pour obtenir +2 aux jets pour toucher."
        }
      ],
      "specialRule": [
        "0zpUZx5GkSHb",
        "x2_Lkyj0JPk2"
      ]
    },
    "Mobile Artillery": {
      "title": "Artillerie Mobile",
      "description": [
        {
          "system": "all",
          "text": "Quand ce modele utilise une action Hold et tire sur des ennemis a plus de 9\", il gagne +1 aux jets pour toucher. Tant que ce modele n'a pas bouge pendant le round, quand des unités ennemies lui tirent dessus a plus de 9\", elles subissent -2 aux jets pour toucher."
        }
      ],
      "specialRule": [
        "0zpUZx5GkSHb"
      ]
    },
    "Piercing Shooter": {
      "title": "Tireur Perforant",
      "description": [
        {
          "system": "all",
          "text": "Ce modele gagne <key>AP</key>(+1) au tir."
        }
      ],
      "specialRule": [
        "0zpUZx5GkSHb",
        "HH7O68qvHVR0"
      ]
    },
    "Precision Feat Aura": {
      "title": "Aura d'Exploit de Precision",
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>Exploit de Precision</key>."
        }
      ],
      "specialRule": [
        "0zpUZx5GkSHb",
        "x2_Lkyj0JPk2"
      ]
    },
    "Furious Mark": {
      "title": "Marque de Furie",
      "description": [
        {
          "system": "all",
          "text": "Une fois par activation, avant d'attaquer, choisissez une unité ennemie a 18\" ; les unités alliées gagnent <key>Furieux</key> contre elle une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ],
      "specialRule": [
        "0zpUZx5GkSHb"
      ]
    },
    "Ossified Boost Aura": {
      "title": "Aura de Renforcement Ossifie",
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>Renforcement Ossifie</key>."
        }
      ],
      "specialRule": [
        "0zpUZx5GkSHb"
      ]
    },
    "Regeneration Buff": {
      "title": "Amelioration de Regeneration",
      "description": [
        {
          "system": "all",
          "text": "Une fois par activation, avant d'attaquer, choisissez une unité alliée a 12\" ; elle gagne Régénération une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ],
      "specialRule": [
        "0zpUZx5GkSHb"
      ]
    },
    "Ossified Boost": {
      "title": "Renforcement Ossifie",
      "description": [
        {
          "system": "all",
          "text": "Si tous les modeles de cette unité ont <key>Ossifie</key>, les touches ennemies comptent toujours comme ayant <key>AP</key>(-1) grace a <key>Ossifie</key> (au lieu de s'appliquer seulement contre les tirs/charges a plus de 9\")."
        }
      ],
      "specialRule": [
        "0zpUZx5GkSHb"
      ]
    },
    "Melee Shrouding Aura": {
      "title": "Aura de Voile de mêlée",
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>Voile de mêlée</key>."
        }
      ],
      "specialRule": [
        "wLKHbRBBr4NI",
        "H18g-ND_uWiZ",
        "AiReKTM86F3e",
        "HH7O68qvHVR0"
      ]
    },
    "Ferocious": {
      "title": "Ferocite",
      "description": [
        {
          "system": "all",
          "text": "Lorsqu'il attaque, un resultat non modifié de 6 pour toucher inflige 1 touche supplementaire (seule la touche d'origine compte comme un 6 pour les règles speciales)."
        }
      ],
      "specialRule": [
        "wLKHbRBBr4NI"
      ]
    },
    "Ferocious Boost Aura": {
      "title": "Aura de Renforcement Ferocite",
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>Renforcement Ferocite</key>."
        }
      ],
      "specialRule": [
        "wLKHbRBBr4NI"
      ]
    },
    "Ravage Aura": {
      "title": "Aura de Saccage",
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent Saccage(+1)."
        }
      ],
      "specialRule": [
        "wLKHbRBBr4NI"
      ]
    },
    "Speed Feat Aura": {
      "title": "Aura d'Exploit de Vitesse",
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>Exploit de Vitesse</key>."
        }
      ],
      "specialRule": [
        "wLKHbRBBr4NI"
      ]
    },
    "Impale": {
      "title": "Empalement",
      "description": [
        {
          "system": "all",
          "text": "<key>Contre</key> les unités dont la majorite des modeles ont <key>Tough</key>(3) a <key>Tough</key>(9), cette arme gagne <key>Deadly</key>(+3)."
        }
      ],
      "specialRule": [
        "wLKHbRBBr4NI"
      ]
    },
    "Rending in Melee Mark": {
      "title": "Marque de Dechiquetage en mêlée",
      "description": [
        {
          "system": "all",
          "text": "Une fois par activation, avant d'attaquer, choisissez une unité ennemie a 18\" ; les unités alliées gagnent Dechiquetage en mêlée contre elle une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ],
      "specialRule": [
        "wLKHbRBBr4NI"
      ]
    },
    "Piercing Assault Buff": {
      "title": "Bonus d'Assaut Perforant",
      "description": [
        {
          "system": "all",
          "text": "Une fois par activation, avant d'attaquer, choisissez une unité alliée a 12\" ; elle gagne Assaut <key>Perforant</key>."
        }
      ],
      "specialRule": [
        "wLKHbRBBr4NI",
        "AiReKTM86F3e"
      ]
    },
    "Melee Shrouding": {
      "title": "Voile de mêlée",
      "description": [
        {
          "system": "all",
          "text": "Les ennemis subissent -3\" de mouvement lorsqu'ils tentent de charger des unités dont tous les modeles ont cette règle."
        }
      ],
      "specialRule": [
        "wLKHbRBBr4NI",
        "H18g-ND_uWiZ",
        "AiReKTM86F3e",
        "HH7O68qvHVR0"
      ]
    },
    "Ferocious Boost": {
      "title": "Renforcement Ferocite",
      "description": [
        {
          "system": "all",
          "text": "Si ce modele a <key>Ferocite</key>, il inflige des touches supplementaires sur des resultats non modifiés reussis de 5-6 pour toucher grace a <key>Ferocite</key> (au lieu de seulement 6)."
        }
      ],
      "specialRule": [
        "wLKHbRBBr4NI"
      ]
    },
    "Speed Feat": {
      "title": "Exploit de Vitesse",
      "description": [
        {
          "system": "all",
          "text": "Une fois par partie, quand cette unité se deplace et que tous ses modeles ont cette règle, vous pouvez utiliser cette règle pour qu'ils gagnent +3\" avec Avance et +6\" avec Rush/Charge."
        }
      ],
      "specialRule": [
        "wLKHbRBBr4NI"
      ]
    },
    "Piercing Spotter": {
      "title": "Observateur Perforant",
      "description": [
        {
          "system": "all",
          "text": "Une fois par activation, choisissez une unité ennemie a 36\" et en ligne de vue de ce modele, puis lancez un de ; sur 4+, placez-y un marqueur. Lors d'une attaque, les unités alliées peuvent retirer des marqueurs de leur cible avant les jets de blocage pour obtenir +<key>AP</key>(X), ou X est le nombre de marqueurs retires."
        }
      ],
      "specialRule": [
        "5xPzQn4Qdzz6"
      ]
    },
    "Royal Legion": {
      "title": "Legion Royale",
      "description": [
        {
          "system": "all",
          "text": "Ce modele gagne +3\" de portee au tir et se deplace de +3\" lorsqu'il utilise des actions de Charge."
        }
      ],
      "specialRule": [
        "5xPzQn4Qdzz6"
      ]
    },
    "Perforate": {
      "title": "Perforation",
      "description": [
        {
          "system": "all",
          "text": "Ignore Couvert et, sur des resultats non modifiés de 6 pour toucher qui ne sont pas bloques, cette arme inflige 1 blessure supplementaire."
        }
      ],
      "specialRule": [
        "5xPzQn4Qdzz6"
      ]
    },
    "Royal Legion Boost Aura": {
      "title": "Aura de Renforcement de Legion Royale",
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>Renforcement de Legion Royale</key>."
        }
      ],
      "specialRule": [
        "5xPzQn4Qdzz6"
      ]
    },
    "Fortified Aura": {
      "title": "Aura de Fortification",
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>Fortifie</key>."
        }
      ],
      "specialRule": [
        "5xPzQn4Qdzz6",
        "aHBBAhsdAqyz",
        "dRAJ8qnYDOxm",
        "K44UD3HPQAfg"
      ]
    },
    "Indirect when Shooting Aura": {
      "title": "Aura de Tir Indirect",
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>Indirect</key> au tir."
        }
      ],
      "specialRule": [
        "5xPzQn4Qdzz6",
        "xw2YHtZNkhIV",
        "56Tb7FFgHuyX"
      ]
    },
    "Surprise Attack": {
      "title": "Attaque Surprise",
      "description": [
        {
          "system": "all",
          "text": "Compte comme ayant <key>Infiltrate</key>. Une fois déployée via cette règle, lancez X des ; pour chaque 4+, une unité ennemie a 3\" subit 2 touches avec <key>AP</key>(1)."
        }
      ],
      "specialRule": [
        "5xPzQn4Qdzz6",
        "fLQMyzi3zbFI",
        "GgMdmXsCVdK2"
      ]
    },
    "Royal Legion Boost": {
      "title": "Renforcement de Legion Royale",
      "description": [
        {
          "system": "all",
          "text": "Si ce modele a <key>Legion Royale</key>, il gagne +6\" de portee au tir et se deplace de +6\" lorsqu'il utilise des actions de Charge grace a <key>Legion Royale</key> (au lieu de seulement +3\" et +3\")."
        }
      ],
      "specialRule": [
        "5xPzQn4Qdzz6"
      ]
    },
    "Deathstrike": {
      "title": "Frappe Mortelle",
      "description": [
        {
          "system": "all",
          "text": "Si Cette figurine est tue en mêlée, l'unité attaquante subit X touches."
        }
      ],
      "specialRule": [
        "aHBBAhsdAqyz"
      ]
    },
    "Angelic Blessing": {
      "title": "Benediction Angelique",
      "description": [
        {
          "system": "all",
          "text": "Quand une unité dont tous les modeles ont cette règle subit des blessures, lancez un de par blessure. Sur 6+, elle est ignoree. Si les blessures proviennent d'un sort, elles sont ignorees sur 4+ a la place."
        }
      ],
      "specialRule": [
        "aHBBAhsdAqyz"
      ]
    },
    "Precision Debuff": {
      "title": "Affaiblissement de Precision",
      "description": [
        {
          "system": "all",
          "text": "Une fois par activation, avant d'attaquer, choisissez une unité ennemie a 18\" ; elle subit -1 aux jets pour toucher lors d'une attaque une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ],
      "specialRule": [
        "aHBBAhsdAqyz",
        "SY80P2vKJGrY",
        "oACH5PrePLfv"
      ]
    },
    "Chop": {
      "title": "Decoupe",
      "description": [
        {
          "system": "all",
          "text": "Ignore Régénération et, contre les unités dont la majorite des modeles ont <key>Tough</key>(3) a <key>Tough</key>(9), cette arme gagne <key>Deadly</key>(+3)."
        }
      ],
      "specialRule": [
        "aHBBAhsdAqyz"
      ]
    },
    "Slayer Mark": {
      "title": "Marque de Tueur",
      "description": [
        {
          "system": "all",
          "text": "Une fois par activation, avant d'attaquer, choisissez une unité ennemie a 18\" ; les unités alliées gagnent <key>Tueur</key> contre elle une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ],
      "specialRule": [
        "aHBBAhsdAqyz"
      ]
    },
    "Angelic Blessing Boost Buff": {
      "title": "Bonus de Renforcement de Benediction Angelique",
      "description": [
        {
          "system": "all",
          "text": "Une fois par activation, avant d'attaquer, choisissez une unité alliée a 12\" ; elle gagne <key>Renforcement de Benediction Angelique</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ],
      "specialRule": [
        "aHBBAhsdAqyz"
      ]
    },
    "Versatile Attack Buff": {
      "title": "Bonus d'Attaque Polyvalente",
      "description": [
        {
          "system": "all",
          "text": "Une fois par activation, avant d'attaquer, choisissez une unité alliée a 12\" ; elle gagne <key>Attaque Polyvalente</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ],
      "specialRule": [
        "aHBBAhsdAqyz"
      ]
    },
    "Slayer": {
      "title": "Tueur",
      "description": [
        {
          "system": "all",
          "text": "Les armes de ce modele gagnent <key>AP</key>(+2) contre les unités dont la majorite des modeles ont <key>Tough</key>(3) ou plus."
        }
      ],
      "specialRule": [
        "aHBBAhsdAqyz",
        "H18g-ND_uWiZ",
        "dRAJ8qnYDOxm",
        "HH7O68qvHVR0"
      ]
    },
    "Angelic Blessing Boost": {
      "title": "Renforcement de Benediction Angelique",
      "description": [
        {
          "system": "all",
          "text": "Si tous les modeles de cette unité ont <key>Benediction Angelique</key>, ils ignorent les blessures non magiques sur 5-6 grace a <key>Benediction Angelique</key> (au lieu de seulement 6+)."
        }
      ],
      "specialRule": [
        "aHBBAhsdAqyz"
      ]
    },
    "Versatile Attack": {
      "title": "Attaque versatile",
      "description": [
        {
          "system": "all",
          "text": "Quand cette unité est activée, choisissez un effet : jusqu'à la fin de l'activation, toutes les figurines de l'unité avec cette règle gagnent soit <key>PA</key>(+1), soit +1 aux jets pour toucher."
        }
      ],
      "specialRule": [
        "aHBBAhsdAqyz",
        "RMi35vAtYNb-",
        "_k9nd29ZX-FQ",
        "OJr14Si4C1Uj",
        "xw2YHtZNkhIV",
        "ndODzgAqJGDz",
        "HH7O68qvHVR0"
      ]
    },
    "Defense Buff": {
      "title": "Bonus de Defense",
      "description": [
        {
          "system": "all",
          "text": "Une fois par activation, avant d'attaquer, choisissez une unité alliée a 12\" ; elle gagne +1 aux jets de defense une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ],
      "specialRule": [
        "voFsQwaDph1Y"
      ]
    },
    "Coordinate": {
      "title": "Coordination",
      "description": [
        {
          "system": "all",
          "text": "A la fin de l'activation de cette unité, une autre unité alliée a 12\" qui n'a pas encore ete activée peut être activée immediatement. Ne peut pas être utilise si cette unité a ete activée via <key>Coordination</key>."
        }
      ],
      "specialRule": [
        "voFsQwaDph1Y"
      ]
    },
    "Extended Buff Range": {
      "title": "Portee de Bonus Etendue",
      "description": [
        {
          "system": "all",
          "text": "Si cette unité est a 24\" d'une autre unité alliée avec cette règle contenant un <key>Hero</key>, alors ce <key>Hero</key> peut utiliser ses règles speciales qui ciblent des unités alliées a 12\" (sauf les sorts) sur cette unité comme si elle etait a portee."
        }
      ],
      "specialRule": [
        "voFsQwaDph1Y"
      ]
    },
    "Hold the Line": {
      "title": "Tenir la Ligne",
      "description": [
        {
          "system": "all",
          "text": "Les unités dont tous les modeles ont cette règle gagnent +1 aux tests de moral."
        }
      ],
      "specialRule": [
        "voFsQwaDph1Y"
      ]
    },
    "Rapid Rush Buff": {
      "title": "Bonus de Rush Rapide",
      "description": [
        {
          "system": "all",
          "text": "Une fois par activation, avant d'attaquer, choisissez une unité alliée a 12\" ; elle gagne Rush <key>Rapide</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ],
      "specialRule": [
        "voFsQwaDph1Y"
      ]
    },
    "Fracture": {
      "title": "Fracture",
      "description": [
        {
          "system": "all",
          "text": "Ignore Couvert et, sur des resultats non modifiés de 6 pour toucher, ces touches gagnent <key>AP</key>(+2)."
        }
      ],
      "specialRule": [
        "voFsQwaDph1Y"
      ]
    },
    "Precision Fighting Mark": {
      "title": "Marque de Precision en mêlée",
      "description": [
        {
          "system": "all",
          "text": "Une fois par activation, avant d'attaquer, choisissez une unité ennemie a 18\" ; les unités alliées gagnent +1 aux jets pour toucher en mêlée contre elle une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ],
      "specialRule": [
        "voFsQwaDph1Y"
      ]
    },
    "Precision Shooter Buff": {
      "title": "Bonus de Tireur de Precision",
      "description": [
        {
          "system": "all",
          "text": "Une fois par activation, avant d'attaquer, choisissez une unité alliée a 12\" ; elle gagne +1 aux jets pour toucher au tir une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ],
      "specialRule": [
        "voFsQwaDph1Y"
      ]
    },
    "Hold the Line Boost Buff": {
      "title": "Bonus de Renforcement Tenir la Ligne",
      "description": [
        {
          "system": "all",
          "text": "Une fois par activation, avant d'attaquer, choisissez une unité alliée a 12\" ; elle gagne <key>Renforcement Tenir la Ligne</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ],
      "specialRule": [
        "voFsQwaDph1Y"
      ]
    },
    "Furious Buff": {
      "title": "Bonus de Furieux",
      "description": [
        {
          "system": "all",
          "text": "Une fois par activation, avant d'attaquer, choisissez une unité alliée a 12\" ; elle gagne <key>Furieux</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ],
      "specialRule": [
        "voFsQwaDph1Y",
        "HH7O68qvHVR0"
      ]
    },
    "Re-Position Artillery": {
      "title": "Repositionnement d'Artillerie",
      "description": [
        {
          "system": "all",
          "text": "Une fois par activation, choisissez une figurine alliée à 6” ou moins avec <key>Artillery</key>, elle pourra immédiatement se déplacer à 9” ou moins."
        }
      ],
      "specialRule": [
        "voFsQwaDph1Y",
        "AxiZW7zj2hUK",
        "SshMejY9Kz7s",
        "dRAJ8qnYDOxm"
      ]
    },
    "Caster Group": {
      "title": "Groupe de Lanceurs",
      "description": [
        {
          "system": "all",
          "text": "Choisissez un modele avec cette règle dans cette unité pour avoir <key>Caster</key>(X), ou X est le nombre total de modeles avec cette règle dans cette unité. Si Cette figurine est tue, choisissez-en un autre comme nouveau lanceur et transferez-lui tous les jetons de sort. Le lanceur perd tous ses jetons de sort non depenses a la fin du round."
        }
      ],
      "specialRule": [
        "voFsQwaDph1Y",
        "GgMdmXsCVdK2"
      ]
    },
    "Hold the Line Boost": {
      "title": "Renforcement Tenir la Ligne",
      "description": [
        {
          "system": "all",
          "text": "Si tous les modeles de cette unité ont <key>Tenir la Ligne</key>, ils gagnent +2 aux tests de moral grace a <key>Tenir la Ligne</key> (au lieu de seulement +1)."
        }
      ],
      "specialRule": [
        "voFsQwaDph1Y"
      ]
    },
    "Piercing Tag": {
      "title": "Marquage Perforant",
      "description": [
        {
          "system": "all",
          "text": "Une fois par partie, pendant l'activation de ce modele, choisissez une unité ennemie a 36\" et en ligne de vue, puis placez X marqueurs sur elle. Lors d'une attaque, les unités alliées peuvent retirer des marqueurs de leur cible avant les jets de blocage pour obtenir +<key>AP</key>(Y), ou Y est le nombre de marqueurs retires."
        }
      ],
      "specialRule": [
        "SY80P2vKJGrY"
      ]
    },
    "Highborn": {
      "title": "Noble",
      "description": [
        {
          "system": "all",
          "text": "Se deplace de +2\" avec Avance, et de +2\" avec Rush/Charge."
        }
      ],
      "specialRule": [
        "SY80P2vKJGrY"
      ]
    },
    "Fearless Aura": {
      "title": "Aura d'Intr?pide",
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>Fearless</key>."
        }
      ],
      "specialRule": [
        "SY80P2vKJGrY",
        "xw2YHtZNkhIV",
        "oACH5PrePLfv",
        "56Tb7FFgHuyX"
      ]
    },
    "Indirect when Shooting": {
      "title": "Indirect au Tir",
      "description": [
        {
          "system": "all",
          "text": "Ce modele gagne <key>Indirect</key> au tir."
        }
      ],
      "specialRule": [
        "SY80P2vKJGrY"
      ]
    },
    "Precision Shooting Mark": {
      "title": "Marque de Precision au Tir",
      "description": [
        {
          "system": "all",
          "text": "Une fois par activation, avant d'attaquer, choisissez une unité ennemie a 18\" ; les unités alliées gagnent +1 aux jets pour toucher au tir contre elle une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ],
      "specialRule": [
        "SY80P2vKJGrY",
        "dRAJ8qnYDOxm"
      ]
    },
    "Crack": {
      "title": "Fissure",
      "description": [
        {
          "system": "all",
          "text": "Sur des resultats non modifiés de 6 pour toucher, ces touches gagnent <key>AP</key>(+2)."
        }
      ],
      "specialRule": [
        "SY80P2vKJGrY"
      ]
    },
    "Highborn Boost Aura": {
      "title": "Aura de Renforcement Noble",
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>Renforcement Noble</key>."
        }
      ],
      "specialRule": [
        "SY80P2vKJGrY"
      ]
    },
    "Highborn Boost": {
      "title": "Renforcement Noble",
      "description": [
        {
          "system": "all",
          "text": "Si ce modele a <key>Noble</key>, il se deplace de +4\" en Avance et +4\" en Rush/Charge grace a <key>Noble</key> (au lieu de seulement +2\" et +2\")."
        }
      ],
      "specialRule": [
        "SY80P2vKJGrY"
      ]
    },
    "Bloodthirsty Fighter": {
      "title": "Combattant sanguinaire",
      "description": [
        {
          "system": "all",
          "text": "pour chaque résultat de 1 non modifié obtenu par les ennemis lorsqu'ils bloquent les touches portées par les armes de cette figurine en mêlée, cette figurine peut effectuer un jet d'attaque supplémentaire avec cette arme. Cette règle ne s'applique pas aux nouvelles attaques générées."
        }
      ],
      "specialRule": [
        "RMi35vAtYNb-"
      ]
    },
    "Slam": {
      "title": "Éclatement",
      "description": [
        {
          "system": "all",
          "text": "Ignore les Couverts et, sur des resultats non modifiés de 1 pour bloquer, cette arme inflige 1 blessure supplementaire."
        }
      ],
      "specialRule": [
        "RMi35vAtYNb-",
        "_k9nd29ZX-FQ",
        "OJr14Si4C1Uj",
        "xw2YHtZNkhIV",
        "ndODzgAqJGDz"
      ]
    },
    "Versatile Defense Aura": {
      "title": "Aura de Défense versatile",
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>Défense versatile</key>."
        }
      ],
      "specialRule": [
        "RMi35vAtYNb-",
        "_k9nd29ZX-FQ",
        "OJr14Si4C1Uj",
        "xw2YHtZNkhIV",
        "ndODzgAqJGDz",
        "H18g-ND_uWiZ"
      ]
    },
    "Shred when Shooting Aura": {
      "title": "Aura de Dechiquetage au Tir",
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent Dechiquetage au tir."
        }
      ],
      "specialRule": [
        "RMi35vAtYNb-",
        "_k9nd29ZX-FQ",
        "OJr14Si4C1Uj",
        "xw2YHtZNkhIV",
        "ndODzgAqJGDz",
        "oACH5PrePLfv"
      ]
    },
    "Unpredictable Fighter Aura": {
      "title": "Aura de Combattant Imprévisible",
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>Combattant Imprévisible</key>."
        }
      ],
      "specialRule": [
        "RMi35vAtYNb-",
        "_k9nd29ZX-FQ",
        "OJr14Si4C1Uj",
        "xw2YHtZNkhIV",
        "ndODzgAqJGDz",
        "x2_Lkyj0JPk2",
        "K44UD3HPQAfg"
      ]
    },
    "Ranged Shrouding Aura": {
      "title": "Aura de Voile fluctuant",
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>Voile fluctuant</key>."
        }
      ],
      "specialRule": [
        "RMi35vAtYNb-",
        "_k9nd29ZX-FQ",
        "OJr14Si4C1Uj",
        "xw2YHtZNkhIV",
        "ndODzgAqJGDz",
        "oACH5PrePLfv"
      ]
    },
    "Shred in Melee": {
      "title": "Dechiquetage en mêlée",
      "description": [
        {
          "system": "all",
          "text": "Ce modele gagne Dechiquetage en mêlée."
        }
      ],
      "specialRule": [
        "RMi35vAtYNb-",
        "_k9nd29ZX-FQ",
        "OJr14Si4C1Uj",
        "xw2YHtZNkhIV",
        "ndODzgAqJGDz",
        "GgMdmXsCVdK2",
        "OyVVPwEw7Uep"
      ]
    },
    "Steadfast Buff": {
      "title": "Bonus d’Inébranlable",
      "description": [
        {
          "system": "all",
          "text": "Une fois par activation, avant d'attaquer, choisissez une unité alliée a  12” ou moins, elle gagne <key>Inébranlable</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ],
      "specialRule": [
        "RMi35vAtYNb-",
        "_k9nd29ZX-FQ",
        "OJr14Si4C1Uj",
        "xw2YHtZNkhIV",
        "ndODzgAqJGDz",
        "H18g-ND_uWiZ"
      ]
    },
    "Versatile Defense": {
      "title": "Défense versatile",
      "description": [
        {
          "system": "all",
          "text": "Quand une unité où toutes les figurines possèdent cette règle est déployée ou activée, choisissez un effet jusqu'à la prochaine activation: lorsqu'elle est prise pour cible par un tir ou une charge a plus de 9”, l'unité gagne soit +1 aux jets de défense, soit les unités ennemies subissent -1 aux tests de touche contre elle."
        }
      ],
      "specialRule": [
        "RMi35vAtYNb-",
        "_k9nd29ZX-FQ",
        "OJr14Si4C1Uj",
        "xw2YHtZNkhIV",
        "ndODzgAqJGDz",
        "H18g-ND_uWiZ"
      ]
    },
    "Ranged Shrouding": {
      "title": "Voile fluctuant",
      "description": [
        {
          "system": "all",
          "text": "Les ennemis ont -6” de portee lorsqu'ils tentent de tirer sur des unités où toutes les figurines possèdent cette règle."
        }
      ],
      "specialRule": [
        "RMi35vAtYNb-",
        "_k9nd29ZX-FQ",
        "OJr14Si4C1Uj",
        "xw2YHtZNkhIV",
        "ndODzgAqJGDz",
        "oACH5PrePLfv"
      ]
    },
    "Great Sergeant": {
      "title": "Grand Sergent",
      "description": [
        {
          "system": "all",
          "text": "Quand ce modele attaque, les resultats non modifiés de 5-6 pour toucher infligent 1 touche supplementaire (seule la touche d'origine compte comme un 6 pour les règles speciales)."
        }
      ],
      "specialRule": [
        "_k9nd29ZX-FQ",
        "K44UD3HPQAfg"
      ]
    },
    "Great Musician": {
      "title": "Grand Musicien",
      "description": [
        {
          "system": "all",
          "text": "Une fois par activation, avant d'attaquer, choisissez une unité alliée a 12\" ; elle se deplace de +1\" lors d'une action de mouvement une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ],
      "specialRule": [
        "_k9nd29ZX-FQ",
        "K44UD3HPQAfg"
      ]
    },
    "Great Banner": {
      "title": "Grande Banniere",
      "description": [
        {
          "system": "all",
          "text": "Une fois par activation, avant d'attaquer, choisissez une unité alliée a 12\" ; elle gagne +1 aux tests de moral une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ],
      "specialRule": [
        "_k9nd29ZX-FQ",
        "K44UD3HPQAfg"
      ]
    },
    "Changebound": {
      "title": "Lie au Changement",
      "description": [
        {
          "system": "all",
          "text": "Quand des unités dont tous les modeles ont cette règle sont prises pour cible par des tirs ou des charges a plus de 9\", les unités ennemies subissent -1 aux jets pour toucher."
        }
      ],
      "specialRule": [
        "xw2YHtZNkhIV",
        "p9iL_bzUnY7A",
        "56Tb7FFgHuyX"
      ]
    },
    "Changebound Boost Aura": {
      "title": "Aura de Renforcement Lie au Changement",
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>Renforcement Lie au Changement</key>."
        }
      ],
      "specialRule": [
        "xw2YHtZNkhIV",
        "56Tb7FFgHuyX"
      ]
    },
    "Changebound Boost": {
      "title": "Renforcement Lie au Changement",
      "description": [
        {
          "system": "all",
          "text": "Si tous les modeles de cette unité ont <key>Lie au Changement</key>, les ennemis qui les attaquent subissent toujours -1 aux jets pour toucher grace a <key>Lie au Changement</key> (au lieu de s'appliquer seulement contre les tirs/charges a plus de 9\")."
        }
      ],
      "specialRule": [
        "xw2YHtZNkhIV",
        "56Tb7FFgHuyX"
      ]
    },
    "Slash": {
      "title": "Entaille",
      "description": [
        {
          "system": "all",
          "text": "Ignore Couvert et, sur des resultats non modifiés de 6 pour toucher, cette arme inflige 1 touche supplementaire (seule la touche d'origine compte comme un 6 pour les règles speciales)."
        }
      ],
      "specialRule": [
        "xw2YHtZNkhIV",
        "56Tb7FFgHuyX"
      ]
    },
    "Bane when Shooting": {
      "title": "Fleau au Tir",
      "description": [
        {
          "system": "all",
          "text": "Ce modele gagne Fleau au tir."
        }
      ],
      "specialRule": [
        "xw2YHtZNkhIV",
        "56Tb7FFgHuyX"
      ]
    },
    "Storm of Change": {
      "title": "Tempete du Changement",
      "description": [
        {
          "system": "all",
          "text": "Une fois par partie, quand Cette figurine est active, avant d'attaquer, lancez 3 des. Pour chaque 2+, une unité ennemie a 12\" subit 3 touches avec Dechiquetage."
        }
      ],
      "specialRule": [
        "xw2YHtZNkhIV",
        "56Tb7FFgHuyX"
      ]
    },
    "Unstoppable in Melee": {
      "title": "Inarretable en mêlée",
      "description": [
        {
          "system": "all",
          "text": "Ce modele gagne Inarretable en mêlée."
        }
      ],
      "specialRule": [
        "xw2YHtZNkhIV",
        "56Tb7FFgHuyX"
      ]
    },
    "Split": {
      "title": "Scission",
      "description": [
        {
          "system": "all",
          "text": "Quand cette unité est entierement detruite, vous pouvez placer une nouvelle unité de X entierement a 6\" avant de retirer le dernier modele."
        }
      ],
      "specialRule": [
        "xw2YHtZNkhIV",
        "56Tb7FFgHuyX"
      ]
    },
    "Bounding Aura": {
      "title": "Aura de Bond",
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>Bond</key>."
        }
      ],
      "specialRule": [
        "xw2YHtZNkhIV",
        "56Tb7FFgHuyX"
      ]
    },
    "Havocbound Boost Aura": {
      "title": "Aura de Renforcement Lie au Chaos",
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>Renforcement Lie au Chaos</key>."
        }
      ],
      "specialRule": [
        "ndODzgAqJGDz",
        "H18g-ND_uWiZ"
      ]
    },
    "Havocbound": {
      "title": "Lie au Chaos",
      "description": [
        {
          "system": "all",
          "text": "Quand ce modele tire sur des ennemis a plus de 9\" ou lorsqu'il charge, ses armes gagnent <key>AP</key>(+1)."
        }
      ],
      "specialRule": [
        "ndODzgAqJGDz",
        "H18g-ND_uWiZ"
      ]
    },
    "Dangerous Terrain Debuff": {
      "title": "Affaiblissement de Terrain Dangereux",
      "description": [
        {
          "system": "all",
          "text": "Une fois par activation, avant d'attaquer, choisissez une unité ennemie a 18\" ; elle doit immediatement effectuer un test de Terrain <key>Dangereux</key>."
        }
      ],
      "specialRule": [
        "ndODzgAqJGDz"
      ]
    },
    "Havocbound Boost": {
      "title": "Renforcement Lie au Chaos",
      "description": [
        {
          "system": "all",
          "text": "Si ce modele a <key>Lie au Chaos</key>, il gagne toujours <key>AP</key>(+1) grace a <key>Lie au Chaos</key> (au lieu de s'appliquer seulement au tir a plus de 9\" ou en charge)."
        }
      ],
      "specialRule": [
        "ndODzgAqJGDz",
        "H18g-ND_uWiZ"
      ]
    },
    "Melee Slayer Aura": {
      "title": "Aura de Tueur en mêlée",
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>Tueur</key> en mêlée."
        }
      ],
      "specialRule": [
        "H18g-ND_uWiZ"
      ]
    },
    "Relentless Mark": {
      "title": "Marque d'Implacable",
      "description": [
        {
          "system": "all",
          "text": "Une fois par activation, avant d'attaquer, choisissez une unité ennemie a 18\" ; les unités alliées gagnent <key>Implacable</key> contre elle une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ],
      "specialRule": [
        "H18g-ND_uWiZ"
      ]
    },
    "Purge": {
      "title": "Purge",
      "description": [
        {
          "system": "all",
          "text": "Ignore la Régénération et, contre les unités dont la majorite des modeles ont <key>Defense</key> 2+ a <key>Defense</key> 4+, cette arme gagne <key>AP</key>(+1)."
        }
      ],
      "specialRule": [
        "H18g-ND_uWiZ"
      ]
    },
    "Lucky": {
      "title": "Chanceux",
      "description": [
        {
          "system": "all",
          "text": "Quand ce modele attaque, les resultats non modifiés de 6 pour toucher infligent 1 touche supplementaire (seule la touche d'origine compte comme un 6 pour les règles speciales)."
        }
      ],
      "specialRule": [
        "fLQMyzi3zbFI"
      ]
    },
    "Teleport Aura": {
      "title": "Aura de Teleportation",
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>Teleport</key>."
        }
      ],
      "specialRule": [
        "fLQMyzi3zbFI"
      ]
    },
    "Lucky Boost Aura": {
      "title": "Aura de Renforcement Chanceux",
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>Renforcement Chanceux</key>."
        }
      ],
      "specialRule": [
        "fLQMyzi3zbFI"
      ]
    },
    "Vengeance": {
      "title": "Vengeance",
      "description": [
        {
          "system": "all",
          "text": "Quand cette unité est entierement detruite, placez autant de marqueurs <key>Vengeance</key> sur l'unité qui l'a detruite qu'il y avait de modeles avec cette règle dans cette unité au debut de la partie. Les unités alliées gagnent +X aux jets pour toucher avec leurs armes contre cette unité, ou X est le nombre de marqueurs sur elle."
        }
      ],
      "specialRule": [
        "fLQMyzi3zbFI"
      ]
    },
    "Bash": {
      "title": "Fracasser",
      "description": [
        {
          "system": "all",
          "text": "Ignore Couvert et, contre les unités dont la majorite des modeles ont <key>Defense</key> 5+ a <key>Defense</key> 6+, cette arme gagne <key>Blast</key>(+3)."
        }
      ],
      "specialRule": [
        "fLQMyzi3zbFI"
      ]
    },
    "Lucky Boost": {
      "title": "Renforcement Chanceux",
      "description": [
        {
          "system": "all",
          "text": "Si ce modele a <key>Chanceux</key>, il inflige des touches supplementaires sur des resultats non modifiés reussis de 5-6 pour toucher grace a <key>Chanceux</key> (au lieu de seulement 6)."
        }
      ],
      "specialRule": [
        "fLQMyzi3zbFI"
      ]
    },
    "Mischievous": {
      "title": "Malicieux",
      "description": [
        {
          "system": "all",
          "text": "Lors d'une attaque, les cibles doivent relancer les resultats de <key>Defense</key> non modifiés de 6 lorsqu'elles bloquent des touches d'armes de ce modele."
        }
      ],
      "specialRule": [
        "GgMdmXsCVdK2"
      ]
    },
    "Traversal": {
      "title": "Traversee",
      "description": [
        {
          "system": "all",
          "text": "Peut se deplacer a travers les unités alliées et ennemies."
        }
      ],
      "specialRule": [
        "GgMdmXsCVdK2",
        "x2_Lkyj0JPk2"
      ]
    },
    "Mischievous Boost Aura": {
      "title": "Aura de Renforcement Malicieux",
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>Renforcement Malicieux</key>."
        }
      ],
      "specialRule": [
        "GgMdmXsCVdK2"
      ]
    },
    "Skewer": {
      "title": "Empaler",
      "description": [
        {
          "system": "all",
          "text": "Ignore Couvert et, contre les unités dont la majorite des modeles ont <key>Tough</key>(3) a <key>Tough</key>(9), cette arme gagne <key>Deadly</key>(+3)."
        }
      ],
      "specialRule": [
        "GgMdmXsCVdK2"
      ]
    },
    "Mischievous Boost": {
      "title": "Renforcement Malicieux",
      "description": [
        {
          "system": "all",
          "text": "Si ce modele a <key>Malicieux</key>, les ennemis qui subissent des touches de sa part doivent relancer les resultats de defense non modifiés reussis de 5-6 grace a <key>Malicieux</key> (au lieu de seulement 6)."
        }
      ],
      "specialRule": [
        "GgMdmXsCVdK2"
      ]
    },
    "Unmovable": {
      "title": "Immobile",
      "description": [
        {
          "system": "all",
          "text": "Si une unité dont tous les modeles ont cette règle est Secouee au debut du round, lancez un de. Sur 4+, elle cesse d'être Secouee."
        }
      ],
      "specialRule": [
        "p9iL_bzUnY7A"
      ]
    },
    "Delayed Action": {
      "title": "Action Retardee",
      "description": [
        {
          "system": "all",
          "text": "Une fois par round, si votre adversaire a plus d'unités restant a activer que vous, l'unité de ce modele peut passer son tour au lieu de s'activer (elle pourra toujours être activée plus tard)."
        }
      ],
      "specialRule": [
        "p9iL_bzUnY7A"
      ]
    },
    "Crossing Attack": {
      "title": "Attaque de Traversee",
      "description": [
        {
          "system": "all",
          "text": "Une fois par activation, quand ce modele traverse des unités ennemies, choisissez-en une et lancez X des. Pour chaque 6+, elle subit 1 touche."
        }
      ],
      "specialRule": [
        "x2_Lkyj0JPk2"
      ]
    },
    "Empyrean Spirit": {
      "title": "Esprit Empyreen",
      "description": [
        {
          "system": "all",
          "text": "Quand des unités dont tous les modeles ont cette règle sont prises pour cible par des tirs ou des charges a plus de 9\", les unités ennemies subissent -1 aux jets pour toucher."
        }
      ],
      "specialRule": [
        "x2_Lkyj0JPk2"
      ]
    },
    "Empyrean Spirit Boost Aura": {
      "title": "Aura de Renforcement d'Esprit Empyreen",
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>Renforcement d'Esprit Empyreen</key>."
        }
      ],
      "specialRule": [
        "x2_Lkyj0JPk2"
      ]
    },
    "Reap": {
      "title": "Moisson",
      "description": [
        {
          "system": "all",
          "text": "<key>Contre</key> les unités dont la majorite des modeles ont <key>Defense</key> 2+ a <key>Defense</key> 3+, cette arme gagne <key>AP</key>(+2)."
        }
      ],
      "specialRule": [
        "x2_Lkyj0JPk2"
      ]
    },
    "Bane Mark": {
      "title": "Marque de Fleau",
      "description": [
        {
          "system": "all",
          "text": "Une fois par activation, avant d'attaquer, choisissez une unité ennemie a 18\" ; les unités alliées gagnent Fleau lorsqu'elles l'attaquent une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ],
      "specialRule": [
        "x2_Lkyj0JPk2"
      ]
    },
    "Empyrean Spirit Boost": {
      "title": "Renforcement d'Esprit Empyreen",
      "description": [
        {
          "system": "all",
          "text": "Si tous les modeles de cette unité ont <key>Esprit Empyreen</key>, les ennemis qui les attaquent subissent toujours -1 aux jets pour toucher grace a <key>Esprit Empyreen</key> (au lieu de s'appliquer seulement contre les tirs/charges a plus de 9\")."
        }
      ],
      "specialRule": [
        "x2_Lkyj0JPk2"
      ]
    },
    "Piercing Target": {
      "title": "Perforation de la cible",
      "description": [
        {
          "system": "all",
          "text": "Une fois par partie, pendant l'activation de cette figurine, choisissez une unité ennemie à 36” ou moins, et en ligne de vue, puis placez X marqueurs sur elle. Les unités alliées gagnent <key>AP</key>(+X) lorsqu'elles l'attaquent."
        }
      ],
      "specialRule": [
        "AxiZW7zj2hUK"
      ]
    },
    "Re-Deployment": {
      "title": "Redéploiement",
      "description": [
        {
          "system": "all",
          "text": "Une fois toutes les autres unités déployées (hors unités mises de côté), vous pouvez retirer jusqu'à deux unités alliées de la table et les redéployer. Les joueurs placeront les unités avec Redéploiement, en suivant l'ordre d'activation."
        }
      ],
      "specialRule": [
        "AxiZW7zj2hUK"
      ]
    },
    "Warden Boost Aura": {
      "title": "Aura de Boost de Gardien",
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>Boost de Gardien</key>."
        }
      ],
      "specialRule": [
        "AxiZW7zj2hUK"
      ]
    },
    "Smash": {
      "title": "Fracas",
      "description": [
        {
          "system": "all",
          "text": "Ignore la Régénération et, contre les unités dont la majorité des figurines ont Défense de 5+ ou 6+, cette arme gagne <key>Explosion</key>(3)."
        }
      ],
      "specialRule": [
        "AxiZW7zj2hUK"
      ]
    },
    "Unstoppable Shooting Mark": {
      "title": "Marque de tir Imparable",
      "description": [
        {
          "system": "all",
          "text": "Une fois par activation, avant d'attaquer, choisissez une unité ennemie a  18” ou moins, les unités alliées gagnent <key>Imparable</key> lors du prochain tir (la prochaine fois que l'effet s'appliquerait)."
        }
      ],
      "specialRule": [
        "AxiZW7zj2hUK"
      ]
    },
    "Warden Boost": {
      "title": "Boost de Gardien",
      "description": [
        {
          "system": "all",
          "text": "Si toutes les figurines de cette unité possèdent <key>Gardien</key>, les touches ennemies comptent toujours comme ayant <key>AP</key>(-1) grace à <key>Gardien</key> (au lieu de s'appliquer seulement contre les tirs/charges a plus de 9”)."
        }
      ],
      "specialRule": [
        "AxiZW7zj2hUK"
      ]
    },
    "Sturdy": {
      "title": "Coriace",
      "description": [
        {
          "system": "all",
          "text": "Quand des unités dont tous les modeles ont cette règle sont prises pour cible par des tirs ou des charges a plus de 9\", elles gagnent +1 aux jets de defense."
        }
      ],
      "specialRule": [
        "SshMejY9Kz7s"
      ]
    },
    "Quake": {
      "title": "Secousse",
      "description": [
        {
          "system": "all",
          "text": "Ignore la Régénération et, sur des resultats non modifiés de 1 pour bloquer des touches, cette arme inflige 1 blessure supplementaire."
        }
      ],
      "specialRule": [
        "SshMejY9Kz7s"
      ]
    },
    "Devastating Frenzy": {
      "title": "Fr?n?sie Devastatrice",
      "description": [
        {
          "system": "all",
          "text": "Placez un marqueur sur cette unité lorsqu'elle detruit entierement une unité ennemie. Pour chaque marqueur, tous les modeles avec cette règle dans cette unité gagnent <key>AP</key>(+1) et +1 aux jets de defense jusqu'à la fin de la partie (maximum +2)."
        }
      ],
      "specialRule": [
        "SshMejY9Kz7s"
      ]
    },
    "Precision Charge Aura": {
      "title": "Aura de Charge Precise",
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent +1 aux jets pour toucher lorsqu'ils chargent."
        }
      ],
      "specialRule": [
        "SshMejY9Kz7s"
      ]
    },
    "Sturdy Boost Aura": {
      "title": "Aura de Renforcement Coriace",
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>Renforcement Coriace</key>."
        }
      ],
      "specialRule": [
        "SshMejY9Kz7s"
      ]
    },
    "Sturdy Boost": {
      "title": "Renforcement Coriace",
      "description": [
        {
          "system": "all",
          "text": "Si tous les modeles de cette unité ont <key>Coriace</key>, ils gagnent toujours +1 aux jets de defense grace a <key>Coriace</key> (au lieu de s'appliquer seulement contre les tirs/charges a plus de 9\")."
        }
      ],
      "specialRule": [
        "SshMejY9Kz7s"
      ]
    },
    "Vinci Tech": {
      "title": "Tech Vinci",
      "description": [
        {
          "system": "all",
          "text": "Quand cette unité est activée, choisissez un effet : jusqu'à la fin de l'activation, tous les modeles avec cette règle gagnent soit <key>AP</key>(+1) en attaque, soit +1 aux jets pour toucher en attaque."
        }
      ],
      "specialRule": [
        "dRAJ8qnYDOxm"
      ]
    },
    "Protected": {
      "title": "Protege",
      "description": [
        {
          "system": "all",
          "text": "Quand une unité dont tous les modeles ont cette règle subit des blessures, lancez un de par blessure. Sur 6+, elle est ignoree."
        }
      ],
      "specialRule": [
        "dRAJ8qnYDOxm"
      ]
    },
    "Ranged Slayer Aura": {
      "title": "Aura de Tueur a Distance",
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>Tueur a Distance</key>."
        }
      ],
      "specialRule": [
        "dRAJ8qnYDOxm",
        "HH7O68qvHVR0"
      ]
    },
    "Decimate": {
      "title": "Decimation",
      "description": [
        {
          "system": "all",
          "text": "Ignore Couvert et, contre les unités dont la majorite des modeles ont <key>Defense</key> 2+ a <key>Defense</key> 3+, cette arme gagne <key>AP</key>(+2)."
        }
      ],
      "specialRule": [
        "dRAJ8qnYDOxm"
      ]
    },
    "Vinci Tech Boost Aura": {
      "title": "Aura de Renforcement Tech Vinci",
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>Renforcement Tech Vinci</key>."
        }
      ],
      "specialRule": [
        "dRAJ8qnYDOxm"
      ]
    },
    "Increased Shooting Range Mark": {
      "title": "Marque d'Augmentation de Portee de Tir",
      "description": [
        {
          "system": "all",
          "text": "Une fois par activation, avant d'attaquer, choisissez une unité ennemie a 18\" ; les unités alliées gagnent +6\" de portee au tir contre elle une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ],
      "specialRule": [
        "dRAJ8qnYDOxm"
      ]
    },
    "Precision Spotter": {
      "title": "Observateur de Precision",
      "description": [
        {
          "system": "all",
          "text": "Une fois par activation, choisissez une unité ennemie a 36\" et en ligne de vue de ce modele, puis lancez un de ; sur 4+, placez-y un marqueur. Les unités alliées peuvent retirer des marqueurs de leur cible avant les jets pour toucher pour obtenir +X aux jets pour toucher en attaque, ou X est le nombre de marqueurs retires."
        }
      ],
      "specialRule": [
        "dRAJ8qnYDOxm"
      ]
    },
    "Ranged Slayer": {
      "title": "Tueur a Distance",
      "description": [
        {
          "system": "all",
          "text": "Les armes de tir de ce modele gagnent <key>AP</key>(+2) contre les unités dont la majorite des modeles ont <key>Tough</key>(3) ou plus."
        }
      ],
      "specialRule": [
        "dRAJ8qnYDOxm",
        "HH7O68qvHVR0"
      ]
    },
    "Vinci Tech Boost": {
      "title": "Renforcement Tech Vinci",
      "description": [
        {
          "system": "all",
          "text": "Si ce modele a <key>Tech Vinci</key>, il gagne toujours a la fois <key>AP</key>(+1) et +1 aux jets pour toucher grace a <key>Tech Vinci</key> (au lieu de devoir choisir entre <key>AP</key>(+1) ou +1 aux jets pour toucher)."
        }
      ],
      "specialRule": [
        "dRAJ8qnYDOxm"
      ]
    },
    "Wave-Step": {
      "title": "Pas Ondulatoire",
      "description": [
        {
          "system": "all",
          "text": "Quand cette unité est activée, vous pouvez placer tous les modeles avec cette règle dans cette unité n'importe ou entierement a 3\" de leur position."
        }
      ],
      "specialRule": [
        "oACH5PrePLfv"
      ]
    },
    "Guarded": {
      "title": "Garde",
      "description": [
        {
          "system": "all",
          "text": "Quand des unités dont tous les modeles ont cette règle sont prises pour cible par des tirs ou des charges a plus de 9\", elles gagnent +1 aux jets de defense."
        }
      ],
      "specialRule": [
        "oACH5PrePLfv"
      ]
    },
    "Stealth Buff": {
      "title": "Bonus de Furtivite",
      "description": [
        {
          "system": "all",
          "text": "Une fois par activation, avant d'attaquer, choisissez une unité alliée a 12\" ; elle gagne Furtivite une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ],
      "specialRule": [
        "oACH5PrePLfv"
      ]
    },
    "Thrash": {
      "title": "Fracas",
      "description": [
        {
          "system": "all",
          "text": "<key>Contre</key> les unités dont la majorite des modeles ont <key>Defense</key> 5+ a <key>Defense</key> 6+, cette arme gagne <key>Blast</key>(+3)."
        }
      ],
      "specialRule": [
        "oACH5PrePLfv"
      ]
    },
    "Wave-Step Boost Aura": {
      "title": "Aura de Renforcement de Pas Ondulatoire",
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>Renforcement de Pas Ondulatoire</key>."
        }
      ],
      "specialRule": [
        "oACH5PrePLfv"
      ]
    },
    "Ambush Re-Deployment": {
      "title": "Redeploiement en Embuscade",
      "description": [
        {
          "system": "all",
          "text": "Une fois par partie, quand une unité dont tous les modeles ont cette règle termine son activation, vous pouvez immediatement la retirer de la table (en lachant tous les objectifs qu'elle pourrait tenir a 1\"), puis la deployer comme si elle avait <key>Embuscade</key> au debut du round suivant."
        }
      ],
      "specialRule": [
        "oACH5PrePLfv"
      ]
    },
    "Wave-Step Boost": {
      "title": "Renforcement de Pas Ondulatoire",
      "description": [
        {
          "system": "all",
          "text": "Si ce modele a <key>Pas Ondulatoire</key>, il peut être place a 6\" grace a <key>Pas Ondulatoire</key> (au lieu de seulement 3\")."
        }
      ],
      "specialRule": [
        "oACH5PrePLfv"
      ]
    },
    "Harassing": {
      "title": "Harcelement",
      "description": [
        {
          "system": "all",
          "text": "Une fois par round, les unités dont tous les modeles ont cette règle peuvent se deplacer de jusqu'à 3\" apres avoir tire ou combattu en mêlée."
        }
      ],
      "specialRule": [
        "AiReKTM86F3e"
      ]
    },
    "Retreating Strike": {
      "title": "Frappe de Repli",
      "description": [
        {
          "system": "all",
          "text": "Une fois par round, quand cette unité termine son mouvement a 3\" d'unités ennemies apres avoir ete en mêlée, choisissez-en une et lancez autant de des que de modeles avec cette règle dans cette unité, ou autant de des que sa valeur <key>Tough</key> (pour les unités a un seul modele). Pour chaque 6+, la cible subit une blessure."
        }
      ],
      "specialRule": [
        "AiReKTM86F3e"
      ]
    },
    "Regenerative Strength": {
      "title": "Force Regenerative",
      "description": [
        {
          "system": "all",
          "text": "Placez un marqueur sur ce modele lorsqu'il ignore une blessure. En mêlée, choisissez une de ses armes pour obtenir +X attaques, ou X est le nombre de marqueurs sur lui."
        }
      ],
      "specialRule": [
        "AiReKTM86F3e"
      ]
    },
    "Predator Fighter": {
      "title": "Combattant Predateur",
      "description": [
        {
          "system": "all",
          "text": "Pour chaque resultat non modifié de 6 pour toucher en mêlée, ce modele peut effectuer +1 attaque avec cette arme. Cette règle ne s'applique pas aux attaques generees."
        }
      ],
      "specialRule": [
        "AiReKTM86F3e"
      ]
    },
    "Ruinous Frenzy": {
      "title": "Frenesie Ruineuse",
      "description": [
        {
          "system": "all",
          "text": "Placez un marqueur sur cette unité lorsqu'elle detruit entierement une unité ennemie. Pour chaque marqueur, tous les modeles avec cette règle dans cette unité gagnent +1 aux jets pour toucher et +1 aux jets de defense jusqu'à la fin de la partie (maximum +2)."
        }
      ],
      "specialRule": [
        "AiReKTM86F3e"
      ]
    },
    "Lacerate": {
      "title": "Laceration",
      "description": [
        {
          "system": "all",
          "text": "Lors d'une attaque, la cible doit relancer les resultats de <key>Defense</key> non modifiés de 6."
        }
      ],
      "specialRule": [
        "AiReKTM86F3e"
      ]
    },
    "Harassing Boost Aura": {
      "title": "Aura de Renforcement de Harcelement",
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>Renforcement de Harcelement</key>."
        }
      ],
      "specialRule": [
        "AiReKTM86F3e"
      ]
    },
    "Thrust Mark": {
      "title": "Marque de Percee",
      "description": [
        {
          "system": "all",
          "text": "Une fois par activation, avant d'attaquer, choisissez une unité ennemie a 18\" ; les unités alliées gagnent Percee en mêlée contre elle une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ],
      "specialRule": [
        "AiReKTM86F3e"
      ]
    },
    "Harassing Boost": {
      "title": "Renforcement de Harcelement",
      "description": [
        {
          "system": "all",
          "text": "Si la majorite des modeles de cette unité ont <key>Harcelement</key>, ils peuvent se deplacer de jusqu'à 6\" grace a <key>Harcelement</key> (au lieu de seulement 3\")."
        }
      ],
      "specialRule": [
        "AiReKTM86F3e"
      ]
    },
    "Precision Growth": {
      "title": "Croissance de Precision",
      "description": [
        {
          "system": "all",
          "text": "Placez un marqueur sur cette unité a la fin de chaque round si elle est sur la table. Pour chaque marqueur, les modeles avec cette règle gagnent +1 aux jets pour toucher (maximum +2). Si cette unité est un jour Secouee, elle perd tous ses marqueurs."
        }
      ],
      "specialRule": [
        "HH7O68qvHVR0"
      ]
    },
    "Vale Formation": {
      "title": "Formation du Val",
      "description": [
        {
          "system": "all",
          "text": "Ce modele gagne +2\" de portee au tir et se deplace de +4\" lorsqu'il utilise des actions de Charge."
        }
      ],
      "specialRule": [
        "HH7O68qvHVR0"
      ]
    },
    "Courage Buff": {
      "title": "Bonus de Courage",
      "description": [
        {
          "system": "all",
          "text": "Une fois par activation, avant d'attaquer, choisissez une unité alliée a 12\" ; elle gagne +1 aux tests de moral une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ],
      "specialRule": [
        "HH7O68qvHVR0"
      ]
    },
    "Counter in Melee": {
      "title": "Riposte en mêlée",
      "description": [
        {
          "system": "all",
          "text": "Ce modele gagne <key>Riposte</key> en mêlée."
        }
      ],
      "specialRule": [
        "HH7O68qvHVR0"
      ]
    },
    "Puncture": {
      "title": "Perforation",
      "description": [
        {
          "system": "all",
          "text": "Ignore la Régénération et, contre les unités dont la majorite des modeles ont <key>Tough</key>(3) a <key>Tough</key>(9), cette arme gagne <key>AP</key>(+4)."
        }
      ],
      "specialRule": [
        "HH7O68qvHVR0"
      ]
    },
    "Vale Formation Boost Aura": {
      "title": "Aura de Renforcement de Formation du Val",
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>Renforcement de Formation du Val</key>."
        }
      ],
      "specialRule": [
        "HH7O68qvHVR0"
      ]
    },
    "Impact Mark": {
      "title": "Marque d'Impact",
      "description": [
        {
          "system": "all",
          "text": "Une fois par activation, avant d'attaquer, choisissez une unité ennemie a 18\" ; les unités alliées gagnent <key>Impact</key>(+1) contre elle une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ],
      "specialRule": [
        "HH7O68qvHVR0"
      ]
    },
    "Vale Formation Boost": {
      "title": "Renforcement de Formation du Val",
      "description": [
        {
          "system": "all",
          "text": "Si ce modele a <key>Formation du Val</key>, il gagne +4\" de portee au tir et se deplace de +8\" lorsqu'il utilise des actions de Charge grace a <key>Formation du Val</key> (au lieu de seulement +2\" et +4\")."
        }
      ],
      "specialRule": [
        "HH7O68qvHVR0"
      ]
    },
    "Precision Shooter Aura": {
      "title": "Aura de Tireur de Precision",
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent +1 aux jets pour toucher au tir."
        }
      ],
      "specialRule": [
        "OyVVPwEw7Uep"
      ]
    },
    "Bestial": {
      "title": "Bestial",
      "description": [
        {
          "system": "all",
          "text": "Lors d'une attaque, les cibles doivent relancer les resultats de <key>Defense</key> non modifiés de 6 lorsqu'elles bloquent des touches d'armes de ce modele."
        }
      ],
      "specialRule": [
        "OyVVPwEw7Uep"
      ]
    },
    "Tear": {
      "title": "Dechirure",
      "description": [
        {
          "system": "all",
          "text": "<key>Contre</key> les unités dont la majorite des modeles ont <key>Tough</key>(3) a <key>Tough</key>(9), cette arme gagne <key>AP</key>(+4)."
        }
      ],
      "specialRule": [
        "OyVVPwEw7Uep"
      ]
    },
    "Bestial Boost Aura": {
      "title": "Aura de Renforcement Bestial",
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>Renforcement Bestial</key>."
        }
      ],
      "specialRule": [
        "OyVVPwEw7Uep"
      ]
    },
    "Precision Tag": {
      "title": "Marquage de Precision",
      "description": [
        {
          "system": "all",
          "text": "Une fois par partie, pendant l'activation de ce modele, choisissez une unité ennemie a 36\" et en ligne de vue, puis placez X marqueurs sur elle. Lors d'une attaque, les unités alliées peuvent retirer des marqueurs de leur cible avant les jets pour toucher pour obtenir +Y aux jets pour toucher, ou Y est le nombre de marqueurs retires."
        }
      ],
      "specialRule": [
        "OyVVPwEw7Uep"
      ]
    },
    "Bestial Boost": {
      "title": "Renforcement Bestial",
      "description": [
        {
          "system": "all",
          "text": "Si ce modele a <key>Bestial</key>, les ennemis qui subissent des touches de sa part doivent relancer les resultats de defense non modifiés reussis de 5-6 grace a <key>Bestial</key> (au lieu de seulement 6)."
        }
      ],
      "specialRule": [
        "OyVVPwEw7Uep"
      ]
    },
    "Destroyer Boost Aura": {
      "title": "Aura de Renforcement Destructeur",
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>Renforcement Destructeur</key>."
        }
      ],
      "specialRule": [
        "K44UD3HPQAfg"
      ]
    },
    "Piercing Feat": {
      "title": "Exploit Perforant",
      "description": [
        {
          "system": "all",
          "text": "Une fois par partie, quand cette unité attaque et que tous ses modeles ont cette règle, vous pouvez utiliser cette règle pour que toutes leurs armes gagnent <key>AP</key>(+2)."
        }
      ],
      "specialRule": [
        "K44UD3HPQAfg"
      ]
    },
    "Piercing Feat Aura": {
      "title": "Aura d'Exploit Perforant",
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent <key>Exploit Perforant</key>."
        }
      ],
      "specialRule": [
        "K44UD3HPQAfg"
      ]
    },
    "Rupture": {
      "title": "Rupture",
      "description": [
        {
          "system": "all",
          "text": "Ignore Regeneration et, sur des resultats non modifiés de 6 pour toucher qui ne sont pas bloques, cette arme inflige 1 blessure supplementaire."
        }
      ],
      "specialRule": [
        "K44UD3HPQAfg"
      ]
    },
    "Melee Evasion Buff": {
      "title": "Bonus d'Esquive en mêlée",
      "description": [
        {
          "system": "all",
          "text": "Une fois par activation, avant d'attaquer, choisissez une unité alliée a 12\" ; elle gagne Esquive en mêlée une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ],
      "specialRule": [
        "K44UD3HPQAfg"
      ]
    },
    "Unwieldy Debuff": {
      "title": "Affaiblissement Encombrant",
      "description": [
        {
          "system": "all",
          "text": "Une fois par activation, avant d'attaquer, choisissez une unité ennemie a 18\" ; elle gagne <key>Encombrant</key> en mêlée une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ],
      "specialRule": [
        "K44UD3HPQAfg"
      ]
    },
    "Courage Aura": {
      "title": "Aura de Courage",
      "description": [
        {
          "system": "all",
          "text": "Cette figurine et son unité gagnent +1 aux tests de moral."
        }
      ],
      "specialRule": [
        "K44UD3HPQAfg"
      ]
    },
    "Destroyer Boost": {
      "title": "Renforcement Destructeur",
      "description": [
        {
          "system": "all",
          "text": "Si ce modele a <key>Destructeur</key>, les ennemis qui subissent des blessures de sa part subissent des blessures supplementaires sur des jets de defense rates de 1-2 grace a <key>Destructeur</key> (au lieu de seulement 1)."
        }
      ],
      "specialRule": [
        "K44UD3HPQAfg"
      ]
    },
    "Unwieldy": {
      "title": "Encombrant",
      "description": [
        {
          "system": "all",
          "text": "Frappe en dernier lors d'une charge."
        }
      ],
      "specialRule": [
        "K44UD3HPQAfg"
      ]
    }
,
    "Ambush Beacon": {
      "title": "Ambush Beacon",
      "description": [
        {
          "system": "all",
          "text": "Friendly units using Ambush may ignore distance restrictions from enemies if they are deployed a 6\" of ce modele."
        }
      ]
    },
    "Bad Shot": {
      "title": "Bad Shot",
      "description": [
        {
          "system": "all",
          "text": "This model gets -1 jets pour toucher when shooting."
        }
      ]
    },
    "Badlands Hunter": {
      "title": "Badlands Hunter",
      "description": [
        {
          "system": "all",
          "text": "Enemies that roll to block touches from ce modele's weapons take 1 extra wound for each unmodified result of 1 that they roll."
        }
      ]
    },
    "Badlands Hunter Boost": {
      "title": "Badlands Hunter Renforcement",
      "description": [
        {
          "system": "all",
          "text": "If ce modele has Badlands Hunter, enemies taking wounds from it take extra wounds on failed defense rolls of 1-2 from Badlands Hunter (instead of only on 1)."
        }
      ]
    },
    "Badlands Hunter Boost Aura": {
      "title": "Badlands Hunter Renforcement Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and up to 3 unité alliées picked before the start of the game get Badlands Hunter Boost. If ce modele is killed, picked models that are deployed lose the rule."
        }
      ]
    },
    "Ballistic Vest": {
      "title": "Ballistic Vest",
      "description": [
        {
          "system": "all",
          "text": "When units where all models have this rule are shot or charged from over 9\" away and take touches, those touches count as having AP(-1), to a min. of AP(0)."
        }
      ]
    },
    "Ballistic Vest Boost": {
      "title": "Ballistic Vest Renforcement",
      "description": [
        {
          "system": "all",
          "text": "If all models in cette unité have Ballistic Vest, enemy touches always count as having AP(-1) from Ballistic Vest (instead of only when being shot/charged from over 9\" away)."
        }
      ]
    },
    "Ballistic Vest Boost Aura": {
      "title": "Ballistic Vest Renforcement Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and up to 3 unité alliées picked before the start of the game get Ballistic Vest Boost. If ce modele is killed, picked models that are deployed lose the rule."
        }
      ]
    },
    "Bane in Melee Buff": {
      "title": "Bane in Melee Buff",
      "description": [
        {
          "system": "all",
          "text": "Once per activation, before attacking, pick up to 4 unité alliées a 12\", qui gagne Bane in melee une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Battle-Hardened": {
      "title": "Battle-Hardened",
      "description": [
        {
          "system": "all",
          "text": "Units where all models have this rule get +1 to jets de test de moral."
        }
      ]
    },
    "Battleborn": {
      "title": "Battleborn",
      "description": [
        {
          "system": "all",
          "text": "If a unit where all models have this rule is Shaken at the beginning of the round, roll one die. On a 4+, it stops being Shaken."
        }
      ]
    },
    "Berserker Boost": {
      "title": "Berserker Renforcement",
      "description": [
        {
          "system": "all",
          "text": "If ce modele has Berserker, it deals extra touches on successful unmodified hit results of 5-6 from Berserker (instead of only on 6)."
        }
      ]
    },
    "Berserker Boost Aura": {
      "title": "Berserker Renforcement Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and up to 3 unité alliées picked before the start of the game get Berserker Boost. If ce modele is killed, picked models that are deployed lose the rule."
        }
      ]
    },
    "Bloodborn": {
      "title": "Sangborn",
      "description": [
        {
          "system": "all",
          "text": "For each unmodified roll of 6 to hit when attacking, ce modele may roll +1 attack with that weapon. This rule doesn’t apply to newly generated attacks."
        }
      ]
    },
    "Brute Courage": {
      "title": "Brute Courage",
      "description": [
        {
          "system": "all",
          "text": "If a unit where all models have this rule is Shaken at the beginning of the round, roll one die. On a 4+, it stops being Shaken."
        }
      ]
    },
    "Clan Warrior": {
      "title": "Clan Warrior",
      "description": [
        {
          "system": "all",
          "text": "For each unmodified roll of 6 to hit when attacking, ce modele may roll +1 attack with that weapon. This rule doesn’t apply to newly generated attacks."
        }
      ]
    },
    "Clan Warrior Boost": {
      "title": "Clan Warrior Renforcement",
      "description": [
        {
          "system": "all",
          "text": "If ce modele has Clan Warrior, it gets extra attacks on successful unmodified hit results of 5-6 from Clan Warrior (instead of only on 6)."
        }
      ]
    },
    "Clan Warrior Boost Aura": {
      "title": "Clan Warrior Renforcement Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and up to 3 unité alliées picked before the start of the game get Clan Warrior Boost. If ce modele is killed, picked models that are deployed lose the rule."
        }
      ]
    },
    "Cyber-Eyes": {
      "title": "Cyber-Eyes",
      "description": [
        {
          "system": "all",
          "text": "When ce modele shoots at enemies over 9\" away, it gets +1 jets pour toucher."
        }
      ]
    },
    "Cyber-Eyes Boost": {
      "title": "Cyber-Eyes Renforcement",
      "description": [
        {
          "system": "all",
          "text": "If ce modele has Cyber-Eyes, it always gets +1 jets pour toucher from Cyber-Eyes (instead of only when shooting over 9\" away)."
        }
      ]
    },
    "Cyber-Eyes Boost Aura": {
      "title": "Cyber-Eyes Renforcement Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and up to 3 unité alliées picked before the start of the game get Cyber-Eyes Boost. If ce modele is killed, picked models that are deployed lose the rule."
        }
      ]
    },
    "Darkborn": {
      "title": "Sombreborn",
      "description": [
        {
          "system": "all",
          "text": "This model gets +3\" range when shooting and moves +3\" when using Charge actions."
        }
      ]
    },
    "Defensive Growth": {
      "title": "Defensive Growth",
      "description": [
        {
          "system": "all",
          "text": "Place one marker on cette unité at the end of each round if it's on the table. For each marker models with this rule in it get +1 to defense rolls (up to a max. of +2). If cette unité is ever Shaken, it loses all its markers."
        }
      ]
    },
    "Defensive Growth Aura": {
      "title": "Defensive Growth Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and up to 3 unité alliées picked before the start of the game get Defensive Growth. If ce modele is killed, picked models that are deployed lose the rule."
        }
      ]
    },
    "Demolish": {
      "title": "Demolish",
      "description": [
        {
          "system": "all",
          "text": "Ignores Cover, and against non-Hero units with Tough(3) or more, this weapon gets AP(+2)."
        }
      ]
    },
    "Devout": {
      "title": "Devout",
      "description": [
        {
          "system": "all",
          "text": "When attacking, unmodified results of 6 to hit deal 1 extra hit (only the original hit counts as a 6 for special rules)."
        }
      ]
    },
    "Devout Boost": {
      "title": "Devout Renforcement",
      "description": [
        {
          "system": "all",
          "text": "If ce modele has Devout, it deals extra touches on successful unmodified hit results of 5-6 from Devout (instead of only on 6)."
        }
      ]
    },
    "Devout Boost Aura": {
      "title": "Devout Renforcement Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and up to 3 unité alliées picked before the start of the game get Devout Boost. If ce modele is killed, picked models that are deployed lose the rule."
        }
      ]
    },
    "Entrenched Buff": {
      "title": "Entrenched Buff",
      "description": [
        {
          "system": "all",
          "text": "Once per activation, before attacking, pick up to 4 unité alliées a 12\", qui gagne Entrenched une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Flying Aura": {
      "title": "Flying Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and up to 3 unité alliées picked before the start of the game get Flying. If ce modele is killed, picked models that are deployed lose the rule."
        }
      ]
    },
    "Grounded Precision": {
      "title": "Grounded Precision",
      "description": [
        {
          "system": "all",
          "text": "If a unit where all models have this rule has most of them a 1\" of terrain, they get +1 jets pour toucher when attacking."
        }
      ]
    },
    "Grounded Precision Aura": {
      "title": "Grounded Precision Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and up to 3 unité alliées picked before the start of the game get Grounded Precision. If ce modele is killed, picked models that are deployed lose the rule."
        }
      ]
    },
    "Grounded Stealth": {
      "title": "Grounded Stealth",
      "description": [
        {
          "system": "all",
          "text": "If a unit where all models have this rule has most of them a 1\" of terrain, enemies get -1 jets pour toucher when attacking them."
        }
      ]
    },
    "Guardian": {
      "title": "Guardian",
      "description": [
        {
          "system": "all",
          "text": "When units where all models have this rule are shot or charged from over 9\" away and take touches, those touches count as having AP(-1), to a min. of AP(0)."
        }
      ]
    },
    "Guardian Boost": {
      "title": "Guardian Renforcement",
      "description": [
        {
          "system": "all",
          "text": "If all models in cette unité have Guardian, enemy touches always count as having AP(-1) from Guardian (instead of only when being shot/charged from over 9\" away)."
        }
      ]
    },
    "Guardian Boost Aura": {
      "title": "Guardian Renforcement Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and up to 3 unité alliées picked before the start of the game get Guardian Boost. If ce modele is killed, picked models that are deployed lose the rule."
        }
      ]
    },
    "Guerrilla": {
      "title": "Guerrilla",
      "description": [
        {
          "system": "all",
          "text": "Once per round, units where all models have this rule may move by up to 3\" after shooting or being in melee."
        }
      ]
    },
    "Guerrilla Boost": {
      "title": "Guerrilla Renforcement",
      "description": [
        {
          "system": "all",
          "text": "If most models in cette unité have Guerrilla, they may move by up to 6\" from Guerrilla (instead of only 3\")."
        }
      ]
    },
    "Guerrilla Boost Aura": {
      "title": "Guerrilla Renforcement Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and up to 3 unité alliées picked before the start of the game get Guerrilla Boost. If ce modele is killed, picked models that are deployed lose the rule."
        }
      ]
    },
    "Hive Bond": {
      "title": "Hive Bond",
      "description": [
        {
          "system": "all",
          "text": "Units where all models have this rule get +1 to jets de test de moral."
        }
      ]
    },
    "Hive Bond Boost": {
      "title": "Hive Bond Renforcement",
      "description": [
        {
          "system": "all",
          "text": "If all models in cette unité have Hive Bond, they get +2 to jets de test de moral from Hive Bond (instead of only +1)."
        }
      ]
    },
    "Hive Bond Boost Aura": {
      "title": "Hive Bond Renforcement Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and up to 3 unité alliées picked before the start of the game get Hive Bond Boost. If ce modele is killed, picked models that are deployed lose the rule."
        }
      ]
    },
    "Hold the Line Boost Aura": {
      "title": "Hold the Line Renforcement Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and up to 3 unité alliées picked before the start of the game get Hold the Line Boost. If ce modele is killed, picked models that are deployed lose the rule."
        }
      ]
    },
    "Ignores Cover Aura": {
      "title": "Ignores Cover Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and up to 3 unité alliées picked before the start of the game get Ignores Cover when shooting. If ce modele is killed, picked models that are deployed lose the rule."
        }
      ]
    },
    "Ignores Cover when Shooting": {
      "title": "Ignores Cover when Shooting",
      "description": [
        {
          "system": "all",
          "text": "This model gets Ignores Cover when shooting."
        }
      ]
    },
    "Ignores Cover when Shooting Aura": {
      "title": "Ignores Cover when Shooting Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and up to 3 unité alliées picked before the start of the game get Ignores Cover when shooting. If ce modele is killed, picked models that are deployed lose the rule."
        }
      ]
    },
    "Ignores Regeneration in Melee": {
      "title": "Ignores Regeneration in Melee",
      "description": [
        {
          "system": "all",
          "text": "This model gets Ignores Regeneration in melee."
        }
      ]
    },
    "Indirect Mark": {
      "title": "Indirect Mark",
      "description": [
        {
          "system": "all",
          "text": "Once per activation, before attacking, pick up to 4 unité ennemies a 18\", which les unités alliées gagnent Indirect against une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Infected": {
      "title": "Infected",
      "description": [
        {
          "system": "all",
          "text": "Enemies that roll to block touches from ce modele's weapons take 1 extra wound for each unmodified result of 1 that they roll."
        }
      ]
    },
    "Infected Boost": {
      "title": "Infected Renforcement",
      "description": [
        {
          "system": "all",
          "text": "If ce modele has Infected, enemies taking wounds from it take extra wounds on failed defense rolls of 1-2 from Infected (instead of only on 1)."
        }
      ]
    },
    "Infected Boost Aura": {
      "title": "Infected Renforcement Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and up to 3 unité alliées picked before the start of the game get Infected Boost. If ce modele is killed, picked models that are deployed lose the rule."
        }
      ]
    },
    "Infiltrate Aura": {
      "title": "Infiltrate Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and up to 3 unité alliées picked before the start of the game get Infiltrate. If ce modele is killed, picked models that are deployed lose the rule."
        }
      ]
    },
    "Inquisitorial Agent": {
      "title": "Inquisitorial Agent",
      "description": [
        {
          "system": "all",
          "text": "Once per game, if all models in cette unité have this rule, it may be activated even if it had already activated this round (stops being fatigued when activated for the second time). Only up to half of the units in the army with this rule at the beginning of the game (rounding up) may use it in a single round."
        }
      ]
    },
    "Knightborn": {
      "title": "Knightborn",
      "description": [
        {
          "system": "all",
          "text": "When a unit where all models have this rule takes wounds, roll one die for each. On a 6+ it is ignored. If the wounds were from a spell, then they are ignored on a 4+ instead."
        }
      ]
    },
    "Machine-Fog": {
      "title": "Machine-Fog",
      "description": [
        {
          "system": "all",
          "text": "When units where all models have this rule are shot or charged from over 9\" away, les unités ennemies gagnent -1 jets pour toucher."
        }
      ]
    },
    "Machine-Fog Boost": {
      "title": "Machine-Fog Renforcement",
      "description": [
        {
          "system": "all",
          "text": "If all models in cette unité have Machine-Fog, enemies attacking them always get -1 jets pour toucher from Machine-Fog (instead of only when being shot/charged from over 9\" away)."
        }
      ]
    },
    "Machine-Fog Boost Aura": {
      "title": "Machine-Fog Renforcement Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and up to 3 unité alliées picked before the start of the game get Machine-Fog Boost. If ce modele is killed, picked models that are deployed lose the rule."
        }
      ]
    },
    "Martial Prowess": {
      "title": "Martial Prowess",
      "description": [
        {
          "system": "all",
          "text": "Once per game, if all models in cette unité have this rule, it may be activated even if it had already activated this round (stops being fatigued when activated for the second time). Only up to half of the units in the army with this rule at the beginning of the game (rounding up) may use it in a single round."
        }
      ]
    },
    "No Retreat Buff": {
      "title": "No Retreat Buff",
      "description": [
        {
          "system": "all",
          "text": "Once per activation, before attacking, pick up to 4 unité alliées a 12\", qui gagne No Retreat une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Piercing Growth": {
      "title": "Piercing Growth",
      "description": [
        {
          "system": "all",
          "text": "Place one marker on cette unité at the end of each round if it's on the table. For each marker models with this rule in it get AP(+1) (up to a max. of +2). If cette unité is ever Shaken, it loses all its markers."
        }
      ]
    },
    "Piercing Shooting Debuff": {
      "title": "Piercing Shooting Debuff",
      "description": [
        {
          "system": "all",
          "text": "Once per activation, before attacking, pick up to 4 unité ennemies a 18\", which loses AP(+1) when shooting une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Piercing Shooting Mark": {
      "title": "Piercing Shooting Mark",
      "description": [
        {
          "system": "all",
          "text": "Once per activation, before attacking, pick up to 4 unité ennemies a 18\", which les unités alliées gagnent AP(+1) when shooting against une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Point-Blank Piercing": {
      "title": "Point-Blank Piercing",
      "description": [
        {
          "system": "all",
          "text": "This model gets AP(+1) when shooting enemies a 12\"."
        }
      ]
    },
    "Point-Blank Piercing Aura": {
      "title": "Point-Blank Piercing Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and up to 3 unité alliées picked before the start of the game get Point-Blank Piercing. If ce modele is killed, picked models that are deployed lose the rule."
        }
      ]
    },
    "Point-Blank Surge": {
      "title": "Point-Blank Surge",
      "description": [
        {
          "system": "all",
          "text": "When ce modele shoots at enemies a 12\", unmodified results of 6 to hit deal 1 extra hit (only the original hit counts as a 6 for special rules)."
        }
      ]
    },
    "Protected Aura": {
      "title": "Protected Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and up to 3 unité alliées picked before the start of the game get Protected. If ce modele is killed, picked models that are deployed lose the rule."
        }
      ]
    },
    "Protection Feat Aura": {
      "title": "Protection Feat Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and up to 3 unité alliées picked before the start of the game get Protection Feat. If ce modele is killed, picked models that are deployed lose the rule."
        }
      ]
    },
    "Psychotic": {
      "title": "Psychotic",
      "description": [
        {
          "system": "all",
          "text": "For each unmodified roll of 6 to hit when attacking, ce modele may roll +1 attack with that weapon. This rule doesn’t apply to newly generated attacks."
        }
      ]
    },
    "Psychotic Boost": {
      "title": "Psychotic Renforcement",
      "description": [
        {
          "system": "all",
          "text": "If ce modele has Psychotic, it gets extra attacks on successful unmodified hit results of 5-6 from Psychotic (instead of only on 6)."
        }
      ]
    },
    "Psychotic Boost Aura": {
      "title": "Psychotic Renforcement Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and up to 3 unité alliées picked before the start of the game get Psychotic Boost. If ce modele is killed, picked models that are deployed lose the rule."
        }
      ]
    },
    "Quake when Shooting": {
      "title": "Quake when Shooting",
      "description": [
        {
          "system": "all",
          "text": "This model gets Quake when shooting."
        }
      ]
    },
    "Rapid Advance Buff": {
      "title": "Rapid Advance Buff",
      "description": [
        {
          "system": "all",
          "text": "Once per activation, before attacking, pick up to 4 unité alliées a 12\", qui gagne Rapid Advance une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Rapid Ambush": {
      "title": "Rapid Ambush",
      "description": [
        {
          "system": "all",
          "text": "Counts as having Ambush, but may be deployed at the start of any round, including the first."
        }
      ]
    },
    "Rapid Blink": {
      "title": "Rapid Blink",
      "description": [
        {
          "system": "all",
          "text": "When cette unité is activated, you may place all models with this rule in it anywhere fully a 3\" of their position."
        }
      ]
    },
    "Rapid Blink Boost": {
      "title": "Rapid Blink Renforcement",
      "description": [
        {
          "system": "all",
          "text": "If ce modele has Rapid Blink, it may be placed a 6\" from Rapid Blink (instead of only a 3\")."
        }
      ]
    },
    "Rapid Blink Boost Aura": {
      "title": "Rapid Blink Renforcement Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and up to 3 unité alliées picked before the start of the game get Rapid Blink Boost. If ce modele is killed, picked models that are deployed lose the rule."
        }
      ]
    },
    "Reinforced": {
      "title": "Reinforced",
      "description": [
        {
          "system": "all",
          "text": "When units where all models have this rule are shot or charged from over 9\" away and take touches, those touches count as having AP(-1), to a min. of AP(0)."
        }
      ]
    },
    "Runner Boost": {
      "title": "Runner Renforcement",
      "description": [
        {
          "system": "all",
          "text": "If ce modele has Runner, it moves +4\" on Advance and +4\" on Rush/Charge from Runner (instead of only +2\" and +2\")."
        }
      ]
    },
    "Runner Boost Aura": {
      "title": "Runner Renforcement Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and up to 3 unité alliées picked before the start of the game get Runner Boost. If ce modele is killed, picked models that are deployed lose the rule."
        }
      ]
    },
    "Safety Gear": {
      "title": "Safety Gear",
      "description": [
        {
          "system": "all",
          "text": "When units where all models have this rule are shot or charged from over 9\" away, they get +1 to defense rolls."
        }
      ]
    },
    "Safety Gear Boost": {
      "title": "Safety Gear Renforcement",
      "description": [
        {
          "system": "all",
          "text": "If all models in cette unité have Safety Gear, they always get +1 to defense rolls from Safety Gear (instead of only when being shot/charged from over 9\" away)."
        }
      ]
    },
    "Safety Gear Boost Aura": {
      "title": "Safety Gear Renforcement Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and up to 3 unité alliées picked before the start of the game get Safety Gear Boost. If ce modele is killed, picked models that are deployed lose the rule."
        }
      ]
    },
    "Scrapper": {
      "title": "Scrapper",
      "description": [
        {
          "system": "all",
          "text": "When attacking, targets must re-roll unmodified Defense results of 6 when blocking touches from ce modele's weapons."
        }
      ]
    },
    "Scrapper Boost": {
      "title": "Scrapper Renforcement",
      "description": [
        {
          "system": "all",
          "text": "If ce modele has Scrapper, enemies taking touches from it must re-roll successful unmodified defense results of 5-6 from Scrapper (instead of only on 6)."
        }
      ]
    },
    "Scrapper Boost Aura": {
      "title": "Scrapper Renforcement Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and up to 3 unité alliées picked before the start of the game get Scrapper Boost. If ce modele is killed, picked models that are deployed lose the rule."
        }
      ]
    },
    "Screened": {
      "title": "Screened",
      "description": [
        {
          "system": "all",
          "text": "When units where all models have this rule are shot or charged from over 9\" away, les unités ennemies gagnent -1 jets pour toucher."
        }
      ]
    },
    "Screened Aura": {
      "title": "Screened Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and up to 3 unité alliées picked before the start of the game get Screened. If ce modele is killed, picked models that are deployed lose the rule."
        }
      ]
    },
    "Self-Destruct": {
      "title": "Self-Destruct",
      "description": [
        {
          "system": "all",
          "text": "If ce modele is killed in melee, the attacking unit takes X touches. If ce modele survives melee, after both sides have finished attacking, it is immediately killed, and the unite ennemie takes X touches."
        }
      ]
    },
    "Self-Repair": {
      "title": "Self-Repair",
      "description": [
        {
          "system": "all",
          "text": "When a unit where all models have this rule takes wounds, roll one die for each. On a 6+ it is ignored."
        }
      ]
    },
    "Self-Repair Boost": {
      "title": "Self-Repair Renforcement",
      "description": [
        {
          "system": "all",
          "text": "If all models in cette unité have Self-Repair, they ignore wounds on rolls of 5-6 from Self-Repair (instead of only on 6+)."
        }
      ]
    },
    "Shadow Operative": {
      "title": "Shadow Operative",
      "description": [
        {
          "system": "all",
          "text": "Enemies get -4\" range when trying to shoot at units where all models have this rule, and -2\" movement when trying to charge units where all models have this rule."
        }
      ]
    },
    "Shadow Operative Boost": {
      "title": "Shadow Operative Renforcement",
      "description": [
        {
          "system": "all",
          "text": "If all models in cette unité have Shadow Operative, enemies get -8\" range when shooting them and -4\" movement when charging them from Shadow Operative (instead of only -4\" and -2\")."
        }
      ]
    },
    "Shadow Operative Boost Aura": {
      "title": "Shadow Operative Renforcement Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and up to 3 unité alliées picked before the start of the game get Shadow Operative Boost. If ce modele is killed, picked models that are deployed lose the rule."
        }
      ]
    },
    "Shred when Shooting": {
      "title": "Shred when Shooting",
      "description": [
        {
          "system": "all",
          "text": "This model gets Shred when shooting."
        }
      ]
    },
    "Surge when Shooting": {
      "title": "Surge when Shooting",
      "description": [
        {
          "system": "all",
          "text": "This model gets Surge when shooting."
        }
      ]
    },
    "Surprise Piercing Shot": {
      "title": "Surprise Piercing Shot",
      "description": [
        {
          "system": "all",
          "text": "Counts as having Ambush, and gets AP(+2) when shooting on the round in which it deploys via this rule."
        }
      ]
    },
    "Targeting Visor": {
      "title": "Targeting Visor",
      "description": [
        {
          "system": "all",
          "text": "When ce modele shoots at enemies over 9\" away, it gets +1 jets pour toucher."
        }
      ]
    },
    "Targeting Visor Boost": {
      "title": "Targeting Visor Renforcement",
      "description": [
        {
          "system": "all",
          "text": "If ce modele has Targeting Visor, it always gets +1 jets pour toucher when shooting from Targeting Visor (instead of only when shooting over 9\" away)."
        }
      ]
    },
    "Targeting Visor Boost Aura": {
      "title": "Targeting Visor Renforcement Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and up to 3 unité alliées picked before the start of the game get Targeting Visor Boost. If ce modele is killed, picked models that are deployed lose the rule."
        }
      ]
    },
    "Union Assault": {
      "title": "Union Assault",
      "description": [
        {
          "system": "all",
          "text": "After ce modele is deployed, it may be placed anywhere fully a 9” of its position."
        }
      ]
    },
    "Versatile Reach Aura": {
      "title": "Versatile Reach Aura",
      "description": [
        {
          "system": "all",
          "text": "This model and up to 3 unité alliées picked before the start of the game get Versatile Reach. If ce modele is killed, picked models that are deployed lose the rule."
        }
      ]
    },
    "Watchborn": {
      "title": "Watchborn",
      "description": [
        {
          "system": "all",
          "text": "When cette unité is activated, pick one effect: until the end of the activation all models with this rule in it either get AP(+1) when attacking, or get +1 jets pour toucher when attacking."
        }
      ]
    },
    "Wolfborn": {
      "title": "Wolfborn",
      "description": [
        {
          "system": "all",
          "text": "When cette unité is activated, you may place all models with this rule in it anywhere fully a 3\" of their position."
        }
      ]
    },
    "Wreck": {
      "title": "Wreck",
      "description": [
        {
          "system": "all",
          "text": "Ignores Cover, and when attacking the target must re-roll unmodified Defense results of 6."
        }
      ]
    }

  },
  "pl": {}
};


export const commonSpells: SpellsByLanguage = {
  en: {
    "Labyrinthian Sparkle": {
      "title": "Labyrinthian Sparkle",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Pick one friendly unit within 12\", which gets <key>Evasive</key> once (next time the effect would apply)."
        }
      ]
    },
    "Maze Vines": {
      "title": "Maze Vines",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Pick one enemy unit within 12\", which takes 2 hits with <key>AP</key>(1) and <key>Fragment</key>."
        }
      ]
    },
    "Dream Haunter": {
      "title": "Dream Haunter",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Pick up to two enemy units within 18\", which friendly units gets <key>Unpredictable Fighter</key> against once (next time the effect would apply)."
        }
      ]
    },
    "Chill of Death": {
      "title": "Chill of Death",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Pick one enemy unit within 12\", which takes 6 hits."
        }
      ]
    },
    "Combat Possession": {
      "title": "Combat Possession",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Pick up to three friendly units within 12\", which moves +2\" when using Advance actions and +4\" when using Rush/Charge actions once (next time the effect would apply)."
        }
      ]
    },
    "Spectral Light": {
      "title": "Spectral Light",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Pick one enemy unit within 6\", which takes 3 hits with <key>AP</key>(2) and <key>Deadly</key>(3)."
        }
      ]
    },
    "Hunter's Strike": {
      "title": "Hunter's Strike",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Pick one enemy unit within 18\", which friendly units gets <key>Quick Shot</key> against once (next time the effect would apply)."
        }
      ]
    },
    "Spirit Vines": {
      "title": "Spirit Vines",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Pick one enemy unit within 12\", which takes 2 hits with <key>AP</key>(1) and <key>Pierce</key>. Roll as many dice as hits to see if \"on rolls of 6\" effects trigger."
        }
      ]
    },
    "Natural Harmony": {
      "title": "Natural Harmony",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Pick up to two friendly units within 12\", which get <key>Resistance</key> once (next time the effect would apply)."
        }
      ]
    },
    "Tree Stomp": {
      "title": "Tree Stomp",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Pick one enemy model within 24\", which takes 2 hits with <key>AP</key>(4)."
        }
      ]
    },
    "Tree-Bark Growth": {
      "title": "Tree-Bark Growth",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Pick up to three friendly units within 12\", which get <key>Grounded Reinforcement</key> once (next time the effect would apply)."
        }
      ]
    },
    "Insect Attack": {
      "title": "Insect Attack",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Pick one enemy unit within 18\", which takes 6 hits."
        }
      ]
    },
    "Searing Heat": {
      "title": "Searing Heat",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Pick one enemy unit within 18\", which friendly units gets <key>Piercing Assault</key> against once (next time the effect would apply)."
        }
      ]
    },
    "Lava Bolts": {
      "title": "Lava Bolts",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Pick one enemy model within 18\", which takes 2 hits."
        }
      ]
    },
    "Auric Fury": {
      "title": "Auric Fury",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Pick up to two friendly units within 12\", which get <key>Hit & Run Fighter</key> once (next time the effect would apply)."
        }
      ]
    },
    "Suffocating Ashes": {
      "title": "Suffocating Ashes",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Pick up to two enemy units within 12\", which take 4 hits each."
        }
      ]
    },
    "Seismic Shift": {
      "title": "Seismic Shift",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Pick up to three friendly units within 12\", which get <key>Grounded Protection</key> once (next time the effect would apply)."
        }
      ]
    },
    "Fire Storm": {
      "title": "Fire Storm",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Pick one enemy unit within 6\", which takes 9 hits with <key>Pulverize</key>. Roll as many dice as hits to see if \"on rolls of 6\" effects trigger."
        }
      ]
    },
    "Vigorous Return": {
      "title": "Vigorous Return",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Pick one friendly unit within 12\", which gets <key>Cursed Undead Boost</key> once (next time the effect would apply)."
        }
      ]
    },
    "Cursed Strike": {
      "title": "Cursed Strike",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Pick one enemy unit within 6\", which takes 3 hits with <key>Sever</key>."
        }
      ]
    },
    "Seductive Invocation": {
      "title": "Seductive Invocation",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Pick up to two enemy units within 18\", which must take a morale test. If failed you may move it by up to 6\" in a straight line in any direction."
        }
      ]
    },
    "Spectral Wind": {
      "title": "Spectral Wind",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Pick one enemy unit within 12\", which takes 4 hits with <key>AP</key>(2)."
        }
      ]
    },
    "Dance of Death": {
      "title": "Dance of Death",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Pick up to three friendly units within 12\", which get <key>Teleport</key> once (next time the effect would apply)."
        }
      ]
    },
    "Deadly Gaze": {
      "title": "Deadly Gaze",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Pick one enemy unit within 6\", which takes 3 hits with <key>AP</key>(2) and <key>Deadly</key>(3)."
        }
      ]
    },
    "Aether-Cloud Rune": {
      "title": "Aether-Cloud Rune",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Pick one enemy unit within 18\", which gets -3 to casting rolls once (next time the effect would apply)."
        }
      ]
    },
    "Aether Shock": {
      "title": "Aether Shock",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Pick one enemy unit within 12\", which takes 2 hits with <key>Scratch</key>."
        }
      ]
    },
    "Wind Rune": {
      "title": "Wind Rune",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Pick up to two friendly units within 12\", which get <key>Swift</key> once (next time the effect would apply)."
        }
      ]
    },
    "Lightning Shock": {
      "title": "Lightning Shock",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Pick up to two enemy units within 12\", which take 2 hits with <key>AP</key>(2) each."
        }
      ]
    },
    "Tinkering Rune": {
      "title": "Tinkering Rune",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Pick up to three friendly units within 12\", which get <key>Buccaneer Boost</key> once (next time the effect would apply)."
        }
      ]
    },
    "Thunder Shock": {
      "title": "Thunder Shock",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Pick one enemy unit within 12\", which takes 6 hits with <key>Shred</key>."
        }
      ]
    },
    "Poison Mist": {
      "title": "Poison Mist",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Pick one enemy unit within 18\", which friendly units gets <key>Shred</key> when attacking against once (next time the effect would apply)."
        }
      ]
    },
    "Piranha Swarm": {
      "title": "Piranha Swarm",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Pick one enemy unit within 12\", which takes 2 hits with <key>Disintegrate</key>."
        }
      ]
    },
    "Fateful Guidance": {
      "title": "Fateful Guidance",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Pick up to two friendly units within 12\", which get <key>Steadfast</key> once (next time the effect would apply)."
        }
      ]
    },
    "Jaguar Pounce": {
      "title": "Jaguar Pounce",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Pick one enemy model within 18\", which takes 4 hits with <key>AP</key>(1)."
        }
      ]
    },
    "Primordial Roar": {
      "title": "Primordial Roar",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Pick up to three friendly units within 12\", which get <key>Primal Boost</key> once (next time the effect would apply)."
        }
      ]
    },
    "Serpent Egg": {
      "title": "Serpent Egg",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Pick one enemy unit within 6\", which takes 9 hits with <key>Bane</key>."
        }
      ]
    },
    "Terrifying Fury": {
      "title": "Terrifying Fury",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Pick one enemy unit within 18\", which must take a morale test. If failed, it becomes fatigued."
        }
      ]
    },
    "Flame of Destruction": {
      "title": "Flame of Destruction",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Pick one enemy unit within 18\", which takes 1 hit with <key>Blast</key>(3)."
        }
      ]
    },
    "Fiery Protection": {
      "title": "Fiery Protection",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Pick up to two friendly units within 12\", which get <key>Melee Evasion</key> once (next time the effect would apply)."
        }
      ]
    },
    "Brutal Massacre": {
      "title": "Brutal Massacre",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Pick one enemy unit within 6\", which takes 6 hits with <key>Break</key>. Roll as many dice as hits to see if \"on rolls of 6\" effects trigger."
        }
      ]
    },
    "War Boon": {
      "title": "War Boon",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Pick up to three friendly units within 12\", which get <key>Warbound Boost</key> once (next time the effect would apply)."
        }
      ]
    },
    "Headtaker Strike": {
      "title": "Headtaker Strike",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Pick up to two enemy units within 12\", which take 3 hits with <key>AP</key>(2) each."
        }
      ]
    },
    "Aura of Pestilence": {
      "title": "Aura of Pestilence",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Pick one enemy unit within 18\", which counts as being in Difficult Terrain once (next time the effect would apply)."
        }
      ]
    },
    "Rapid Putrefaction": {
      "title": "Rapid Putrefaction",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Pick one enemy unit within 12\", which takes 2 hits with <key>AP</key>(1) and <key>Butcher</key>. Roll as many dice as hits to see if \"on rolls of 6\" effects trigger."
        }
      ]
    },
    "Blessed Virus": {
      "title": "Blessed Virus",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Pick up to two friendly units within 12\", which get <key>Rapid Rush</key> once (next time the effect would apply)."
        }
      ]
    },
    "Plague Malediction": {
      "title": "Plague Malediction",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Pick one enemy model within 24\", which takes 2 hits with <key>AP</key>(4)."
        }
      ]
    },
    "Plague Boon": {
      "title": "Plague Boon",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Pick up to three friendly units within 12\", which get <key>Plaguebound Boost</key> once (next time the effect would apply)."
        }
      ]
    },
    "Rot Wave": {
      "title": "Rot Wave",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Pick one enemy unit within 18\", which takes 6 hits."
        }
      ]
    },
    "Combat Ecstasy": {
      "title": "Combat Ecstasy",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Pick one enemy unit within 18\", which friendly units gets <key>Quick Shot</key> against once (next time the effect would apply)."
        }
      ]
    },
    "Beautiful Pain": {
      "title": "Beautiful Pain",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Pick one enemy unit within 12\", which takes 2 hits with <key>Shatter</key>."
        }
      ]
    },
    "Blissful Dance": {
      "title": "Blissful Dance",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Pick up to two friendly units within 12\", which get <key>Melee Evasion</key> once (next time the effect would apply)."
        }
      ]
    },
    "Total Seizure": {
      "title": "Total Seizure",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Pick one enemy model within 18\", which takes 4 hits with <key>AP</key>(1)."
        }
      ]
    },
    "Lust Boon": {
      "title": "Lust Boon",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Pick up to three friendly units within 12\", which get <key>Lustbound Boost</key> once (next time the effect would apply)."
        }
      ]
    },
    "Overpowering Lash": {
      "title": "Overpowering Lash",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Pick one enemy unit within 12\", which takes 6 hits with <key>AP</key>(1) and <key>Shred</key>."
        }
      ]
    },
    "Shifting Form": {
      "title": "Shifting Form",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Pick one enemy unit within 18\", which gets -3 to casting rolls once (next time the effect would apply)."
        }
      ]
    },
    "Sky Blaze": {
      "title": "Sky Blaze",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Pick one enemy unit within 12\", which takes 2 hits with <key>AP</key>(1) and <key>Slash</key>. Roll as many dice as hits to see if \"on rolls of 6\" effects trigger."
        }
      ]
    },
    "Breath of Change": {
      "title": "Breath of Change",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Pick up to two friendly units within 12\", which get <key>Bane when Shooting</key> once (next time the effect would apply)."
        }
      ]
    },
    "Mutating Inferno": {
      "title": "Mutating Inferno",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Pick up to two enemy units within 9\", which take 4 hits each."
        }
      ]
    },
    "Change Boon": {
      "title": "Change Boon",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Pick up to three friendly units within 12\", which get <key>Changebound Boost</key> once (next time the effect would apply)."
        }
      ]
    },
    "Power Bolt": {
      "title": "Power Bolt",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Pick one enemy unit within 12\", which takes 6 hits with <key>AP</key>(2)."
        }
      ]
    },
    "Magic Skitter-Step": {
      "title": "Magic Skitter-Step",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Pick one friendly unit within 12\", which gets <key>Scurry Boost</key> once (next time the effect would apply)."
        }
      ]
    },
    "Heavenly Strike": {
      "title": "Heavenly Strike",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Pick up to two enemy units within 12\", which take 1 hit with <key>AP</key>(2) each."
        }
      ]
    },
    "God-Mother's Frenzy": {
      "title": "God-Mother's Frenzy",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Pick up to two friendly units within 12\", which get <key>Melee Slayer</key> once (next time the effect would apply)."
        }
      ]
    },
    "Choking Censer-Fog": {
      "title": "Choking Censer-Fog",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Pick one enemy unit within 12\", which takes 6 hits."
        }
      ]
    },
    "Cracking Bell-Chime": {
      "title": "Cracking Bell-Chime",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Pick up to three enemy units within 18\", which get -1 to defense rolls once (next time the effect would apply)."
        }
      ]
    },
    "Lightning Blast": {
      "title": "Lightning Blast",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Pick one enemy model within 12\", which takes 6 hits with <key>Hazardous</key>. Roll as many dice as hits to see if \"on rolls of 1\" effects trigger."
        }
      ]
    },
    "Drain Spirit": {
      "title": "Drain Spirit",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Pick one friendly unit within 12\", which gets <key>Unstoppable</key> in melee once (next time the effect would apply)."
        }
      ]
    },
    "Deep Fracture": {
      "title": "Deep Fracture",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Pick one enemy model within 18\", which takes 2 hits with <key>AP</key>(1)."
        }
      ]
    },
    "Rapid Ossification": {
      "title": "Rapid Ossification",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Pick up to two friendly units within 12\", which get <key>Ossified Boost</key> once (next time the effect would apply)."
        }
      ]
    },
    "Shattering Blast": {
      "title": "Shattering Blast",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Pick one enemy unit within 6\", which takes 6 hits with <key>Destructive</key>. Roll as many dice as hits to see if \"on rolls of 6\" effects trigger."
        }
      ]
    },
    "Soul Enslaver": {
      "title": "Soul Enslaver",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Pick up to three enemy units within 18\", which friendly units gets <key>Furious</key> against once (next time the effect would apply)."
        }
      ]
    },
    "Bone Breaker": {
      "title": "Bone Breaker",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Pick one enemy unit within 18\", which takes 6 hits."
        }
      ]
    },
    "Evil Gaze": {
      "title": "Evil Gaze",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Pick one friendly unit within 12\", which gets <key>Counter-Attack</key> once (next time the effect would apply)."
        }
      ]
    },
    "Godly Smash": {
      "title": "Godly Smash",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Pick one enemy unit within 6\", which takes 1 hit with <key>AP</key>(2) and <key>Impale</key>."
        }
      ]
    },
    "Way-Clan Chant": {
      "title": "Way-Clan Chant",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Pick up to two friendly units within 12\", which get <key>Ferocious Boost</key> once (next time the effect would apply)."
        }
      ]
    },
    "Bone Strike": {
      "title": "Bone Strike",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Pick one enemy unit within 6\", which takes 6 hits with <key>Bane</key>."
        }
      ]
    },
    "Magic Fists": {
      "title": "Magic Fists",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Pick up to three enemy units within 18\", which friendly units gets <key>Rending</key> in melee against once (next time the effect would apply)."
        }
      ]
    },
    "Iron Burst": {
      "title": "Iron Burst",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Pick one enemy unit within 12\", which takes 6 hits with <key>AP</key>(2)."
        }
      ]
    },
    "Battle Guts": {
      "title": "Battle Guts",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Pick one friendly unit within 12\", which gets <key>Resistance</key> once (next time the effect would apply)."
        }
      ]
    },
    "Gobble Up": {
      "title": "Gobble Up",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Pick one enemy model within 18\", which takes 2 hits with <key>AP</key>(1)."
        }
      ]
    },
    "Gorging Feast": {
      "title": "Gorging Feast",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Pick up to two friendly units within 12\", which get <key>Destroyer Boost</key> once (next time the effect would apply)."
        }
      ]
    },
    "Great Trampling": {
      "title": "Great Trampling",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Pick one enemy unit within 12\", which takes 4 hits with <key>AP</key>(1) and <key>Rupture</key>. Roll as many dice as hits to see if \"on rolls of 6\" effects trigger."
        }
      ]
    },
    "Crack Spirits": {
      "title": "Crack Spirits",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Pick up to three enemy units within 18\", which get <key>Unwieldy</key> in melee once (next time the effect would apply)."
        }
      ]
    },
    "Ice Maw": {
      "title": "Ice Maw",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Pick one enemy unit within 12\", which takes 6 hits with <key>AP</key>(2)."
        }
      ]
    },
    "Desert Storm": {
      "title": "Desert Storm",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Pick one enemy unit within 18\", which counts as being in Difficult Terrain once (next time the effect would apply)."
        }
      ]
    },
    "Storm of Skulls": {
      "title": "Storm of Skulls",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Pick one enemy unit within 18\", which takes 1 hit with <key>Blast</key>(3)."
        }
      ]
    },
    "Cursed Arrows": {
      "title": "Cursed Arrows",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Pick up to two friendly units within 12\", which get <key>Shred</key> when shooting once (next time the effect would apply)."
        }
      ]
    },
    "Rapid Desiccation": {
      "title": "Rapid Desiccation",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Pick one enemy model within 24\", which takes 2 hits with <key>AP</key>(4)."
        }
      ]
    },
    "Tomb Queen's Guidance": {
      "title": "Tomb Queen's Guidance",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Pick up to three friendly units within 12\", which get <key>Royal Legion Boost</key> once (next time the effect would apply)."
        }
      ]
    },
    "Tomb Queen's Vengeance": {
      "title": "Tomb Queen's Vengeance",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Pick one enemy unit within 12\", which takes 6 hits with <key>AP</key>(1) and <key>Perforate</key>. Roll as many dice as hits to see if \"on rolls of 6\" effects trigger."
        }
      ]
    },
    "Heavenly Guidance": {
      "title": "Heavenly Guidance",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Pick one friendly unit within 12\", which gets <key>Flying</key> once (next time the effect would apply)."
        }
      ]
    },
    "Lightning Bolt": {
      "title": "Lightning Bolt",
      "description": [
        {
          "system": "Kingdom of Angels",
          "cost": 1,
          "text": "Pick one enemy unit within 6\", which takes 1 hit with <key>AP</key>(2) and <key>Chop</key>."
        },
        {
          "system": "Eternal Wardens",
          "cost": 3,
          "text": "Pick one enemy unit within 12\", which takes 6 hits with <key>AP</key>(1) and <key>Shred</key>."
        }
      ]
    },
    "Star Blessing": {
      "title": "Star Blessing",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Pick up to two friendly units within 12\", which get <key>Angelic Blessing Boost</key> once (next time the effect would apply)."
        }
      ]
    },
    "Angelic Storm": {
      "title": "Angelic Storm",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Pick up to two enemy units within 12\", which take 2 hits with <key>AP</key>(2) each."
        }
      ]
    },
    "Shock Energy": {
      "title": "Shock Energy",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Pick up to three enemy units within 18\", which friendly units gets <key>Slayer</key> against once (next time the effect would apply)."
        }
      ]
    },
    "Thunder Strike": {
      "title": "Thunder Strike",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Pick one enemy unit within 18\", which takes 6 hits."
        }
      ]
    },
    "Aura of Heroism": {
      "title": "Aura of Heroism",
      "description": [
        {
          "system": "Human Empire",
          "cost": 1,
          "text": "Pick one friendly unit within 12\", which gets <key>Hold the Line Boost</key> once (next time the effect would apply)."
        },
        {
          "system": "Giant Tribes",
          "cost": 1,
          "text": "Pick one friendly unit within 12\", which gets +1 to morale test rolls once (next time the effect would apply)."
        }
      ]
    },
    "Fire Ball": {
      "title": "Fire Ball",
      "description": [
        {
          "system": "Human Empire",
          "cost": 1,
          "text": "Pick one enemy unit within 12\", which takes 2 hits with <key>AP</key>(1) and <key>Fracture</key>. Roll as many dice as hits to see if \"on rolls of 6\" effects trigger."
        },
        {
          "system": "Giant Tribes",
          "cost": 1,
          "text": "Pick one enemy unit within 12\", which takes 2 hits with <key>AP</key>(1) and <key>Surge</key>. Roll as many dice as hits to see if \"on rolls of 6\" effects trigger."
        }
      ]
    },
    "Magic Targeting": {
      "title": "Magic Targeting",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Pick up to two enemy units within 18\", which friendly units get +1 to hit rolls in melee against once (next time the effect would apply)."
        }
      ]
    },
    "Blood Hex": {
      "title": "Blood Hex",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Pick one enemy unit within 12\", which takes 6 hits."
        }
      ]
    },
    "Elemental Form": {
      "title": "Elemental Form",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Pick up to three friendly units within 12\", which get <key>AP</key>(+1) in melee once (next time the effect would apply)."
        }
      ]
    },
    "Spirit Leech": {
      "title": "Spirit Leech",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Pick one enemy model within 18\", which takes 6 hits with <key>AP</key>(1)."
        }
      ]
    },
    "Eagle-Eyed Focus": {
      "title": "Eagle-Eyed Focus",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Pick one enemy unit within 18\", which friendly units get +1 to hit rolls when shooting against once (next time the effect would apply)."
        }
      ]
    },
    "Arcane Blast": {
      "title": "Arcane Blast",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Pick one enemy unit within 18\", which takes 1 hit with <key>Blast</key>(3)."
        }
      ]
    },
    "Magical Surge": {
      "title": "Magical Surge",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Pick up to two friendly units within 12\", which get <key>Bane</key> in melee once (next time the effect would apply)."
        }
      ]
    },
    "High Tempest": {
      "title": "High Tempest",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Pick up to two enemy units within 9\", which take 4 hits each."
        }
      ]
    },
    "Path to Glory": {
      "title": "Path to Glory",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Pick up to three friendly units within 12\", which get <key>Highborn Boost</key> once (next time the effect would apply)."
        }
      ]
    },
    "Magic Arrows": {
      "title": "Magic Arrows",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Pick one enemy unit within 12\", which takes 6 hits with <key>AP</key>(1) and <key>Crack</key>. Roll as many dice as hits to see if \"on rolls of 6\" effects trigger."
        }
      ]
    },
    "Barbed Chains": {
      "title": "Barbed Chains",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Pick one enemy unit within 18\", which takes 2 hits."
        }
      ]
    },
    "Cursed Stride": {
      "title": "Cursed Stride",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Pick one enemy unit within 18\", which counts as being in Dangerous Terrain once (next time the effect would apply)."
        }
      ]
    },
    "Havoc Boost": {
      "title": "Havoc Boost",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Pick up to two friendly units within 12\", which get <key>Havocbound Boost</key> once (next time the effect would apply)."
        }
      ]
    },
    "Impaling Spike": {
      "title": "Impaling Spike",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Pick one enemy model within 18\", which takes 4 hits with <key>AP</key>(1)."
        }
      ]
    },
    "Dark Shielding": {
      "title": "Dark Shielding",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Pick up to three friendly units within 12\", which get <key>Fortified</key> once (next time the effect would apply)."
        }
      ]
    },
    "Thorn Field": {
      "title": "Thorn Field",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Pick one enemy unit within 12\", which takes 6 hits with <key>AP</key>(1) and <key>Slam</key>."
        }
      ]
    },
    "Rune of Piercing": {
      "title": "Rune of Piercing",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Pick one friendly unit within 12\", which gets <key>Piercing Hunter</key> once (next time the effect would apply)."
        }
      ]
    },
    "Rune of Lightning": {
      "title": "Rune of Lightning",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Pick one enemy model within 24\", which takes 1 hit with <key>AP</key>(4)."
        }
      ]
    },
    "Rune of Ashes": {
      "title": "Rune of Ashes",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Pick up to two friendly units within 12\", which get <key>Havocbound Boost</key> once (next time the effect would apply)."
        }
      ]
    },
    "Rune of Darkness": {
      "title": "Rune of Darkness",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Pick one enemy unit within 6\", which takes 6 hits with <key>Purge</key>."
        }
      ]
    },
    "Rune of Cracking": {
      "title": "Rune of Cracking",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Pick up to three enemy units within 18\", which friendly units gets <key>Relentless</key> against once (next time the effect would apply)."
        }
      ]
    },
    "Rune of Insanity": {
      "title": "Rune of Insanity",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Pick one enemy unit within 18\", which takes 3 hits with <key>Blast</key>(3)."
        }
      ]
    },
    "Luck of the Ancients": {
      "title": "Luck of the Ancients",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Pick one friendly unit within 12\", which gets <key>Lucky Boost</key> once (next time the effect would apply)."
        }
      ]
    },
    "Cleansing Spirit": {
      "title": "Cleansing Spirit",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Pick one enemy unit within 12\", which takes 2 hits with <key>AP</key>(1) and <key>Bash</key>."
        }
      ]
    },
    "Giant Shadow": {
      "title": "Giant Shadow",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Pick up to two enemy units within 18\", which get -1 to morale test rolls once (next time the effect would apply)."
        }
      ]
    },
    "Nightmare Spirit": {
      "title": "Nightmare Spirit",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Pick one enemy unit within 12\", which takes 6 hits."
        }
      ]
    },
    "Shortling Courage": {
      "title": "Shortling Courage",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Pick up to three friendly units within 12\", which get <key>Fearless</key> once (next time the effect would apply)."
        }
      ]
    },
    "Dark Forest Spirit": {
      "title": "Dark Forest Spirit",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Pick one enemy unit within 6\", which takes 3 hits with <key>AP</key>(2) and <key>Deadly</key>(3)."
        }
      ]
    },
    "Spider Might": {
      "title": "Spider Might",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Pick one friendly unit within 12\", which gets <key>Mischievous Boost</key> once (next time the effect would apply)."
        }
      ]
    },
    "Stinging Spider": {
      "title": "Stinging Spider",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Pick one enemy unit within 6\", which takes 3 hits with <key>Bane</key>."
        }
      ]
    },
    "Bat Thirst": {
      "title": "Bat Thirst",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Pick up to two enemy units within 18\", which friendly units gets <key>Piercing Assault</key> against once (next time the effect would apply)."
        }
      ]
    },
    "Pouncing Wolf": {
      "title": "Pouncing Wolf",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Pick one enemy unit within 12\", which takes 4 hits with <key>AP</key>(2)."
        }
      ]
    },
    "Wolf Resiliance": {
      "title": "Wolf Resiliance",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Pick up to three friendly units within 12\", which get +1 to defense rolls once (next time the effect would apply)."
        }
      ]
    },
    "Biting Bat": {
      "title": "Biting Bat",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Pick one enemy unit within 6\", which takes 3 hits with <key>AP</key>(2) and <key>Skewer</key>."
        }
      ]
    },
    "Shock Attack": {
      "title": "Shock Attack",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Pick one enemy unit within 18\", which friendly units gets <key>Unstoppable</key> when shooting against once (next time the effect would apply)."
        }
      ]
    },
    "Thunder Clap": {
      "title": "Thunder Clap",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Pick one enemy unit within 18\", which takes 1 hit with <key>Smash</key>."
        }
      ]
    },
    "Star Strike": {
      "title": "Star Strike",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Pick up to two friendly units within 12\", which get <key>Unpredictable Fighter</key> once (next time the effect would apply)."
        }
      ]
    },
    "Heavy Storm": {
      "title": "Heavy Storm",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Pick up to two enemy units within 9\", which take 4 hits each."
        }
      ]
    },
    "Warding Cloud": {
      "title": "Warding Cloud",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Pick up to three friendly units within 12\", which get <key>Warden Boost</key> once (next time the effect would apply)."
        }
      ]
    },
    "Rune of Battle": {
      "title": "Rune of Battle",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Pick one friendly unit within 12\", which gets <key>Rapid Charge</key> once (next time the effect would apply)."
        }
      ]
    },
    "Rune of Breaking": {
      "title": "Rune of Breaking",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Pick one enemy model within 18\", which takes 2 hits with <key>AP</key>(1)."
        }
      ]
    },
    "Rune of Protection": {
      "title": "Rune of Protection",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Pick up to two friendly units within 12\", which get <key>Sturdy Boost</key> once (next time the effect would apply)."
        }
      ]
    },
    "Rune of Cleaving": {
      "title": "Rune of Cleaving",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Pick one enemy unit within 12\", which takes 4 hits with <key>AP</key>(1) and <key>Quake</key>."
        }
      ]
    },
    "Rune of Smiting": {
      "title": "Rune of Smiting",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Pick one enemy unit within 18\", which takes 3 hits with <key>Blast</key>(3)."
        }
      ]
    },
    "Rune of Spite": {
      "title": "Rune of Spite",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Pick up to three enemy units within 18\", which moves -2\" when using Advance actions and -4\" when using Rush/Charge actions once (next time the effect would apply)."
        }
      ]
    },
    "Clearview Leaves": {
      "title": "Clearview Leaves",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Pick one enemy unit within 18\", which friendly units get +6\" range when shooting against once (next time the effect would apply)."
        }
      ]
    },
    "Explosive Concoction": {
      "title": "Explosive Concoction",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Pick one enemy unit within 12\", which takes 2 hits with <key>Decimate</key>."
        }
      ]
    },
    "Mesmer Oils": {
      "title": "Mesmer Oils",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Pick up to two friendly units within 12\", which get <key>Steadfast</key> once (next time the effect would apply)."
        }
      ]
    },
    "Choking Fog": {
      "title": "Choking Fog",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Pick up to two enemy units within 9\", which take 4 hits each."
        }
      ]
    },
    "Fury Herbs": {
      "title": "Fury Herbs",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Pick up to three friendly units within 12\", which get <key>Vinci Tech Boost</key> once (next time the effect would apply)."
        }
      ]
    },
    "Neurotoxin Gas": {
      "title": "Neurotoxin Gas",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Pick one enemy unit within 12\", which takes 6 hits with <key>AP</key>(1) and <key>Shred</key>."
        }
      ]
    },
    "Spirit Wind": {
      "title": "Spirit Wind",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Pick one friendly unit within 12\", which gets <key>Rapid Rush</key> once (next time the effect would apply)."
        }
      ]
    },
    "Dragon Fire": {
      "title": "Dragon Fire",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Pick one enemy unit within 12\", which takes 3 hits."
        }
      ]
    },
    "Astral Storm": {
      "title": "Astral Storm",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Pick one enemy unit within 12\", which takes 4 hits with <key>AP</key>(1) and <key>Surge</key>. Roll as many dice as hits to see if \"on rolls of 6\" effects trigger."
        }
      ]
    },
    "Jade Claws": {
      "title": "Jade Claws",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Pick up to two friendly units within 12\", which get Royal Warrior Boost once (next time the effect would apply)."
        }
      ]
    },
    "Ancestral Guidance": {
      "title": "Ancestral Guidance",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Pick up to three enemy units within 18\", which friendly units gets <key>Indirect when Shooting</key> against once (next time the effect would apply)."
        }
      ]
    },
    "Blazing Starlight": {
      "title": "Blazing Starlight",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Pick one enemy model within 24\", which takes 3 hits with Splinter."
        }
      ]
    },
    "High Tide": {
      "title": "High Tide",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Pick one friendly unit within 12\", which gets <key>Stealth</key> once (next time the effect would apply)."
        }
      ]
    },
    "Erode Soul": {
      "title": "Erode Soul",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Pick one enemy model within 24\", which takes 1 hit with <key>AP</key>(4)."
        }
      ]
    },
    "Crushing Pressure": {
      "title": "Crushing Pressure",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Pick up to two enemy units within 12\", which take 2 hits with <key>AP</key>(2) each."
        }
      ]
    },
    "Power Wave": {
      "title": "Power Wave",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Pick up to two friendly units within 12\", which get <key>Wave-Step Boost</key> once (next time the effect would apply)."
        }
      ]
    },
    "Darkest Abyss": {
      "title": "Darkest Abyss",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Pick up to three enemy units within 18\", which get -1 to hit rolls when attacking once (next time the effect would apply)."
        }
      ]
    },
    "Sea Storm": {
      "title": "Sea Storm",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Pick one enemy unit within 18\", which takes 3 hits with <key>Thrash</key>."
        }
      ]
    },
    "Dark Isle Spirit": {
      "title": "Dark Isle Spirit",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Pick one friendly unit within 12\", which gets <key>Harassing Boost</key> once (next time the effect would apply)."
        }
      ]
    },
    "Blade Storm": {
      "title": "Blade Storm",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Pick one enemy unit within 12\", which takes 2 hits with <key>AP</key>(1) and <key>Lacerate</key>."
        }
      ]
    },
    "World of Pain": {
      "title": "World of Pain",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Pick up to two enemy units within 18\", which friendly units gets <key>Thrust</key> against once (next time the effect would apply)."
        }
      ]
    },
    "Storm Wave": {
      "title": "Storm Wave",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Pick one enemy unit within 18\", which takes 2 hits with <key>Blast</key>(3)."
        }
      ]
    },
    "Healing Winds": {
      "title": "Healing Winds",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Pick up to three friendly units within 12\", which get Regeneration once (next time the effect would apply)."
        }
      ]
    },
    "Black Bolt": {
      "title": "Black Bolt",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Pick one enemy unit within 6\", which takes 3 hits with <key>AP</key>(2) and <key>Deadly</key>(3)."
        }
      ]
    },
    "Protection of the Huntress": {
      "title": "Protection of the Huntress",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Pick one friendly unit within 12\", which gets <key>Fortified</key> once (next time the effect would apply)."
        }
      ]
    },
    "Cleansing Light": {
      "title": "Cleansing Light",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Pick one enemy model within 24\", which takes 1 hit with <key>Puncture</key>."
        }
      ]
    },
    "Great Hunt": {
      "title": "Great Hunt",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Pick up to two friendly units within 12\", which get <key>Vale Formation Boost</key> once (next time the effect would apply)."
        }
      ]
    },
    "Searing Gaze": {
      "title": "Searing Gaze",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Pick one enemy unit within 6\", which takes 6 hits with <key>Bane</key>."
        }
      ]
    },
    "Curse of the Huntress": {
      "title": "Curse of the Huntress",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Pick up to three enemy units within 18\", which friendly units gets <key>Impact</key>(1) against once (next time the effect would apply)."
        }
      ]
    },
    "Wrath of the Huntress": {
      "title": "Wrath of the Huntress",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Pick one enemy unit within 12\", which takes 6 hits with <key>AP</key>(2)."
        }
      ]
    },
    "Surge of Power": {
      "title": "Surge of Power",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Pick one friendly unit within 12\", which gets <key>Bestial Boost</key> once (next time the effect would apply)."
        }
      ]
    },
    "Flock Attack": {
      "title": "Flock Attack",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Pick one enemy unit within 12\", which takes 2 hits with <key>AP</key>(1) and <key>Surge</key>. Roll as many dice as hits to see if \"on rolls of 6\" effects trigger."
        }
      ]
    },
    "Hunting Roar": {
      "title": "Hunting Roar",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Pick up to two enemy units within 18\", which get -1 to morale test rolls once (next time the effect would apply)."
        }
      ]
    },
    "Ancestral Wrath": {
      "title": "Ancestral Wrath",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Pick one enemy model within 24\", which takes 2 hits with <key>Tear</key>."
        }
      ]
    },
    "Spirit Mantle": {
      "title": "Spirit Mantle",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Pick up to three friendly units within 12\", which get Regeneration once (next time the effect would apply)."
        }
      ]
    },
    "Destructive Flame": {
      "title": "Destructive Flame",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Pick one enemy unit within 12\", which takes 9 hits."
        }
      ]
    },
    "Absorption Amplifier": {
      "title": "Absorption Amplifier",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to four friendly units within 12\", which get <key><key>Ballistic Vest</key> Boost</key> once (next time the effect would apply)."
        }
      ]
    },
    "Advanced Sight": {
      "title": "Advanced Sight",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to two enemy units within 18\", which friendly units gets <key>Unstoppable</key> when shooting against once (next time the effect would apply)."
        }
      ]
    },
    "Ammo Boost": {
      "title": "Ammo Boost",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to two friendly units within 12\", which get <key><key>Mischievous</key> Boost</key> once (next time the effect would apply)."
        }
      ]
    },
    "Animate Spirit": {
      "title": "Animate Spirit",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to two friendly units within 12\", which get <key><key>Hit & Run</key> Fighter</key> once (next time the effect would apply)."
        }
      ]
    },
    "Apparition of Doom": {
      "title": "Apparition of Doom",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick one enemy unit within 12\", which takes 2 hits with <key>AP</key>(1) and <key>Quake</key>."
        }
      ]
    },
    "Armor Rune": {
      "title": "Armor Rune",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to four friendly units within 12\", which get <key><key>Sturdy</key> Boost</key> once (next time the effect would apply)."
        }
      ]
    },
    "Art of Pain": {
      "title": "Art of Pain",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to two enemy units within 6\", which take 1 hit with <key>AP</key>(2) and <key>Deadly</key>(3) each."
        }
      ]
    },
    "Asphyxiating Fog": {
      "title": "Asphyxiating Fog",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to two friendly units within 12\", which get <key><key>Counter</key>-Attack</key> once (next time the effect would apply)."
        }
      ]
    },
    "Assign Bounty": {
      "title": "Assign Bounty",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to six enemy units within 18\", which friendly units gets <key>Impact</key>(1) against once (next time the effect would apply)."
        }
      ]
    },
    "Aura of Peace": {
      "title": "Aura of Peace",
      "description": [
        {
          "system": "Rebel Guerrillas",
          "cost": 0,
          "text": "Pick up to two friendly units within 12\", which get +1 to morale test rolls once (next time the effect would apply)."
        },
        {
          "system": "DAO Union",
          "cost": 0,
          "text": "Pick up to two friendly units within 12\", which get <key>Fearless</key> once (next time the effect would apply)."
        }
      ]
    },
    "Bad Omen": {
      "title": "Bad Omen",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to four enemy units within 18\", which friendly units gets <key>Furious</key> against once (next time the effect would apply)."
        }
      ]
    },
    "Badland Frenzy": {
      "title": "Badland Frenzy",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to two friendly units within 12\", which get <key><key>Badlands <key>Hunter</key></key> Boost</key> once (next time the effect would apply)."
        }
      ]
    },
    "Banishing Sigil": {
      "title": "Banishing Sigil",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to four enemy units within 18\", which get -1 to defense rolls once (next time the effect would apply)."
        }
      ]
    },
    "Battle Rune": {
      "title": "Battle Rune",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to two friendly units within 12\", which get +6\" range when shooting once (next time the effect would apply)."
        }
      ]
    },
    "Berserker Frenzy": {
      "title": "Berserker Frenzy",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to four enemy units within 18\", which friendly units gets <key>AP</key>(+1) when charging against once (next time the effect would apply)."
        }
      ]
    },
    "Bio-Displacer": {
      "title": "Bio-Displacer",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to six friendly units within 12\", which get <key>Teleport</key> once (next time the effect would apply)."
        }
      ]
    },
    "Bio-Horror": {
      "title": "Bio-Horror",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick one enemy unit within 12\", which takes 2 hits with <key>AP</key>(1) and <key>Surge</key>. Roll as many dice as hits to see if \"on rolls of 6\" effects trigger."
        }
      ]
    },
    "Blades of Discord": {
      "title": "Blades of Discord",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick one enemy unit within 6\", which takes 1 hit with <key>AP</key>(2) and <key>Deadly</key>(3)."
        }
      ]
    },
    "Blessed Ammo": {
      "title": "Blessed Ammo",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to four friendly units within 12\", which get <key>Shred</key> when shooting once (next time the effect would apply)."
        }
      ]
    },
    "Blessing of Souls": {
      "title": "Blessing of Souls",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to six friendly units within 12\", which get <key><key>Highborn</key> Boost</key> once (next time the effect would apply)."
        }
      ]
    },
    "Blood Dome": {
      "title": "Blood Dome",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to six friendly units within 12\", which get <key>Evasive</key> once (next time the effect would apply)."
        }
      ]
    },
    "Blood Sight": {
      "title": "Blood Sight",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to two enemy units within 18\", which friendly units gets <key>Unstoppable</key> when shooting against once (next time the effect would apply)."
        }
      ]
    },
    "Blood Trauma": {
      "title": "Blood Trauma",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick one enemy unit within 18\", which takes 1 hit with <key>Smash</key>."
        }
      ]
    },
    "Blood Wound": {
      "title": "Blood Wound",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick one enemy unit within 12\", which takes 2 hits with <key>Demolish</key>."
        }
      ]
    },
    "Boom!": {
      "title": "Boom!",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to two enemy units within 18\", which take 1 hit with <key>Blast</key>(3) each."
        }
      ]
    },
    "Brain Burst": {
      "title": "Brain Burst",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to three enemy units within 6\", which take 1 hit with <key>AP</key>(2) and <key>Deadly</key>(3) each."
        }
      ]
    },
    "Brain Infestation": {
      "title": "Brain Infestation",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to four enemy units within 18\", which get -1 to hit rolls when attacking once (next time the effect would apply)."
        }
      ]
    },
    "Breaking Rune": {
      "title": "Breaking Rune",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick one enemy model within 24\", which takes 1 hit with <key>AP</key>(4)."
        }
      ]
    },
    "Brute Guts": {
      "title": "Brute Guts",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to four friendly units within 12\", which get <key>Fearless</key> once (next time the effect would apply)."
        }
      ]
    },
    "Burn the Heretic": {
      "title": "Burn the Heretic",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to two enemy units within 18\", which get -3 to casting rolls once (next time the effect would apply)."
        }
      ]
    },
    "Burst of Rage": {
      "title": "Burst of Rage",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to four friendly units within 12\", which get <key>Furious</key> once (next time the effect would apply)."
        }
      ]
    },
    "Calculated Foresight": {
      "title": "Calculated Foresight",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to four enemy units within 18\", which friendly units gets <key>Relentless</key> against once (next time the effect would apply)."
        }
      ]
    },
    "Celestial Roar": {
      "title": "Celestial Roar",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to six friendly units within 12\", which get <key><key>Primal</key> Boost</key> once (next time the effect would apply)."
        }
      ]
    },
    "Cerebral Trauma": {
      "title": "Cerebral Trauma",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick one enemy unit within 18\", which takes 1 hit with <key>Smash</key>."
        }
      ]
    },
    "Choking Gas": {
      "title": "Choking Gas",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to two enemy units within 6\", which take 3 hits with <key>Bane</key> each."
        }
      ]
    },
    "Choking Waste-Fog": {
      "title": "Choking Waste-Fog",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to two enemy units within 12\", which take 3 hits each."
        }
      ]
    },
    "Clan Power": {
      "title": "Clan Power",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to two friendly units within 12\", which get <key><key>Berserker</key> Boost</key> once (next time the effect would apply)."
        }
      ]
    },
    "Cleaving Rune": {
      "title": "Cleaving Rune",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to three enemy units within 18\", which take 1 hit with <key>Blast</key>(3) each."
        }
      ]
    },
    "Coordinated Aggression": {
      "title": "Coordinated Aggression",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to six enemy units within 18\", which friendly units gets <key>AP</key>(1) when shooting against once (next time the effect would apply)."
        }
      ]
    },
    "Corpo-Network Link": {
      "title": "Corpo-Network Link",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to six friendly units within 12\", which get <key><key>Cyber-Eyes</key> Boost</key> once (next time the effect would apply)."
        }
      ]
    },
    "Corrode Weapons": {
      "title": "Corrode Weapons",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to six enemy units within 18\", which loses <key>AP</key>(1) when shooting once (next time the effect would apply)."
        }
      ]
    },
    "Cracking Blast": {
      "title": "Cracking Blast",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to four enemy units within 18\", which get -1 to defense rolls once (next time the effect would apply)."
        }
      ]
    },
    "Crackling Bolt": {
      "title": "Crackling Bolt",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to three enemy units within 18\", which take 1 hit with <key>Blast</key>(3) each."
        }
      ]
    },
    "Creator of Illusions": {
      "title": "Creator of Illusions",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to two enemy units within 18\", which get <key>Unwieldy</key> in melee once (next time the effect would apply)."
        }
      ]
    },
    "Crush!": {
      "title": "Crush!",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to two enemy units within 18\", which take 1 hit with <key>Blast</key>(3) each."
        }
      ]
    },
    "Crushing Force": {
      "title": "Crushing Force",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to three enemy units within 12\", which take 2 hits with <key>AP</key>(2) each."
        }
      ]
    },
    "Cyber-City Connection": {
      "title": "Cyber-City Connection",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to two friendly units within 12\", which get <key><key>Runner</key> Boost</key> once (next time the effect would apply)."
        }
      ]
    },
    "Cyberspace Vision": {
      "title": "Cyberspace Vision",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to two enemy units within 18\", which friendly units get +6\" range when shooting against once (next time the effect would apply)."
        }
      ]
    },
    "Cyborg Assault": {
      "title": "Cyborg Assault",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to two friendly units within 12\", which get <key><key>Hit & Run</key> Shooter</key> once (next time the effect would apply)."
        }
      ]
    },
    "Dark Assault": {
      "title": "Dark Assault",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to four friendly units within 12\", which get <key>Shred</key> in melee once (next time the effect would apply)."
        }
      ]
    },
    "Dark Dome": {
      "title": "Dark Dome",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to six friendly units within 12\", which get <key>Evasive</key> once (next time the effect would apply)."
        }
      ]
    },
    "Dark Mist": {
      "title": "Dark Mist",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to six enemy units within 18\", which get -1 to hit rolls when attacking once (next time the effect would apply)."
        }
      ]
    },
    "Dark Sight": {
      "title": "Dark Sight",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to two enemy units within 18\", which friendly units gets <key>Unstoppable</key> when shooting against once (next time the effect would apply)."
        }
      ]
    },
    "Dark Trauma": {
      "title": "Dark Trauma",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick one enemy unit within 18\", which takes 1 hit with <key>Smash</key>."
        }
      ]
    },
    "Dark Wound": {
      "title": "Dark Wound",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick one enemy unit within 12\", which takes 2 hits with <key>Demolish</key>."
        }
      ]
    },
    "Deadly Surge": {
      "title": "Deadly Surge",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to two enemy units within 6\", which take 3 hits with <key>Bane</key> each."
        }
      ]
    },
    "Death Bolt": {
      "title": "Death Bolt",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick one enemy unit within 6\", which takes 1 hit with <key>AP</key>(2) and <key>Impale</key>."
        }
      ]
    },
    "Deceleration Rune": {
      "title": "Deceleration Rune",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to six enemy units within 18\", which moves -2\" when using Advance actions and -4\" when using Rush/Charge actions once (next time the effect would apply)."
        }
      ]
    },
    "Deep Hypnosis": {
      "title": "Deep Hypnosis",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to four enemy units within 18\", which must take a morale test. If failed you may move it by up to 6\" in a straight line in any direction."
        }
      ]
    },
    "Deep Meditation": {
      "title": "Deep Meditation",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to six friendly units within 12\", which get +1 to hit rolls when shooting once (next time the effect would apply)."
        }
      ]
    },
    "Destroy!": {
      "title": "Destroy!",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to three enemy units within 6\", which take 1 hit with <key>AP</key>(2) and <key>Impale</key> each."
        }
      ]
    },
    "Devastating Strike": {
      "title": "Devastating Strike",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to three enemy units within 12\", which take 2 hits with <key>Decimate</key> each."
        }
      ]
    },
    "Devour Essence": {
      "title": "Devour Essence",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick one enemy model within 18\", which takes 2 hits with <key>AP</key>(1)."
        }
      ]
    },
    "Disastrous Malfunction": {
      "title": "Disastrous Malfunction",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to three enemy units within 18\", which take 2 hits each."
        }
      ]
    },
    "Dome of Doom": {
      "title": "Dome of Doom",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to two enemy units within 12\", which take 3 hits each."
        }
      ]
    },
    "Doom Strike": {
      "title": "Doom Strike",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to two enemy units within 6\", which take 1 hit with <key>AP</key>(2) and <key>Deadly</key>(3) each."
        }
      ]
    },
    "Dragon Breath": {
      "title": "Dragon Breath",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to three enemy units within 12\", which take 3 hits each."
        }
      ]
    },
    "Dread Strike": {
      "title": "Dread Strike",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to two enemy models within 24\", which take 1 hit with <key>Tear</key> each."
        }
      ]
    },
    "Elder Protection": {
      "title": "Elder Protection",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to two friendly units within 12\", which get <key>Resistance</key> once (next time the effect would apply)."
        }
      ]
    },
    "Electric Bolt": {
      "title": "Electric Bolt",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to three enemy units within 6\", which take 1 hit with <key>AP</key>(2) and <key>Deadly</key>(3) each."
        }
      ]
    },
    "Electric Tempest": {
      "title": "Electric Tempest",
      "description": [
        {
          "system": "Human Defense Force",
          "cost": 0,
          "text": "Pick one enemy unit within 12\", which takes 2 hits with <key>AP</key>(1) and <key>Fracture</key>. Roll as many dice as hits to see if \"on rolls of 6\" effects trigger."
        },
        {
          "system": "Human Inquisition",
          "cost": 0,
          "text": "Pick one enemy unit within 12\", which takes 2 hits with <key>AP</key>(1) and <key>Surge</key>. Roll as many dice as hits to see if \"on rolls of 6\" effects trigger."
        }
      ]
    },
    "Elemental Seeker": {
      "title": "Elemental Seeker",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick one enemy unit within 18\", which takes 1 hit with <key>Blast</key>(3)."
        }
      ]
    },
    "EMP Blast": {
      "title": "EMP Blast",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to three enemy units within 12\", which take 2 hits with <key>AP</key>(1) and <key>Shred</key> each."
        }
      ]
    },
    "Energy Storm": {
      "title": "Energy Storm",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick one enemy unit within 12\", which takes 2 hits with <key>AP</key>(1) and <key>Crack</key>. Roll as many dice as hits to see if \"on rolls of 6\" effects trigger."
        }
      ]
    },
    "Enhance Serum": {
      "title": "Enhance Serum",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to six friendly units within 12\", which get Regeneration once (next time the effect would apply)."
        }
      ]
    },
    "Eternal Flame": {
      "title": "Eternal Flame",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to two enemy units within 6\", which take 3 hits with <key>Purge</key> each."
        }
      ]
    },
    "Eternal Guidance": {
      "title": "Eternal Guidance",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to six enemy units within 18\", which friendly units get +6\" range when shooting against once (next time the effect would apply)."
        }
      ]
    },
    "Expel Threat": {
      "title": "Expel Threat",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to three enemy models within 18\", which take 2 hits with <key>AP</key>(1) each."
        }
      ]
    },
    "Fade in the Dark": {
      "title": "Fade in the Dark",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to six friendly units within 12\", which get <key>Stealth</key> once (next time the effect would apply)."
        }
      ]
    },
    "Fatal Sorrow": {
      "title": "Fatal Sorrow",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to three enemy units within 18\", which take 2 hits each."
        }
      ]
    },
    "Feral Strike": {
      "title": "Feral Strike",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to three enemy units within 6\", which take 1 hit with <key>AP</key>(2) and <key>Deadly</key>(3) each."
        }
      ]
    },
    "Flame Bots": {
      "title": "Flame Bots",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to four enemy units within 9\", which take 2 hits each."
        }
      ]
    },
    "Focused Defender": {
      "title": "Focused Defender",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to four friendly units within 12\", which get <key><key>Unpredictable</key> Fighter</key> once (next time the effect would apply)."
        }
      ]
    },
    "Focused Shock": {
      "title": "Focused Shock",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick one enemy unit within 12\", which takes 2 hits with <key>AP</key>(1) and <key>Shred</key>."
        }
      ]
    },
    "Forge Protection": {
      "title": "Forge Protection",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to six friendly units within 12\", which get +1 to defense rolls once (next time the effect would apply)."
        }
      ]
    },
    "Gauss Bots": {
      "title": "Gauss Bots",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to three enemy units within 6\", which take 3 hits with <key>Destructive</key> each. Roll as many dice as hits to see if \"on rolls of 6\" effects trigger."
        }
      ]
    },
    "Godly Thunder": {
      "title": "Godly Thunder",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to two enemy models within 24\", which take 1 hit with <key>AP</key>(4) each."
        }
      ]
    },
    "Great Psy-Maw": {
      "title": "Great Psy-Maw",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to three enemy units within 12\", which take 2 hits with <key>AP</key>(2) each."
        }
      ]
    },
    "Guardian Protection": {
      "title": "Guardian Protection",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to six friendly units within 12\", which get <key><key>Guardian</key> Boost</key> once (next time the effect would apply)."
        }
      ]
    },
    "Havoc Boon": {
      "title": "Havoc Boon",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to six friendly units within 12\", which get <key><key>Havocbound</key> Boost</key> once (next time the effect would apply)."
        }
      ]
    },
    "Havoc Fog": {
      "title": "Havoc Fog",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to three enemy units within 12\", which take 2 hits with <key>AP</key>(1) and <key>Slam</key> each."
        }
      ]
    },
    "Havoc Terror": {
      "title": "Havoc Terror",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to four enemy units within 9\", which take 2 hits each."
        }
      ]
    },
    "Havoc Trauma": {
      "title": "Havoc Trauma",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick one enemy unit within 12\", which takes 2 hits with <key>AP</key>(2)."
        }
      ]
    },
    "Head Bang": {
      "title": "Head Bang",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to six enemy units within 18\", which friendly units gets <key>Rending</key> in melee against once (next time the effect would apply)."
        }
      ]
    },
    "Heavenly Lance": {
      "title": "Heavenly Lance",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to two enemy models within 18\", which take 2 hits with <key>AP</key>(1) each."
        }
      ]
    },
    "Hidden Spirits": {
      "title": "Hidden Spirits",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to four friendly units within 12\", which get <key><key>Unpredictable</key> Shooter</key> once (next time the effect would apply)."
        }
      ]
    },
    "Hive Shriek": {
      "title": "Hive Shriek",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to three enemy models within 18\", which take 2 hits with <key>AP</key>(1) each."
        }
      ]
    },
    "Holistic Suffering": {
      "title": "Holistic Suffering",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to three enemy units within 12\", which take 3 hits each."
        }
      ]
    },
    "Holy Rage": {
      "title": "Holy Rage",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to four friendly units within 12\", which get <key>Piercing <key>Hunter</key></key> once (next time the effect would apply)."
        }
      ]
    },
    "Infuse Bloodthirst": {
      "title": "Infuse Bloodthirst",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to four friendly units within 12\", which get <key><key>Hive Bond</key> Boost</key> once (next time the effect would apply)."
        }
      ]
    },
    "Insidious Protection": {
      "title": "Insidious Protection",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to two friendly units within 12\", which get <key>Grounded <key>Reinforcement</key></key> once (next time the effect would apply)."
        }
      ]
    },
    "Inspiring Bots": {
      "title": "Inspiring Bots",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to four friendly units within 12\", which get <key>Rapid Advance</key> once (next time the effect would apply)."
        }
      ]
    },
    "Jaguar Blaze": {
      "title": "Jaguar Blaze",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to three enemy units within 12\", which take 2 hits with <key>AP</key>(1) and <key>Shred</key> each."
        }
      ]
    },
    "Killing Blow": {
      "title": "Killing Blow",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick one enemy model within 18\", which takes 2 hits with <key>AP</key>(1)."
        }
      ]
    },
    "Knight Dome": {
      "title": "Knight Dome",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to six friendly units within 12\", which get <key>Evasive</key> once (next time the effect would apply)."
        }
      ]
    },
    "Knight Sight": {
      "title": "Knight Sight",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to two enemy units within 18\", which friendly units gets <key>Unstoppable</key> when shooting against once (next time the effect would apply)."
        }
      ]
    },
    "Knight Trauma": {
      "title": "Knight Trauma",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick one enemy unit within 18\", which takes 1 hit with <key>Smash</key>."
        }
      ]
    },
    "Knight Wound": {
      "title": "Knight Wound",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick one enemy unit within 12\", which takes 2 hits with <key>Demolish</key>."
        }
      ]
    },
    "Light Fragments": {
      "title": "Light Fragments",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to two enemy units within 12\", which take 2 hits with <key>AP</key>(1) and <key>Fragment</key> each."
        }
      ]
    },
    "Lightning Fog": {
      "title": "Lightning Fog",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to four enemy units within 9\", which take 2 hits each."
        }
      ]
    },
    "Litanies of War": {
      "title": "Litanies of War",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to six friendly units within 12\", which get <key><key>Devout</key> Boost</key> once (next time the effect would apply)."
        }
      ]
    },
    "Lore of Bravery": {
      "title": "Lore of Bravery",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to six friendly units within 12\", which get <key>Fearless</key> once (next time the effect would apply)."
        }
      ]
    },
    "Lore of Protection": {
      "title": "Lore of Protection",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to two friendly units within 12\", which get <key><key>Safety Gear</key> Boost</key> once (next time the effect would apply)."
        }
      ]
    },
    "Lore of Terror": {
      "title": "Lore of Terror",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to four enemy units within 18\", which get -1 to morale test rolls once (next time the effect would apply)."
        }
      ]
    },
    "Means of Destruction": {
      "title": "Means of Destruction",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to six enemy units within 18\", which friendly units gets <key>Slayer</key> against once (next time the effect would apply)."
        }
      ]
    },
    "Mending Bots": {
      "title": "Mending Bots",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to six friendly units within 12\", which get <key><key>Self-Repair</key> Boost</key> once (next time the effect would apply)."
        }
      ]
    },
    "Mind Breaker": {
      "title": "Mind Breaker",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick one enemy unit within 12\", which takes 2 hits with <key>AP</key>(1) and <key>Surge</key>. Roll as many dice as hits to see if \"on rolls of 6\" effects trigger."
        }
      ]
    },
    "Mind Corruption": {
      "title": "Mind Corruption",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick one enemy unit within 12\", which takes 2 hits with <key>AP</key>(1) and <key>Surge</key>. Roll as many dice as hits to see if \"on rolls of 6\" effects trigger."
        }
      ]
    },
    "Mind Gash": {
      "title": "Mind Gash",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to three enemy units within 12\", which take 2 hits with <key>AP</key>(1) and <key>Shred</key> each."
        }
      ]
    },
    "Mind Shaper": {
      "title": "Mind Shaper",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to four enemy units within 18\", which get -1 to morale test rolls once (next time the effect would apply)."
        }
      ]
    },
    "Mind Vortex": {
      "title": "Mind Vortex",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to four enemy units within 12\", which take 1 hit with <key>AP</key>(2) each."
        }
      ]
    },
    "Mind Wound": {
      "title": "Mind Wound",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick one enemy unit within 12\", which takes 2 hits with <key>Demolish</key>."
        }
      ]
    },
    "Mob Frenzy": {
      "title": "Mob Frenzy",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to four enemy units within 18\", which friendly units gets <key>AP</key>(1) when shooting against once (next time the effect would apply)."
        }
      ]
    },
    "Neurotoxin Cloud": {
      "title": "Neurotoxin Cloud",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to four enemy units within 6\", which take 2 hits each."
        }
      ]
    },
    "Nightmare Vision": {
      "title": "Nightmare Vision",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick one enemy model within 24\", which takes 1 hit with <key>AP</key>(4)."
        }
      ]
    },
    "Nomad Strike": {
      "title": "Nomad Strike",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to two enemy units within 12\", which take 1 hit with <key>AP</key>(2) each."
        }
      ]
    },
    "Obscuring Energy": {
      "title": "Obscuring Energy",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to four friendly units within 12\", which get <key><key>Shadow Operative</key> Boost</key> once (next time the effect would apply)."
        }
      ]
    },
    "Overload Electronics": {
      "title": "Overload Electronics",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick one enemy unit within 12\", which takes 2 hits with <key>Scratch</key>."
        }
      ]
    },
    "Overwhelming Strike": {
      "title": "Overwhelming Strike",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick one enemy unit within 12\", which takes 2 hits with <key>AP</key>(1) and <key>Rupture</key>. Roll as many dice as hits to see if \"on rolls of 6\" effects trigger."
        }
      ]
    },
    "Path of War": {
      "title": "Path of War",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to four friendly units within 12\", which get <key><key>Ferocious</key> Boost</key> once (next time the effect would apply)."
        }
      ]
    },
    "Piercing Bots": {
      "title": "Piercing Bots",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick one enemy unit within 12\", which takes 2 hits with <key>AP</key>(2)."
        }
      ]
    },
    "Piercing Pulse": {
      "title": "Piercing Pulse",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to three enemy models within 24\", which take 1 hit with <key>AP</key>(4) each."
        }
      ]
    },
    "Pike of Doom": {
      "title": "Pike of Doom",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to three enemy units within 6\", which take 1 hit with <key>AP</key>(2) and <key>Deadly</key>(3) each."
        }
      ]
    },
    "Piranha Curse": {
      "title": "Piranha Curse",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to four enemy units within 9\", which take 2 hits each."
        }
      ]
    },
    "Pow!": {
      "title": "Pow!",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to three enemy units within 6\", which take 1 hit with <key>AP</key>(2) and <key>Skewer</key> each."
        }
      ]
    },
    "Power Beam": {
      "title": "Power Beam",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick one enemy model within 18\", which takes 2 hits with <key>AP</key>(1)."
        }
      ]
    },
    "Power Field": {
      "title": "Power Field",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to six friendly units within 12\", which get <key>Shielded</key> once (next time the effect would apply)."
        }
      ]
    },
    "Power Maw": {
      "title": "Power Maw",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to two enemy units within 12\", which take 1 hit with <key>AP</key>(2) each."
        }
      ]
    },
    "Power Surge": {
      "title": "Power Surge",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to three enemy models within 12\", which take 2 hits with <key>Hazardous</key> each. Roll as many dice as hits to see if \"on rolls of 1\" effects trigger."
        }
      ]
    },
    "Protective Dome": {
      "title": "Protective Dome",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to six friendly units within 12\", which get <key>Evasive</key> once (next time the effect would apply)."
        }
      ]
    },
    "Psy-Adrenaline": {
      "title": "Psy-Adrenaline",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to two friendly units within 12\", which get <key><key>Harassing</key> Boost</key> once (next time the effect would apply)."
        }
      ]
    },
    "Psy-Cleansing": {
      "title": "Psy-Cleansing",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to two enemy units within 12\", which take 2 hits with <key>Disintegrate</key> each."
        }
      ]
    },
    "Psy-Destruction": {
      "title": "Psy-Destruction",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to two enemy models within 24\", which take 1 hit with <key>AP</key>(4) each."
        }
      ]
    },
    "Psy-Emowerment": {
      "title": "Psy-Emowerment",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to two friendly units within 12\", which get <key>AP</key>(1) when attacking once (next time the effect would apply)."
        }
      ]
    },
    "Psy-Flame": {
      "title": "Psy-Flame",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick one enemy unit within 12\", which takes 2 hits with <key>AP</key>(1) and <key>Surge</key>. Roll as many dice as hits to see if \"on rolls of 6\" effects trigger."
        }
      ]
    },
    "Psy-Frenzy": {
      "title": "Psy-Frenzy",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to two friendly units within 12\", which get <key><key>Psychotic</key> Boost</key> once (next time the effect would apply)."
        }
      ]
    },
    "Psy-Hunter": {
      "title": "Psy-Hunter",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to two friendly units within 12\", which get <key><key>Scrapper</key> Boost</key> once (next time the effect would apply)."
        }
      ]
    },
    "Psy-Incense": {
      "title": "Psy-Incense",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to four enemy units within 18\", which friendly units gets <key>Bane</key> when attacking against once (next time the effect would apply)."
        }
      ]
    },
    "Psy-Injected Courage": {
      "title": "Psy-Injected Courage",
      "description": [
        {
          "system": "Human Inquisition",
          "cost": 0,
          "text": "Pick up to two friendly units within 12\", which get +1 to morale test rolls once (next time the effect would apply)."
        },
        {
          "system": "Human Defense Force",
          "cost": 0,
          "text": "Pick up to two friendly units within 12\", which get <key><key>Hold the Line</key> Boost</key> once (next time the effect would apply)."
        }
      ]
    },
    "Psy-Rapture": {
      "title": "Psy-Rapture",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to three enemy units within 18\", which take 2 hits each."
        }
      ]
    },
    "Psy-Strength": {
      "title": "Psy-Strength",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to six friendly units within 12\", which get +1 to hit rolls in melee once (next time the effect would apply)."
        }
      ]
    },
    "Psychic Blast": {
      "title": "Psychic Blast",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to two enemy units within 12\", which take 2 hits with <key>AP</key>(2) each."
        }
      ]
    },
    "Psychic Chains": {
      "title": "Psychic Chains",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to six enemy units within 18\", which get <key>Unwieldy</key> in melee once (next time the effect would apply)."
        }
      ]
    },
    "Psychic Feast": {
      "title": "Psychic Feast",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to two friendly units within 12\", which get <key>Resistance</key> once (next time the effect would apply)."
        }
      ]
    },
    "Psychic Flurry": {
      "title": "Psychic Flurry",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to six friendly units within 12\", which get <key>Melee <key>Slayer</key></key> once (next time the effect would apply)."
        }
      ]
    },
    "Psychic Onslaught": {
      "title": "Psychic Onslaught",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to two enemy units within 12\", which take 2 hits with <key>Reap</key> each."
        }
      ]
    },
    "Psychic Overload": {
      "title": "Psychic Overload",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to three enemy units within 12\", which take 2 hits with <key>AP</key>(1) and <key>Fragment</key> each."
        }
      ]
    },
    "Psychic Smash": {
      "title": "Psychic Smash",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to four enemy units within 12\", which take 1 hit with <key>AP</key>(2) each."
        }
      ]
    },
    "Psychic Stabilization": {
      "title": "Psychic Stabilization",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to four friendly units within 12\", which get <key><key>Targeting Visor</key> Boost</key> once (next time the effect would apply)."
        }
      ]
    },
    "Psychic Terror": {
      "title": "Psychic Terror",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to three enemy units within 6\", which take 3 hits with <key>Bane</key> each."
        }
      ]
    },
    "Psychic Vomit": {
      "title": "Psychic Vomit",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to two enemy units within 6\", which take 3 hits with <key>Bane</key> each."
        }
      ]
    },
    "Purge the Impure": {
      "title": "Purge the Impure",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to six enemy units within 12\", which take 1 hit with <key>AP</key>(2) each."
        }
      ]
    },
    "Quill Blast": {
      "title": "Quill Blast",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to two enemy units within 12\", which take 2 hits with <key>Scratch</key> each."
        }
      ]
    },
    "Raiding Drugs": {
      "title": "Raiding Drugs",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to four enemy units within 18\", which friendly units get +1 to hit rolls in melee against once (next time the effect would apply)."
        }
      ]
    },
    "Rapid Mutation": {
      "title": "Rapid Mutation",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to six friendly units within 12\", which get Regeneration once (next time the effect would apply)."
        }
      ]
    },
    "Resonance Wave": {
      "title": "Resonance Wave",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to six friendly units within 12\", which get Regeneration once (next time the effect would apply)."
        }
      ]
    },
    "Righteous Fury": {
      "title": "Righteous Fury",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to four friendly units within 12\", which get <key>Piercing Assault</key> once (next time the effect would apply)."
        }
      ]
    },
    "Righteous Wrath": {
      "title": "Righteous Wrath",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick one enemy model within 24\", which takes 1 hit with <key>AP</key>(4)."
        }
      ]
    },
    "Running Shock": {
      "title": "Running Shock",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to four enemy units within 18\", which friendly units gets <key>Thrust</key> against once (next time the effect would apply)."
        }
      ]
    },
    "Searing Admonition": {
      "title": "Searing Admonition",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to three enemy units within 18\", which take 1 hit with <key>Blast</key>(3) each."
        }
      ]
    },
    "Searing Burst": {
      "title": "Searing Burst",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to two enemy units within 12\", which take 3 hits each."
        }
      ]
    },
    "Searing Shrapnel": {
      "title": "Searing Shrapnel",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to two enemy units within 12\", which take 2 hits with <key>AP</key>(1) and <key>Wreck</key> each."
        }
      ]
    },
    "Serpent Comet": {
      "title": "Serpent Comet",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick one enemy unit within 12\", which takes 2 hits with <key>Disintegrate</key>."
        }
      ]
    },
    "Shadow Blast": {
      "title": "Shadow Blast",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to four enemy units within 12\", which take 1 hit with <key>AP</key>(2) each."
        }
      ]
    },
    "Shadow Dance": {
      "title": "Shadow Dance",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to four friendly units within 12\", which get <key><key>Rapid Blink</key> Boost</key> once (next time the effect would apply)."
        }
      ]
    },
    "Shattering Curse": {
      "title": "Shattering Curse",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to three enemy units within 12\", which take 2 hits with <key>AP</key>(1) and <key>Crack</key> each. Roll as many dice as hits to see if \"on rolls of 6\" effects trigger."
        }
      ]
    },
    "Shield Breaker": {
      "title": "Shield Breaker",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to three enemy units within 12\", which take 2 hits with <key>AP</key>(1) and <key>Shred</key> each."
        }
      ]
    },
    "Shock Speed": {
      "title": "Shock Speed",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to six friendly units within 12\", which moves +2\" when using Advance actions and +4\" when using Rush/Charge actions once (next time the effect would apply)."
        }
      ]
    },
    "Shroud Field": {
      "title": "Shroud Field",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to six friendly units within 12\", which get +1 to defense rolls once (next time the effect would apply)."
        }
      ]
    },
    "Shrouding Incense": {
      "title": "Shrouding Incense",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to four friendly units within 12\", which get <key><key>Machine-Fog</key> Boost</key> once (next time the effect would apply)."
        }
      ]
    },
    "Smash!": {
      "title": "Smash!",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick one enemy unit within 12\", which takes 2 hits with <key>AP</key>(1) and <key>Surge</key>."
        }
      ]
    },
    "Smiting Rune": {
      "title": "Smiting Rune",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to two enemy units within 12\", which take 2 hits with <key>AP</key>(1) and <key>Quake</key> each."
        }
      ]
    },
    "Snake Bite": {
      "title": "Snake Bite",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick one enemy unit within 12\", which takes 2 hits with <key>AP</key>(1) and <key>Lacerate</key>."
        }
      ]
    },
    "Soul Spear": {
      "title": "Soul Spear",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick one enemy model within 24\", which takes 1 hit with <key>Puncture</key>."
        }
      ]
    },
    "Spirit Power": {
      "title": "Spirit Power",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to two friendly units within 12\", which get <key>Flying</key> once (next time the effect would apply)."
        }
      ]
    },
    "Spirit Resolve": {
      "title": "Spirit Resolve",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to four friendly units within 12\", which get <key><key>Clan Warrior</key> Boost</key> once (next time the effect would apply)."
        }
      ]
    },
    "Spread Plague": {
      "title": "Spread Plague",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to two enemy units within 18\", which take 1 hit with <key>Bash</key> each."
        }
      ]
    },
    "Static Blast": {
      "title": "Static Blast",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to two enemy units within 18\", which take 1 hit with <key>Blast</key>(3) each."
        }
      ]
    },
    "Stimulant Shock": {
      "title": "Stimulant Shock",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to four friendly units within 12\", which get <key>Steadfast</key> once (next time the effect would apply)."
        }
      ]
    },
    "Stinger Blast": {
      "title": "Stinger Blast",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick one enemy unit within 18\", which takes 1 hit with <key>Smash</key>."
        }
      ]
    },
    "Storm of Power": {
      "title": "Storm of Power",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to three enemy units within 12\", which take 2 hits with <key>AP</key>(1) and <key>Surge</key> each. Roll as many dice as hits to see if \"on rolls of 6\" effects trigger."
        }
      ]
    },
    "System Takeover": {
      "title": "System Takeover",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to two enemy units within 12\", which take 3 hits each."
        }
      ]
    },
    "Targeting Signal": {
      "title": "Targeting Signal",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to two friendly units within 12\", which get <key>Relentless</key> once (next time the effect would apply)."
        }
      ]
    },
    "Taser Shock": {
      "title": "Taser Shock",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to three enemy units within 12\", which take 2 hits with <key>AP</key>(2) each."
        }
      ]
    },
    "Tech Zapper": {
      "title": "Tech Zapper",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick one enemy unit within 6\", which takes 3 hits with <key>Pulverize</key>."
        }
      ]
    },
    "Tech-Sickness": {
      "title": "Tech-Sickness",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to four enemy units within 18\", which get -1 to defense rolls once (next time the effect would apply)."
        }
      ]
    },
    "Terror Seeker": {
      "title": "Terror Seeker",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to six enemy units within 18\", which friendly units gets <key><key>Unpredictable</key> Fighter</key> against once (next time the effect would apply)."
        }
      ]
    },
    "The Founder's Curse": {
      "title": "The Founder's Curse",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to two enemy units within 18\", which friendly units gets <key>Shred</key> when attacking against once (next time the effect would apply)."
        }
      ]
    },
    "Thunderous Mist": {
      "title": "Thunderous Mist",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick one enemy unit within 18\", which takes 2 hits."
        }
      ]
    },
    "Toxin Mist": {
      "title": "Toxin Mist",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to two enemy units within 18\", which friendly units gets <key>Bane</key> when attacking against once (next time the effect would apply)."
        }
      ]
    },
    "Trampling Force": {
      "title": "Trampling Force",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to two enemy units within 12\", which take 2 hits with <key>AP</key>(1) and <key>Slam</key> each."
        }
      ]
    },
    "Triangulation Bots": {
      "title": "Triangulation Bots",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to two enemy units within 18\", which friendly units gets <key>Indirect</key> when shooting against once (next time the effect would apply)."
        }
      ]
    },
    "Union Propaganda": {
      "title": "Union Propaganda",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to four friendly units within 12\", which get <key>Grounded Precision</key> once (next time the effect would apply)."
        }
      ]
    },
    "Veil of Madness": {
      "title": "Veil of Madness",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to six enemy units within 18\", which friendly units gets <key>Slayer</key> against once (next time the effect would apply)."
        }
      ]
    },
    "Violent Onslaught": {
      "title": "Violent Onslaught",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to two friendly units within 12\", which get <key><key>Infected</key> Boost</key> once (next time the effect would apply)."
        }
      ]
    },
    "Volatile Infection": {
      "title": "Volatile Infection",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to three enemy units within 6\", which take 1 hit with <key>AP</key>(2) and <key>Deadly</key>(3) each."
        }
      ]
    },
    "Wasteland Storm": {
      "title": "Wasteland Storm",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to three enemy models within 24\", which take 1 hit with <key>Tear</key> each."
        }
      ]
    },
    "Watch Dome": {
      "title": "Watch Dome",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to six friendly units within 12\", which get <key>Evasive</key> once (next time the effect would apply)."
        }
      ]
    },
    "Watch Sight": {
      "title": "Watch Sight",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to two enemy units within 18\", which friendly units gets <key>Unstoppable</key> when shooting against once (next time the effect would apply)."
        }
      ]
    },
    "Watch Trauma": {
      "title": "Watch Trauma",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick one enemy unit within 18\", which takes 1 hit with <key>Smash</key>."
        }
      ]
    },
    "Watch Wound": {
      "title": "Watch Wound",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick one enemy unit within 12\", which takes 2 hits with <key>Demolish</key>."
        }
      ]
    },
    "Wave of Discord": {
      "title": "Wave of Discord",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to two enemy units within 18\", which take 1 hit with <key>Thrash</key> each."
        }
      ]
    },
    "Weapon Booster": {
      "title": "Weapon Booster",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to two friendly units within 12\", which get <key><key>Scurry</key> Boost</key> once (next time the effect would apply)."
        }
      ]
    },
    "Wolf Dome": {
      "title": "Wolf Dome",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to six friendly units within 12\", which get <key>Evasive</key> once (next time the effect would apply)."
        }
      ]
    },
    "Wolf Sight": {
      "title": "Wolf Sight",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to two enemy units within 18\", which friendly units gets <key>Unstoppable</key> when shooting against once (next time the effect would apply)."
        }
      ]
    },
    "Wolf Trauma": {
      "title": "Wolf Trauma",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick one enemy unit within 18\", which takes 1 hit with <key>Smash</key>."
        }
      ]
    },
    "Wolf Wound": {
      "title": "Wolf Wound",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick one enemy unit within 12\", which takes 2 hits with <key>Demolish</key>."
        }
      ]
    },
    "Worker's Uprising": {
      "title": "Worker's Uprising",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick up to two friendly units within 12\", which moves +2\" when using Advance actions and +4\" when using Rush/Charge actions once (next time the effect would apply)."
        }
      ]
    },
    "Zap!": {
      "title": "Zap!",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Pick one enemy unit within 12\", which takes 2 hits with <key>AP</key>(1) and <key>Surge</key>."
        }
      ]
    }

  },
  fr: {
    "Labyrinthian Sparkle": {
      "title": "Scintillement Labyrinthique",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Choisissez une unité alliée a 12” ou moins, qui gagne <key>Evasif</key>(la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Maze Vines": {
      "title": "Vignes du Labyrinthe",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Choisissez une unité ennemie a 12” ou moins, qui subit 2 touches avec <key>PA</key>(1) et <key>Fragment</key>."
        }
      ]
    },
    "Dream Haunter": {
      "title": "Hanteur de Rêves",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Choisissez jusqu'à deux unités ennemies a 18”. Les unités alliées gagnent <key>Combattant imprévisible</key> contre elles (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Chill of Death": {
      "title": "Frisson de Mort",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Choisissez une unité ennemie a 12” ou moins, qui subit 6 touches."
        }
      ]
    },
    "Combat Possession": {
      "title": "Possession de Combat",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Choisissez jusqu'à trois unités alliées a 12” ou moins, qui se deplacent de +2” avec les actions Déplacement et de +4” avec les actions Course/Charge (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Spectral Light": {
      "title": "Lumière Spectrale",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Selectionnez une unité ennemie a 6”, qui subit 3 touches avec <key>PA</key>(2) et <key>Mortel</key>(3)."
        }
      ]
    },
    "Hunter's Strike": {
      "title": "Frappe du Chasseur",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Choisissez une unité ennemie a 18\", contre laquelle les unités alliées gagnent <key>Tir rapide</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Spirit Vines": {
      "title": "Vignes Spirituelles",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Choisissez une unité ennemie a 12\", qui subit 2 touches avec <key>AP</key>(1) et <key>Perce</key>. Lancez autant de des que de touches pour voir si les effets \"sur des resultats de 6\" se declenchent."
        }
      ]
    },
    "Natural Harmony": {
      "title": "Harmonie Naturelle",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Choisissez jusqu'à deux unités alliées a 12\", qui gagnent <key>Resistance</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Tree Stomp": {
      "title": "Pietinement d'Arbre",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Choisissez un modele ennemi a 24\", qui subit 2 touches avec <key>AP</key>(4)."
        }
      ]
    },
    "Tree-Bark Growth": {
      "title": "Croissance d'Ecorce",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Choisissez jusqu'à trois unités alliées a 12\", qui gagnent <key>Renforcement ancre</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Insect Attack": {
      "title": "Attaque d'Insectes",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Choisissez une unité ennemie a 18\", qui subit 6 touches."
        }
      ]
    },
    "Searing Heat": {
      "title": "Chaleur Brulante",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Choisissez une unité ennemie a 18\", contre laquelle les unités alliées gagnent <key>Assaut perforant</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Lava Bolts": {
      "title": "Projectiles de Lave",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Choisissez un modele ennemi a 18\", qui subit 2 touches."
        }
      ]
    },
    "Auric Fury": {
      "title": "Fureur Aurique",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Choisissez jusqu'à deux unités alliées a 12\", qui gagnent <key>Combattant Frappe et Repli</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Suffocating Ashes": {
      "title": "Cendres Suffocantes",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Choisissez jusqu'à deux unités ennemies a 12\", qui subissent chacune 4 touches."
        }
      ]
    },
    "Seismic Shift": {
      "title": "Deplacement Sismique",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Choisissez jusqu'à trois unités alliées a 12\", qui gagnent <key>Protection ancree</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Fire Storm": {
      "title": "Tempete de Feu",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Choisissez une unité ennemie a 6\", qui subit 9 touches avec <key>Pulverisation</key>. Lancez autant de des que de touches pour voir si les effets \"sur des resultats de 6\" se declenchent."
        }
      ]
    },
    "Vigorous Return": {
      "title": "Retour Vigoureux",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Choisissez une unité alliée a 12\", qui gagne <key>Amplification Mort-vivant maudit</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Cursed Strike": {
      "title": "Frappe Maudite",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Choisissez une unité ennemie a 6\", qui subit 3 touches avec <key>Sectionnement</key>."
        }
      ]
    },
    "Seductive Invocation": {
      "title": "Invocation Seduisante",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Choisissez jusqu'à deux unités ennemies a 18\", qui doivent faire un test de moral. En cas d'echec, vous pouvez la deplacer de jusqu'à 6\" en ligne droite dans n'importe quelle direction."
        }
      ]
    },
    "Spectral Wind": {
      "title": "Vent Spectral",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Choisissez une unité ennemie a 12\", qui subit 4 touches avec <key>AP</key>(2)."
        }
      ]
    },
    "Dance of Death": {
      "title": "Danse de la Mort",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Choisissez jusqu'à trois unités alliées a 12\", qui gagnent <key>Teleportation</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Deadly Gaze": {
      "title": "Regard Mortel",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Choisissez une unité ennemie a 6\", qui subit 3 touches avec <key>AP</key>(2) et <key>Mortel</key>(3)."
        }
      ]
    },
    "Aether-Cloud Rune": {
      "title": "Rune de Nuage d'Aether",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Choisissez une unité ennemie a 18\", qui subit -3 a son prochain jet d'incantation une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Aether Shock": {
      "title": "Choc d'Aether",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Choisissez une unité ennemie a 12\", qui subit 2 touches avec <key>Entaille</key>."
        }
      ]
    },
    "Wind Rune": {
      "title": "Rune du Vent",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Choisissez jusqu'à deux unités alliées a 12\", qui gagnent <key>Vif</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Lightning Shock": {
      "title": "Choc de Foudre",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Choisissez jusqu'à deux unités ennemies a 12\", qui subissent chacune 2 touches avec <key>AP</key>(2)."
        }
      ]
    },
    "Tinkering Rune": {
      "title": "Rune de Bricolage",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Choisissez jusqu'à trois unités alliées a 12\", qui gagnent <key>Amplification Boucanier</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Thunder Shock": {
      "title": "Choc de Tonnerre",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Choisissez une unité ennemie a 12\", qui subit 6 touches avec <key>Laceration</key>."
        }
      ]
    },
    "Poison Mist": {
      "title": "Brume Empoisonnée",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Choisisser une unité ennemie a 18” ou moins, Les unités alliées gagnent <key>Lacération</key> pour une attaque (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Piranha Swarm": {
      "title": "Nuée de piranhas",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Choisisser une unité ennemie a 12” ou moins, elle 2 touches avec <key>Désintégration</key>."
        }
      ]
    },
    "Fateful Guidance": {
      "title": "Guide providentiel",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Choisisser jusqu'à deux unités alliées à 12” ou moins, elles gagnent <key>Inébranlable</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Jaguar Pounce": {
      "title": "Jaguar bondissant",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Choisisser une figurine ennemi à 18” ou moins, elle subit 4 touches avec <key>PA</key>(1)."
        }
      ]
    },
    "Primordial Roar": {
      "title": "Rugissement Primordial",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Choisisser jusqu'à trois unités alliées à 12” ou moins, elles gagnent <key>Boost de Primal</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Serpent Egg": {
      "title": "Œuf de Serpent",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Choisisser une unité ennemie à 6” ou moins, qui subit 9 touches avec <key>Fléau</key>."
        }
      ]
    },
    "Terrifying Fury": {
      "title": "Fureur terrifiante",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Choisissez une unité ennemie à 18” ou moins, qui devra faire un test de moral. En cas d'echec, elle sera fatiguée."
        }
      ]
    },
    "Flame of Destruction": {
      "title": "Flamme de la destruction",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Choisissez une unité ennemie à 18” ou moins, qui subit 1 touche avec <key>Explosion</key>(3)."
        }
      ]
    },
    "Fiery Protection": {
      "title": "Protection Ardente",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Choisissez jusqu'à deux unités alliées a 12” ou moins, qui gagneront <key>Esquive en mêlée</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Brutal Massacre": {
      "title": "Massacre Brutal",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Choisissez une unité ennemie a 6” ou moins, qui subira 6 touches avec <key>Dislocation</key>. Lancez autant de dés que de touches pour voir si les effets \"sur des resultats de 6\" se declenchent."
        }
      ]
    },
    "War Boon": {
      "title": "Bénédiction guerrière",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Choisissez jusqu'à trois unités alliées a 12”, qui gagneront <key>Boost de Guerrier-né</key> une fois (la prochaine fois que l'effet s'appliquera)."
        }
      ]
    },
    "Headtaker Strike": {
      "title": "Décapitation",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Choisissez jusqu'à deux unités ennemies a 12”, qui subiront chacune 3 touches avec <key>PA</key>(2)."
        }
      ]
    },
    "Aura of Pestilence": {
      "title": "Aura de Pestilence",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Choisissez une unité ennemie a 18\", qui compte comme etant en terrain difficile une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Rapid Putrefaction": {
      "title": "Putrefaction Rapide",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Choisissez une unité ennemie a 12\", qui subit 2 touches avec <key>AP</key>(1) et <key>Boucher</key>. Lancez autant de des que de touches pour voir si les effets \"sur des resultats de 6\" se declenchent."
        }
      ]
    },
    "Blessed Virus": {
      "title": "Virus Beni",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Choisissez jusqu'à deux unités alliées a 12\", qui gagnent <key>Charge rapide</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Plague Malediction": {
      "title": "Malediction de la Peste",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Choisissez un modele ennemi a 24\", qui subit 2 touches avec <key>AP</key>(4)."
        }
      ]
    },
    "Plague Boon": {
      "title": "Don de la Peste",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Choisissez jusqu'à trois unités alliées a 12\", qui gagnent <key>Amplification Lie a la peste</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Rot Wave": {
      "title": "Vague de Putrefaction",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Choisissez une unité ennemie a 18\", qui subit 6 touches."
        }
      ]
    },
    "Combat Ecstasy": {
      "title": "Extase de Combat",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Choisissez une unité ennemie a 18\", contre laquelle les unités alliées gagnent <key>Tir rapide</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Beautiful Pain": {
      "title": "Belle Douleur",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Choisissez une unité ennemie a 12\", qui subit 2 touches avec <key>Fracasse</key>."
        }
      ]
    },
    "Blissful Dance": {
      "title": "Danse Extatique",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Choisissez jusqu'à deux unités alliées a 12\", qui gagnent <key>Esquive en mêlée</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Total Seizure": {
      "title": "Paralysie Totale",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Choisissez un modele ennemi a 18\", qui subit 4 touches avec <key>AP</key>(1)."
        }
      ]
    },
    "Lust Boon": {
      "title": "Don de la Luxure",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Choisissez jusqu'à trois unités alliées a 12\", qui gagnent <key>Renforcement Lie a la Luxure</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Overpowering Lash": {
      "title": "Fouet Ecrasant",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Choisissez une unité ennemie a 12\", qui subit 6 touches avec <key>AP</key>(1) et <key>Laceration</key>."
        }
      ]
    },
    "Shifting Form": {
      "title": "Forme Changeante",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Choisissez une unité ennemie a 18\", qui subit -3 a son prochain jet d'incantation une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Sky Blaze": {
      "title": "Brasier Celeste",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Choisissez une unité ennemie a 12\", qui subit 2 touches avec <key>AP</key>(1) et <key>Entaille</key>. Lancez autant de des que de touches pour voir si les effets \"sur des resultats de 6\" se declenchent."
        }
      ]
    },
    "Breath of Change": {
      "title": "Souffle du Changement",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Choisissez jusqu'à deux unités alliées a 12\", qui gagnent <key>Fleau au Tir</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Mutating Inferno": {
      "title": "Inferno Mutant",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Choisissez jusqu'à deux unités ennemies a 9\", qui subissent chacune 4 touches."
        }
      ]
    },
    "Change Boon": {
      "title": "Don du Changement",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Choisissez jusqu'à trois unités alliées a 12\", qui gagnent <key>Renforcement Lie au Changement</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Power Bolt": {
      "title": "Eclair de Puissance",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Choisissez une unité ennemie a 12\", qui subit 6 touches avec <key>AP</key>(2)."
        }
      ]
    },
    "Magic Skitter-Step": {
      "title": "Pas-Fourbe Magique",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Choisissez une unité alliée a 12\", qui gagne <key>Renforcement de Detale</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Heavenly Strike": {
      "title": "Frappe Celeste",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Choisissez jusqu'à deux unités ennemies a 12\", qui subissent chacune 1 touche avec <key>AP</key>(2)."
        }
      ]
    },
    "God-Mother's Frenzy": {
      "title": "Frenesie de la Deesse-Mere",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Choisissez jusqu'à deux unités alliées a 12\", qui gagnent <key>Tueur de mêlée</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Choking Censer-Fog": {
      "title": "Brouillard d'Encensoir Suffocant",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Choisissez une unité ennemie a 12\", qui subit 6 touches."
        }
      ]
    },
    "Cracking Bell-Chime": {
      "title": "Carillon de Cloche Fissuree",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Choisissez jusqu'à trois unités ennemies a 18\", qui subissent -1 a leurs jets de defense une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Lightning Blast": {
      "title": "Explosion Foudroyante",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Choisissez un modele ennemi a 12\", qui subit 6 touches avec <key>Dangereux</key>. Lancez autant de des que de touches pour voir si les effets \"sur des resultats de 1\" se declenchent."
        }
      ]
    },
    "Drain Spirit": {
      "title": "Drain d'Esprit",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Choisissez une unité alliée a 12\", qui gagne Inarretable en mêlée une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Deep Fracture": {
      "title": "Fracture Profonde",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Choisissez un modele ennemi a 18\", qui subit 2 touches avec <key>AP</key>(1)."
        }
      ]
    },
    "Rapid Ossification": {
      "title": "Ossification Rapide",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Choisissez jusqu'à deux unités alliées a 12\", qui gagnent <key>Renforcement Ossifie</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Shattering Blast": {
      "title": "Explosion Brisante",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Choisissez une unité ennemie a 6\", qui subit 6 touches avec <key>Destructeur</key>. Lancez autant de des que de touches pour voir si les effets \"sur des resultats de 6\" se declenchent."
        }
      ]
    },
    "Soul Enslaver": {
      "title": "Asservisseur d'Ames",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Choisissez jusqu'à trois unités ennemies a 18\", contre lesquelles les unités alliées gagnent <key>Furieux</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Bone Breaker": {
      "title": "Briseur d'Os",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Choisissez une unité ennemie a 18\", qui subit 6 touches."
        }
      ]
    },
    "Evil Gaze": {
      "title": "Mauvais Oeil",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Choisissez une unité alliée a 12\", qui gagne <key>Contre-attaque</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Godly Smash": {
      "title": "Fracassement Divin",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Choisissez une unité ennemie a 6\", qui subit 1 touche avec <key>AP</key>(2) et <key>Empalement</key>."
        }
      ]
    },
    "Way-Clan Chant": {
      "title": "Chant de la Voie-Clan",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Choisissez jusqu'à deux unités alliées a 12\", qui gagnent <key>Renforcement Ferocite</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Bone Strike": {
      "title": "Frappe d'Os",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Choisissez une unité ennemie a 6\", qui subit 6 touches avec Fleau."
        }
      ]
    },
    "Magic Fists": {
      "title": "Poings Magiques",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Choisissez jusqu'à trois unités ennemies a 18\", contre lesquelles les unités alliées gagnent <key>Perforant en mêlée</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Iron Burst": {
      "title": "Explosion de Fer",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Choisissez une unité ennemie a 12\", qui subit 6 touches avec <key>AP</key>(2)."
        }
      ]
    },
    "Battle Guts": {
      "title": "Tripes de Bataille",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Choisissez une unité alliée a 12\", qui gagne <key>Resistance</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Gobble Up": {
      "title": "Gober",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Choisissez un modele ennemi a 18\", qui subit 2 touches avec <key>AP</key>(1)."
        }
      ]
    },
    "Gorging Feast": {
      "title": "Festin Vorace",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Choisissez jusqu'à deux unités alliées a 12\", qui gagnent <key>Renforcement Destructeur</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Great Trampling": {
      "title": "Grand Pietinement",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Choisissez une unité ennemie a 12\", qui subit 4 touches avec <key>AP</key>(1) et <key>Rupture</key>. Lancez autant de des que de touches pour voir si les effets \"sur des resultats de 6\" se declenchent."
        }
      ]
    },
    "Crack Spirits": {
      "title": "Brise-Esprits",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Choisissez jusqu'à trois unités ennemies a 18\", qui gagnent <key>Encombrant</key> en mêlée une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Ice Maw": {
      "title": "Gueule de Glace",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Choisissez une unité ennemie a 12\", qui subit 6 touches avec <key>AP</key>(2)."
        }
      ]
    },
    "Desert Storm": {
      "title": "Tempete du Desert",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Choisissez une unité ennemie a 18\", qui compte comme etant en terrain difficile une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Storm of Skulls": {
      "title": "Tempete de Cranes",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Choisissez une unité ennemie a 18\", qui subit 1 touche avec <key>Blast</key>(3)."
        }
      ]
    },
    "Cursed Arrows": {
      "title": "Fleches Maudites",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Choisissez jusqu'à deux unités alliées a 12\", qui gagnent Dechiquetage au tir une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Rapid Desiccation": {
      "title": "Dessechement Rapide",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Choisissez un modele ennemi a 24\", qui subit 2 touches avec <key>AP</key>(4)."
        }
      ]
    },
    "Tomb Queen's Guidance": {
      "title": "Guide de la Reine des Tombes",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Choisissez jusqu'à trois unités alliées a 12\", qui gagnent <key>Renforcement de Legion Royale</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Tomb Queen's Vengeance": {
      "title": "Vengeance de la Reine des Tombes",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Choisissez une unité ennemie a 12\", qui subit 6 touches avec <key>AP</key>(1) et <key>Perforation</key>. Lancez autant de des que de touches pour voir si les effets \"sur des resultats de 6\" se declenchent."
        }
      ]
    },
    "Heavenly Guidance": {
      "title": "Guidance Celeste",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Choisissez une unité alliée a 12\", qui gagne <key>Volant</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Lightning Bolt": {
      "title": "Éclair",
      "description": [
        {
          "system": "Kingdom of Angels",
          "cost": 1,
          "text": "Choisissez une unité ennemie a 6\", qui subit 1 touche avec <key>AP</key>(2) et <key>Decoupe</key>."
        },
        {
          "system": "Eternal Wardens",
          "cost": 3,
          "text": "Choisissez une unité ennemie  à 12” ou moins, elle subira 6 touches avec <key>PA</key>(1) et <key>Lacération</key>."
        }
      ]
    },
    "Star Blessing": {
      "title": "Benediction Stellaire",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Choisissez jusqu'à deux unités alliées a 12\", qui gagnent <key>Renforcement de Benediction Angelique</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Angelic Storm": {
      "title": "Tempete Angelique",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Choisissez jusqu'à deux unités ennemies a 12\", qui subissent chacune 2 touches avec <key>AP</key>(2)."
        }
      ]
    },
    "Shock Energy": {
      "title": "Energie de Choc",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Choisissez jusqu'à trois unités ennemies a 18\", contre lesquelles les unités alliées gagnent <key>Tueur</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Thunder Strike": {
      "title": "Frappe de Tonnerre",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Choisissez une unité ennemie a 18\", qui subit 6 touches."
        }
      ]
    },
    "Aura of Heroism": {
      "title": "Aura d'Heroisme",
      "description": [
        {
          "system": "Human Empire",
          "cost": 1,
          "text": "Choisissez une unité alliée a 12\", qui gagne <key>Renforcement Tenir la Ligne</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        },
        {
          "system": "Giant Tribes",
          "cost": 1,
          "text": "Choisissez une unité alliée a 12\", qui gagne +1 aux jets de test de moral une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Fire Ball": {
      "title": "Boule de Feu",
      "description": [
        {
          "system": "Human Empire",
          "cost": 1,
          "text": "Choisissez une unité ennemie a 12\", qui subit 2 touches avec <key>AP</key>(1) et <key>Fracture</key>. Lancez autant de des que de touches pour voir si les effets \"sur des resultats de 6\" se declenchent."
        },
        {
          "system": "Giant Tribes",
          "cost": 1,
          "text": "Choisissez une unité ennemie a 12\", qui subit 2 touches avec <key>AP</key>(1) et <key>Surge</key>. Lancez autant de des que de touches pour voir si les effets \"sur des resultats de 6\" se declenchent."
        }
      ]
    },
    "Magic Targeting": {
      "title": "Ciblage Magique",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Choisissez jusqu'à deux unités ennemies a 18\", contre lesquelles les unités alliées gagnent +1 aux jets pour toucher en mêlée une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Blood Hex": {
      "title": "Malefice de Sang",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Choisissez une unité ennemie a 12\", qui subit 6 touches."
        }
      ]
    },
    "Elemental Form": {
      "title": "Forme Elementaire",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Choisissez jusqu'à trois unités alliées a 12\", qui gagnent <key>AP</key>(+1) en mêlée une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Spirit Leech": {
      "title": "Siphon d'Esprit",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Choisissez un modele ennemi a 18\", qui subit 6 touches avec <key>AP</key>(1)."
        }
      ]
    },
    "Eagle-Eyed Focus": {
      "title": "Concentration de l'Oeil d'Aigle",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Choisissez une unité ennemie a 18\", contre laquelle les unités alliées gagnent +1 aux jets pour toucher au tir une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Arcane Blast": {
      "title": "Explosion Arcanique",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Choisissez une unité ennemie a 18\", qui subit 1 touche avec <key>Blast</key>(3)."
        }
      ]
    },
    "Magical Surge": {
      "title": "Poussee Magique",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Choisissez jusqu'à deux unités alliées a 12\", qui gagnent <key>Bane</key> en mêlée une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "High Tempest": {
      "title": "Haute Tempete",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Choisissez jusqu'à deux unités ennemies a 9\", qui subissent chacune 4 touches."
        }
      ]
    },
    "Path to Glory": {
      "title": "Voie vers la Gloire",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Choisissez jusqu'à trois unités alliées a 12\", qui gagnent <key>Renforcement Noble</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Magic Arrows": {
      "title": "Fleches Magiques",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Choisissez une unité ennemie a 12\", qui subit 6 touches avec <key>AP</key>(1) et <key>Fissure</key>. Lancez autant de des que de touches pour voir si les effets \"sur des resultats de 6\" se declenchent."
        }
      ]
    },
    "Barbed Chains": {
      "title": "Chaines Barbelees",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Choisissez une unité ennemie a 18\", qui subit 2 touches."
        }
      ]
    },
    "Cursed Stride": {
      "title": "Foulee Maudite",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Choisissez une unité ennemie a 18\", qui compte comme etant en terrain dangereux une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Havoc Boost": {
      "title": "Renforcement du Chaos",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Choisissez jusqu'à deux unités alliées a 12\", qui gagnent <key>Renforcement Lie au Chaos</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Impaling Spike": {
      "title": "Pointe Empalante",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Choisissez un modele ennemi a 18\", qui subit 4 touches avec <key>AP</key>(1)."
        }
      ]
    },
    "Dark Shielding": {
      "title": "Protection Sombre",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Choisissez jusqu'à trois unités alliées a 12\", qui gagnent <key>Fortifie</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Thorn Field": {
      "title": "Champ d'Epines",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Choisissez une unité ennemie a 12\", qui subit 6 touches avec <key>AP</key>(1) et <key>Percussion</key>."
        }
      ]
    },
    "Rune of Piercing": {
      "title": "Rune de Percage",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Choisissez une unité alliée a 12\", qui gagne <key>Chasseur perforant</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Rune of Lightning": {
      "title": "Rune de Foudre",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Choisissez un modele ennemi a 24\", qui subit 1 touche avec <key>AP</key>(4)."
        }
      ]
    },
    "Rune of Ashes": {
      "title": "Rune de Cendres",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Choisissez jusqu'à deux unités alliées a 12\", qui gagnent <key>Renforcement Lie au Chaos</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Rune of Darkness": {
      "title": "Rune des Tenebres",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Choisissez une unité ennemie a 6\", qui subit 6 touches avec <key>Purge</key>."
        }
      ]
    },
    "Rune of Cracking": {
      "title": "Rune de Fissuration",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Choisissez jusqu'à trois unités ennemies a 18\", contre lesquelles les unités alliées gagnent <key>Implacable</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Rune of Insanity": {
      "title": "Rune de Folie",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Choisissez une unité ennemie a 18\", qui subit 3 touches avec <key>Blast</key>(3)."
        }
      ]
    },
    "Luck of the Ancients": {
      "title": "Chance des Anciens",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Choisissez une unité alliée a 12\", qui gagne <key>Renforcement Chanceux</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Cleansing Spirit": {
      "title": "Esprit Purificateur",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Choisissez une unité ennemie a 12\", qui subit 2 touches avec <key>AP</key>(1) et <key>Fracasser</key>."
        }
      ]
    },
    "Giant Shadow": {
      "title": "Ombre Geante",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Choisissez jusqu'à deux unités ennemies a 18\", qui subissent -1 a leurs jets de test de moral une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Nightmare Spirit": {
      "title": "Esprit de Cauchemar",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Choisissez une unité ennemie a 12\", qui subit 6 touches."
        }
      ]
    },
    "Shortling Courage": {
      "title": "Courage des Petits",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Choisissez jusqu'à trois unités alliées a 12\", qui gagnent <key>Sans peur</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Dark Forest Spirit": {
      "title": "Esprit de la Foret Sombre",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Choisissez une unité ennemie a 6\", qui subit 3 touches avec <key>AP</key>(2) et <key>Mortel</key>(3)."
        }
      ]
    },
    "Spider Might": {
      "title": "Puissance de l'Araignee",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Choisissez une unité alliée a 12\", qui gagne Renforcement Espiegle une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Stinging Spider": {
      "title": "Araignee Piquante",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Choisissez une unité ennemie a 6\", qui subit 3 touches avec <key>Bane</key>."
        }
      ]
    },
    "Bat Thirst": {
      "title": "Soif de Chauve-Souris",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Choisissez jusqu'à deux unités ennemies a 18\", contre lesquelles les unités alliées gagnent <key>Assaut perforant</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Pouncing Wolf": {
      "title": "Loup Bondissant",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Choisissez une unité ennemie a 12\", qui subit 4 touches avec <key>AP</key>(2)."
        }
      ]
    },
    "Wolf Resiliance": {
      "title": "Resilience du Loup",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Choisissez jusqu'à trois unités alliées a 12\", qui gagnent +1 aux jets de defense une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Biting Bat": {
      "title": "Chauve-Souris Mordeuse",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Choisissez une unité ennemie a 6\", qui subit 3 touches avec <key>AP</key>(2) et Embrocher."
        }
      ]
    },
    "Shock Attack": {
      "title": "Attaque de Choc",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Choisissez une unité ennemie à 18” ou moins, les unités alliée gagnent <key>Imparable</key> lors du prochain tir contre cette unité (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Thunder Clap": {
      "title": "Coup de Tonnerre",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Choisissez une unité ennemie à 18” ou moins, qui subit 1 touche avec <key>Fracas</key>."
        }
      ]
    },
    "Star Strike": {
      "title": "Frappe Stellaire",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Choisissez jusqu'à deux unités alliées à 12” ou moins, elles gagnent <key>Combattant imprévisible</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Heavy Storm": {
      "title": "Violente tempête",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Choisissez jusqu'à deux unités ennemies a 9” ou moins, elles subissent 4 touches chacune."
        }
      ]
    },
    "Warding Cloud": {
      "title": "Nuage Protecteur",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Choisissez jusqu'à trois unités alliées a 12” ou moins, elles gagnent <key>Boost de Gardien</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Rune of Battle": {
      "title": "Rune de Bataille",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Choisissez une unité alliée a 12\", qui gagne <key>Charge rapide</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Rune of Breaking": {
      "title": "Rune de Brisure",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Choisissez un modele ennemi a 18\", qui subit 2 touches avec <key>AP</key>(1)."
        }
      ]
    },
    "Rune of Protection": {
      "title": "Rune de Protection",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Choisissez jusqu'à deux unités alliées a 12\", qui gagnent <key>Renforcement Coriace</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Rune of Cleaving": {
      "title": "Rune de Fendage",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Choisissez une unité ennemie a 12\", qui subit 4 touches avec <key>AP</key>(1) et <key>Secousse</key>."
        }
      ]
    },
    "Rune of Smiting": {
      "title": "Rune de Chatiment",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Choisissez une unité ennemie a 18\", qui subit 3 touches avec <key>Blast</key>(3)."
        }
      ]
    },
    "Rune of Spite": {
      "title": "Rune de Spite",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Choisissez jusqu'à trois unités ennemies a 18\", qui se deplacent de -2\" avec les actions Avance et de -4\" avec les actions Rush/Charge une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Clearview Leaves": {
      "title": "Feuilles Clairevue",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Choisissez une unité ennemie a 18\", contre laquelle les unités alliées gagnent +6\" de portee au tir une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Explosive Concoction": {
      "title": "Concoction Explosive",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Choisissez une unité ennemie a 12\", qui subit 2 touches avec <key>Decimation</key>."
        }
      ]
    },
    "Mesmer Oils": {
      "title": "Huiles Mesmeriques",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Choisissez jusqu'à deux unités alliées a 12\", qui gagnent <key>Inebranlable</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Choking Fog": {
      "title": "Brouillard Etouffant",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Choisissez jusqu'à deux unités ennemies a 9\", qui subissent chacune 4 touches."
        }
      ]
    },
    "Fury Herbs": {
      "title": "Herbes de Fureur",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Choisissez jusqu'à trois unités alliées a 12\", qui gagnent <key>Renforcement Tech Vinci</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Neurotoxin Gas": {
      "title": "Gaz Neurotoxique",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Choisissez une unité ennemie a 12\", qui subit 6 touches avec <key>AP</key>(1) et <key>Laceration</key>."
        }
      ]
    },
    "Spirit Wind": {
      "title": "Vent Spirituel",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Choisissez une unité alliée a 12\", qui gagne <key>Charge rapide</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Dragon Fire": {
      "title": "Feu Draconique",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Choisissez une unité ennemie a 12\", qui subit 3 touches."
        }
      ]
    },
    "Astral Storm": {
      "title": "Tempete Astrale",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Choisissez une unité ennemie a 12\", qui subit 4 touches avec <key>AP</key>(1) et <key>Deferlante</key>. Lancez autant de des que de touches pour voir si les effets \"sur des resultats de 6\" se declenchent."
        }
      ]
    },
    "Jade Claws": {
      "title": "Griffes de Jade",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Choisissez jusqu'à deux unités alliées a 12\", qui gagnent Renforcement Guerrier Royal une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Ancestral Guidance": {
      "title": "Guidance Ancestrale",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Choisissez jusqu'à trois unités ennemies a 18\", contre lesquelles les unités alliées gagnent <key>Indirect au Tir</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Blazing Starlight": {
      "title": "Lueur Stellaire Ardente",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Choisissez un modele ennemi a 24\", qui subit 3 touches avec Splinter."
        }
      ]
    },
    "High Tide": {
      "title": "Maree Haute",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Choisissez une unité alliée a 12\", qui gagne <key>Furtif</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Erode Soul": {
      "title": "Erosion de l'Ame",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Choisissez un modele ennemi a 24\", qui subit 1 touche avec <key>AP</key>(4)."
        }
      ]
    },
    "Crushing Pressure": {
      "title": "Pression Ecrasante",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Choisissez jusqu'à deux unités ennemies a 12\", qui subissent chacune 2 touches avec <key>AP</key>(2)."
        }
      ]
    },
    "Power Wave": {
      "title": "Vague de Puissance",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Choisissez jusqu'à deux unités alliées a 12\", qui gagnent <key>Renforcement de Pas Ondulatoire</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Darkest Abyss": {
      "title": "Abime le Plus Sombre",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Choisissez jusqu'à trois unités ennemies a 18\", qui subissent -1 aux jets pour toucher en attaquant une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Sea Storm": {
      "title": "Tempete Marine",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Choisissez une unité ennemie a 18\", qui subit 3 touches avec <key>Fracas</key>."
        }
      ]
    },
    "Dark Isle Spirit": {
      "title": "Esprit de l'Ile Sombre",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Choisissez une unité alliée a 12\", qui gagne <key>Renforcement de Harcelement</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Blade Storm": {
      "title": "Tempete de Lames",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Choisissez une unité ennemie a 12\", qui subit 2 touches avec <key>AP</key>(1) et <key>Laceration</key>."
        }
      ]
    },
    "World of Pain": {
      "title": "Monde de Douleur",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Choisissez jusqu'à deux unités ennemies a 18\", contre lesquelles les unités alliées gagnent Percee une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Storm Wave": {
      "title": "Vague de Tempete",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Choisissez une unité ennemie a 18\", qui subit 2 touches avec <key>Blast</key>(3)."
        }
      ]
    },
    "Healing Winds": {
      "title": "Vents Guerisseurs",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Choisissez jusqu'à trois unités alliées a 12\", qui gagnent Régénération une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Black Bolt": {
      "title": "Eclair Noir",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Choisissez une unité ennemie a 6\", qui subit 3 touches avec <key>AP</key>(2) et <key>Mortel</key>(3)."
        }
      ]
    },
    "Protection of the Huntress": {
      "title": "Protection de la Chasseresse",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Choisissez une unité alliée a 12\", qui gagne <key>Fortifie</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Cleansing Light": {
      "title": "Lumiere Purificatrice",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Choisissez un modele ennemi a 24\", qui subit 1 touche avec <key>Perforation</key>."
        }
      ]
    },
    "Great Hunt": {
      "title": "Grande Chasse",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Choisissez jusqu'à deux unités alliées a 12\", qui gagnent <key>Renforcement de Formation du Val</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Searing Gaze": {
      "title": "Regard Brulant",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Choisissez une unité ennemie a 6\", qui subit 6 touches avec <key>Bane</key>."
        }
      ]
    },
    "Curse of the Huntress": {
      "title": "Malediction de la Chasseresse",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Choisissez jusqu'à trois unités ennemies a 18\", contre lesquelles les unités alliées gagnent <key>Impact</key>(1) une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Wrath of the Huntress": {
      "title": "Colere de la Chasseresse",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Choisissez une unité ennemie a 12\", qui subit 6 touches avec <key>AP</key>(2)."
        }
      ]
    },
    "Surge of Power": {
      "title": "Deferlante de Puissance",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Choisissez une unité alliée a 12\", qui gagne <key>Renforcement Bestial</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Flock Attack": {
      "title": "Attaque de Nuée",
      "description": [
        {
          "system": "all",
          "cost": 1,
          "text": "Choisissez une unité ennemie a 12\", qui subit 2 touches avec <key>AP</key>(1) et <key>Deferlante</key>. Lancez autant de des que de touches pour voir si les effets \"sur des resultats de 6\" se declenchent."
        }
      ]
    },
    "Hunting Roar": {
      "title": "Rugissement de Chasse",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Choisissez jusqu'à deux unités ennemies a 18\", qui subissent -1 a leurs jets de test de moral une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Ancestral Wrath": {
      "title": "Colere Ancestrale",
      "description": [
        {
          "system": "all",
          "cost": 2,
          "text": "Choisissez un modele ennemi a 24\", qui subit 2 touches avec <key>Dechirure</key>."
        }
      ]
    },
    "Spirit Mantle": {
      "title": "Manteau Spirituel",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Choisissez jusqu'à trois unités alliées a 12\", qui gagnent Régénération une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Destructive Flame": {
      "title": "Flamme Destructrice",
      "description": [
        {
          "system": "all",
          "cost": 3,
          "text": "Choisissez une unité ennemie a 12\", qui subit 9 touches."
        }
      ]
    },
    "Absorption Amplifier": {
      "title": "Absorption Amplifier",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à quatre unité alliées a 12\", qui gagnent Ballistic Vest Boost une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Advanced Sight": {
      "title": "Advanced Sight",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à deux unité ennemies a 18\", which les unités alliées gagnent Unstoppable when shooting against une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Ammo Boost": {
      "title": "Ammo Renforcement",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à deux unité alliées a 12\", qui gagnent Mischievous Boost une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Animate Spirit": {
      "title": "Animate Esprit",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à deux unité alliées a 12\", qui gagnent Hit & Run Fighter une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Apparition of Doom": {
      "title": "Apparition of Doom",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez une unité ennemie a 12\", qui subit 2 touches with AP(1) and Quake."
        }
      ]
    },
    "Armor Rune": {
      "title": "Armor Rune",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à quatre unité alliées a 12\", qui gagnent Sturdy Boost une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Art of Pain": {
      "title": "Art of Pain",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à deux unité ennemies a 6\", qui subissent 1 hit with AP(2) and Deadly(3) each."
        }
      ]
    },
    "Asphyxiating Fog": {
      "title": "Asphyxiating Fog",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à deux unité alliées a 12\", qui gagnent Counter-Attack une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Assign Bounty": {
      "title": "Assign Bounty",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à six unité ennemies a 18\", which les unités alliées gagnent Impact(1) against une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Aura of Peace": {
      "title": "Aura of Paix",
      "description": [
        {
          "system": "Rebel Guerrillas",
          "cost": 0,
          "text": "Choisissez jusqu'à deux unité alliées a 12\", qui gagnent +1 to jets de test de moral une fois (la prochaine fois que l'effet s'appliquerait)."
        },
        {
          "system": "DAO Union",
          "cost": 0,
          "text": "Choisissez jusqu'à deux unité alliées a 12\", qui gagnent Fearless une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Bad Omen": {
      "title": "Bad Omen",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à quatre unité ennemies a 18\", which les unités alliées gagnent Furious against une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Badland Frenzy": {
      "title": "Badland Frenzy",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à deux unité alliées a 12\", qui gagnent Badlands Hunter Boost une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Banishing Sigil": {
      "title": "Banishing Sigil",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à quatre unité ennemies a 18\", qui gagnent -1 to defense rolls une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Battle Rune": {
      "title": "Battle Rune",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à deux unité alliées a 12\", qui gagnent +6\" range when shooting une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Berserker Frenzy": {
      "title": "Berserker Frenzy",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à quatre unité ennemies a 18\", which les unités alliées gagnent AP(+1) when charging against une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Bio-Displacer": {
      "title": "Bio-Displacer",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à six unité alliées a 12\", qui gagnent Teleport une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Bio-Horror": {
      "title": "Bio-Horror",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez une unité ennemie a 12\", qui subit 2 touches with AP(1) and Surge. Roll as many dice as touches to see if \"on rolls of 6\" effects trigger."
        }
      ]
    },
    "Blades of Discord": {
      "title": "Blades of Discord",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez une unité ennemie a 6\", qui subit 1 hit with AP(2) and Deadly(3)."
        }
      ]
    },
    "Blessed Ammo": {
      "title": "Blessed Ammo",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à quatre unité alliées a 12\", qui gagnent Shred when shooting une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Blessing of Souls": {
      "title": "Blessing of Souls",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à six unité alliées a 12\", qui gagnent Highborn Boost une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Blood Dome": {
      "title": "Sang Dome",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à six unité alliées a 12\", qui gagnent <key>Esquive</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Blood Sight": {
      "title": "Sang Sight",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à deux unité ennemies a 18\", which les unités alliées gagnent Unstoppable when shooting against une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Blood Trauma": {
      "title": "Sang Trauma",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez une unité ennemie a 18\", qui subit 1 hit with Smash."
        }
      ]
    },
    "Blood Wound": {
      "title": "Sang Wound",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez une unité ennemie a 12\", qui subit 2 touches with Demolish."
        }
      ]
    },
    "Boom!": {
      "title": "Boom!",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à deux unité ennemies a 18\", qui subissent 1 hit with Blast(3) each."
        }
      ]
    },
    "Brain Burst": {
      "title": "Brain Burst",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à trois unité ennemies a 6\", qui subissent 1 hit with AP(2) and Deadly(3) each."
        }
      ]
    },
    "Brain Infestation": {
      "title": "Brain Infestation",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à quatre unité ennemies a 18\", qui gagnent -1 jets pour toucher when attacking une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Breaking Rune": {
      "title": "Breaking Rune",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez un modele ennemi a 24\", qui subit 1 hit with AP(4)."
        }
      ]
    },
    "Brute Guts": {
      "title": "Brute Guts",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à quatre unité alliées a 12\", qui gagnent Fearless une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Burn the Heretic": {
      "title": "Burn the Heretic",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à deux unité ennemies a 18\", qui gagnent -3 to casting rolls une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Burst of Rage": {
      "title": "Burst of Rage",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à quatre unité alliées a 12\", qui gagnent Furious une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Calculated Foresight": {
      "title": "Calculated Foresight",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à quatre unité ennemies a 18\", which les unités alliées gagnent Relentless against une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Celestial Roar": {
      "title": "Celestial Roar",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à six unité alliées a 12” ou moins, qui gagnent <key>Boost de Primal</key> (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Cerebral Trauma": {
      "title": "Cerebral Trauma",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez une unité ennemie a 18\", qui subit 1 hit with Smash."
        }
      ]
    },
    "Choking Gas": {
      "title": "Choking Gas",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à deux unité ennemies a 6\", qui subissent 3 touches with Bane each."
        }
      ]
    },
    "Choking Waste-Fog": {
      "title": "Choking Waste-Fog",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à deux unité ennemies a 12\", qui subissent 3 touches chacune."
        }
      ]
    },
    "Clan Power": {
      "title": "Clan Power",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à deux unité alliées a 12\", qui gagnent Berserker Boost une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Cleaving Rune": {
      "title": "Cleaving Rune",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à trois unité ennemies a 18\", qui subissent 1 hit with Blast(3) each."
        }
      ]
    },
    "Coordinated Aggression": {
      "title": "Coordinated Aggression",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à six unité ennemies a 18\", which les unités alliées gagnent AP(1) when shooting against une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Corpo-Network Link": {
      "title": "Corpo-Network Link",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à six unité alliées a 12\", qui gagnent Cyber-Eyes Boost une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Corrode Weapons": {
      "title": "Corrode Weapons",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à six unité ennemies a 18\", which loses AP(1) when shooting une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Cracking Blast": {
      "title": "Cracking Explosion",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à quatre unité ennemies a 18\", qui gagnent -1 to defense rolls une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Crackling Bolt": {
      "title": "Crackling Eclair",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à trois unité ennemies a 18\", qui subissent 1 hit with Blast(3) each."
        }
      ]
    },
    "Creator of Illusions": {
      "title": "Creator of Illusions",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à deux unité ennemies a 18\", qui gagnent Unwieldy in mêlée une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Crush!": {
      "title": "Crush!",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à deux unité ennemies a 18\", qui subissent 1 hit with Blast(3) each."
        }
      ]
    },
    "Crushing Force": {
      "title": "Crushing Force",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à trois unité ennemies a 12\", qui subissent 2 touches with AP(2) each."
        }
      ]
    },
    "Cyber-City Connection": {
      "title": "Cyber-City Connection",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à deux unité alliées a 12\", qui gagnent Runner Boost une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Cyberspace Vision": {
      "title": "Cyberspace Vision",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à deux unité ennemies a 18\", which les unités alliées gagnent +6\" range when shooting against une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Cyborg Assault": {
      "title": "Cyborg Assault",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à deux unité alliées a 12\", qui gagnent <key>Tir en mouvement</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Dark Assault": {
      "title": "Sombre Assault",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à quatre unité alliées a 12\", qui gagnent Shred in mêlée une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Dark Dome": {
      "title": "Sombre Dome",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à six unité alliées a 12\", qui gagnent <key>Esquive</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Dark Mist": {
      "title": "Sombre Mist",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à six unité ennemies a 18\", qui gagnent -1 jets pour toucher when attacking une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Dark Sight": {
      "title": "Sombre Sight",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à deux unité ennemies a 18\", which les unités alliées gagnent Unstoppable when shooting against une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Dark Trauma": {
      "title": "Sombre Trauma",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez une unité ennemie a 18\", qui subit 1 hit with Smash."
        }
      ]
    },
    "Dark Wound": {
      "title": "Sombre Wound",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez une unité ennemie a 12\", qui subit 2 touches with Demolish."
        }
      ]
    },
    "Deadly Surge": {
      "title": "Deadly Surge",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à deux unité ennemies a 6\", qui subissent 3 touches with Bane each."
        }
      ]
    },
    "Death Bolt": {
      "title": "Death Eclair",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez une unité ennemie a 6\", qui subit 1 hit with AP(2) and Impale."
        }
      ]
    },
    "Deceleration Rune": {
      "title": "Deceleration Rune",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à six unité ennemies a 18\", which moves -2\" when using Advance actions and -4\" when using Rush/Charge actions une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Deep Hypnosis": {
      "title": "Deep Hypnosis",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à quatre unité ennemies a 18\", which must take a morale test. If failed you may move it by up to 6\" in a straight line in any direction."
        }
      ]
    },
    "Deep Meditation": {
      "title": "Deep Meditation",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à six unité alliées a 12\", qui gagnent +1 jets pour toucher when shooting une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Destroy!": {
      "title": "Destroy!",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à trois unité ennemies a 6\", qui subissent 1 hit with AP(2) and Impale each."
        }
      ]
    },
    "Devastating Strike": {
      "title": "Devastating Frappe",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à trois unité ennemies a 12\", qui subissent 2 touches with Decimate each."
        }
      ]
    },
    "Devour Essence": {
      "title": "Devour Essence",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez un modele ennemi a 18\", qui subit 2 touches with AP(1)."
        }
      ]
    },
    "Disastrous Malfunction": {
      "title": "Disastrous Malfunction",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à trois unité ennemies a 18\", qui subissent 2 touches chacune."
        }
      ]
    },
    "Dome of Doom": {
      "title": "Dome of Doom",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à deux unité ennemies a 12\", qui subissent 3 touches chacune."
        }
      ]
    },
    "Doom Strike": {
      "title": "Doom Frappe",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à deux unité ennemies a 6\", qui subissent 1 hit with AP(2) and Deadly(3) each."
        }
      ]
    },
    "Dragon Breath": {
      "title": "Dragon Breath",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à trois unité ennemies a 12\", qui subissent 3 touches chacune."
        }
      ]
    },
    "Dread Strike": {
      "title": "Dread Frappe",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à deux modele ennemis a 24\", qui subissent 1 hit with Tear each."
        }
      ]
    },
    "Elder Protection": {
      "title": "Elder Protection",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à deux unité alliées a 12\", qui gagnent Resistance une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Electric Bolt": {
      "title": "Electric Eclair",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à trois unité ennemies a 6\", qui subissent 1 hit with AP(2) and Deadly(3) each."
        }
      ]
    },
    "Electric Tempest": {
      "title": "Electric Tempest",
      "description": [
        {
          "system": "Human Defense Force",
          "cost": 0,
          "text": "Choisissez une unité ennemie a 12\", qui subit 2 touches with AP(1) and Fracture. Roll as many dice as touches to see if \"on rolls of 6\" effects trigger."
        },
        {
          "system": "Human Inquisition",
          "cost": 0,
          "text": "Choisissez une unité ennemie a 12\", qui subit 2 touches with AP(1) and Surge. Roll as many dice as touches to see if \"on rolls of 6\" effects trigger."
        }
      ]
    },
    "Elemental Seeker": {
      "title": "Elemental Seeker",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez une unité ennemie a 18\", qui subit 1 hit with Blast(3)."
        }
      ]
    },
    "EMP Blast": {
      "title": "EMP Explosion",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à trois unité ennemies a 12\", qui subissent 2 touches with AP(1) and Shred each."
        }
      ]
    },
    "Energy Storm": {
      "title": "Energy Tempete",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez une unité ennemie a 12\", qui subit 2 touches with AP(1) and Crack. Roll as many dice as touches to see if \"on rolls of 6\" effects trigger."
        }
      ]
    },
    "Enhance Serum": {
      "title": "Enhance Serum",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à six unité alliées a 12\", qui gagnent Regeneration une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Eternal Flame": {
      "title": "Eternal Flame",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à deux unité ennemies a 6\", qui subissent 3 touches with Purge each."
        }
      ]
    },
    "Eternal Guidance": {
      "title": "Eternal Guidance",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à six unité ennemies a 18\", which les unités alliées gagnent +6\" range when shooting against une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Expel Threat": {
      "title": "Expel Threat",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à trois modele ennemis a 18\", qui subissent 2 touches with AP(1) each."
        }
      ]
    },
    "Fade in the Dark": {
      "title": "Fade in the Sombre",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à six unité alliées a 12\", qui gagnent Stealth une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Fatal Sorrow": {
      "title": "Fatal Sorrow",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à trois unité ennemies a 18\", qui subissent 2 touches chacune."
        }
      ]
    },
    "Feral Strike": {
      "title": "Feral Frappe",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à trois unité ennemies a 6\", qui subissent 1 hit with AP(2) and Deadly(3) each."
        }
      ]
    },
    "Flame Bots": {
      "title": "Flame Bots",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à quatre unité ennemies a 9\", qui subissent 2 touches chacune."
        }
      ]
    },
    "Focused Defender": {
      "title": "Focused Defender",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à quatre unité alliées a 12\", qui gagnent Unpredictable Fighter une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Focused Shock": {
      "title": "Focused Shock",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez une unité ennemie a 12\", qui subit 2 touches with AP(1) and Shred."
        }
      ]
    },
    "Forge Protection": {
      "title": "Forge Protection",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à six unité alliées a 12\", qui gagnent +1 to defense rolls une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Gauss Bots": {
      "title": "Gauss Bots",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à trois unité ennemies a 6\", qui subissent 3 touches with Destructive each. Roll as many dice as touches to see if \"on rolls of 6\" effects trigger."
        }
      ]
    },
    "Godly Thunder": {
      "title": "Godly Thunder",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à deux modele ennemis a 24\", qui subissent 1 hit with AP(4) each."
        }
      ]
    },
    "Great Psy-Maw": {
      "title": "Great Psy-Maw",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à trois unité ennemies a 12\", qui subissent 2 touches with AP(2) each."
        }
      ]
    },
    "Guardian Protection": {
      "title": "Guardian Protection",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à six unité alliées a 12\", qui gagnent Guardian Boost une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Havoc Boon": {
      "title": "Havoc Boon",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à six unité alliées a 12\", qui gagnent Havocbound Boost une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Havoc Fog": {
      "title": "Havoc Fog",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à trois unité ennemies a 12\", qui subissent 2 touches with AP(1) and Slam each."
        }
      ]
    },
    "Havoc Terror": {
      "title": "Havoc Terror",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à quatre unité ennemies a 9\", qui subissent 2 touches chacune."
        }
      ]
    },
    "Havoc Trauma": {
      "title": "Havoc Trauma",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez une unité ennemie a 12\", qui subit 2 touches with AP(2)."
        }
      ]
    },
    "Head Bang": {
      "title": "Head Bang",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à six unité ennemies a 18\", which les unités alliées gagnent Rending in mêlée against une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Heavenly Lance": {
      "title": "Heavenly Lance",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à deux modele ennemis a 18\", qui subissent 2 touches with AP(1) each."
        }
      ]
    },
    "Hidden Spirits": {
      "title": "Hidden Esprits",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à quatre unité alliées a 12\", qui gagnent Unpredictable Shooter une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Hive Shriek": {
      "title": "Hive Shriek",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à trois modele ennemis a 18\", qui subissent 2 touches with AP(1) each."
        }
      ]
    },
    "Holistic Suffering": {
      "title": "Holistic Suffering",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à trois unité ennemies a 12\", qui subissent 3 touches chacune."
        }
      ]
    },
    "Holy Rage": {
      "title": "Holy Rage",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à quatre unité alliées a 12\", qui gagnent Piercing Hunter une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Infuse Bloodthirst": {
      "title": "Infuse Sangthirst",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à quatre unité alliées a 12\", qui gagnent Hive Bond Boost une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Insidious Protection": {
      "title": "Insidious Protection",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à deux unité alliées a 12\", qui gagnent Grounded Reinforcement une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Inspiring Bots": {
      "title": "Inspiring Bots",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à quatre unité alliées a 12\", qui gagnent Rapid Advance une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Jaguar Blaze": {
      "title": "Jaguar Blaze",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à trois unité ennemies a 12\", qui subissent 2 touches with AP(1) and Shred each."
        }
      ]
    },
    "Killing Blow": {
      "title": "Killing Blow",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez un modele ennemi a 18\", qui subit 2 touches with AP(1)."
        }
      ]
    },
    "Knight Dome": {
      "title": "Knight Dome",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à six unité alliées a 12\", qui gagnent <key>Esquive</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Knight Sight": {
      "title": "Knight Sight",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à deux unité ennemies a 18\", which les unités alliées gagnent Unstoppable when shooting against une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Knight Trauma": {
      "title": "Knight Trauma",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez une unité ennemie a 18\", qui subit 1 hit with Smash."
        }
      ]
    },
    "Knight Wound": {
      "title": "Knight Wound",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez une unité ennemie a 12\", qui subit 2 touches with Demolish."
        }
      ]
    },
    "Light Fragments": {
      "title": "Light Fragments",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à deux unité ennemies a 12\", qui subissent 2 touches with AP(1) and Fragment each."
        }
      ]
    },
    "Lightning Fog": {
      "title": "Lightning Fog",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à quatre unité ennemies a 9\", qui subissent 2 touches chacune."
        }
      ]
    },
    "Litanies of War": {
      "title": "Litanies of War",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à six unité alliées a 12\", qui gagnent Devout Boost une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Lore of Bravery": {
      "title": "Lore of Bravery",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à six unité alliées a 12\", qui gagnent Fearless une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Lore of Protection": {
      "title": "Lore of Protection",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à deux unité alliées a 12\", qui gagnent Safety Gear Boost une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Lore of Terror": {
      "title": "Lore of Terror",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à quatre unité ennemies a 18\", qui gagnent -1 to jets de test de moral une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Means of Destruction": {
      "title": "Means of Destruction",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à six unité ennemies a 18\", which les unités alliées gagnent Slayer against une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Mending Bots": {
      "title": "Mending Bots",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à six unité alliées a 12\", qui gagnent Self-Repair Boost une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Mind Breaker": {
      "title": "Mind Breaker",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez une unité ennemie a 12\", qui subit 2 touches with AP(1) and Surge. Roll as many dice as touches to see if \"on rolls of 6\" effects trigger."
        }
      ]
    },
    "Mind Corruption": {
      "title": "Mind Corruption",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez une unité ennemie a 12\", qui subit 2 touches with AP(1) and Surge. Roll as many dice as touches to see if \"on rolls of 6\" effects trigger."
        }
      ]
    },
    "Mind Gash": {
      "title": "Mind Gash",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à trois unité ennemies a 12\", qui subissent 2 touches with AP(1) and Shred each."
        }
      ]
    },
    "Mind Shaper": {
      "title": "Mind Shaper",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à quatre unité ennemies a 18\", qui gagnent -1 to jets de test de moral une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Mind Vortex": {
      "title": "Mind Vortex",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à quatre unité ennemies a 12\", qui subissent 1 hit with AP(2) each."
        }
      ]
    },
    "Mind Wound": {
      "title": "Mind Wound",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez une unité ennemie a 12\", qui subit 2 touches with Demolish."
        }
      ]
    },
    "Mob Frenzy": {
      "title": "Mob Frenzy",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à quatre unité ennemies a 18\", which les unités alliées gagnent AP(1) when shooting against une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Neurotoxin Cloud": {
      "title": "Neurotoxin Cloud",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à quatre unité ennemies a 6\", qui subissent 2 touches chacune."
        }
      ]
    },
    "Nightmare Vision": {
      "title": "Nightmare Vision",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez un modele ennemi a 24\", qui subit 1 hit with AP(4)."
        }
      ]
    },
    "Nomad Strike": {
      "title": "Nomad Frappe",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à deux unité ennemies a 12\", qui subissent 1 hit with AP(2) each."
        }
      ]
    },
    "Obscuring Energy": {
      "title": "Obscuring Energy",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à quatre unité alliées a 12\", qui gagnent Shadow Operative Boost une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Overload Electronics": {
      "title": "Overload Electronics",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez une unité ennemie a 12\", qui subit 2 touches with Scratch."
        }
      ]
    },
    "Overwhelming Strike": {
      "title": "Overwhelming Frappe",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez une unité ennemie a 12\", qui subit 2 touches with AP(1) and Rupture. Roll as many dice as touches to see if \"on rolls of 6\" effects trigger."
        }
      ]
    },
    "Path of War": {
      "title": "Path of War",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à quatre unité alliées a 12\", qui gagnent Ferocious Boost une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Piercing Bots": {
      "title": "Piercing Bots",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez une unité ennemie a 12\", qui subit 2 touches with AP(2)."
        }
      ]
    },
    "Piercing Pulse": {
      "title": "Piercing Pulse",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à trois modele ennemis a 24\", qui subissent 1 hit with AP(4) each."
        }
      ]
    },
    "Pike of Doom": {
      "title": "Pike of Doom",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à trois unité ennemies a 6\", qui subissent 1 hit with AP(2) and Deadly(3) each."
        }
      ]
    },
    "Piranha Curse": {
      "title": "Piranha Curse",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à quatre unité ennemies a 9\", qui subissent 2 touches chacune."
        }
      ]
    },
    "Pow!": {
      "title": "Pow!",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à trois unité ennemies a 6\", qui subissent 1 hit with AP(2) and Skewer each."
        }
      ]
    },
    "Power Beam": {
      "title": "Power Beam",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez un modele ennemi a 18\", qui subit 2 touches with AP(1)."
        }
      ]
    },
    "Power Field": {
      "title": "Power Field",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à six unité alliées a 12\", qui gagnent Shielded une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Power Maw": {
      "title": "Power Maw",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à deux unité ennemies a 12\", qui subissent 1 hit with AP(2) each."
        }
      ]
    },
    "Power Surge": {
      "title": "Power Surge",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à trois modele ennemis a 12\", qui subissent 2 touches with Hazardous each. Roll as many dice as touches to see if \"on rolls of 1\" effects trigger."
        }
      ]
    },
    "Protective Dome": {
      "title": "Protective Dome",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à six unité alliées a 12\", qui gagnent <key>Esquive</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Psy-Adrenaline": {
      "title": "Psy-Adrenaline",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à deux unité alliées a 12\", qui gagnent Harassing Boost une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Psy-Cleansing": {
      "title": "Psy-Cleansing",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à deux unité ennemies a 12\", qui subissent 2 touches with Disintegrate each."
        }
      ]
    },
    "Psy-Destruction": {
      "title": "Psy-Destruction",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à deux modele ennemis a 24\", qui subissent 1 hit with AP(4) each."
        }
      ]
    },
    "Psy-Emowerment": {
      "title": "Psy-Emowerment",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à deux unité alliées a 12\", qui gagnent AP(1) when attacking une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Psy-Flame": {
      "title": "Psy-Flame",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez une unité ennemie a 12\", qui subit 2 touches with AP(1) and Surge. Roll as many dice as touches to see if \"on rolls of 6\" effects trigger."
        }
      ]
    },
    "Psy-Frenzy": {
      "title": "Psy-Frenzy",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à deux unité alliées a 12\", qui gagnent Psychotic Boost une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Psy-Hunter": {
      "title": "Psy-Hunter",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à deux unité alliées a 12\", qui gagnent Scrapper Boost une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Psy-Incense": {
      "title": "Psy-Incense",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à quatre unité ennemies a 18\", which les unités alliées gagnent Bane when attacking against une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Psy-Injected Courage": {
      "title": "Psy-Injected Courage",
      "description": [
        {
          "system": "Human Inquisition",
          "cost": 0,
          "text": "Choisissez jusqu'à deux unité alliées a 12\", qui gagnent +1 to jets de test de moral une fois (la prochaine fois que l'effet s'appliquerait)."
        },
        {
          "system": "Human Defense Force",
          "cost": 0,
          "text": "Choisissez jusqu'à deux unité alliées a 12\", qui gagnent Hold the Line Boost une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Psy-Rapture": {
      "title": "Psy-Rapture",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à trois unité ennemies a 18\", qui subissent 2 touches chacune."
        }
      ]
    },
    "Psy-Strength": {
      "title": "Psy-Strength",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à six unité alliées a 12\", qui gagnent +1 jets pour toucher in mêlée une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Psychic Blast": {
      "title": "Psychic Explosion",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à deux unité ennemies a 12\", qui subissent 2 touches with AP(2) each."
        }
      ]
    },
    "Psychic Chains": {
      "title": "Psychic Chains",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à six unité ennemies a 18\", qui gagnent Unwieldy in mêlée une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Psychic Feast": {
      "title": "Psychic Feast",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à deux unité alliées a 12\", qui gagnent Resistance une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Psychic Flurry": {
      "title": "Psychic Flurry",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à six unité alliées a 12\", qui gagnent mêlée Slayer une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Psychic Onslaught": {
      "title": "Psychic Onslaught",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à deux unité ennemies a 12\", qui subissent 2 touches with Reap each."
        }
      ]
    },
    "Psychic Overload": {
      "title": "Psychic Overload",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à trois unité ennemies a 12\", qui subissent 2 touches with AP(1) and Fragment each."
        }
      ]
    },
    "Psychic Smash": {
      "title": "Psychic Smash",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à quatre unité ennemies a 12\", qui subissent 1 hit with AP(2) each."
        }
      ]
    },
    "Psychic Stabilization": {
      "title": "Psychic Stabilization",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à quatre unité alliées a 12\", qui gagnent Targeting Visor Boost une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Psychic Terror": {
      "title": "Psychic Terror",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à trois unité ennemies a 6\", qui subissent 3 touches with Bane each."
        }
      ]
    },
    "Psychic Vomit": {
      "title": "Psychic Vomit",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à deux unité ennemies a 6\", qui subissent 3 touches with Bane each."
        }
      ]
    },
    "Purge the Impure": {
      "title": "Purge the Impure",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à six unité ennemies a 12\", qui subissent 1 hit with AP(2) each."
        }
      ]
    },
    "Quill Blast": {
      "title": "Quill Explosion",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à deux unité ennemies a 12\", qui subissent 2 touches with Scratch each."
        }
      ]
    },
    "Raiding Drugs": {
      "title": "Raiding Drugs",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à quatre unité ennemies a 18\", which les unités alliées gagnent +1 jets pour toucher in mêlée against une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Rapid Mutation": {
      "title": "Rapid Mutation",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à six unité alliées a 12\", qui gagnent Regeneration une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Resonance Wave": {
      "title": "Resonance Wave",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à six unité alliées a 12\", qui gagnent Regeneration une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Righteous Fury": {
      "title": "Righteous Fury",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à quatre unité alliées a 12\", qui gagnent Piercing Assault une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Righteous Wrath": {
      "title": "Righteous Wrath",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez un modele ennemi a 24\", qui subit 1 hit with AP(4)."
        }
      ]
    },
    "Running Shock": {
      "title": "Running Shock",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à quatre unité ennemies a 18\", which les unités alliées gagnent Thrust against une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Searing Admonition": {
      "title": "Searing Admonition",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à trois unité ennemies a 18\", qui subissent 1 hit with Blast(3) each."
        }
      ]
    },
    "Searing Burst": {
      "title": "Searing Burst",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à deux unité ennemies a 12\", qui subissent 3 touches chacune."
        }
      ]
    },
    "Searing Shrapnel": {
      "title": "Searing Shrapnel",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à deux unité ennemies a 12\", qui subissent 2 touches with AP(1) and Wreck each."
        }
      ]
    },
    "Serpent Comet": {
      "title": "Serpent Comet",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez une unité ennemie a 12\", qui subit 2 touches with Disintegrate."
        }
      ]
    },
    "Shadow Blast": {
      "title": "Shadow Explosion",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à quatre unité ennemies a 12\", qui subissent 1 hit with AP(2) each."
        }
      ]
    },
    "Shadow Dance": {
      "title": "Shadow Dance",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à quatre unité alliées a 12\", qui gagnent Rapid Blink Boost une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Shattering Curse": {
      "title": "Shattering Curse",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à trois unité ennemies a 12\", qui subissent 2 touches with AP(1) and Crack each. Roll as many dice as touches to see if \"on rolls of 6\" effects trigger."
        }
      ]
    },
    "Shield Breaker": {
      "title": "Shield Breaker",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à trois unité ennemies a 12\", qui subissent 2 touches with AP(1) and Shred each."
        }
      ]
    },
    "Shock Speed": {
      "title": "Shock Speed",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à six unité alliées a 12\", which moves +2\" when using Advance actions and +4\" when using Rush/Charge actions une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Shroud Field": {
      "title": "Shroud Field",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à six unité alliées a 12\", qui gagnent +1 to defense rolls une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Shrouding Incense": {
      "title": "Shrouding Incense",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à quatre unité alliées a 12\", qui gagnent Machine-Fog Boost une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Smash!": {
      "title": "Smash!",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez une unité ennemie a 12\", qui subit 2 touches with AP(1) and Surge."
        }
      ]
    },
    "Smiting Rune": {
      "title": "Smiting Rune",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à deux unité ennemies a 12\", qui subissent 2 touches with AP(1) and Quake each."
        }
      ]
    },
    "Snake Bite": {
      "title": "Snake Bite",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez une unité ennemie a 12\", qui subit 2 touches with AP(1) and Lacerate."
        }
      ]
    },
    "Soul Spear": {
      "title": "Soul Spear",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez un modele ennemi a 24\", qui subit 1 hit with Puncture."
        }
      ]
    },
    "Spirit Power": {
      "title": "Esprit Power",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à deux unité alliées a 12\", qui gagnent Flying une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Spirit Resolve": {
      "title": "Esprit Resolve",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à quatre unité alliées a 12\", qui gagnent Clan Warrior Boost une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Spread Plague": {
      "title": "Spread Plague",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à deux unité ennemies a 18\", qui subissent 1 hit with Bash each."
        }
      ]
    },
    "Static Blast": {
      "title": "Static Explosion",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à deux unité ennemies a 18\", qui subissent 1 hit with Blast(3) each."
        }
      ]
    },
    "Stimulant Shock": {
      "title": "Stimulant Shock",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à quatre unité alliées a 12\", qui gagnent Inébranlable une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Stinger Blast": {
      "title": "Stinger Explosion",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez une unité ennemie a 18\", qui subit 1 hit with Smash."
        }
      ]
    },
    "Storm of Power": {
      "title": "Tempete of Power",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à trois unité ennemies a 12\", qui subissent 2 touches with AP(1) and Surge each. Roll as many dice as touches to see if \"on rolls of 6\" effects trigger."
        }
      ]
    },
    "System Takeover": {
      "title": "System Takeover",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à deux unité ennemies a 12\", qui subissent 3 touches chacune."
        }
      ]
    },
    "Targeting Signal": {
      "title": "Targeting Signal",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à deux unité alliées a 12\", qui gagnent Relentless une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Taser Shock": {
      "title": "Taser Shock",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à trois unité ennemies a 12\", qui subissent 2 touches with AP(2) each."
        }
      ]
    },
    "Tech Zapper": {
      "title": "Tech Zapper",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez une unité ennemie a 6\", qui subit 3 touches with Pulverize."
        }
      ]
    },
    "Tech-Sickness": {
      "title": "Tech-Sickness",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à quatre unité ennemies a 18\", qui gagnent -1 to defense rolls une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Terror Seeker": {
      "title": "Terror Seeker",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à six unité ennemies a 18\", which les unités alliées gagnent Unpredictable Fighter against une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "The Founder's Curse": {
      "title": "The Founder's Curse",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à deux unité ennemies a 18\", which les unités alliées gagnent Shred when attacking against une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Thunderous Mist": {
      "title": "Thunderous Mist",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez une unité ennemie a 18\", qui subit 2 touches."
        }
      ]
    },
    "Toxin Mist": {
      "title": "Toxin Mist",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à deux unité ennemies a 18\", which les unités alliées gagnent Bane when attacking against une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Trampling Force": {
      "title": "Trampling Force",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à deux unité ennemies a 12\", qui subissent 2 touches with AP(1) and Slam each."
        }
      ]
    },
    "Triangulation Bots": {
      "title": "Triangulation Bots",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à deux unité ennemies a 18\", which les unités alliées gagnent Indirect when shooting against une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Union Propaganda": {
      "title": "Union Propaganda",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à quatre unité alliées a 12\", qui gagnent Grounded Precision une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Veil of Madness": {
      "title": "Veil of Madness",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à six unité ennemies a 18\", which les unités alliées gagnent Slayer against une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Violent Onslaught": {
      "title": "Violent Onslaught",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à deux unité alliées a 12\", qui gagnent Infected Boost une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Volatile Infection": {
      "title": "Volatile Infection",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à trois unité ennemies a 6\", qui subissent 1 hit with AP(2) and Deadly(3) each."
        }
      ]
    },
    "Wasteland Storm": {
      "title": "Wasteland Tempete",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à trois modele ennemis a 24\", qui subissent 1 hit with Tear each."
        }
      ]
    },
    "Watch Dome": {
      "title": "Watch Dome",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à six unité alliées a 12\", qui gagnent <key>Esquive</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Watch Sight": {
      "title": "Watch Sight",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à deux unité ennemies a 18\", which les unités alliées gagnent Unstoppable when shooting against une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Watch Trauma": {
      "title": "Watch Trauma",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez une unité ennemie a 18\", qui subit 1 hit with Smash."
        }
      ]
    },
    "Watch Wound": {
      "title": "Watch Wound",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez une unité ennemie a 12\", qui subit 2 touches with Demolish."
        }
      ]
    },
    "Wave of Discord": {
      "title": "Wave of Discord",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à deux unité ennemies a 18\", qui subissent 1 hit with Thrash each."
        }
      ]
    },
    "Weapon Booster": {
      "title": "Weapon Renforcementer",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à deux unité alliées a 12\", qui gagnent Scurry Boost une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Wolf Dome": {
      "title": "Wolf Dome",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à six unité alliées a 12\", qui gagnent <key>Esquive</key> une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Wolf Sight": {
      "title": "Wolf Sight",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à deux unité ennemies a 18\", which les unités alliées gagnent Unstoppable when shooting against une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Wolf Trauma": {
      "title": "Wolf Trauma",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez une unité ennemie a 18\", qui subit 1 hit with Smash."
        }
      ]
    },
    "Wolf Wound": {
      "title": "Wolf Wound",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez une unité ennemie a 12\", qui subit 2 touches with Demolish."
        }
      ]
    },
    "Worker's Uprising": {
      "title": "Worker's Uprising",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez jusqu'à deux unité alliées a 12\", which moves +2\" when using Advance actions and +4\" when using Rush/Charge actions une fois (la prochaine fois que l'effet s'appliquerait)."
        }
      ]
    },
    "Zap!": {
      "title": "Zap!",
      "description": [
        {
          "system": "all",
          "cost": 0,
          "text": "Choisissez une unité ennemie a 12\", qui subit 2 touches with AP(1) and Surge."
        }
      ]
    }

  }
}
