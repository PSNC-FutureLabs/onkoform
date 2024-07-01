import React, { useEffect, useState } from "react";
import { Checkbox, FormControl, FormControlLabel, FormLabel, Stack, Rating } from "@mui/material";
import { Controller } from "react-hook-form";
import { FormInputMultiCheckboxProps, MultiCheckboxOptionsType } from "../../business/types";
import { symptomsOptions } from "../../business";
import LooksOneOutlinedIcon from '@mui/icons-material/LooksOneOutlined';

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
			const remaining = selectedItems.filter((item) => item !== value);
			setSelectedItems(remaining);
			if (value == "others") {
				setValue("otherSymptoms", null);
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
		<FormControl size={"small"} variant={"outlined"} style={{ textAlign: "left" }}>
			<FormLabel component="legend">{label}</FormLabel>
			<Stack>
				{symptomsOptions.map((option: MultiCheckboxOptionsType) => {
					return (
						<Stack>
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
							{(selectedItems.includes("headache") || selectedItems.includes("pain-anxiety")) &&
							selectedItems.includes(option.value) ? (
								<Rating name="read-only" value={3} readOnly size="large" icon={<LooksOneOutlinedIcon />}/>
							) : null}
						</Stack>
					);
				})}
			</Stack>
		</FormControl>
	);
};
