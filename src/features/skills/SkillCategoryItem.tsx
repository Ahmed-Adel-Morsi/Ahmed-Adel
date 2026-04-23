import { motion } from "framer-motion";

import { useLanguage } from "@/contexts/LanguageContext";
import SkillsList from "./SkillsList";

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

const SkillCategoryItem = ({ category }) => {
  const { language } = useLanguage();
  const { title, arTitle, skills, accent } = category;

  const visibleSkills = (skills || []).filter(
    (skill) => skill.visible !== false,
  );

  return (
    <motion.div
      key={title}
      variants={itemVariants}
      className="glass-card p-6 min-[900px]:p-7"
    >
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent} opacity-70`}
      />

      <div className="relative z-10">
        <div className="mb-5 flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold tracking-tight">
            {language === "ar" && arTitle ? arTitle : title}
          </h3>
          <span className="rounded-full border border-border/40 bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
            {visibleSkills.length} {language === "ar" ? "مهارات" : "skills"}
          </span>
        </div>

        <SkillsList skills={visibleSkills} />
      </div>
    </motion.div>
  );
};

export default SkillCategoryItem;
