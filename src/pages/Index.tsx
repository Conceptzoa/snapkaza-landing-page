import {
  Navigation,
  Hero,
  Showcase,
  Testimonials,
  Pricing,
  Process,
  FAQ,
  About,
  Contact,
  Footer,
} from "@/components/landing";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Showcase />
        <Testimonials />
        <Pricing />
        <Process />
        <FAQ />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
