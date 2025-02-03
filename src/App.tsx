import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/pl";
import { plPL, ukUA, enUS } from "@mui/x-date-pickers/locales";
import "dayjs/locale/pl";
import "dayjs/locale/en";
import "dayjs/locale/uk";
import { useTranslation } from "react-i18next";
import { Container, CssBaseline } from "@mui/material";
import { lightGreen, grey, blue } from "@mui/material/colors";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormFields, schema } from "./business/form";
import { getFormDefaultValues } from "./business";
import "./App.css";
import Stepper from "./components/Stepper";
import Footer from "./components/Footer";
import { SupportedLocales, locales } from "./helpers";
import ErrorPage from "./components/ErrorPage";
import { useEffect, useState } from "react";

const defaultTheme = createTheme();

let theme = createTheme(
  {
    breakpoints: {
      values: {
        ...defaultTheme.breakpoints.values,
        lg: 1140,
      },
    },
    typography: {
      fontFamily: "'Bio Sans', sans-serif",
      h1: {
        fontSize: "48px",
        fontWeight: "700",
        color: "white",
      },
      h2: {
        fontSize: "42px",
        fontWeight: "400",
        color: "#1F2023",
      },
      h3: {
        fontSize: "36px",
        fontWeight: "400",
        color: "#41444A",
      },
      h4: {
        fontSize: "24px",
        fontWeight: "400",
      },
      h5: {
        fontSize: "18px",
        fontWeight: "600",
      },
      h6: {
        fontSize: "16px",
        fontWeight: "400",
      },
      subtitle1: { fontSize: "18px", fontWeight: 400, color: "#5A6376" },
      subtitle2: {},
      body1: { fontWeight: 400, color: "#41444A" },
      body2: { fontSize: "14px", fontWeight: 400, color: "#5A6376" },
      button: {},
      caption: {},
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
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          strong: {
            fontWeight: 600,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          contained: {
            fontWeight: 600,
            color: "#F7F9FC",
            border: "unset",
            backgroundColor: "#131313",
            boxShadow: "none",
            letterSpacing: "0.05em",
            "&:hover": {
              backgroundColor: "#696D76",
              boxShadow: "none",
            },
            "&:active": {
              backgroundColor: "#41444A",
              boxShadow: "none",
            },
            "&.Mui-disabled": {
              backgroundColor: "#F7F9FC",
              boxShadow: "none",
            },
          },
          outlined: {
            fontWeight: 600,
            color: "#464F60",
            borderColor: "#D5DBE5",
            boxShadow: "none",
            letterSpacing: "0.05em",
            "&:hover": {
              backgroundColor: "#E9EDF5",
              boxShadow: "none",
            },
            "&:active": {
              backgroundColor: "#D5DBE5",
              boxShadow: "none",
            },
            "&.Mui-disabled": {
              backgroundColor: "#F7F9FC",
              boxShadow: "none",
            },
          },
        },
      },
    },
  },
  plPL
);

theme = responsiveFontSizes(theme);

type LocaleText = Partial<typeof enUS.components.MuiLocalizationProvider.defaultProps.localeText>;

const localesText: Record<SupportedLocales, LocaleText> = {
  en: enUS.components.MuiLocalizationProvider.defaultProps.localeText,
  pl: plPL.components.MuiLocalizationProvider.defaultProps.localeText,
  uk: ukUA.components.MuiLocalizationProvider.defaultProps.localeText,
};

interface AppContentProps {
  lang: SupportedLocales;
}

const AppContent = ({
  lang
}: AppContentProps) => {
  const { i18n } = useTranslation();
  const [isLanguageSet, setIsLanguageSet] = useState(false);

  useEffect(() => {
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang).then(() => setIsLanguageSet(true));
    } else {
      setIsLanguageSet(true);
    }
  }, [lang, i18n]);

  const methods = useForm<FormFields>({
    defaultValues: getFormDefaultValues(),
    resolver: zodResolver(schema),
    reValidateMode: "onChange",
    mode: "all",
  });

  return !isLanguageSet? null : (
    <ThemeProvider theme={theme}>
      <FormProvider {...methods}>
        <form>
          <LocalizationProvider
            dateAdapter={AdapterDayjs}
            adapterLocale={locales[(lang as keyof typeof locales) || "pl"]}
            localeText={localesText[(lang as keyof typeof localesText) || "pl"]}
          >
            <CssBaseline />
            <Container disableGutters maxWidth={false} sx={{ minWidth: { xs: "100%", sm: "800px" } }}>
              <Stepper />
              <Footer />
            </Container>
          </LocalizationProvider>
        </form>
      </FormProvider>
    </ThemeProvider>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/en" element={<AppContent lang="en" />} />
        <Route path="/uk" element={<AppContent lang="uk" />} />
        <Route path="/pl" element={<AppContent lang="pl" />} />
        <Route path="/" element={<AppContent lang="pl" />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
