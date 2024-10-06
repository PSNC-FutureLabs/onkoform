import { FormHelperText } from "@mui/material";
import { Trans, useTranslation } from "react-i18next";

type FormWarningTextProps = {
  text: string | undefined;
  placementReservation?: boolean;
};

export const FormWarningText = ({
  text,
  placementReservation = true,
}: FormWarningTextProps) => {
  const { t } = useTranslation();
  return text ? (
    <FormHelperText error={true}>
      <Trans t={t}>{text}</Trans>
    </FormHelperText>
  ) : placementReservation ? (
    <FormHelperText> </FormHelperText>
  ) : null;
};
