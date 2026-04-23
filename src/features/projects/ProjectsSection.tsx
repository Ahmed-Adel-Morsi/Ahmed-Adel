import { motion } from "framer-motion";

import { useLanguage } from "@/contexts/LanguageContext";
import ProjectsList from "./ProjectsList";

const ProjectsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-24 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-display font-bold mb-12 text-start"
        >
          {t("myProjects")}
        </motion.h2>

        <ProjectsList />
      </div>
    </section>
  );
};

export default ProjectsSection;
