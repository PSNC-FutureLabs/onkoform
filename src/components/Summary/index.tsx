import { Stack } from "@mui/material";
import { BasicInfo } from "./BasicInfo";
import { Result } from "./Result";
import { AlarmingSymptoms } from "./AlarmingSymptoms";
import { Morphology } from "./Morphology";

export const Summary = () => {
	return (
		<Stack px={2}>
			<Result />
			<Morphology />
			<BasicInfo />
			<AlarmingSymptoms />
		</Stack>
	);
};
