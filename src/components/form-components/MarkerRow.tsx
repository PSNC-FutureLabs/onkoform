import { Stack, Tooltip, Box } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { MarkerRowProps } from "../../business/types";
import { FormInputNumber } from "./FormInputNumber";
import { FormUnitSelector } from "./FormUnitSelector";
import RequiredFormLabel from "../form-components/RequiredFormLabel";

export const MarkerRow = ({ control, markerName, label, options, description }: MarkerRowProps) => {
	return (
		<Stack spacing={1}>
			<Stack direction="row" spacing={1}>
				<RequiredFormLabel>{label}</RequiredFormLabel>
				{false && (
					<Tooltip title={description ?? markerName}>
						<InfoOutlinedIcon sx={{ cursor: "pointer" }} color="info" />
					</Tooltip>
				)}
			</Stack>
			<Stack direction="row" spacing={1} alignItems="flex-start">
				<Box maxWidth={120}>
					<FormInputNumber name={`${markerName}.value`} control={control} />
				</Box>
				<Box>
					<FormUnitSelector name={`${markerName}.unit`} control={control} options={options} />
				</Box>
			</Stack>
		</Stack>
	);
};
