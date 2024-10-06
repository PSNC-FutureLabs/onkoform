import { Box, Typography } from "@mui/material";
import { Trans, useTranslation } from "react-i18next";

interface LabTestHeaderProps {
  backgroundColor: string;
  date: string | Date;
}

export default function LabTestHeader({
  backgroundColor,
  date,
}: LabTestHeaderProps) {
  const { t } = useTranslation();
  return (
    <Box sx={{ backgroundColor }} p={3}>
      <Typography variant="h6" color="white">
        <Trans t={t} ns="ns2">
          Date-of-test
        </Trans>
      </Typography>
      <Typography variant="h3" color="white">
        {typeof date === "string" ? date : date.toLocaleDateString("de-DE")}
      </Typography>
    </Box>
  );
}
