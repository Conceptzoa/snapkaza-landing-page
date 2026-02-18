import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnchorLink from "@/components/AnchorLink";

const faqs = [
  {
    question: "Do I really only need my smartphone?",
    answer: "Yes. SnapKaza's AI is specifically engineered to transform standard mobile photos into 4K luxury assets. You don't need expensive gear or professional photographers anymore.",
  },
  {
    question: "How much can I save compared to traditional photography?",
    answer: "A typical pro-shoot in the UK costs £300–£600 per listing. With our Essential Pack (£79) or Pro Pack (£179), you save up to 70% while getting more features like 3D rendering and AI Avatars.",
  },
  {
    question: "What is the turnaround time for a full Elite Pack?",
    answer: "While traditional editors take 48h+, SnapKaza delivers your visual enhancements, 3D staging, and AI-narrated videos in minutes. Go from 'just listed' to 'live' on the same day.",
  },
  {
    question: "Is there a monthly subscription fee?",
    answer: "No. We operate on a transparent Pay-per-Listing model. You only pay when you have a property to market. No contracts, no hidden fees.",
  },
  {
    question: "Are the AI Avatars professional enough for luxury clients?",
    answer: "Absolutely. Our avatars use high-fidelity voice-over technology designed for the premium market, acting as a 24/7 concierge that presents your property with consistent, high-end quality.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal-light to-charcoal" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
            Frequently Asked <span className="gold-text">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about SnapKaza's AI-powered property marketing.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card px-6 border-none"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary hover:no-underline py-6 text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Additional help */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Still have questions?{" "}
            <AnchorLink to="/#contact" className="text-primary hover:underline font-medium">
              Contact our support team
            </AnchorLink>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
