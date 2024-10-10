import React, { useState } from "react";
import { Grid } from "@mui/material";
import LanguageButton from "./LanguageButton";
import i18n from "../../utils/i18n";

const LanguageSwitcher: React.FC = () => {
	const languageCodes: Array<string> = ["pl", "ua", "en"];
	const [activeLanguage, setActiveLanguage] = useState<string>(i18n.language ? i18n.language : "pl");
	const changeLanguage = (lang: string) => {
		i18n.changeLanguage(lang);
		setActiveLanguage(lang);
	};

	return (
		<Grid
			container
			spacing={1}
			sx={{
				maxWidth: "max-content",
			}}
		>
			{languageCodes.map((code) => (
				<LanguageButton
					key={code}
					lang={code}
					activeLanguage={activeLanguage}
					changeLanguage={changeLanguage}
				/>
			))}
		</Grid>
	);
};

export default LanguageSwitcher;
