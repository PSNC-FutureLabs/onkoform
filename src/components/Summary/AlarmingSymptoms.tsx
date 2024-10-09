import { Grid, Stack, Typography } from "@mui/material";
import { BasicInfoCard } from "./BasicInfoCard";
import { useFormContext } from "react-hook-form";
import { symptomsOptions } from "../../business";
import { getFormattedNumber } from "../../helpers";
import { Trans, useTranslation } from "react-i18next";

export const AlarmingSymptoms = () => {
  const { getValues } = useFormContext();
  const { t } = useTranslation();
  const temperature = getValues("temperature");

  const symptoms = getValues("symptoms");

  const selectedSymptoms = symptomsOptions
    .filter((option) => symptoms.includes(option.value))
    .map((option) => {
      let rating = "";
      if (option.value === "headache") {
        rating = ` (${getValues("headache-rating")}/5)`;
      } else if (option.value === "pain-anxiety") {
        rating = ` (${getValues("pain-anxiety-rating")}/5)`;
      } else if (option.value === "mucosal-toxicities") {
        rating = ` (${getValues("mucosal-toxicities-rating")}/4)`;
      }
      return `${t(option.label)}${rating}`;
    });

  return (
    <Stack mt={3} pt={2} borderTop="1px solid #EFF0F1">
      <Typography variant="h5" color="black" mb={2}>
        <Trans t={t} ns="ns2">
          ConcerningSymptoms
        </Trans>
      </Typography>
      <Grid container spacing={2}>
        <BasicInfoCard
          label="ns2:BodyTemperature"
          value={`${getFormattedNumber(temperature, 1)} °C`}
          skipValTrans={true}
        />
        <BasicInfoCard
          label="ns2:AssociatedSymptoms"
          value={selectedSymptoms}
        />
      </Grid>
    </Stack>
  );
};
