import { Stack, Typography } from "@mui/material";

type MorphologyCardTileProps = {
	label: string;
	value: string;
};

export const MorphologyCardTile = ({ label, value }: MorphologyCardTileProps) => {
	return (
		<Stack>
			<Typography variant="h6" color="black">
				{label}
			</Typography>
			<Typography variant="body2">{value}</Typography>
		</Stack>
	);
};
