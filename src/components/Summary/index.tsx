import { Typography } from "@mui/material";
import { BasicInfo } from "./BasicInfo";

export const Summary = () => {
  return (
    <>
      <Typography
        sx={{ mt: 2, mb: 1 }}
        variant="h5"
        style={{ textAlign: "left", paddingLeft: "16x", marginTop: "22px" }}>
        Twoje wyniki
      </Typography>
      <BasicInfo />
    </>
  );
};
