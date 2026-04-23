import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const SkillsItem = ({ skill }) => {
  const { language } = useLanguage();
  const { name, arName, icon, color } = skill;

  return (
    <motion.div
      key={name}
      whileHover={{ scale: 1.05, y: -3 }}
      className="group inline-flex items-center gap-2 rounded-full border border-border/40 bg-background/70 px-3 py-1.5 text-xs font-medium backdrop-blur cursor-default"
    >
      <div
        className="flex h-7 w-7 items-center justify-center rounded-full text-[0.7rem] font-bold shadow-sm transition-transform duration-200 group-hover:rotate-3"
        style={{
          backgroundColor: `${color}20`,
          color: color,
        }}
      >
        {icon}
      </div>
      <span className="text-[0.78rem] text-foreground/90">
        {language === "ar" && arName ? arName : name}
      </span>
    </motion.div>
  );
};

export default SkillsItem;
