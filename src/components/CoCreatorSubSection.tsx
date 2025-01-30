import { Box, Grid, Link, Stack, Typography } from "@mui/material";

interface CoCreatorSubSectionProps {
    image: string;
    title: string;
    body: React.ReactNode;
    link: string;
  }

export const CoCreatorSubSection: React.FC<CoCreatorSubSectionProps> = ({
    image,
    title,
    body,
    link = "",
  }) => {
    return (
      <Grid item component="section" xs={12} sm={6} lg={3}>
        <Stack alignItems="center" height="100%">
          <Box
            sx={{
              width: "100%",
              maxWidth: "100%",
              padding: "0 20px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box height={150} display="flex" alignItems="center">
              <Link href={link} target="_blank" rel="noopener noreferrer" underline="none">
                <Box
                  component="img"
                  loading="lazy"
                  src={image}
                  alt={"logo " + title}
                  sx={{
                    width: "100%",
                    height: "auto",
                    maxHeight: 150,
                    objectFit: "contain",
                  }}
                />
              </Link>
            </Box>
          </Box>
          <Typography
            variant="subtitle1"
            align="center"
            p={2}
            lineHeight="23.76px"
          >
            {body}
          </Typography>
        </Stack>
      </Grid>
    );
  };