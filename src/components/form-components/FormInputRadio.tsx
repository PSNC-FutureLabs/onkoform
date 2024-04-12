import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Controller } from "react-hook-form";
import { InputRadioProps } from "../../business/types";
import { FormWarningText } from "./FormWarningText";

export const FormInputRadio: React.FC<InputRadioProps> = ({
  name,
  control,
  label,
  options,
}) => {
  const generateRadioOptions = () => {
    return options.map((singleOption) => (
      <FormControlLabel
        value={singleOption.value}
        label={singleOption.label}
        key={singleOption.label}
        control={<Radio />}
      />
    ));
  };
  return (
    <FormControl component="fieldset" style={{ textAlign: "left" }}>
      <FormLabel component="legend">{label}</FormLabel>
      <Controller
        name={name}
        control={control}
        render={({
          field: { onChange, onBlur, ref, value },
          fieldState: { error },
        }) => (
          <>
            <RadioGroup
              value={value}
              onChange={onChange}
              ref={ref}
              onBlur={onBlur}
              row>
              {generateRadioOptions()}
            </RadioGroup>
            {error ? <FormWarningText text={error?.message} /> : null}
          </>
        )}
      />
    </FormControl>
  );
};
