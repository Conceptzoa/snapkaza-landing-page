import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal" />
      
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">AI-Powered Luxury Real Estate Marketing</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-in-delay-1">
            Elevate Your Property{" "}
            <br className="hidden md:block" />
            Marketing with{" "}
            <span className="gold-text">AI.</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-delay-2">
            Transform smartphone photos into cinematic 4K videos, AI-narrated tours, 
            and luxury virtual staging in minutes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delay-3">
            <a
              href="#pricing"
              className="btn-gold flex items-center gap-2 animate-subtle-pulse"
            >
              Get Started
              <ArrowRight size={18} />
            </a>
            <button className="btn-ghost flex items-center gap-2">
              <Play size={18} />
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/30 animate-fade-in-delay-3">
            <div className="text-center">
              <div className="font-serif text-3xl md:text-4xl font-bold gold-text mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Properties Enhanced</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-3xl md:text-4xl font-bold gold-text mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-3xl md:text-4xl font-bold gold-text mb-2">24h</div>
              <div className="text-sm text-muted-foreground">Turnaround Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
