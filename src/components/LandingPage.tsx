import { Box, Stack, Button, Typography } from "@mui/material";
import imageMainBackground from "../../public/images/desktop-main-background.png";
import imageBoyGirlTeddyBear from "../../public/images/boy-girl-teddybear.svg";
import imageMomKid from "../../public/images/mom-kid.svg";
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
					<Stack direction="row">
						<Box
							component="img"
							sx={{
								width: 100,
								height: 100,
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
								width: 100,
								height: 100,
							}}
							src={imageMomKid}
							alt="mama i dziecko"
						/>
					</Stack>
				</Box>
			</Box>
			<Box component="section">
				<Stack direction="row">
					<Box p={4}>
						<Typography variant="body1">
							W prosty i intuicyjny sposób zweryfikuj niepokojące objawy i wyniki badań laboratoryjnych
							Twojego dziecka.
						</Typography>
					</Box>
					<Box p={4}>
						<Typography variant="body2">
							Dowiedz się czy konieczne jest powtórzenie badań lub pilna konsultacja z lekarzem. Jeśli tak
							- otrzymasz także potrzebny numer telefonu. Zajmie Ci to jedynie około trzech minut.
						</Typography>
					</Box>
				</Stack>
			</Box>
			<Box component="section">
				<Stack sx={{ backgroundColor: grey[100] }} p={1}>
					<Typography variant="h3" align="center" p={2} color="black">
						Przygotuj
					</Typography>
					<Stack direction="row" p={6}>
						<Box sx={{ flex: 1 }}>
							<Typography variant="h6" align="center" p={2} color="black">
								Dane pacjenta
							</Typography>
							<Typography variant="body2" align="center">
								Podstawowe dane, takie jak data urodzenia czy wiodący oddział szpitalny.
							</Typography>
						</Box>
						<Box sx={{ flex: 1 }}>
							<Typography variant="h6" align="center" p={2} color="black">
								Zaobserwowane objawy
							</Typography>
							<Typography variant="body2" align="center">
								Temperatura i niepokojące symptomy np. dreszcze, toksyczności śluzówkowe.{" "}
							</Typography>
						</Box>
						<Box sx={{ flex: 1 }}>
							<Typography variant="h6" align="center" p={2} color="black">
								Aktualne i poprzednie badania{" "}
							</Typography>
							<Typography variant="body2" align="center">
								Wyniki badań laboratoryjnych (HGB, WBC, PLT, ALT, AST, NEUT).{" "}
							</Typography>
						</Box>
					</Stack>
					<Box display="flex" justifyContent="center" p={2}>
						<Button variant="contained" onClick={onClickStart}>
							Przejdź do formularza
						</Button>
					</Box>
				</Stack>
			</Box>
			<Box component="section"></Box>
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
				>
					<Stack>
						<Typography variant="h6" align="center">
							MaliMocni
						</Typography>
						<Typography variant="h4" align="center">
							Rodzic zna swoje dziecko najlepiej i często jako pierwszy dostrzega niepokojące objawy.
							Dlatego zapewniamy mu wsparcie, aby mógł szybko i pewnie reagować.
						</Typography>
					</Stack>
				</Box>
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
