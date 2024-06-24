import { Stack, Alert, Typography } from "@mui/material";
import { OverridableStringUnion } from "@mui/types";
import { AlertColor, AlertPropsColorOverrides } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { MedicalParameter, SymptomValues } from "../../business/types";

enum DiagnoseLevel {
	Unconclusive,
	OK,
	RepeatTestIn3Days,
	RepeatTestIn2Days,
	ConsultationNeeded,
	UrgentConsultationNeeded,
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
		level: DiagnoseLevel.OK,
		header: "Wyniki są w normie",
		body: "Zapoznaj się ze szczegółami poniżej",
		severity: "success",
	},
	{
		level: DiagnoseLevel.RepeatTestIn3Days,
		header: "Powtórz badanie za 3 dni",
		body: "Zapoznaj się ze szczegółami poniżej",
		severity: "warning",
	},
	{
		level: DiagnoseLevel.RepeatTestIn2Days,
		header: "Powtórz badanie za 2 dni",
		body: "Zapoznaj się ze szczegółami poniżej",
		severity: "warning",
	},
	{
		level: DiagnoseLevel.ConsultationNeeded,
		header: "Wyniki wymagają pilnej konsultacji z lekarzem.",
		body: "Zapoznaj się ze szczegółami poniżej",
		severity: "error",
	},
	{
		level: DiagnoseLevel.UrgentConsultationNeeded,
		header: "Wyniki wymagają pilnej konsultacji z lekarzem.",
		body: "Zapoznaj się ze szczegółami poniżej",
		severity: "error",
	},
];

export const Result = () => {
	const { getValues } = useFormContext();

	const hasSymptom = (symptoms: Array<SymptomValues>, symptom: SymptomValues) => symptoms.includes(symptom);

	function inRange(value: number, range: string): boolean {
		const trimmedRange = range.replace(/\s/g, "");

		const isLowerInclusive = trimmedRange.startsWith("[");
		const isUpperInclusive = trimmedRange.endsWith("]");

		const bounds = trimmedRange.substring(1, trimmedRange.length - 1).split(",");

		const lowerBound = parseFloat(bounds[0]);
		const upperBound = parseFloat(bounds[1]);

		if (isLowerInclusive) {
			if (isUpperInclusive) {
				return value >= lowerBound && value <= upperBound;
			} else {
				return value >= lowerBound && value < upperBound;
			}
		} else {
			if (isUpperInclusive) {
				return value > lowerBound && value <= upperBound;
			} else {
				return value > lowerBound && value < upperBound;
			}
		}
	}

	const updateDiagnoseLevel = (diagnoseLevel: DiagnoseLevel): DiagnoseLevel =>
		(calculatedDiagnoseLevel = Math.max(calculatedDiagnoseLevel, diagnoseLevel));

	let calculatedDiagnoseLevel: DiagnoseLevel = DiagnoseLevel.Unconclusive;

	const symptoms = getValues("symptoms");

	/* HGB */

	const HGBLatestValue = getValues("HGB").value;
	const HGBPreviousValue = getValues("HGB2").value;
	const mpHGB: MedicalParameter = new MedicalParameter(HGBLatestValue, "g/dl", HGBPreviousValue);

	const HGBLatestValueMgPrc = mpHGB.getActualValue("mg/%");
	const HGBPreviousValueMgPrc = HGBPreviousValue * 1;

	if (HGBLatestValueMgPrc) {
		if (HGBLatestValueMgPrc < 8.0) updateDiagnoseLevel(DiagnoseLevel.UrgentConsultationNeeded);
		else if (inRange(HGBLatestValueMgPrc, "[8.0, 9.0)")) {
			if (HGBLatestValueMgPrc < HGBPreviousValueMgPrc) updateDiagnoseLevel(DiagnoseLevel.RepeatTestIn2Days);
			else updateDiagnoseLevel(DiagnoseLevel.RepeatTestIn3Days);
		} else if (HGBLatestValueMgPrc >= 9.0) {
			if (HGBLatestValueMgPrc < HGBPreviousValueMgPrc) updateDiagnoseLevel(DiagnoseLevel.RepeatTestIn3Days);
			else updateDiagnoseLevel(DiagnoseLevel.OK);
		}
	}

	/* WBC */

	const WBCLatestValue = getValues("WBC").value;
	const WBCPreviousValue = getValues("WBC2").value;

	if (WBCLatestValue < 900) updateDiagnoseLevel(DiagnoseLevel.UrgentConsultationNeeded);
	else if (inRange(WBCLatestValue, "[1000, 1500)")) {
		if (WBCPreviousValue > WBCLatestValue) updateDiagnoseLevel(DiagnoseLevel.RepeatTestIn2Days); /* falling */
		else updateDiagnoseLevel(DiagnoseLevel.RepeatTestIn3Days); /* growing */
	} else if (WBCLatestValue >= 1500) {
		if (WBCPreviousValue > WBCLatestValue) updateDiagnoseLevel(DiagnoseLevel.RepeatTestIn2Days);
		else updateDiagnoseLevel(DiagnoseLevel.RepeatTestIn3Days);
	}

	/* Symptoms */

	if (hasSymptom(symptoms, "drowsiness-weakness")) updateDiagnoseLevel(DiagnoseLevel.Unconclusive);

	if (hasSymptom(symptoms, "vomiting")) updateDiagnoseLevel(DiagnoseLevel.ConsultationNeeded);
	if (hasSymptom(symptoms, "diarrhea")) updateDiagnoseLevel(DiagnoseLevel.ConsultationNeeded);

	if (hasSymptom(symptoms, "chills")) updateDiagnoseLevel(DiagnoseLevel.UrgentConsultationNeeded);
	if (hasSymptom(symptoms, "bleeding")) updateDiagnoseLevel(DiagnoseLevel.UrgentConsultationNeeded);
	if (hasSymptom(symptoms, "fresh-petechiae")) updateDiagnoseLevel(DiagnoseLevel.UrgentConsultationNeeded);
	if (hasSymptom(symptoms, "cyanosis-or-body-bruising")) updateDiagnoseLevel(DiagnoseLevel.UrgentConsultationNeeded);
	if (hasSymptom(symptoms, "severe-peripheral-edema")) updateDiagnoseLevel(DiagnoseLevel.UrgentConsultationNeeded);
	if (hasSymptom(symptoms, "seizures-unresponsiveness")) updateDiagnoseLevel(DiagnoseLevel.UrgentConsultationNeeded);
	if (hasSymptom(symptoms, "vision-disturbances")) updateDiagnoseLevel(DiagnoseLevel.UrgentConsultationNeeded);

	const diagnose =
		DiagnosesDefinitions.find((item) => item.level === calculatedDiagnoseLevel) ??
		DiagnosesDefinitions[DiagnoseLevel.Unconclusive];

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
