export type RuleDescription = {
  system: string;
  text: string;
};

export enum SpecialRuleId {
  ID_N_0zpUZx5GkSHb = "0zpUZx5GkSHb",
  ID_N_56Tb7FFgHuyX = "56Tb7FFgHuyX",
  ID_N_5xPzQn4Qdzz6 = "5xPzQn4Qdzz6",
  ID_AiReKTM86F3e = "AiReKTM86F3e",
  ID_AxiZW7zj2hUK = "AxiZW7zj2hUK",
  ID_GgMdmXsCVdK2 = "GgMdmXsCVdK2",
  ID_H18g_ND_uWiZ = "H18g-ND_uWiZ",
  ID_HH7O68qvHVR0 = "HH7O68qvHVR0",
  ID_K44UD3HPQAfg = "K44UD3HPQAfg",
  ID_OJr14Si4C1Uj = "OJr14Si4C1Uj",
  ID_OyVVPwEw7Uep = "OyVVPwEw7Uep",
  ID_Q7nWXE_8DEHN = "Q7nWXE-8DEHN",
  ID_RMi35vAtYNb = "RMi35vAtYNb-",
  ID_SY80P2vKJGrY = "SY80P2vKJGrY",
  ID_SshMejY9Kz7s = "SshMejY9Kz7s",
  ID_k9nd29ZX_FQ = "_k9nd29ZX-FQ",
  ID_aHBBAhsdAqyz = "aHBBAhsdAqyz",
  ID_cJJJPqOuiHWx = "cJJJPqOuiHWx",
  ID_cyQpyja0EDRj = "cyQpyja0EDRj",
  ID_dRAJ8qnYDOxm = "dRAJ8qnYDOxm",
  ID_f78kQxkgtIs1 = "f78kQxkgtIs1",
  ID_fLQMyzi3zbFI = "fLQMyzi3zbFI",
  ID_iv1Jm6zZiZPJ = "iv1Jm6zZiZPJ",
  ID_ndODzgAqJGDz = "ndODzgAqJGDz",
  ID_oACH5PrePLfv = "oACH5PrePLfv",
  ID_p9iL_bzUnY7A = "p9iL_bzUnY7A",
  ID_tKa31SeqrzS1 = "tKa31SeqrzS1",
  ID_uAXC1RxdtELq = "uAXC1RxdtELq",
  ID_vhKZ0CIT6dBt = "vhKZ0CIT6dBt",
  ID_voFsQwaDph1Y = "voFsQwaDph1Y",
  ID_wLKHbRBBr4NI = "wLKHbRBBr4NI",
  ID_x2_Lkyj0JPk2 = "x2_Lkyj0JPk2",
  ID_xw2YHtZNkhIV = "xw2YHtZNkhIV",
  ID_ylxJ4fFb6cZf = "ylxJ4fFb6cZf",
  ID_zrj60Gptp4Ce = "zrj60Gptp4Ce",
}

export type SpecialRuleIdValue = `${SpecialRuleId}`;

