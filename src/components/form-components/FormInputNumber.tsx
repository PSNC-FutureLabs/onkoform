import { Controller } from "react-hook-form";
import { FormInputProps } from "../../business/types";
import { TextField } from "@mui/material";

export const FormInputNumber = ({
  name,
  control,
  label,
  placeholder,
}: FormInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, onBlur, ref, value },
        fieldState: { error },
      }) => (
        <TextField
          value={value}
          onChange={(e) =>
            onChange(e.target.value === "" ? null : Number(e.target.value))
          }
          onBlur={onBlur}
          ref={ref}
          label={label}
          type="number"
          error={!!error}
          helperText={error?.message}
          placeholder={placeholder}
          style={{ width: "100%" }}
        />
      )}
    />
  );
};
