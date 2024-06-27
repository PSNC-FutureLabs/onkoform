// import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Grid from "@mui/material/Grid";
import { Box, Stack, Button, Typography } from "@mui/material";
import imageDesktopMainBackground from "/images/desktop-main-background.png";
import imageMobileMainBackground from "/images/mobile-main-background.png";
import imageTextLogo from "/images/logo-mm.svg";
import imageCrownLogo from "/images/logo-mm-crown.svg";
import imageBoyGirlTeddyBear from "/images/boy-girl-teddybear.svg";
import imageMomKid from "/images/mom-kid.svg";
import imageSectionOverview from "/images/section-overview.svg";
import imageSectionMission from "/images/section-mission.svg";
import imageCoCreatorLogo1 from "/images/logo-szpital-kliniczny-im-karola-jonschera.svg";
import imageCoCreatorLogo2 from "/images/logo-fundacja-pomocy-dzieciom-z-chorobami-nowotworowymi.svg";
import imageCoCreatorLogo3 from "/images/logo-capgemini.svg";
import imageCoCreatorLogo4 from "/images/logo-psnc-future-labs.svg";
import SickIcon from "@mui/icons-material/Sick";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import { grey } from "@mui/material/colors";
import { versionTag } from "../business";

interface LandingPageProps {
	onClickStart: () => void;
}

