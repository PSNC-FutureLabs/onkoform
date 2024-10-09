import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Controller } from "react-hook-form";
import { FormInputProps } from "../../business/types";
import { Trans, useTranslation } from "react-i18next";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { plPL, ukUA, enUS } from "@mui/x-date-pickers/locales";
import "dayjs/locale/pl";
import "dayjs/locale/en";
import "dayjs/locale/uk";

type SupportedLocales = "en" | "pl" | "ua";

const locales: Record<SupportedLocales, string> = {
	en: "en",
	pl: "pl",
	ua: "uk",
};

const localesText: Record<SupportedLocales, any> = {
	en: enUS.components.MuiLocalizationProvider.defaultProps.localeText,
	pl: plPL.components.MuiLocalizationProvider.defaultProps.localeText,
	ua: ukUA.components.MuiLocalizationProvider.defaultProps.localeText,
};

export const FormInputDate = ({ name, control, label }: FormInputProps) => {
	const { t, i18n } = useTranslation();
	// console.log("Language:", i18n.language);
	// console.log("LocalesText:", localesText[(i18n.language as keyof typeof localesText) || localesText["pl"]]);
	return (
		<Controller
			name={name}
			control={control}
			render={({ field: { onChange, value, onBlur, ref }, fieldState: { error } }) => (
				<LocalizationProvider
					dateAdapter={AdapterDayjs}
					adapterLocale={locales[(i18n.language as keyof typeof locales) || "pl"]}
					localeText={localesText[(i18n.language as keyof typeof localesText) || "pl"]}
				>
					<DatePicker
						disableFuture
						value={value}
						onChange={onChange}
						ref={ref}
						label={label ?? ""}
						slotProps={{
							textField: {
								error: !!error,
								helperText: error ? <Trans t={t}>{error?.message}</Trans> : " ",
								onBlur,
							},
						}}
					/>
				</LocalizationProvider>
			)}
		/>
	);
};
