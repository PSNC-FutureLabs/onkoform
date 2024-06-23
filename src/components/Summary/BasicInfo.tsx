import { Grid, Stack, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { getDiseaseValue, getGenderValue, getHospitalWardValue, getPolishAgeDescription } from "./helpers";
import { BasicInfoCard } from "./BasicInfoCard";

export const BasicInfo = () => {
	const { getValues } = useFormContext();

	const genderValue = getGenderValue(getValues("gender"));
	const ageDescription = getPolishAgeDescription(new Date(getValues("dateOfBirth")));
	const medicalCondition = getDiseaseValue(getValues("disease"));
	const hospitalWard = getHospitalWardValue(getValues("hospitalWard"));

	return (
		<Stack mt={3} pt={2} borderTop={1}>
			<Typography variant="h5" color="black">
				Podstawowe informacje
			</Typography>
			<Grid container spacing={2}>
				<BasicInfoCard label="Płeć" value={genderValue ?? ""} />
				<BasicInfoCard label="Wiek" value={ageDescription ?? ""} />
				<BasicInfoCard label="Schorzenie" value={medicalCondition ?? ""} />
				<BasicInfoCard label="Oddział" value={hospitalWard ?? ""} />
			</Grid>
		</Stack>
	);
};
