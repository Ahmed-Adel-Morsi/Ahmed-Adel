import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const statsData = [
  {
    value: "+10",
    en: "Completed projects",
    ar: "مشاريع مكتملة",
  },
  {
    value: "+2",
    en: "Years of learning & building",
    ar: "سنوات من التعلم والبناء",
  },
  {
    value: "+12",
    en: "Core technologies",
    ar: "تقنيات أساسية",
  },
];

const Stats = () => {
  const { language } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      viewport={{ once: true }}
      className="mt-6 flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm"
    >
      {statsData.map((stat) => (
        <div
          key={stat.en}
          className="glass-card hover:shadow-none relative overflow-hidden rounded-lg sm:rounded-2xl border border-border/60 bg-background/40 px-3 sm:px-4 py-2 sm:py-3 text-xs text-muted-foreground/90 shadow-sm backdrop-blur flex-1 sm:flex-none min-w-[100px]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/0 opacity-70" />
          <div className="relative z-10 flex flex-col">
            <span className="text-lg font-semibold text-foreground">
              {stat.value}
            </span>
            <span className="text-[0.7rem]">
              {language === "ar" ? stat.ar : stat.en}
            </span>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default Stats;
