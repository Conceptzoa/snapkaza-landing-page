import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";
import { Send, Mail, User, MessageSquare, ListFilter, Calendar } from "lucide-react";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}
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

const N8N_WEBHOOK_URL = "https://conceptzoa.app.n8n.cloud/webhook/snapkaza-contact";

const subjectKeys = ["general", "essential", "premium", "elite", "partnership"] as const;

const Contact: React.FC = () => {
  const { t } = useTranslation("contact");

  const contactSchema = z.object({
    name: z
      .string()
      .trim()
      .min(1, { message: t("validation.nameRequired") })
      .max(100, { message: t("validation.nameMax") }),
    email: z
      .string()
      .trim()
      .email({ message: t("validation.emailInvalid") })
      .max(255, { message: t("validation.emailMax") }),
    subject: z.enum(["general", "essential", "premium", "elite", "partnership"], {
      required_error: t("validation.subjectRequired"),
    }),
    message: z
      .string()
      .trim()
      .min(1, { message: t("validation.messageRequired") })
      .max(1000, { message: t("validation.messageMax") }),
  });

  type ContactFormData = z.infer<typeof contactSchema>;

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

  useEffect(() => {
    const linkId = "calendly-widget-css";
    const scriptId = "calendly-widget-js";

    if (!document.getElementById(linkId)) {
      const link = document.createElement("link");
      link.id = linkId;
      link.rel = "stylesheet";
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(link);
    }

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/hello-snapkaza/30min",
      });
    }
  };

  const onSubmit = async (data: ContactFormData) => {
    try {
      const subjectLabel = t(`subjects.${data.subject}`);
      
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: subjectLabel,
          message: data.message,
        }),
      });

      if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

      toast.success(t("toast.successTitle"), {
        description: t("toast.successDescription"),
      });

      reset();
    } catch (error) {
      console.error("Webhook error:", error);
      toast.error(t("toast.errorTitle"), {
        description: t("toast.errorDescription"),
      });
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-light via-charcoal to-charcoal" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
              {t("title")} <span className="gold-text">{t("titleHighlight")}</span>
            </h2>
            <p className="text-lg text-muted-foreground">{t("subtitle")}</p>
          </div>

          <div className="glass-card p-6 md:p-10">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" />
                    {t("form.fullName")}
                  </Label>
                  <Input
                    id="name"
                    placeholder={t("form.namePlaceholder")}
                    className="bg-charcoal/50 border-border/50 focus:border-primary placeholder:text-muted-foreground/50"
                    {...register("name")}
                  />
                  {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    {t("form.agencyEmail")}
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={t("form.emailPlaceholder")}
                    className="bg-charcoal/50 border-border/50 focus:border-primary placeholder:text-muted-foreground/50"
                    {...register("email")}
                  />
                  {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-foreground flex items-center gap-2">
                  <ListFilter className="w-4 h-4 text-primary" />
                  {t("form.subject")}
                </Label>
                <Controller
                  name="subject"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="bg-charcoal/50 border-border/50 focus:border-primary text-foreground">
                        <SelectValue placeholder={t("form.subjectPlaceholder")} />
                      </SelectTrigger>
                      <SelectContent className="bg-charcoal border-border/50">
                        {subjectKeys.map((key) => (
                          <SelectItem
                            key={key}
                            value={key}
                            className="text-foreground focus:bg-primary/20 focus:text-foreground"
                          >
                            {t(`subjects.${key}`)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.subject && <p className="text-sm text-destructive">{errors.subject.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-primary" />
                  {t("form.yourMessage")}
                </Label>
                <Textarea
                  id="message"
                  placeholder={t("form.messagePlaceholder")}
                  rows={5}
                  className="bg-charcoal/50 border-border/50 focus:border-primary placeholder:text-muted-foreground/50 resize-none"
                  {...register("message")}
                />
                {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full gold-gradient text-primary-foreground hover:opacity-90 transition-opacity h-12 text-base font-semibold"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    {t("form.sending")}
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    {t("form.sendMessage")}
                  </span>
                )}
              </Button>
            </form>

            <div className="mt-8 pt-6 border-t border-border/30">
              <p className="text-center text-muted-foreground text-sm">
                {t("trustNote")}{" "}
                <a href="mailto:hello@snapkaza.com" className="text-primary hover:underline">
                  hello@snapkaza.com
                </a>.
              </p>
            </div>

            <div className="flex items-center gap-4 mt-6">
              <div className="flex-1 h-px bg-border/30" />
              <span className="text-muted-foreground text-sm">{t("or")}</span>
              <div className="flex-1 h-px bg-border/30" />
            </div>

            <Button
              type="button"
              variant="outline"
              onClick={openCalendly}
              className="w-full mt-6 h-12 text-base font-semibold border-primary/50 text-foreground hover:border-primary hover:bg-primary/10 hover-glow transition-all duration-300"
            >
              <Calendar className="w-4 h-4" />
              {t("scheduleMeeting")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
