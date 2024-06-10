import { useState } from "react";
import { Grid, Box, Stack, Typography } from "@mui/material";
import { FieldValues, SubmitErrorHandler, SubmitHandler, useFormContext } from "react-hook-form";
import imageDesktopFormSideBackground from "/images/desktop-form-side-background.png";
import imageMobileFormTopBackground from "/images/mobile-form-top-background.png";
import imageLogo from "/images/logo-mm.svg";
import LandingPage from "./LandingPage";
import Footer from "./Footer";
import StraightIcon from "@mui/icons-material/Straight";
import CheckIcon from '@mui/icons-material/Check';

type Step = {};

const stepLandingPage = 0;

const steps = ["Informacje o pacjencie", "Niepokojące objawy", "Aktualne badania", "Poprzednie badania"];

export default function StepController() {
	const [activeStep, setActiveStep] = useState<number>(stepLandingPage);

	const handleStart = () => {
		setActiveStep(stepLandingPage + 1);
	};

	if (activeStep === stepLandingPage) {
		return <LandingPage onClickStart={handleStart} />;
	}

	return (
		<>
			<Grid container component="main">
				<Grid
					item
					xs={12}
					sm={4}
					sx={{
						backgroundImage: {
							xs: `url(${imageMobileFormTopBackground})`,
							sm: `url(${imageDesktopFormSideBackground})`,
						},
						backgroundSize: "cover",
						backgroundPosition: "top",
						backgroundRepeat: "no-repeat",
					}}
				>
					<Stack mb={4}>
						<Box
							component="img"
							src={imageLogo}
							alt="logo MaliMocni"
							sx={{
								height: { xs: 20, sm: 40 },
							}}
							mt={2}
							mb={4}
						/>
						{steps.map((step, idx) => (
							<Stack color="white">
								<Stack direction="row">
									<Box
										width={56}
										height={56}
										border={2}
										borderRadius="50%"
										display="flex"
										alignItems="center"
										justifyContent="center"
										position="relative"
									>
										<Box
											width={43}
											height={43}
											borderRadius="50%"
											display="flex"
											alignItems="center"
											justifyContent="center"
											position="absolute"
											sx={{
												backgroundColor: idx + 1 === activeStep ? "white" : "transparent",
											}}
										>
											<Typography
												variant="h6"
												color={idx + 1 === activeStep ? "green" : "inherit"}
											>
												{idx + 1}
											</Typography>
										</Box>
									</Box>
									<Box pl={2}>
										<Typography variant="body2">
											Krok {idx + 1}/{steps.length}
										</Typography>
										<Typography variant="h5">{step}</Typography>
									</Box>
								</Stack>
								{idx < steps.length - 1 ? (
									<Box py={2}>
										<StraightIcon
											fontSize="large"
											color="inherit"
											sx={{ transform: "rotate(180deg)" }}
										/>
									</Box>
								) : (
									""
								)}
							</Stack>
						))}
					</Stack>
				</Grid>
				<Grid item xs={12} sm={8} sx={{ backgroundColor: "white" }}></Grid>
			</Grid>
			<Footer />
		</>
	);
}
