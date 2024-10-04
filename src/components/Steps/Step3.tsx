import { Stack, Alert, Box, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { ALTUnits, ASTUnits, HGBUnits, NEUTUnits, PLTUnits, WBCUnits } from "../../business";
import { BloodMarkerDescriptions } from "../../business/types";
import { MarkerRow } from "../Form/MarkerRow";

export default function Step3() {
	const { control, getValues } = useFormContext();
	const labTestDate = new Date(getValues("actual-lab-test-date")).toLocaleDateString("de-DE")

	return (
		<Stack spacing={4}>
			<Alert variant="outlined" severity="info">
				W tym kroku należy podać <strong>najnowsze</strong> wyniki badań.
				<br />W kolejnym kroku podasz wyniki z poprzedniego badania laboratoryjnego.
			</Alert>
			<Box>
				<Typography>{labTestDate}</Typography>
			</Box>
			<MarkerRow
				control={control}
				markerName="HGB"
				label="HGB - hemoglobina"
				description={BloodMarkerDescriptions.HGB}
				options={HGBUnits}
			/>
			<MarkerRow
				control={control}
				markerName="WBC"
				label="WBC - białe krwinki (leukocyty)"
				description={BloodMarkerDescriptions.WBC}
				options={WBCUnits}
			/>
			<MarkerRow
				control={control}
				markerName="PLT"
				label="PLT - płytki krwi"
				description={BloodMarkerDescriptions.PLT}
				options={PLTUnits}
			/>
			<MarkerRow
				control={control}
				markerName="NEUT"
				label="NEUT - granulocyty obojętochłonne (neutrofile)"
				description={BloodMarkerDescriptions.NEUT}
				options={NEUTUnits}
			/>
			<MarkerRow
				control={control}
				markerName="ALT"
				label="ALT - aminotransferaza alaninowa"
				description={BloodMarkerDescriptions.ALT}
				options={ALTUnits}
			/>
			<MarkerRow
				control={control}
				markerName="AST"
				label="AST - aminotransferaza asparaginianowa"
				description={BloodMarkerDescriptions.AST}
				options={ASTUnits}
			/>
		</Stack>
	);
}
