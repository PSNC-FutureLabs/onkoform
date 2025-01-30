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

export type SupportedLocales = "pl" | "en" | "ua";
export const locales: Record<SupportedLocales, string> = {
  pl: "pl",
  en: "en",
  ua: "uk",
};


export function getAgeDescription(dateOfBirth: Date, language: SupportedLocales): string {
  const now = new Date();
  let years: number = now.getFullYear() - dateOfBirth.getFullYear();
  let months: number = now.getMonth() - dateOfBirth.getMonth();
  let days: number = now.getDate() - dateOfBirth.getDate();

  if (days < 0) {
    months--;
    const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 0);
    days += lastMonth.getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }
  if (language !== "en" && language !== "ua") {
    language = "pl";
  }

  function getYearDeclination(years: number, lang: SupportedLocales): string {
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

  function getMonthDeclination(months: number, lang: SupportedLocales): string {
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

  function getDayDeclination(days: number, lang: SupportedLocales): string {
    switch (lang) {
      case "en":
        return days === 1 ? "day" : "days";
      case "pl":
        if (days === 1) return "dzień";
        else if (days >= 2 && days <= 4) return "dni";
        else return "dni";
      case "ua":
        if (days === 1) return "день";
        else if (days >= 2 && days <= 4) return "дні";
        else return "днів";
    }
  }

  function getAndString(lang: SupportedLocales): string {
    switch (lang) {
      case "en":
        return "and";
      case "pl":
        return "i";
      case "ua":
        return "і";
    }
  }

  const yearDeclination = getYearDeclination(years, language as SupportedLocales);
  const monthDeclination = getMonthDeclination(months, language as SupportedLocales);
  const dayDeclination = getDayDeclination(days, language as SupportedLocales);
  const andString = getAndString(language as SupportedLocales);

  let ageString =
    years > 0 ? (years > 1 ? `${years} ` : "") + `${yearDeclination}` : "";
  if (months > 0) {
    ageString +=
      (years > 0 ? ` ${andString} ` : "") + `${months} ${monthDeclination}`;
  }
  if (months === 0 && days > 0) {
    ageString +=
      (years > 0 || months > 0 ? ` ${andString} ` : "") + `${days} ${dayDeclination}`;
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
