import { Grid, Stack, Typography } from "@mui/material";
import { BasicInfoCard } from "./BasicInfoCard";
import { useFormContext } from "react-hook-form";
import { symptomsOptions } from "../../business";
import { getFormattedNumber } from "../../helpers";

export const AlarmingSymptoms = () => {
	const { getValues } = useFormContext();

	const temperature = getValues("temperature");

	const symptoms = getValues("symptoms");
	const selectedSymptoms = symptomsOptions
		.filter((option) => symptoms.includes(option.value))
		.map(
			(option) =>
				option.label +
				(option.value == "headache" ? ` (${getValues("headache-rating")}/5)` : "") +
				(option.value == "pain-anxiety" ? ` (${getValues("pain-anxiety-rating")}/5)` : "") +
				(option.value == "mucosal-toxicities" ? ` (${getValues("mucosal-toxicities-rating")}/4)` : "")
		)

	return (
		<Stack mt={3} pt={2} borderTop="1px solid #EFF0F1">
			<Typography variant="h5" color="black" mb={2}>
				Niepokojące objawy
			</Typography>
			<Grid container spacing={2}>
				<BasicInfoCard label="Temperatura ciała" value={`${getFormattedNumber(temperature, 1)} °C`} />
				<BasicInfoCard
					label="Symptomy towarzyszące"
					value={selectedSymptoms}
				/>
			</Grid>
		</Stack>
	);
};
