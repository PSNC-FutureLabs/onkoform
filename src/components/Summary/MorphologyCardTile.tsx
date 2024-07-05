import { Stack, Typography } from "@mui/material";
import { MedicalParameter } from "../../business/types";

type MorphologyCardTileProps = {
	parameter: MedicalParameter;
	valueType: "actual" | "reference";
};

export const MorphologyCardTile = ({ parameter, valueType }: MorphologyCardTileProps) => {
	return (
		<Stack color={`${valueType === "actual" ? "black" : "grey"} `}>
			<Typography variant="h6">
				{`${valueType === "actual" ? "Aktualny" : "Poprzedni"} `}
				<strong>{parameter.date ? `${parameter.date.toLocaleDateString("de-DE")}` : "-"}</strong>
			</Typography>
			<Stack direction="row" alignItems="baseline">
				<Typography variant="h5" fontWeight={700}>
					{parameter.getValue()}
				</Typography>
				<Typography variant="body2">&nbsp;{`${parameter.getUnit()}`}</Typography>
			</Stack>
		</Stack>
	);
};
