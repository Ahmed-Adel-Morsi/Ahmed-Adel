import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const Bio = () => {
  const { t, direction, language } = useLanguage();

  return (
    <>
      <motion.p
        initial={{ opacity: 0, x: direction === "rtl" ? 30 : -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className={`text-muted-foreground text-lg ${
          direction === "rtl" ? "mb-5" : "mb-2"
        }`}
      >
        {t("hello")}
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-foreground mb-4"
      >
        {t("name")}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-lg sm:text-xl md:text-2xl text-primary font-semibold mb-6 sm:mb-8"
      >
        {t("role")}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-base md:text-lg text-foreground leading-relaxed mb-5 max-w-xl"
      >
        {language === "ar"
          ? "مطور واجهات أمامية شغوف ببناء مواقع ويب سريعة وحديثة مع التركيز على التجربة البصرية وتجربة المستخدم."
          : "Frontend developer passionate about building fast, modern web experiences with a strong focus on UI quality and UX."}
      </motion.p>
    </>
  );
};

export default Bio;
