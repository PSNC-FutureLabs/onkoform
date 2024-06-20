import { useFormContext } from "react-hook-form";
import { FormInputNumber } from "../form-components/FormInputNumber";
import { FormInputMultiCheckbox } from "../form-components/FormInputMultiCheckbox";

export default function Step2() {
	const { control, setValue, getValues } = useFormContext();

	return (
		<>
			<FormInputNumber
				name="temperature"
				control={control}
				label="Pomiar temperatury ciała"
				placeholder="wartość w °C"
			/>
			<FormInputMultiCheckbox
				control={control}
				getValues={getValues}
				setValue={setValue}
				name={"symptoms"}
				label={"Symptomy towarzyszące"}
			/>
		</>
	);
}
