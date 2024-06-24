import { useState, useEffect } from "react";
import { Grid, Box, Stack, Typography, Button } from "@mui/material";
import { FieldValues, SubmitErrorHandler, SubmitHandler, useFormContext } from "react-hook-form";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import CheckIcon from "@mui/icons-material/Check";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import ReplayIcon from "@mui/icons-material/Replay";
import { grey } from "@mui/material/colors";
import imageDesktopFormSideBackground from "/images/desktop-form-side-background.png";
import imageMobileFormTopBackground from "/images/mobile-form-top-background.png";
import imageLogo from "/images/logo-mm.svg";
import LandingPage from "./LandingPage";
import { versionTag, StepType, steps } from "../business";
import { Summary } from "./Summary";
import ActiveStep from "./ActiveStep";

const stepLandingPage: number = -1;

export default function StepController() {
	const [activeStep, setActiveStep] = useState<number>(stepLandingPage);
	const [lastValidatedStep, setLastValidatedStep] = useState<number>(0);
	const { trigger, handleSubmit } = useFormContext();

	const onSubmit: SubmitHandler<FieldValues> = async (data) => console.log(data);

	const onInvalid: SubmitErrorHandler<FieldValues> = (errors) => console.log(errors);

	const validateStep = async () => {
		const fields = steps[activeStep].fields;
		const output = await trigger(fields.flat(), { shouldFocus: true });
		return output;
	};
	
	useEffect(() => {
		if (activeStep > lastValidatedStep) {
			setLastValidatedStep(activeStep);
		}
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
							background: isValidated
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
								backgroundColor: isActive ? "white" : "transparent",
							}}
						>
							{isValidated ? (
								<CheckIcon />
							) : (
								<Typography variant="h6" color={isActive ? "green" : "inherit"}>
									{step.id}
								</Typography>
							)}
						</Box>
					</Box>
					<Box pl={2}>
						<Typography variant="body2">
							{prefix}
							{step.id}/{count}
						</Typography>
						<Typography variant="h5">{step.name}</Typography>
					</Box>
				</Stack>
				{index + 1 < count && (
					<Box width={56} py={2} justifyContent="center" display={{ xs: "none", sm: "flex" }}>
						<HorizontalRuleIcon fontSize="large" color="inherit" sx={{ transform: "rotate(90deg)" }} />
					</Box>
				)}
			</Stack>
		);
	}

	const handleGoToLandingPage = () => {
		setActiveStep(stepLandingPage);
	};

	const handleGoToSummary = async () => {
		const isStepValid = await validateStep();
		if (!isStepValid) return;
		handleSubmit(onSubmit, onInvalid)();
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleStart = () => {
		setActiveStep(stepLandingPage + 1);
	};

	const handlePrevious = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleNext = async () => {
		const isStepValid = await validateStep();
		if (!isStepValid) return;

		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	if (activeStep === stepLandingPage) {
		return <LandingPage onClickStart={handleStart} />;
	}

	return (
		<Grid container component="main" minHeight="90vh">
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
				<Stack mt={2} mb={{ xs: 0, sm: 4 }} height="100%">
					<Box
						component="img"
						src={imageLogo}
						alt="logo MaliMocni"
						sx={{
							height: { xs: 20, sm: 40 },
							cursor: "pointer",
						}}
						mt={2}
						mb={1}
						onClick={handleGoToLandingPage}
					/>
					<Box>
						<Typography variant="body2" align="center" mt={0} mb={3} color={grey[800]}>
							wersja {versionTag.majorNo}.{versionTag.minorNo}.{versionTag.patchNo}-{versionTag.status} (
							{versionTag.date})
						</Typography>
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
					<Box display={{ xs: "block", sm: "none" }}>
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
			<Grid item container xs={12} sm={8} sx={{ backgroundColor: "white" }}>
				{activeStep < steps.length ? (
					<>
						<Grid item py={2}>
							<Typography variant="h4" color="black" align="left">
								Uważnie wypełnij wszystkie pola
							</Typography>
						</Grid>
						<Grid item container xs={12}>
							<ActiveStep activeStep={activeStep} />
						</Grid>
						<Grid item xs={12}>
							<Stack direction="row" justifyContent="space-between" spacing={4} py={2}>
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
									{activeStep === steps.length - 1 ? "Wyniki" : "Dalej"}
									<NavigateNextIcon />
								</Button>
							</Stack>
						</Grid>
					</>
				) : (
					<>
						<Summary />
						<Stack direction="row" justifyContent="center">
							<Button variant="outlined" onClick={handleStart}>
								<ReplayIcon />
								&nbsp;Wypełnij ponownie
							</Button>
						</Stack>
					</>
				)}
			</Grid>
		</Grid>
	);
}
