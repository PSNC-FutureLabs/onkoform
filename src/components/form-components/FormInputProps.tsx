import { DropdownOptionsType, RadioOptionsType } from "../../business";

export type FormInputProps = {
  name: string;
  control: any;
  label: string;
  setValue?: any;
};

export type InputRadioProps = FormInputProps & {
  options: RadioOptionsType[];
};
export type InputDropdownProps = FormInputProps & {
  options: DropdownOptionsType[];
};
