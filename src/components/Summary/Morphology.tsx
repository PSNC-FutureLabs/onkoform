import { Grid, Stack, Typography } from "@mui/material";
import { MorphologyCard } from "./MorphologyCard";

export const Morphology = () => {
	return (
		<Stack pt={2}>
			<Typography variant="h5" color="black">Zestawienie wyników z badań morfologii krwi</Typography>
			<Grid container spacing={2}>
				<MorphologyCard markerName="HGB" />
				<MorphologyCard markerName="WBC" />
				<MorphologyCard markerName="PLT" />
				<MorphologyCard markerName="NEUT" />
				<MorphologyCard markerName="ALT" />
				<MorphologyCard markerName="AST" />
			</Grid>
		</Stack>
	);
};
