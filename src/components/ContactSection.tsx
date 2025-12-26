import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";
import { useState } from "react";

const ContactSection = () => {
  const { t, direction } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject =
      direction === "rtl"
        ? `رسالة جديدة من ${name || "زائر"}`
        : `New message from ${name || "Visitor"}`;

    const body =
      (direction === "rtl" ? "تفاصيل الرسالة:\n\n" : "Message details:\n\n") +
      `${direction === "rtl" ? "الاسم" : "Name"}: ${name}\n` +
      `${direction === "rtl" ? "البريد الإلكتروني" : "Email"}: ${email}\n\n` +
      `${direction === "rtl" ? "الرسالة" : "Message"}:\n${message}`;

    const mailtoLink = `mailto:ahmedadel0239@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    toast(direction === "rtl" ? "تم الإرسال!" : "Message sent!", {
      description:
        direction === "rtl"
          ? "شكراً لتواصلك معي. سأرد عليك قريباً."
          : "Thanks for reaching out. I'll get back to you soon.",
    });

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 md:px-6">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-start">
            {t("contactTitle")}
          </h2>

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

            <div className="mt-6 flex items-center justify-center gap-6 text-muted-foreground">
              <a
                href="https://github.com/Ahmed-Adel-Morsi"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="hover:text-primary transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="currentColor"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 0 0 8.21 11.44c.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.24 1.83 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.39 1.24-3.24-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 3-.4c1.02 0 2.05.14 3 .4 2.29-1.55 3.29-1.23 3.29-1.23.67 1.65.25 2.87.13 3.17.77.85 1.23 1.92 1.23 3.24 0 4.63-2.81 5.66-5.49 5.96.43.37.81 1.1.81 2.22 0 1.6-.01 2.88-.01 3.27 0 .32.21.7.82.58A12 12 0 0 0 24 12C24 5.37 18.63 0 12 0Z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/ahmed-adel-morsi"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="hover:text-primary transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="currentColor"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.3 8.13h4.4V24H.3V8.13zM8.55 8.13h4.22v2.16h.06c.59-1.12 2.03-2.3 4.18-2.3 4.47 0 5.29 2.94 5.29 6.76V24h-4.4v-7.32c0-1.75-.03-4-2.44-4-2.44 0-2.82 1.9-2.82 3.86V24h-4.4V8.13z" />
                </svg>
              </a>

              <a
                href="http://wa.me/+201019540239"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="hover:text-primary transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="currentColor"
                >
                  <path d="M20.52 3.48A11.86 11.86 0 0 0 12 0C5.38 0 .06 5.32.06 11.93c0 2.1.55 4.14 1.6 5.95L0 24l6.29-1.64a12.06 12.06 0 0 0 5.71 1.45h.01c6.62 0 11.93-5.32 11.94-11.93 0-3.19-1.24-6.19-3.43-8.4Zm-8.52 18.4h-.01a9.93 9.93 0 0 1-5.06-1.39l-.36-.21-3.73.97.99-3.64-.24-.37a9.83 9.83 0 0 1-1.52-5.25C2.57 6.43 6.79 2.2 12 2.2c2.64 0 5.12 1.03 6.98 2.9a9.77 9.77 0 0 1 2.89 6.97c-.01 5.23-4.27 9.51-9.47 9.51Zm5.2-7.13c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.43-2.25-1.37-.83-.74-1.39-1.66-1.55-1.94-.16-.28-.02-.43.12-.57.13-.13.28-.34.41-.51.14-.17.18-.29.27-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47l-.52-.01c-.19 0-.5.07-.76.34-.26.28-1 1-1 2.43s1.02 2.82 1.16 3.01c.14.19 2 3.06 4.84 4.29.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.11.55-.08 1.65-.67 1.89-1.31.23-.64.23-1.19.16-1.31-.07-.12-.25-.19-.53-.33Z" />
                </svg>
              </a>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