export type RuleTranslationEntry = {
  title: string;
  specialRule?: SpecialRuleIdValue[];
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
          "text": "Targets get -X to Defense rolls when blocking hits."
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
          "text": "Ignores Regeneration, and when attacking the target must re-roll unmodified Defense results of 6."
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
          "text": "Strikes first with this weapon when charged, and the charging unit gets -1 total Impact rolls per model with Counter."
        },
        {
          "system": "aofr",
          "text": "Strikes first with this weapon when charged, and the charging unit gets -1 total Impact rolls per model with Counter in the two front rows if charging in the front."
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
          "text": "Assign each wound to one model, and multiply it by X. Hits from Deadly must be resolved first, and these wounds don’t carry over to other models if the original target is killed."
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
          "text": "Ignores Regeneration, and on unmodified results of 6 to hit, those hits get AP(+4)."
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
          "text": "May be set aside before deployment. After all other units are deployed, may be deployed anywhere fully within 12” of their deployment zone. Players alternate in placing Scout units, starting with the player that activates next."
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
          "text": "When units where all models have this rule take hits, those hits count as having AP(-1), to a min. of AP(0)."
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
          "text": "If all models in this unit have Shadowborn, enemies get -8\" range when shooting  them and -4\" movement when charging them from Shadowborn (instead of only -4\" and -2\")."
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
          "text": "Once per activation, before attacking, roll one die. On a 2+ one enemy unit within 6\" in line of sight takes 1 hit with Blast(3) and AP(1)."
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
          "text": "Counts as having Defense X+."
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
          "text": "Enemy units using Ambush must be set up over 12\" away from this model's unit."
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
          "text": "This model's melee weapons get AP(+2) against units where most models have Tough(3) or higher."
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
          "text": "This model and its unit get Thrust in melee."
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
          "text": "This model and its unit get Counter-Attack."
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
          "text": "This model and its unit get Rapid Rush."
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
          "text": "This model gets Bane in melee."
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
          "text": "This model and its unit get Shadowborn Boost."
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
          "text": "Once per activation, before attacking, pick one enemy unit within 18\", which friendly units gets Unpredictable Fighter against once (next time the effect would apply)."
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
          "text": "Ignores Cover, and against units where most models have Defense 2+ to Defense 4+, this weapon gets AP(+1)."
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
          "text": "When in melee, roll one die and apply one effect to all models with this rule: on a 1-3 they get AP(+1), and on a 4-6 they get +1 to hit rolls instead."
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
          "text": "When attacking, roll one die and apply one effect to all models with this rule: on a 1-3 they get AP(+1), and on a 4-6 they get +1 to hit rolls instead."
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
          "text": "This model and its unit get Grounded Protection."
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
          "text": "This model and its unit get Piercing Assault."
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
          "text": "This model and its unit get Unpredictable Shooter."
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
          "text": "This model and its unit get Hit & Run Shooter."
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
          "text": "This model and its unit get Melee Evasion."
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
          "text": "If all models in this unit have Wild Veil, enemies get -8\" range when shooting  them and -4\" movement when charging them from Wild Veil (instead of only -4\" and -2\")."
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
          "text": "Once per activation, before attacking, pick one enemy unit within 18\", which friendly units gets Quick Shot against once (next time the effect would apply)."
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
          "text": "This model gets AP(+1) when charging."
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
          "text": "This model and its unit get Wild Veil Boost."
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
          "text": "This model and its unit get Rapid Advance."
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
          "text": "When shooting, roll one die and apply one effect to all models with this rule: on a 1-3 they get AP(+1), and on a 4-6 they get +1 to hit rolls instead."
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
          "text": "This model and its unit get Stealth."
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
          "text": "This model may ignore the Slow rule."
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
          "text": "Once per game, when it's this model's turn to attack in melee, you may pick one model in the unit as its target, and make one attack at Quality 2+ with AP(2) and Deadly(3), which is resolved as if it's a unit of 1."
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
          "text": "This model and its unit get Grounded Reinforcement."
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
          "text": "This model and its unit get Quick Shot."
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
          "text": "This model and its unit get Swift."
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
          "text": "This model and its unit get Strider."
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
          "text": "This model and its unit get Unstoppable in melee."
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
          "text": "Ignores Cover, and on unmodified results of 6 to hit, those hits get AP(+4)."
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
          "text": "Once per activation, before attacking, pick one enemy unit within 18\", which friendly units gets Piercing Assault against once (next time the effect would apply)."
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
          "text": "When a unit where all models have this rule is Shaken or fully destroyed, you may remove it from the table as destroyed and place a new copy of it fully within 12\" of any table edge at the beginning of the next round after Ambushers have been deployed. Units that deploy via Reinforcement can’t seize or contest objectives on the round they deploy, and this rule doesn’t apply to the new copy of the unit."
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
          "text": "This model and its unit get No Retreat."
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
          "text": "Counts as having Ambush, but may be deployed up to 1\" away from enemy units."
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
          "text": "This model and its unit get Piercing Hunter."
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
          "text": "This model and its unit get Reanimation."
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
          "text": "This model and its unit get Scout."
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
          "text": "This model and its unit get Shred in melee."
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
          "text": "Against units where most models have Defense 2+ to Defense 4+, this weapon gets AP(+1)."
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
          "text": "Once per activation, before attacking, pick one friendly model within 12\" with Caster, which gets +1 to casting rolls once (next time the effect would apply)."
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
          "text": "Once per activation, before attacking, pick one friendly unit within 12\", which gets Cursed Undead Boost once (next time the effect would apply)."
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
          "text": "When this model shoots at enemies over 9\" away, its weapons get AP(+1)."
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
          "text": "If all models in this unit have Cursed Undead, they ignore wounds on rolls of 5-6 from Cursed Undead (instead of only on 6+)."
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
          "text": "Once per activation, when this model moves through enemy units, pick one of them and roll X dice. For each 4+ it takes 3 hits with AP(1)."
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
          "text": "Once per activation, before attacking, pick one friendly model within 3\" with Tough, and remove D3 wounds from it."
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
          "text": "This model and its unit get Rending when shooting."
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
          "text": "This model and its unit get Resistance."
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
          "text": "Against units where most models have Tough(3) to Tough(9), this weapon gets AP(+2)."
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
          "text": "This model and its unit get Buccaneer Boost."
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
          "text": "Once per activation, before attacking, pick one enemy unit within 18\" with Caster, which gets -1 to casting rolls once (next time the effect would apply)."
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
          "text": "If this model has Buccaneer, it always gets +1 to hit rolls from Buccaneer (instead of only when shooting over 9\" away)."
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
          "text": "Once per game, once during its activation when this model moves through enemy units, pick one of them, and roll X dice. For each 4+ it takes 3 hits with AP(1)."
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
          "text": "Counts as having Impact(X) with hits that have AP(1)."
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
          "text": "This model and its unit get Rending in melee."
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
          "text": "Ignores Regeneration, and against units where most models have Defense 2+ to Defense 3+, this weapon gets AP(+2)."
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
          "text": "Once per activation, before attacking, pick one enemy unit within 18\", which friendly units gets Shred when attacking against once (next time the effect would apply)."
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
          "text": "Once per activation, before attacking, pick one friendly unit within 12\", which gets Primal Boost once (next time the effect would apply)."
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
          "text": "If this model has Primal, it gets extra attacks on successful unmodified hit results of 5-6 from Primal (instead of only on 6)."
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
          "text": "Once per game, when this model is activated, before attacking, roll 3 dice. For each 2+ one enemy unit within 12\" takes 3 hits with AP(1)."
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
          "text": "When it's this model's turn to attack in melee, roll X dice. For each 6+ the target takes one hit with AP(2)."
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
          "text": "This model and its unit get Warbound Boost."
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
          "text": "If this model has Warbound, enemies taking wounds from it take extra wounds on failed defense rolls of 1-2 from Warbound (instead of only on 1)."
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
          "text": "This model and its unit get Ambush."
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
          "text": "Place one marker on this unit when it fully destroys an enemy unit. For each marker all models with this rule in this unit get +1 to hit rolls and AP(+1) until the end of the game (up to a max. of +2)."
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
          "text": "This model and its unit get AP(+1) when shooting."
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
          "text": "This model and its unit get Furious."
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
          "text": "This model and its unit get Shielded."
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
          "text": "This model and its unit get AP(+1) in melee."
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
          "text": "Ignores Regeneration, and on unmodified results of 6 to hit, those hits get AP(+2)."
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
          "text": "This model and its unit get Reckless Piercing."
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
          "text": "When a unit where all models have this rule is activated, you may roll one die. On a 2+ they get AP(+1) when attacking until the end of the round, but on a 1 enemy units get AP(+1) when attacking them instead."
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
          "text": "Once per game, when this model is activated, before attacking, roll 3 dice. For each 2+ one enemy unit within 12\" takes 3 hits with Bane."
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
          "text": "If all models in this unit have Plaguebound, they ignore wounds on rolls of 5-6 from Plaguebound (instead of only on 6+)."
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
          "text": "This model and its unit get Relentless."
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
          "text": "Place one marker on this unit at the end of each round if it's on the table. If all models in it have this rule, for each marker enemies attacking them get AP(-1) to a min. of AP(0) (up to a max. of -2). If this unit is ever Shaken, it loses all its markers."
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
          "text": "This model and its unit get Steadfast."
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
          "text": "This model and its unit get Plaguebound Boost."
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
          "text": "This model gets Rending in melee."
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
          "text": "This model and its unit get Hit & Run Fighter."
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
          "text": "Once per game, when this model is activated, before attacking, roll 3 dice. For each 2+ one enemy unit within 12\" takes 3 hits with Surge (roll one die per hit to see if it triggers)."
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
          "text": "If this model has Lustbound, it moves +2\" on Advance and +6\" on Rush/Charge from Lustbound (instead of only +1\" and +3\")."
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
          "text": "Ignores Regeneration, and against units where most models have Tough(3) to Tough(9), this weapon gets AP(+2)."
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
          "text": "This model and its unit get Unstoppable when shooting."
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
          "text": "This model and its unit get Lustbound Boost."
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
          "text": "Gets AP(4), but this model's unit takes one wound on unmodified rolls of 1 to hit."
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
          "text": "This model ignores penalties from shooting after moving when using Indirect weapons."
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
          "text": "This model and its unit get Evasive."
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
          "text": "This model and its unit get Bane when shooting."
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
          "text": "This model and its unit get Bane in melee."
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
          "text": "This model and its unit get Scurry Boost."
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
          "text": "If this model has Scurry, it moves +4\" on Advance and +4\" on Rush/Charge from Scurry (instead of only +2\" and +2\")."
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
          "text": "When units where all models have this rule are shot or charged from over 9\" away and take hits, those hits count as having AP(-1), to a min. of AP(0)."
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
          "text": "On unmodified results of 6 to hit, those hits get AP(+4)."
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
          "text": "This model gets AP(+1) when shooting."
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
          "text": "This model and its unit get Precision Feat."
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
          "text": "Once per activation, before attacking, pick one enemy unit within 18\", which friendly units gets Furious against once (next time the effect would apply)."
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
          "text": "This model and its unit get Ossified Boost."
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
          "text": "If all models in this unit have Ossified, enemy hits always count as having AP(-1) from Ossified (instead of only when being shot/charged from over 9\" away)."
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
          "text": "This model and its unit get Melee Shrouding."
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
          "text": "This model and its unit get Ferocious Boost."
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
          "text": "This model and its unit get Ravage(+1)."
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
          "text": "This model and its unit get Speed Feat."
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
          "text": "Against units where most models have Tough(3) to Tough(9), this weapon gets Deadly(+3)."
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
          "text": "Once per activation, before attacking, pick one enemy unit within 18\", which friendly units gets Rending in melee against once (next time the effect would apply)."
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
          "text": "Once per activation, before attacking, pick one friendly unit within 12\", which gets Piercing Assault."
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
          "text": "If this model has Ferocious, it deals extra hits on successful unmodified hit results of 5-6 from Ferocious (instead of only on 6)."
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
          "text": "Once per activation, pick one enemy unit within 36\" and in line of sight of this model and roll one die, on a 4+ place a marker on it. When attacking, friendly units may remove markers from their target before rolling to block to get +AP(X), where X is the number of removed markers."
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
          "text": "Ignores Cover, and on unmodified results of 6 to hit that aren't blocked, this weapon deals 1 extra wound."
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
          "text": "This model and its unit get Royal Legion Boost."
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
          "text": "This model and its unit get Fortified."
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
          "text": "This model and its unit get Indirect when shooting."
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
          "text": "Counts as having Infiltrate. Once deployed via this rule, roll X dice, for each 4+ one enemy unit within 3” takes 2 hits with AP(1)."
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
          "text": "If this model has Royal Legion, it gets +6\" range when shooting and moves +6\" when using Charge actions from Royal Legion (instead of only +3\" and +3\")."
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
          "text": "Ignores Regeneration, and against units where most models have Tough(3) to Tough(9), this weapon gets Deadly(+3)."
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
          "text": "Once per activation, before attacking, pick one enemy unit within 18\", which friendly units gets Slayer against once (next time the effect would apply)."
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
          "text": "Once per activation, before attacking, pick one friendly unit within 12\", which gets Angelic Blessing Boost once (next time the effect would apply)."
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
          "text": "Once per activation, before attacking, pick one friendly unit within 12\", which gets Versatile Attack once (next time the effect would apply)."
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
          "text": "This model's weapons get AP(+2) against units where most models have Tough(3) or higher."
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
          "text": "If all models in this unit have Angelic Blessing, they ignore non-spell wounds on rolls of 5-6 from Angelic Blessing (instead of only on 6+)."
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
          "text": "When this unit is activated, pick one effect: until the end of the activation all models with this rule in it either get AP(+1) when attacking, or get +1 to hit rolls when attacking."
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
          "text": "At the end of this unit's activation, another friendly unit within 12\" that hasn't activated yet may be activated immediately. May not be used if this unit was activated via Coordinate."
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
          "text": "If this unit is within 24\" of another friendly unit with this rule that has a Hero in it, then that Hero may use special rules that allow it to pick friendly units within 12\" (except for spells) on this unit as if it was in range."
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
          "text": "Once per activation, before attacking, pick one friendly unit within 12\", which gets Rapid Rush once (next time the effect would apply)."
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
          "text": "Ignores Cover, and on unmodified results of 6 to hit, those hits get AP(+2)."
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
          "text": "Once per activation, before attacking, pick one friendly unit within 12\", which gets Hold the Line Boost once (next time the effect would apply)."
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
          "text": "Once per activation, before attacking, pick one friendly unit within 12\", which gets Furious once (next time the effect would apply)."
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
          "text": "Once per activation, pick one friendly model within 6\" with Artillery, which may immediately move by up to 9\".\n\n"
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
          "text": "Pick one model with this rule in this unit to have Caster(X), where X is the total number of models with this rule in this unit. If the model is killed, pick another to be the new caster, and transfer all spell tokens to it. The caster loses all unspent spell tokens at the end of the round."
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
          "text": "If all models in this unit have Hold the Line, they get +2 to morale test rolls from Hold the Line (instead of only +1)."
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
          "text": "Once per game, during this model's activation, pick one enemy unit within 36\" and in line of sight of it, and place X markers on it. When attacking, friendly units may remove markers from their target before rolling to block to get +AP(Y), where Y is the number of removed markers."
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
          "text": "This model and its unit get Fearless."
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
          "text": "This model gets Indirect when shooting."
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
          "text": "On unmodified results of 6 to hit, those hits get AP(+2)."
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
          "text": "This model and its unit get Highborn Boost."
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
          "text": "If this model has Highborn, it moves +4\" on Advance and +4\" on Rush/Charge from Highborn (instead of only +2\" and +2\")."
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
          "text": "Ignores Cover, and on unmodified results of 1 to block hits, this weapon deals 1 extra wound."
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
          "text": "This model and its unit get Versatile Defense."
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
          "text": "This model and its unit get Shred when shooting."
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
          "text": "This model and its unit get Unpredictable Fighter."
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
          "text": "This model and its unit get Ranged Shrouding."
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
          "text": "This model gets Shred in melee."
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
          "text": "Once per activation, before attacking, pick one friendly unit within 12\", which gets Steadfast once (next time the effect would apply)."
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
          "text": "This model and its unit get Changebound Boost."
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
          "text": "If all models in this unit have Changebound, enemies attacking them always get -1 to hit rolls from Changebound (instead of only when being shot/charged from over 9\" away)."
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
          "text": "Ignores Cover, and on unmodified results of 6 to hit, this weapon deals 1 extra hits (only the original hit counts as a 6 for special rules)."
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
          "text": "This model gets Bane when shooting."
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
          "text": "Once per game, when this model is activated, before attacking, roll 3 dice. For each 2+ one enemy unit within 12\" takes 3 hits with Shred."
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
          "text": "This model gets Unstoppable in melee."
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
          "text": "This model and its unit get Bounding."
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
          "text": "This model and its unit get Havocbound Boost."
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
          "text": "When this model shoots at enemies over 9\" away, or when it charges, its weapons get AP(+1)."
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
          "text": "If this model has Havocbound, it always gets AP(+1) from Havocbound (instead of only when shooting over 9\" away, or when charging)."
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
          "text": "This model and its unit get Melee Slayer."
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
          "text": "Once per activation, before attacking, pick one enemy unit within 18\", which friendly units gets Relentless against once (next time the effect would apply)."
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
          "text": "Ignores Regeneration, and against units where most models have Defense 2+ to Defense 4+, this weapon gets AP(+1)."
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
          "text": "This model and its unit get Teleport."
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
          "text": "This model and its unit get Lucky Boost."
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
          "text": "When this unit is fully destroyed, place as many Vengeance markers on the unit that destroyed it as models with this rule in this unit at the beginning of the game. Friendly units get +X to hit rolls with their weapons when attacking that unit, where X is the number of markers on it."
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
          "text": "Ignores Cover, and against units where most models have Defense 5+ to Defense 6+, this weapon gets Blast(+3)."
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
          "text": "If this model has Lucky, it deals extra hits on successful unmodified hit results of 5-6 from Lucky (instead of only on 6)."
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
          "text": "When attacking, targets must re-roll unmodified Defense results of 6 when blocking hits from this model's weapons."
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
          "text": "This model and its unit get Mischievous Boost."
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
          "text": "Ignores Cover, and against units where most models have Tough(3) to Tough(9), this weapon gets Deadly(+3)."
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
          "text": "If this model has Mischievous, enemies taking hits from it must re-roll successful unmodified defense results of 5-6 from Mischievous (instead of only on 6)."
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
          "text": "This model and its unit get Empyrean Spirit Boost."
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
          "text": "Against units where most models have Defense 2+ to Defense 3+, this weapon gets AP(+2)."
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
          "text": "Once per activation, before attacking, pick one enemy unit within 18\", which friendly units gets Bane when attacking against once (next time the effect would apply)."
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
          "text": "If all models in this unit have Empyrean Spirit, enemies attacking them always get -1 to hit rolls from Empyrean Spirit (instead of only when being shot/charged from over 9\" away)."
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
          "text": "Once per game, during this model's activation, pick one enemy unit within 36\" and in line of sight of it, and place X markers on it. Friendly units get +AP(X) when attacking it."
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
          "text": "After all other units are deployed (excluding units that were set aside), you may remove up to two friendly units from the table and deploy them again. Players alternate in placing Re-Deployment units, starting with the player that activates next."
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
          "text": "This model and its unit get Warden Boost."
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
          "text": "Ignores Regeneration, and against units where most models have Defense 5+ to Defense 6+, this weapon gets Blast(+3)."
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
          "text": "Once per activation, before attacking, pick one enemy unit within 18\", which friendly units gets Unstoppable when shooting against once (next time the effect would apply)."
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
          "text": "If all models in this unit have Warden, enemy hits always count as having AP(-1) from Warden (instead of only when being shot/charged from over 9\" away)."
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
          "text": "Place one marker on this unit when it fully destroys an enemy unit. For each marker all models with this rule in this unit get AP(+1) and +1 to defense rolls until the end of the game (up to a max. of +2)."
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
          "text": "This model and its unit get Sturdy Boost."
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
          "text": "If all models in this unit have Sturdy, they always get +1 to defense rolls from Sturdy (instead of only when being shot/charged from over 9\" away)."
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
          "text": "When this unit is activated, pick one effect: until the end of the activation all models with this rule in it either get AP(+1) when attacking, or get +1 to hit rolls when attacking."
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
          "text": "This model and its unit get Ranged Slayer."
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
          "text": "Ignores Cover, and against units where most models have Defense 2+ to Defense 3+, this weapon gets AP(+2)."
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
          "text": "This model and its unit get Vinci Tech Boost."
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
          "text": "This model's ranged weapons get AP(+2) against units where most models have Tough(3) or higher."
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
          "text": "If this model has Vinci Tech, it always gets both AP(+1) and +1 to hit rolls from Vinci Tech (instead of having to pick between AP(+1) or +1 to hit rolls)."
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
          "text": "Once per activation, before attacking, pick one friendly unit within 12\", which gets Stealth once (next time the effect would apply)."
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
          "text": "Against units where most models have Defense 5+ to Defense 6+, this weapon gets Blast(+3)."
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
          "text": "This model and its unit get Wave-Step Boost."
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
          "text": "Once per game, when a unit where all models have this rule ends its activation, you may immediately remove it from the table (dropping any objectives it might hold within 1\"), and deploy it as if it had Ambush at the beginning of the next round."
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
          "text": "If this model has Wave-Step, it may be placed within 6\" from Wave-Step (instead of only within 3\")."
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
          "text": "Once per round, when this unit ends its move within 3\" of enemy units after being in melee, pick one of them and roll as many dice as models with this rule in this unit, or as many dice as its Tough value (for single-model units). For each 6+ the target takes one wound."
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
          "text": "When attacking the target must re-roll unmodified Defense results of 6."
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
          "text": "This model and its unit get Harassing Boost."
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
          "text": "Once per activation, before attacking, pick one enemy unit within 18\", which friendly units gets Thrust in melee against once (next time the effect would apply)."
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
          "text": "If most models in this unit have Harassing, they may move by up to 6\" from Harassing (instead of only 3\")."
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
          "text": "This model gets Counter in melee."
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
          "text": "Ignores Regeneration, and against units where most models have Tough(3) to Tough(9), this weapon gets AP(+4)."
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
          "text": "This model and its unit get Vale Formation Boost."
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
          "text": "Once per activation, before attacking, pick one enemy unit within 18\", which friendly units gets Impact(+1) against once (next time the effect would apply)."
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
          "text": "If this model has Vale Formation, it gets +4\" range when shooting and moves +8\" when using Charge actions from Vale Formation (instead of only +2\" and +4\")."
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
          "text": "When attacking, targets must re-roll unmodified Defense results of 6 when blocking hits from this model's weapons."
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
          "text": "Against units where most models have Tough(3) to Tough(9), this weapon gets AP(+4)."
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
          "text": "This model and its unit get Bestial Boost."
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
          "text": "If this model has Bestial, enemies taking hits from it must re-roll successful unmodified defense results of 5-6 from Bestial (instead of only on 6)."
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
          "text": "This model and its unit get Destroyer Boost."
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
          "text": "Once per game, when this unit attacks and all its models have this rule, you may use this rule so that all their weapons get AP(+2)."
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
          "text": "This model and its unit get Piercing Feat."
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
          "text": "Once per activation, before attacking, pick one friendly unit within 12\", which gets Melee Evasion once (next time the effect would apply)."
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
          "text": "Once per activation, before attacking, pick one enemy unit within 18\", which gets Unwieldy in melee once (next time the effect would apply)."
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
          "text": "If this model has Destroyer, enemies taking wounds from it take extra wounds on failed defense rolls of 1-2 from Destroyer (instead of only on 1)."
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
          "text": "Peut être mis de côté avant le déploiement. Au début de n'importe quel tour après le premier, peut être déployé n'importe où à plus de 9\" des unités ennemies. Les joueurs placent alternativement les unités en Embuscade, en commençant par le joueur qui active ensuite. Les unités qui se déploient via Embuscade ne peuvent pas prendre ou contester des objectifs le tour où elles se déploient."
        },
        {
          "system": "aofr",
          "text": "Peut etre mis de cote avant le deploiement. Au debut de n'importe quel tour apres le premier, peut etre deploye entierement a moins de 6? de n'importe quel bord de table, a plus de 9\" des unites ennemies. Les joueurs placent alternativement les unites en Embuscade, en commencant par le joueur qui active ensuite. Les unites qui se deploient via Embuscade ne peuvent pas prendre ou contester des objectifs le tour ou elles se deploient."
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
          "text": "Les cibles subissent -X à leurs jets de Défense lorsqu'elles bloquent des touches."
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
          "text": "Ne peut utiliser que des actions de Maintien. Lorsque ce modèle tire sur des ennemis à plus de 9\" de distance, il obtient +1 à ses jets pour toucher. Lorsque des unités ennemies tirent sur ce modèle à plus de 9\" de distance, elles subissent -2 à leurs jets pour toucher."
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
          "text": "Ignore la Régénération, et lors de l'attaque, la cible doit relancer les résultats de Défense non modifiés de 6."
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
          "text": "Reçoit X jetons de sort au début de chaque tour, mais ne peut pas détenir plus de 6 jetons à la fois. À tout moment avant d'attaquer, dépensez autant de jetons que la valeur du sort pour tenter de lancer un ou plusieurs sorts (un seul essai par sort). Lancez un dé, sur un 4+ résolvez l'effet sur une cible en ligne de vue. Les modèles à moins de 18\" en ligne de vue de l'unité du lanceur de sorts peuvent dépenser n'importe quel nombre de jetons de sort en même temps avant de lancer, pour donner au lanceur +1/-1 au jet par jeton."
        },
        {
          "system": "aofr",
          "text": "Recoit X jetons de sort au debut de chaque tour, mais ne peut pas detenir plus de 6 jetons a la fois. A tout moment avant d'attaquer, depensez autant de jetons que la valeur du sort pour tenter de lancer un ou plusieurs sorts (un seul essai par sort). Lancez un de, sur un 4+ resolvez l'effet sur une cible en ligne de vue dans n'importe quelle direction. Les modeles a moins de 18? en ligne de vue de l'unite du lanceur de sorts peuvent depenser n'importe quel nombre de jetons de sort en meme temps avant de lancer, pour donner au lanceur +1/-1 au jet par jeton."
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
          "text": "Assignez chaque blessure à un modèle et multipliez-la par X. Les touches de Mortel doivent être résolues en premier, et ces blessures ne se reportent pas sur d'autres modèles si la cible d'origine est tuée."
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
          "text": "Lorsqu'une unité où tous les modèles ont cette règle échoue à un test de moral, lancez un dé. Sur un 4+, il est considéré comme réussi à la place."
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
          "text": "Lors d'une charge, les résultats non modifiés de 6 pour toucher en mêlée infligent 1 touche supplémentaire (seule la touche originale compte comme un 6 pour les règles spéciales)."
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
          "text": "Subit -1 à ses jets pour toucher en tirant après s'être déplacé. Peut cibler des ennemis qui ne sont pas en ligne de vue comme s'ils l'étaient, et ignore le couvert des obstructions de vue."
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
          "text": "Lorsque ce modèle tire sur des ennemis à plus de 9\" de distance, les résultats non modifiés de 6 pour toucher infligent 1 touche supplémentaire (seule la touche originale compte comme un 6 pour les règles spéciales)."
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
          "text": "Peut être mis de côté avant le déploiement. Après que toutes les autres unités sont déployées, peut être déployé n'importe où entièrement à moins de 12\" de leur zone de déploiement. Les joueurs placent alternativement les unités Éclaireur, en commençant par le joueur qui active ensuite."
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
          "text": "Se déplace de -2\" en utilisant Avancée, et de -4\" en utilisant Précipitation/Charge."
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
      ],
      "specialRule": [
        "uAXC1RxdtELq",
        "cyQpyja0EDRj",
        "HH7O68qvHVR0"
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
      ],
      "specialRule": [
        "GgMdmXsCVdK2",
        "AiReKTM86F3e"
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
    },
    "Fortified": {
      "title": "Fortifie",
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
          "text": "Lorsque des unites dont tous les modeles ont cette regle subissent des touches, ces touches comptent comme ayant PA(-1), jusqu'a un minimum de PA(0)."
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
          "text": "Quand ce modele attaque, les resultats non modifies de 6 pour toucher infligent 1 touche supplementaire (seule la touche d'origine compte comme un 6 pour les regles speciales)."
        }
      ]
    },
    "Shadowborn Boost": {
      "title": "Amplification Shadowborn",
      "specialRule": [
        "zrj60Gptp4Ce"
      ],
      "description": [
        {
          "system": "all",
          "text": "Si tous les modeles de cette unite ont Shadowborn, les ennemis ont -8\" de portee lorsqu'ils tirent sur eux et -4\" de mouvement lorsqu'ils les chargent via Shadowborn (au lieu de seulement -4\" et -2\")."
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
          "text": "Une fois par activation, avant d'attaquer, lancez un de. Sur 2+, une unite ennemie a 6\" en ligne de vue subit 1 touche avec Blast(3) et AP(1)."
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
          "text": "Cette unite ne peut etre prise qu'une seule fois par armee."
        }
      ]
    },
    "Precision Target": {
      "title": "Cible de precision",
      "specialRule": [
        "zrj60Gptp4Ce",
        "iv1Jm6zZiZPJ"
      ],
      "description": [
        {
          "system": "all",
          "text": "Une fois par partie, durant l'activation de ce modele, choisissez une unite ennemie a 36\" et en ligne de vue, puis placez X marqueurs sur elle. Les unites amies obtiennent +X pour toucher lorsqu'elles l'attaquent."
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
      "title": "Repousse les embusques",
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
          "text": "Les unites ennemies utilisant Ambush doivent etre placees a plus de 12\" de l'unite de ce modele."
        }
      ]
    },
    "Ethereal": {
      "title": "Ethere",
      "specialRule": [
        "zrj60Gptp4Ce",
        "x2_Lkyj0JPk2"
      ],
      "description": [
        {
          "system": "all",
          "text": "Une fois par activation, avant d'attaquer, placez ce modele n'importe ou entierement a 6\" de sa position. Ce modele se deplace de -6\" en Advance et de -6\" en Rush/Charge."
        }
      ]
    },
    "Melee Slayer": {
      "title": "Tueur de melee",
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
          "text": "Les armes de melee de ce modele gagnent AP(+2) contre les unites dont la majorite des modeles ont Tough(3) ou plus."
        }
      ]
    },
    "Thrust in Melee Aura": {
      "title": "Aura de Percee en melee",
      "specialRule": [
        "zrj60Gptp4Ce",
        "GgMdmXsCVdK2"
      ],
      "description": [
        {
          "system": "all",
          "text": "Ce modele et son unite gagnent Thrust en melee."
        }
      ]
    },
    "Melee Evasion": {
      "title": "Evasion de melee",
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
          "text": "Les ennemis subissent -1 pour toucher en melee lorsqu'ils attaquent des unites dont tous les modeles ont cette regle."
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
          "text": "Les ennemis subissent -4\" de portee lorsqu'ils tentent de tirer sur des unites dont tous les modeles ont cette regle, et -2\" de mouvement lorsqu'ils tentent de les charger."
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
          "text": "Ce modele et son unite gagnent Counter-Attack."
        }
      ]
    },
    "Increased Shooting Range Aura": {
      "title": "Aura de Portee de tir accrue",
      "specialRule": [
        "zrj60Gptp4Ce",
        "ylxJ4fFb6cZf",
        "H18g-ND_uWiZ"
      ],
      "description": [
        {
          "system": "all",
          "text": "Ce modele et son unite gagnent +6\" de portee en tir."
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
          "text": "Quand c'est au tour de ce modele d'attaquer en melee, lancez X des. Pour chaque 6+, la cible subit une blessure."
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
          "text": "Ce modele et son unite gagnent Rapid Rush."
        }
      ]
    },
    "Bane in Melee": {
      "title": "Fleau en melee",
      "specialRule": [
        "zrj60Gptp4Ce",
        "fLQMyzi3zbFI",
        "dRAJ8qnYDOxm"
      ],
      "description": [
        {
          "system": "all",
          "text": "Ce modele gagne Bane en melee."
        }
      ]
    },
    "Shadowborn Boost Aura": {
      "title": "Aura d'Amplification Shadowborn",
      "specialRule": [
        "zrj60Gptp4Ce"
      ],
      "description": [
        {
          "system": "all",
          "text": "Ce modele et son unite gagnent Shadowborn Boost."
        }
      ]
    },
    "Unpredictable Fighter Mark": {
      "title": "Marque de Combattant imprevisible",
      "specialRule": [
        "zrj60Gptp4Ce"
      ],
      "description": [
        {
          "system": "all",
          "text": "Une fois par activation, avant d'attaquer, choisissez une unite ennemie a 18\". Les unites amies gagnent Unpredictable Fighter contre elle une fois (la prochaine fois que l'effet devrait s'appliquer)."
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
          "text": "Lorsqu'une unite dont tous les modeles ont cette regle subit des blessures, lancez un de pour chacune. Sur 6+, elle est ignoree. Si les blessures proviennent d'un sort, elles sont ignorees sur 2+ a la place."
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
          "text": "Ce modele gagne +1 pour toucher en melee."
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
          "text": "Ignore le couvert, et contre les unites dont la majorite des modeles ont une Defense de 2+ a 4+, cette arme gagne AP(+1)."
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
          "text": "Ce modele gagne +X a ses jets de Defense."
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
          "text": "Frappe en premier lorsqu'il est charge."
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
          "text": "Ce modele se deplace de +6\" lorsqu'il utilise des actions Rush."
        }
      ]
    },
    "Unpredictable Fighter": {
      "title": "Combattant imprevisible",
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
          "text": "En melee, lancez un de et appliquez un effet a tous les modeles avec cette regle: sur 1-3 ils gagnent AP(+1), sur 4-6 ils gagnent +1 pour toucher."
        }
      ]
    },
    "Unpredictable": {
      "title": "Imprevisible",
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
          "text": "Quand ce modele attaque, lancez un de et appliquez un effet a tous les modeles avec cette regle: sur 1-3 ils gagnent AP(+1), sur 4-6 ils gagnent +1 pour toucher."
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
      "title": "Evasif",
      "specialRule": [
        "zrj60Gptp4Ce",
        "iv1Jm6zZiZPJ",
        "ylxJ4fFb6cZf",
        "0zpUZx5GkSHb"
      ],
      "description": [
        {
          "system": "all",
          "text": "Les ennemis subissent -1 pour toucher lorsqu'ils attaquent des unites dont tous les modeles ont cette regle."
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
          "text": "Ce modele et son unite gagnent Grounded Protection."
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
          "text": "Les ennemis subissent -4\" de portee lorsqu'ils tentent de tirer sur des unites dont tous les modeles ont cette regle, et -2\" de mouvement lorsqu'ils tentent de les charger."
        }
      ]
    },
    "Hit & Run Shooter": {
      "title": "Tireur Frappe et Repli",
      "specialRule": [
        "cJJJPqOuiHWx",
        "Q7nWXE-8DEHN",
        "iv1Jm6zZiZPJ"
      ],
      "description": [
        {
          "system": "all",
          "text": "Une fois par round, les unites dont tous les modeles ont cette regle peuvent se deplacer jusqu'a 3\" apres avoir tire."
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
          "text": "Ce modele et son unite gagnent Piercing Assault."
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
          "text": "Si une unite dont tous les modeles ont cette regle a la majorite de ses modeles a 1\" ou moins d'un terrain, lorsqu'elle subit des blessures lancez un de par blessure, et sur 5+ elle est ignoree."
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
          "text": "Ce modele et son unite gagnent Unpredictable Shooter."
        }
      ]
    },
    "Hit & Run Shooter Aura": {
      "title": "Aura de Tireur Frappe et Repli",
      "specialRule": [
        "cJJJPqOuiHWx",
        "Q7nWXE-8DEHN",
        "iv1Jm6zZiZPJ"
      ],
      "description": [
        {
          "system": "all",
          "text": "Ce modele et son unite gagnent Hit & Run Shooter."
        }
      ]
    },
    "Melee Evasion Aura": {
      "title": "Aura d'Evasion en melee",
      "specialRule": [
        "cJJJPqOuiHWx",
        "GgMdmXsCVdK2",
        "OyVVPwEw7Uep"
      ],
      "description": [
        {
          "system": "all",
          "text": "Ce modele et son unite gagnent Melee Evasion."
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
          "text": "Si tous les modeles de cette unite ont Wild Veil, les ennemis subissent -8\" de portee en tir contre eux et -4\" de mouvement pour les charger via Wild Veil (au lieu de seulement -4\" et -2\")."
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
          "text": "Une fois par activation, avant d'attaquer, choisissez une unite ennemie a 18\" ; les unites amies gagnent Quick Shot contre elle une fois (la prochaine fois que l'effet s'applique)."
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
          "text": "Ce modele gagne AP(+1) lorsqu'il charge."
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
          "text": "Ce modele et son unite gagnent Wild Veil Boost."
        }
      ]
    },
    "Spawn": {
      "title": "Invocation",
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
          "text": "Une fois par partie, lorsque ce modele est active, vous pouvez placer une nouvelle unite de X entierement a 6\" de lui."
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
          "text": "Sur des resultats non modifies de 6 pour toucher qui ne sont pas bloques, cette arme inflige 1 blessure supplementaire."
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
          "text": "Ce modele et son unite gagnent Rapid Advance."
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
          "text": "Une fois par activation, avant d'attaquer, choisissez une unite ennemie a 18\" ; elle se deplace de -2\" en action Advance et de -4\" en action Rush/Charge une fois (la prochaine fois que l'effet s'applique)."
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
          "text": "Lors d'un tir, lancez un de et appliquez un effet a tous les modeles avec cette regle : sur 1-3 ils gagnent AP(+1), et sur 4-6 ils gagnent +1 pour toucher a la place."
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
          "text": "Une fois par round, les unites dont tous les modeles ont cette regle peuvent se deplacer jusqu'a 3\" apres avoir tire ou apres avoir ete en melee."
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
          "text": "Si une unite dont tous les modeles ont cette regle a la majorite de ses modeles a 1\" ou moins d'un terrain, elle gagne +1 a ses jets de defense."
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
          "text": "Ce modele et son unite gagnent Stealth."
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
          "text": "Ce modele peut ignorer la regle Slow."
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
          "text": "Une fois par partie, quand c'est au tour de ce modele d'attaquer en melee, vous pouvez choisir un modele de l'unite comme cible et faire une attaque a Qualite 2+ avec AP(2) et Deadly(3), resolue comme s'il s'agissait d'une unite de 1."
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
          "text": "Apres le deploiement de ce modele, il peut etre place n'importe ou entierement dans un rayon de 9\" de sa position."
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
          "text": "Ce modele et son unite gagnent Grounded Reinforcement."
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
          "text": "Si une unite dont tous les modeles ont cette regle a la majorite de ses modeles a 1\" ou moins d'un terrain lors de son activation, elle se deplace de +2\" en Advance et de +4\" en Rush/Charge pendant cette activation."
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
          "text": "Les unites dont tous les modeles ont cette regle gagnent +1 aux jets de defense contre les touches qui ne proviennent pas de sorts."
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
          "text": "Ce modele et son unite gagnent Quick Shot."
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
          "text": "Ce modele et son unite gagnent Swift."
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
          "text": "Ce modele et son unite gagnent Strider."
        }
      ]
    },
    "Unstoppable in Melee Aura": {
      "title": "Aura d'Inarretable en melee",
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
          "text": "Ce modele et son unite gagnent Unstoppable en melee."
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
          "text": "Ignore le couvert, et sur des resultats non modifies de 6 pour toucher, ces touches gagnent AP(+4)."
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
          "text": "Une fois par activation, avant d'attaquer, choisissez une unite ennemie a 18\" ; les unites amies gagnent Piercing Assault contre elle une fois (la prochaine fois que l'effet s'applique)."
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
          "text": "Lorsqu'une unite dont tous les modeles ont cette regle est Secouee ou entierement detruite, vous pouvez la retirer de la table comme detruite et placer une nouvelle copie entierement a 12\" de n'importe quel bord de table au debut du round suivant, apres le deploiement des Ambushers. Les unites deployees via Reinforcement ne peuvent pas saisir ou contester des objectifs le round de leur deploiement, et cette regle ne s'applique pas a la nouvelle copie de l'unite."
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
          "text": "Une fois par round, les unites dont tous les modeles ont cette regle peuvent se deplacer jusqu'a 3\" apres avoir ete en melee."
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
          "text": "Ce modele et son unite se deplacent de +2\" en action Advance et de +4\" en action Rush/Charge."
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
          "text": "Quand ce modele est active, s'il peut tirer/charger une unite ennemie, il doit immediatement attaquer la cible valide la plus proche et gagne +1 pour toucher pour cette attaque."
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
          "text": "Ce modele et son unite gagnent No Retreat."
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
          "text": "Compte comme ayant Ambush, mais peut etre deployee jusqu'a 1\" des unites ennemies."
        }
      ]
    },
    "Shred": {
      "title": "Laceration",
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
          "text": "Sur des resultats non modifies de 1 pour bloquer des touches, cette arme inflige 1 blessure supplementaire."
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
          "text": "Ce modele et son unite gagnent Piercing Hunter."
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
          "text": "Ce modele et son unite gagnent Reanimation."
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
          "text": "Lorsqu'une unite dont tous les modeles ont cette regle subit des blessures, lancez un de pour chacune. Sur 6+, elle est ignoree."
        }
      ]
    },
    "Scout Aura": {
      "title": "Aura d'Eclaireur",
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
          "text": "Ce modele et son unite gagnent Scout."
        }
      ]
    },
    "Surge": {
      "title": "Deferlante",
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
          "text": "Sur des resultats non modifies de 6 pour toucher, cette arme inflige 1 touche supplementaire (seule la touche d'origine compte comme un 6 pour les regles speciales)."
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
          "text": "Une fois par activation, avant d'attaquer, choisissez une unite ennemie a 18\" ; elle doit faire un test de moral. En cas d'echec, vous pouvez la deplacer jusqu'a 6\" en ligne droite dans n'importe quelle direction."
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
          "text": "Une fois par activation, avant d'attaquer, choisissez une unite ennemie a 18\" ; elle subit -1 a son prochain test de moral (la prochaine fois que l'effet s'applique)."
        }
      ]
    },
    "Shred in Melee Aura": {
      "title": "Aura de Laceration en melee",
      "specialRule": [
        "f78kQxkgtIs1",
        "Q7nWXE-8DEHN",
        "SY80P2vKJGrY"
      ],
      "description": [
        {
          "system": "all",
          "text": "Ce modele et son unite gagnent Shred en melee."
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
          "text": "Contre les unites dont la majorite des modeles ont une Defense de 2+ a 4+, cette arme gagne AP(+1)."
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
          "text": "Une fois par activation, avant d'attaquer, choisissez un modele allie a 12\" avec Caster ; il gagne +1 a son prochain jet d'incantation (la prochaine fois que l'effet s'applique)."
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
          "text": "Une fois par activation, avant d'attaquer, choisissez une unite alliee a 12\" ; elle gagne Cursed Undead Boost une fois (la prochaine fois que l'effet s'applique)."
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
          "text": "Lorsqu'une unite dont la majorite des modeles a cette regle echoue a un test de moral qui la rendrait Secouee ou Deroutee, le test est considere comme reussi a la place. Puis lancez autant de des que le nombre de blessures necessaires pour la detruire completement ; pour chaque resultat de 1-3, l'unite subit une blessure qui ne peut pas etre ignoree."
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
          "text": "Quand ce modele tire sur des ennemis a plus de 9\", ses armes gagnent AP(+1)."
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
          "text": "Lorsqu'une unite dont tous les modeles ont cette regle est activee, lancez autant de des que le nombre max de modeles/blessures qu'elle pourrait restaurer. Pour chaque 5+, vous pouvez restaurer un modele/une blessure. Note : de nouveaux modeles ne peuvent etre restaures que s'ils peuvent etre places en coherente avec des modeles non restaures."
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
          "text": "Si tous les modeles de cette unite ont Cursed Undead, ils ignorent les blessures sur des jets de 5-6 via Cursed Undead (au lieu de seulement sur 6+)."
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
      "title": "Barrage de traversee",
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
          "text": "Une fois par activation, quand ce modele traverse des unites ennemies en mouvement, choisissez-en une et lancez X des. Pour chaque 4+, elle subit 3 touches avec AP(1)."
        }
      ]
    },
    "Mend": {
      "title": "Reparation",
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
          "text": "Une fois par activation, avant d'attaquer, choisissez un modele allie a 3\" avec Tough et retirez-lui D3 blessures."
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
          "text": "Ce modele et son unite gagnent Rending en tir."
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
          "text": "Ce modele et son unite gagnent Resistance."
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
          "text": "Contre les unites dont la majorite des modeles ont Tough(3) a Tough(9), cette arme gagne AP(+2)."
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
          "text": "Quand cette unite est activee, choisissez un effet : jusqu'a la fin de l'activation, tous les modeles avec cette regle gagnent soit +4\" de portee en tir, soit +2\" de mouvement en charge."
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
          "text": "Ce modele et son unite gagnent Buccaneer Boost."
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
          "text": "Une fois par activation, avant d'attaquer, choisissez une unite ennemie a 18\" avec Caster ; elle subit -1 a son prochain jet d'incantation (la prochaine fois que l'effet s'applique)."
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
          "text": "Si ce modele a Buccaneer, il gagne toujours +1 pour toucher grace a Buccaneer (au lieu de seulement en tirant a plus de 9\")."
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
          "text": "Pour chaque jet non modifie de 6 pour toucher lors d'une attaque, ce modele peut effectuer +1 attaque avec cette arme. Cette regle ne s'applique pas aux attaques nouvellement generees."
        }
      ]
    },
    "Crossing Strike": {
      "title": "Frappe de traversee",
      "specialRule": [
        "iv1Jm6zZiZPJ",
        "aHBBAhsdAqyz"
      ],
      "description": [
        {
          "system": "all",
          "text": "Une fois par partie, une fois durant son activation lorsque ce modele traverse des unites ennemies, choisissez-en une et lancez X des. Pour chaque 4+, elle subit 3 touches avec AP(1)."
        }
      ]
    },
    "Protection Feat": {
      "title": "Exploit de protection",
      "specialRule": [
        "iv1Jm6zZiZPJ"
      ],
      "description": [
        {
          "system": "all",
          "text": "Une fois par partie, quand cette unite subit des blessures et que tous ses modeles ont cette regle, vous pouvez utiliser cette regle et lancer un de par blessure ; sur 4+, elle est ignoree."
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
          "text": "Compte comme ayant Impact(X) avec des touches ayant AP(1)."
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
          "text": "Ce modele gagne +1 aux jets pour toucher en tir."
        }
      ]
    },
    "Rapid Charge Aura": {
      "title": "Aura de Charge rapide",
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
          "text": "Ce modele et son unite se deplacent de +4\" lors des actions Charge."
        }
      ]
    },
    "Rending in Melee Aura": {
      "title": "Aura de Perforant en melee",
      "specialRule": [
        "iv1Jm6zZiZPJ",
        "tKa31SeqrzS1",
        "_k9nd29ZX-FQ",
        "SshMejY9Kz7s"
      ],
      "description": [
        {
          "system": "all",
          "text": "Ce modele et son unite gagnent Rending en melee."
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
          "text": "Quand cette unite est activee, vous pouvez placer tous les modeles avec cette regle qu'elle contient n'importe ou entierement dans un rayon de D3+1\" de leur position."
        }
      ]
    },
    "Disintegrate": {
      "title": "Desintegration",
      "specialRule": [
        "iv1Jm6zZiZPJ"
      ],
      "description": [
        {
          "system": "all",
          "text": "Ignore Regeneration, et contre les unites dont la majorite des modeles ont une Defense de 2+ a 3+, cette arme gagne AP(+2)."
        }
      ]
    },
    "Shred Mark": {
      "title": "Marquage Laceration",
      "specialRule": [
        "iv1Jm6zZiZPJ"
      ],
      "description": [
        {
          "system": "all",
          "text": "Une fois par activation, avant d'attaquer, choisissez une unite ennemie a 18\" ; les unites amies gagnent Shred contre elle pour une attaque (la prochaine fois que l'effet s'applique)."
        }
      ]
    },
    "Primal Boost Buff": {
      "title": "Amelioration Primal Boost",
      "specialRule": [
        "iv1Jm6zZiZPJ"
      ],
      "description": [
        {
          "system": "all",
          "text": "Une fois par activation, avant d'attaquer, choisissez une unite alliee a 12\" ; elle gagne Primal Boost une fois (la prochaine fois que l'effet s'applique)."
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
          "text": "Cette arme ignore Regeneration."
        }
      ]
    },
    "Primal Boost": {
      "title": "Amplification Primal",
      "specialRule": [
        "iv1Jm6zZiZPJ"
      ],
      "description": [
        {
          "system": "all",
          "text": "Si ce modele a Primal, il gagne des attaques supplementaires sur des jets pour toucher non modifies reussis de 5-6 via Primal (au lieu de seulement sur 6)."
        }
      ]
    },
    "Steadfast": {
      "title": "Inebranlable",
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
          "text": "Si une unite dont tous les modeles ont cette regle est Secouee au debut du round, lancez un de. Sur 4+, elle cesse d'etre Secouee."
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
          "text": "Une fois par partie, lorsque ce modele est active, avant d'attaquer, lancez 3 des. Pour chaque 2+, une unite ennemie a 12\" subit 3 touches avec AP(1)."
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
          "text": "Quand c'est au tour de ce modele d'attaquer en melee, lancez X des. Pour chaque 6+, la cible subit une touche avec AP(2)."
        }
      ]
    },
    "Warbound Boost Aura": {
      "title": "Aura d'Amplification Lie a la guerre",
      "specialRule": [
        "vhKZ0CIT6dBt",
        "RMi35vAtYNb-"
      ],
      "description": [
        {
          "system": "all",
          "text": "Ce modele et son unite gagnent Warbound Boost."
        }
      ]
    },
    "Warbound Boost": {
      "title": "Amplification Lie a la guerre",
      "specialRule": [
        "vhKZ0CIT6dBt",
        "RMi35vAtYNb-"
      ],
      "description": [
        {
          "system": "all",
          "text": "Si ce modele a Warbound, les ennemis qui subissent des blessures de sa part subissent des blessures supplementaires sur des jets de defense echoues de 1-2 via Warbound (au lieu de seulement 1)."
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
          "text": "Ce modele et son unite gagnent Ambush."
        }
      ]
    },
    "Warbound": {
      "title": "Lie a la guerre",
      "specialRule": [
        "vhKZ0CIT6dBt",
        "RMi35vAtYNb-",
        "p9iL_bzUnY7A"
      ],
      "description": [
        {
          "system": "all",
          "text": "Les ennemis qui font des jets pour bloquer des touches des armes de ce modele subissent 1 blessure supplementaire pour chaque resultat non modifie de 1."
        }
      ]
    },
    "Destructive Frenzy": {
      "title": "Fr?n?sie destructrice",
      "specialRule": [
        "vhKZ0CIT6dBt",
        "RMi35vAtYNb-"
      ],
      "description": [
        {
          "system": "all",
          "text": "Placez un marqueur sur cette unite lorsqu'elle detruit completement une unite ennemie. Pour chaque marqueur, tous les modeles avec cette regle dans cette unite gagnent +1 pour toucher et AP(+1) jusqu'a la fin de la partie (max +2)."
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
          "text": "Ce modele et son unite gagnent AP(+1) en tir."
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
          "text": "Ce modele et son unite gagnent Furious."
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
          "text": "Ce modele et son unite gagnent Shielded."
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
          "text": "Ce modele et son unite gagnent AP(+1) en melee."
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
          "text": "Une fois par activation, avant d'attaquer, choisissez une unite ennemie a 18\" ; elle doit effectuer un test de moral. En cas d'echec, elle devient fatiguee."
        }
      ]
    },
    "Break": {
      "title": "Brisure",
      "specialRule": [
        "vhKZ0CIT6dBt",
        "RMi35vAtYNb-"
      ],
      "description": [
        {
          "system": "all",
          "text": "Ignore Regeneration, et sur des resultats non modifies de 6 pour toucher, ces touches gagnent AP(+2)."
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
          "text": "Ce modele et son unite gagnent Reckless Piercing."
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
          "text": "Quand une unite dont tous les modeles ont cette regle est activee, vous pouvez lancer un de. Sur 2+, elle gagne AP(+1) lorsqu'elle attaque jusqu'a la fin du round ; sur 1, les unites ennemies gagnent AP(+1) lorsqu'elles l'attaquent a la place."
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
          "text": "Une fois par partie, lorsque ce modele est active, avant d'attaquer, lancez 3 des. Pour chaque 2+, une unite ennemie a 12\" subit 3 touches avec Bane."
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
          "text": "Lorsqu'une unite dont tous les modeles ont cette regle subit des blessures, lancez un de pour chacune. Sur 6+, elle est ignoree."
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
          "text": "Si tous les modeles de cette unite ont Plaguebound, ils ignorent les blessures sur des jets de 5-6 via Plaguebound (au lieu de seulement sur 6+)."
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
          "text": "Ce modele et son unite gagnent Relentless."
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
          "text": "Ce modele et son unite gagnent Regeneration."
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
          "text": "Une fois par activation, avant d'attaquer, choisissez une unite alliee a 12\" ; elle gagne +1 pour toucher lorsqu'elle attaque une fois (la prochaine fois que l'effet s'applique)."
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
          "text": "Placez un marqueur sur cette unite a la fin de chaque round si elle est sur la table. Si tous ses modeles ont cette regle, pour chaque marqueur les ennemis qui les attaquent gagnent AP(-1), jusqu'a un minimum de AP(0) (max -2). Si cette unite est Secouee, elle perd tous ses marqueurs."
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
          "text": "Ce modele et son unite gagnent Steadfast."
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
          "text": "Ignore Regeneration, et sur des resultats non modifies de 6 pour toucher, cette arme inflige 1 touche supplementaire (seule la touche d'origine compte comme un 6 pour les regles speciales)."
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
          "text": "Ce modele et son unite gagnent Plaguebound Boost."
        }
      ]
    },
    "Rending in Melee": {
      "title": "Perforant en melee",
      "specialRule": [
        "tKa31SeqrzS1",
        "_k9nd29ZX-FQ",
        "fLQMyzi3zbFI"
      ],
      "description": [
        {
          "system": "all",
          "text": "Ce modele gagne Rending en melee."
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
          "text": "Une fois par activation, avant d'attaquer, choisissez une unite ennemie a 18\" ; elle compte comme etant en terrain difficile une fois (la prochaine fois que l'effet s'applique)."
        }
      ]
    },
    "Retaliate": {
      "title": "Riposte",
      "description": [
        {
          "system": "all",
          "text": "Quand ce modele subit une blessure en melee, l'attaquant subit X touches."
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
          "text": "Ce modele et son unite gagnent Combattant Eclair."
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
          "text": "Une fois par partie, quand ce modele est active, avant d'attaquer, lancez 3 des. Pour chaque 2+, une unite ennemie a 12\" subit 3 touches avec Surge (lancez un de par touche pour voir si l'effet se declenche)."
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
          "text": "Si ce modele a Lie a la Luxure, il se deplace de +2\" en Avance et +6\" en Rush/Charge grace a cette regle (au lieu de seulement +1\" et +3\")."
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
          "text": "Ignore Regeneration et, contre les unites dont la majorite des modeles ont Tough(3) a Tough(9), cette arme gagne AP(+2)."
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
          "text": "Ce modele et son unite gagnent Inarretable au tir."
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
          "text": "Ce modele et son unite gagnent Renforcement Lie a la Luxure."
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
          "text": "Obtient AP(4), mais l'unite de ce modele subit une blessure sur un resultat non modifie de 1 pour toucher."
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
          "text": "Les Lanceurs de sorts d'autres unites amies a 12\" peuvent lancer des sorts comme s'ils etaient a la position de ce modele, et gagnent +1 aux jets de lancement en le faisant."
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
          "text": "Ce modele et son unite gagnent +1 aux jets pour toucher en melee."
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
          "text": "Ce modele et son unite gagnent Evasive."
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
          "text": "Une fois par activation, avant d'attaquer, choisissez une unite ennemie a 18\"; elle subit -1 aux jets de defense une fois (la prochaine fois que l'effet s'applique)."
        }
      ],
      "specialRule": [
        "ylxJ4fFb6cZf"
      ]
    },
    "Bane when Shooting Aura": {
      "title": "Aura de Fleau au Tir",
      "description": [
        {
          "system": "all",
          "text": "Ce modele et son unite gagnent Fleau au tir."
        }
      ],
      "specialRule": [
        "ylxJ4fFb6cZf",
        "AxiZW7zj2hUK"
      ]
    },
    "Bane in Melee Aura": {
      "title": "Aura de Fleau en Melee",
      "description": [
        {
          "system": "all",
          "text": "Ce modele et son unite gagnent Fleau en melee."
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
          "text": "Ce modele et son unite gagnent Renforcement de Detale."
        }
      ],
      "specialRule": [
        "ylxJ4fFb6cZf"
      ]
    },
    "Precision Fighter Buff": {
      "title": "Bonus de Combattant de Precision",
      "description": [
        {
          "system": "all",
          "text": "Une fois par activation, avant d'attaquer, choisissez une unite amie a 12\"; elle gagne +1 aux jets pour toucher en melee une fois (la prochaine fois que l'effet s'applique)."
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
          "text": "Si ce modele a Detale, il se deplace de +4\" en Avance et +4\" en Rush/Charge grace a Detale (au lieu de seulement +2\" et +2\")."
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
          "text": "Quand des unites dont tous les modeles ont cette regle sont prises pour cible par des tirs ou des charges a plus de 9\" et subissent des touches, ces touches comptent comme ayant AP(-1), jusqu'a un minimum de AP(0)."
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
          "text": "Sur des resultats non modifies de 6 pour toucher, ces touches gagnent AP(+4)."
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
          "text": "Recoit X jetons d'accumulation au debut de chaque round, sans pouvoir en conserver plus de 6 a la fois. Les Lanceurs d'autres unites amies a 12\" peuvent depenser les jetons d'accumulation de ce modele comme s'ils etaient leurs propres jetons de sort."
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
          "text": "Une fois par partie, quand cette unite attaque et que tous ses modeles ont cette regle, vous pouvez utiliser cette regle pour obtenir +2 aux jets pour toucher."
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
          "text": "Quand ce modele utilise une action Hold et tire sur des ennemis a plus de 9\", il gagne +1 aux jets pour toucher. Tant que ce modele n'a pas bouge pendant le round, quand des unites ennemies lui tirent dessus a plus de 9\", elles subissent -2 aux jets pour toucher."
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
          "text": "Ce modele gagne AP(+1) au tir."
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
          "text": "Ce modele et son unite gagnent Exploit de Precision."
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
          "text": "Une fois par activation, avant d'attaquer, choisissez une unite ennemie a 18\" ; les unites amies gagnent Furieux contre elle une fois (la prochaine fois que l'effet s'applique)."
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
          "text": "Ce modele et son unite gagnent Renforcement Ossifie."
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
          "text": "Une fois par activation, avant d'attaquer, choisissez une unite amie a 12\" ; elle gagne Regeneration une fois (la prochaine fois que l'effet s'applique)."
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
          "text": "Si tous les modeles de cette unite ont Ossifie, les touches ennemies comptent toujours comme ayant AP(-1) grace a Ossifie (au lieu de s'appliquer seulement contre les tirs/charges a plus de 9\")."
        }
      ],
      "specialRule": [
        "0zpUZx5GkSHb"
      ]
    },
    "Melee Shrouding Aura": {
      "title": "Aura de Voile de Melee",
      "description": [
        {
          "system": "all",
          "text": "Ce modele et son unite gagnent Voile de Melee."
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
          "text": "Lorsqu'il attaque, un resultat non modifie de 6 pour toucher inflige 1 touche supplementaire (seule la touche d'origine compte comme un 6 pour les regles speciales)."
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
          "text": "Ce modele et son unite gagnent Renforcement Ferocite."
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
          "text": "Ce modele et son unite gagnent Saccage(+1)."
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
          "text": "Ce modele et son unite gagnent Exploit de Vitesse."
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
          "text": "Contre les unites dont la majorite des modeles ont Tough(3) a Tough(9), cette arme gagne Deadly(+3)."
        }
      ],
      "specialRule": [
        "wLKHbRBBr4NI"
      ]
    },
    "Rending in Melee Mark": {
      "title": "Marque de Dechiquetage en Melee",
      "description": [
        {
          "system": "all",
          "text": "Une fois par activation, avant d'attaquer, choisissez une unite ennemie a 18\" ; les unites amies gagnent Dechiquetage en melee contre elle une fois (la prochaine fois que l'effet s'applique)."
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
          "text": "Une fois par activation, avant d'attaquer, choisissez une unite amie a 12\" ; elle gagne Assaut Perforant."
        }
      ],
      "specialRule": [
        "wLKHbRBBr4NI",
        "AiReKTM86F3e"
      ]
    },
    "Melee Shrouding": {
      "title": "Voile de Melee",
      "description": [
        {
          "system": "all",
          "text": "Les ennemis subissent -3\" de mouvement lorsqu'ils tentent de charger des unites dont tous les modeles ont cette regle."
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
          "text": "Si ce modele a Ferocite, il inflige des touches supplementaires sur des resultats non modifies reussis de 5-6 pour toucher grace a Ferocite (au lieu de seulement 6)."
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
          "text": "Une fois par partie, quand cette unite se deplace et que tous ses modeles ont cette regle, vous pouvez utiliser cette regle pour qu'ils gagnent +3\" avec Avance et +6\" avec Rush/Charge."
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
          "text": "Une fois par activation, choisissez une unite ennemie a 36\" et en ligne de vue de ce modele, puis lancez un de ; sur 4+, placez-y un marqueur. Lors d'une attaque, les unites amies peuvent retirer des marqueurs de leur cible avant les jets de blocage pour obtenir +AP(X), ou X est le nombre de marqueurs retires."
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
          "text": "Ignore Couvert et, sur des resultats non modifies de 6 pour toucher qui ne sont pas bloques, cette arme inflige 1 blessure supplementaire."
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
          "text": "Ce modele et son unite gagnent Renforcement de Legion Royale."
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
          "text": "Ce modele et son unite gagnent Fortifie."
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
          "text": "Ce modele et son unite gagnent Indirect au tir."
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
          "text": "Compte comme ayant Infiltrate. Une fois deployee via cette regle, lancez X des ; pour chaque 4+, une unite ennemie a 3\" subit 2 touches avec AP(1)."
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
          "text": "Si ce modele a Legion Royale, il gagne +6\" de portee au tir et se deplace de +6\" lorsqu'il utilise des actions de Charge grace a Legion Royale (au lieu de seulement +3\" et +3\")."
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
          "text": "Si ce modele est tue en melee, l'unite attaquante subit X touches."
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
          "text": "Quand une unite dont tous les modeles ont cette regle subit des blessures, lancez un de par blessure. Sur 6+, elle est ignoree. Si les blessures proviennent d'un sort, elles sont ignorees sur 4+ a la place."
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
          "text": "Une fois par activation, avant d'attaquer, choisissez une unite ennemie a 18\" ; elle subit -1 aux jets pour toucher lors d'une attaque une fois (la prochaine fois que l'effet s'applique)."
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
          "text": "Ignore Regeneration et, contre les unites dont la majorite des modeles ont Tough(3) a Tough(9), cette arme gagne Deadly(+3)."
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
          "text": "Une fois par activation, avant d'attaquer, choisissez une unite ennemie a 18\" ; les unites amies gagnent Tueur contre elle une fois (la prochaine fois que l'effet s'applique)."
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
          "text": "Une fois par activation, avant d'attaquer, choisissez une unite amie a 12\" ; elle gagne Renforcement de Benediction Angelique une fois (la prochaine fois que l'effet s'applique)."
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
          "text": "Une fois par activation, avant d'attaquer, choisissez une unite amie a 12\" ; elle gagne Attaque Polyvalente une fois (la prochaine fois que l'effet s'applique)."
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
          "text": "Les armes de ce modele gagnent AP(+2) contre les unites dont la majorite des modeles ont Tough(3) ou plus."
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
          "text": "Si tous les modeles de cette unite ont Benediction Angelique, ils ignorent les blessures non magiques sur 5-6 grace a Benediction Angelique (au lieu de seulement 6+)."
        }
      ],
      "specialRule": [
        "aHBBAhsdAqyz"
      ]
    },
    "Versatile Attack": {
      "title": "Attaque Polyvalente",
      "description": [
        {
          "system": "all",
          "text": "Quand cette unite est activee, choisissez un effet : jusqu'a la fin de l'activation, tous les modeles avec cette regle gagnent soit AP(+1) en attaque, soit +1 aux jets pour toucher en attaque."
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
          "text": "Une fois par activation, avant d'attaquer, choisissez une unite amie a 12\" ; elle gagne +1 aux jets de defense une fois (la prochaine fois que l'effet s'applique)."
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
          "text": "A la fin de l'activation de cette unite, une autre unite amie a 12\" qui n'a pas encore ete activee peut etre activee immediatement. Ne peut pas etre utilise si cette unite a ete activee via Coordination."
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
          "text": "Si cette unite est a 24\" d'une autre unite amie avec cette regle contenant un Hero, alors ce Hero peut utiliser ses regles speciales qui ciblent des unites amies a 12\" (sauf les sorts) sur cette unite comme si elle etait a portee."
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
          "text": "Les unites dont tous les modeles ont cette regle gagnent +1 aux tests de moral."
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
          "text": "Une fois par activation, avant d'attaquer, choisissez une unite amie a 12\" ; elle gagne Rush Rapide une fois (la prochaine fois que l'effet s'applique)."
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
          "text": "Ignore Couvert et, sur des resultats non modifies de 6 pour toucher, ces touches gagnent AP(+2)."
        }
      ],
      "specialRule": [
        "voFsQwaDph1Y"
      ]
    },
    "Precision Fighting Mark": {
      "title": "Marque de Precision en Melee",
      "description": [
        {
          "system": "all",
          "text": "Une fois par activation, avant d'attaquer, choisissez une unite ennemie a 18\" ; les unites amies gagnent +1 aux jets pour toucher en melee contre elle une fois (la prochaine fois que l'effet s'applique)."
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
          "text": "Une fois par activation, avant d'attaquer, choisissez une unite amie a 12\" ; elle gagne +1 aux jets pour toucher au tir une fois (la prochaine fois que l'effet s'applique)."
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
          "text": "Une fois par activation, avant d'attaquer, choisissez une unite amie a 12\" ; elle gagne Renforcement Tenir la Ligne une fois (la prochaine fois que l'effet s'applique)."
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
          "text": "Une fois par activation, avant d'attaquer, choisissez une unite amie a 12\" ; elle gagne Furieux une fois (la prochaine fois que l'effet s'applique)."
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
          "text": "Une fois par activation, choisissez un modele ami a 6\" avec Artillery ; il peut immediatement se deplacer de jusqu'a 9\"."
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
          "text": "Choisissez un modele avec cette regle dans cette unite pour avoir Caster(X), ou X est le nombre total de modeles avec cette regle dans cette unite. Si ce modele est tue, choisissez-en un autre comme nouveau lanceur et transferez-lui tous les jetons de sort. Le lanceur perd tous ses jetons de sort non depenses a la fin du round."
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
          "text": "Si tous les modeles de cette unite ont Tenir la Ligne, ils gagnent +2 aux tests de moral grace a Tenir la Ligne (au lieu de seulement +1)."
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
          "text": "Une fois par partie, pendant l'activation de ce modele, choisissez une unite ennemie a 36\" et en ligne de vue, puis placez X marqueurs sur elle. Lors d'une attaque, les unites amies peuvent retirer des marqueurs de leur cible avant les jets de blocage pour obtenir +AP(Y), ou Y est le nombre de marqueurs retires."
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
          "text": "Ce modele et son unite gagnent Fearless."
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
          "text": "Ce modele gagne Indirect au tir."
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
          "text": "Une fois par activation, avant d'attaquer, choisissez une unite ennemie a 18\" ; les unites amies gagnent +1 aux jets pour toucher au tir contre elle une fois (la prochaine fois que l'effet s'applique)."
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
          "text": "Sur des resultats non modifies de 6 pour toucher, ces touches gagnent AP(+2)."
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
          "text": "Ce modele et son unite gagnent Renforcement Noble."
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
          "text": "Si ce modele a Noble, il se deplace de +4\" en Avance et +4\" en Rush/Charge grace a Noble (au lieu de seulement +2\" et +2\")."
        }
      ],
      "specialRule": [
        "SY80P2vKJGrY"
      ]
    },
    "Bloodthirsty Fighter": {
      "title": "Combattant Assoiffe de Sang",
      "description": [
        {
          "system": "all",
          "text": "Pour chaque resultat non modifie de 1 obtenu par l'ennemi lorsqu'il bloque des touches d'armes de melee de ce modele, ce modele peut effectuer +1 attaque avec cette arme. Cette regle ne s'applique pas aux attaques generees."
        }
      ],
      "specialRule": [
        "RMi35vAtYNb-"
      ]
    },
    "Slam": {
      "title": "Percussion",
      "description": [
        {
          "system": "all",
          "text": "Ignore Couvert et, sur des resultats non modifies de 1 pour bloquer des touches, cette arme inflige 1 blessure supplementaire."
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
      "title": "Aura de Defense Polyvalente",
      "description": [
        {
          "system": "all",
          "text": "Ce modele et son unite gagnent Defense Polyvalente."
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
          "text": "Ce modele et son unite gagnent Dechiquetage au tir."
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
      "title": "Aura de Combattant Imprevisible",
      "description": [
        {
          "system": "all",
          "text": "Ce modele et son unite gagnent Combattant Imprevisible."
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
      "title": "Aura de Voile a Distance",
      "description": [
        {
          "system": "all",
          "text": "Ce modele et son unite gagnent Voile a Distance."
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
      "title": "Dechiquetage en Melee",
      "description": [
        {
          "system": "all",
          "text": "Ce modele gagne Dechiquetage en melee."
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
      "title": "Bonus de Tenacite",
      "description": [
        {
          "system": "all",
          "text": "Une fois par activation, avant d'attaquer, choisissez une unite amie a 12\" ; elle gagne Tenace une fois (la prochaine fois que l'effet s'applique)."
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
      "title": "Defense Polyvalente",
      "description": [
        {
          "system": "all",
          "text": "Quand une unite dont tous les modeles ont cette regle est deployee ou activee, choisissez un effet : lorsqu'elle est prise pour cible par un tir ou une charge a plus de 9\", l'unite gagne soit +1 aux jets de defense, soit les unites ennemies subissent -1 aux jets pour toucher contre elle. Cet effet dure jusqu'a la prochaine activation de l'unite."
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
      "title": "Voile a Distance",
      "description": [
        {
          "system": "all",
          "text": "Les ennemis ont -6\" de portee lorsqu'ils tentent de tirer sur des unites dont tous les modeles ont cette regle."
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
          "text": "Quand ce modele attaque, les resultats non modifies de 5-6 pour toucher infligent 1 touche supplementaire (seule la touche d'origine compte comme un 6 pour les regles speciales)."
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
          "text": "Une fois par activation, avant d'attaquer, choisissez une unite amie a 12\" ; elle se deplace de +1\" lors d'une action de mouvement une fois (la prochaine fois que l'effet s'applique)."
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
          "text": "Une fois par activation, avant d'attaquer, choisissez une unite amie a 12\" ; elle gagne +1 aux tests de moral une fois (la prochaine fois que l'effet s'applique)."
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
          "text": "Quand des unites dont tous les modeles ont cette regle sont prises pour cible par des tirs ou des charges a plus de 9\", les unites ennemies subissent -1 aux jets pour toucher."
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
          "text": "Ce modele et son unite gagnent Renforcement Lie au Changement."
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
          "text": "Si tous les modeles de cette unite ont Lie au Changement, les ennemis qui les attaquent subissent toujours -1 aux jets pour toucher grace a Lie au Changement (au lieu de s'appliquer seulement contre les tirs/charges a plus de 9\")."
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
          "text": "Ignore Couvert et, sur des resultats non modifies de 6 pour toucher, cette arme inflige 1 touche supplementaire (seule la touche d'origine compte comme un 6 pour les regles speciales)."
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
          "text": "Une fois par partie, quand ce modele est active, avant d'attaquer, lancez 3 des. Pour chaque 2+, une unite ennemie a 12\" subit 3 touches avec Dechiquetage."
        }
      ],
      "specialRule": [
        "xw2YHtZNkhIV",
        "56Tb7FFgHuyX"
      ]
    },
    "Unstoppable in Melee": {
      "title": "Inarretable en Melee",
      "description": [
        {
          "system": "all",
          "text": "Ce modele gagne Inarretable en melee."
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
          "text": "Quand cette unite est entierement detruite, vous pouvez placer une nouvelle unite de X entierement a 6\" avant de retirer le dernier modele."
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
          "text": "Ce modele et son unite gagnent Bond."
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
          "text": "Ce modele et son unite gagnent Renforcement Lie au Chaos."
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
          "text": "Quand ce modele tire sur des ennemis a plus de 9\" ou lorsqu'il charge, ses armes gagnent AP(+1)."
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
          "text": "Une fois par activation, avant d'attaquer, choisissez une unite ennemie a 18\" ; elle doit immediatement effectuer un test de Terrain Dangereux."
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
          "text": "Si ce modele a Lie au Chaos, il gagne toujours AP(+1) grace a Lie au Chaos (au lieu de s'appliquer seulement au tir a plus de 9\" ou en charge)."
        }
      ],
      "specialRule": [
        "ndODzgAqJGDz",
        "H18g-ND_uWiZ"
      ]
    },
    "Melee Slayer Aura": {
      "title": "Aura de Tueur en Melee",
      "description": [
        {
          "system": "all",
          "text": "Ce modele et son unite gagnent Tueur en melee."
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
          "text": "Une fois par activation, avant d'attaquer, choisissez une unite ennemie a 18\" ; les unites amies gagnent Implacable contre elle une fois (la prochaine fois que l'effet s'applique)."
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
          "text": "Ignore Regeneration et, contre les unites dont la majorite des modeles ont Defense 2+ a Defense 4+, cette arme gagne AP(+1)."
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
          "text": "Quand ce modele attaque, les resultats non modifies de 6 pour toucher infligent 1 touche supplementaire (seule la touche d'origine compte comme un 6 pour les regles speciales)."
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
          "text": "Ce modele et son unite gagnent Teleport."
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
          "text": "Ce modele et son unite gagnent Renforcement Chanceux."
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
          "text": "Quand cette unite est entierement detruite, placez autant de marqueurs Vengeance sur l'unite qui l'a detruite qu'il y avait de modeles avec cette regle dans cette unite au debut de la partie. Les unites amies gagnent +X aux jets pour toucher avec leurs armes contre cette unite, ou X est le nombre de marqueurs sur elle."
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
          "text": "Ignore Couvert et, contre les unites dont la majorite des modeles ont Defense 5+ a Defense 6+, cette arme gagne Blast(+3)."
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
          "text": "Si ce modele a Chanceux, il inflige des touches supplementaires sur des resultats non modifies reussis de 5-6 pour toucher grace a Chanceux (au lieu de seulement 6)."
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
          "text": "Lors d'une attaque, les cibles doivent relancer les resultats de Defense non modifies de 6 lorsqu'elles bloquent des touches d'armes de ce modele."
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
          "text": "Peut se deplacer a travers les unites amies et ennemies."
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
          "text": "Ce modele et son unite gagnent Renforcement Malicieux."
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
          "text": "Ignore Couvert et, contre les unites dont la majorite des modeles ont Tough(3) a Tough(9), cette arme gagne Deadly(+3)."
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
          "text": "Si ce modele a Malicieux, les ennemis qui subissent des touches de sa part doivent relancer les resultats de defense non modifies reussis de 5-6 grace a Malicieux (au lieu de seulement 6)."
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
          "text": "Si une unite dont tous les modeles ont cette regle est Secouee au debut du round, lancez un de. Sur 4+, elle cesse d'etre Secouee."
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
          "text": "Une fois par round, si votre adversaire a plus d'unites restant a activer que vous, l'unite de ce modele peut passer son tour au lieu de s'activer (elle pourra toujours etre activee plus tard)."
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
          "text": "Une fois par activation, quand ce modele traverse des unites ennemies, choisissez-en une et lancez X des. Pour chaque 6+, elle subit 1 touche."
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
          "text": "Quand des unites dont tous les modeles ont cette regle sont prises pour cible par des tirs ou des charges a plus de 9\", les unites ennemies subissent -1 aux jets pour toucher."
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
          "text": "Ce modele et son unite gagnent Renforcement d'Esprit Empyreen."
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
          "text": "Contre les unites dont la majorite des modeles ont Defense 2+ a Defense 3+, cette arme gagne AP(+2)."
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
          "text": "Une fois par activation, avant d'attaquer, choisissez une unite ennemie a 18\" ; les unites amies gagnent Fleau lorsqu'elles l'attaquent une fois (la prochaine fois que l'effet s'applique)."
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
          "text": "Si tous les modeles de cette unite ont Esprit Empyreen, les ennemis qui les attaquent subissent toujours -1 aux jets pour toucher grace a Esprit Empyreen (au lieu de s'appliquer seulement contre les tirs/charges a plus de 9\")."
        }
      ],
      "specialRule": [
        "x2_Lkyj0JPk2"
      ]
    },
    "Piercing Target": {
      "title": "Cible Perforante",
      "description": [
        {
          "system": "all",
          "text": "Une fois par partie, pendant l'activation de ce modele, choisissez une unite ennemie a 36\" et en ligne de vue, puis placez X marqueurs sur elle. Les unites amies gagnent +AP(X) lorsqu'elles l'attaquent."
        }
      ],
      "specialRule": [
        "AxiZW7zj2hUK"
      ]
    },
    "Re-Deployment": {
      "title": "Redeploiement",
      "description": [
        {
          "system": "all",
          "text": "Une fois toutes les autres unites deployees (hors unites mises de cote), vous pouvez retirer jusqu'a deux unites amies de la table et les deployer a nouveau. Les joueurs alternent pour placer les unites avec Redeploiement, en commencant par le joueur qui active ensuite."
        }
      ],
      "specialRule": [
        "AxiZW7zj2hUK"
      ]
    },
    "Warden Boost Aura": {
      "title": "Aura de Renforcement Gardien",
      "description": [
        {
          "system": "all",
          "text": "Ce modele et son unite gagnent Renforcement Gardien."
        }
      ],
      "specialRule": [
        "AxiZW7zj2hUK"
      ]
    },
    "Smash": {
      "title": "Ecrasement",
      "description": [
        {
          "system": "all",
          "text": "Ignore Regeneration et, contre les unites dont la majorite des modeles ont Defense 5+ a Defense 6+, cette arme gagne Blast(+3)."
        }
      ],
      "specialRule": [
        "AxiZW7zj2hUK"
      ]
    },
    "Unstoppable Shooting Mark": {
      "title": "Marque d'Inarretable au Tir",
      "description": [
        {
          "system": "all",
          "text": "Une fois par activation, avant d'attaquer, choisissez une unite ennemie a 18\" ; les unites amies gagnent Inarretable au tir contre elle une fois (la prochaine fois que l'effet s'applique)."
        }
      ],
      "specialRule": [
        "AxiZW7zj2hUK"
      ]
    },
    "Warden Boost": {
      "title": "Renforcement Gardien",
      "description": [
        {
          "system": "all",
          "text": "Si tous les modeles de cette unite ont Gardien, les touches ennemies comptent toujours comme ayant AP(-1) grace a Gardien (au lieu de s'appliquer seulement contre les tirs/charges a plus de 9\")."
        }
      ],
      "specialRule": [
        "AxiZW7zj2hUK"
      ]
    },
    "Sturdy": {
      "title": "Robuste",
      "description": [
        {
          "system": "all",
          "text": "Quand des unites dont tous les modeles ont cette regle sont prises pour cible par des tirs ou des charges a plus de 9\", elles gagnent +1 aux jets de defense."
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
          "text": "Ignore Regeneration et, sur des resultats non modifies de 1 pour bloquer des touches, cette arme inflige 1 blessure supplementaire."
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
          "text": "Placez un marqueur sur cette unite lorsqu'elle detruit entierement une unite ennemie. Pour chaque marqueur, tous les modeles avec cette regle dans cette unite gagnent AP(+1) et +1 aux jets de defense jusqu'a la fin de la partie (maximum +2)."
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
          "text": "Ce modele et son unite gagnent +1 aux jets pour toucher lorsqu'ils chargent."
        }
      ],
      "specialRule": [
        "SshMejY9Kz7s"
      ]
    },
    "Sturdy Boost Aura": {
      "title": "Aura de Renforcement Robuste",
      "description": [
        {
          "system": "all",
          "text": "Ce modele et son unite gagnent Renforcement Robuste."
        }
      ],
      "specialRule": [
        "SshMejY9Kz7s"
      ]
    },
    "Sturdy Boost": {
      "title": "Renforcement Robuste",
      "description": [
        {
          "system": "all",
          "text": "Si tous les modeles de cette unite ont Robuste, ils gagnent toujours +1 aux jets de defense grace a Robuste (au lieu de s'appliquer seulement contre les tirs/charges a plus de 9\")."
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
          "text": "Quand cette unite est activee, choisissez un effet : jusqu'a la fin de l'activation, tous les modeles avec cette regle gagnent soit AP(+1) en attaque, soit +1 aux jets pour toucher en attaque."
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
          "text": "Quand une unite dont tous les modeles ont cette regle subit des blessures, lancez un de par blessure. Sur 6+, elle est ignoree."
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
          "text": "Ce modele et son unite gagnent Tueur a Distance."
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
          "text": "Ignore Couvert et, contre les unites dont la majorite des modeles ont Defense 2+ a Defense 3+, cette arme gagne AP(+2)."
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
          "text": "Ce modele et son unite gagnent Renforcement Tech Vinci."
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
          "text": "Une fois par activation, avant d'attaquer, choisissez une unite ennemie a 18\" ; les unites amies gagnent +6\" de portee au tir contre elle une fois (la prochaine fois que l'effet s'applique)."
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
          "text": "Une fois par activation, choisissez une unite ennemie a 36\" et en ligne de vue de ce modele, puis lancez un de ; sur 4+, placez-y un marqueur. Les unites amies peuvent retirer des marqueurs de leur cible avant les jets pour toucher pour obtenir +X aux jets pour toucher en attaque, ou X est le nombre de marqueurs retires."
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
          "text": "Les armes de tir de ce modele gagnent AP(+2) contre les unites dont la majorite des modeles ont Tough(3) ou plus."
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
          "text": "Si ce modele a Tech Vinci, il gagne toujours a la fois AP(+1) et +1 aux jets pour toucher grace a Tech Vinci (au lieu de devoir choisir entre AP(+1) ou +1 aux jets pour toucher)."
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
          "text": "Quand cette unite est activee, vous pouvez placer tous les modeles avec cette regle dans cette unite n'importe ou entierement a 3\" de leur position."
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
          "text": "Quand des unites dont tous les modeles ont cette regle sont prises pour cible par des tirs ou des charges a plus de 9\", elles gagnent +1 aux jets de defense."
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
          "text": "Une fois par activation, avant d'attaquer, choisissez une unite amie a 12\" ; elle gagne Furtivite une fois (la prochaine fois que l'effet s'applique)."
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
          "text": "Contre les unites dont la majorite des modeles ont Defense 5+ a Defense 6+, cette arme gagne Blast(+3)."
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
          "text": "Ce modele et son unite gagnent Renforcement de Pas Ondulatoire."
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
          "text": "Une fois par partie, quand une unite dont tous les modeles ont cette regle termine son activation, vous pouvez immediatement la retirer de la table (en lachant tous les objectifs qu'elle pourrait tenir a 1\"), puis la deployer comme si elle avait Embuscade au debut du round suivant."
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
          "text": "Si ce modele a Pas Ondulatoire, il peut etre place a 6\" grace a Pas Ondulatoire (au lieu de seulement 3\")."
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
          "text": "Une fois par round, les unites dont tous les modeles ont cette regle peuvent se deplacer de jusqu'a 3\" apres avoir tire ou combattu en melee."
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
          "text": "Une fois par round, quand cette unite termine son mouvement a 3\" d'unites ennemies apres avoir ete en melee, choisissez-en une et lancez autant de des que de modeles avec cette regle dans cette unite, ou autant de des que sa valeur Tough (pour les unites a un seul modele). Pour chaque 6+, la cible subit une blessure."
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
          "text": "Placez un marqueur sur ce modele lorsqu'il ignore une blessure. En melee, choisissez une de ses armes pour obtenir +X attaques, ou X est le nombre de marqueurs sur lui."
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
          "text": "Pour chaque resultat non modifie de 6 pour toucher en melee, ce modele peut effectuer +1 attaque avec cette arme. Cette regle ne s'applique pas aux attaques generees."
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
          "text": "Placez un marqueur sur cette unite lorsqu'elle detruit entierement une unite ennemie. Pour chaque marqueur, tous les modeles avec cette regle dans cette unite gagnent +1 aux jets pour toucher et +1 aux jets de defense jusqu'a la fin de la partie (maximum +2)."
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
          "text": "Lors d'une attaque, la cible doit relancer les resultats de Defense non modifies de 6."
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
          "text": "Ce modele et son unite gagnent Renforcement de Harcelement."
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
          "text": "Une fois par activation, avant d'attaquer, choisissez une unite ennemie a 18\" ; les unites amies gagnent Percee en melee contre elle une fois (la prochaine fois que l'effet s'applique)."
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
          "text": "Si la majorite des modeles de cette unite ont Harcelement, ils peuvent se deplacer de jusqu'a 6\" grace a Harcelement (au lieu de seulement 3\")."
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
          "text": "Placez un marqueur sur cette unite a la fin de chaque round si elle est sur la table. Pour chaque marqueur, les modeles avec cette regle gagnent +1 aux jets pour toucher (maximum +2). Si cette unite est un jour Secouee, elle perd tous ses marqueurs."
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
          "text": "Une fois par activation, avant d'attaquer, choisissez une unite amie a 12\" ; elle gagne +1 aux tests de moral une fois (la prochaine fois que l'effet s'applique)."
        }
      ],
      "specialRule": [
        "HH7O68qvHVR0"
      ]
    },
    "Counter in Melee": {
      "title": "Riposte en Melee",
      "description": [
        {
          "system": "all",
          "text": "Ce modele gagne Riposte en melee."
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
          "text": "Ignore Regeneration et, contre les unites dont la majorite des modeles ont Tough(3) a Tough(9), cette arme gagne AP(+4)."
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
          "text": "Ce modele et son unite gagnent Renforcement de Formation du Val."
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
          "text": "Une fois par activation, avant d'attaquer, choisissez une unite ennemie a 18\" ; les unites amies gagnent Impact(+1) contre elle une fois (la prochaine fois que l'effet s'applique)."
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
          "text": "Si ce modele a Formation du Val, il gagne +4\" de portee au tir et se deplace de +8\" lorsqu'il utilise des actions de Charge grace a Formation du Val (au lieu de seulement +2\" et +4\")."
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
          "text": "Ce modele et son unite gagnent +1 aux jets pour toucher au tir."
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
          "text": "Lors d'une attaque, les cibles doivent relancer les resultats de Defense non modifies de 6 lorsqu'elles bloquent des touches d'armes de ce modele."
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
          "text": "Contre les unites dont la majorite des modeles ont Tough(3) a Tough(9), cette arme gagne AP(+4)."
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
          "text": "Ce modele et son unite gagnent Renforcement Bestial."
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
          "text": "Une fois par partie, pendant l'activation de ce modele, choisissez une unite ennemie a 36\" et en ligne de vue, puis placez X marqueurs sur elle. Lors d'une attaque, les unites amies peuvent retirer des marqueurs de leur cible avant les jets pour toucher pour obtenir +Y aux jets pour toucher, ou Y est le nombre de marqueurs retires."
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
          "text": "Si ce modele a Bestial, les ennemis qui subissent des touches de sa part doivent relancer les resultats de defense non modifies reussis de 5-6 grace a Bestial (au lieu de seulement 6)."
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
          "text": "Ce modele et son unite gagnent Renforcement Destructeur."
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
          "text": "Une fois par partie, quand cette unite attaque et que tous ses modeles ont cette regle, vous pouvez utiliser cette regle pour que toutes leurs armes gagnent AP(+2)."
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
          "text": "Ce modele et son unite gagnent Exploit Perforant."
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
          "text": "Ignore Regeneration et, sur des resultats non modifies de 6 pour toucher qui ne sont pas bloques, cette arme inflige 1 blessure supplementaire."
        }
      ],
      "specialRule": [
        "K44UD3HPQAfg"
      ]
    },
    "Melee Evasion Buff": {
      "title": "Bonus d'Evasion en Melee",
      "description": [
        {
          "system": "all",
          "text": "Une fois par activation, avant d'attaquer, choisissez une unite amie a 12\" ; elle gagne Evasion en melee une fois (la prochaine fois que l'effet s'applique)."
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
          "text": "Une fois par activation, avant d'attaquer, choisissez une unite ennemie a 18\" ; elle gagne Encombrant en melee une fois (la prochaine fois que l'effet s'applique)."
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
          "text": "Ce modele et son unite gagnent +1 aux tests de moral."
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
          "text": "Si ce modele a Destructeur, les ennemis qui subissent des blessures de sa part subissent des blessures supplementaires sur des jets de defense rates de 1-2 grace a Destructeur (au lieu de seulement 1)."
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
  },
  "pl": {}
};
