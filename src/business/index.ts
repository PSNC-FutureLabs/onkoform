import { FormFields } from "./form-schema";
import { DropdownOptionsType, MultiCheckboxOptionsType, RadioOptionsType, UnitType } from "./types";

export const versionTag = {
	majorNo: 0,
	minorNo: 6,
	patchNo: 1,
	status: "alpha",
	date: "2024.06.29",
};

export type StepType = {
	id: number;
	name: string;
	fields: Array<string | Array<string>>;
};

export const steps: Array<StepType> = [
	{
		id: 1,
		name: "Informacje o pacjencie",
		fields: ["dateOfBirth", "gender", "disease", "hospitalWard"],
	},
	{
		id: 2,
		name: "Niepokojące objawy",
		fields: ["temperature", "symptoms"],
	},
	{
		id: 3,
		name: "Aktualne badania",
		fields: [
			"examination-date",
			["HGB.value", "HGB.unit"],
			"WBC",
			"PLT",
			["NEUT.value", "NEUT.unit"],
			"ALT",
			"AST",
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
			["NEUT2.value", "NEUT2.unit"],
			"ALT2",
			"AST2",
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

// to be removed if no longer needed
export const measurementPlaceOptions: RadioOptionsType[] = [
	{
		label: "czoło",
		value: "forehead",
	},
	{
		label: "pacha",
		value: "armpit",
	},
];

export const diseaseOptions: DropdownOptionsType[] = [
	{
		label: "ALL (ostra białaczka limfoblastyczna)",
		value: "all",
	},
	{
		label: "AML (ostra białaczka mieloblastyczna/szpikowa)",
		value: "aml",
	},
	{
		label: "CML (przewlekły nowotwór mieloproliferacyjny)",
		value: "cml",
	},
	{
		label: "Guzy germinalne",
		value: "germ-cell-tumors",
	},
	{
		label: "Chłoniak Hodgkina",
		value: "hodgkin-lymphoma",
	},
	{
		label: "Chłoniak Burkitta",
		value: "burkitt-lymphoma",
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
		value: "wilms-tumor",
	},
	{
		label: "Mięsaki tkanek miękkich",
		value: "soft-tissue-sarcomas",
	},
	{
		label: "Guzy OUN",
		value: "central-nervous-systems-tumors",
	},
	{
		label: "MDS (zespoły mielodysplastyczne)",
		value: "mds",
	},
	{
		label: "HLH (limfohistiocytoza hemofagocytowa)",
		value: "hlh",
	},
];

export const hospitalWardOptions: DropdownOptionsType[] = [
	{
		label: "Oddział III",
		value: "o3",
	},
	{
		label: "Oddział V",
		value: "o5",
	},
	{
		label: "Oddział TSK",
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
		label: "dreszcze",
		value: "chills",
	},
	{
		label: "senność/osłabienie",
		value: "drowsiness-weakness",
	},
	{
		label: "ból głowy",
		value: "headache",
	},
	{
		label: "toksyczności śluzówkowe",
		value: "mucosal-toxicities",
	},
	{
		label: "utrzymujące się wymioty",
		value: "vomiting",
	},
	{
		label: "biegunka",
		value: "diarrhea",
	},
	{
		label: "krwawienie",
		value: "bleeding",
	},
	{
		label: "nowe/świeże wybroczyny",
		value: "fresh-petechiae",
	},
	{
		label: "sinica lub zasinienie ciała",
		value: "cyanosis-or-body-bruising",
	},
	{
		label: "nasilone obrzęki obwodowe",
		value: "severe-peripheral-edema",
	},
	{
		label: "drgawki / brak kontaktu",
		value: "seizures-unresponsiveness",
	},
	{
		label: "zaburzenia widzenia",
		value: "vision-disturbances",
	},
	{
		label: "ból / niepokój",
		value: "pain-anxiety",
	},
];

export const TemperatureUnits: UnitType[] = ["°C"];
export const HGBUnits: UnitType[] = ["mg/%", "g/dl"];
export const WBCUnits: UnitType[] = ["K/μl", "tys./μl", "G/l"];
export const PLTUnits: UnitType[] = ["tys./μl", "tys./mm³"];
export const NEUTUnits: UnitType[] = ["%", "μl"];
export const ALTUnits: UnitType[] = ["U/l"];
export const ASTUnits: UnitType[] = ["U/l"];

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
	NEUT: {
		value: 0,
		unit: "%",
	},
	ALT: { value: 0 },
	AST: { value: 0 },
	HGBprev: {
		value: 0,
		unit: "g/dl",
	},
	WBCprev: { value: 0 },
	PLTprev: { value: 0 },
	ALTprev: { value: 0 },
	ASTprev: { value: 0 },
	NEUTprev: {
		value: 0,
		unit: "%",
	},
};
