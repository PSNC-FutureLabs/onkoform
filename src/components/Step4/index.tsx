import { Grid, Stack, Alert } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { FormInputDate } from "../form-components/FormInputDate";
import { ALTUnits, ASTUnits, HGBUnits, NEUTUnits, PLTUnits, WBCUnits } from "../../business";
import { MarkerRow } from "../form-components/MarkerRow";

export default function Step4() {
	const { control } = useFormContext();

	return (
		<Grid item xs={12} sm={8}>
			<Stack spacing={4}>
				<Alert variant="outlined" severity="info">
					W tym kroku należy podać wyniki z poprzedniego badania laboratoryjnego.
				</Alert>
				<FormInputDate name="examination-date2" control={control} label="Data wykonania badania" />
				<Grid item container spacing={2} justifyContent="flex-start" alignItems="center">
					<MarkerRow control={control} markerName="HGBprev" label="HGB" options={HGBUnits} />
					<MarkerRow control={control} markerName="WBCprev" label="WBC" options={WBCUnits} />
					<MarkerRow control={control} markerName="PLTprev" label="PLT" options={PLTUnits} />
					<MarkerRow control={control} markerName="NEUTprev" label="NEUT" options={NEUTUnits} />
					<MarkerRow control={control} markerName="ALTprev" label="ALT" options={ALTUnits} />
					<MarkerRow control={control} markerName="ASTprev" label="AST" options={ASTUnits} />
				</Grid>
			</Stack>
		</Grid>
	);
}
