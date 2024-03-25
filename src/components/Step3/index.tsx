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
        <MarkerRow
          control={control}
          markerName="HGB"
          label="HGB"
          options={HgbUnits}
        />
        <MarkerRow
          control={control}
          markerName="WBC"
          label="WBC"
          options={["mmol/l"]}
        />
        <MarkerRow
          control={control}
          markerName="PLT"
          label="PLT"
          options={["mmol/l"]}
        />
        <MarkerRow
          control={control}
          markerName="ALT"
          label="ALT"
          options={["mmol/l"]}
        />
        <MarkerRow
          control={control}
          markerName="AST"
          label="AST"
          options={["mmol/l"]}
        />
        <MarkerRow
          control={control}
          markerName="NEUT"
          label="NEUT"
          options={NeutUnits}
        />
      </Grid>
    </>
  );
}
