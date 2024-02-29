import { Stack } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

export default function Step0() {
  return (
    <Stack spacing={4} mt={4}>
      <DatePicker format="DD/MM/YYYY" label="Data urodzenia" />
    </Stack>
  );
}
