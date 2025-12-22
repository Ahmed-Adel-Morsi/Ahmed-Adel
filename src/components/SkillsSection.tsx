import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

type Skill = {
  name: string;
  arName?: string;
  icon: string;
  color: string;
};

type SkillCategory = {
  title: string;
  arTitle?: string;
  accent: string;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    arTitle: "تطوير الواجهات الأمامية",
    accent: "from-sky-400/20 to-sky-600/5",
    skills: [
      { name: "HTML5", arName: "HTML5", icon: "</>", color: "#E34F26" },
      { name: "CSS3", arName: "CSS3", icon: "{ }", color: "#1572B6" },
      {
        name: "JavaScript",
        arName: "JavaScript",
        icon: "JS",
        color: "#F7DF1E",
      },
      {
        name: "TypeScript",
        arName: "TypeScript",
        icon: "TS",
        color: "#3178C6",
      },
      { name: "React", arName: "React", icon: "⚛️", color: "#61DAFB" },
      { name: "Angular", arName: "Angular", icon: "🅰️", color: "#DD0031" },
      { name: "Redux", arName: "Redux", icon: "🌀", color: "#764ABC" },
      {
        name: "Tailwind CSS",
        arName: "Tailwind CSS",
        icon: "🌊",
        color: "#06B6D4",
      },
      {
        name: "Bootstrap",
        arName: "Bootstrap",
        icon: "BT",
        color: "#7952B3",
      },
      {
        name: "Responsive Design",
        arName: "تصميم متجاوب",
        icon: "📱",
        color: "#0EA5E9",
      },
    ],
  },
  {
    title: "Backend & APIs",
    arTitle: "الواجهة الخلفية وواجهات البرمجة",
    accent: "from-emerald-400/20 to-emerald-600/5",
    skills: [
      { name: "Node.js", arName: "Node.js", icon: "JS", color: "#339933" },
      {
        name: "Express.js",
        arName: "Express.js",
        icon: "EX",
        color: "#22C55E",
      },
      {
        name: "REST APIs",
        arName: "REST APIs",
        icon: "🌐",
        color: "#2563EB",
      },
      {
        name: "JWT Auth",
        arName: "JWT Auth",
        icon: "🔐",
        color: "#059669",
      },
      {
        name: "API Security",
        arName: "أمان واجهات البرمجة",
        icon: "🛡️",
        color: "#DC2626",
      },
    ],
  },
  {
    title: "Databases & Tools",
    arTitle: "قواعد البيانات والأدوات",
    accent: "from-amber-400/20 to-amber-600/5",
    skills: [
      { name: "MongoDB", arName: "MongoDB", icon: "DB", color: "#47A248" },
      { name: "Git", arName: "Git", icon: "📦", color: "#F05032" },
      { name: "GitHub", arName: "GitHub", icon: "GH", color: "#0366D6" },
    ],
  },
  {
    title: "Soft Skills",
    arTitle: "المهارات الشخصية",
    accent: "from-violet-400/20 to-violet-600/5",
    skills: [
      {
        name: "Problem Solving",
        arName: "حل المشكلات",
        icon: "🧠",
        color: "#8B5CF6",
      },
      {
        name: "Time Management",
        arName: "إدارة الوقت",
        icon: "⏱️",
        color: "#F97316",
      },
      {
        name: "Teamwork",
        arName: "العمل الجماعي",
        icon: "🤝",
        color: "#2563EB",
      },
      {
        name: "Communication",
        arName: "التواصل",
        icon: "💬",
        color: "#22C55E",
      },
      {
        name: "Adaptability",
        arName: "القدرة على التكيف",
        icon: "🔁",
        color: "#A855F7",
      },
    ],
  },
];

const SkillsSection = () => {
  const { t, language } = useLanguage();

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
    <section id="skills" className="py-24 px-6 relative">
      <div className="absolute inset-0 aurora-bg opacity-20" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          // viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-display font-bold text-center mb-12"
        >
          {t("skillsTitle")}
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          // viewport={{ once: true }}
          className="grid gap-8 md:gap-10 md:grid-cols-2"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="glass-card relative overflow-hidden p-6 md:p-7"
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
                    {category.skills.length}{" "}
                    {language === "ar" ? "مهارات" : "skills"}
                  </span>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
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
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
