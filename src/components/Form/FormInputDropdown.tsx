import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Controller } from "react-hook-form";
import { InputDropdownProps, DropdownOptionsType } from "../../business/types";
import { FormWarningText } from "./FormWarningText";

export const FormInputDropdown: React.FC<InputDropdownProps> = ({ name, control, label, options }) => {

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
						>
							<MenuItem disabled value="">
								<em>Wybierz...</em>
							</MenuItem>
							{options.map((option: DropdownOptionsType) => (
								<MenuItem key={option.value} value={option.value}>
									{option.label}
								</MenuItem>
							))}
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
