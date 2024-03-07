import { Controller } from "react-hook-form";
import { FormInputProps } from "./FormInputProps";
import { TextField } from "@mui/material";

export const FormInputNumber = ({ name, control, label }: FormInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          value={value}
          onChange={onChange}
          label={label}
          type="number"
          error={!!error}
          helperText={error?.message}
          placeholder="wartość w °C"
        />
      )}
    />
  );
};
