import { ArrowRight, Play } from "lucide-react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation("hero");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal" />
      
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">{t("badge")}</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-in-delay-1">
            {t("headline")}{" "}
            <br className="hidden md:block" />
            <span className="gold-text">{t("headlineHighlight")}</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-delay-2">
            {t("subheadline")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delay-3">
            <a
              href="#pricing"
              className="btn-gold flex items-center gap-2 animate-subtle-pulse"
            >
              {t("ctaGetStarted")}
              <ArrowRight size={18} />
            </a>
            <button className="btn-ghost flex items-center gap-2">
              <Play size={18} />
              {t("ctaWatchDemo")}
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/30 animate-fade-in-delay-3">
            <div className="text-center">
              <div className="font-serif text-3xl md:text-4xl font-bold gold-text mb-2">{t("stats.propertiesValue")}</div>
              <div className="text-sm text-muted-foreground">{t("stats.propertiesLabel")}</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-3xl md:text-4xl font-bold gold-text mb-2">{t("stats.satisfactionValue")}</div>
              <div className="text-sm text-muted-foreground">{t("stats.satisfactionLabel")}</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-3xl md:text-4xl font-bold gold-text mb-2">{t("stats.turnaroundValue")}</div>
              <div className="text-sm text-muted-foreground">{t("stats.turnaroundLabel")}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
