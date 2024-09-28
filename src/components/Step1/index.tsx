import { Stack } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { FormInputRadio } from "../form-components/FormInputRadio";
import { medicalConditionOptions, genderOptions, hospitalWardOptions } from "../../business";
import { FormInputDate } from "../form-components/FormInputDate";
import { FormInputDropdown } from "../form-components/FormInputDropdown";
import RequiredFormLabel from "../form-components/RequiredFormLabel";

export default function Step1() {
	const { control } = useFormContext();

	return (
		<Stack spacing={4}>
			<Stack spacing={1}>
				<RequiredFormLabel>Data urodzenia</RequiredFormLabel>
				<FormInputDate name="dateOfBirth" control={control} />
			</Stack>
			<FormInputRadio name="gender" label="Płeć" control={control} options={genderOptions} />
			<Stack spacing={1}>
				<RequiredFormLabel>Schorzenie</RequiredFormLabel>
				<FormInputDropdown name="medicalCondition" control={control} options={medicalConditionOptions} />
			</Stack>
			<Stack spacing={1}>
				<RequiredFormLabel>Prowadzący oddział szpitalny</RequiredFormLabel>
				<FormInputDropdown name="hospitalWard" control={control} options={hospitalWardOptions} />
			</Stack>
		</Stack>
	);
}
