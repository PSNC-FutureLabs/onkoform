import { Grid, Stack, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";
import {
  getMedicalConditionValue,
  getGenderValue,
  getHospitalWardValue,
  //getPolishAgeDescription,
  getAgeDescription,
} from "../../helpers";
import { BasicInfoCard } from "./BasicInfoCard";
import { Trans, useTranslation } from "react-i18next";

export const BasicInfo = () => {
  const { getValues } = useFormContext();
  const { t, i18n } = useTranslation();
  const genderValue = getGenderValue(getValues("gender"));
  const ageDescription = getAgeDescription(
    new Date(getValues("dateOfBirth")),
    i18n.language
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
        <BasicInfoCard
          label="ns2:Age"
          value={ageDescription ?? ""}
          skipValTrans={true}
        />
        <BasicInfoCard label="ns2:Gender" value={genderValue ?? ""} />
        <BasicInfoCard label="ns2:Affliction" value={medicalCondition ?? ""} />
        <BasicInfoCard label="ns2:Ward" value={hospitalWard ?? ""} />
      </Grid>
    </Stack>
  );
};
