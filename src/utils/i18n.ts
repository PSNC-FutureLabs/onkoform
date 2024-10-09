import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enNs1 from "../locales/en/ns1.json";
import enNs2 from "../locales/en/ns2.json";
import plNs1 from "../locales/pl/ns1.json";
import plNs2 from "../locales/pl/ns2.json";
import uaNs1 from "../locales/ua/ns1.json";
import uaNs2 from "../locales/ua/ns2.json";
import { isLocalhost } from "../helpers";
export const defaultNS = "ns1";

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: isLocalhost ? true : false,
    fallbackLng: "pl",
    supportedLngs: ["pl", "en", "ua"],
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
      ua: {
        ns1: uaNs1,
        ns2: uaNs2,
      },
    },
    react: {
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ["br", "strong", "i"],
    },
  });

export default i18next;
