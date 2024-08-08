import { Grid, Stack, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { getMedicalConditionValue, getGenderValue, getHospitalWardValue, getPolishAgeDescription } from "./helpers";
import { BasicInfoCard } from "./BasicInfoCard";

export const BasicInfo = () => {
	const { getValues } = useFormContext();

	const genderValue = getGenderValue(getValues("gender"));
	const ageDescription = getPolishAgeDescription(new Date(getValues("dateOfBirth")));
	const medicalCondition = getMedicalConditionValue(getValues("medicalCondition"));
	const hospitalWard = getHospitalWardValue(getValues("hospitalWard"));

	return (
		<Stack mt={3} pt={2} borderTop="1px solid #EFF0F1">
			<Typography variant="h5" mb={2} color="#1F2023">
				Podstawowe informacje
			</Typography>
			<Grid container spacing={2}>
				<BasicInfoCard label="Wiek" value={ageDescription ?? ""} />
				<BasicInfoCard label="Płeć" value={genderValue ?? ""} />
				<BasicInfoCard label="Schorzenie" value={medicalCondition ?? ""} />
				<BasicInfoCard label="Oddział" value={hospitalWard ?? ""} />
			</Grid>
		</Stack>
	);
};
