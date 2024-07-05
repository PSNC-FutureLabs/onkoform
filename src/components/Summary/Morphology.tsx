import { Grid, Stack, Typography } from "@mui/material";
import { MorphologyCard } from "./MorphologyCard";
import { BloodMarkers } from "../../business/types";

export const Morphology = ({ bloodMarkers }: { bloodMarkers: BloodMarkers }) => {
	return (
		<Stack>
			<Typography variant="h5" color="black">
				Zestawienie wyników z badań morfologii krwi
			</Typography>
			<Grid container spacing={0}>
				<MorphologyCard markerName="HGB" bloodMarker={bloodMarkers.HGB} />
				<MorphologyCard markerName="WBC" bloodMarker={bloodMarkers.WBC} />
				<MorphologyCard markerName="PLT" bloodMarker={bloodMarkers.PLT} />
				<MorphologyCard markerName="NEUT" bloodMarker={bloodMarkers.NEUT} />
				<MorphologyCard markerName="ALT" bloodMarker={bloodMarkers.ALT} />
				<MorphologyCard markerName="AST" bloodMarker={bloodMarkers.AST} />
			</Grid>
		</Stack>
	);
};
