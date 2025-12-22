import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectTaskManager from "@/assets/project-taskmanager.jpg";
import projectPortfolio from "@/assets/project-portfolio.jpg";

const ProjectsSection = () => {
  const { t, direction } = useLanguage();

  const projects = [
    {
      id: 1,
      title: t("ecommerce"),
      description: t("ecommerceDesc"),
      image: projectEcommerce,
    },
    {
      id: 2,
      title: t("taskManager"),
      description: t("taskManagerDesc"),
      image: projectTaskManager,
    },
    {
      id: 3,
      title: t("portfolioWebsite"),
      description: t("portfolioDesc"),
      image: projectPortfolio,
    },
  ];

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
              className="glass-card hover-lift group cursor-pointer"
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
                <Button variant="secondary" size="sm" className="rounded-full">
                  {t("viewDetails")}
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
