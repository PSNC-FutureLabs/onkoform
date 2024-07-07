import { useFormContext } from "react-hook-form";
import { Stack } from "@mui/material";
import { BasicInfo } from "./BasicInfo";
import { Result } from "./Result";
import { AlarmingSymptoms } from "./AlarmingSymptoms";
import { Morphology } from "./Morphology";
import {
	UnitType,
	SymptomValues,
	DiagnoseLevel,
	MedicalParameter,
	inRange,
	DiagnosesDefinitions,
	BloodMarkers,
	BloodMarkersNames,
} from "../../business/types";

export const Summary = () => {
	const { getValues } = useFormContext();

	const hasSymptom = (symptoms: Array<SymptomValues>, symptom: SymptomValues): boolean => symptoms.includes(symptom);
	const hasAnyOfSymptoms = (symptoms: Array<SymptomValues>, selectedSymptoms: Array<SymptomValues>): boolean =>
		selectedSymptoms.some((symptom) => symptoms.includes(symptom));

	const updateDiagnoseLevel = (diagnoseLevel: DiagnoseLevel): DiagnoseLevel =>
		(calculatedDiagnoseLevel = Math.max(calculatedDiagnoseLevel, diagnoseLevel));

	let calculatedDiagnoseLevel: DiagnoseLevel = DiagnoseLevel.Unconclusive;

	const symptoms = getValues("symptoms");
	const headacheRating = parseInt(getValues("headache-rating"));
	const painAnxietyRating = parseInt(getValues("pain-anxiety-rating"));

	function createMedicalParameter(name: BloodMarkersNames, baseUnit: UnitType): MedicalParameter {
		return new MedicalParameter(
			getValues(name).value,
			getValues(name).unit,
			baseUnit,
			new Date(getValues("actual-lab-test-date")),
			new MedicalParameter(
				getValues(`${name}prev`).value,
				getValues(`${name}prev`).unit,
				baseUnit,
				new Date(getValues("previous-lab-test-date"))
			)
		);
	}

	const bloodMarkers: BloodMarkers = {
		HGB: createMedicalParameter("HGB", "g/dl"),
		WBC: createMedicalParameter("WBC", "10^3/μl"),
		PLT: createMedicalParameter("PLT", "tys./mm³"),
		NEUT: createMedicalParameter("NEUT", "%/μl"),
		ALT: createMedicalParameter("ALT", "U/L"),
		AST: createMedicalParameter("AST", "U/L"),
	};

	/* HGB */

	if (inRange(bloodMarkers.HGB.in("g/dl"), "[0, 8.0)")) updateDiagnoseLevel(DiagnoseLevel.UrgentConsultationNeeded);
	else if (inRange(bloodMarkers.HGB.in("g/dl"), "[8.0, 9.0)")) {
		if (bloodMarkers.HGB.isDeclining()) updateDiagnoseLevel(DiagnoseLevel.RepeatTestIn2Days);
		else updateDiagnoseLevel(DiagnoseLevel.RepeatTestIn3Days);
	} else if (inRange(bloodMarkers.HGB.in("g/dl"), "[9, 100]")) {
		if (bloodMarkers.HGB.isDeclining()) updateDiagnoseLevel(DiagnoseLevel.RepeatTestIn3Days);
		else updateDiagnoseLevel(DiagnoseLevel.OK);
	}

	/* WBC */

	// calculatedDiagnoseLevel = DiagnoseLevel.Unconclusive;

	/* Symptoms */

	if (hasSymptom(symptoms, "drowsiness-weakness")) updateDiagnoseLevel(DiagnoseLevel.Unconclusive);

	if (hasAnyOfSymptoms(symptoms, ["vomiting", "diarrhea"])) updateDiagnoseLevel(DiagnoseLevel.ConsultationNeeded);

	if (
		hasAnyOfSymptoms(symptoms, [
			"chills",
			"bleeding",
			"fresh-petechiae",
			"cyanosis-or-body-bruising",
			"severe-peripheral-edema",
			"seizures-unresponsiveness",
			"vision-disturbances",
		])
	)
		updateDiagnoseLevel(DiagnoseLevel.UrgentConsultationNeeded);

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
		<Stack p={2} spacing={2}>
			<Result diagnose={diagnose} />
			<Morphology bloodMarkers={bloodMarkers} />
			<BasicInfo />
			<AlarmingSymptoms />
		</Stack>
	);
};
