import { Container, Grid, Box, Stack, Typography, Link } from "@mui/material";
import { grey } from "@mui/material/colors";
import { versionText } from "../business";
import { Trans, useTranslation } from "react-i18next";

export default function Footer() {
	const { t } = useTranslation();
	return (
		<Box sx={{ backgroundColor: grey[900] }}>
			<Container maxWidth="lg" disableGutters>
				<Grid item component="footer" xs={12} maxHeight="3rem">
					<Stack
						direction="row"
						alignContent="space-between"
						justifyContent="space-between"
						sx={{ width: "100%" }}
					>
						<Box py={1}>
							<Typography variant="body2" align="center" color="white">
								&copy; {new Date().getFullYear() + " "}
								<Link
									href="https://fundacjapomocydzieciom.com.pl/"
									target="_blank"
									rel="noreferrer"
									color="inherit"
									underline="hover"
								>
									Fundacja Pomocy Dzieciom z Chorobami Nowotworowymi w Poznaniu
								</Link>
								.  <Trans t={t}>AllRightsReserved</Trans>.
							</Typography>
						</Box>
						<Box>
							<Typography variant="body2" align="center" color="white" p={1}>
								{versionText()}
							</Typography>
						</Box>
					</Stack>
				</Grid>
			</Container>
		</Box>
	);
}
