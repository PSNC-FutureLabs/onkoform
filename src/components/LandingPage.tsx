// import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Grid from "@mui/material/Grid";
import { Box, Stack, Button, Typography } from "@mui/material";
import imageDesktopMainBackground from "../../public/images/desktop-main-background.png";
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
				component="main"
				item
				xs={12}
				sx={{
					backgroundImage: `url(${imageDesktopMainBackground})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}
				direction="column"
			>
				<Typography variant="h1" align="center" mb={2}>
					Wyniki badań krwi u dzieci z chorobami nowotworowymi
				</Typography>
				<Typography variant="h3" align="center" mb={2}>
					Kliknij “Rozpocznij” i przejdź do szybkiej i prostej analizy wyników badania krwi Twojego dziecka
				</Typography>
				<Box display="flex" justifyContent="center" mb={2}>
					<Button variant="contained" onClick={onClickStart}>
						Rozpocznij
					</Button>
				</Box>
			</Grid>
			<Grid component="section" item sm={6} xs={12} sx={{ border: "1px solid red" }}>
				<Box p={6}>
					<Typography variant="h4" color="black">
						W prosty i intuicyjny sposób zweryfikuj niepokojące objawy i wyniki badań laboratoryjnych
						Twojego dziecka.
					</Typography>
				</Box>
			</Grid>
			<Grid component="section" item sm={6} xs={12} sx={{ border: "1px solid red" }}>
				<Box p={6}>
					<Typography variant="body1">
						Dowiedz się czy konieczne jest powtórzenie badań lub pilna konsultacja z lekarzem. Jeśli tak -
						otrzymasz także potrzebny numer telefonu. Zajmie Ci to jedynie około trzech minut.
					</Typography>
				</Box>
			</Grid>
		</>
	);
}
