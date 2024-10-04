import { Box, Typography } from "@mui/material";

interface LabTestHeaderProps {
	backgroundColor: string;
	date: string | Date;
}

export default function LabTestHeader({ backgroundColor, date }: LabTestHeaderProps) {
	return (
		<Box sx={{ backgroundColor }} p={3}>
			<Typography variant="h6" color="white">
				Data badania
			</Typography>
			<Typography variant="h3" color="white">
				{typeof date === "string" ? date : date.toLocaleDateString("de-DE")}
			</Typography>
		</Box>
	);
}
