import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const valuePointsData = [
  {
    en: "Clean, maintainable, and well-structured code.",
    ar: "كود نظيف ومنظم وسهل الصيانة.",
  },
  {
    en: "Modern, responsive, and user-focused interfaces.",
    ar: "واجهات حديثة ومتجاوبة تركز على تجربة المستخدم.",
  },
  {
    en: "Strong problem solving and clear communication.",
    ar: "قدرات قوية في حل المشكلات والتواصل الواضح.",
  },
];

const ValuePoints = () => {
  const { language } = useLanguage();

  return (
    <motion.ul
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.55, duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-8 space-y-2 text-sm text-foreground/90 ps-1"
    >
      {valuePointsData.map((point) => (
        <li key={point.en} className="flex items-start gap-2 text-foreground">
          <span className="mt-[3px] text-primary text-xs">✓</span>
          <span>{language === "ar" ? point.ar : point.en}</span>
        </li>
      ))}
    </motion.ul>
  );
};

export default ValuePoints;
