import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Controller } from "react-hook-form";
import { InputDropdownProps } from "./FormInputProps";
import { FormWarningText } from "./FormWarningText";

export const FormInputDropdown: React.FC<InputDropdownProps> = ({
  name,
  control,
  label,
  options,
}) => {
  const generateSingleOptions = () => {
    return options.map((option: any) => {
      return (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      );
    });
  };

  return (
    <FormControl size={"small"}>
      <InputLabel>{label}</InputLabel>
      <Controller
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <Select onChange={onChange} value={value} error={!!error}>
              {generateSingleOptions()}
            </Select>
            {error ? <FormWarningText text={error?.message} /> : null}
          </>
        )}
        control={control}
        name={name}
      />
    </FormControl>
  );
};
