import Grid from "@mui/material/Grid";
import { Box, Stack, Typography, Link } from "@mui/material";
import { grey } from "@mui/material/colors";
import { versionText } from "../business";

export default function Footer() {
	return (
		<Grid item component="footer" xs={12} sx={{ backgroundColor: grey[900] }} maxHeight="3rem">
			<Stack direction="row" alignContent="space-between" justifyContent="space-between" sx={{ width: "100%" }}>
				<Box p={1}>
					<Typography variant="body2" align="center" color="white">
						&copy; 2024 by{" "}
						<Link href="https://psnc.pl" target="_blank" rel="noreferrer" color="inherit" underline="hover">
							PSNC
						</Link>
						. All rights reserved.
					</Typography>
				</Box>
				<Box>
					<Typography variant="body2" align="center" color="white" p={1}>
						{versionText()}
					</Typography>
				</Box>
			</Stack>
		</Grid>
	);
}
