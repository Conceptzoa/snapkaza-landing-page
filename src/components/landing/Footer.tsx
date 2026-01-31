import { Link } from "react-router-dom";
import { Linkedin, Instagram, Youtube } from "lucide-react";

const footerLinks = {
  product: [
    { name: "Features", href: "#showcase" },
    { name: "Pricing", href: "#pricing" },
    { name: "How It Works", href: "#process" },
    { name: "FAQ", href: "#faq" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Contact Us", href: "#contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy-policy", isRoute: true },
    { name: "Terms of Service", href: "/terms-of-service", isRoute: true },
    { name: "Cookie Policy", href: "/cookie-policy", isRoute: true },
    { name: "GDPR", href: "/gdpr", isRoute: true },
  ],
};

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
];

const Footer = () => {
  return (
    <footer className="py-16 md:py-20 relative border-t border-border/30">
      <div className="absolute inset-0 bg-charcoal" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <span className="font-serif text-2xl font-bold text-foreground">
                Snap<span className="gold-text">Kaza</span>
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-6 leading-relaxed">
              AI-powered property marketing for luxury real estate. Transform your listings 
              into cinematic experiences that captivate buyers worldwide.
            </p>
            {/* Social links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Product links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  {link.isRoute ? (
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © SnapKaza 2026. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Crafted with passion for luxury real estate
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
