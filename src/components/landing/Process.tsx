import { Smartphone, Upload, Globe, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const stepIcons = [Smartphone, Upload, Globe];

const Process = () => {
  const { t } = useTranslation("process");
  const steps = t("steps", { returnObjects: true }) as Array<{
    number: string;
    title: string;
    description: string;
  }>;

  return (
    <section id="process" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-charcoal" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
            {t("title")} <span className="gold-text">{t("titleHighlight")}</span>
          </h2>
          <p className="text-lg text-muted-foreground">{t("subtitle")}</p>
          <p className="text-base md:text-lg text-muted-foreground/80 italic font-serif mt-3">
            {t("subtitleItalic")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = stepIcons[index];
            return (
              <div key={step.number} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-[60%] w-full">
                    <div className="flex items-center">
                      <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-primary/10" />
                      <ArrowRight className="w-4 h-4 text-primary/50 -ml-1" />
                    </div>
                  </div>
                )}
                <div className="glass-card p-8 text-center hover-lift hover-glow transition-all duration-300 h-full">
                  <div className="inline-block mb-6">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-2xl gold-gradient flex items-center justify-center shadow-lg shadow-primary/30">
                        <Icon className="w-10 h-10 text-primary-foreground" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-charcoal-light border-2 border-primary flex items-center justify-center">
                        <span className="text-xs font-bold text-primary">{step.number}</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <a href="#pricing" className="btn-gold inline-flex items-center gap-2">
            {t("cta")}
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
