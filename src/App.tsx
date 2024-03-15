import "./App.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import HorizontalStepper from "./components/HorizontalStepper";
import { Container } from "@mui/material";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { FormFields, schema } from "./components/form-components/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { HGBunits } from "./business";

function App() {
  const methods = useForm<FormFields>({
    defaultValues: {
      symptoms: [],
      HGBunits: HGBunits[0].value,
    },
    resolver: zodResolver(schema),
  });
  const onSubmit: SubmitHandler<FormFields> = (data) => console.log(data);

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
