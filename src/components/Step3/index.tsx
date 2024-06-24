import { Grid, Stack, Alert } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { FormInputDate } from "../form-components/FormInputDate";
import { HGBUnits, NEUTUnits } from "../../business";
import { MarkerRow } from "../form-components/MarkerRow";

export default function Step3() {
	const { control } = useFormContext();

	return (
		<Grid item xs={12} sm={8}>
			<Stack spacing={4}>
				<Alert variant="outlined" severity="info">
					W tym kroku należy podać <strong>najnowsze</strong> wyniki badań.
					<br />W kolejnym kroku podasz wyniki z poprzedniego badania laboratoryjnego.
				</Alert>
				<FormInputDate name="examination-date" control={control} label="Data wykonania badania" />
				<Grid item container spacing={2} justifyContent="flex-start" alignItems="center">
					<MarkerRow control={control} markerName="HGB" label="HGB" options={HGBUnits} />
					<MarkerRow control={control} markerName="WBC" label="WBC" options={["mmol/l"]} />
					<MarkerRow control={control} markerName="PLT" label="PLT" options={["mmol/l"]} />
					<MarkerRow control={control} markerName="NEUT" label="NEUT" options={NEUTUnits} />
					<MarkerRow control={control} markerName="ALT" label="ALT" options={["mmol/l"]} />
					<MarkerRow control={control} markerName="AST" label="AST" options={["mmol/l"]} />
				</Grid>
			</Stack>
		</Grid>
	);
}
