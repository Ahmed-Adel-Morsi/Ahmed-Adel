import { motion } from "framer-motion";
import { Button } from "@/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const ButtonGroup = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      viewport={{ once: true }}
      className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 w-full sm:w-auto"
    >
      <Button
        asChild
        variant="outline"
        size="sm"
        className="sm:size-lg rounded-full px-6 sm:px-8 font-medium border-border hover:bg-muted/50"
      >
        <a
          href="https://drive.google.com/file/d/1Ml1ZGdfIlFAlDZ_mlECEdfBnmiXazLmP/view?usp=sharing"
          target="_blank"
        >
          {t("resume") || "Resume"}
        </a>
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => scrollToSection("contact")}
        className="sm:size-lg rounded-full px-6 sm:px-8 font-medium border-border hover:bg-muted/50"
      >
        {t("contactMe")}
      </Button>
      <Button
        size="sm"
        onClick={() => scrollToSection("projects")}
        className="sm:size-lg glow-button rounded-full px-6 sm:px-8 font-medium"
      >
        {t("viewWork")}
      </Button>
    </motion.div>
  );
};

export default ButtonGroup;
