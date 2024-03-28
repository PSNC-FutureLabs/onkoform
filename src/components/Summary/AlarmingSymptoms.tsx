import { Grid, Typography } from "@mui/material";
import { BasicInfoCard } from "./BasicInfoCard";
import { useFormContext } from "react-hook-form";

export const AlarmingSymptoms = () => {
  const { getValues } = useFormContext();

  return (
    <div style={{ padding: "16px 0", borderBottom: "2px solid #88888877" }}>
      <Typography
        style={{
          textAlign: "left",
          paddingBottom: "10px",
        }}>
        Niepokojące objawy
      </Typography>
      <Grid container spacing={2}>
        <BasicInfoCard
          label="Temperatura ciała"
          value={getValues("temperature")}
          optionalText="Pomiar z pachy"
        />
        <BasicInfoCard label="Symptomy towarzyszące" value="Brak" />
      </Grid>
    </div>
  );
};
