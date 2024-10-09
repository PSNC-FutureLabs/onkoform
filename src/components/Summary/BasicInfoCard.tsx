import { Grid, Typography } from "@mui/material";
import React from "react";
import { Trans, useTranslation } from "react-i18next";

type BasicInfoCardProps = {
  label: string;
  value: string | string[];
  skipValTrans?: boolean;
};

export const BasicInfoCard = ({
  label,
  value,
  skipValTrans = false,
}: BasicInfoCardProps) => {
  const { t } = useTranslation(["ns1", "ns2"]);
  return (
    <>
      <Grid item xs={12} sm={6}>
        <Typography variant="body1">
          <Trans t={t}>{label}</Trans>
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="body1">
          <strong>
            {Array.isArray(value) ? (
              value.map((item, index) => (
                <React.Fragment key={index}>
                  <Trans t={t}>{item}</Trans>
                  <br />
                </React.Fragment>
              ))
            ) : skipValTrans ? (
              value
            ) : (
              <Trans t={t}>{value}</Trans>
            )}
          </strong>
        </Typography>
      </Grid>
    </>
  );
};
