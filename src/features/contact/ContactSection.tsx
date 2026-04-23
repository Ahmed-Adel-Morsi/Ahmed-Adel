import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 md:px-6">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-card p-6 sm:p-8 md:p-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-start">
            {t("contactTitle")}
          </h2>
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
