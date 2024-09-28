import { Stack } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { FormInputNumber } from "../form-components/FormInputNumber";
import { FormInputMultiCheckbox } from "../form-components/FormInputMultiCheckbox";
import { TemperatureUnits } from "../../business";
import RequiredFormLabel from "../form-components/RequiredFormLabel";

export default function Step2() {
	const { control, setValue, getValues } = useFormContext();

	return (
		<Stack spacing={4}>
			<Stack spacing={1}>
				<RequiredFormLabel>Pomiar temperatury ciała</RequiredFormLabel>
				<FormInputNumber
					name="temperature"
					control={control}
					placeholder="podaj wartość w °C"
					unit={TemperatureUnits}
				/>
			</Stack>
			<FormInputMultiCheckbox
				control={control}
				getValues={getValues}
				setValue={setValue}
				name={"symptoms"}
				label={"Symptomy towarzyszące"}
			/>
		</Stack>
	);
}
