import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/pl";
// import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Grid from "@mui/material/Grid";
import { Container, CssBaseline } from "@mui/material";
import { lightGreen, grey } from "@mui/material/colors";
import { useForm, FormProvider } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { FormFields, schema } from "./business/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { defaultFromValues } from "./business";
import HorizontalStepper from "./components/HorizontalStepper";
import "./App.css";

let theme = createTheme({
	typography: {
		fontFamily: "'Bio Sans', sans-serif",
		h1: {
			color: "white",
			fontSize: "44px",
			fontWeight: "700",
		},
		h2: {
			color: "black",
			fontSize: "32px",
			fontWeight: "700",
		},
		h3: {
			color: "white",
			fontSize: "24px",
			fontWeight: "400",
		},
		h4: {
			color: "white",
			fontSize: "20px",
			fontWeight: "400",
		},
		h5: {
			color: "white",
			fontSize: "20px",
			fontWeight: "400",
		},
		h6: {
			color: "white",
			fontSize: "16px",
			fontWeight: "400",
		},
	},
	palette: {
		background: {
			default: grey[400],
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

theme = responsiveFontSizes(theme);

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
					<CssBaseline />
					<Container disableGutters>
						<Grid container maxWidth="lg">
							<HorizontalStepper />
							{ "" && <DevTool control={methods.control} />}
						</Grid>
					</Container>
				</LocalizationProvider>
			</FormProvider>
		</ThemeProvider>
	);
}

export default App;
