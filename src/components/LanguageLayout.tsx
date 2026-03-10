import { useEffect, Suspense } from "react";
import { Outlet, useParams, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { supportedLanguages, type SupportedLanguage } from "@/i18n";

const LanguageLayout = () => {
  const { lang } = useParams<{ lang: string }>();
  const { i18n, t } = useTranslation("common");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!lang || !supportedLanguages.includes(lang as SupportedLanguage)) {
      navigate(`/en${location.pathname}${location.search}${location.hash}`, { replace: true });
      return;
    }

    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }

    document.documentElement.lang = lang === "pt" ? "pt-PT" : "en-GB";
  }, [lang, i18n, navigate, location]);

  useEffect(() => {
    document.title = t("meta.title");
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", t("meta.description"));

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", t("meta.title"));
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", t("meta.description"));

    // hreflang tags
    const existingHreflangs = document.querySelectorAll('link[hreflang]');
    existingHreflangs.forEach((el) => el.remove());

    const base = window.location.origin;
    const pathWithoutLang = location.pathname.replace(/^\/(en|pt)/, "") || "/";

    supportedLanguages.forEach((lng) => {
      const link = document.createElement("link");
      link.rel = "alternate";
      link.hreflang = lng === "en" ? "en-GB" : "pt-PT";
      link.href = `${base}/${lng}${pathWithoutLang}`;
      document.head.appendChild(link);
    });

    const defaultLink = document.createElement("link");
    defaultLink.rel = "alternate";
    defaultLink.hreflang = "x-default";
    defaultLink.href = `${base}/en${pathWithoutLang}`;
    document.head.appendChild(defaultLink);
  }, [t, location.pathname]);

  if (!lang || !supportedLanguages.includes(lang as SupportedLanguage)) {
    return null;
  }

  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <Outlet />
    </Suspense>
  );
};

export default LanguageLayout;
