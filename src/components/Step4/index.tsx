import { Grid, Stack, Alert } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { FormInputDate } from "../form-components/FormInputDate";
import { ALTUnits, ASTUnits, HGBUnits, NEUTUnits, PLTUnits, WBCUnits } from "../../business";
import { MarkerRow } from "../form-components/MarkerRow";
import { MarkerDescriptions } from "../../business/types";

export default function Step4() {
	const { control } = useFormContext();

	return (
		<Grid item xs={12} sm={8}>
			<Stack spacing={4} p={2}>
				<Alert variant="outlined" severity="info">
					W tym kroku należy podać wyniki z poprzedniego badania laboratoryjnego.
				</Alert>
				<FormInputDate name="examination-date2" control={control} label="Data wykonania badania" />
				<MarkerRow
					control={control}
					markerName="HGBprev"
					label="HGB"
					description={MarkerDescriptions.HGB}
					options={HGBUnits}
				/>
				<MarkerRow
					control={control}
					markerName="WBCprev"
					label="WBC"
					description={MarkerDescriptions.WBC}
					options={WBCUnits}
				/>
				<MarkerRow
					control={control}
					markerName="PLTprev"
					label="PLT"
					description={MarkerDescriptions.PLT}
					options={PLTUnits}
				/>
				<MarkerRow
					control={control}
					markerName="NEUTprev"
					label="NEUT"
					description={MarkerDescriptions.NEUT}
					options={NEUTUnits}
				/>
				<MarkerRow
					control={control}
					markerName="ALTprev"
					label="ALT"
					description={MarkerDescriptions.ALT}
					options={ALTUnits}
				/>
				<MarkerRow
					control={control}
					markerName="ASTprev"
					label="AST"
					description={MarkerDescriptions.AST}
					options={ASTUnits}
				/>
			</Stack>
		</Grid>
	);
}
