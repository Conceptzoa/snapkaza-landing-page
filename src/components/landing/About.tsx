import { Building2, Globe, Award, Shield } from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "PropTech Innovation",
    description: "Cutting-edge AI technology designed specifically for luxury real estate",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Serving premium property consultants across the UK and beyond",
  },
  {
    icon: Award,
    title: "Bespoke Solutions",
    description: "Tailored visual assets that reflect the uniqueness of each property",
  },
  {
    icon: Shield,
    title: "Trusted Partner",
    description: "Built on privacy, security, and professional excellence",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal-light to-charcoal" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full glass text-primary text-sm font-medium mb-6">
              About Us
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-8">
              Elevating <span className="gold-text">Property Marketing</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Based in the UK, SnapKaza is a next-generation PropTech platform dedicated to 
              empowering luxury real estate consultants through bespoke AI-driven visual assets.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="glass-card p-6 group hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mission Statement */}
          <div className="mt-16 text-center">
            <div className="glass-card p-8 md:p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
              <div className="relative">
                <blockquote className="font-serif text-xl md:text-2xl text-foreground italic mb-4">
                  "We believe every property deserves to be showcased at its absolute best."
                </blockquote>
                <p className="text-muted-foreground">
                  — The SnapKaza Team
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
