import { Card, Grid, Typography } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { MorphologyCardTile } from "./MorphologyCardTile";
import { useFormContext } from "react-hook-form";

type MorphologyCardProps = {
	markerName: string;
};

export const MorphologyCard = ({ markerName }: MorphologyCardProps) => {
	const { getValues } = useFormContext();

	return (
		<Grid item xs={6}>
			<Card
				style={{
					width: "90%",
					textAlign: "left",
					padding: "10px 4px",
					backgroundColor: "#F8F8F8",
					marginBottom: "20px",
				}}
			>
				<Grid container spacing={1}>
					<Grid item xs={12} style={{ justifyContent: "space-between", paddingBottom: "8px" }}>
						<Typography variant="h5" color="black" pl={2}>
							{markerName}
						</Typography>
						<div className="arrow-icon">
							<ArrowUpwardIcon fontSize="small" />
						</div>
					</Grid>
					<Grid item xs={4}>
						<MorphologyCardTile label="Aktualny" value={getValues(`${markerName}.value`)} />
					</Grid>
					<Grid item xs={4}>
						<MorphologyCardTile label="Poprzedni" value={getValues(`${markerName}2.value`)} />
					</Grid>
					<Grid item xs={4}>
						<MorphologyCardTile label="Jednostka" value={getValues(`${markerName}.unit`) ?? "mmol/l"} />
					</Grid>
					<Grid item xs={12}>
						<Typography
							variant="subtitle2"
							style={{
								paddingTop: "8px",
								borderTop: "2px solid #88888877",
							}}
						>
							(ocena wyniku - do implementacji)
						</Typography>
					</Grid>
				</Grid>
			</Card>
		</Grid>
	);
};
