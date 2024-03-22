import { Alert, Grid } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { FormInputDate } from "../form-components/FormInputDate";
import { HgbUnits, NeutUnits } from "../../business";
import { MarkerRow } from "../form-components/MarkerRow";

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
      <Grid container spacing={2}>
        <MarkerRow control={control} markerName="HGB" options={HgbUnits} />
        <MarkerRow control={control} markerName="WBC" options={["mmol/l"]} />
        <MarkerRow control={control} markerName="PLT" options={["mmol/l"]} />
        <MarkerRow control={control} markerName="ALT" options={["mmol/l"]} />
        <MarkerRow control={control} markerName="AST" options={["mmol/l"]} />
        <MarkerRow control={control} markerName="NEUT" options={NeutUnits} />
      </Grid>
    </>
  );
}
