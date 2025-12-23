import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { getProjects } from "@/lib/projects";

const ProjectsSection = () => {
  const { t, direction } = useLanguage();
  const projects = getProjects(t);

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
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          // viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`text-3xl md:text-4xl font-display font-bold mb-12 ${
            direction === "rtl" ? "text-right" : "text-left"
          }`}
        >
          {t("myProjects")}
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          // viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="glass-card hover-lift group"
            >
              <div className="aspect-video overflow-hidden rounded-t-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
                />
              </div>
              <div className="p-5">
                <h3
                  className={`font-display font-semibold text-lg text-foreground mb-1 ${
                    direction === "rtl" ? "text-right" : "text-left"
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`text-sm text-muted-foreground mb-4 ${
                    direction === "rtl" ? "text-right" : "text-left"
                  }`}
                >
                  {project.description}
                </p>
                {project.technologies && project.technologies.length > 0 && (
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 2).map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="rounded-full px-3 py-0.5 text-xs font-medium transition-colors hover:bg-muted hover:text-foreground"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 2 && (
                      <Link to={`/projects/${project.id}`}>
                        <Badge
                          variant="outline"
                          className="rounded-full px-3 py-0.5 text-xs font-medium transition-colors hover:bg-muted hover:text-foreground"
                        >
                          +{project.technologies.length - 2}
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
