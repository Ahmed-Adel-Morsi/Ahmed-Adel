import { useLanguage } from "@/contexts/LanguageContext";
import { useProjects } from "@/hooks/useProjects";
import { Button } from "@/ui/button";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import ProjectItem from "./ProjectItem";

const ITEMS_PER_PAGE = 6;

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
  const [currentPage, setCurrentPage] = useState(1);
  const [hasEnteredViewport, setHasEnteredViewport] = useState(false);
  const hasProjects = !loading && !error && projects.length > 0;

  const totalPages = hasProjects
    ? Math.ceil(projects.length / ITEMS_PER_PAGE)
    : 0;

  const paginatedProjects = useMemo(() => {
    if (!hasProjects) return [];
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return projects.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [currentPage, hasProjects, projects]);

  useEffect(() => {
    setCurrentPage(1);
  }, [projects.length]);

  const changePage = (nextPage: number) => {
    setCurrentPage((prevPage) => {
      const clampedPage = Math.min(Math.max(nextPage, 1), totalPages);

      if (clampedPage !== prevPage) {
        requestAnimationFrame(() => {
          document
            .getElementById("projects")
            ?.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }

      return clampedPage;
    });
  };

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
      <div className="space-y-8">
        <motion.div
          key={currentPage}
          variants={containerVariants}
          initial="hidden"
          animate={hasEnteredViewport ? "visible" : undefined}
          whileInView="visible"
          viewport={{ once: true }}
          onViewportEnter={() => setHasEnteredViewport(true)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {paginatedProjects.map((project) => (
            <ProjectItem project={project} key={project.id} />
          ))}
        </motion.div>

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => changePage(currentPage - 1)}
              disabled={currentPage === 1}
              className="hover:bg-primary hover:text-primary-foreground"
            >
              {t("previous") || "Previous"}
            </Button>

            <span className="px-3 text-sm text-muted-foreground">
              {t("page") || "Page"} {currentPage} {t("of") || "of"} {totalPages}
            </span>

            <Button
              variant="outline"
              size="sm"
              onClick={() => changePage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="hover:bg-primary hover:text-primary-foreground"
            >
              {t("next") || "Next"}
            </Button>
          </div>
        )}
      </div>
    );
};

export default ProjectsList;
