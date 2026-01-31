import { Check, Sparkles, Leaf } from "lucide-react";

const pricingTiers = [
  {
    name: "Essential",
    tagline: "For Quick Listings",
    price: "€49",
    period: "/property",
    features: [
      "15s AI Cinema Video",
      "Virtual Enhancements",
      "HD Quality Output",
      "48-hour Delivery",
      "1 Revision Included",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    tagline: "For Premium Properties",
    price: "€149",
    period: "/property",
    features: [
      "Everything in Essential",
      "AI Avatar Intro",
      "AI Voice-over (UK/PT-PT)",
      "4K Quality Output",
      "24-hour Delivery",
      "3 Revisions Included",
      "Social Media Formats",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Elite",
    tagline: "The Luxury Standard",
    price: "€349",
    period: "/property",
    features: [
      "Everything in Pro",
      "4K Full Narrative Video",
      "Voice Cloning Technology",
      "Priority Processing",
      "12-hour Rush Delivery",
      "Unlimited Revisions",
      "Dedicated Account Manager",
      "White-label Options",
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
            Service <span className="gold-text">Packages</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the perfect package for your property marketing needs. 
            All plans include our AI-powered transformation technology.
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
          Need a custom solution for your agency? <a href="#" className="text-primary hover:underline">Contact us</a> for 
          volume discounts and enterprise packages.
        </p>

        {/* Environmental commitment */}
        <p className="text-center text-xs text-muted-foreground/70 mt-6 flex items-center justify-center gap-1.5">
          <Leaf className="w-3 h-3" />
          1% of every purchase is dedicated to carbon removal initiatives.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
