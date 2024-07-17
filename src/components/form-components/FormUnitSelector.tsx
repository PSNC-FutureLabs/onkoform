import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Controller } from "react-hook-form";
import { UnitSelectorProps, UnitType } from "../../business/types";
import { FormWarningText } from "./FormWarningText";

export const FormUnitSelector: React.FC<UnitSelectorProps> = ({ name, control, label, options }) => {
	const generateSingleOptions = () => {
		return options.map((option: UnitType) => {
			return (
				<MenuItem key={option} value={option}>
					{option}
				</MenuItem>
			);
		});
	};

	return (
		<FormControl size={"small"}>
			<InputLabel>{label}</InputLabel>
			<Controller
				render={({ field: { onChange, onBlur, ref, value }, fieldState: { error } }) => (
					<>
						<Select
							onChange={onChange}
							onBlur={onBlur}
							ref={ref}
							value={value}
							error={!!error}
							label={label}
							sx={{minWidth: 120}}
							variant="standard"
						>
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
