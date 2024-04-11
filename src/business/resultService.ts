import { FieldValues } from "react-hook-form";
import { ResultType } from "./types";

export const getExaminationResult = (data: FieldValues): ResultType => {
  return { summary: "examinationIn3days", alarmingSymptoms: [] };
};
