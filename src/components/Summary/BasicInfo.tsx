import { Grid, Stack, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";
import {
  getMedicalConditionValue,
  getGenderValue,
  getHospitalWardValue,
  getPolishAgeDescription,
} from "../../helpers";
import { BasicInfoCard } from "./BasicInfoCard";
import { Trans, useTranslation } from "react-i18next";

export const BasicInfo = () => {
  const { getValues } = useFormContext();
  const { t } = useTranslation();
  const genderValue = getGenderValue(getValues("gender"));
  const ageDescription = getPolishAgeDescription(
    new Date(getValues("dateOfBirth"))
  );
  const medicalCondition = getMedicalConditionValue(
    getValues("medicalCondition")
  );
  const hospitalWard = getHospitalWardValue(getValues("hospitalWard"));

  return (
    <Stack mt={3} pt={2} borderTop="1px solid #EFF0F1">
      <Typography variant="h5" mb={2} color="#1F2023">
        <Trans t={t} ns="ns2">
          Basic-info
        </Trans>
      </Typography>
      <Grid container spacing={2}>
        <BasicInfoCard label="Age" value={ageDescription ?? ""} />
        <BasicInfoCard label="Gender" value={genderValue ?? ""} />
        <BasicInfoCard label="Affliction" value={medicalCondition ?? ""} />
        <BasicInfoCard label="Ward" value={hospitalWard ?? ""} />
      </Grid>
    </Stack>
  );
};
