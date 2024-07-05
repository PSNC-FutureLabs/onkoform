import { Grid, Stack, Typography } from "@mui/material";
import { BasicInfoCard } from "./BasicInfoCard";
import { useFormContext } from "react-hook-form";
import { symptomsOptions } from "../../business";

export const AlarmingSymptoms = () => {
	const { getValues } = useFormContext();

	const symptoms = getValues("symptoms");
	const symptomsText = symptomsOptions
		.filter((option) => symptoms.includes(option.value))
		.map(
			(option) =>
				option.label +
				(option.value == "headache" ? ` (${getValues("headache-rating")}/5)` : "") +
				(option.value == "pain-anxiety" ? ` (${getValues("pain-anxiety-rating")}/5)` : "") + 
				(option.value == "mucosal-toxicities" ? ` (${getValues("mucosal-toxicities-rating")}/4)` : "")
		)
		.join(", ");

	return (
		<Stack mt={3} pt={2} borderTop={1}>
			<Typography variant="h5" color="black">
				Niepokojące objawy
			</Typography>
			<Grid container spacing={2}>
				<BasicInfoCard label="Temperatura ciała" value={`${getValues("temperature")} °C`} />
				<BasicInfoCard
					label="Symptomy towarzyszące"
					value={symptomsText.length === 0 ? "brak" : symptomsText}
				/>
			</Grid>
		</Stack>
	);
};
