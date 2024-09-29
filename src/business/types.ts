/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control, FieldValues, UseFormGetValues, UseFormSetValue } from "react-hook-form";
import { OverridableStringUnion } from "@mui/types";
import { AlertColor, AlertPropsColorOverrides } from "@mui/material";

export type NullableNumber = number | null;
export type NullableDate = Date | null;

type OptionType = {
	label: string;
	value: string;
	description?: string;
};

export type RadioOptionsType = OptionType;
export type MultiCheckboxOptionsType = OptionType;
export type DropdownOptionsType = OptionType;

export type FormInputProps = {
	name: string;
	control: Control<FieldValues, any>;
	label?: string;
	placeholder?: string;
	unit?: Array<UnitType>;
};

export type InputRadioProps = FormInputProps & {
	options: RadioOptionsType[];
};

export type InputDropdownProps = FormInputProps & {
	options: DropdownOptionsType[];
};

export type UnitSelectorProps = FormInputProps & {
	options: UnitType[];
};

export type FormInputMultiCheckboxProps = FormInputProps & {
	setValue: UseFormSetValue<FieldValues>;
	getValues: UseFormGetValues<FieldValues>;
};

export type MarkerRowProps = {
	control: Control<FieldValues, any>;
	markerName: string;
	label: string;
	options: UnitType[];
	description?: string;
};

export type BloodMarkersNames = "HGB" | "WBC" | "PLT" | "NEUT" | "ALT" | "AST";

export const BloodMarkerDescriptions: { [key in BloodMarkersNames]: string } = {
	HGB: "stężenie hemoglobiny",
	WBC: "liczba białych krwinek (leukocyty)",
	PLT: "liczba płytek krwi",
	NEUT: "liczba (#) granulocytów obojętochłonnych (neutrofile, neutrocyty)",
	ALT: "poziom aminotransferazy alaninowej (ALAT)",
	AST: "poziom aminotransferazy asparaginianowej (ASPAT)",
};

export type BloodMarkers = {
	[key in BloodMarkersNames]: MedicalParameter;
};

export type Gender = "male" | "female" | "other";

export type Patient = {
	dateOfBirth: Date;
	gender: Gender;
};

export type Analysis = {
	patient: Patient;
	medicalParameters: Array<MedicalParameter>;
	symptoms: Array<SymptomValues>;
	diagnosis: Diagnosis;
	headacheRating: NullableNumber;
	painAnxietyRating: NullableNumber;
	mucosalToxicitiesRating: NullableNumber;
};

export type UnitType =
	| "%"
	| "%/μl"
	| "#/μl"
	| "/μl"
	| "10^3/mm³"
	| "10^3/μl"
	| "°C"
	| "G/l"
	| "K/mm³"
	| "K/μl"
	| "M/ml"
	| "M/μl"
	| "U/L"
	| "U/l"
	| "g/dl"
	| "mg/%"
	| "mg/dl"
	| "mm³"
	| "mmol/l"
	| "tys./mm³"
	| "tys./μl"
	| "μl";

export type SymptomValues =
	| "chills"
	| "drowsiness-weakness"
	| "headache"
	| "mucosal-toxicities"
	| "vomiting"
	| "diarrhea"
	| "bleeding"
	| "fresh-petechiae"
	| "cyanosis-or-body-bruising"
	| "severe-peripheral-edema"
	| "seizures-unresponsiveness"
	| "vision-disturbances"
	| "pain-anxiety";

export enum DiagnosisLevel {
	Unconclusive,
	OK,
	RepeatTestIn3Days,
	RepeatTestIn2Days,
	ConsultationNeeded,
	UrgentConsultationNeeded,
}

export type Diagnosis = {
	level: DiagnosisLevel;
	header: string;
	body: string;
	severity: OverridableStringUnion<AlertColor, AlertPropsColorOverrides>;
};

export type Diagnoses = Array<Diagnosis>;

