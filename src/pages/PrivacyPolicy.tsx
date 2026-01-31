import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Navigation, Footer } from "@/components/landing";

const PrivacyPolicy = () => {
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
                Privacy <span className="gold-text">Policy</span>
              </h1>
              
              <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
                <p className="text-lg">
                  Last updated: January 2026
                </p>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">1. Introduction</h2>
                  <p>
                    SnapKaza ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered property marketing platform.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">2. Information We Collect</h2>
                  <p>We may collect the following types of information:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Personal Information:</strong> Name, email address, phone number, and agency details when you register or contact us.</li>
                    <li><strong>Property Data:</strong> Images, videos, and property descriptions you upload for AI processing.</li>
                    <li><strong>Usage Data:</strong> Information about how you interact with our platform, including access times and features used.</li>
                    <li><strong>Technical Data:</strong> IP address, browser type, device information, and cookies.</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">3. How We Use Your Information</h2>
                  <p>We use collected information to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide and improve our AI property marketing services</li>
                    <li>Process and deliver your transformed visual assets</li>
                    <li>Communicate with you about your account and services</li>
                    <li>Send marketing communications (with your consent)</li>
                    <li>Ensure platform security and prevent fraud</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">4. Data Sharing</h2>
                  <p>We may share your information with:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Service Providers:</strong> Third-party vendors who assist in platform operations</li>
                    <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                    <li><strong>Business Transfers:</strong> In connection with mergers or acquisitions</li>
                  </ul>
                  <p>We never sell your personal information to third parties.</p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">5. Data Security</h2>
                  <p>
                    We implement industry-standard security measures to protect your data, including encryption, secure servers, and regular security audits. However, no method of transmission over the Internet is 100% secure.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">6. Your Rights</h2>
                  <p>Depending on your location, you may have rights to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access your personal data</li>
                    <li>Correct inaccurate data</li>
                    <li>Request deletion of your data</li>
                    <li>Object to data processing</li>
                    <li>Data portability</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">7. Contact Us</h2>
                  <p>
                    For privacy-related inquiries, please contact us at{" "}
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

export default PrivacyPolicy;
