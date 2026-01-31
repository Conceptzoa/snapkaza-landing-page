import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Navigation, Footer } from "@/components/landing";

const CookiePolicy = () => {
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
                Cookie <span className="gold-text">Policy</span>
              </h1>
              
              <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
                <p className="text-lg">
                  Last updated: January 2026
                </p>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">1. What Are Cookies?</h2>
                  <p>
                    Cookies are small text files stored on your device when you visit our website. They help us provide a better user experience and understand how our platform is used.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">2. Types of Cookies We Use</h2>
                  
                  <h3 className="text-lg font-medium text-foreground mt-4">Essential Cookies</h3>
                  <p>
                    Required for the platform to function properly. These cannot be disabled.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Authentication and session management</li>
                    <li>Security and fraud prevention</li>
                    <li>Load balancing</li>
                  </ul>

                  <h3 className="text-lg font-medium text-foreground mt-4">Analytics Cookies</h3>
                  <p>
                    Help us understand how visitors interact with our platform.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Page view tracking</li>
                    <li>Feature usage analytics</li>
                    <li>Performance monitoring</li>
                  </ul>

                  <h3 className="text-lg font-medium text-foreground mt-4">Functional Cookies</h3>
                  <p>
                    Enable enhanced functionality and personalization.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>User preferences</li>
                    <li>Language settings</li>
                    <li>Recently viewed items</li>
                  </ul>

                  <h3 className="text-lg font-medium text-foreground mt-4">Marketing Cookies</h3>
                  <p>
                    Used to deliver relevant advertisements (only with your consent).
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Ad targeting and measurement</li>
                    <li>Social media integration</li>
                    <li>Remarketing campaigns</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">3. Third-Party Cookies</h2>
                  <p>
                    We use cookies from trusted third-party services including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Google Analytics (analytics)</li>
                    <li>Stripe (payment processing)</li>
                    <li>Intercom (customer support)</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">4. Managing Cookies</h2>
                  <p>
                    You can manage your cookie preferences through:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Our cookie consent banner (shown on first visit)</li>
                    <li>Your browser settings</li>
                    <li>Third-party opt-out tools</li>
                  </ul>
                  <p className="mt-4">
                    Note: Disabling certain cookies may affect platform functionality.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">5. Cookie Retention</h2>
                  <p>
                    Cookie retention periods vary:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
                    <li><strong>Persistent cookies:</strong> Stored for up to 12 months</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">6. Updates to This Policy</h2>
                  <p>
                    We may update this Cookie Policy periodically. Changes will be posted on this page with an updated revision date.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">7. Contact Us</h2>
                  <p>
                    For questions about our cookie practices, please contact us at{" "}
                    <a href="mailto:privacy@snapkaza.com" className="text-primary hover:underline">
                      privacy@snapkaza.com
                    </a>
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

export default CookiePolicy;
