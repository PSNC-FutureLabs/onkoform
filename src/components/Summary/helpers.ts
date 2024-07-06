import { medicalConditionOptions, genderOptions, hospitalWardOptions } from "../../business";

export function getFormattedNumber(n: number, decimalPlaces: number = 0): string {
	return n.toFixed(decimalPlaces).replace(".", ",");
}

export const getCurrentAge = (dateOfBirthTimestamp: number): { years: number; months: number } => {
	const dob = new Date(dateOfBirthTimestamp);
	const now = new Date();

	let years = now.getFullYear() - dob.getFullYear();
	let months = now.getMonth() - dob.getMonth();

	if (months < 0) {
		years--;
		months += 12;
	}
	
	return {
		years,
		months,
	};
};

export function getPolishAgeDescription(dateOfBirth: Date): string {
	const now = new Date();
	let years: number = now.getFullYear() - dateOfBirth.getFullYear();
	let months: number = now.getMonth() - dateOfBirth.getMonth();

	if (months < 0) {
		years--;
		months += 12;
	}

	function getYearDeclination(years: number): string {
		if (years === 1) {
			return "rok";
		} else if (years % 10 >= 2 && years % 10 <= 4 && (years % 100 < 10 || years % 100 >= 20)) {
			return "lata";
		} else {
			return "lat";
		}
	}

	function getMonthDeclination(months: number): string {
		if (months === 1) {
			return "miesiąc";
		} else if (months >= 2 && months <= 4) {
			return "miesiące";
		} else {
			return "miesięcy";
		}
	}

	const yearDeclination = getYearDeclination(years);
	const monthDeclination = getMonthDeclination(months);

	let ageString = `${years} ${yearDeclination}`;
	if (months > 0) {
		ageString += ` i ${months} ${monthDeclination}`;
	}

	// return ageString + ` (${dateOfBirth.toLocaleString()})`;
	return ageString;
}

export const getGenderValue = (gender: string) => {
	return genderOptions.find((opt) => opt.value == gender)?.label;
};

export const getMedicalConditionValue = (medicalCondition: string) => {
	return medicalConditionOptions.find((opt) => opt.value == medicalCondition)?.label;
};

export const getHospitalWardValue = (hospitalWard: string) => {
	return hospitalWardOptions.find((opt) => opt.value == hospitalWard)?.label;
};
