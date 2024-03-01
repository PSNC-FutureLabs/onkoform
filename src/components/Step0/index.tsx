import {
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { Controller, useFormContext } from "react-hook-form";

export default function Step0() {
  const { control } = useFormContext();

  return (
    <Stack spacing={4} mt={4}>
      <Controller
        name={"birthday"}
        control={control}
        render={({ field: { onChange, value } }) => (
          <DatePicker value={value} onChange={onChange} />
        )}
      />
      <div style={{ textAlign: "left" }}>
        <FormLabel id="row-radio-buttons-group-label">Płeć</FormLabel>
        <RadioGroup
          row
          aria-labelledby="row-radio-buttons-group-label"
          name="row-radio-buttons-group">
          <FormControlLabel
            value="female"
            control={<Radio />}
            label="Kobieta"
          />
          <FormControlLabel
            value="male"
            control={<Radio />}
            label="Mężczyzna"
          />
          <FormControlLabel value="other" control={<Radio />} label="Inna" />
        </RadioGroup>
      </div>
      <div>
        <InputLabel id="disease-label">Choroba</InputLabel>
        <Select labelId="disease-label" id="disease">
          <MenuItem value={"disease1"}>Choroba nr 1</MenuItem>
          <MenuItem value={"disease2"}>Choroba nr 2</MenuItem>
          <MenuItem value={"disease3"}>Choroba nr 3</MenuItem>
        </Select>
      </div>
    </Stack>
  );
}
