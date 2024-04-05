import { TextField } from "@mui/material";
import { Control, Controller, FieldValues } from "react-hook-form";

type FormTextAreaProps = {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<FieldValues, any>;
  placeholder: string;
};

export const FormTextArea = ({
  name,
  control,
  placeholder,
}: FormTextAreaProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          value={value}
          onChange={onChange}
          multiline
          error={!!error}
          helperText={error?.message}
          placeholder={placeholder}
          style={{ width: "100%" }}
        />
      )}
    />
  );
};
