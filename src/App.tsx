import "./App.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import HorizontalStepper from "./components/HorizontalStepper";
import { Container } from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { FormFields, schema } from "./business/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";

function App() {
  const methods = useForm<FormFields>({
    defaultValues: {
      symptoms: [],
      HgbUnit: "g/dl",
      NeutUnit: "%",
      Hgb2Unit: "g/dl",
      Neut2Unit: "%",
    },
    resolver: zodResolver(schema),
    reValidateMode: "onBlur",
    mode: "onBlur",
  });

  return (
    <FormProvider {...methods}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Container maxWidth="sm">
          <form>
            <HorizontalStepper />
          </form>
          <DevTool control={methods.control} />
        </Container>
      </LocalizationProvider>
    </FormProvider>
  );
}

export default App;
