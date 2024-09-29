import { Stack, Alert } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { ALTUnits, ASTUnits, HGBUnits, NEUTUnits, PLTUnits, WBCUnits } from "../../business";
import { BloodMarkerDescriptions } from "../../business/types";
import { FormInputDate } from "../Form/FormInputDate";
import { MarkerRow } from "../Form/MarkerRow";

export default function Step4() {
	const { control } = useFormContext();

	return (
		<Stack spacing={4}>
			<Alert variant="outlined" severity="info">
				W tym kroku należy podać wyniki z <strong>poprzedniego</strong> badania laboratoryjnego.
			</Alert>
			<FormInputDate name="previous-lab-test-date" control={control} label="Data wykonania badania" />
			<MarkerRow
				control={control}
				markerName="HGBprev"
				label="HGB - hemoglobina"
				description={BloodMarkerDescriptions.HGB}
				options={HGBUnits}
			/>
			<MarkerRow
				control={control}
				markerName="WBCprev"
				label="WBC - białe krwinki (leukocyty)"
				description={BloodMarkerDescriptions.WBC}
				options={WBCUnits}
			/>
			<MarkerRow
				control={control}
				markerName="PLTprev"
				label="PLT - płytki krwi"
				description={BloodMarkerDescriptions.PLT}
				options={PLTUnits}
			/>
			<MarkerRow
				control={control}
				markerName="NEUTprev"
				label="NEUT - granulocyty obojętochłonne (neutrofile)"
				description={BloodMarkerDescriptions.NEUT}
				options={NEUTUnits}
			/>
			<MarkerRow
				control={control}
				markerName="ALTprev"
				label="ALT - aminotransferaza alaninowa"
				description={BloodMarkerDescriptions.ALT}
				options={ALTUnits}
			/>
			<MarkerRow
				control={control}
				markerName="ASTprev"
				label="AST - aminotransferaza asparaginianowa"
				options={ASTUnits}
			/>
		</Stack>
	);
}
