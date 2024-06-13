import { useState } from "react";
import { Grid, Box, Stack, Typography } from "@mui/material";
import { FieldValues, SubmitErrorHandler, SubmitHandler, useFormContext } from "react-hook-form";
import imageDesktopFormSideBackground from "/images/desktop-form-side-background.png";
import imageMobileFormTopBackground from "/images/mobile-form-top-background.png";
import imageLogo from "/images/logo-mm.svg";
import LandingPage from "./LandingPage";
import Footer from "./Footer";
import StraightIcon from "@mui/icons-material/Straight";
import CheckIcon from "@mui/icons-material/Check";

enum StepStatus {
	Empty,
	Active,
	Completed,
}

type StepDescription = {
	name: string;
	status: StepStatus;
};

const steps: Array<StepDescription> = [
	{ name: "Informacje o pacjencie", status: StepStatus.Completed },
	{ name: "Niepokojące objawy", status: StepStatus.Active },
	{ name: "Aktualne badania", status: StepStatus.Empty },
	{ name: "Poprzednie badania", status: StepStatus.Empty },
];

const stepLandingPage = 0;

function Step({ step, stepIndex, stepsCount }: { step: StepDescription; stepIndex: number; stepsCount: number }) {
	return (
		<Stack color="white">
			<Stack direction="row">
				<Box
					width={56}
					height={56}
					border={step.status === StepStatus.Completed ? "none" : 1}
					borderRadius="50%"
					display="flex"
					alignItems="center"
					justifyContent="center"
					position="relative"
					sx={{
						background:
							step.status === StepStatus.Completed
								? "linear-gradient(225deg, #DC6D24 -2%, #EBCF41 122%)"
								: "transparent",
					}}
				>
					<Box
						width={44}
						height={44}
						borderRadius="50%"
						display="flex"
						alignItems="center"
						justifyContent="center"
						position="absolute"
						sx={{
							backgroundColor: step.status === StepStatus.Active ? "white" : "transparent",
						}}
					>
						{step.status === StepStatus.Completed ? (
							<CheckIcon />
						) : (
							<Typography variant="h6" color={step.status === StepStatus.Active ? "green" : "inherit"}>
								{stepIndex}
							</Typography>
						)}
					</Box>
				</Box>
				<Box pl={2}>
					<Typography variant="body2">
						Krok {stepIndex}/{stepsCount}
					</Typography>
					<Typography variant="h5">{step.name}</Typography>
				</Box>
			</Stack>
			{stepIndex < stepsCount ? (
				<Box width={56} py={2} display="flex" justifyContent="center">
					<StraightIcon fontSize="large" color="inherit" sx={{ transform: "rotate(180deg)" }} />
				</Box>
			) : (
				""
			)}
		</Stack>
	);
}

export default function StepController() {
	const [activeStep, setActiveStep] = useState<number>(stepLandingPage);

	const handleLandingPage = () => {
		setActiveStep(stepLandingPage);
	};

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
								cursor: "pointer"
							}}
							mt={2}
							mb={4}
							onClick={handleLandingPage}
						/>
						{steps.map((item, idx) => (
							<Step key={idx} step={item} stepIndex={idx + 1} stepsCount={steps.length} />
						))}
					</Stack>
				</Grid>
				<Grid item xs={12} sm={8} sx={{ backgroundColor: "white" }}></Grid>
			</Grid>
			<Footer />
		</>
	);
}
