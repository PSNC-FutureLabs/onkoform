import { Alert } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { FormInputDate } from "../form-components/FormInputDate";
import { MultiButton } from "../form-components/MultiButton";
import { HGBunits } from "../../business";

export default function Step3() {
  const { control } = useFormContext();

  return (
    <>
      <Alert severity="info">
        W tym kroku należy podać najnowsze wyniki badań.
        <br />W kolejnym kroku podasz wyniki z poprzedniego badania
        laboratoryjnego.
      </Alert>
      <FormInputDate
        name="examination-date"
        control={control}
        label="Data wykonania badania"
      />
      <MultiButton name="HGBunits" options={HGBunits} />
    </>
  );
}
