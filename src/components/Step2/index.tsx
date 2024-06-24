import { Grid, Stack } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { FormInputNumber } from "../form-components/FormInputNumber";
import { FormInputMultiCheckbox } from "../form-components/FormInputMultiCheckbox";
import { TemperatureUnits } from "../../business";

export default function Step2() {
	const { control, setValue, getValues } = useFormContext();

	return (
		<Grid item xs={12}>
			<Stack spacing={4}>
				<FormInputNumber
					name="temperature"
					control={control}
					label="Pomiar temperatury ciała"
					placeholder="wartość w °C"
					unit={TemperatureUnits}
				/>
				<FormInputMultiCheckbox
					control={control}
					getValues={getValues}
					setValue={setValue}
					name={"symptoms"}
					label={"Symptomy towarzyszące"}
				/>
			</Stack>
		</Grid>
	);
}
