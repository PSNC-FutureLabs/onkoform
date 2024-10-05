import { Stack } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { medicalConditionOptions, genderOptions, hospitalWardOptions } from "../../business";
import { FormInputRadio } from "../Form/FormInputRadio";
import { FormInputDate } from "../Form/FormInputDate";
import { FormInputDropdown } from "../Form/FormInputDropdown";
import RequiredFormLabel from "../Form/RequiredFormLabel";

export default function Step1() {
	const { control } = useFormContext();

	return (
		<Stack spacing={2}>
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
			<Stack spacing={1}>
				<RequiredFormLabel>Data wykonania aktualnego badania</RequiredFormLabel>
				<FormInputDate name="actual-lab-test-date" control={control} />
			</Stack>
			<Stack spacing={1}>
				<RequiredFormLabel>Data wykonania poprzedniego badania</RequiredFormLabel>
				<FormInputDate name="previous-lab-test-date" control={control} />
			</Stack>
		</Stack>
	);
}
