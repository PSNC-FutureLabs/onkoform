import { Stack, Alert, Typography } from "@mui/material";
import { OverridableStringUnion } from "@mui/types";
import { AlertColor, AlertPropsColorOverrides } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { MedicalParameter, SymptomValues } from "../../business/types";

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
		if (HGBLatestValueMgPrc < 8.0) updateDiagnoseLevel(DiagnoseLevel.UrgentConsultation);
		else if (inRange(HGBLatestValueMgPrc, "[8.0, 9.0)")) {
			if (HGBLatestValueMgPrc < HGBPreviousValueMgPrc) updateDiagnoseLevel(DiagnoseLevel.RepeatTest);
			else updateDiagnoseLevel(DiagnoseLevel.RepeatTestIn3Days);
		} else if (HGBLatestValueMgPrc >= 9.0) {
			if (HGBLatestValueMgPrc < HGBPreviousValueMgPrc) updateDiagnoseLevel(DiagnoseLevel.RepeatTestIn3Days);
			else updateDiagnoseLevel(DiagnoseLevel.NoAction);
		}
	}
	/* WBC */

	const WBCLatestValue = getValues("WBC").value;
	const WBCPreviousValue = getValues("WBC2").value;

	if (WBCLatestValue < 900) updateDiagnoseLevel(DiagnoseLevel.UrgentConsultation);
	else if (inRange(WBCLatestValue, "[1000, 1500)")) {
		if (WBCPreviousValue > WBCLatestValue) updateDiagnoseLevel(DiagnoseLevel.RepeatTest); /* falling */
		else updateDiagnoseLevel(DiagnoseLevel.RepeatTestIn3Days); /* growing */
	} else if (WBCLatestValue >= 1500) {
		if (WBCPreviousValue > WBCLatestValue) updateDiagnoseLevel(DiagnoseLevel.RepeatTest);
		else updateDiagnoseLevel(DiagnoseLevel.RepeatTestIn3Days);
	}

	/* Symptoms */

	if (hasSymptom(symptoms, "drowsiness-weakness")) updateDiagnoseLevel(DiagnoseLevel.Unconclusive);

	if (hasSymptom(symptoms, "vomiting")) updateDiagnoseLevel(DiagnoseLevel.Consultation);
	if (hasSymptom(symptoms, "diarrhea")) updateDiagnoseLevel(DiagnoseLevel.Consultation);

	if (hasSymptom(symptoms, "chills")) updateDiagnoseLevel(DiagnoseLevel.UrgentConsultation);
	if (hasSymptom(symptoms, "bleeding")) updateDiagnoseLevel(DiagnoseLevel.UrgentConsultation);
	if (hasSymptom(symptoms, "fresh-petechiae")) updateDiagnoseLevel(DiagnoseLevel.UrgentConsultation);
	if (hasSymptom(symptoms, "cyanosis-or-body-bruising")) updateDiagnoseLevel(DiagnoseLevel.UrgentConsultation);
	if (hasSymptom(symptoms, "severe-peripheral-edema")) updateDiagnoseLevel(DiagnoseLevel.UrgentConsultation);
	if (hasSymptom(symptoms, "seizures-unresponsiveness")) updateDiagnoseLevel(DiagnoseLevel.UrgentConsultation);
	if (hasSymptom(symptoms, "vision-disturbances")) updateDiagnoseLevel(DiagnoseLevel.UrgentConsultation);

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
