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
