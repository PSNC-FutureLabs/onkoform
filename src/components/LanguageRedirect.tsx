import React from 'react';
import { Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const LanguageRedirect = () => {
  const location = useLocation();
  const { i18n } = useTranslation();
  const language = location.pathname.split('/')[1];
  if (language && ['pl', 'ua', 'en'].includes(language)) {
    i18n.changeLanguage(language);
  }
  return <Navigate to={`/`} />;
};
