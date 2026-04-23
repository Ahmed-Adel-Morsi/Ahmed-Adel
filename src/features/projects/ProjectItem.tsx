import { motion } from "framer-motion";

import { useLanguage } from "@/contexts/LanguageContext";
import ProjectButtonGroup from "./ProjectButtonGroup";
import ProjectSkillsList from "./ProjectSkillsList";

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const ProjectItem = ({ project }) => {
  const { language } = useLanguage();
  const {
    id: projectId,
    image,
    title,
    titleAr,
    description,
    descriptionAr,
    skills,
    repoUrl,
    demoUrl,
  } = project;

  return (
    <motion.div
      key={projectId}
      variants={itemVariants}
      className="glass-card overflow-visible hover-lift group relative z-0 flex h-full flex-col transition-[z-index] hover:z-20 focus-within:z-20"
    >
      <div className="aspect-video overflow-hidden rounded-t-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
        />
      </div>
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="font-display font-semibold text-lg text-foreground mb-1 text-start">
            {language === "ar" && titleAr ? titleAr : title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4 text-start">
            {language === "ar" && descriptionAr ? descriptionAr : description}
          </p>
        </div>
        <div>
          <ProjectSkillsList skills={skills} />
          <ProjectButtonGroup repoUrl={repoUrl} demoUrl={demoUrl} />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectItem;
