import { FormHelperText } from "@mui/material";

type FormWarningTextProps = {
	text: string | undefined;
	placementReservation?: boolean;
};

export const FormWarningText = ({ text, placementReservation = true }: FormWarningTextProps) => {
	return text ? (
		<FormHelperText error={true}>{text}</FormHelperText>
	) : placementReservation ? (
		<FormHelperText> </FormHelperText>
	) : null;
};
