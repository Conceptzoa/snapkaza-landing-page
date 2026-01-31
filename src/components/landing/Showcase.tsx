import { useState } from "react";
import BeforeAfterSlider from "./BeforeAfterSlider";

const showcaseItems = [
  {
    id: 1,
    title: "Modern Apartment",
    subtitle: "Lisbon, Portugal",
    before: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop&auto=format&q=80",
    after: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop&auto=format&q=80",
  },
  {
    id: 2,
    title: "Luxury Villa",
    subtitle: "Algarve, Portugal",
    before: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=1200&h=800&fit=crop&auto=format&q=80",
    after: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&h=800&fit=crop&auto=format&q=80",
  },
  {
    id: 3,
    title: "Penthouse Suite",
    subtitle: "Porto, Portugal",
    before: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&h=800&fit=crop&auto=format&q=80",
    after: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop&auto=format&q=80",
  },
];

const Showcase = () => {
  const [activeItem, setActiveItem] = useState(showcaseItems[0]);

  return (
    <section id="showcase" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal-light to-charcoal" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
            See the <span className="gold-text">Transformation</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Drag the slider to reveal the stunning AI-enhanced result. 
            Watch standard photos transform into luxury marketing assets.
          </p>
        </div>

        {/* Property Type Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {showcaseItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveItem(item)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeItem.id === item.id
                  ? "gold-gradient text-primary-foreground shadow-lg shadow-primary/20"
                  : "glass hover:bg-white/10 text-muted-foreground"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Before/After Slider */}
        <div className="max-w-5xl mx-auto">
          <div className="glass-card p-3 md:p-4">
            <BeforeAfterSlider
              beforeImage={activeItem.before}
              afterImage={activeItem.after}
              beforeLabel="Original Photo"
              afterLabel="AI Enhanced"
            />
          </div>
          <div className="text-center mt-6">
            <h3 className="font-serif text-xl font-semibold text-foreground">{activeItem.title}</h3>
            <p className="text-muted-foreground">{activeItem.subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
