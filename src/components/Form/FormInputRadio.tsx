import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { Controller } from "react-hook-form";
import { InputRadioProps } from "../../business/types";
import { FormWarningText } from "./FormWarningText";
import RequiredFormLabel from "./RequiredFormLabel";


export const FormInputRadio: React.FC<InputRadioProps> = ({ name, control, label, options }) => {
	const generateRadioOptions = () => {
		return options.map((singleOption) => (
			<FormControlLabel
				value={singleOption.value}
				label={singleOption.label}
				key={singleOption.label}
				control={<Radio />}
			/>
		));
	};
	return (
		<FormControl component="fieldset" style={{ textAlign: "left" }}>
			<RequiredFormLabel>{label}</RequiredFormLabel>
			<Controller
				name={name}
				control={control}
				render={({ field: { onChange, onBlur, ref, value }, fieldState: { error } }) => (
					<>
						<RadioGroup value={value} onChange={onChange} ref={ref} onBlur={onBlur} row>
							{generateRadioOptions()}
						</RadioGroup>
						<FormWarningText text={error?.message} />
					</>
				)}
			/>
		</FormControl>
	);
};
