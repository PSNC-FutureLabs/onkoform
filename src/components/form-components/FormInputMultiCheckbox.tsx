import React, { useEffect, useState } from "react";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Stack,
} from "@mui/material";
import { Controller } from "react-hook-form";
import {
  FormInputMultiCheckboxProps,
  MultiCheckboxOptionsType,
} from "../../business/types";
import { symptomsOptions } from "../../business";

export const FormInputMultiCheckbox: React.FC<FormInputMultiCheckboxProps> = ({
  name,
  control,
  setValue,
  getValues,
  label,
}) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  // we are handling the selection manually here
  const handleSelect = (value: string) => {
    const isPresent = selectedItems.indexOf(value) !== -1;
    if (isPresent) {
      const remaining = selectedItems
        .filter((item) => item !== value)
        .toSorted((a, b) => a.localeCompare(b));
      setSelectedItems(remaining);
    } else {
      setSelectedItems((prevItems) =>
        [...prevItems, value].sort((a, b) => a.localeCompare(b))
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
        {symptomsOptions.map((option: MultiCheckboxOptionsType) => {
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
