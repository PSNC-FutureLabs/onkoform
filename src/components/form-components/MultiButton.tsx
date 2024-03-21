import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { UnitType } from "../../business/types";

type MultiButtonProps = {
  name: string;
  options: UnitType[];
};

export const MultiButton = ({ options, name }: MultiButtonProps) => {
  const [alignment, setAlignment] = useState(options[0]);
  const { control, getValues, setValue } = useFormContext();

  const handleChange = (
    _: React.MouseEvent<HTMLElement>,
    newAlignment: UnitType
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
          aria-label="Units"
          style={{
            boxShadow:
              "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
          }}>
          {options.map((opt) => (
            <ToggleButton
              value={opt}
              key={opt}
              style={{ height: "50px", minWidth: "75px" }}>
              {opt}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      )}
    />
  );
};
