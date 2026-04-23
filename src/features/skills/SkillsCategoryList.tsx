import { motion } from "framer-motion";

import { useLanguage } from "@/contexts/LanguageContext";
import { useSkills } from "@/hooks/useSkills";
import SkillCategoryItem from "./SkillCategoryItem";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const SkillsCategoryList = () => {
  const { skillCategories, loading, error } = useSkills();
  const { t } = useLanguage();

  if (loading)
    return (
      <div className="text-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-muted-foreground">
          {t("loading") || "Loading skills..."}
        </p>
      </div>
    );

  if (error)
    return <div className="text-center py-12 text-destructive">{error}</div>;

  if (skillCategories.length === 0)
    return (
      <div className="text-center py-12 text-muted-foreground">
        {t("noSkills") || "No skills found"}
      </div>
    );

  if (skillCategories.length > 0)
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-8 min-[900px]:gap-10 min-[900px]:grid-cols-2"
      >
        {skillCategories.map((category) => (
          <SkillCategoryItem category={category} key={category.id} />
        ))}
      </motion.div>
    );
};

export default SkillsCategoryList;
