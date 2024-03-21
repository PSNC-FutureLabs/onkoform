import { useFormContext } from "react-hook-form";
import { FormInputNumber } from "../form-components/FormInputNumber";
import { FormInputRadio } from "../form-components/FormInputRadio";
import { measurementPlaceOptions } from "../../business";
import { FormInputMultiCheckbox } from "../form-components/FormInputMultiCheckbox";

export default function Step2() {
  const { control, setValue, getValues } = useFormContext();

  return (
    <>
      <FormInputNumber
        name="temperature"
        control={control}
        label="Pomiar temperatury ciała"
        placeholder="wartość w °C"
      />
      <FormInputRadio
        control={control}
        name="measurement-place"
        label="Miejsce pomiaru temperatury"
        options={measurementPlaceOptions}
      />
      <FormInputMultiCheckbox
        control={control}
        getValues={getValues}
        setValue={setValue}
        name={"symptoms"}
        label={"Symptomy towarzyszące"}
      />
    </>
  );
}
