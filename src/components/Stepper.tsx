import { useState, useEffect } from "react";
import { Container, Grid, Box, Stack, Typography, Button, Alert } from "@mui/material";
import { FieldValues, SubmitErrorHandler, SubmitHandler, useFormContext } from "react-hook-form";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CheckIcon from "@mui/icons-material/Check";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import ReplayIcon from "@mui/icons-material/Replay";
import imageLogo from "/images/logo-mm.svg";
import imageOrnament from "/images/ornament.svg";
import LandingPage from "./LandingPage";
import { StepType, steps } from "../business";
import { Summary } from "./Summary";
import ActiveStep from "./ActiveStep";

const landingPage: number = -1;
const firstStep: number = 0;
const lastStep: number = steps.length - 1 - 1;

export default function StepController() {
	const [activeStep, setActiveStep] = useState<number>(landingPage);
	const [lastValidatedStep, setLastValidatedStep] = useState<number>(firstStep);
	const { trigger, handleSubmit, getValues } = useFormContext();

	const [validationAlertText, setValidationAlertText] = useState<string | null>(null);

	const onSubmit: SubmitHandler<FieldValues> = async (data) => console.log(data);

	const onInvalid: SubmitErrorHandler<FieldValues> = (errors) => console.log(errors);

	const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

	const validateStep = async () => {
		const fields = steps[activeStep].fields;
		const output = await trigger(fields.flat(), { shouldFocus: true });

		const dateOfBirth = getValues("dateOfBirth");
		const actualLabTestDate = getValues("actual-lab-test-date");
		const previousLabTestDate = getValues("previous-lab-test-date");

		if (dateOfBirth && actualLabTestDate && previousLabTestDate) {
			if (actualLabTestDate < dateOfBirth || previousLabTestDate < dateOfBirth) {
				setValidationAlertText("Data badania nie może być wcześniejsza niż data urodzenia.");
				scrollToTop();
				return false;
			}
			if (actualLabTestDate < previousLabTestDate && activeStep === lastStep) {
				setValidationAlertText(
					"Data poprzedniego badania nie może być późniejsza niż data aktualnego badania."
				);
				scrollToTop();
				return false;
			}
			setValidationAlertText(null);
		} else {
			setValidationAlertText(null);
		}

		return output;
	};

	useEffect(() => {
		if (activeStep > lastValidatedStep) {
			setLastValidatedStep(activeStep);
		}
		scrollToTop();
	}, [activeStep, lastValidatedStep]);

	function Step({
		prefix,
		step,
		index,
		count,
		isValidated = false,
	}: {
		prefix: string;
		step: StepType;
		index: number;
		count: number;
		isValidated?: boolean;
	}) {
		const isActive: boolean = index === activeStep;
		isValidated = isActive ? false : isValidated;

		return (
			<Stack color="white">
				<Stack direction="row">
					<Box
						width={56}
						height={56}
						border={isValidated ? "none" : 1}
						borderRadius="50%"
						display="flex"
						alignItems="center"
						justifyContent="center"
						position="relative"
						sx={{
							background: isValidated ? "#7FBB53" : "transparent",
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
								backgroundColor: isActive ? "white" : "transparent",
							}}
						>
							{isValidated ? (
								<CheckIcon />
							) : (
								<Typography variant="h6" color={isActive ? "#36984e" : "inherit"}>
									{step.id}
								</Typography>
							)}
						</Box>
					</Box>
					<Box pl={2}>
						<Typography variant="h6" color="inherit">
							{prefix}
							{step.id}/{count}
						</Typography>
						<Typography variant="h5">{step.name}</Typography>
					</Box>
				</Stack>
				{index + 1 < count && (
					<Box width={56} py={2} justifyContent="center" display={{ xs: "none", sm: "flex" }}>
						{index >= activeStep ? (
							<MoreVertIcon fontSize="large" color="inherit" />
						) : (
							<HorizontalRuleIcon fontSize="large" color="inherit" sx={{ transform: "rotate(90deg)" }} />
						)}
					</Box>
				)}
			</Stack>
		);
	}

	const handleGoToLandingPage = () => {
		setActiveStep(landingPage);
	};

	const handleGoToSummary = async () => {
		const isStepValid = await validateStep();
		if (!isStepValid) return;
		handleSubmit(onSubmit, onInvalid)();
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleStart = () => {
		setActiveStep(firstStep);
		setLastValidatedStep(firstStep);
	};

	const handlePrevious = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleNext = async () => {
		const isStepValid = await validateStep();
		if (!isStepValid) return;

		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	if (activeStep === landingPage) {
		return <LandingPage onClickStart={handleStart} />;
	}

	const xsBackground = "linear-gradient(to top right, #7FBB53 40%, #04804C)";
	const smBackground = `linear-gradient(to bottom, rgba(0, 96, 31, 0.8), rgba(95, 170, 40, 0.8)), url(${imageOrnament})`;

	return (
		<Box
			sx={{
				background: { xs: xsBackground, sm: smBackground },
				backgroundSize: { sm: "cover" },
				backgroundPosition: { sm: "center" },
				backgroundRepeat: { sm: "no-repeat" },
			}}
		>
			<Container maxWidth="lg" disableGutters>
				<Grid container component="main" minHeight="100vh">
					<Grid item xs={12} sm={4}>
						<Stack px={{ xs: 2, sm: 2 }} height="100%" alignItems="flex-start">
							<Box height={{ xs: 64, sm: 80 }} display="flex" alignItems="center">
								<Box
									component="img"
									src={imageLogo}
									alt="logo MaliMocni"
									sx={{
										height: { xs: 24 },
										cursor: "pointer",
									}}
									onClick={handleGoToLandingPage}
								/>
							</Box>
							<Box display={{ xs: "none", sm: "block" }}>
								{steps.map((item, idx) => (
									<Step
										key={idx}
										prefix="Krok "
										step={item}
										index={idx}
										count={steps.length}
										isValidated={idx < lastValidatedStep}
									/>
								))}
							</Box>
							<Box display={{ xs: "block", sm: "none" }} pb={2}>
								{activeStep < steps.length && (
									<Step
										key={activeStep}
										prefix="Krok "
										step={steps[activeStep]}
										index={activeStep}
										count={steps.length}
									/>
								)}
							</Box>
						</Stack>
					</Grid>
					<Grid
						item
						xs={12}
						sm={8}
						display="flex"
						justifyContent={"center"}
						sx={{ backgroundColor: "white" }}
					>
						{activeStep <= lastStep ? (
							<Stack width={{ xs: "90vw", sm: "60%" }}>
								<Typography variant="h4" color="black" align="left" py={4}>
									Uważnie wypełnij wszystkie pola
								</Typography>
								{validationAlertText ? (
									<Alert variant="outlined" severity="warning" sx={{ mb: 2 }}>
										{validationAlertText}
									</Alert>
								) : null}
								<ActiveStep activeStep={activeStep} />
								<Stack direction="row" justifyContent="space-between" py={4} width="100%">
									<Button
										variant="outlined"
										onClick={activeStep === 0 ? handleGoToLandingPage : handlePrevious}
									>
										<NavigateBeforeIcon />
										{activeStep === 0 ? "Wyjdź" : "Cofnij"}
									</Button>
									<Button
										variant="outlined"
										onClick={activeStep === steps.length - 1 ? handleGoToSummary : handleNext}
									>
										{activeStep === lastStep ? "Wyniki" : "Dalej"}
										<NavigateNextIcon />
									</Button>
								</Stack>
							</Stack>
						) : (
							<Stack>
								<Summary />
								<Stack direction="row" mt={3} mx={2} pt={4} borderTop="1px solid #EFF0F1">
									<Button variant="outlined" onClick={handleStart}>
										Wypełnij ponownie
									</Button>
								</Stack>
							</Stack>
						)}
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}
