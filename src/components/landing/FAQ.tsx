import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the AI enhancement technology work?",
    answer: "Our proprietary AI analyzes your property photos and applies professional-grade enhancements including lighting correction, virtual staging, sky replacement, and detail enhancement. The AI has been trained on millions of luxury property images to understand what makes a listing visually compelling.",
  },
  {
    question: "What is the typical turnaround time?",
    answer: "Turnaround times depend on your package: Essential (48 hours), Pro (24 hours), and Elite (12 hours with rush processing). For urgent needs, contact us about same-day delivery options for Elite clients.",
  },
  {
    question: "Which languages are supported for AI voice-overs?",
    answer: "We currently support UK English and European Portuguese (PT-PT) for AI voice-overs. Spanish, French, and German are coming soon. Elite package clients can also use voice cloning technology to create narration in their own voice.",
  },
  {
    question: "What file formats do you deliver?",
    answer: "We deliver in multiple formats optimized for different platforms: MP4 for video (1080p or 4K), JPEG for enhanced photos, and specific aspect ratios for Instagram (1:1, 4:5), YouTube (16:9), and Stories (9:16). All files are web-optimized for fast loading.",
  },
  {
    question: "How do you handle data privacy and security?",
    answer: "We take data security seriously. All uploads are encrypted in transit and at rest. Your property images are automatically deleted 30 days after project completion. We never share or use your images for training purposes, and we're fully GDPR compliant.",
  },
  {
    question: "Can I request revisions to my deliverables?",
    answer: "Yes! The number of revisions depends on your package: Essential (1 revision), Pro (3 revisions), and Elite (unlimited revisions). Revisions typically take 12-24 hours depending on complexity.",
  },
  {
    question: "Do you offer volume discounts for agencies?",
    answer: "Absolutely. We offer custom enterprise packages for agencies processing 10+ properties per month. These include dedicated account management, priority processing, and significant volume discounts. Contact us to discuss your needs.",
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
            <a href="#" className="text-primary hover:underline font-medium">
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
