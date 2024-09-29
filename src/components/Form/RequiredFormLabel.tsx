import React from "react";
import { FormLabel, Typography } from "@mui/material";

interface RequiredFormLabelProps {
	children: React.ReactNode;
	optional?: boolean;
}

const RequiredFormLabel: React.FC<RequiredFormLabelProps> = ({ children, optional }) => {
	return (
		<FormLabel>
			{!optional && (
				<Typography component="span" color="error">
					*&nbsp;
				</Typography>
			)}
			{children}
		</FormLabel>
	);
};

export default RequiredFormLabel;
