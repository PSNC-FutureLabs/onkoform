import Grid from "@mui/material/Grid";
import { Box, Stack, Button, Typography, Container } from "@mui/material";
import imageOrnament from "/images/desktop-main-background-ornament.svg";
import imageTextLogo from "/images/logo-mm.svg";
import imageCrownLogo from "/images/logo-mm-crown.svg";
import imageBoyGirlTeddyBear from "/images/boy-girl-teddybear.svg";
import imageMomKid from "/images/mom-kid.svg";
import imageSectionOverview from "/images/section-overview.svg";
import imageSectionMission from "/images/section-mission.svg";
import iconPatientInfo from "/images/icon-patient-info.svg";
import iconSymptoms from "/images/icon-symptoms.svg";
import iconLabTests from "/images/icon-lab-tests.svg";
import imageCoCreatorLogo1 from "/images/logo-szpital-kliniczny-im-karola-jonschera.svg";
import imageCoCreatorLogo2 from "/images/logo-fundacja-pomocy-dzieciom-z-chorobami-nowotworowymi.svg";
import imageCoCreatorLogo3 from "/images/logo-capgemini.svg";
import imageCoCreatorLogo4 from "/images/logo-psnc-future-labs.svg";

interface LandingPageProps {
	onClickStart: () => void;
}