export const DiagnosesDefinitions: Diagnoses = [
	{
		level: DiagnosisLevel.Unconclusive,
		header: "Brak diagnozy",
		body: "Aplikacja nie jest w stanie określić wyniku. Skontaktuj się z lekarzem prowadzącym.",
		severity: "warning",
	},
	{
		level: DiagnosisLevel.OK,
		header: "Wyniki są w normie",
		body: "Zapoznaj się ze szczegółami poniżej",
		severity: "success",
	},
	{
		level: DiagnosisLevel.RepeatTestIn3Days,
		header: "Powtórz badanie za 3 dni",
		body: "Zapoznaj się ze szczegółami poniżej",
		severity: "warning",
	},
	{
		level: DiagnosisLevel.RepeatTestIn2Days,
		header: "Powtórz badanie za 2 dni",
		body: "Zapoznaj się ze szczegółami poniżej",
		severity: "warning",
	},
	{
		level: DiagnosisLevel.ConsultationNeeded,
		header: "Wyniki wymagają konsultacji z lekarzem.",
		body: "Zapoznaj się ze szczegółami poniżej",
		severity: "error",
	},
	{
		level: DiagnosisLevel.UrgentConsultationNeeded,
		header: "Wyniki wymagają pilnej konsultacji z lekarzem.",
		body: "Zapoznaj się ze szczegółami poniżej",
		severity: "error",
	},
];

export function inRange(value: NullableNumber, range: string): boolean {
	if (!value) return false;

	const trimmedRange = range.replace(/\s/g, "");

	const isLowerInclusive = trimmedRange.startsWith("[");
	const isUpperInclusive = trimmedRange.endsWith("]");

	const bounds = trimmedRange.substring(1, trimmedRange.length - 1).split(",");

	const lowerBound = parseFloat(bounds[0]);
	const upperBound = parseFloat(bounds[1]);

	if (isLowerInclusive) {
		if (isUpperInclusive) {
			return value >= lowerBound && value <= upperBound;
		} else {
			return value >= lowerBound && value < upperBound;
		}
	} else {
		if (isUpperInclusive) {
			return value > lowerBound && value <= upperBound;
		} else {
			return value > lowerBound && value < upperBound;
		}
	}
}

export function getUnitConversionRatio(baseUnit: UnitType, targetUnit: UnitType): NullableNumber {
	if (baseUnit === targetUnit) return 1;

	const EquivalentUnitSets: Array<Array<UnitType>> = [
		["mm³", "μl"],
		["G/l", "M/ml", "K/μl", "tys./μl", "10^3/μl", "K/mm³", "tys./mm³", "10^3/mm³"],
		["mg/dl", "mg/%"],
		["U/L", "U/l"],
	];

	const conversionRatios: Record<string, NullableNumber> = {
		"#/μl:K/μl": 0.001,
		"/μl:K/μl": 0.001,
		"g/dl:mg/%": 100,
		"g/dl:mg/dl": 1000,
		"mg/%:mg/dl": 10,
		"mg/%:g/dl": 0.001,
		"mg/dl:g/dl": 0.001,
		"mmol/l:mg/dl": 18.01559, // Example for glucose
		"mg/dl:mmol/l": 1 / 18.01559,
	};

	if (EquivalentUnitSets.find((unitSet) => unitSet.includes(baseUnit) && unitSet.includes(targetUnit))) return 1;

	const key = `${baseUnit}:${targetUnit}`;

	return conversionRatios[key] || null;
}

export class MedicalParameter {
	value: number;
	unit: UnitType;
	baseUnit: UnitType;
	date?: NullableDate;
	reference?: MedicalParameter;

	constructor(
		actualValue: number,
		unit: UnitType,
		baseUnit: UnitType,
		date?: NullableDate,
		reference?: MedicalParameter
	) {
		this.value = actualValue;
		this.unit = unit;
		this.baseUnit = baseUnit;
		this.date = date ?? null;
		if (reference) {
			this.reference = reference;
		}
	}

	in(unit: UnitType): NullableNumber {
		if (this.unit === unit) return this.value;
		const ratio = getUnitConversionRatio(this.unit, unit);
		return ratio ? ratio * this.value : null;
	}

	isStable(): boolean {
		return (this.in(this.baseUnit) ?? 0) == (this.reference?.in(this.baseUnit) ?? 0);
	}

	isRising(): boolean {
		return (this.in(this.baseUnit) ?? 0) > (this.reference?.in(this.baseUnit) ?? 0);
	}

	isFalling(): boolean {6
		return (this.in(this.baseUnit) ?? 0) < (this.reference?.in(this.baseUnit) ?? 0);
	}

	getValue(): NullableNumber {
		return this.value;
	}

	getReferenceValue(): NullableNumber {
		return this.reference?.value ?? null;
	}

	getUnit(): UnitType {
		return this.unit;
	}

	getBaseUnit(): UnitType {
		return this.baseUnit;
	}

	setUnit(unit: UnitType): void {
		this.unit = unit;
	}
}
