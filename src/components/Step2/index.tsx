import { Grid, Stack, FormLabel } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { FormInputNumber } from "../form-components/FormInputNumber";
import { FormInputMultiCheckbox } from "../form-components/FormInputMultiCheckbox";
import { TemperatureUnits } from "../../business";

export default function Step2() {
	const { control, setValue, getValues } = useFormContext();

	return (
		<Grid item xs={12}>
			<Stack spacing={4}>
				<Stack spacing={1}>
					<FormLabel>Pomiar temperatury ciała</FormLabel>
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
		</Grid>
	);
}
