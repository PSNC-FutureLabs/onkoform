import { Grid, Typography } from "@mui/material";

type BasicInfoCardProps = {
	label: string;
	value: string;
};

export const BasicInfoCard = ({ label, value }: BasicInfoCardProps) => {
	return (
		<>
			<Grid item xs={12} sm={6}>
				<Typography variant="body1">{label}</Typography>
			</Grid>
			<Grid item xs={12} sm={6}>
				<Typography variant="body1">
					<strong>{value}</strong>
				</Typography>
			</Grid>
		</>
	);
};
