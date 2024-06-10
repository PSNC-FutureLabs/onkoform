import { useState } from "react";
import { Grid, Box, Stack, Link, Typography } from "@mui/material";
import { FieldValues, SubmitErrorHandler, SubmitHandler, useFormContext } from "react-hook-form";
import imageDesktopFormSideBackground from "/images/desktop-form-side-background.png";
import imageMobileFormTopBackground from "/images/mobile-form-top-background.png";
import imageLogo from "/images/logo-mm.svg";
import LandingPage from "./LandingPage";
import { grey } from "@mui/material/colors";

export default function StepController() {
	const [isLandingPageActive, setIsLandingPageActive] = useState<boolean>(true);

	const handleStart = () => {
		setIsLandingPageActive(false);
	};

	if (isLandingPageActive) {
		return <LandingPage onClickStart={handleStart} />;
	}

	return (
		<>
			<Grid container component="main">
				<Grid
					item
					xs={12}
					sm={4}
					sx={{
						backgroundImage: {
							xs: `url(${imageMobileFormTopBackground})`,
							sm: `url(${imageDesktopFormSideBackground})`,
						},
						backgroundSize: "cover",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
					}}
				>
					<Box
						component="img"
						src={imageLogo}
						alt="logo MaliMocni"
						sx={{
							height: { xs: 20, sm: 50 },
						}}
					/>
				</Grid>
				<Grid item xs={12} sm={8}></Grid>
			</Grid>
			<Grid item component="footer" xs={12} sx={{ backgroundColor: grey[900] }}>
				<Stack
					direction="row"
					alignContent="space-between"
					justifyContent="space-between"
					sx={{ width: "100%" }}
				>
					<Box p={1}>
						<Typography variant="body2" align="center" color="white">
							&copy; 2024 by{" "}
							<Link
								href="https://psnc.pl"
								target="_blank"
								rel="noreferrer"
								color="inherit"
								underline="hover"
							>
								PSNC
							</Link>
							. All rights reserved.
						</Typography>
					</Box>
					<Stack direction="row">
						<Box>
							<Typography variant="body2" align="center" color="white" p={1}>
								<Link href="#" color="inherit" underline="hover">
									Privacy policy
								</Link>
							</Typography>
						</Box>
						<Box>
							<Typography variant="body2" align="center" color="white" p={1}>
								<Link href="#" color="inherit" underline="hover">
									Terms & Conditions
								</Link>
							</Typography>
						</Box>
					</Stack>
				</Stack>
			</Grid>
		</>
	);
}
