import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Instagram, Youtube, Leaf } from "lucide-react";
import AnchorLink from "@/components/AnchorLink";

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/snapkaza" },
  { name: "YouTube", icon: Youtube, href: "https://www.youtube.com/@SnapKaza" },
];

const Footer = () => {
  const { t } = useTranslation("common");
  const { lang } = useParams<{ lang: string }>();
  const currentLang = lang || "en";

  const productLinks = [
    { name: t("footer.features"), href: "/#showcase" },
    { name: t("footer.pricing"), href: "/#pricing" },
    { name: t("footer.howItWorks"), href: "/#process" },
    { name: t("footer.faq"), href: "/#faq" },
  ];

  const companyLinks = [
    { name: t("footer.aboutUs"), href: "/#about" },
    { name: t("footer.contactUs"), href: "/#contact" },
    { name: "hello@snapkaza.com", href: "mailto:hello@snapkaza.com" },
  ];

  const legalLinks = [
    { name: t("footer.privacyPolicy"), href: `/${currentLang}/privacy-policy`, isRoute: true },
    { name: t("footer.termsOfService"), href: `/${currentLang}/terms-of-service`, isRoute: true },
    { name: t("footer.cookiePolicy"), href: `/${currentLang}/cookie-policy`, isRoute: true },
    { name: t("footer.gdpr"), href: `/${currentLang}/gdpr`, isRoute: true },
  ];

  return (
    <footer className="py-16 md:py-20 relative border-t border-border/30">
      <div className="absolute inset-0 bg-charcoal" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link to={`/${currentLang}`} className="inline-block mb-6">
              <span className="font-serif text-2xl font-bold text-foreground">
                Snap<span className="gold-text">Kaza</span>
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-6 leading-relaxed">
              {t("footer.description")}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
                  aria-label={social.name}
                  {...(social.href.startsWith("http") && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">{t("footer.product")}</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <AnchorLink to={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </AnchorLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">{t("footer.company")}</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <AnchorLink to={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </AnchorLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">{t("footer.legal")}</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  {link.isRoute ? (
                    <Link to={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </Link>
                  ) : (
                    <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/30 flex flex-col items-center gap-4">
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">{t("footer.copyright")}</p>
            <p className="text-muted-foreground text-sm">{t("footer.tagline")}</p>
          </div>
          <p className="text-xs text-muted-foreground/60 flex items-center gap-1.5">
            <Leaf className="w-3 h-3" />
            {t("footer.carbonNote")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
