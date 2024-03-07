import {
  Control,
  FieldValues,
  UseFormGetValues,
  UseFormSetValue,
} from "react-hook-form";
import { DropdownOptionsType, RadioOptionsType } from "../../business";

export type FormInputProps = {
  name: string;
  control: Control<FieldValues, any, FieldValues>;
  label: string;
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
