import { Stack, FormLabel, Tooltip } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { FormInputNumber } from "./FormInputNumber";
import { UnitCard } from "./UnitCard";
import { MarkerRowProps } from "../../business/types";
import { MultiButton } from "./MultiButton";

export const MarkerRow = ({ control, markerName, label, options, description }: MarkerRowProps) => {
	return (
		<Stack spacing={1}>
			<Stack direction="row" spacing={1}>
				<FormLabel>{label}</FormLabel>
				<Tooltip title={description ?? markerName}>
					<InfoOutlinedIcon sx={{ cursor: "pointer" }} color="info"/>
				</Tooltip>
			</Stack>
			<Stack direction="row" spacing={1}>
				<FormInputNumber name={`${markerName}.value`} control={control} />
				{options.length === 1 && <UnitCard unit={options[0]} />}
				{options.length > 1 && <MultiButton name={`${markerName}.unit`} options={options} />}
			</Stack>
		</Stack>
	);
};
