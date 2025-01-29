import React from "react";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import i18n from "../../utils/i18n";
import { SupportedLocales } from "../../helpers";

interface LanguageButtonProps {
  lang: SupportedLocales;
}

const LanguageButton: React.FC<LanguageButtonProps> = ({
  lang,
}) => {
  const activeLanguage = i18n.language
  return (
    <Grid item>
      <Button
        component={Link}
        to={`/${lang}`}
        variant="outlined"
        size="large"
        sx={{
          padding: "8px 10px",
          border:
            activeLanguage === lang ? "1px solid black" : "1px solid white",
          opacity: activeLanguage === lang ? 1 : 0.5,
          backgroundColor: activeLanguage === lang ? "black" : "transparent",
          color: "white",
          "&:hover": {
            backgroundColor: activeLanguage === lang ? "black" : "transparent",
            opacity: 1,
          },
          minWidth: "unset",
          lineHeight: 1,
        }}
        //onClick={() => changeLanguage(lang)}
      >
        {lang.toUpperCase()}
      </Button>
    </Grid>
  );
};

export default LanguageButton;
