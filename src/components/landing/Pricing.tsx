import { Check, Sparkles, Leaf } from "lucide-react";
import AnchorLink from "@/components/AnchorLink";

const pricingTiers = [
  {
    name: "Essential",
    tagline: "For Quick Listings",
    price: "£79",
    period: "/property",
    features: [
      "30s AI Cinema Video",
      "6 Virtual Enhancements",
      "AI Voice-over",
      "HD Quality Output",
      "48-hour Delivery",
      "Social Media Formats",
      "1 Revision",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    tagline: "For Premium Properties",
    price: "£179",
    period: "/property",
    features: [
      "60s AI Cinema Video",
      "12 Virtual Enhancements",
      "AI Avatar Intro",
      "AI Voice-over",
      "4K Quality Output",
      "36-hour Delivery",
      "Social Media Formats",
      "3 Revisions",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Elite",
    tagline: "The Luxury Standard",
    price: "£399",
    period: "/property",
    features: [
      "90s+ Full AI Avatar Cinematic Narrative",
      "4K Full Narrative Video",
      "18+ Virtual Enhancements",
      "Voice Cloning Technology",
      "Priority Processing",
      "24-hour Delivery",
      "Social Media Formats",
      "6 Revisions",
    ],
    cta: "Get Started",
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal-light to-charcoal" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
            Cinematic <span className="gold-text">Packages</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Elevate your listings with AI-generated cinema. Our technology transforms 
            your property photographs into high-impact cinematic experiences.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative glass-card p-8 hover-lift hover-glow transition-all duration-300 ${
                tier.popular ? "ring-2 ring-primary" : ""
              }`}
            >
              {/* Popular badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="gold-gradient px-4 py-1.5 rounded-full flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-primary-foreground" />
                    <span className="text-sm font-semibold text-primary-foreground">Most Popular</span>
                  </div>
                </div>
              )}

              {/* Tier name & tagline */}
              <div className="text-center mb-6">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-1">{tier.name}</h3>
                <p className="text-muted-foreground text-sm">{tier.tagline}</p>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="font-serif text-5xl font-bold gold-text">{tier.price}</span>
                  <span className="text-muted-foreground">{tier.period}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#"
                className={`block text-center py-4 rounded-lg font-semibold transition-all duration-300 ${
                  tier.popular
                    ? "btn-gold w-full"
                    : "border-2 border-border hover:border-primary hover:text-primary text-foreground"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Additional note */}
        <p className="text-center text-muted-foreground mt-12 max-w-2xl mx-auto">
          Operating a high-volume agency?{" "}
          <AnchorLink to="/#contact" className="text-primary hover:underline">
            Contact us
          </AnchorLink>{" "}
          for bespoke enterprise solutions and automated workflows.
        </p>

        {/* Environmental commitment */}
        <p className="text-center text-xs text-muted-foreground/70 mt-6 flex items-center justify-center gap-1.5">
          <Leaf className="w-3 h-3" />
          Investing in the future: 1% of every purchase is dedicated to global carbon removal initiatives.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
