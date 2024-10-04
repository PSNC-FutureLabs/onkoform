import { Stack } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { ALTUnits, ASTUnits, HGBUnits, NEUTUnits, PLTUnits, WBCUnits } from "../../business";
import { BloodMarkerDescriptions } from "../../business/types";
import { MarkerRow } from "../Form/MarkerRow";
import Header from "./LabTestHeader";

export default function Step3() {
	const { control, getValues } = useFormContext();
	const labTestDate = new Date(getValues("actual-lab-test-date"));

	return (
		<Stack spacing={4}>
			<Header date={labTestDate} backgroundColor="#04804C" />
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
