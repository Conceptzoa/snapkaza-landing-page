import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Navigation, Footer } from "@/components/landing";

const TermsOfService = () => {
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
                Terms of <span className="gold-text">Service</span>
              </h1>
              
              <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
                <p className="text-lg">
                  Last updated: January 2026
                </p>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">1. Agreement to Terms</h2>
                  <p>
                    By accessing or using SnapKaza's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our platform.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">2. Description of Services</h2>
                  <p>
                    SnapKaza provides AI-powered property marketing services, including but not limited to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>AI Virtual Staging</li>
                    <li>Cinematic AI Video creation</li>
                    <li>AI Avatar generation</li>
                    <li>4K Image Upscaling</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">3. User Accounts</h2>
                  <p>
                    You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. You must provide accurate information when creating an account.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">4. Content Ownership</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Your Content:</strong> You retain ownership of original images and content you upload.</li>
                    <li><strong>AI-Generated Content:</strong> Upon payment, you receive full commercial rights to AI-generated assets.</li>
                    <li><strong>License:</strong> You grant us a license to process your content for service delivery.</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">5. Acceptable Use</h2>
                  <p>You agree not to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Upload content you don't have rights to use</li>
                    <li>Use the service for illegal purposes</li>
                    <li>Attempt to reverse-engineer our AI technology</li>
                    <li>Resell or redistribute our services without authorization</li>
                    <li>Upload harmful or malicious content</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">6. Payment Terms</h2>
                  <p>
                    Payments are processed securely through our payment providers. All fees are non-refundable unless otherwise stated. Prices may change with notice to users.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">7. Limitation of Liability</h2>
                  <p>
                    SnapKaza is not liable for any indirect, incidental, special, or consequential damages arising from your use of our services. Our total liability is limited to the amount you paid for the specific service.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">8. Termination</h2>
                  <p>
                    We may suspend or terminate your access to our services at any time for violation of these terms. You may also terminate your account at any time by contacting us.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">9. Governing Law</h2>
                  <p>
                    These terms are governed by the laws of England and Wales. Any disputes shall be resolved in the courts of England and Wales.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">10. Contact</h2>
                  <p>
                    For questions about these terms, please contact us at{" "}
                    <a href="mailto:hello@snapkaza.com" className="text-primary hover:underline">
                      hello@snapkaza.com
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

export default TermsOfService;
