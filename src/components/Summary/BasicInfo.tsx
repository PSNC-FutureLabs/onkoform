import { Grid, Stack, Typography } from "@mui/material";
import { BasicInfoCard } from "./BasicInfoCard";
import { useFormContext } from "react-hook-form";
import { getAgeValue, getDiseaseValue, getGenderValue, getHospitalWardValue } from "./helpers";

export const BasicInfo = () => {
	const { getValues } = useFormContext();

	const genderValue = getGenderValue(getValues("gender"));
	const ageValue = getAgeValue(getValues("birthday"));
	const diseaseValue = getDiseaseValue(getValues("disease"));
	const wardValue = getHospitalWardValue(getValues("hospitalWard"));

	return (
		<Stack mt={3} pt={2} borderTop={1}>
			<Typography variant="h5" color="black">
				Podstawowe informacje
			</Typography>
			<Grid container spacing={2}>
				<BasicInfoCard label="Płeć" value={genderValue ?? ""} />
				<BasicInfoCard label="Wiek" value={ageValue ?? ""} />
				<BasicInfoCard label="Choroba" value={diseaseValue ?? ""} />
				<BasicInfoCard label="Oddział" value={wardValue ?? ""} />
			</Grid>
		</Stack>
	);
};
