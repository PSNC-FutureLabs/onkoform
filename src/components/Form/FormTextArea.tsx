import { TextField } from "@mui/material";
import { Control, Controller, FieldValues } from "react-hook-form";
import { Trans, useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
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
          helperText={<Trans t={t}>{error?.message}</Trans>}
          placeholder={placeholder}
          style={{ width: "100%" }}
        />
      )}
    />
  );
};
