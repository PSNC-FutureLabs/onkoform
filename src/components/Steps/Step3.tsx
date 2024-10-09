import { Stack } from "@mui/material";
import { useFormContext } from "react-hook-form";
import {
  ALTUnits,
  ASTUnits,
  HGBUnits,
  NEUTUnits,
  PLTUnits,
  WBCUnits,
} from "../../business";
import { BloodMarkerDescriptions } from "../../business/types";
import { MarkerRow } from "../Form/MarkerRow";
import Header from "./LabTestHeader";

export default function Step3() {
  const { control, getValues } = useFormContext();
  const labTestDate = new Date(getValues("actual-lab-test-date"));

  return (
    <Stack spacing={2}>
      <Header date={labTestDate} backgroundColor="#04804C" />
      <MarkerRow
        control={control}
        markerName="HGB"
        label="LabelHGB"
        description={BloodMarkerDescriptions.HGB}
        options={HGBUnits}
      />
      <MarkerRow
        control={control}
        markerName="WBC"
        label="LabelWBC"
        description={BloodMarkerDescriptions.WBC}
        options={WBCUnits}
      />
      <MarkerRow
        control={control}
        markerName="PLT"
        label="LabelPLT"
        description={BloodMarkerDescriptions.PLT}
        options={PLTUnits}
      />
      <MarkerRow
        control={control}
        markerName="NEUT"
        label="LabelNEUT"
        description={BloodMarkerDescriptions.NEUT}
        options={NEUTUnits}
      />
      <MarkerRow
        control={control}
        markerName="ALT"
        label="LabelALT"
        description={BloodMarkerDescriptions.ALT}
        options={ALTUnits}
      />
      <MarkerRow
        control={control}
        markerName="AST"
        label="LabelAST"
        description={BloodMarkerDescriptions.AST}
        options={ASTUnits}
      />
    </Stack>
  );
}
