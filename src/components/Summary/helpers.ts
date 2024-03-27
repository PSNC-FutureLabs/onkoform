import {
  diseaseOptions,
  genderOptions,
  hospitalWardOptions,
} from "../../business";

export const getGenderValue = (gender: string) => {
  return genderOptions.find((opt) => opt.value == gender)?.label;
};

export const getAgeValue = (birthday: string) => {
  const currentYear = new Date().getFullYear();
  const birthYear = new Date(birthday).getFullYear();
  return currentYear - birthYear;
};

export const getDiseaseValue = (disease: string) => {
  return diseaseOptions.find((opt) => opt.value == disease)?.label;
};

export const getHospitalWardValue = (hospitalWard: string) => {
  return hospitalWardOptions.find((opt) => opt.value == hospitalWard)?.label;
};
