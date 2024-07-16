import { Stack, FormLabel, Tooltip } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { FormInputNumber } from "./FormInputNumber";
import { MarkerRowProps } from "../../business/types";
import { FormUnitSelector } from "./FormUnitSelector";

export const MarkerRow = ({ control, markerName, label, options, description }: MarkerRowProps) => {
	return (
		<Stack spacing={1}>
			<Stack direction="row" spacing={1}>
				<FormLabel>{label}</FormLabel>
				<Tooltip title={description ?? markerName}>
					<InfoOutlinedIcon sx={{ cursor: "pointer" }} color="info"/>
				</Tooltip>
			</Stack>
			<Stack direction="row" spacing={1} alignItems={"center"}>
				<FormInputNumber name={`${markerName}.value`} control={control} />
				<FormUnitSelector name={`${markerName}.unit`} control={control} options={options} />
			</Stack>
		</Stack>
	);
};
