import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { SupportedLocales, locales } from "../helpers";

import enNs1 from "../locales/en/ns1.json";
import enNs2 from "../locales/en/ns2.json";
import plNs1 from "../locales/pl/ns1.json";
import plNs2 from "../locales/pl/ns2.json";
import ukNs1 from "../locales/uk/ns1.json";
import ukNs2 from "../locales/uk/ns2.json";
import { isLocalhost } from "../helpers";
export const defaultNS = "ns1";

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: isLocalhost ? true : false,
    fallbackLng: Object.keys(locales)[0] as SupportedLocales,
    supportedLngs: Object.keys(locales) as SupportedLocales[],
    defaultNS,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        ns1: enNs1,
        ns2: enNs2,
      },
      pl: {
        ns1: plNs1,
        ns2: plNs2,
      },
      uk: {
        ns1: ukNs1,
        ns2: ukNs2,
      },
    },
    react: {
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ["br", "strong", "i"],
    },
  });

export default i18next;
