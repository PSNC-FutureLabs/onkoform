import {
  medicalConditionOptions,
  genderOptions,
  hospitalWardOptions,
} from "./business";

export const isLocalhost: boolean = window.location.hostname === "localhost";

export function getFormattedNumber(
  n: number,
  decimalPlaces: number = 0
): string {
  if (decimalPlaces < 0) {
    return n
      .toFixed(5)
      .replace(/(\.\d*[1-9])0+|\.0*$/, "$1")
      .replace(".", ",");
  }
  return n.toFixed(decimalPlaces).replace(".", ",");
}

export const getCurrentAge = (
  dateOfBirthTimestamp: number
): { years: number; months: number } => {
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

/*
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

	let ageString = years > 0 ? (years > 1 ? `${years} ` : "") + `${yearDeclination}` : "";
	if (months > 0) {
		ageString += (years > 0 ? " i " : "") + `${months} ${monthDeclination}`;
	}

	// return ageString + ` (${dateOfBirth.toLocaleString()})`;
	return ageString;
}
*/
type Language = "en" | "pl" | "ua";

export function getAgeDescription(dateOfBirth: Date, language: string): string {
  const now = new Date();
  let years: number = now.getFullYear() - dateOfBirth.getFullYear();
  let months: number = now.getMonth() - dateOfBirth.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }
  if (language !== "en" && language !== "ua") {
    language = "pl";
  }

  function getYearDeclination(years: number, lang: Language): string {
    switch (lang) {
      case "en":
        return years === 1 ? "year" : "years";
      case "pl":
        if (years === 1) return "rok";
        else if (
          years % 10 >= 2 &&
          years % 10 <= 4 &&
          (years % 100 < 10 || years % 100 >= 20)
        )
          return "lata";
        else return "lat";
      case "ua":
        if (years === 1) return "рік";
        else if (
          years % 10 >= 2 &&
          years % 10 <= 4 &&
          (years % 100 < 10 || years % 100 >= 20)
        )
          return "роки";
        else return "років";
    }
  }

  function getMonthDeclination(months: number, lang: Language): string {
    switch (lang) {
      case "en":
        return months === 1 ? "month" : "months";
      case "pl":
        if (months === 1) return "miesiąc";
        else if (months >= 2 && months <= 4) return "miesiące";
        else return "miesięcy";
      case "ua":
        if (months === 1) return "місяць";
        else if (months >= 2 && months <= 4) return "місяці";
        else return "місяців";
    }
  }

  function getAndString(lang: Language): string {
    switch (lang) {
      case "en":
        return "and";
      case "pl":
        return "i";
      case "ua":
        return "і";
    }
  }

  const yearDeclination = getYearDeclination(years, language as Language);
  const monthDeclination = getMonthDeclination(months, language as Language);
  const andString = getAndString(language as Language);

  let ageString =
    years > 0 ? (years > 1 ? `${years} ` : "") + `${yearDeclination}` : "";
  if (months > 0) {
    ageString +=
      (years > 0 ? ` ${andString} ` : "") + `${months} ${monthDeclination}`;
  }

  return ageString.trim();
}

export const getGenderValue = (gender: string) => {
  return genderOptions.find((opt) => opt.value == gender)?.label;
};

export const getMedicalConditionValue = (medicalCondition: string) => {
  return medicalConditionOptions.find((opt) => opt.value == medicalCondition)
    ?.label;
};

export const getHospitalWardValue = (hospitalWard: string) => {
  return hospitalWardOptions.find((opt) => opt.value == hospitalWard)?.label;
};
