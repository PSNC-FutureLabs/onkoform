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

export default function LandingPage({ onClickStart }: LandingPageProps) {
	return (
		<>
			<Grid
				container
				component="header"
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
				<Grid item xs={12}>
					<Box
						component="img"
						display={{ xs: "block", sm: "none" }}
						sx={{
							width: 200,
						}}
						src={imageLogo}
						alt="Logo projektu Mali Mocni"
					/>
				</Grid>
				<Grid item xs={12} sm={3}>
					<Box
						component="img"
						sx={{
							width: 200,
						}}
						src={imageBoyGirlTeddyBear}
						alt="chłopiec, dziewczynka, pluszowy miś"
					/>
					<Box
						component="img"
						display={{ xs: "block", sm: "none" }}
						sx={{
							width: 200,
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
							<Button variant="contained" onClick={onClickStart}>
								Rozpocznij
							</Button>
						</Box>
					</Stack>
				</Grid>
				<Grid item xs={6} sm={3}>
					<Box
						component="img"
						display={{ xs: "none", sm: "block" }}
						sx={{
							width: 200,
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
			<Grid item component="section" xs={12} sm={6} sx={{ backgroundColor: "white" }}>
				<Box p={{ xs: 2, sm: 6 }}>
					<Typography variant="body1">
						Dowiedz się czy konieczne jest powtórzenie badań lub pilna konsultacja z lekarzem. Jeśli tak -
						otrzymasz także potrzebny numer telefonu. Zajmie Ci to jedynie około trzech minut.
					</Typography>
				</Box>
			</Grid>
			<Grid item component="section" xs={12} sx={{ backgroundColor: grey[100] }}>
				<Typography variant="h2" align="center" pt={4} color="black" fontWeight={700}>
					Przygotuj
				</Typography>
			</Grid>
			<Grid item component="section" xs={12} sm={4} sx={{ backgroundColor: grey[100] }}>
				<Box sx={{ flex: 1 }}>
					<Stack alignItems="center">
						<LocalHospitalIcon fontSize="large" />
						<Typography variant="h6" align="center" p={2} color="black">
							Dane pacjenta
						</Typography>
						<Typography variant="body2" align="center">
							Podstawowe dane, takie jak data urodzenia czy wiodący oddział szpitalny.
						</Typography>
					</Stack>
				</Box>
			</Grid>
			<Grid item component="section" xs={12} sm={4} sx={{ backgroundColor: grey[100] }}>
				<Box sx={{ flex: 1 }}>
					<Stack alignItems="center">
						<SickIcon fontSize="large" />
						<Typography variant="h6" align="center" p={2} color="black">
							Zaobserwowane objawy
						</Typography>
						<Typography variant="body2" align="center">
							Temperatura i niepokojące symptomy np. dreszcze, toksyczności śluzówkowe.{" "}
						</Typography>
					</Stack>
				</Box>
			</Grid>
			<Grid item component="section" xs={12} sm={4} sx={{ backgroundColor: grey[100] }}>
				<Box sx={{ flex: 1 }}>
					<Stack alignItems="center">
						<QueryStatsIcon fontSize="large" />
						<Typography variant="h6" align="center" p={2} color="black">
							Aktualne i poprzednie badania{" "}
						</Typography>
						<Typography variant="body2" align="center">
							Wyniki badań laboratoryjnych (HGB, WBC, PLT, ALT, AST, NEUT).{" "}
						</Typography>
					</Stack>
				</Box>
			</Grid>
			<Grid item component="section" xs={12} sx={{ backgroundColor: grey[100] }}>
				<Box display="flex" justifyContent="center" pb={6}>
					<Button variant="contained" onClick={onClickStart}>
						Przejdź do formularza
					</Button>
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
