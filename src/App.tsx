import "./App.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import HorizontalStepper from "./components/HorizontalStepper";
import { Container } from "@mui/material";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

// TODO: infer FormValues type from zod
type FormValues = any;

function App() {
  const methods = useForm();
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <FormProvider {...methods}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Container maxWidth="sm">
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <HorizontalStepper />
          </form>
          <DevTool control={methods.control} />
        </Container>
      </LocalizationProvider>
    </FormProvider>
  );
}

export default App;
