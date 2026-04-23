import { motion } from "framer-motion";

import { useLanguage } from "@/contexts/LanguageContext";
import SkillsCategoryList from "./SkillsCategoryList";

const SkillsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-24 md:px-6 relative">
      <div className="absolute inset-0 aurora-bg opacity-20" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-display font-bold text-center mb-12"
        >
          {t("skillsTitle")}
        </motion.h2>

        <SkillsCategoryList />
      </div>
    </section>
  );
};

export default SkillsSection;
