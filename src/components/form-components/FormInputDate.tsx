import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Controller } from "react-hook-form";
import { FormInputProps } from "./FormInputProps";

export const FormInputDate = ({ name, control, label }: FormInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <DatePicker
          value={value}
          onChange={onChange}
          label={label}
          slotProps={{
            textField: {
              error: !!error,
              helperText: error?.message,
            },
          }}
        />
      )}
    />
  );
};
