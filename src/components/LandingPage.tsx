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
		<Grid item xs={12}>
			<Box component="main">
				<Box
					sx={{
						height: "600px",
						backgroundImage: `url(${imageDesktopMainBackground})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
					}}
					display="flex"
					alignItems="center"
				>
					<Stack direction="row" alignItems="center">
						<Box
							component="img"
							sx={{
								width: 300,
								height: 300,
							}}
							src={imageBoyGirlTeddyBear}
							alt="chłopiec, dziewczynka, pluszowy miś"
						/>
						<Box>
							<Typography variant="h1" align="center" mb={2}>
								Wyniki badań krwi u dzieci z chorobami nowotworowymi
							</Typography>
							<Typography variant="h3" align="center" mb={2}>
								Kliknij “Rozpocznij” i przejdź do szybkiej i prostej analizy wyników badania krwi
								Twojego dziecka
							</Typography>
							<Box display="flex" justifyContent="center" p={2}>
								<Button variant="contained" onClick={onClickStart}>
									Rozpocznij
								</Button>
							</Box>
						</Box>
						<Box
							component="img"
							sx={{
								width: 300,
								height: 300,
							}}
							src={imageMomKid}
							alt="mama i dziecko"
						/>
					</Stack>
				</Box>
			</Box>
		</Grid>
	);
}
