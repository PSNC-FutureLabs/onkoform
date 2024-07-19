import { useFormContext } from "react-hook-form";
import { Stack } from "@mui/material";
import { BasicInfo } from "./BasicInfo";
import { Result } from "./Result";
import { AlarmingSymptoms } from "./AlarmingSymptoms";
import { Morphology } from "./Morphology";
import {
	UnitType,
	SymptomValues,
	DiagnosisLevel,
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

	const updateDiagnosisLevel = (diagnosisLevel: DiagnosisLevel): void => {
		const currentDiagnosisLevel = calculatedDiagnosisLevel;
		calculatedDiagnosisLevel = Math.max(calculatedDiagnosisLevel, diagnosisLevel);
		diagnosisLog.push(
			`${diagnosisStep}: ${currentDiagnosisLevel} --(${diagnosisLevel})--> ${calculatedDiagnosisLevel}`
		);
	};

	let calculatedDiagnosisLevel: DiagnosisLevel = DiagnosisLevel.Unconclusive;

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
		NEUT: createMedicalParameter("NEUT", "K/μl"),
		ALT: createMedicalParameter("ALT", "U/l"),
		AST: createMedicalParameter("AST", "U/l"),
	};

	/* HGB */

	diagnosisStep = "HGB";

	if (inRange(bloodMarkers.HGB.in("g/dl"), "[0, 8.0)")) updateDiagnosisLevel(DiagnosisLevel.UrgentConsultationNeeded);
	else if (inRange(bloodMarkers.HGB.in("g/dl"), "[8.0, 9.0)")) {
		if (bloodMarkers.HGB.isFalling()) updateDiagnosisLevel(DiagnosisLevel.RepeatTestIn2Days);
		else updateDiagnosisLevel(DiagnosisLevel.RepeatTestIn3Days);
	} else if (inRange(bloodMarkers.HGB.in("g/dl"), "[9, 100]")) {
		if (bloodMarkers.HGB.isFalling()) updateDiagnosisLevel(DiagnosisLevel.RepeatTestIn3Days);
		else updateDiagnosisLevel(DiagnosisLevel.OK);
	}

	/* WBC */

	diagnosisStep = "WBC";

	if (inRange(bloodMarkers.WBC.in("10^3/μl"), "[0, 1.0)"))
		updateDiagnosisLevel(DiagnosisLevel.UrgentConsultationNeeded);
	else if (inRange(bloodMarkers.WBC.in("10^3/μl"), "[1.0, 1.5)")) {
		if (bloodMarkers.WBC.isFalling()) updateDiagnosisLevel(DiagnosisLevel.RepeatTestIn2Days);
		else updateDiagnosisLevel(DiagnosisLevel.RepeatTestIn3Days);
	} else if (inRange(bloodMarkers.WBC.in("10^3/μl"), "[1.5, 100]")) {
		if (bloodMarkers.WBC.isFalling()) updateDiagnosisLevel(DiagnosisLevel.RepeatTestIn3Days);
		else updateDiagnosisLevel(DiagnosisLevel.OK);
	}

	/* PLT */

	diagnosisStep = "PLT";

	if (inRange(bloodMarkers.PLT.in("tys./mm³"), "[0, 25)"))
		updateDiagnosisLevel(DiagnosisLevel.UrgentConsultationNeeded);
	if (inRange(bloodMarkers.PLT.in("tys./mm³"), "[25, 35)")) updateDiagnosisLevel(DiagnosisLevel.RepeatTestIn2Days);
	if (inRange(bloodMarkers.PLT.in("tys./mm³"), "[35, 50)")) updateDiagnosisLevel(DiagnosisLevel.RepeatTestIn3Days);
	if (inRange(bloodMarkers.PLT.in("tys./mm³"), "[50, 1000)")) updateDiagnosisLevel(DiagnosisLevel.OK);

	/* NEUT */

	diagnosisStep = "NEUT";

	if (inRange(bloodMarkers.NEUT.in("/μl"), "[0, 500)")) {
		if (bloodMarkers.NEUT.isFalling()) updateDiagnosisLevel(DiagnosisLevel.UrgentConsultationNeeded);
		if (bloodMarkers.NEUT.isStable() || bloodMarkers.NEUT.isRising()) {
			if (temperature >= 37.0) updateDiagnosisLevel(DiagnosisLevel.UrgentConsultationNeeded);
			else updateDiagnosisLevel(DiagnosisLevel.ConsultationNeeded);
		}
	}

	if (inRange(bloodMarkers.NEUT.in("/μl"), "[500, 10000)")) {
		if (bloodMarkers.NEUT.isFalling()) {
			if (temperature >= 37.0) updateDiagnosisLevel(DiagnosisLevel.UrgentConsultationNeeded);
			else updateDiagnosisLevel(DiagnosisLevel.RepeatTestIn2Days);
		}
		if (bloodMarkers.NEUT.isStable() || bloodMarkers.NEUT.isRising())
			updateDiagnosisLevel(DiagnosisLevel.RepeatTestIn3Days);
	}

	/* ALT */

	diagnosisStep = "ALT";

	if (bloodMarkers.ALT.getValue() && bloodMarkers.ALT.reference?.getValue()) {
		/* check if increased by 50% or more */
		if ((bloodMarkers.ALT.in("U/l") ?? 0) / (bloodMarkers.ALT.reference?.in("U/l") ?? 1) - 1 >= 0.5)
			updateDiagnosisLevel(DiagnosisLevel.ConsultationNeeded);
	}

	/* AST */

	diagnosisStep = "AST";

	if (bloodMarkers.AST.getValue() && bloodMarkers.AST.reference?.getValue()) {
		/* check if increased by 50% or more */
		if ((bloodMarkers.AST.in("U/l") ?? 0) / (bloodMarkers.AST.reference?.in("U/l") ?? 1) - 1 >= 0.5)
			updateDiagnosisLevel(DiagnosisLevel.ConsultationNeeded);
	}

	/* Temperature */

	diagnosisStep = "Temperature";

	if (temperature >= 38.0) updateDiagnosisLevel(DiagnosisLevel.ConsultationNeeded);

	/* Symptoms */

	diagnosisStep = "Symptoms";

	if (hasAnyOfSymptoms(symptoms, ["vomiting", "diarrhea"])) updateDiagnosisLevel(DiagnosisLevel.ConsultationNeeded);

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
		updateDiagnosisLevel(DiagnosisLevel.UrgentConsultationNeeded);

	if (hasSymptom(symptoms, "headache")) {
		switch (headacheRating) {
			case 1:
			case 2:
				updateDiagnosisLevel(DiagnosisLevel.OK);
				break;
			case 3:
			case 4:
				updateDiagnosisLevel(DiagnosisLevel.ConsultationNeeded);
				break;
			case 5:
				updateDiagnosisLevel(DiagnosisLevel.UrgentConsultationNeeded);
				break;
		}
	}

	if (hasSymptom(symptoms, "pain-anxiety")) {
		switch (painAnxietyRating) {
			case 1:
			case 2:
				updateDiagnosisLevel(DiagnosisLevel.OK);
				break;
			case 3:
			case 4:
				updateDiagnosisLevel(DiagnosisLevel.ConsultationNeeded);
				break;
			case 5:
				updateDiagnosisLevel(DiagnosisLevel.UrgentConsultationNeeded);
				break;
		}
	}

	const diagnose =
		DiagnosesDefinitions.find((item) => item.level === calculatedDiagnosisLevel) ??
		DiagnosesDefinitions[DiagnosisLevel.Unconclusive];

	if (window.location.hostname === "localhost" && diagnosisLog.length > 0) {
		console.log(diagnosisLog);
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
