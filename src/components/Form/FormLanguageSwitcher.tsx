import { Grid } from "@mui/material";
import LanguageButton from "./LanguageButton";
import i18n from "../../utils/i18n";

interface LanguageSwitcherProps {
  setLocale: (language: string) => void;
  locale: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  setLocale,
  locale,
}) => {
  const languageCodes: Array<string> = ["pl", "ua", "en"];

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setLocale(lang);
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
          activeLanguage={locale}
          changeLanguage={changeLanguage}
        />
      ))}
    </Grid>
  );
};

export default LanguageSwitcher;
