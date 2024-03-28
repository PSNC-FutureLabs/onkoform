import { Stack, Typography } from "@mui/material";

type MorphologyCardTileProps = {
  label: string;
  value: string;
};

export const MorphologyCardTile = ({
  label,
  value,
}: MorphologyCardTileProps) => {
  return (
    <Stack>
      <Typography style={{ color: "#555555de", fontSize: "14px" }}>
        {label}
      </Typography>
      <Typography style={{ fontSize: "22px" }}>{value}</Typography>
    </Stack>
  );
};
