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

	let diagnosisStep: string = "";

	const diagnosisLog: Array<string> = [];

	const hasSymptom = (symptoms: Array<SymptomValues>, symptom: SymptomValues): boolean => symptoms.includes(symptom);
	const hasAnyOfSymptoms = (symptoms: Array<SymptomValues>, selectedSymptoms: Array<SymptomValues>): boolean =>
		selectedSymptoms.some((symptom) => symptoms.includes(symptom));

	const updateDiagnoseLevel = (diagnoseLevel: DiagnoseLevel): void => {
		const currentDiagnosisLevel = calculatedDiagnoseLevel;
		calculatedDiagnoseLevel = Math.max(calculatedDiagnoseLevel, diagnoseLevel);
		diagnosisLog.push(`${diagnosisStep}: ${currentDiagnosisLevel} --(${diagnoseLevel})--> ${calculatedDiagnoseLevel}`);
	};

	let calculatedDiagnoseLevel: DiagnoseLevel = DiagnoseLevel.Unconclusive;

	const temperature = getValues("temperature");
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
		NEUT: createMedicalParameter("NEUT", "tys./μl"),
		ALT: createMedicalParameter("ALT", "U/l"),
		AST: createMedicalParameter("AST", "U/l"),
	};

	/* HGB */

	diagnosisStep = "HGB";

	if (inRange(bloodMarkers.HGB.in("g/dl"), "[0, 8.0)")) updateDiagnoseLevel(DiagnoseLevel.UrgentConsultationNeeded);
	else if (inRange(bloodMarkers.HGB.in("g/dl"), "[8.0, 9.0)")) {
		if (bloodMarkers.HGB.isDeclining()) updateDiagnoseLevel(DiagnoseLevel.RepeatTestIn2Days);
		else updateDiagnoseLevel(DiagnoseLevel.RepeatTestIn3Days);
	} else if (inRange(bloodMarkers.HGB.in("g/dl"), "[9, 100]")) {
		if (bloodMarkers.HGB.isDeclining()) updateDiagnoseLevel(DiagnoseLevel.RepeatTestIn3Days);
		else updateDiagnoseLevel(DiagnoseLevel.OK);
	}

	/* WBC */

	diagnosisStep = "WBC";

	if (inRange(bloodMarkers.WBC.in("10^3/μl"), "[0, 1.0)"))
		updateDiagnoseLevel(DiagnoseLevel.UrgentConsultationNeeded);
	else if (inRange(bloodMarkers.WBC.in("10^3/μl"), "[1.0, 1.5)")) {
		if (bloodMarkers.WBC.isDeclining()) updateDiagnoseLevel(DiagnoseLevel.RepeatTestIn2Days);
		else updateDiagnoseLevel(DiagnoseLevel.RepeatTestIn3Days);
	} else if (inRange(bloodMarkers.WBC.in("10^3/μl"), "[1.5, 100]")) {
		if (bloodMarkers.WBC.isDeclining()) updateDiagnoseLevel(DiagnoseLevel.RepeatTestIn3Days);
		else updateDiagnoseLevel(DiagnoseLevel.OK);
	}

	/* PLT */

	diagnosisStep = "PLT";

	if (inRange(bloodMarkers.PLT.in("tys./mm³"), "[0, 25)"))
		updateDiagnoseLevel(DiagnoseLevel.UrgentConsultationNeeded);
	if (inRange(bloodMarkers.PLT.in("tys./mm³"), "[25, 35)")) updateDiagnoseLevel(DiagnoseLevel.RepeatTestIn2Days);
	if (inRange(bloodMarkers.PLT.in("tys./mm³"), "[35, 50)")) updateDiagnoseLevel(DiagnoseLevel.RepeatTestIn3Days);
	if (inRange(bloodMarkers.PLT.in("tys./mm³"), "[50, 1000)")) updateDiagnoseLevel(DiagnoseLevel.OK);

	/* NEUT */

	diagnosisStep = "NEUT";

	if (inRange(bloodMarkers.NEUT.in("tys./μl"), "[0, 0.5)") && bloodMarkers.NEUT.isDeclining())
		updateDiagnoseLevel(DiagnoseLevel.UrgentConsultationNeeded);
	if (inRange(bloodMarkers.NEUT.in("tys./μl"), "[0.5, 100)") && bloodMarkers.NEUT.isGrowing())
		updateDiagnoseLevel(DiagnoseLevel.RepeatTestIn3Days);

	/* ALT */

	diagnosisStep = "ALT";

	if (bloodMarkers.ALT.getValue() && bloodMarkers.ALT.reference?.getValue()) {
		/* check if increased by 50% or more */
		if ((bloodMarkers.ALT.in("U/l") ?? 0) / (bloodMarkers.ALT.reference?.in("U/l") ?? 1) - 1 >= 0.5)
			updateDiagnoseLevel(DiagnoseLevel.ConsultationNeeded);
	}

	/* AST */

	diagnosisStep = "AST";

	if (bloodMarkers.AST.getValue() && bloodMarkers.AST.reference?.getValue()) {
		/* check if increased by 50% or more */
		if ((bloodMarkers.AST.in("U/l") ?? 0) / (bloodMarkers.AST.reference?.in("U/l") ?? 1) - 1 >= 0.5)
			updateDiagnoseLevel(DiagnoseLevel.ConsultationNeeded);
	}

	/* Temperature */

	diagnosisStep = "Temperature";

	if (temperature >= 38.0) updateDiagnoseLevel(DiagnoseLevel.ConsultationNeeded);

	/* Symptoms */

	diagnosisStep = "Symptoms";

	if (hasAnyOfSymptoms(symptoms, ["vomiting", "diarrhea"])) updateDiagnoseLevel(DiagnoseLevel.ConsultationNeeded);

	if (
		hasAnyOfSymptoms(symptoms, [
			"bleeding",
			"chills",
			"cyanosis-or-body-bruising",
			"drowsiness-weakness",
			"fresh-petechiae",
			"seizures-unresponsiveness",
			"severe-peripheral-edema",
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

	const diagnose =
		DiagnosesDefinitions.find((item) => item.level === calculatedDiagnoseLevel) ??
		DiagnosesDefinitions[DiagnoseLevel.Unconclusive];

	if (window.location.hostname === "localhost" && diagnosisLog.length > 0) {
		console.table(diagnosisLog);
	}

	return (
		<Stack p={2} spacing={2}>
			<Result diagnose={diagnose} />
			<Morphology bloodMarkers={bloodMarkers} />
			<BasicInfo />
			<AlarmingSymptoms />
		</Stack>
	);
};