export default function LandingPage({ onClickStart }: LandingPageProps) {
	interface CoCreatorSubSectionProps {
		image: string;
		title: string;
		body: string;
	}

	const CoCreatorSubSection: React.FC<CoCreatorSubSectionProps> = ({ image, title, body }) => {
		return (
			<Grid item component="section" xs={12} sm={6} lg={3}>
				<Stack alignItems="center" height="100%">
					<Box height={150} display="flex" alignItems="center">
						<Box component="img" src={image} alt={"logo " + title} />
					</Box>
					<Typography variant="h6" align="center" p={2}>
						{body}
					</Typography>
				</Stack>
			</Grid>
		);
	};

	return (
		<>
			<Box
				sx={{
					background: `linear-gradient(to bottom, rgba(0, 96, 31, 0.8), rgba(95, 170, 40, 0.8)), url(${imageOrnament})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}
			>
				<Container maxWidth="lg" disableGutters>
					<Grid
						container
						component="header"
						pt={{ xs: 2, sm: 0 }}
						pb={{ xs: 4, sm: 0 }}
						color="white"
						minHeight={{ sm: "900px" }}
						alignItems="flex-start"
					>
						<Grid item xs={12} height={{ xs: 64, sm: 80 }}>
							<Stack direction="row" width="100%" justifyContent={{ xs: "center", sm: "flex-start" }}>
								<Box
									component="img"
									src={imageTextLogo}
									alt="Logo projektu Mali Mocni"
									height={{ xs: "20", sm: "32" }}
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
									Kliknij “Rozpocznij” i przejdź do szybkiej i prostej analizy wyników badania krwi
									Twojego dziecka
								</Typography>
								<Box display="flex" justifyContent="center" mb={0}>
									<Button variant="contained" size="large" onClick={onClickStart}>
										Rozpocznij
									</Button>
								</Box>
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
				</Container>
			</Box>
			<Box sx={{ background: "white" }}>
				<Container maxWidth="lg" disableGutters>
					<Grid
						container
						component="section"
						pt={{ xs: 2, sm: 0 }}
						pb={{ xs: 4, sm: 0 }}
						alignItems="flex-start"
					>
						<Grid item component="section" xs={12}>
							<Stack direction={{ xs: "column", sm: "row" }} p={4}>
								<Box
									component="img"
									sx={{
										height: { xs: 405, sm: 647 },
									}}
									src={imageSectionOverview}
									alt="poglądowy wygląd aplikacji na smartfonie"
								/>
								<Box pl={{ xs: 2, sm: 0 }} pr={{ xs: 2, sm: 15 }} py={{ xs: 2, sm: 10 }} color="black">
									<Typography
										variant="h2"
										lineHeight={1.5}
										mb={3}
										sx={{ textAlign: { xs: "left", sm: "left" } }}
									>
										W prosty i intuicyjny sposób zweryfikuj <strong>niepokojące</strong> objawy i
										wyniki badań laboratoryjnych <strong>Twojego dziecka</strong>.
									</Typography>
									<Typography variant="h3" sx={{ textAlign: { xs: "left", sm: "left" } }}>
										Dowiedz się czy konieczne jest powtórzenie badań lub pilna konsultacja z
										lekarzem. Jeśli tak - otrzymasz także potrzebny numer telefonu. Zajmie Ci to
										jedynie około trzech minut.
									</Typography>
								</Box>
							</Stack>
						</Grid>
					</Grid>
				</Container>
			</Box>
			<Box sx={{ background: "#F8F8F8" }}>
				<Container maxWidth="lg" disableGutters>
					<Grid
						container
						component="section"
						pt={{ xs: 2, sm: 0 }}
						pb={{ xs: 4, sm: 0 }}
						alignItems="flex-start"
					>
						<Grid item component="section" xs={12}>
							<Typography variant="h2" align="center" p={4} fontWeight={700}>
								Przygotuj
							</Typography>
						</Grid>
						<Grid item component="section" xs={12} sm={4}>
							<Box py={2} px={4}>
								<Stack alignItems="center">
									<Box component="img" src={iconPatientInfo} />
									<Typography
										variant="h5"
										align="center"
										p={2}
										fontWeight={700}
										sx={{ textTransform: "uppercase" }}
									>
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
						<Grid item component="section" xs={12} sm={4}>
							<Box py={2} px={4}>
								<Stack alignItems="center">
									<Box component="img" src={iconSymptoms} />
									<Typography
										variant="h5"
										align="center"
										p={2}
										fontWeight={700}
										sx={{ textTransform: "uppercase" }}
									>
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
						<Grid item component="section" xs={12} sm={4}>
							<Box py={2} px={4}>
								<Stack alignItems="center">
									<Box component="img" src={iconLabTests} />
									<Typography
										variant="h5"
										align="center"
										p={2}
										fontWeight={700}
										sx={{ textTransform: "uppercase" }}
									>
										Aktualne i poprzednie
										<br />
										badania
									</Typography>
									<Typography variant="body1" align="center">
										Wyniki badań laboratoryjnych (HGB, WBC, PLT, NEUT, ALT, AST).
									</Typography>
								</Stack>
							</Box>
						</Grid>
						<Grid item component="section" xs={12}>
							<Box display="flex" justifyContent="center" p={4}>
								<Button variant="contained" size="large" onClick={onClickStart}>
									Przejdź do formularza
								</Button>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Box>
			<Box sx={{ background: "white" }}>
				<Container maxWidth="lg" disableGutters>
					<Grid
						container
						component="section"
						pt={{ xs: 2, sm: 0 }}
						pb={{ xs: 4, sm: 0 }}
						alignItems="flex-start"
					>
						<Grid item component="section" xs={12} sm={6}>
							<Box p={{ xs: 5, sm: 10 }}>
								<Typography variant="h3" mb={2}>
									Tworzymy przestrzeń wsparcia dla <strong>dzieci z chorobami nowotworowymi</strong> i
									ich opiekunów.
								</Typography>
								<Typography variant="body1">
									Dzięki zaangażowaniu doświadczonych lekarzy, programistów i grafików pomagamy lepiej
									zrozumieć sytuację zdrowotną dziecka oraz podjąć odpowiednie kroki w odpowiednim
									czasie.
								</Typography>
							</Box>
						</Grid>
						<Grid item component="section" xs={12} sm={6}>
							<Box
								component="img"
								src={imageSectionMission}
								alt="zespół podczas pracy nad aplikacją"
								p={4}
								sx={{
									width: "100%",
									height: "auto",
									maxWidth: "100%",
								}}
							/>
						</Grid>
					</Grid>
				</Container>
			</Box>
			<Box
				sx={{
					background: `linear-gradient(to bottom, rgba(0, 96, 31, 0.8), rgba(95, 170, 40, 0.8)), url(${imageOrnament})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}
			>
				<Container maxWidth="lg" disableGutters>
					<Grid
						container
						component="section"
						pt={{ xs: 2, sm: 0 }}
						pb={{ xs: 4, sm: 0 }}
						alignItems="flex-start"
					>
						<Grid item component="section">
							<Stack px={{ xs: 10, sm: 30 }} py={{ xs: 10, sm: 15 }}>
								<Box
									component="img"
									src={imageCrownLogo}
									alt="logo MaliMocni"
									mb={4}
									sx={{
										height: { xs: 64, sm: 64 },
									}}
								/>
								<Box>
									<Typography variant="h2" align="center" color="white" fontWeight={400}>
										Rodzic zna swoje dziecko najlepiej i często jako pierwszy dostrzega niepokojące
										objawy. Dlatego zapewniamy mu wsparcie, aby mógł szybko i pewnie reagować.
									</Typography>
								</Box>
							</Stack>
						</Grid>
					</Grid>
				</Container>
			</Box>
			<Box sx={{ background: "white" }}>
				<Container maxWidth="lg" disableGutters>
					<Grid
						container
						component="section"
						pt={{ xs: 2, sm: 0 }}
						pb={{ xs: 4, sm: 0 }}
						alignItems="flex-start"
					>
						<Grid item component="section" xs={12} sm={6} p={{ xs: 7, sm: 10 }}>
							<Box
								component="img"
								sx={{
									height: { xs: 260, sm: 416 },
								}}
								src={imageBoyGirlTeddyBear}
								alt="chłopiec, dziewczynka, pluszowy miś"
							/>
						</Grid>
						<Grid item component="section" xs={12} sm={6} p={{ xs: 2, sm: 10 }} mb={{ xs: 10, sm: 0 }}>
							<Box p={{ xs: 0, sm: 10 }} px={{ xs: 2, sm: 10 }}>
								<Typography variant="h2">Kim są Mali Mocni?</Typography>
								<Typography variant="h4" mt={3}>
									Mali Mocni to prawdziwi bohaterowie, wykazujący się niezwykłą odwagą i siłą w
									obliczu walki z chorobami onkologicznymi.
								</Typography>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Box>
			<Box sx={{ background: "#F8F8F8" }}>
				<Container maxWidth="lg" disableGutters>
					<Grid
						container
						component="section"
						pt={{ xs: 2, sm: 0 }}
						pb={{ xs: 4, sm: 0 }}
						alignItems="flex-start"
					>
						<Grid item component="section" xs={12}>
							<Typography variant="h2" align="center" p={{ xs: 2, sm: 4 }} fontWeight={700}>
								Współtwórcy
							</Typography>
						</Grid>
						<CoCreatorSubSection
							image={imageCoCreatorLogo1}
							title="Szpital"
							body="Zapewniamy poprawność i rzetelność danych medycznych, jesteśmy inicjatorem platformy Mali Mocni."
						/>
						<CoCreatorSubSection
							image={imageCoCreatorLogo2}
							title="Fundacja"
							body="Wspieramy cały zespół, pomagamy na każdym etapie prac. Dzięki nam realizacja projektu jest możliwa."
						/>
						<CoCreatorSubSection
							image={imageCoCreatorLogo3}
							title="Software House"
							body="Realizujemy prace developerskie, dbając o każdy aspekt techniczny aplikacji."
						/>
						<CoCreatorSubSection
							image={imageCoCreatorLogo4}
							title="Koordynacja"
							body="Naszym zadaniem jest inkubacja pomysłu, koordynacja i zarządzanie projektem oraz działania UX/UI."
						/>
						<Grid item component="section" xs={12} pb={{ xs: 3, sm: 6 }}>
							<Box display="flex" justifyContent="center" p={4}>
								<Button variant="contained" size="large" onClick={onClickStart}>
									Przejdź do formularza
								</Button>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</>
	);
}
