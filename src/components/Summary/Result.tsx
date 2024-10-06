import { Stack, Alert, Typography } from "@mui/material";
import { Diagnosis } from "../../business/types";
import { Trans, useTranslation } from "react-i18next";

export const Result = ({ diagnose }: { diagnose: Diagnosis }) => {
  const { t } = useTranslation();
  return (
    <Stack>
      <Alert severity={diagnose.severity}>
        <Typography variant="h6" color="black">
          <Trans t={t}>{diagnose.header}</Trans>
        </Typography>
        <Trans t={t}>{diagnose.body}</Trans>
      </Alert>
    </Stack>
  );
};
