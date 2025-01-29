import { Grid } from "@mui/material";
import LanguageButton from "./LanguageButton";
import { SupportedLocales, locales } from "../../helpers";

const LanguageSwitcher = () => {
  return (
    <Grid
      container
      spacing={1}
      sx={{
        maxWidth: "max-content",
      }}
    >
      {(Object.keys(locales) as SupportedLocales[]).map((localeCode) => (
        <LanguageButton
          key={localeCode}
          lang={localeCode}
        />
      ))}
    </Grid>
  );
};

export default LanguageSwitcher;
