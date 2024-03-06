import { FormHelperText } from "@mui/material";

type FormWarningTextProps = {
  text: string | undefined;
};

export const FormWarningText = ({ text }: FormWarningTextProps) => {
  if (!text) return null;
  return <FormHelperText className="warning">{text}</FormHelperText>;
};
