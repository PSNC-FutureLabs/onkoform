import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Controller } from "react-hook-form";
import { FormInputProps } from "../../business/types";
import { Trans, useTranslation } from "react-i18next";

export const FormInputDate = ({ name, control, label }: FormInputProps) => {
  const { t } = useTranslation();
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value, onBlur, ref },
        fieldState: { error },
      }) => (
        <DatePicker
          disableFuture
          value={value}
          onChange={onChange}
          ref={ref}
          label={label ?? ""}
          slotProps={{
            textField: {
              error: !!error,
              helperText: error ? <Trans t={t}>{error?.message}</Trans> : " ",
              onBlur,
            },
          }}
        />
      )}
    />
  );
};
