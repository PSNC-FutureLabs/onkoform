import { isLocalhost } from "../helpers";
import { FormFields } from "./form";
import { DropdownOptionsType, MultiCheckboxOptionsType, RadioOptionsType, UnitType } from "./types";

export const versionTag = {
	majorNo: 0,
	minorNo: 9,
	patchNo: 4,
	status: "beta",
	date: "2025.02.05",
};

export const versionText = (): string =>
	`${versionTag.majorNo}.${versionTag.minorNo}.${versionTag.patchNo}-${versionTag.status} (${versionTag.date})`;

export type StepType = {
	id: number;
	name: string;
	header: string;
	fields: Array<string | Array<string>>;
};

export const steps: Array<StepType> = [
	{
		id: 1,
		name: "stepperStepName1",
		header: "stepperStepHeader1",
		fields: [
			"dateOfBirth",
			"gender",
			"medicalCondition",
			"hospitalWard",
			"actual-lab-test-date",
			"previous-lab-test-date",
		],
	},
	{
		id: 2,
		name: "ns2:ConcerningSymptoms",
		header: "stepperStepHeader2",
		fields: ["temperature", "symptoms"],
	},
	{
		id: 3,
		name: "stepperStepName3",
		header: "stepperStepHeader3",
		fields: [
			["HGB.value", "HGB.unit"],
			["WBC.value", "WBC.unit"],
			["PLT.value", "PLT.unit"],
			["NEUT.value", "NEUT.unit"],
			"ALT",
			"AST",
		],
	},
	{
		id: 4,
		name: "stepperStepName4",
		header: "stepperStepHeader4",
		fields: [
			["HGBprev.value", "Hgbprev.unit"],
			["WBCprev.value", "WBCprev.unit"],
			["PLTprev.value", "PLTprev.unit"],
			["NEUTprev.value", "NEUTprev.unit"],
			"ALTprev",
			"ASTprev",
		],
	},
	{
		id: 5,
		name: "stepperStepName5",
		header: "stepperStepHeader5",
		fields: [],
	},
];

export const genderOptions: RadioOptionsType[] = [
	{
		label: "female",
		value: "female",
	},
	{
		label: "male",
		value: "male",
	},
	{
		label: "other",
		value: "other",
	},
];

