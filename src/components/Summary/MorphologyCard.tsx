import { Card, Grid, Typography, Tooltip, Stack, Box, CardContent } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { MorphologyCardTile } from "./MorphologyCardTile";
import { BloodMarkerDescriptions, BloodMarkersNames, MedicalParameter } from "../../business/types";
import { grey } from "@mui/material/colors";

type MorphologyCardProps = {
	markerName: BloodMarkersNames;
	bloodMarker: MedicalParameter;
};

export const MorphologyCard = ({ markerName, bloodMarker }: MorphologyCardProps) => {
	return (
		<Grid item xs={12} sm={6}>
			<Card variant="outlined" sx={{ background: "#F8F8F8", width: "95%", m: 1, borderRadius: 3 }}>
				<CardContent>
					<Stack spacing={2}>
						<Stack direction="row" spacing={1} alignItems="center">
							<Typography variant="h5" color={grey[800]} fontWeight={700}>
								{markerName}
							</Typography>
							<Tooltip title={BloodMarkerDescriptions[markerName]}>
								<InfoOutlinedIcon sx={{ cursor: "pointer" }} color="info" />
							</Tooltip>
						</Stack>
						<Stack direction="row">
							<Box width="50%">
								{bloodMarker.getValue() ? (
									<MorphologyCardTile parameter={bloodMarker} valueType="actual" />
								) : null}
							</Box>
							<Box width="50%">
								{bloodMarker.reference?.getValue() ? (
									<MorphologyCardTile parameter={bloodMarker.reference} valueType="reference" />
								) : null}
							</Box>
						</Stack>
					</Stack>
				</CardContent>
			</Card>
		</Grid>
	);
};
