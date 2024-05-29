// import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Grid from "@mui/material/Grid";
import { Box, Stack, Button, Typography, Link } from "@mui/material";
import imageDesktopMainBackground from "../../public/images/desktop-main-background.png";
import imageMobileMainBackground from "../../public/images/mobile-main-background.png";
import imageLogo from "../../public/images/logo-mm.svg";
import imageBoyGirlTeddyBear from "../../public/images/boy-girl-teddybear.svg";
import imageMomKid from "../../public/images/mom-kid.svg";
// import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
// import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import SickIcon from "@mui/icons-material/Sick";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import QueryStatsIcon from "@mui/icons-material/QueryStats";

import { grey } from "@mui/material/colors";

interface LandingPageProps {
	onClickStart: () => void;
}

export default function LandingPage() {
	return (
		<>
			<Grid
				container
				component="main"
				sx={{
					backgroundImage: {
						xs: `url(${imageMobileMainBackground})`,
						sm: `url(${imageDesktopMainBackground})`,
					},
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}
				pt={{ xs: 2, sm: 10 }}
				pb={10}
			>
				<Grid item xs={12} sm={3}>
					<Box
						component="img"
						sx={{
							width: 300,
							height: 300,
						}}
						src={imageBoyGirlTeddyBear}
						alt="chłopiec, dziewczynka, pluszowy miś"
					/>
					<Box
						component="img"
						display={{ xs: "block", sm: "none" }}
						sx={{
							width: 300,
							height: 300,
						}}
						src={imageMomKid}
						alt="mama i dziecko"
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Stack>
						<Typography variant="h1" align="center" mb={2}>
							Wyniki badań krwi u dzieci z chorobami nowotworowymi
						</Typography>
						<Typography variant="h3" align="center" mb={2}>
							Kliknij “Rozpocznij” i przejdź do szybkiej i prostej analizy wyników badania krwi Twojego
							dziecka
						</Typography>
						<Box display="flex" justifyContent="center" mb={2}>
							<Button variant="contained">Rozpocznij</Button>
						</Box>
					</Stack>
				</Grid>
				<Grid item xs={6} sm={3}>
					<Box
						component="img"
						display={{ xs: "none", sm: "block" }}
						sx={{
							width: 300,
							height: 300,
						}}
						src={imageMomKid}
						alt="mama i dziecko"
					/>
				</Grid>
			</Grid>
			<Grid item component="section" xs={12} sm={6} sx={{ backgroundColor: "white" }}>
				<Box p={{ xs: 2, sm: 6 }}>
					<Typography variant="h4" color="black">
						W prosty i intuicyjny sposób zweryfikuj niepokojące objawy i wyniki badań laboratoryjnych
						Twojego dziecka.
					</Typography>
				</Box>
			</Grid>
			<Grid item component="section" xs={12} sm={6} sx={{ backgroundColor: grey[200] }}>
				<Box p={{ xs: 2, sm: 6 }}>
					<Typography variant="body1">
						Dowiedz się czy konieczne jest powtórzenie badań lub pilna konsultacja z lekarzem. Jeśli tak -
						otrzymasz także potrzebny numer telefonu. Zajmie Ci to jedynie około trzech minut.
					</Typography>
				</Box>
			</Grid>
			<Grid item component="footer" xs={12} sx={{ backgroundColor: grey[900] }}>
				<Stack
					direction="row"
					alignContent="space-between"
					justifyContent="space-between"
					sx={{ width: "100%" }}
				>
					<Box p={1}>
						<Typography variant="body2" align="center" color="white">
							&copy; 2024 by{" "}
							<Link
								href="https://psnc.pl"
								target="_blank"
								rel="noreferrer"
								color="inherit"
								underline="hover"
							>
								PSNC
							</Link>
							. All rights reserved.
						</Typography>
					</Box>
					<Stack direction="row">
						<Box>
							<Typography variant="body2" align="center" color="white" p={1}>
								<Link href="#" color="inherit" underline="hover">
									Privacy policy
								</Link>
							</Typography>
						</Box>
						<Box>
							<Typography variant="body2" align="center" color="white" p={1}>
								<Link href="#" color="inherit" underline="hover">
									Terms & Conditions
								</Link>
							</Typography>
						</Box>
					</Stack>
				</Stack>
			</Grid>
		</>
	);
}
