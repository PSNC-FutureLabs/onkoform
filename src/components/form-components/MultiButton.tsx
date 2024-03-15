import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useEffect, useState } from "react";
import { MultiButtonOptionType } from "../../business";
import { Controller, useFormContext } from "react-hook-form";

type MultiButtonProps = {
  name: string;
  options: MultiButtonOptionType[];
};

export const MultiButton = ({ options, name }: MultiButtonProps) => {
  const [alignment, setAlignment] = useState(options[0].value);
  const { control, getValues, setValue } = useFormContext();

  const handleChange = (
    _: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
    setValue(name, newAlignment);
  };

  // we need to retrive value from FormContext when user go back to this tab
  useEffect(() => {
    setAlignment(getValues(name));
  }, []);

  return (
    <Controller
      name={name}
      control={control}
      render={() => (
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Units">
          {options.map((opt) => (
            <ToggleButton value={opt.value} key={opt.value}>
              {opt.label}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      )}
    />
  );
};
