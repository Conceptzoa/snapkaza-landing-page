import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

export const supportedLanguages = ["en", "pt"] as const;
export type SupportedLanguage = (typeof supportedLanguages)[number];

const languageToLocale: Record<string, string> = {
  en: "en-GB",
  pt: "pt-PT",
};

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    supportedLngs: supportedLanguages,
    ns: [
      "common",
      "hero",
      "showcase",
      "testimonials",
      "pricing",
      "process",
      "faq",
      "about",
      "contact",
      "legal",
    ],
    defaultNS: "common",
    backend: {
      loadPath: (lngs: string[], namespaces: string[]) => {
        const lng = lngs[0];
        const locale = languageToLocale[lng] || "en-GB";
        return `/locales/${locale}/${namespaces[0]}.json`;
      },
    },
    detection: {
      order: ["path"],
      lookupFromPathIndex: 0,
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: true,
    },
  });

export default i18n;
