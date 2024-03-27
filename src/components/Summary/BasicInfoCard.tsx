import { Card, Grid, Typography } from "@mui/material";

type BasicInfoCardProps = {
  label: string;
  value: string | number;
};

export const BasicInfoCard = ({ label, value }: BasicInfoCardProps) => {
  return (
    <Grid item xs={6}>
      <Card
        style={{
          width: "90%",
          textAlign: "left",
          padding: "12px 10px 12px 16px",
        }}>
        <Typography style={{ color: "#555555de" }}>{label}</Typography>
        <Typography style={{ fontSize: "20px" }}>{value}</Typography>
      </Card>
    </Grid>
  );
};
