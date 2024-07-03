import { FormLabel, Stack } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { FormInputRadio } from "../form-components/FormInputRadio";
import { medicalConditionOptions, genderOptions, hospitalWardOptions } from "../../business";
import { FormInputDate } from "../form-components/FormInputDate";
import { FormInputDropdown } from "../form-components/FormInputDropdown";

export default function Step1() {
	const { control } = useFormContext();

	return (
		<Stack spacing={4}>
			<Stack spacing={1}>
				<FormLabel>Data urodzenia</FormLabel>
				<FormInputDate name="dateOfBirth" control={control} />
			</Stack>
			<FormInputRadio name="gender" label="Płeć" control={control} options={genderOptions} />
			<Stack spacing={1}>
				<FormLabel>Schorzenie</FormLabel>
				<FormInputDropdown name="medicalCondition" control={control} options={medicalConditionOptions} />
			</Stack>
			<Stack spacing={1}>
				<FormLabel>Prowadzący oddział szpitalny</FormLabel>
				<FormInputDropdown name="hospitalWard" control={control} options={hospitalWardOptions} />
			</Stack>
		</Stack>
	);
}
