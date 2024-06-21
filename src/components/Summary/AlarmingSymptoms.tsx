import { Grid, Stack, Typography } from "@mui/material";
import { BasicInfoCard } from "./BasicInfoCard";
import { useFormContext } from "react-hook-form";
import { symptomsOptions } from "../../business";

export const AlarmingSymptoms = () => {
	const { getValues } = useFormContext();

	const symptoms = getValues("symptoms");
	const symptomsText = symptomsOptions
		.filter((option) => symptoms.includes(option.value))
		.map((option) => option.label)
		.join(", ");

	return (
		<Stack mt={3} pt={2} borderTop={1}>
			<Typography variant="h5" color="black">
				Niepokojące objawy
			</Typography>
			<Grid container spacing={2}>
				<BasicInfoCard label="Temperatura ciała" value={getValues("temperature") + " °C"} />
				<BasicInfoCard label="Symptomy towarzyszące" value={symptomsText} />
			</Grid>
		</Stack>
	);
};
