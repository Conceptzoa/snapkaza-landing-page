import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeft } from "lucide-react";
import { Navigation, Footer } from "@/components/landing";

interface LegalSection {
  heading: string;
  content?: string;
  list?: string[];
  suffix?: string;
  subsections?: Array<{
    heading: string;
    content?: string;
    list?: string[];
  }>;
}

interface LegalPageProps {
  pageKey: "privacy" | "terms" | "cookie" | "gdpr";
}

const LegalPage = ({ pageKey }: LegalPageProps) => {
  const { t } = useTranslation("legal");
  const { t: tc } = useTranslation("common");
  const { lang } = useParams<{ lang: string }>();
  const currentLang = lang || "en";

  const sections = t(`${pageKey}.sections`, { returnObjects: true }) as LegalSection[];
  
  const isGdpr = pageKey === "gdpr";
  const title = isGdpr ? (
    <><span className="gold-text">{t(`${pageKey}.titleHighlight`)}</span> {t(`${pageKey}.titleSuffix`)}</>
  ) : (
    <>{t(`${pageKey}.title`)} <span className="gold-text">{t(`${pageKey}.titleHighlight`)}</span></>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <Link 
              to={`/${currentLang}`}
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              {tc("backToHome")}
            </Link>

            <div className="glass-card p-8 md:p-12">
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
                {title}
              </h1>
              
              <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
                <p className="text-lg">{t(`${pageKey}.lastUpdated`)}</p>

                {sections.map((section, i) => (
                  <section key={i} className="space-y-4">
                    <h2 className="text-xl font-semibold text-foreground">{section.heading}</h2>
                    {section.content && (
                      <p>
                        {section.content}
                        {/* Contact email for last sections */}
                        {section.content.endsWith(" at") && (
                          <>{" "}<a href="mailto:hello@snapkaza.com" className="text-primary hover:underline">hello@snapkaza.com</a></>
                        )}
                      </p>
                    )}
                    {section.list && (
                      <ul className="list-disc pl-6 space-y-2">
                        {section.list.map((item, j) => (
                          <li key={j} dangerouslySetInnerHTML={{ __html: item }} />
                        ))}
                      </ul>
                    )}
                    {section.suffix && <p>{section.suffix}</p>}
                    {section.subsections?.map((sub, k) => (
                      <div key={k}>
                        <h3 className="text-lg font-medium text-foreground mt-4">{sub.heading}</h3>
                        {sub.content && <p>{sub.content}</p>}
                        {sub.list && (
                          <ul className="list-disc pl-6 space-y-2">
                            {sub.list.map((item, l) => (
                              <li key={l} dangerouslySetInnerHTML={{ __html: item }} />
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LegalPage;
