import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Controller } from "react-hook-form";
import { InputRadioProps } from "../../business/types";
import { FormWarningText } from "./FormWarningText";
import RequiredFormLabel from "./RequiredFormLabel";
import { Trans, useTranslation } from "react-i18next";

export const FormInputRadio: React.FC<InputRadioProps> = ({
  name,
  control,
  label,
  options,
}) => {
  const { t } = useTranslation();
  const generateRadioOptions = () => {
    return options.map((singleOption) => (
      <FormControlLabel
        value={singleOption.value}
        label={<Trans t={t}>{singleOption.label}</Trans>}
        key={singleOption.value}
        control={<Radio />}
      />
    ));
  };
  return (
    <FormControl component="fieldset" style={{ textAlign: "left" }}>
      <RequiredFormLabel>{label}</RequiredFormLabel>
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
              row
            >
              {generateRadioOptions()}
            </RadioGroup>
            <FormWarningText text={error?.message} />
          </>
        )}
      />
    </FormControl>
  );
};
