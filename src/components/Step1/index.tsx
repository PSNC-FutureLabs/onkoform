import { useFormContext } from "react-hook-form";
import { FormInputRadio } from "../form-components/FormInputRadio";
import {
  diseaseOptions,
  genderOptions,
  hospitalWardOptions,
} from "../../business";
import { FormInputDate } from "../form-components/FormInputDate";
import { FormInputDropdown } from "../form-components/FormInputDropdown";

export default function Step1() {
  const { control } = useFormContext();

  return (
    <>
      <FormInputDate name="birthday" control={control} label="Data urodzenia" />
      <FormInputRadio
        name="gender"
        label="Płeć"
        control={control}
        options={genderOptions}
      />
      <FormInputDropdown
        name="disease"
        control={control}
        label="Choroba"
        options={diseaseOptions}
      />
      <FormInputDropdown
        name="hospitalWard"
        control={control}
        label="Wiodący oddział szpitalny"
        options={hospitalWardOptions}
      />
    </>
  );
}