export const mucosalToxicitiesLevels: RadioOptionsType[] = [
	{
		label: "mucosalToxicitiesLevels1",
		value: "1",
	},
	{
		label: "mucosalToxicitiesLevels2",
		value: "2",
	},
	{
		label: "mucosalToxicitiesLevels3",
		value: "3",
	},
	{
		label: "mucosalToxicitiesLevels4",
		value: "4",
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

export const medicalConditionOptions: DropdownOptionsType[] = [
	{
		label: "medicalConditionALL",
		value: "all",
	},
	{
		label: "medicalConditionAML",
		value: "aml",
	},
	{
		label: "medicalConditionCML",
		value: "cml",
	},
	{
		label: "medicalConditionGermCellTumors",
		value: "germ-cell-tumors",
	},
	{
		label: "medicalConditionHodgkinLymphoma",
		value: "hodgkin-lymphoma",
	},
	{
		label: "medicalConditionBurkittLymphoma",
		value: "burkitt-lymphoma",
	},
	{
		label: "medicalConditionOtherLymphomas",
		value: "other-lymphomas",
	},
	{
		label: "medicalConditionNeuroblastoma",
		value: "neuroblastoma",
	},
	{
		label: "medicalConditionWilmsTumor",
		value: "wilms-tumor",
	},
	{
		label: "medicalConditionSoftTissueSarcomas",
		value: "soft-tissue-sarcomas",
	},
	{
		label: "medicalConditionCentralNervousSystemsTumors",
		value: "central-nervous-systems-tumors",
	},
	{
		label: "medicalConditionMDS",
		value: "mds",
	},
	{
		label: "medicalConditionHLH",
		value: "hlh",
	},
];

export const hospitalWardOptions: DropdownOptionsType[] = [
	{
		label: "hospitalWardo3",
		value: "o3",
	},
	{
		label: "hospitalWardo5",
		value: "o5",
	},
	{
		label: "hospitalWardotsk",
		value: "otsk",
	},
	{
		label: "hospitalWardodvd",
		value: "odvd",
	},
	{
		label: "hospitalWardpo",
		value: "po",
	},
	{
		label: "hospitalWardptsk",
		value: "ptsk",
	},
];

export const symptomsOptions: MultiCheckboxOptionsType[] = [
	{
		label: "symptomsOptionsChillsLabel",
		value: "chills",
		description: "symptomsOptionsChillsDesc",
	},
	{
		label: "symptomsOptionsDrowsinessWeaknessLabel",
		value: "drowsiness-weakness",
		description: "symptomsOptionsDrowsinessWeaknessDesc",
	},
	{
		label: "symptomsOptionsHeadacheLabel",
		value: "headache",
		description: "symptomsOptionsHeadacheDesc",
	},
	{
		label: "symptomsOptionsMucosalToxicitiesLabel",
		value: "mucosal-toxicities",
		description: "symptomsOptionsMucosalToxicitiesDesc",
	},
	{
		label: "symptomsOptionsVomitingLabel",
		value: "vomiting",
		description: "symptomsOptionsVomitingDesc",
	},
	{
		label: "symptomsOptionsDiarrheaLabel",
		value: "diarrhea",
		description: "symptomsOptionsDiarrheaDesc",
	},
	{
		label: "symptomsOptionsBleedingLabel",
		value: "bleeding",
		description: "symptomsOptionsBleedingDesc",
	},
	{
		label: "symptomsOptionsFreshPetechiaeLabel",
		value: "fresh-petechiae",
		description: "symptomsOptionsFreshPetechiaeDesc",
	},
	{
		label: "symptomsOptionsCyanosisOrBodyBruisingLabel",
		value: "cyanosis-or-body-bruising",
		description: "symptomsOptionsCyanosisOrBodyBruisingDesc",
	},
	{
		label: "symptomsOptionsSeverePeripheralEdemaLabel",
		value: "severe-peripheral-edema",
		description: "symptomsOptionsSeverePeripheralEdemaDesc",
	},
	{
		label: "symptomsOptionsSeizuresUnresponsivenessLabel",
		value: "seizures-unresponsiveness",
		description: "symptomsOptionsSeizuresUnresponsivenessDesc",
	},
	{
		label: "symptomsOptionsVisionDisturbancesLabel",
		value: "vision-disturbances",
		description: "symptomsOptionsVisionDisturbancesDesc",
	},
	{
		label: "symptomsOptionspainAnxietyLabel",
		value: "pain-anxiety",
		/*description: "symptomsOptionspainAnxietyDesc",*/
	},
];

export const TemperatureUnits: UnitType[] = ["°C"];
export const HGBUnits: UnitType[] = ["g/dl", "mg/%", "mmol/l"];
export const WBCUnits: UnitType[] = ["K/μl", "10^3/μl", "tys./μl"];
export const PLTUnits: UnitType[] = ["K/μl", "10^3/μl", "tys./μl"];
export const NEUTUnits: UnitType[] = ["/μl", "K/μl", "10^3/μl", "tys./μl"];
export const ALTUnits: UnitType[] = ["U/l"];
export const ASTUnits: UnitType[] = ["U/l"];

export const formDefaultValues: Partial<FormFields> = {
	medicalCondition: "",
	hospitalWard: "",
	symptoms: [],
	"headache-rating": "",
	"pain-anxiety-rating": "",
	"mucosal-toxicities-rating": "",
};

export const formTestValues: Partial<FormFields> = {
	gender: "male",
	medicalCondition: "all",
	hospitalWard: "o3",
	temperature: 36.6,
	symptoms: [],
	"headache-rating": "",
	"pain-anxiety-rating": "",
	"mucosal-toxicities-rating": "",
	HGB: {
		value: 10.9,
		unit: "g/dl",
	},
	WBC: {
		value: 1.9,
		unit: "K/μl",
	},
	PLT: {
		value: 306,
		unit: "K/μl",
	},
	NEUT: {
		value: 0.26,
		unit: "K/μl",
	},
	ALT: { value: 1, unit: "U/l" },
	AST: { value: 1, unit: "U/l" },
	HGBprev: {
		value: 11.6,
		unit: "g/dl",
	},
	WBCprev: {
		value: 1.1,
		unit: "K/μl",
	},
	PLTprev: {
		value: 68,
		unit: "K/μl",
	},
	NEUTprev: {
		value: 0.31,
		unit: "K/μl",
	},
	ALTprev: { value: 1, unit: "U/l" },
	ASTprev: { value: 1, unit: "U/l" },
};

export function getFormDefaultValues(): Partial<FormFields> {
	return isLocalhost ? formTestValues : formDefaultValues;
}
