import { Grid } from "@mui/material";
import { FormInputNumber } from "./FormInputNumber";
import { UnitCard } from "./UnitCard";
import { MarkerRowProps } from "../../business/types";
import { MultiButton } from "./MultiButton";
import { makeCamelCase } from "../../utils/helpers";

export const MarkerRow = ({
  control,
  markerName,
  label,
  options,
}: MarkerRowProps) => {
  return (
    <>
      <Grid item xs={8}>
        <FormInputNumber name={markerName} control={control} label={label} />
      </Grid>
      <Grid item xs={4}>
        {options.length === 1 && <UnitCard unit={options[0]} />}
        {options.length > 1 && (
          <MultiButton
            name={`${makeCamelCase(markerName)}Unit`}
            options={options}
          />
        )}
      </Grid>
    </>
  );
};
