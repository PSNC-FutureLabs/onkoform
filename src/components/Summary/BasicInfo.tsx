import { Grid } from "@mui/material";
import { BasicInfoCard } from "./BasicInfoCard";
import { useFormContext } from "react-hook-form";
import {
  getAgeValue,
  getDiseaseValue,
  getGenderValue,
  getHospitalWardValue,
} from "./helpers";

export const BasicInfo = () => {
  const { getValues } = useFormContext();

  const genderValue = getGenderValue(getValues("gender"));
  const ageValue = getAgeValue(getValues("birthday"));
  const diseaseValue = getDiseaseValue(getValues("disease"));
  const wardValue = getHospitalWardValue(getValues("hospitalWard"));

  return (
    <Grid
      container
      spacing={2}
      style={{ borderBottom: "2px solid #88888877", paddingBottom: "20px" }}>
      <BasicInfoCard label="Płeć" value={genderValue ?? ""} />
      <BasicInfoCard label="Wiek" value={ageValue ?? ""} />
      <BasicInfoCard label="Choroba" value={diseaseValue ?? ""} />
      <BasicInfoCard label="Oddział" value={wardValue ?? ""} />
    </Grid>
  );
};
