import { FormControl, Rating, Stack, Chip } from "@mui/material";
import { Controller } from "react-hook-form";
import { FormInputProps } from "../../business/types";
import { IconContainerProps } from "@mui/material/Rating";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import React from "react";

const customIcons: {
	[index: string]: {
		icon: React.ReactElement;
		label: string;
	};
} = {
	1: {
		icon: <SentimentSatisfiedIcon color="success" />,
		label: "Trochę boli",
	},
	2: {
		icon: <SentimentDissatisfiedIcon color="warning" />,
		label: "Boli trochę mocniej",
	},
	3: {
		icon: <SentimentDissatisfiedIcon color="warning" />,
		label: "Mocno boli",
	},
	4: {
		icon: <SentimentDissatisfiedIcon color="error" />,
		label: "Bardzo mocno boli",
	},
	5: {
		icon: <SentimentVeryDissatisfiedIcon color="error" />,
		label: "Strasznie boli",
	},
};

function IconContainer(props: IconContainerProps) {
	const { value, ...other } = props;
	return <span {...other}>{customIcons[value].icon}</span>;
}

export const FormCustomRating: React.FC<FormInputProps> = ({ name, control }) => {
	const [hover, setHover] = React.useState<number>(-1);
	return (
		<FormControl>
			<Controller
				name={name}
				control={control}
				render={({ field: { onChange, onBlur, ref, value } }) => (
					<Stack direction="row" alignItems="center">
						<Rating
							value={value}
							onChange={onChange}
							onChangeActive={(event, newHover) => {
								setHover(newHover);
							}}
							ref={ref}
							onBlur={onBlur}
							size="large"
							IconContainerComponent={IconContainer}
							getLabelText={(value: number) => customIcons[value].label}
							highlightSelectedOnly
						/>
						{ (
							<Chip
								variant={ hover > 0 ? "outlined" : "filled"}
								color="warning"
								size="medium"
								sx={{ ml: 1 }}
								label={ hover > 0 ? customIcons[hover].label : value > 0 ? customIcons[value].label : "?"}
							/>
						)}
					</Stack>
				)}
			/>
		</FormControl>
	);
};
