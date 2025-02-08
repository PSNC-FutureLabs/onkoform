import { Grid, Stack, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";
import {hospitalWardPhones } from "../../business"
import { BasicInfoCard } from "./BasicInfoCard";
import { Trans, useTranslation } from "react-i18next";

type HospitalWardKey = keyof typeof hospitalWardPhones;


export const ContactInfo = () => {
  const { getValues } = useFormContext();
  const { t } = useTranslation();
  const hospitalWard = getValues("hospitalWard");

  return (
    <Stack mt={3} pt={2} borderTop="1px solid #EFF0F1">
      <Typography variant="h5" mb={2} color="#1F2023">
        <Trans t={t} ns="ns2">
          Contact-info
        </Trans>
      </Typography>
      <Grid container spacing={2}>
        <BasicInfoCard label="ns2:WardAfter" skipValTrans={true} value={hospitalWardPhones["dutyOfficer" as HospitalWardKey] ?? ""} />
        <BasicInfoCard label="ns2:WardUntil" skipValTrans={true} value={hospitalWardPhones[hospitalWard as HospitalWardKey] ?? ""} />
      </Grid>
    </Stack>
  );
};
