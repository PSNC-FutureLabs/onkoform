import { Stack } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { ALTUnits, ASTUnits, HGBUnits, NEUTUnits, PLTUnits, WBCUnits } from "../../business";
import { BloodMarkerDescriptions } from "../../business/types";
import { MarkerRow } from "../Form/MarkerRow";
import Header from "./LabTestHeader";

export default function Step4() {
	const { control, getValues } = useFormContext();
	const labTestDate = new Date(getValues("actual-lab-test-date")).toLocaleDateString("de-DE");

	return (
		<Stack spacing={2}>
			<Header date={labTestDate} backgroundColor="#41444A" />
			<MarkerRow
				control={control}
				markerName="HGBprev"
				label="LabelHGB"
				description={BloodMarkerDescriptions.HGB}
				options={HGBUnits}
			/>
			<MarkerRow
				control={control}
				markerName="WBCprev"
				label="LabelWBC"
				description={BloodMarkerDescriptions.WBC}
				options={WBCUnits}
			/>
			<MarkerRow
				control={control}
				markerName="PLTprev"
				label="LabelPLT"
				description={BloodMarkerDescriptions.PLT}
				options={PLTUnits}
			/>
			<MarkerRow
				control={control}
				markerName="NEUTprev"
				label="LabelNEUT"
				description={BloodMarkerDescriptions.NEUT}
				options={NEUTUnits}
			/>
			<MarkerRow
				control={control}
				markerName="ALTprev"
				label="LabelALT"
				description={BloodMarkerDescriptions.ALT}
				options={ALTUnits}
				optional
			/>
			<MarkerRow control={control} markerName="ASTprev" label="LabelAST" options={ASTUnits} optional />
		</Stack>
	);
}
