import { FormControl, Rating } from "@mui/material";
import { Controller } from "react-hook-form";
import { FormInputProps } from "../../business/types";
import { FormWarningText } from "./FormWarningText";

export const FormCustomRating: React.FC<FormInputProps> = ({ name, control }) => {
	// console.log("FormCustomRating", name);
	return (
		<FormControl>
			<Controller
				name={name}
				control={control}
				render={({ field: { onChange, onBlur, ref, value }, fieldState: { error } }) => (
					<>
						<Rating value={value} onChange={onChange} ref={ref} onBlur={onBlur} />
						{error ? <FormWarningText text={error?.message} /> : null}
					</>
				)}
			/>
		</FormControl>
	);
};
