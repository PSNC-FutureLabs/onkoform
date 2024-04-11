import { DropdownOptionsType, RadioOptionsType, UnitType } from "./types";

export const steps = [
  {
    id: "Step 1",
    name: "Informacje o pacjencie",
    fields: ["birthday", "gender", "disease", "hospitalWard"],
  },
  {
    id: "Step 2",
    name: "Niepokojące objawy",
    fields: ["temperature", "measurement-place", "symptoms", "otherSymptoms"],
  },
  {
    id: "Step 3",
    name: "Aktualne badania",
    fields: [
      "examination-date",
      ["HGB", "HgbUnit"],
      "WBC",
      "PLT",
      "ALT",
      "AST",
      ["NEUT", "NEUTunit"],
    ],
  },
  {
    id: "Step 4",
    name: "Poprzednie badania",
    fields: [
      "examination-date2",
      ["HGB2", "Hgb2Unit"],
      "WBC2",
      "PLT2",
      "ALT2",
      "AST2",
      ["NEUT2", "NEUT2unit"],
    ],
  },
];

export const genderOptions: RadioOptionsType[] = [
  {
    label: "Kobieta",
    value: "female",
  },
  {
    label: "Mężczyzna",
    value: "male",
  },
  {
    label: "Inna",
    value: "other",
  },
];

export const measurementPlaceOptions: RadioOptionsType[] = [
  {
    label: "Czoło",
    value: "forehead",
  },
  {
    label: "Pacha",
    value: "pacha",
  },
];

export const diseaseOptions: DropdownOptionsType[] = [
  {
    label: "ALL",
    value: "all",
  },
  {
    label: "AML",
    value: "aml",
  },
  {
    label: "CML",
    value: "cml",
  },
  {
    label: "Guzy germinalne",
    value: "gg",
  },
  {
    label: "Chłoniak Hodgkina",
    value: "hodgkin",
  },
  {
    label: "Chłoniak Burkitta",
    value: "burkitt",
  },
  {
    label: "Inne chłoniaki",
    value: "other-lymphomas",
  },
  {
    label: "Neuroblastoma",
    value: "neuroblastoma",
  },
  {
    label: "Guz Wilmsa",
    value: "wilms",
  },
  {
    label: "Mięsaki tkanek miękkich",
    value: "mtm",
  },
  {
    label: "Guzy OUN",
    value: "oun",
  },
  {
    label: "MDS",
    value: "mds",
  },
  {
    label: "HLH",
    value: "hlh",
  },
];

export const hospitalWardOptions: DropdownOptionsType[] = [
  {
    label: "Oddział III",
    value: "o3",
  },
  {
    label: "Odział V",
    value: "o5",
  },
  {
    label: "Odział TSK",
    value: "otsk",
  },
  {
    label: "Oddział Dzienny V/D",
    value: "odvd",
  },
  {
    label: "Poradnia Onkologiczna",
    value: "po",
  },
  {
    label: "Poradnia TSK",
    value: "ptsk",
  },
];

export const symptomsOptions = [
  {
    label: "Dreszcze",
    value: "chills",
  },
  {
    label: "Senność/osłabienie",
    value: "weakness",
  },
  {
    label: "Krwawienia/wybroczyny/zasinienie",
    value: "bleeding",
  },
  {
    label: "Toksyczności śluzkówkowe",
    value: "mucosal-toxicities",
  },
  {
    label: "Nudności lub wymioty",
    value: "nausea",
  },
  {
    label: "Inne",
    value: "others",
  },
] as const;

export const HgbUnits: UnitType[] = ["g/dl", "mmol/l"];
export const NeutUnits: UnitType[] = ["%", "μl"];
