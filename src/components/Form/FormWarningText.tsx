import { FormHelperText } from "@mui/material";

type FormWarningTextProps = {
	text: string | undefined;
};

export const FormWarningText = ({ text }: FormWarningTextProps) => {
	return text ? <FormHelperText error={true}>{text}</FormHelperText> : null;
};
