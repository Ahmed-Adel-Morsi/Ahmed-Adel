import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useProjects } from "@/hooks/useProjects";

const ProjectsSection = () => {
  const { t, language } = useLanguage();
  const { projects, loading, error } = useProjects();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-24 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-display font-bold mb-12 text-start"
        >
          {t("myProjects")}
        </motion.h2>

        {loading && (
          <div className="text-center py-12 text-muted-foreground">
            {t("loading") || "Loading projects..."}
          </div>
        )}

        {error && (
          <div className="text-center py-12 text-destructive">{error}</div>
        )}

        {!loading && !error && projects.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            {t("noProjects") || "No projects found"}
          </div>
        )}

        {!loading && !error && projects.length > 0 && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="glass-card hover-lift group flex flex-col h-full"
              >
                <div className="aspect-video overflow-hidden rounded-t-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="font-display font-semibold text-lg text-foreground mb-1 text-start">
                      {language === "ar" && project.titleAr
                        ? project.titleAr
                        : project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 text-start">
                      {language === "ar" && project.descriptionAr
                        ? project.descriptionAr
                        : project.description}
                    </p>
                  </div>
                  <div>
                    {project.skills && project.skills.length > 0 && (
                      <div className="mb-4 flex flex-wrap gap-2">
                        {project.skills.slice(0, 2).map((skill) => (
                          <Badge
                            key={skill}
                            variant="outline"
                            className="rounded-full px-3 py-0.5 text-xs font-medium transition-colors hover:bg-muted hover:text-foreground"
                          >
                            {skill}
                          </Badge>
                        ))}
                        {project.skills.length > 2 && (
                          <Link to={`/projects/${project.id}`}>
                            <Badge
                              variant="outline"
                              className="rounded-full px-3 py-0.5 text-xs font-medium transition-colors hover:bg-muted hover:text-foreground"
                            >
                              +{project.skills.length - 2}
                            </Badge>
                          </Link>
                        )}
                      </div>
                    )}
                    <div className="flex flex-wrap gap-2">
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="rounded-full hover:bg-muted hover:text-foreground"
                      >
                        <Link to={`/projects/${project.id}`}>
                          {t("viewDetails")}
                        </Link>
                      </Button>
                      <Button
                        asChild
                        size="sm"
                        variant="secondary"
                        className="rounded-full hover:bg-secondary/80"
                      >
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {t("liveDemo")}
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
