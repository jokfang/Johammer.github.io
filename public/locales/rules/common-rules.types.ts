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
  specialRule?: string[];
  description: RuleDescription[];
};

export type SpellTranslationEntry = {
  title: string;
  specialRule?: string[];
  description: SpellDescription[];
};

export type RulesByLanguage = Record<string, Record<string, RuleTranslationEntry>>;
export type SpellsByLanguage = Record<string, Record<string, SpellTranslationEntry>>;
