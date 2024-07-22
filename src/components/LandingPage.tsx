import Grid from "@mui/material/Grid";
import { Box, Stack, Button, Typography, Container } from "@mui/material";
import imageDesktopMainBackground from "/images/desktop-main-background.png";
import imageMobileMainBackground from "/images/mobile-main-background.png";
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
		<Box
			sx={{
				backgroundImage: {
					xs: `url(${imageMobileMainBackground})`,
					sm: `url(${imageDesktopMainBackground})`,
				},
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
					minHeight={{ sm: "100vh" }}
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
				</Grid>
			</Container>
		</Box>
	);
}
