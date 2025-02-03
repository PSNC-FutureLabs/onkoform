import { Box, Button, Container, createTheme, CssBaseline, Grid, responsiveFontSizes, Stack, ThemeProvider, Typography } from "@mui/material";
import { Trans, useTranslation } from "react-i18next";
import imageTextLogo from "/images/logo-mm.svg";
import imageBoyGirlTeddyBear from "/images/boy-girl-teddybear.svg";
import imageMomKid from "/images/mom-kid.svg";
import imageOrnament from "/images/desktop-main-background-ornament.svg";
import { Link } from "react-router-dom";
import "../App.css";

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
        fontSize: "24px",
        fontWeight: "400",
      },
    },
    palette: {
      background: {
        default: "white",
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
          },
        },
      },
    },
  },
);

theme = responsiveFontSizes(theme);


export default function ErrorPage() {
    const { t } = useTranslation();
    return (
      <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container disableGutters maxWidth={false} sx={{ minWidth: { xs: "100%", sm: "800px" } }}>
        <Box
          sx={{
            background: `linear-gradient(to bottom, rgba(0, 96, 31, 0.8), rgba(95, 170, 40, 0.8)), url(${imageOrnament})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Container maxWidth="lg" disableGutters>
            <Grid
              container
              component="header"
              minHeight={{ xs: "100vh" }}
              alignItems="flex-start"
            >
            <Grid item xs={12}>
            <Stack
              display="flex"
              alignItems="center"
              height={{ xs: 114, sm: 80 }}
              px={{ sm: 2 }}
              direction={"row"}
              justifyContent={"space-between"}
              padding={3}
            >
              <Link to='/'>
                <Box
                  component="img"
                  loading="lazy"
                  src={imageTextLogo}
                  alt="Logo projektu Mali Mocni"
                  height={{ xs: "20", sm: "32" }}
                />
                </Link>
            </Stack>
          </Grid>
              <Grid item xs={12} sm={3}>
                <Stack direction="row">
                  <Box
                    component="img"
                    loading="lazy"
                    src={imageBoyGirlTeddyBear}
                    alt="chłopiec, dziewczynka, pluszowy miś"
                    width={{ xs: "50%", sm: "100%" }}
                  />
                  <Box
                    component="img"
                    loading="lazy"
                    src={imageMomKid}
                    alt="mama i dziecko"
                    display={{ xs: "block", sm: "none" }}
                    sx={{ width: "50%" }}
                  />
                </Stack>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Stack pb={4} color="white">
                  <Typography
                    variant="h1"
                    lineHeight={{ xs: "102.08px", sm: "129.52px" }}
                    fontSize={{ xs: "100.08px", sm: "127.52px" }}
                    align="center"
                    mt={2}
                    mb={10}
                  >
                    404
                  </Typography>
                  <Typography
                  variant="h2"
                  lineHeight={{ xs: "26.4px", sm: "32.64px" }}
                  align="center"
                  mb={4}
                  px={{ xs: 6, sm: 0 }}
                >
                  <Trans t={t}>went-wrong</Trans>
                </Typography>
                  <Box display="flex" justifyContent="center">
                    <Button
                      component={Link}
                      to={`/`}
                      variant="contained"
                      size="large"
                      sx={{ minWidth: "140px" }}
                    >
                      <Trans t={t}>
                      back-home
                      </Trans>
                    </Button>
                  </Box>
                </Stack>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Box
                  component="img"
                  loading="lazy"
                  src={imageMomKid}
                  alt="mama i dziecko"
                  display={{ xs: "none", sm: "block" }}
                  sx={{ width: "100%" }}
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
        </Container>
        </ThemeProvider>
        </>
        )}