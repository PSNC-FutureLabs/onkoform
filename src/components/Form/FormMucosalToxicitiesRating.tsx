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
import { Trans, useTranslation } from "react-i18next";

export const FormMucosalToxicitiesRating: React.FC<InputRadioProps> = ({
  name,
  control,
  label,
  options,
}) => {
  const { t } = useTranslation();
  const generateRadioOptions = () => {
    return options.map((option) => (
      <FormControlLabel
        value={option.value}
        label={<Trans t={t}>{option.label}</Trans>}
        key={option.label}
        control={<Radio />}
        sx={{ py: 1 }}
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
            >
              {generateRadioOptions()}
            </RadioGroup>
            {error ? <FormWarningText text={error?.message} /> : null}
          </>
        )}
      />
    </FormControl>
  );
};
