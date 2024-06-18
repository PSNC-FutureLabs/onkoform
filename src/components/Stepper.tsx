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
import { StepType, steps } from "../business";
import ActiveStep from "./ActiveStep";
import { Summary } from "./Summary";

const stepLandingPage: number = -1;

export default function StepController() {
	const [activeStep, setActiveStep] = useState<number>(stepLandingPage);
	const { trigger, handleSubmit } = useFormContext();

	const stepFirstId = steps.length > 0 ? steps[0].id : 0;
	const stepLastId = steps.length > 0 ? steps[steps.length - 1].id : 0;

	const onSubmit: SubmitHandler<FieldValues> = async (data) => console.log(data);

	const onInvalid: SubmitErrorHandler<FieldValues> = (errors) => console.log(errors);

	const validateStep = async () => {
		const fields = steps[activeStep].fields;
		const output = await trigger(fields.flat(), { shouldFocus: true });
		return output;
	};

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
					<Box width={56} py={2} display="flex" justifyContent="center">
						<HorizontalRuleIcon fontSize="large" color="inherit" sx={{ transform: "rotate(90deg)" }} />
					</Box>
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
					pb={{ sm: 40 }}
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
							<Step key={idx} prefix="Krok " step={item} index={idx} count={steps.length} />
						))}
					</Stack>
				</Grid>
				<Grid item xs={12} sm={8} sx={{ backgroundColor: "white" }}>
					<Stack
						height="100%"
						width="100%"
						py={{ xs: 2, sm: 6 }}
						px={{ xs: 2, sm: 16 }}
						spacing={{ xs: 2, sm: 4 }}
					>
						<Typography variant="h4" color="black" align="left">
							Uważnie wypełnij wszystkie pola
						</Typography>
						<ActiveStep activeStep={activeStep} />
						<Stack direction="row" justifyContent="space-between">
							<Button
								variant="outlined"
								onClick={activeStep === 0 ? handleGoToLandingPage : handlePrevious}
								sx={{ width: "25%" }}
							>
								<NavigateBeforeIcon />
								{activeStep === 0 ? "Wyjdź" : "Cofnij"}
							</Button>
							<Button
								variant="outlined"
								onClick={activeStep === steps.length - 1 ? handleGoToSummary : handleNext}
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
