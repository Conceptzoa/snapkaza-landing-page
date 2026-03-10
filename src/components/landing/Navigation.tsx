import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import AnchorLink from "@/components/AnchorLink";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation("common");
  const { lang } = useParams<{ lang: string }>();
  const currentLang = lang || "en";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("nav.features"), href: "/#showcase" },
    { name: t("nav.contactUs"), href: "/#contact" },
    { name: t("nav.pricing"), href: "/#pricing" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to={`/${currentLang}`} className="flex items-center gap-2">
            <span className="font-serif text-2xl font-bold text-foreground">
              Snap<span className="gold-text">Kaza</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <AnchorLink
                key={link.name}
                to={link.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {link.name}
              </AnchorLink>
            ))}
          </div>

          {/* CTA Button + Language Switcher */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <Button
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary"
              asChild
            >
              <a href="https://app.snapkaza.com" target="_blank" rel="noopener noreferrer">
                {t("nav.clientLogin")}
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass-card mt-4 p-6 animate-fade-in">
            <div className="flex flex-col gap-4">
              <div className="pb-3 border-b border-border/30">
                <LanguageSwitcher />
              </div>
              {navLinks.map((link) => (
                <AnchorLink
                  key={link.name}
                  to={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </AnchorLink>
              ))}
              <Button
                variant="outline"
                className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary mt-2"
                asChild
              >
                <a href="https://app.snapkaza.com" target="_blank" rel="noopener noreferrer">
                  {t("nav.clientLogin")}
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
