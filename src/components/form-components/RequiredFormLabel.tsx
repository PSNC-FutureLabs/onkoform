import React from "react";
import { FormLabel, Typography } from "@mui/material";

interface RequiredFormLabelProps {
	children: React.ReactNode;
	required?: boolean;
}

const RequiredFormLabel: React.FC<RequiredFormLabelProps> = ({ children, required }) => {
	return (
		<FormLabel>
			{required && (
				<Typography component="span" color="error">
					* {/* Red asterisk */}
				</Typography>
			)}
			{children}
		</FormLabel>
	);
};

export default RequiredFormLabel;
