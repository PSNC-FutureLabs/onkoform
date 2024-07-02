import { Stack, Alert, Typography } from "@mui/material";
import { OverridableStringUnion } from "@mui/types";
import { AlertColor, AlertPropsColorOverrides } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { MedicalParameter, SymptomValues, inRange } from "../../business/types";

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

	const updateDiagnoseLevel = (diagnoseLevel: DiagnoseLevel): DiagnoseLevel =>
		(calculatedDiagnoseLevel = Math.max(calculatedDiagnoseLevel, diagnoseLevel));

	let calculatedDiagnoseLevel: DiagnoseLevel = DiagnoseLevel.Unconclusive;

	const symptoms = getValues("symptoms");
	const headacheRating = parseInt(getValues("headache-rating"));
	const painAnxietyRating = parseInt(getValues("pain-anxiety-rating"));

	/* HGB */

	const HGB: MedicalParameter = new MedicalParameter(
		getValues("HGB").value,
		getValues("HGB").unit,
		getValues("HGBprev").value,
		getValues("HGBprev").unit
	);

	if (inRange(HGB.in("mg/%"), "(0, 8.0)")) updateDiagnoseLevel(DiagnoseLevel.UrgentConsultationNeeded);
	else if (inRange(HGB.in("mg/%"), "[8.0, 9.0)")) {
		if (HGB.isDeclining()) updateDiagnoseLevel(DiagnoseLevel.RepeatTestIn2Days);
		else updateDiagnoseLevel(DiagnoseLevel.RepeatTestIn3Days);
	} else if (inRange(HGB.in("mg/%"), "[9, 100)")) {
		if (HGB.isDeclining()) updateDiagnoseLevel(DiagnoseLevel.RepeatTestIn3Days);
		else updateDiagnoseLevel(DiagnoseLevel.OK);
	}

	/* WBC */

	const WBCLatestValue = getValues("WBC").value;
	const WBCPreviousValue = getValues("WBCprev").value;

	if (WBCLatestValue < 900) updateDiagnoseLevel(DiagnoseLevel.UrgentConsultationNeeded);
	else if (inRange(WBCLatestValue, "[1000, 1500)")) {
		if (WBCPreviousValue > WBCLatestValue) updateDiagnoseLevel(DiagnoseLevel.RepeatTestIn2Days); /* falling */
		else updateDiagnoseLevel(DiagnoseLevel.RepeatTestIn3Days); /* growing */
	} else if (WBCLatestValue >= 1500) {
		if (WBCPreviousValue > WBCLatestValue) updateDiagnoseLevel(DiagnoseLevel.RepeatTestIn2Days);
		else updateDiagnoseLevel(DiagnoseLevel.RepeatTestIn3Days);
	}

	// calculatedDiagnoseLevel = DiagnoseLevel.Unconclusive;

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

	if (hasSymptom(symptoms, "headache")) {
		switch (headacheRating) {
			case 1:
			case 2:
				updateDiagnoseLevel(DiagnoseLevel.OK);
				break;
			case 3:
			case 4:
				updateDiagnoseLevel(DiagnoseLevel.ConsultationNeeded);
				break;
			case 5:
				updateDiagnoseLevel(DiagnoseLevel.UrgentConsultationNeeded);
				break;
		}
	}

	if (hasSymptom(symptoms, "pain-anxiety")) {
		switch (painAnxietyRating) {
			case 1:
			case 2:
				updateDiagnoseLevel(DiagnoseLevel.OK);
				break;
			case 3:
			case 4:
				updateDiagnoseLevel(DiagnoseLevel.ConsultationNeeded);
				break;
			case 5:
				updateDiagnoseLevel(DiagnoseLevel.UrgentConsultationNeeded);
				break;
		}
	}

	// console.log("calculatedDiagnoseLevel:", calculatedDiagnoseLevel);

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
