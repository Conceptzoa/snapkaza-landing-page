import { useTranslation } from "react-i18next";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { supportedLanguages } from "@/i18n";

const languageLabels: Record<string, { flag: string; name: string }> = {
  en: { flag: "🇬🇧", name: "English" },
  pt: { flag: "🇵🇹", name: "Português" },
};

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { lang } = useParams<{ lang: string }>();
  const currentLang = lang || i18n.language || "en";

  const switchLanguage = (newLang: string) => {
    if (newLang === currentLang) return;
    const pathWithoutLang = location.pathname.replace(/^\/(en|pt)/, "") || "/";
    navigate(`/${newLang}${pathWithoutLang}${location.search}${location.hash}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors duration-200 font-medium outline-none">
        <Globe className="w-4 h-4" />
        <span className="text-sm uppercase">{currentLang}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="glass border-border/50 min-w-[140px]">
        {supportedLanguages.map((lng) => (
          <DropdownMenuItem
            key={lng}
            onClick={() => switchLanguage(lng)}
            className={`flex items-center gap-2 cursor-pointer ${
              lng === currentLang ? "text-primary" : "text-foreground"
            }`}
          >
            <span>{languageLabels[lng].flag}</span>
            <span>{languageLabels[lng].name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
