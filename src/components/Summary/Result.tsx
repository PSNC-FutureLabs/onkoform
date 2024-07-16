import { Stack, Alert, Typography } from "@mui/material";
import { Diagnosis } from "../../business/types";

export const Result = ({ diagnose }: { diagnose: Diagnosis }) => {
	return (
		<Stack>
			<Alert severity={diagnose.severity}>
				<Typography variant="h6" color="black">
					{diagnose.header}
				</Typography>
				{diagnose.body}
			</Alert>
		</Stack>
	);
};
