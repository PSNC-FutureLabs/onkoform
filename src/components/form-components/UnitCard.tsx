import { Card } from "@mui/material";
import { UnitType } from "../../business/types";

type UnitCardProps = {
  unit: UnitType;
};

export const UnitCard = ({ unit }: UnitCardProps) => {
  return (
    <Card
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "130px",
        height: "90%",
      }}>
      <p>{unit}</p>
    </Card>
  );
};
