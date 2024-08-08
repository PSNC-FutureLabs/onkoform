import { Grid, Typography } from "@mui/material";

type BasicInfoCardProps = {
	label: string;
	value: string | number;
	optionalText?: string;
};

export const BasicInfoCard = ({ label, value, optionalText }: BasicInfoCardProps) => {
	return (
		<>
			<Grid item xs={6}>
				<Typography variant="body1">{label}</Typography>
			</Grid>
			<Grid item xs={6}>
				<Typography variant="body1">
					<strong>{value}</strong>
				</Typography>
				{optionalText ? <Typography>{optionalText}</Typography> : null}
			</Grid>
		</>
	);
};
