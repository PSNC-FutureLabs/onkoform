import React from "react";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { SupportedLocales } from "../../helpers";

interface LanguageButtonProps {
  lang: SupportedLocales;
}

const LanguageButton: React.FC<LanguageButtonProps> = ({
  lang,
}) => {
  const { i18n } = useTranslation();
  const activeLanguage = i18n.language;
  const isLangMatch = activeLanguage === lang;
  return (
    <Grid item>
      <Button
        component={Link}
        to={`/${lang}`}
        variant="outlined"
        size="large"
        sx={{
          padding: {xs:"6px 8px", sm: "8px 10px"},
          border:
            isLangMatch ? "1px solid black" : "1px solid white",
          opacity: isLangMatch ? 1 : 0.5,
          backgroundColor: isLangMatch ? "black" : "transparent",
          color: "white",
          "&:hover": {
            backgroundColor: isLangMatch ? "black" : "transparent",
            opacity: 1,
          },
          minWidth: "unset",
          lineHeight: 1,
        }}
      >
        {lang.toUpperCase()}
      </Button>
    </Grid>
  );
};

export default LanguageButton;
