import { FormControl, Rating, Stack, Typography } from "@mui/material";
import { Controller } from "react-hook-form";
import { FormInputProps } from "../../business/types";
import { FormWarningText } from "./FormWarningText";
import { IconContainerProps } from "@mui/material/Rating";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";

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
	return (
		<FormControl>
			<Controller
				name={name}
				control={control}
				render={({ field: { onChange, onBlur, ref, value }, fieldState: { error } }) => (
					<Stack direction="row">
						<Rating
							value={value}
							onChange={onChange}
							ref={ref}
							onBlur={onBlur}
							size="large"
							IconContainerComponent={IconContainer}
							getLabelText={(value: number) => customIcons[value].label}
							highlightSelectedOnly
						/>
						{!isNaN(value) && <Typography ml={1}>{value ? customIcons[value].label : ""}</Typography>}
						{error ? <FormWarningText text={error?.message} /> : null}
					</Stack>
				)}
			/>
		</FormControl>
	);
};
