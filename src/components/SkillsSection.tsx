import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSkills } from "@/hooks/useSkills";

const SkillsSection = () => {
  const { t, language } = useLanguage();
  const { skillCategories, loading, error } = useSkills();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" as const },
    },
  };

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-24 md:px-6 relative">
      <div className="absolute inset-0 aurora-bg opacity-20" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-display font-bold text-center mb-12"
        >
          {t("skillsTitle")}
        </motion.h2>

        {loading && (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">
              {t("loading") || "Loading skills..."}
            </p>
          </div>
        )}

        {error && (
          <div className="text-center py-12 text-destructive">{error}</div>
        )}

        {!loading && !error && skillCategories.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            {t("noSkills") || "No skills found"}
          </div>
        )}

        {!loading && !error && skillCategories.length > 0 && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid gap-8 min-[900px]:gap-10 min-[900px]:grid-cols-2"
          >
            {skillCategories.map((category) => {
              const visibleSkills = (category.skills || []).filter(
                (skill) => skill.visible !== false
              );
              return (
                <motion.div
                  key={category.title}
                  variants={itemVariants}
                  className="glass-card relative overflow-hidden p-6 min-[900px]:p-7"
                >
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${category.accent} opacity-70`}
                  />

                  <div className="relative z-10">
                    <div className="mb-5 flex items-center justify-between gap-3">
                      <h3 className="text-lg font-semibold tracking-tight">
                        {language === "ar" && category.arTitle
                          ? category.arTitle
                          : category.title}
                      </h3>
                      <span className="rounded-full border border-border/40 bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
                        {visibleSkills.length}{" "}
                        {language === "ar" ? "مهارات" : "skills"}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {visibleSkills.map((skill) => (
                        <motion.div
                          key={skill.name}
                          whileHover={{ scale: 1.05, y: -3 }}
                          className="group inline-flex items-center gap-2 rounded-full border border-border/40 bg-background/70 px-3 py-1.5 text-xs font-medium backdrop-blur cursor-default"
                        >
                          <div
                            className="flex h-7 w-7 items-center justify-center rounded-full text-[0.7rem] font-bold shadow-sm transition-transform duration-200 group-hover:rotate-3"
                            style={{
                              backgroundColor: `${skill.color}20`,
                              color: skill.color,
                            }}
                          >
                            {skill.icon}
                          </div>
                          <span className="text-[0.78rem] text-foreground/90">
                            {language === "ar" && skill.arName
                              ? skill.arName
                              : skill.name}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default SkillsSection;
