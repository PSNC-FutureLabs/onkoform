import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ActiveStep from "../ActiveStep";
import { Stack } from "@mui/material";
import { steps } from "../../business";
import { FieldValues, SubmitErrorHandler, SubmitHandler, useFormContext } from "react-hook-form";
import { Summary } from "../Summary";

export default function HorizontalLinearStepper() {
	const [activeStep, setActiveStep] = React.useState(0);
	const { trigger, handleSubmit } = useFormContext();

	const onSubmit: SubmitHandler<FieldValues> = async (data) => console.log(data);

	const onInvalid: SubmitErrorHandler<FieldValues> = (errors) => console.log(errors);

	const validateStep = async () => {
		const fields = steps[activeStep].fields;
		const output = await trigger(fields.flat(), { shouldFocus: true });
		return output;
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleNext = async () => {
		const isStepValid = await validateStep();
		if (!isStepValid) return;

		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleLast = async () => {
		const isStepValid = await validateStep();
		if (!isStepValid) return;
		handleSubmit(onSubmit, onInvalid)();
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	return (
		<Box sx={{ width: "100%" }}>
			<Stepper activeStep={activeStep} alternativeLabel>
				{steps.map(({ name }) => {
					const stepProps: { completed?: boolean } = {};
					return (
						<Step key={name} {...stepProps}>
							<StepLabel>{name}</StepLabel>
						</Step>
					);
				})}
			</Stepper>
			{activeStep === steps.length ? (
				<React.Fragment>
					<Summary />
					<Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
						<Box sx={{ flex: "1 1 auto" }} />
						<Button onClick={handleReset}>Wypełnij ponownie</Button>
					</Box>
				</React.Fragment>
			) : (
				<React.Fragment>
					<Stack spacing={4} mt={4} style={{ minHeight: "50vh" }}>
						<Typography variant="h5">Uważnie wypełnij wszystkie pola</Typography>
						<ActiveStep activeStep={activeStep} />
					</Stack>
					<Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
						{activeStep !== 0 ? (
							<Button color="inherit" onClick={handleBack} sx={{ mr: 1 }}>
								Wróć
							</Button>
						) : (
							""
						)}
						<Box sx={{ flex: "1 1 auto" }} />
						{activeStep === steps.length - 1 ? (
							<Button onClick={handleLast} type="button">
								Zakończ
							</Button>
						) : (
							<Button onClick={handleNext} type="button">
								Dalej
							</Button>
						)}
					</Box>
				</React.Fragment>
			)}
		</Box>
	);
}
