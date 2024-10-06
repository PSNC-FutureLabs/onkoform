import { Stack } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { FormInputNumber } from "../Form/FormInputNumber";
import { FormInputMultiCheckbox } from "../Form/FormInputMultiCheckbox";
import { TemperatureUnits } from "../../business";
import RequiredFormLabel from "../Form/RequiredFormLabel";
import { Trans, useTranslation } from "react-i18next";

export default function Step2() {
  const { control, setValue, getValues } = useFormContext();
  const { t } = useTranslation();

  return (
    <Stack spacing={2}>
      <Stack spacing={1}>
        <RequiredFormLabel>
          <Trans t={t}>step2FormLabel1</Trans>
        </RequiredFormLabel>
        <FormInputNumber
          name="temperature"
          control={control}
          placeholder="podaj wartość w °C"
          unit={TemperatureUnits}
        />
      </Stack>
      <FormInputMultiCheckbox
        control={control}
        getValues={getValues}
        setValue={setValue}
        name={"symptoms"}
        label={
          <Trans t={t} ns="ns2">
            AssociatedSymptoms
          </Trans>
        }
      />
    </Stack>
  );
}
