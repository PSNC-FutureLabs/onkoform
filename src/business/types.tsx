/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control, FieldValues, UseFormGetValues, UseFormSetValue } from "react-hook-form";

export type RadioOptionsType = {
	label: string;
	value: string;
};

export type MultiCheckboxOptionsType = {
	label: string;
	value: string;
};

export type DropdownOptionsType = {
	label: string;
	value: string;
};

export type UnitType =
	| "%"
	| "°C"
	| "%/μl"
	| "G/l"
	| "K/μl"
	| "M/μl"
	| "U/L"
	| "U/l"
	| "g/dl"
	| "mg/%"
	| "mmol/l"
	| "tys./mm³"
	| "tys./μl"
	| "μl";

export type FormInputProps = {
	name: string;
	control: Control<FieldValues, any>;
	label: string;
	placeholder?: string;
	unit?: Array<UnitType>;
};

export type InputRadioProps = FormInputProps & {
	options: RadioOptionsType[];
};
export type InputDropdownProps = FormInputProps & {
	options: DropdownOptionsType[];
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
};

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

export type NullableNumber = number | null;

export class MedicalParameter {
	actualValue: number;
	unit: UnitType;
	referenceValue?: NullableNumber;
	referenceUnit?: UnitType;

	constructor(actualValue: number, unit: UnitType, referenceValue?: number, referenceUnit?: UnitType) {
		this.actualValue = actualValue;
		this.unit = unit;
		this.referenceValue = referenceValue ?? null;
		if (referenceUnit) this.referenceUnit = referenceUnit;
	}

	in(unit: UnitType): NullableNumber {
		if (this.unit === unit) return this.actualValue;
		return null;
	}

	isInRange(): boolean {
		return false;
	}

	getActualValue(unit?: UnitType): NullableNumber {
		return unit === this.unit ? this.actualValue : null;
	}

	setActualValue(value: number): void {
		this.actualValue = value;
	}

	getReferenceValue(): NullableNumber {
		return this.referenceValue ?? null;
	}

	setReferenceValue(value: number): void {
		this.referenceValue = value;
	}

	getUnit(): UnitType {
		return this.unit;
	}

	setUnit(unit: UnitType): void {
		this.unit = unit;
	}
}
