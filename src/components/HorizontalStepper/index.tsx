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
import {
  FieldValues,
  SubmitErrorHandler,
  SubmitHandler,
  useFormContext,
} from "react-hook-form";

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());
  const { trigger, handleSubmit } = useFormContext();

  const isStepOptional = (step: number) => {
    // currently no step is optional
    return step === -10;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = async () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    // Validate inputs from active step
    const fields = steps[activeStep].fields;
    const output = await trigger(fields.flat(), { shouldFocus: true });
    if (!output) return;

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) =>
    console.log(data);
  const onInvalid: SubmitErrorHandler<FieldValues> = (errors) =>
    console.log(errors);

  const handleLast = () => {
    handleSubmit(onSubmit, onInvalid)();
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(({ name }, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={name} {...stepProps}>
              <StepLabel {...labelProps}>{name}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            Wszystkie kroki zostały zakończone.
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Stack spacing={4} mt={4} style={{ minHeight: "50vh" }}>
            <Typography variant="h5">
              Ostrożnie i dokładnie uzupełnij wszystkie pola
            </Typography>
            <ActiveStep activeStep={activeStep} />
          </Stack>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}>
              Wróć
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Pomiń
              </Button>
            )}
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
