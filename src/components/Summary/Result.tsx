import { Stack, Alert, Typography } from "@mui/material";
import { OverridableStringUnion } from "@mui/types";
import { AlertColor, AlertPropsColorOverrides } from "@mui/material";
import { useFormContext } from "react-hook-form";

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

	const updateCalculatedDiagnoseLevel = (diagnoseLevel: DiagnoseLevel) =>
		(calculatedDiagnoseLevel = Math.max(calculatedDiagnoseLevel, diagnoseLevel));

	let calculatedDiagnoseLevel: DiagnoseLevel = DiagnoseLevel.Unconclusive;

	const symptoms = getValues("symptoms");

	const HGB = getValues("HGB").value;
	const HGB2 = getValues("HGB2").value;

	const HGBLastValueMgPrc = HGB * 1;
	const HGBFirstValueMgPrc = HGB2 * 1;

	if (HGBLastValueMgPrc < 8.0) updateCalculatedDiagnoseLevel(DiagnoseLevel.UrgentConsultation);
	if (HGBLastValueMgPrc >= 8.0 && HGBLastValueMgPrc < 9.0) {
		if (HGBLastValueMgPrc < HGBFirstValueMgPrc) updateCalculatedDiagnoseLevel(DiagnoseLevel.RepeatTest);
		else updateCalculatedDiagnoseLevel(DiagnoseLevel.RepeatTestIn3Days);
	}
	if (HGBLastValueMgPrc >= 9.0) {
		if (HGBLastValueMgPrc < HGBFirstValueMgPrc) updateCalculatedDiagnoseLevel(DiagnoseLevel.RepeatTestIn3Days);
		else updateCalculatedDiagnoseLevel(DiagnoseLevel.NoAction);
	}

	// if (symptoms.includes("drowsiness-weakness")) calculatedDiagnoseLevel = DiagnoseLevel.Unconclusive;

	if (symptoms.includes("vomiting")) updateCalculatedDiagnoseLevel(DiagnoseLevel.Consultation);
	if (symptoms.includes("diarrhea")) updateCalculatedDiagnoseLevel(DiagnoseLevel.Consultation);

	if (symptoms.includes("chills")) updateCalculatedDiagnoseLevel(DiagnoseLevel.UrgentConsultation);
	if (symptoms.includes("bleeding")) updateCalculatedDiagnoseLevel(DiagnoseLevel.UrgentConsultation);
	if (symptoms.includes("fresh-petechiae")) updateCalculatedDiagnoseLevel(DiagnoseLevel.UrgentConsultation);
	if (symptoms.includes("cyanosis-or-body-bruising")) updateCalculatedDiagnoseLevel(DiagnoseLevel.UrgentConsultation);
	if (symptoms.includes("severe-peripheral-edema")) updateCalculatedDiagnoseLevel(DiagnoseLevel.UrgentConsultation);
	if (symptoms.includes("seizures-unresponsiveness")) updateCalculatedDiagnoseLevel(DiagnoseLevel.UrgentConsultation);
	if (symptoms.includes("vision-disturbances")) updateCalculatedDiagnoseLevel(DiagnoseLevel.UrgentConsultation);

	const diagnose =
		DiagnosesDefinitions.find((item) => item.level === calculatedDiagnoseLevel) ??
		DiagnosesDefinitions[DiagnoseLevel.Unconclusive];

	return (
		<Stack>
			<Alert severity={diagnose.severity}>
				<Typography style={{ fontWeight: "500" }}>{diagnose.header}</Typography>
				{diagnose.body}
			</Alert>
		</Stack>
	);
};
