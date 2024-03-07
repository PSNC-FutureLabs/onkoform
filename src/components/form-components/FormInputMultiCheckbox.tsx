import React, { useEffect, useState } from "react";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Stack,
} from "@mui/material";
import { Controller } from "react-hook-form";
import { FormInputMultiCheckboxProps } from "./FormInputProps";
import { symptomsOptions } from "../../business";

export const FormInputMultiCheckbox: React.FC<FormInputMultiCheckboxProps> = ({
  name,
  control,
  setValue,
  getValues,
  label,
}) => {
  const [selectedItems, setSelectedItems] = useState<any>([]);
  // we are handling the selection manually here
  const handleSelect = (value: any) => {
    const isPresent = selectedItems.indexOf(value) !== -1;
    if (isPresent) {
      const remaining = selectedItems.filter((item: any) => item !== value);
      setSelectedItems(remaining.sort());
    } else {
      setSelectedItems((prevItems: any) =>
        [...prevItems, value].sort((a, b) => a - b)
      );
    }
  };

  useEffect(() => {
    setSelectedItems(getValues(name));
  }, []);

  // we are setting form value manually here
  useEffect(() => {
    setValue(name, selectedItems);
  }, [name, selectedItems, setValue]);

  return (
    <FormControl
      size={"small"}
      variant={"outlined"}
      style={{ textAlign: "left" }}>
      <FormLabel component="legend">{label}</FormLabel>
      <Stack>
        {symptomsOptions.map((option: any) => {
          return (
            <FormControlLabel
              control={
                <Controller
                  name={name}
                  render={() => {
                    return (
                      <Checkbox
                        checked={selectedItems.includes(option.value)}
                        onChange={() => handleSelect(option.value)}
                      />
                    );
                  }}
                  control={control}
                />
              }
              label={option.label}
              key={option.value}
            />
          );
        })}
      </Stack>
    </FormControl>
  );
};
