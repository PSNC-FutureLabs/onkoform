import { Grid, Typography } from "@mui/material";
import React from "react";
import { Trans, useTranslation } from "react-i18next";

type BasicInfoCardProps = {
  label: string;
  value: string | string[];
};

export const BasicInfoCard = ({ label, value }: BasicInfoCardProps) => {
  const { t } = useTranslation();
  return (
    <>
      <Grid item xs={12} sm={6}>
        <Typography variant="body1">
          <Trans t={t} ns="ns2">
            {label}
          </Trans>
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="body1">
          <strong>
            {Array.isArray(value)
              ? value.map((item, index) => (
                  <React.Fragment key={index}>
                    <Trans t={t}>{item}</Trans>
                    <br />
                  </React.Fragment>
                ))
              : value}
          </strong>
        </Typography>
      </Grid>
    </>
  );
};
