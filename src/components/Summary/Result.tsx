import { Stack, Alert, Typography } from "@mui/material";
import { Diagnose } from "../../business/types";

export const Result = ({ diagnose }: { diagnose: Diagnose }) => {
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
