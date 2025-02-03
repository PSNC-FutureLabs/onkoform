import Grid from "@mui/material/Grid";
import { Box, Stack, Button, Typography, Container } from "@mui/material";
import imageOrnament from "/images/desktop-main-background-ornament.svg";
import imageTextLogo from "/images/logo-mm.svg";
import imageCrownLogo from "/images/logo-mm-crown.svg";
import imageScrollButton from "/images/scroll-button-down-arrow.svg";
import imageBoyGirlTeddyBear from "/images/boy-girl-teddybear.svg";
import imageMomKid from "/images/mom-kid.svg";
import imageSectionMission from "/images/section-mission.svg";
import iconPatientInfo from "/images/icon-patient-info.svg";
import iconSymptoms from "/images/icon-symptoms.svg";
import iconLabTests from "/images/icon-lab-tests.svg";
import imageCoCreatorLogo1 from "/images/logo-szpital-kliniczny-im-karola-jonschera.svg";
import imageCoCreatorLogo2 from "/images/logo-fundacja-pomocy-dzieciom-z-chorobami-nowotworowymi-new.svg";
import imageCoCreatorLogo3 from "/images/logo-capgemini.svg";
import imageCoCreatorLogo4 from "/images/logo-psnc-future-labs.svg";
import { Trans, useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher/LanguageSwitcher";
import { TransitionsModal } from "./TransitionsModal";
import {CoCreatorSubSection} from "./CoCreatorSubSection"
import { useState } from "react";

const handleScroll = (id: string) => {
  const targetElement = document.getElementById(id);
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth",
    });
  }
};


interface LandingPageProps {
  onClickStart: () => void;
}

