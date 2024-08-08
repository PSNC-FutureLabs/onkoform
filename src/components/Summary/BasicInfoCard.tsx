import { Grid, Typography } from "@mui/material";
import React from "react";

type BasicInfoCardProps = {
	label: string;
	value: string | string[];
};

export const BasicInfoCard = ({ label, value }: BasicInfoCardProps) => {
	return (
		<>
			<Grid item xs={12} sm={6}>
				<Typography variant="body1">{label}</Typography>
			</Grid>
			<Grid item xs={12} sm={6}>
				<Typography variant="body1">
					<strong>
						{Array.isArray(value)
							? value.map((item, index) => (
									<React.Fragment key={index}>
										{item}
										<br />
									</React.Fragment>
							))
							: value}
					</strong>
				</Typography>
			</Grid>
		</>
	);
};
