export const steps = [
  {
    id: "Step 1",
    name: "Informacje o pacjencie",
    fields: ["birthday", "gender", "disease", "hospitalWard"],
  },
  { id: "Step 2", name: "Niepokojące objawy", fields: [] },
  {
    id: "Step 3",
    name: "Aktualne badania",
    fields: [],
  },
  {
    id: "Step 4",
    name: "Poprzednie badania",
    fields: [],
  },
];

export const genderOptions: RadioOptionsType[] = [
  {
    label: "Kobieta",
    value: "female",
  },
  {
    label: "Mężczyzna",
    value: "male",
  },
  {
    label: "Inna",
    value: "other",
  },
];

export const diseaseOptions: DropdownOptionsType[] = [
  {
    label: "Choroba nr 1",
    value: "1",
  },
  {
    label: "Choroba nr 2",
    value: "2",
  },
];

export const hospitalWardOptions: DropdownOptionsType[] = [
  {
    label: "Odział szpitalny nr 1",
    value: "1",
  },
  {
    label: "Odział szpitalny nr 2",
    value: "2",
  },
];

export type RadioOptionsType = {
  label: string;
  value: string;
};

export type DropdownOptionsType = {
  label: string;
  value: string;
};
