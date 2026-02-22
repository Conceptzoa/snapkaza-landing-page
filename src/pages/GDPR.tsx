import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Navigation, Footer } from "@/components/landing";

const GDPR = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Back Link */}
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            {/* Content Card */}
            <div className="glass-card p-8 md:p-12">
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
                <span className="gold-text">GDPR</span> Compliance
              </h1>
              
              <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
                <p className="text-lg">
                  Last updated: January 2026
                </p>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">1. Our Commitment to GDPR</h2>
                  <p>
                    SnapKaza is committed to protecting the personal data of our users in compliance with the General Data Protection Regulation (GDPR). This page outlines how we meet our obligations under EU data protection law.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">2. Data Controller</h2>
                  <p>
                    SnapKaza Ltd is the data controller for personal data collected through our platform. Our registered address is in the United Kingdom.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">3. Your Rights Under GDPR</h2>
                  <p>As an EU/EEA resident, you have the following rights:</p>
                  
                  <h3 className="text-lg font-medium text-foreground mt-4">Right to Access</h3>
                  <p>You can request a copy of all personal data we hold about you.</p>
                  
                  <h3 className="text-lg font-medium text-foreground mt-4">Right to Rectification</h3>
                  <p>You can request correction of inaccurate or incomplete data.</p>
                  
                  <h3 className="text-lg font-medium text-foreground mt-4">Right to Erasure ("Right to be Forgotten")</h3>
                  <p>You can request deletion of your personal data in certain circumstances.</p>
                  
                  <h3 className="text-lg font-medium text-foreground mt-4">Right to Restrict Processing</h3>
                  <p>You can request that we limit how we use your data.</p>
                  
                  <h3 className="text-lg font-medium text-foreground mt-4">Right to Data Portability</h3>
                  <p>You can request your data in a machine-readable format.</p>
                  
                  <h3 className="text-lg font-medium text-foreground mt-4">Right to Object</h3>
                  <p>You can object to certain types of processing, including direct marketing.</p>
                  
                  <h3 className="text-lg font-medium text-foreground mt-4">Rights Related to Automated Decision-Making</h3>
                  <p>You have the right not to be subject to decisions based solely on automated processing.</p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">4. Legal Basis for Processing</h2>
                  <p>We process personal data based on:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Contract:</strong> Processing necessary to provide our services</li>
                    <li><strong>Consent:</strong> Where you have given explicit consent</li>
                    <li><strong>Legitimate Interest:</strong> For business operations and service improvement</li>
                    <li><strong>Legal Obligation:</strong> Where required by law</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">5. Data Transfers</h2>
                  <p>
                    When we transfer data outside the EU/EEA, we ensure appropriate safeguards are in place, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Standard Contractual Clauses (SCCs)</li>
                    <li>Adequacy decisions</li>
                    <li>Binding Corporate Rules where applicable</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">6. Data Protection Officer</h2>
                  <p>
                    For GDPR-related inquiries, you can contact our Data Protection Officer at{" "}
                    <a href="mailto:hello@snapkaza.com" className="text-primary hover:underline">
                      hello@snapkaza.com
                    </a>
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">7. Exercising Your Rights</h2>
                  <p>
                    To exercise any of your GDPR rights, please contact us at{" "}
                    <a href="mailto:hello@snapkaza.com" className="text-primary hover:underline">
                      hello@snapkaza.com
                    </a>
                    . We will respond to your request within 30 days.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">8. Supervisory Authority</h2>
                  <p>
                    If you are not satisfied with our response, you have the right to lodge a complaint with the Information Commissioner's Office (ICO) in the UK or your local data protection authority.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GDPR;
