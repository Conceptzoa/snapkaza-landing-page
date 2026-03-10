import { useTranslation } from "react-i18next";
import { Building2, Globe, Award, Shield } from "lucide-react";

const featureIcons = [Building2, Globe, Award, Shield];

const About = () => {
  const { t } = useTranslation("about");
  const features = t("features", { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal-light to-charcoal" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-8">
              {t("title")} <span className="gold-text">{t("titleHighlight")}</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {t("subtitle")}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = featureIcons[index];
              return (
                <div key={index} className="glass-card p-6 group hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <div className="glass-card p-8 md:p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
              <div className="relative">
                <blockquote className="font-serif text-xl md:text-2xl text-foreground italic mb-4">
                  {t("missionQuote")}
                </blockquote>
                <p className="text-muted-foreground">{t("missionAttribution")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
