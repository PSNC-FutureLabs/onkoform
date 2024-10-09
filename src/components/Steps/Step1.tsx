import { Stack } from "@mui/material";
import { useFormContext } from "react-hook-form";
import {
  medicalConditionOptions,
  genderOptions,
  hospitalWardOptions,
} from "../../business";
import { FormInputRadio } from "../Form/FormInputRadio";
import { FormInputDate } from "../Form/FormInputDate";
import { FormInputDropdown } from "../Form/FormInputDropdown";
import RequiredFormLabel from "../Form/RequiredFormLabel";
import { Trans, useTranslation } from "react-i18next";

export default function Step1() {
  const { control } = useFormContext();
  const { t } = useTranslation();

  return (
    <Stack spacing={2}>
      <Stack spacing={1}>
        <RequiredFormLabel>
          <Trans t={t}>step1FormLabel1</Trans>
        </RequiredFormLabel>
        <FormInputDate name="dateOfBirth" control={control} />
      </Stack>
      <FormInputRadio
        name="gender"
        label={
          <Trans t={t} ns="ns2">
            Gender
          </Trans>
        }
        control={control}
        options={genderOptions}
      />
      <Stack spacing={1}>
        <RequiredFormLabel>
          <Trans t={t} ns="ns2">
            Affliction
          </Trans>
        </RequiredFormLabel>
        <FormInputDropdown
          name="medicalCondition"
          control={control}
          options={medicalConditionOptions}
        />
      </Stack>
      <Stack spacing={1}>
        <RequiredFormLabel>
          <Trans t={t}>step1FormLabel4</Trans>
        </RequiredFormLabel>
        <FormInputDropdown
          name="hospitalWard"
          control={control}
          options={hospitalWardOptions}
        />
      </Stack>
      <Stack spacing={1}>
        <RequiredFormLabel>
          <Trans t={t}>step1FormLabel5</Trans>
        </RequiredFormLabel>
        <FormInputDate name="actual-lab-test-date" control={control} />
      </Stack>
      <Stack spacing={1}>
        <RequiredFormLabel>
          <Trans t={t}>step1FormLabel6</Trans>
        </RequiredFormLabel>
        <FormInputDate name="previous-lab-test-date" control={control} />
      </Stack>
    </Stack>
  );
}
