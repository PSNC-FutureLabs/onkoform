import { Box, Stack, Button, Typography, Icon } from "@mui/material";
import imageMainBackground from "../../public/images/desktop-main-background.png";
import imageBoyGirlTeddyBear from "../../public/images/boy-girl-teddybear.svg";
import imageMomKid from "../../public/images/mom-kid.svg";
import imageLogo from "../../public/images/logo-mm.svg";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
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
			<Box component="main">
				<Box
					sx={{
						height: "400px",
						backgroundImage: `url(${imageMainBackground})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
					}}
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
							<Typography variant="h1" align="center">
								Wyniki badań krwi u dzieci z chorobami nowotworowymi
							</Typography>
							<Typography variant="h3" align="center">
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
			<Box component="section">
				<Stack direction="row" px={6} py={4}>
					<Box p={4} sx={{ flex: 1 }}>
						<Typography variant="h4" color="black">
							W prosty i intuicyjny sposób zweryfikuj niepokojące objawy i wyniki badań laboratoryjnych
							Twojego dziecka.
						</Typography>
					</Box>
					<Box p={4} sx={{ flex: 1 }}>
						<Typography variant="body2">
							Dowiedz się czy konieczne jest powtórzenie badań lub pilna konsultacja z lekarzem. Jeśli tak
							- otrzymasz także potrzebny numer telefonu. Zajmie Ci to jedynie około trzech minut.
						</Typography>
					</Box>
				</Stack>
			</Box>
			<Box component="section">
				<Stack sx={{ backgroundColor: grey[100] }} p={1}>
					<Typography variant="h3" align="center" pt={4} color="black" fontWeight={700}>
						Przygotuj
					</Typography>
					<Stack direction="row" p={6}>
						<Box sx={{ flex: 1 }}>
							<Stack alignItems="center">
								<LocalHospitalIcon />
								<Typography variant="h6" align="center" p={2} color="black">
									Dane pacjenta
								</Typography>
								<Typography variant="body2" align="center">
									Podstawowe dane, takie jak data urodzenia czy wiodący oddział szpitalny.
								</Typography>
							</Stack>
						</Box>
						<Box sx={{ flex: 1 }}>
							<Stack alignItems="center">
								<SickIcon/>
								<Typography variant="h6" align="center" p={2} color="black">
									Zaobserwowane objawy
								</Typography>
								<Typography variant="body2" align="center">
									Temperatura i niepokojące symptomy np. dreszcze, toksyczności śluzówkowe.{" "}
								</Typography>
							</Stack>
						</Box>
						<Box sx={{ flex: 1 }}>
							<Stack alignItems="center">
								<QueryStatsIcon/>
								<Typography variant="h6" align="center" p={2} color="black">
									Aktualne i poprzednie badania{" "}
								</Typography>
								<Typography variant="body2" align="center">
									Wyniki badań laboratoryjnych (HGB, WBC, PLT, ALT, AST, NEUT).{" "}
								</Typography>
							</Stack>
						</Box>
					</Stack>
					<Box display="flex" justifyContent="center" pb={6}>
						<Button variant="contained" onClick={onClickStart}>
							Przejdź do formularza
						</Button>
					</Box>
				</Stack>
			</Box>
			<Box component="section">
				<Stack direction="row" px={6} py={4} justifyContent="space-around">
					<Box p={4} sx={{ width: "40%" }}>
						<Typography variant="h4" color="black">
							Tworzymy przestrzeń wsparcia dla{" "}
							<strong>dzieci z chorobami nowotworowymi i ich opiekunów.</strong>
						</Typography>
						<Typography variant="body2">
							Dzięki zaangażowaniu doświadczonych lekarzy, programistów i grafików pomagamy lepiej
							zrozumieć sytuację zdrowotną dziecka oraz podjąć odpowiednie kroki w odpowiednim czasie.
						</Typography>
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
			<Box component="section">
				<Box
					sx={{
						width: "100%",
						height: "533px",
						background: "linear-gradient(158.95deg, #04804C -64.05%, #7FBB53 130.65%)",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
					px={22}
				>
					<Stack alignItems="center">
						<Box
							component="img"
							sx={{
								width: 300,
								height: 100,
							}}
							src={imageLogo}
							alt="logo MaliMocni"
						/>
						<Typography variant="h2" align="center">
							Rodzic zna swoje dziecko najlepiej i często jako pierwszy dostrzega niepokojące objawy.
							Dlatego zapewniamy mu wsparcie, aby mógł szybko i pewnie reagować.
						</Typography>
					</Stack>
				</Box>
			</Box>
			<Box component="section">
				<Stack direction="row" px={6} py={4} justifyContent="space-around">
					<Box
						component="img"
						sx={{
							width: 300,
							height: 300,
						}}
						src={imageBoyGirlTeddyBear}
						alt="mama i dziecko"
					/>
					<Box p={4} sx={{ width: "40%" }}>
						<Typography variant="h4" color="black">
							Kim są Mali Mocni?
						</Typography>
						<Typography variant="body2">
							Mali Mocni to prawdziwi bohaterowie, wykazujący się niezwykłą odwagą i siłą w obliczu walki
							z chorobami onkologicznymi.
						</Typography>
					</Box>
				</Stack>
			</Box>
			<Box component="footer" sx={{ backgroundColor: grey[900] }}>
				<Stack direction="row" alignContent="space-between" justifyContent="space-between">
					<Box p={1}>
						<Typography variant="body2" align="center" color="white">
							&copy; 2024 by PSNC. All rights reserved.
						</Typography>
					</Box>
					<Stack direction="row">
						<Box>
							<Typography variant="body2" align="center" color="white" p={1}>
								Privacy policy
							</Typography>
						</Box>
						<Box>
							<Typography variant="body2" align="center" color="white" p={1}>
								Terms & Conditions
							</Typography>
						</Box>
					</Stack>
				</Stack>
			</Box>
		</>
	);
}
