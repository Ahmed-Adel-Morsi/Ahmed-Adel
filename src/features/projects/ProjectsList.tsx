import { useLanguage } from "@/contexts/LanguageContext";
import { useProjects } from "@/hooks/useProjects";
import { motion } from "framer-motion";
import ProjectItem from "./ProjectItem";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const ProjectsList = () => {
  const { t } = useLanguage();
  const { projects, loading, error } = useProjects();

  if (loading)
    return (
      <div className="text-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-muted-foreground">
          {t("loading") || "Loading projects..."}
        </p>
      </div>
    );

  if (error)
    return <div className="text-center py-12 text-destructive">{error}</div>;

  if (projects.length === 0)
    return (
      <div className="text-center py-12 text-muted-foreground">
        {t("noProjects") || "No projects found"}
      </div>
    );

  if (projects.length > 0)
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project) => (
          <ProjectItem project={project} key={project.id} />
        ))}
      </motion.div>
    );
};

export default ProjectsList;
