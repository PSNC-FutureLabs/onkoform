import { Stack, Alert, Typography } from "@mui/material";

export const Result = () => {
	return (
		<Stack>
			<Alert severity="error" style={{ textAlign: "left" }}>
				<Typography style={{ fontWeight: "500" }}>Wyniki wymagają pilnej konsultacji z lekarzem.</Typography>
				Prosimy o natychmiastowy kontakt z placówką medyczną w celu uzyskania profesjonalnej oceny i pomocy.
				Poinformuj lekarza o wyniku HGB, ALT oraz AST.
			</Alert>
		</Stack>
	);
};
