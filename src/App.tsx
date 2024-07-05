import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/pl";
import { plPL } from "@mui/x-date-pickers/locales";
import { Container, CssBaseline, Grid } from "@mui/material";
import { FormFields, schema } from "./business/form-schema";
import { useForm, FormProvider } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import { formDefaultValues, formTestValues } from "./business";
import Stepper from "./components/Stepper";
import Footer from "./components/Footer";
import { lightGreen, grey, blue } from "@mui/material/colors";
import "./App.css";

let theme = createTheme(
	{
		typography: {
			fontFamily: "'Bio Sans', sans-serif",
			h1: {
				fontSize: "44px",
				fontWeight: "700",
			},
			h2: {
				fontSize: "32px",
				fontWeight: "700",
			},
			h3: {
				fontSize: "24px",
				fontWeight: "400",
			},
			h4: {
				fontSize: "20px",
				fontWeight: "400",
			},
			h5: {
				fontSize: "20px",
				fontWeight: "400",
			},
			h6: {
				fontSize: "16px",
				fontWeight: "400",
			},
		},
		palette: {
			background: {
				default: "white",
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
				main: blue[500],
				light: blue[900],
				dark: blue[200],
			},
		},
	},
	plPL
);

theme = responsiveFontSizes(theme);

function App() {
	const methods = useForm<FormFields>({
		defaultValues: window.location.hostname === "localhost" ? formTestValues : formDefaultValues,
		resolver: zodResolver(schema),
		reValidateMode: "onChange",
		mode: "all",
	});

	return (
		<ThemeProvider theme={theme}>
			<FormProvider {...methods}>
				<form>
					<LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pl">
						<CssBaseline />
						<Container
							disableGutters
							maxWidth="lg"
							sx={{
								minWidth: {
									xs: "100%",
									sm: "800px",
								},
							}}
						>
							<Grid container>
								<Stepper />
								{"" && <DevTool control={methods.control} />}
								<Footer />
							</Grid>
						</Container>
					</LocalizationProvider>
				</form>
			</FormProvider>
		</ThemeProvider>
	);
}

export default App;
