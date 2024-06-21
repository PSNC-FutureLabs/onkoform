import { Stack, Alert, Typography } from "@mui/material";
import { OverridableStringUnion } from "@mui/types";
import { AlertColor, AlertPropsColorOverrides } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { symptomsOptions } from "../../business";

enum DiagnoseLevel {
	Unconclusive,
	NoAction,
	RepeatTestIn3Days,
	RepeatTest,
	Consultation,
	UrgentConsultation,
}

type Diagnose = {
	level: DiagnoseLevel;
	header: string;
	body: string;
	severity: OverridableStringUnion<AlertColor, AlertPropsColorOverrides>;
};

type Diagnoses = Array<Diagnose>;

const DiagnosesDefinitions: Diagnoses = [
	{
		level: DiagnoseLevel.Unconclusive,
		header: "Brak diagnozy",
		body: "Aplikacja nie jest w stanie określić wyniku. Skontaktuj się z dostawcą.",
		severity: "warning",
	},
	{
		level: DiagnoseLevel.NoAction,
		header: "Wyniki są w poprawne",
		body: "",
		severity: "success",
	},
	{
		level: DiagnoseLevel.RepeatTestIn3Days,
		header: "Wyniki wymagają uwagi",
		body: "Wykonaj ponowne badanie za 3 dni",
		severity: "info",
	},
	{
		level: DiagnoseLevel.RepeatTest,
		header: "Wyniki wymagają uwagi",
		body: "Wykonaj ponowne badanie w najbliższym terminie",
		severity: "warning",
	},
	{
		level: DiagnoseLevel.Consultation,
		header: "Wyniki wymagają uwagi",
		body: "Skonsultuj się z lekarzem z kliniki",
		severity: "warning",
	},
	{
		level: DiagnoseLevel.UrgentConsultation,
		header: "Wyniki wymagają pilnej konsultacji z lekarzem.",
		body: "Zapoznaj się ze szczegółami poniżej",
		severity: "error",
	},
];

export const Result = () => {
	const { getValues } = useFormContext();
	let calculatedDiagnoseLevel: DiagnoseLevel = 0;

	const symptoms = getValues("symptoms");

	// if (symptoms.includes("drowsiness-weakness")) calculatedDiagnoseLevel = DiagnoseLevel.Unconclusive;
	
	if (symptoms.includes("vomiting")) calculatedDiagnoseLevel = DiagnoseLevel.Consultation;
	if (symptoms.includes("diarrhea")) calculatedDiagnoseLevel = DiagnoseLevel.Consultation;

	if (symptoms.includes("chills")) calculatedDiagnoseLevel = DiagnoseLevel.UrgentConsultation;
	if (symptoms.includes("bleeding")) calculatedDiagnoseLevel = DiagnoseLevel.UrgentConsultation;
	if (symptoms.includes("fresh-petechiae")) calculatedDiagnoseLevel = DiagnoseLevel.UrgentConsultation;
	if (symptoms.includes("cyanosis-or-body-bruising")) calculatedDiagnoseLevel = DiagnoseLevel.UrgentConsultation;
	if (symptoms.includes("severe-peripheral-edema")) calculatedDiagnoseLevel = DiagnoseLevel.UrgentConsultation;
	if (symptoms.includes("seizures-unresponsiveness")) calculatedDiagnoseLevel = DiagnoseLevel.UrgentConsultation;
	if (symptoms.includes("vision-disturbances")) calculatedDiagnoseLevel = DiagnoseLevel.UrgentConsultation;

	const diagnose =
		DiagnosesDefinitions.find((item) => item.level === calculatedDiagnoseLevel) ?? DiagnosesDefinitions[DiagnoseLevel.Unconclusive];

	return (
		<Stack>
			<Alert severity={diagnose.severity}>
				<Typography style={{ fontWeight: "500" }}>{diagnose.header}</Typography>
				{diagnose.body}
			</Alert>
		</Stack>
	);
};
