import React from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { Send, Mail, User, MessageSquare, ListFilter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// EmailJS configuration
const EMAILJS_SERVICE_ID = "service_2l0qm3e";
const EMAILJS_TEMPLATE_ID = "template_s04o9o8";
const EMAILJS_PUBLIC_KEY = "e66X25OZ_571CE0tV";

const subjectOptions = [
  { value: "general", label: "General Inquiry" },
  { value: "essential", label: "Property Launch - Essential" },
  { value: "premium", label: "Property Launch - Premium" },
  { value: "elite", label: "Property Launch - Elite" },
  { value: "partnership", label: "Partnership & Business Opportunities" },
] as const;

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Full name is required" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  subject: z.enum(["general", "essential", "premium", "elite", "partnership"], {
    required_error: "Please select a subject",
  }),
  message: z
    .string()
    .trim()
    .min(1, { message: "Message is required" })
    .max(1000, { message: "Message must be less than 1000 characters" }),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact: React.FC = () => {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: undefined,
      message: "",
    },
  });

  const { register, handleSubmit, reset, control, formState } = form;
  const { errors, isSubmitting } = formState;

  const getSubjectLabel = (value: string) => {
    return subjectOptions.find((opt) => opt.value === value)?.label || value;
  };

  const onSubmit = async (data: ContactFormData) => {
    try {
      const templateParams = {
        name: data.name,
        email: data.email,
        subject: getSubjectLabel(data.subject),
        message: data.message,
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      toast.success("Message sent successfully!", {
        description: "We'll get back to you within 24 hours.",
      });

      reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Failed to send message", {
        description: "Please try again or contact us directly.",
      });
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-light via-charcoal to-charcoal" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full glass text-primary text-sm font-medium mb-6">
              Contact Us
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
              Get in <span className="gold-text">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Ready to transform your property marketing? We'd love to hear from
              you.
            </p>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-6 md:p-10">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="text-foreground flex items-center gap-2"
                  >
                    <User className="w-4 h-4 text-primary" />
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="John Smith"
                    className="bg-charcoal/50 border-border/50 focus:border-primary placeholder:text-muted-foreground/50"
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-foreground flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4 text-primary" />
                    Agency Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@luxuryestates.co.uk"
                    className="bg-charcoal/50 border-border/50 focus:border-primary placeholder:text-muted-foreground/50"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject Dropdown */}
              <div className="space-y-2">
                <Label
                  htmlFor="subject"
                  className="text-foreground flex items-center gap-2"
                >
                  <ListFilter className="w-4 h-4 text-primary" />
                  Subject
                </Label>
                <Controller
                  name="subject"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="bg-charcoal/50 border-border/50 focus:border-primary text-foreground">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent className="bg-charcoal border-border/50">
                        {subjectOptions.map((option) => (
                          <SelectItem
                            key={option.value}
                            value={option.value}
                            className="text-foreground focus:bg-primary/20 focus:text-foreground"
                          >
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.subject && (
                  <p className="text-sm text-destructive">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label
                  htmlFor="message"
                  className="text-foreground flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-primary" />
                  Your Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your property marketing needs..."
                  rows={5}
                  className="bg-charcoal/50 border-border/50 focus:border-primary placeholder:text-muted-foreground/50 resize-none"
                  {...register("message")}
                />
                {errors.message && (
                  <p className="text-sm text-destructive">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full gold-gradient text-primary-foreground hover:opacity-90 transition-opacity h-12 text-base font-semibold"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>

            {/* Trust indicators */}
            <div className="mt-8 pt-6 border-t border-border/30">
              <p className="text-center text-muted-foreground text-sm">
                We typically respond within 24 hours. Your information is secure
                and will never be shared.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
