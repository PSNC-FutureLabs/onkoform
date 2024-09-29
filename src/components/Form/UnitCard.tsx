import { Card } from "@mui/material";
import { UnitType } from "../../business/types";

type UnitCardProps = {
	unit: UnitType;
};

export const UnitCard = ({ unit }: UnitCardProps) => {
	return (
		<Card
			variant="outlined"
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "100%",
				padding: "0 15px 0 15px",
			}}
		>
			<p>{unit}</p>
		</Card>
	);
};
