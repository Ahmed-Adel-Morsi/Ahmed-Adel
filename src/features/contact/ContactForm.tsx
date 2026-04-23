import { useState } from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/ui/button";
import { Input } from "@/ui/input";
import { Textarea } from "@/ui/textarea";
import SocialMedia from "./SocialMedia";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { t, direction } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          from_email: email,
          message: message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      toast(direction === "rtl" ? "تم الإرسال!" : "Message sent!", {
        description:
          direction === "rtl"
            ? "شكراً لتواصلك معي. سأرد عليك قريباً."
            : "Thanks for reaching out. I'll get back to you soon.",
      });

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      toast(direction === "rtl" ? "حدث خطأ!" : "Error!", {
        description:
          direction === "rtl"
            ? "حاول مرة أخرى لاحقاً."
            : "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-muted-foreground mb-2 text-start"
          >
            {t("yourName")}
          </label>
          <Input
            type="text"
            id="name"
            required
            className="rounded-lg bg-secondary/50 border-border focus:border-primary"
            value={name}
            autoComplete="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-muted-foreground mb-2 text-start"
          >
            {t("yourEmail")}
          </label>
          <Input
            type="email"
            id="email"
            required
            className="rounded-lg bg-secondary/50 border-border focus:border-primary"
            dir="ltr"
            value={email}
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-muted-foreground mb-2 text-start"
        >
          {t("message")}
        </label>
        <Textarea
          rows={5}
          id="message"
          required
          className="rounded-lg bg-secondary/50 border-border focus:border-primary resize-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <div className="flex justify-start">
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="glow-button rounded-full px-8"
        >
          {t("sendMessage")}
        </Button>
      </div>

      <SocialMedia />
    </form>
  );
};

export default ContactForm;
