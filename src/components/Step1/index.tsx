import { Grid, Stack } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { FormInputRadio } from "../form-components/FormInputRadio";
import { diseaseOptions, genderOptions, hospitalWardOptions } from "../../business";
import { FormInputDate } from "../form-components/FormInputDate";
import { FormInputDropdown } from "../form-components/FormInputDropdown";

export default function Step1() {
	const { control } = useFormContext();

	return (
		<Grid item xs={12}>
			<Stack spacing={4}>
				<FormInputDate name="dateOfBirth" control={control} label="Data urodzenia" />
				<FormInputRadio name="gender" label="Płeć" control={control} options={genderOptions} />
				<FormInputDropdown name="disease" control={control} label="Schorzenie" options={diseaseOptions} />
				<FormInputDropdown
					name="hospitalWard"
					control={control}
					label="Prowadzący oddział szpitalny"
					options={hospitalWardOptions}
				/>
			</Stack>
		</Grid>
	);
}
