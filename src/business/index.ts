import { FormFields } from "./form-schema";
import { DropdownOptionsType, MultiCheckboxOptionsType, RadioOptionsType, UnitType } from "./types";

export type StepType = {
	id: number;
	name: string;
	fields: Array<string | Array<string>>;
};

export const steps: Array<StepType> = [
	{
		id: 1,
		name: "Informacje o pacjencie",
		fields: ["birthday", "gender", "disease", "hospitalWard"],
	},
	{
		id: 2,
		name: "Niepokojące objawy",
		fields: ["temperature", "measurement-place", "symptoms", "otherSymptoms"],
	},
	{
		id: 3,
		name: "Aktualne badania",
		fields: [
			"examination-date",
			["HGB.value", "HGB.unit"],
			"WBC",
			"PLT",
			"ALT",
			"AST",
			["NEUT.value", "NEUT.unit"],
		],
	},
	{
		id: 4,
		name: "Poprzednie badania",
		fields: [
			"examination-date2",
			["HGB2", "Hgb2Unit"],
			"WBC2",
			"PLT2",
			"ALT2",
			"AST2",
			["NEUT2.value", "NEUT2.unit"],
		],
	},
];

export const genderOptions: RadioOptionsType[] = [
	{
		label: "kobieta",
		value: "female",
	},
	{
		label: "mężczyzna",
		value: "male",
	},
	{
		label: "inna",
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

export const symptomsOptions: MultiCheckboxOptionsType[] = [
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
		label: "Toksyczności śluzówkowe",
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
];

export const HgbUnits: UnitType[] = ["g/dl", "mmol/l"];
export const NeutUnits: UnitType[] = ["%", "μl"];

export const defaultFromValues: Partial<FormFields> = {
	disease: "",
	hospitalWard: "",
	symptoms: [],
	HGB: {
		value: 0,
		unit: "g/dl",
	},
	WBC: { value: 0 },
	PLT: { value: 0 },
	ALT: { value: 0 },
	AST: { value: 0 },
	NEUT: {
		value: 0,
		unit: "%",
	},
	HGB2: {
		value: 0,
		unit: "g/dl",
	},
	WBC2: { value: 0 },
	PLT2: { value: 0 },
	ALT2: { value: 0 },
	AST2: { value: 0 },
	NEUT2: {
		value: 0,
		unit: "%",
	},
};
