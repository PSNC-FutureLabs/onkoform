import { Stack, Typography } from "@mui/material";
import { MedicalParameter } from "../../business/types";
import { getFormattedNumber } from "../../helpers";
import { Trans, useTranslation } from "react-i18next";

type MorphologyCardTileProps = {
  parameter: MedicalParameter;
  valueType: "actual" | "reference";
};

export const MorphologyCardTile = ({
  parameter,
  valueType,
}: MorphologyCardTileProps) => {
  const { t } = useTranslation();
  return (
    <Stack color={`${valueType === "actual" ? "inherit" : "#696D76"} `}>
      <Typography variant="h6">
        <Trans t={t} ns="ns2">
          {valueType === "actual" ? "Current" : "Previous"}
        </Trans>{" "}
        <strong>
          {parameter.date
            ? `${parameter.date.toLocaleDateString("de-DE")}`
            : "-"}
        </strong>
      </Typography>
      <Stack direction="row" alignItems="baseline">
        <Typography variant="h5" fontWeight={700}>
          {getFormattedNumber(parameter.in(parameter.getBaseUnit()) ?? 0, -1)}
        </Typography>
        <Typography variant="body2">
          &nbsp;{`${parameter.getBaseUnit()}`}
        </Typography>
      </Stack>
      <Typography variant="body2">
        {parameter.getUnit() === parameter.getBaseUnit() ? (
          <>&nbsp;</>
        ) : (
          <>
            ({getFormattedNumber(parameter.getValue() ?? 0, -1)}&nbsp;
            {parameter.getUnit()})
          </>
        )}
      </Typography>
    </Stack>
  );
};
