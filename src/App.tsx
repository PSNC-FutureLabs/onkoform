import { ThemeProvider, createTheme } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/pl";
import HorizontalStepper from "./components/HorizontalStepper";
import { Container } from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { FormFields, schema } from "./business/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { defaultFromValues } from "./business";
import "./App.css";
import { lightGreen, grey } from "@mui/material/colors";

const theme = createTheme({
	typography: {
		fontFamily: "'Bio Sans', sans-serif",
		h1: {
			color: "gray",
			fontSize: "48px",
			fontWeight: "700",
		},
		h3: {
			color: "gray",
			fontSize: "20px",
			fontWeight: "400",
		},
	},
	palette: {
		background: {
			default: grey[800],
		},
		primary: {
			main: "#000",
			light: grey[800],
			dark: grey[800],
			contrastText: "#F7F9FC",
		},
		secondary: {
			main: lightGreen[500],
			contrastText: grey[800],
		},
		success: {
			main: lightGreen[500],
			contrastText: grey["A100"],
		},
		info: {
			main: lightGreen[500],
			light: lightGreen[900],
			dark: lightGreen[200],
		},
	},
});

function App() {
	const methods = useForm<FormFields>({
		defaultValues: defaultFromValues,
		resolver: zodResolver(schema),
		reValidateMode: "onBlur",
		mode: "onBlur",
	});

	return (
		<ThemeProvider theme={theme}>
			<FormProvider {...methods}>
				<LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pl">
					<Container maxWidth="sm" sx={{ p: 2 }}>
						<form>
							<HorizontalStepper />
						</form>
						<DevTool control={methods.control} />
					</Container>
				</LocalizationProvider>
			</FormProvider>
		</ThemeProvider>
	);
}

export default App;
