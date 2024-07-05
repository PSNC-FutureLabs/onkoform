import { Stack, Alert } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { FormInputDate } from "../form-components/FormInputDate";
import { ALTUnits, ASTUnits, HGBUnits, NEUTUnits, PLTUnits, WBCUnits } from "../../business";
import { MarkerRow } from "../form-components/MarkerRow";
import { BloodMarkerDescriptions } from "../../business/types";

export default function Step3() {
	const { control } = useFormContext();

	return (
		<Stack spacing={4} p={2}>
			<Alert variant="outlined" severity="info">
				W tym kroku należy podać <strong>najnowsze</strong> wyniki badań.
				<br />W kolejnym kroku podasz wyniki z poprzedniego badania laboratoryjnego.
			</Alert>
			<FormInputDate name="actual-lab-test-date" control={control} label="Data wykonania badania" />
			<MarkerRow
				control={control}
				markerName="HGB"
				label="HGB"
				description={BloodMarkerDescriptions.HGB}
				options={HGBUnits}
			/>
			<MarkerRow
				control={control}
				markerName="WBC"
				label="WBC"
				description={BloodMarkerDescriptions.WBC}
				options={WBCUnits}
			/>
			<MarkerRow
				control={control}
				markerName="PLT"
				label="PLT"
				description={BloodMarkerDescriptions.PLT}
				options={PLTUnits}
			/>
			<MarkerRow
				control={control}
				markerName="NEUT"
				label="NEUT"
				description={BloodMarkerDescriptions.NEUT}
				options={NEUTUnits}
			/>
			<MarkerRow
				control={control}
				markerName="ALT"
				label="ALT"
				description={BloodMarkerDescriptions.ALT}
				options={ALTUnits}
			/>
			<MarkerRow
				control={control}
				markerName="AST"
				label="AST"
				description={BloodMarkerDescriptions.AST}
				options={ASTUnits}
			/>
		</Stack>
	);
}