export default function LandingPage({
  onClickStart
}: LandingPageProps) {

  const { t } = useTranslation();
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <Box
        sx={{
          background: `linear-gradient(to bottom, rgba(0, 96, 31, 0.8), rgba(95, 170, 40, 0.8)), url(${imageOrnament})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <TransitionsModal
          open={isModalOpen}
          onClose={closeModal}
          onClickStart={onClickStart}
        />

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
                <Box
                  component="img"
                  loading="lazy"
                  src={imageTextLogo}
                  alt="Logo projektu Mali Mocni"
                  height={{ xs: "20", sm: "32" }}
                />
                <Box my={{ xs: 2 }}>
                  <LanguageSwitcher />
                </Box>
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
                  lineHeight={{ xs: "52.08px", sm: "59.52px" }}
                  align="center"
                  mt={2}
                  mb={2}
                >
                  <Trans t={t}>landing-1</Trans>
                </Typography>
                <Typography
                  variant="h4"
                  lineHeight={{ xs: "26.4px", sm: "32.64px" }}
                  align="center"
                  mb={4}
                  px={{ xs: 6, sm: 0 }}
                >
                  <Trans t={t}>landing-2</Trans>
                </Typography>
                <Box display="flex" justifyContent="center">
                  <Button
                    variant="contained"
                    size="large"
                    onClick={openModal}
                    sx={{ minWidth: "140px" }}
                  >
                    <Trans t={t} ns="ns2">
                      Start
                    </Trans>
                  </Button>
                </Box>
                <Box display="flex" justifyContent="center">
                  <Box
                    component="img"
                    loading="lazy"
                    src={imageScrollButton}
                    alt="Przewiń do treści"
                    mt={10}
                    width={{ xs: "32px", sm: "64px" }}
                    onClick={() => handleScroll("sectionOverview")}
                    sx={{
                      borderRadius: "100%",
                      //boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.5)",
                      width: { xs: "32px", sm: "64px" },
                      animation: "pulse 1.5s infinite ease-in-out",
                      "@keyframes pulse": {
                        "0%": { transform: "scale(1)" },
                        "50%": { transform: "scale(1.1)" },
                        "100%": { transform: "scale(1)" },
                      },
                      cursor: "pointer",
                    }}
                  />
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
      <Box sx={{ background: "white" }}>
        <Container maxWidth="lg" disableGutters>
          <Grid
            container
            component="section"
            pt={{ xs: 2, sm: 10 }}
            pb={{ xs: 2, sm: 10 }}
            alignItems="flex-start"
          >
            <Grid item component="section" xs={12} id="sectionOverview">
              <Stack
                direction={{ xs: "column", sm: "row" }}
                alignItems="center"
              >
                <Box
                  component="img"
                  loading="lazy"
                  sx={{
                    height: { xs: 405, sm: 647 },
                  }}
                  src={t('imageSectionOverview')}
                  alt="poglądowy wygląd aplikacji na smartfonie"
                />
                <Box px={{ xs: 2, sm: 0 }} py={{ xs: 2, sm: 0 }}>
                  <Typography
                    variant="h2"
                    lineHeight="50.4px"
                    mb={3}
                    sx={{ textAlign: { xs: "left", sm: "left" } }}
                  >
                    <Trans t={t}>landing-3</Trans>
                  </Typography>
                  <Typography
                    variant="h4"
                    lineHeight="32.64px"
                    sx={{ textAlign: { xs: "left", sm: "left" } }}
                  >
                    <Trans t={t}>landing-4</Trans>
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ background: "#F8F8F8" }}>
        <Container maxWidth="lg" disableGutters>
          <Grid
            container
            component="section"
            pt={{ xs: 2, sm: 10 }}
            pb={{ xs: 2, sm: 10 }}
            alignItems="flex-start"
          >
            <Grid item component="section" xs={12}>
              <Typography variant="h3" align="center" p={4}>
                <strong>
                  <Trans t={t} ns="ns2">
                    Prepare
                  </Trans>
                </strong>
              </Typography>
            </Grid>
            <Grid item component="section" xs={12} sm={4}>
              <Box py={2} px={4}>
                <Stack alignItems="center">
                  <Box
                    component="img"
                    loading="lazy"
                    src={iconPatientInfo}
                    alt="ikona pacjenta, informacja" />
                    <Typography
                      variant="h5"
                      align="center"
                      p={2}
                      sx={{ textTransform: "uppercase" }}
                    >
                      <Trans t={t}>landing-5</Trans>
                    </Typography>
                    <Typography variant="body2" align="center">
                      <Trans t={t}>landing-6</Trans>
                    </Typography>
                </Stack>
              </Box>
            </Grid>
            <Grid item component="section" xs={12} sm={4}>
              <Box py={2} px={4}>
                <Stack alignItems="center">
                  <Box
                    component="img"
                    loading="lazy"
                    src={iconSymptoms}
                    alt="ikona, symptomy" />
                    <Typography
                      variant="h5"
                      align="center"
                      p={2}
                      sx={{ textTransform: "uppercase" }}
                    >
                      <Trans t={t}>landing-7</Trans>
                    </Typography>
                    <Typography variant="body2" align="center">
                      <Trans t={t}>landing-8</Trans>
                    </Typography>
                </Stack>
              </Box>
            </Grid>
            <Grid item component="section" xs={12} sm={4}>
              <Box py={2} px={4}>
                <Stack alignItems="center">
                  <Box
                    component="img"
                    loading="lazy"
                    src={iconLabTests}
                    alt="ikona, labolatoria, testy" />
                    <Typography
                      variant="h5"
                      align="center"
                      p={2}
                      sx={{ textTransform: "uppercase" }}
                    >
                      <Trans t={t}>landing-9</Trans>
                    </Typography>
                    <Typography variant="body2" align="center">
                      <Trans t={t}>landing-10</Trans>
                    </Typography>
                </Stack>
              </Box>
            </Grid>
            <Grid item component="section" xs={12}>
              <Box display="flex" justifyContent="center" p={4}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={openModal}
                  sx={{ minWidth: "240px" }}
                >
                  <Trans t={t} ns="ns2">
                    Go-to-form
                  </Trans>
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ background: "white" }}>
        <Container maxWidth="lg" disableGutters>
          <Grid
            container
            component="section"
            pt={{ xs: 2, sm: 6 }}
            pb={{ xs: 2, sm: 6 }}
            alignItems={{ xs: "flex-start", sm: "center" }}
          >
            <Grid item component="section" xs={12} sm={6}>
              <Box p={{ xs: 5, sm: 10 }}>
                <Typography variant="h3" mb={2}>
                  <Trans t={t}>landing-11</Trans>
                </Typography>
                <Typography variant="h4">
                  <Trans t={t}>landing-12</Trans>
                </Typography>
              </Box>
            </Grid>
            <Grid item component="section" xs={12} sm={6}>
              <Box
                component="img"
                loading="lazy"
                src={imageSectionMission}
                alt="zespół podczas pracy nad aplikacją"
                p={4}
                sx={{
                  width: "100%",
                  height: "auto",
                  maxWidth: "100%",
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
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
            component="section"
            pt={{ xs: 2, sm: 0 }}
            pb={{ xs: 2, sm: 0 }}
            alignItems="flex-start"
          >
            <Grid item component="section">
              <Stack px={{ xs: 5, sm: 20 }} py={{ xs: 10, sm: 20 }}>
                <Box
                  component="img"
                  loading="lazy"
                  src={imageCrownLogo}
                  alt="logo MaliMocni"
                  mb={4}
                  sx={{
                    height: { xs: 64, sm: 64 },
                  }}
                />
                <Box>
                  <Typography variant="h2" align="center" color="white">
                    <Trans t={t}>landing-13</Trans>
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ background: "white" }}>
        <Container maxWidth="lg" disableGutters>
          <Grid
            container
            component="section"
            pt={{ xs: 6, sm: 12 }}
            pb={{ xs: 6, sm: 12 }}
          >
            <Grid
              item
              component="section"
              xs={12}
              sm={6}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Box
                component="img"
                loading="lazy"
                sx={{
                  height: { xs: 260, sm: 416 },
                }}
                src={imageBoyGirlTeddyBear}
                alt="chłopiec, dziewczynka, pluszowy miś"
              />
            </Grid>
            <Grid
              item
              component="section"
              xs={12}
              sm={6}
              display="flex"
              alignItems={"center"}
            >
              <Box px={{ xs: 2, sm: 0 }} py={{ xs: 6, sm: 0 }}>
                <Typography variant="h2">
                  <strong>
                    <Trans t={t}>landing-14</Trans>
                  </strong>
                </Typography>
                <Typography variant="h3" mt={3}>
                  <Trans t={t}>landing-15</Trans>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ background: "#F8F8F8" }}>
        <Container maxWidth="lg" disableGutters>
          <Grid
            container
            component="section"
            pt={{ xs: 2, sm: 0 }}
            pb={{ xs: 4, sm: 0 }}
            alignItems="flex-start"
            spacing={2.5}
          >
            <Grid item component="section" xs={12}>
              <Typography
                variant="h3"
                align="center"
                p={{ xs: 2, sm: 4 }}
                color="#15181E"
              >
                <strong>
                  <Trans t={t} ns="ns2">
                    Authors
                  </Trans>
                </strong>
              </Typography>
            </Grid>
            <CoCreatorSubSection
              image={imageCoCreatorLogo1}
              title="Szpital"
              body={<Trans t={t}>landing-16</Trans>}
              link="https://www.skp.ump.edu.pl/"
            />
            <CoCreatorSubSection
              image={imageCoCreatorLogo2}
              title="Fundacja"
              body={<Trans t={t}>landing-17</Trans>}
              link="https://fundacjapomocydzieciom.com.pl/"
            />
            <CoCreatorSubSection
              image={imageCoCreatorLogo3}
              title="Software House"
              body={<Trans t={t}>landing-18</Trans>}
              link="https://www.capgemini.com"
            />
            <CoCreatorSubSection
              image={imageCoCreatorLogo4}
              title="Koordynacja"
              body={<Trans t={t}>landing-19</Trans>}
              link="https://futurelabs.psnc.pl/"
            />
            <Grid item component="section" xs={12} pb={{ xs: 3, sm: 6 }}>
              <Box display="flex" justifyContent="center" p={4}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={openModal}
                  sx={{ minWidth: "240px" }}
                >
                  <Trans t={t} ns="ns2">
                    Go-to-form
                  </Trans>
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
