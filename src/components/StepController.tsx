import { useState } from "react";
import { Grid, Box, Stack, Typography, Button } from "@mui/material";
import { FieldValues, SubmitErrorHandler, SubmitHandler, useFormContext } from "react-hook-form";
import imageDesktopFormSideBackground from "/images/desktop-form-side-background.png";
import imageMobileFormTopBackground from "/images/mobile-form-top-background.png";
import imageLogo from "/images/logo-mm.svg";
import LandingPage from "./LandingPage";
import Footer from "./Footer";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import CheckIcon from "@mui/icons-material/Check";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

enum StepStatus {
	Empty,
	Active,
	Completed,
}

type StepDescription = {
	id: number;
	name: string;
	status: StepStatus;
};

const stepLandingPage: number = 0;

const steps: Array<StepDescription> = [
	{ id: 1, name: "Informacje o pacjencie", status: StepStatus.Empty },
	{ id: 2, name: "Niepokojące objawy", status: StepStatus.Empty },
	{ id: 3, name: "Aktualne badania", status: StepStatus.Empty },
	{ id: 4, name: "Poprzednie badania", status: StepStatus.Empty },
];

const stepFirstId = steps.length > 0 ? steps[0].id : 0;
const stepLastId = steps.length > 0 ? steps[steps.length - 1].id : 0;

export default function StepController() {
	const [activeStep, setActiveStep] = useState<number>(stepLandingPage);

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
								<Typography
									variant="h6"
									color={step.status === StepStatus.Active ? "green" : "inherit"}
								>
									{step.id}
								</Typography>
							)}
						</Box>
					</Box>
					<Box pl={2}>
						<Typography variant="body2">
							Krok {step.id}/{stepsCount}
						</Typography>
						<Typography variant="h5">{step.name}</Typography>
					</Box>
				</Stack>
				{stepIndex < stepsCount ? (
					<Box width={56} py={2} display="flex" justifyContent="center">
						<HorizontalRuleIcon fontSize="large" color="inherit" sx={{ transform: "rotate(90deg)" }} />
					</Box>
				) : (
					""
				)}
			</Stack>
		);
	}

	const handleGoToLandingPage = () => {
		setActiveStep(stepLandingPage);
	};

	const handleGoToSummary = () => {
		setActiveStep(stepLandingPage);
	};

	const handleStart = () => {
		setActiveStep(stepLandingPage + 1);
	};

	const handleNext = () => {
		if (activeStep < stepLastId) setActiveStep(activeStep + 1);
	};

	const handlePrevious = () => {
		if (activeStep > stepFirstId) setActiveStep(activeStep - 1);
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
								cursor: "pointer",
							}}
							mt={2}
							mb={4}
							onClick={handleGoToLandingPage}
						/>
						{steps.map((item, idx) => (
							<Step key={idx} step={item} stepIndex={idx + 1} stepsCount={steps.length} />
						))}
					</Stack>
				</Grid>
				<Grid item xs={12} sm={8} sx={{ backgroundColor: "white" }}>
					<Stack height="100%" width="100%" py={{ xs: 2, sm: 6 }} px={{ xs: 2, sm: 16 }}>
						<Typography variant="h4" color="black" align="center">
							Uważnie wypełnij wszystkie pola
						</Typography>
						<Typography variant="h2" color="black" align="center">
							{activeStep}
						</Typography>
						<Stack direction="row" justifyContent="space-between">
							<Button
								variant="outlined"
								onClick={activeStep === stepFirstId ? handleGoToLandingPage : handlePrevious}
								sx={{ width: "25%" }}
							>
								<NavigateBeforeIcon />
								{activeStep === stepFirstId ? "Wyjdź" : "Cofnij"}
							</Button>
							<Button
								variant="outlined"
								onClick={activeStep === stepLastId ? handleGoToSummary : handleNext}
								sx={{ width: "25%" }}
							>
								{activeStep === stepLastId ? "Wyniki" : "Dalej"}
								<NavigateNextIcon />
							</Button>
						</Stack>
					</Stack>
				</Grid>
			</Grid>
			<Footer />
		</>
	);
}