export default function LandingPage({ onClickStart }: LandingPageProps) {
	const backgroundColor = "white";
	const backgroundColorAlternate = grey[200];

	interface CoCreatorSubSectionProps {
		image: string;
		title: string;
		body: string;
	}

	const CoCreatorSubSection: React.FC<CoCreatorSubSectionProps> = ({ image, title, body }) => {
		return (
			<Grid item component="section" xs={12} sm={6} lg={3} sx={{ backgroundColor: backgroundColorAlternate }}>
				<Box>
					<Stack alignItems="center">
						<Box height={100} display="flex" alignItems="center">
							<Box component="img" src={image} alt={"logo " + title} />
						</Box>
						<Typography variant="h6" align="center" p={2} color="black">
							{body}
						</Typography>
					</Stack>
				</Box>
			</Grid>
		);
	};

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
				pt={{ xs: 2, sm: 0 }}
				pb={{ xs: 4, sm: 0 }}
				height={1080}
				alignItems="flex-start"
			>
				<Grid item xs={12} height="40px">
					<Stack direction="row" width="100%" justifyContent={{ xs: "center", sm: "flex-start" }}>
						<Box
							component="img"
							src={imageTextLogo}
							alt="Logo projektu Mali Mocni"
							height={{ xs: "20", sm: "32" }}
							p={4}
						/>
					</Stack>
				</Grid>
				<Grid item xs={12} sm={3}>
					<Stack direction="row">
						<Box
							component="img"
							src={imageBoyGirlTeddyBear}
							alt="chłopiec, dziewczynka, pluszowy miś"
							width={{ xs: "50%", sm: "100%" }}
						/>
						<Box
							component="img"
							src={imageMomKid}
							alt="mama i dziecko"
							display={{ xs: "block", sm: "none" }}
							sx={{ width: "50%" }}
						/>
					</Stack>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Stack>
						<Typography variant="h1" align="center" mt={2} mb={2}>
							Wyniki badań krwi
							<br />u dzieci z chorobami
							<br />
							nowotworowymi
						</Typography>
						<Typography variant="h3" align="center" mb={4} px={{ xs: 6, sm: 0 }}>
							Kliknij “Rozpocznij” i przejdź do szybkiej i prostej analizy wyników badania krwi Twojego
							dziecka
						</Typography>
						<Box display="flex" justifyContent="center" mb={0}>
							<Button variant="contained" size="large" onClick={onClickStart}>
								Rozpocznij
							</Button>
						</Box>
						<Typography variant="body2" align="center" mt={2} mb={1} color={grey[800]}>
							wersja {versionTag.majorNo}.{versionTag.minorNo}.{versionTag.patchNo}-{versionTag.status} (
							{versionTag.date})
						</Typography>
					</Stack>
				</Grid>
				<Grid item xs={6} sm={3}>
					<Box
						component="img"
						src={imageMomKid}
						alt="mama i dziecko"
						display={{ xs: "none", sm: "block" }}
						sx={{ width: "100%" }}
					/>
				</Grid>
			</Grid>
			<Grid item component="section" xs={12} sx={{ backgroundColor: backgroundColor }}>
				<Stack direction={{ xs: "column", sm: "row" }} p={4}>
					<Box
						component="img"
						sx={{
							height: { xs: 405, sm: 647 },
						}}
						src={imageSectionOverview}
						alt="poglądowy wygląd aplikacji na smartfonie"
					/>
					<Box pl={{ xs: 2, sm: 0 }} pr={{ xs: 2, sm: 15 }} py={{ xs: 2, sm: 10 }}>
						<Typography
							variant="h2"
							lineHeight={1.5}
							color="black"
							mb={3}
							sx={{ textAlign: { xs: "left", sm: "left" } }}
						>
							W prosty i intuicyjny sposób zweryfikuj <strong>niepokojące</strong> objawy i wyniki badań
							laboratoryjnych <strong>Twojego dziecka</strong>.
						</Typography>
						<Typography variant="h3" color="black" sx={{ textAlign: { xs: "left", sm: "left" } }}>
							Dowiedz się czy konieczne jest powtórzenie badań lub pilna konsultacja z lekarzem. Jeśli tak
							- otrzymasz także potrzebny numer telefonu. Zajmie Ci to jedynie około trzech minut.
						</Typography>
					</Box>
				</Stack>
			</Grid>
			<Grid item component="section" xs={12} sx={{ backgroundColor: backgroundColorAlternate }}>
				<Typography variant="h2" align="center" p={4} fontWeight={700}>
					Przygotuj
				</Typography>
			</Grid>
			<Grid item component="section" xs={12} sm={4} sx={{ backgroundColor: backgroundColorAlternate }}>
				<Box py={2} px={4}>
					<Stack alignItems="center">
						<LocalHospitalIcon fontSize="large" />
						<Typography variant="h5" align="center" p={2} color="black" sx={{ textTransform: "uppercase" }}>
							Dane
							<br />
							pacjenta
						</Typography>
						<Typography variant="body1" align="center">
							Podstawowe dane, takie jak data urodzenia czy prowadzący oddział szpitalny.
						</Typography>
					</Stack>
				</Box>
			</Grid>
			<Grid item component="section" xs={12} sm={4} sx={{ backgroundColor: backgroundColorAlternate }}>
				<Box py={2} px={4}>
					<Stack alignItems="center">
						<SickIcon fontSize="large" />
						<Typography variant="h5" align="center" p={2} color="black" sx={{ textTransform: "uppercase" }}>
							Zaobserwowane
							<br />
							objawy
						</Typography>
						<Typography variant="body1" align="center">
							Temperatura i niepokojące symptomy np. dreszcze, toksyczności śluzówkowe.
						</Typography>
					</Stack>
				</Box>
			</Grid>
			<Grid item component="section" xs={12} sm={4} sx={{ backgroundColor: backgroundColorAlternate }}>
				<Box py={2} px={4}>
					<Stack alignItems="center">
						<QueryStatsIcon fontSize="large" />
						<Typography variant="h5" align="center" p={2} color="black" sx={{ textTransform: "uppercase" }}>
							Aktualne i poprzednie
							<br />
							badania
						</Typography>
						<Typography variant="body1" align="center">
							Wyniki badań laboratoryjnych (HGB, WBC, PLT, ALT, AST, NEUT).{" "}
						</Typography>
					</Stack>
				</Box>
			</Grid>
			<Grid item component="section" xs={12} sx={{ backgroundColor: backgroundColorAlternate }}>
				<Box display="flex" justifyContent="center" p={6}>
					<Button variant="contained" size="large" onClick={onClickStart}>
						Przejdź do formularza
					</Button>
				</Box>
			</Grid>
			<Grid item component="section" sx={{ backgroundColor: backgroundColor }}>
				<Stack
					direction="row"
					px={{ xs: 0, sm: 6 }}
					py={{ xs: 2, sm: 8 }}
					justifyContent="space-around"
					alignItems="center"
				>
					<Box sx={{ width: { xs: "60%", sm: "40%" } }} p={4}>
						<Typography variant="h3" color="black" mb={2}>
							Tworzymy przestrzeń wsparcia dla <strong>dzieci z chorobami nowotworowymi</strong> i ich
							opiekunów.
						</Typography>
						<Typography variant="body1">
							Dzięki zaangażowaniu doświadczonych lekarzy, programistów i grafików pomagamy lepiej
							zrozumieć sytuację zdrowotną dziecka oraz podjąć odpowiednie kroki w odpowiednim czasie.
						</Typography>
					</Box>
					<Box
						component="img"
						sx={{
							height: { xs: 180, sm: 574 },
						}}
						src={imageSectionMission}
						alt="zespół podczas pracy nad aplikacją"
					/>
				</Stack>
			</Grid>
			<Grid
				item
				component="section"
				sx={{
					background: "linear-gradient(158.95deg, #04804C -64.05%, #7FBB53 130.65%)",
				}}
			>
				<Stack p={{ xs: 6, sm: 10 }}>
					<Box
						component="img"
						src={imageCrownLogo}
						alt="logo MaliMocni"
						mb={4}
						sx={{
							height: { xs: 20, sm: 40 },
						}}
					/>
					<Box>
						<Typography variant="h2" align="center" color="white">
							Rodzic zna swoje dziecko najlepiej i często jako pierwszy dostrzega niepokojące objawy.
							Dlatego zapewniamy mu wsparcie, aby mógł szybko i pewnie reagować.
						</Typography>
					</Box>
				</Stack>
			</Grid>
			<Grid item component="section" xs={12} sx={{ backgroundColor: backgroundColor }}>
				<Stack
					direction="row"
					px={{ xs: 0, sm: 6 }}
					py={{ xs: 2, sm: 4 }}
					justifyContent="space-around"
					alignItems="center"
				>
					<Box
						component="img"
						sx={{
							height: { xs: 150, sm: 300 },
						}}
						src={imageBoyGirlTeddyBear}
						alt="chłopiec, dziewczynka, pluszowy miś"
					/>
					<Box sx={{ width: "50%" }}>
						<Typography variant="h2" color="black">
							Kim są Mali Mocni?
						</Typography>
						<Typography variant="h4" color="black" mt={3}>
							Mali Mocni to prawdziwi bohaterowie, wykazujący się niezwykłą odwagą i siłą w obliczu walki
							z chorobami onkologicznymi.
						</Typography>
					</Box>
				</Stack>
			</Grid>
			<Grid item component="section" xs={12} sx={{ backgroundColor: backgroundColorAlternate }}>
				<Typography variant="h2" align="center" p={{ xs: 2, sm: 4 }} fontWeight={700}>
					Współtwórcy
				</Typography>
			</Grid>
			<CoCreatorSubSection
				image={imageCoCreatorLogo1}
				title="Szpital"
				body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ex animi quae libero aut consectetur nesciunt..."
			/>
			<CoCreatorSubSection
				image={imageCoCreatorLogo2}
				title="Fundacja"
				body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ex animi quae libero aut consectetur nesciunt..."
			/>
			<CoCreatorSubSection
				image={imageCoCreatorLogo3}
				title="Software House"
				body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ex animi quae libero aut consectetur nesciunt..."
			/>
			<CoCreatorSubSection
				image={imageCoCreatorLogo4}
				title="Koordynacja"
				body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ex animi quae libero aut consectetur nesciunt..."
			/>
			<Grid
				item
				component="section"
				xs={12}
				pb={{ xs: 3, sm: 6 }}
				sx={{ backgroundColor: backgroundColorAlternate }}
			>
				<Box display="flex" justifyContent="center" p={4}>
					<Button variant="contained" size="large" onClick={onClickStart}>
						Przejdź do formularza
					</Button>
				</Box>
			</Grid>
		</>
	);
}
