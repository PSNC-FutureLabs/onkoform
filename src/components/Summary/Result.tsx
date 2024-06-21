import { Stack, Alert, Typography } from "@mui/material";
import { OverridableStringUnion } from "@mui/types";
import { AlertColor, AlertPropsColorOverrides } from "@mui/material";

type Diagnose = {
	header: string;
	body: string;
	severity: OverridableStringUnion<AlertColor, AlertPropsColorOverrides>;
};

type Diagnoses = Array<Diagnose>;

const DiagnosesDefinitions: Diagnoses = [
	{
		header: "Wyniki wymagają pilnej konsultacji z lekarzem.",
		body: "Prosimy o natychmiastowy kontakt z placówką medyczną w celu uzyskania profesjonalnej oceny i pomocy. Poinformuj lekarza o wyniku HGB, ALT oraz AST.",
		severity: "error"
	},
	{
		header: "Wyniki wymagają pilnej konsultacji z lekarzem.",
		body: "Prosimy o natychmiastowy kontakt z placówką medyczną w celu uzyskania profesjonalnej oceny i pomocy. Poinformuj lekarza o wyniku HGB, ALT oraz AST.",
		severity: "error"
	}
];

export const Result = () => {
	let diagnoseId : number = 0;

	diagnoseId++;
	
	return (
		<Stack>
			<Alert severity={DiagnosesDefinitions[diagnoseId].severity}>
				<Typography style={{ fontWeight: "500" }}>{DiagnosesDefinitions[diagnoseId].header}</Typography>
				{DiagnosesDefinitions[diagnoseId].body}
			</Alert>
		</Stack>
	);
};
