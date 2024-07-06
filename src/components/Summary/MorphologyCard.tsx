import { Card, Grid, Typography, Tooltip, Stack, Box } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { MorphologyCardTile } from "./MorphologyCardTile";
import { BloodMarkerDescriptions, BloodMarkersNames, MedicalParameter } from "../../business/types";

type MorphologyCardProps = {
	markerName: BloodMarkersNames;
	bloodMarker: MedicalParameter;
};

export const MorphologyCard = ({ markerName, bloodMarker }: MorphologyCardProps) => {
	return (
		<Grid item xs={6}>
			<Card variant="outlined" sx={{ background: "#F8F8F8", width: "100%", p: 1, m: 1 }}>
				<Stack spacing={2}>
					<Stack direction="row" spacing={1} alignItems="center">
						<Typography variant="h5" color="black" fontWeight={700}>
							{markerName}
						</Typography>
						<Tooltip title={BloodMarkerDescriptions[markerName]}>
							<InfoOutlinedIcon sx={{ cursor: "pointer" }} color="info" />
						</Tooltip>
					</Stack>
					<Stack direction="row">
						<Box width="50%">
							<MorphologyCardTile parameter={bloodMarker} valueType="actual" />
						</Box>
						<Box width="50%">
							{bloodMarker.reference ? (
								<MorphologyCardTile parameter={bloodMarker.reference} valueType="reference" />
							) : null}
						</Box>
					</Stack>
				</Stack>
			</Card>
		</Grid>
	);
};
