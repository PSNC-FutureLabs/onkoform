import { diseaseOptions, genderOptions, hospitalWardOptions } from "../../business";

export const getGenderValue = (gender: string) => {
	return genderOptions.find((opt) => opt.value == gender)?.label;
};

export const getCurrentAge = (dateOfBirth: string) => {
	const dob = new Date(dateOfBirth);
	const now = new Date();

	let years = now.getFullYear() - dob.getFullYear();
	let months = now.getMonth() - dob.getMonth();

	if (months < 0) {
		years--;
		months += 12;
	}

	return {
		years: years,
		months: months,
	};
};

export const getDiseaseValue = (disease: string) => {
	return diseaseOptions.find((opt) => opt.value == disease)?.label;
};

export const getHospitalWardValue = (hospitalWard: string) => {
	return hospitalWardOptions.find((opt) => opt.value == hospitalWard)?.label;
};
