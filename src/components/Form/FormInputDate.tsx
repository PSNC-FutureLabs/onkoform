import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Controller } from "react-hook-form";
import { FormInputProps } from "../../business/types";

export const FormInputDate = ({ name, control, label }: FormInputProps) => {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field: { onChange, value, onBlur, ref }, fieldState: { error } }) => (
				<DatePicker
					disableFuture
					value={value}
					onChange={onChange}
					ref={ref}
					label={label ?? ""}
					slotProps={{
						textField: {
							error: !!error,
							helperText: error?.message,
							onBlur,
							disabled: true
						},
					}}
				/>
			)}
		/>
	);
};
