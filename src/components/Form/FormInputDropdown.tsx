import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Controller } from "react-hook-form";
import { InputDropdownProps, DropdownOptionsType } from "../../business/types";
import { FormWarningText } from "./FormWarningText";
import { Trans, useTranslation } from "react-i18next";

export const FormInputDropdown: React.FC<InputDropdownProps> = ({
  name,
  control,
  label,
  options,
}) => {
  const { t } = useTranslation();
  return (
    <FormControl size={"small"}>
      <InputLabel>{label}</InputLabel>
      <Controller
        render={({
          field: { onChange, onBlur, ref, value },
          fieldState: { error },
        }) => (
          <>
            <Select
              onChange={onChange}
              onBlur={onBlur}
              ref={ref}
              value={value}
              error={!!error}
              label={label}
              displayEmpty
            >
              <MenuItem disabled value="">
                <em>
                  <Trans t={t}>ns2:Select</Trans>...
                </em>
              </MenuItem>
              {options.map((option: DropdownOptionsType) => (
                <MenuItem key={option.value} value={option.value}>
                  <Trans t={t}>{option.label}</Trans>
                </MenuItem>
              ))}
            </Select>
            <FormWarningText text={error?.message} />
          </>
        )}
        control={control}
        name={name}
      />
    </FormControl>
  );
};
