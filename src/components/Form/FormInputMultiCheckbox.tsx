import React, { useEffect, useState } from "react";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Stack,
  Tooltip,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Controller } from "react-hook-form";
import { mucosalToxicitiesLevels, symptomsOptions } from "../../business";
import {
  FormInputMultiCheckboxProps,
  MultiCheckboxOptionsType,
} from "../../business/types";
import { FormCustomRating } from "./FormCustomRating";
import { FormMucosalToxicitiesRating } from "./FormMucosalToxicitiesRating";
import { Trans, useTranslation } from "react-i18next";

export const FormInputMultiCheckbox: React.FC<FormInputMultiCheckboxProps> = ({
  name,
  control,
  setValue,
  getValues,
  label,
}) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const { t } = useTranslation();
  // we are handling the selection manually here
  const handleSelect = (value: string) => {
    const isPresent = selectedItems.indexOf(value) !== -1;
    if (isPresent) {
      const remaining = selectedItems.filter((item) => item !== value);
      setSelectedItems(remaining);
      if (value == "headache-rating") {
        setValue("headache-rating", 0);
      }
      if (value == "pain-anxiety-rating") {
        setValue("pain-anxiety-rating", 0);
      }
    } else {
      setSelectedItems((prevItems) => [...prevItems, value]);
    }
  };

  useEffect(() => {
    setSelectedItems(getValues(name));
  }, [getValues, name]);

  // we are setting form value manually here
  useEffect(() => {
    setValue(name, selectedItems);
  }, [name, selectedItems, setValue]);

  return (
    <FormControl
      size={"small"}
      variant={"outlined"}
      style={{ textAlign: "left" }}
    >
      <FormLabel component="legend">{label}</FormLabel>
      <Stack>
        {symptomsOptions.map((option: MultiCheckboxOptionsType) => {
          return (
            <Stack key={option.value}>
              <Stack direction="row" alignItems="center">
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
                  label={<Trans t={t}>{option.label}</Trans>}
                  sx={{ mr: 1 }}
                />
                {option.description && (
                  <Tooltip title={<Trans t={t}>{option.description}</Trans>}>
                    <InfoOutlinedIcon sx={{ cursor: "pointer" }} color="info" />
                  </Tooltip>
                )}
              </Stack>
              {selectedItems.includes("headache") &&
              option.value == "headache" ? (
                <FormCustomRating
                  name={`${option.value}-rating`}
                  control={control}
                />
              ) : null}
              {selectedItems.includes("pain-anxiety") &&
              option.value == "pain-anxiety" ? (
                <FormCustomRating
                  name={`${option.value}-rating`}
                  control={control}
                />
              ) : null}
              {selectedItems.includes("mucosal-toxicities") &&
              option.value == "mucosal-toxicities" ? (
                <FormMucosalToxicitiesRating
                  name={`${option.value}-rating`}
                  control={control}
                  options={mucosalToxicitiesLevels}
                />
              ) : null}
            </Stack>
          );
        })}
      </Stack>
    </FormControl>
  );
};
