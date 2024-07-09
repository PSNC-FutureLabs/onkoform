import { Grid, Stack, Typography } from "@mui/material";
import { MorphologyCard } from "./MorphologyCard";
import { BloodMarkers } from "../../business/types";
import { grey } from "@mui/material/colors";

export const Morphology = ({ bloodMarkers }: { bloodMarkers: BloodMarkers }) => {
	return (
		<Stack>
			<Typography variant="h5" color={grey[900]} sx={{ textAlign: { xs: "center", sm: "left" } }}>
				Zestawienie wyników z badań morfologii krwi
			</Typography>
			<Grid container spacing={0}>
				<MorphologyCard markerName="HGB" bloodMarker={bloodMarkers.HGB} />
				<MorphologyCard markerName="WBC" bloodMarker={bloodMarkers.WBC} />
				<MorphologyCard markerName="PLT" bloodMarker={bloodMarkers.PLT} />
				<MorphologyCard markerName="NEUT" bloodMarker={bloodMarkers.NEUT} />
				{bloodMarkers.ALT.getValue() ? (
					<MorphologyCard markerName="ALT" bloodMarker={bloodMarkers.ALT} />
				) : null}
				{bloodMarkers.AST.getValue() ? (
					<MorphologyCard markerName="AST" bloodMarker={bloodMarkers.AST} />
				) : null}
			</Grid>
		</Stack>
	);
};
