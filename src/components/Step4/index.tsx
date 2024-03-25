import { Alert, Grid } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { FormInputDate } from "../form-components/FormInputDate";
import { HgbUnits, NeutUnits } from "../../business";
import { MarkerRow } from "../form-components/MarkerRow";

export default function Step4() {
  const { control } = useFormContext();

  return (
    <>
      <Alert severity="info">
        W tym kroku należy podać wyniki z poprzedniego badania laboratoryjnego.
      </Alert>
      <FormInputDate
        name="examination-date2"
        control={control}
        label="Data wykonania badania"
      />
      <Grid container spacing={2}>
        <MarkerRow
          control={control}
          markerName="HGB2"
          label="HGB"
          options={HgbUnits}
        />
        <MarkerRow
          control={control}
          markerName="WBC2"
          label="WBC"
          options={["mmol/l"]}
        />
        <MarkerRow
          control={control}
          markerName="PLT2"
          label="PLT"
          options={["mmol/l"]}
        />
        <MarkerRow
          control={control}
          markerName="ALT2"
          label="ALT"
          options={["mmol/l"]}
        />
        <MarkerRow
          control={control}
          markerName="AST2"
          label="AST"
          options={["mmol/l"]}
        />
        <MarkerRow
          control={control}
          markerName="NEUT2"
          label="NEUT"
          options={NeutUnits}
        />
      </Grid>
    </>
  );
}
