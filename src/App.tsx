import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import HorizontalStepper from "./components/HorizontalStepper";
import { Container } from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { FormFields, schema } from "./business/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { defaultFromValues } from "./business";
import "./App.css";

function App() {
	const methods = useForm<FormFields>({
		defaultValues: defaultFromValues,
		resolver: zodResolver(schema),
		reValidateMode: "onBlur",
		mode: "onBlur",
	});

	return (
		<FormProvider {...methods}>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<Container maxWidth="sm" sx={{ p: 2 }}>
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
