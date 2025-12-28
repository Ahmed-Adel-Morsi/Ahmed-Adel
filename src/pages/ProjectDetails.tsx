import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { getProjectById } from "@/services/projectService";
import { useSkills } from "@/hooks/useSkills";
import type { Project } from "@/lib/projects";
import type { Skill } from "@/lib/skills";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t, direction, language } = useLanguage();
  const isRtl = direction === "rtl";

  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { skillCategories } = useSkills();
  const thumbnailContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchProject = async () => {
      if (!id) {
        setError("No project ID provided");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const data = await getProjectById(id);

        if (!data) {
          setError("Project not found");
        } else {
          setProject(data);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load project");
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  const images = [
    ...(project?.image ? [project.image] : []),
    ...(project?.gallery && project.gallery.length > 0 ? project.gallery : []),
  ];

  const showNavigation = images.length > 1;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  // Scroll to active thumbnail
  useEffect(() => {
    if (thumbnailContainerRef.current) {
      const activeButton = thumbnailContainerRef.current.children[
        activeIndex
      ] as HTMLElement;
      if (activeButton) {
        activeButton.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [activeIndex, images.length]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="text-muted-foreground">
              {t("loading") || "Loading..."}
            </p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold text-foreground">
              {error || t("projectNotFound") || "Project not found"}
            </h1>
            <Button onClick={() => navigate("/")} className="rounded-full">
              {t("backToProjects") || "Back to Projects"}
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1 pt-10 sm:pt-16 md:pt-24 md:px-6">
        <div className="container mx-auto max-w-6xl space-y-10 mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div className="flex-1">
              <button
                onClick={() => {
                  navigate("/");
                  setTimeout(() => {
                    const projectsSection = document.getElementById("projects");
                    if (projectsSection) {
                      projectsSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }, 100);
                }}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
              >
                <ArrowLeft className="h-4 w-4" />
                {t("backToProjects") || "Back to Projects"}
              </button>
              <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
                {language === "ar" && project.titleAr
                  ? project.titleAr
                  : project.title}
              </h1>
              <p className="text-sm uppercase tracking-wide text-muted-foreground">
                {t("viewDetails")}
              </p>
            </div>
            <Button
              asChild
              className="rounded-full w-full sm:w-auto gap-2"
              variant="default"
            >
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink
                  className={`h-4 w-4 ${language === "ar" ? "-scale-x-100" : ""}`}
                />
                {t("liveDemo")}
              </a>
            </Button>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl bg-muted/40 p-4 shadow-lg">
              <div className="relative overflow-hidden rounded-xl bg-muted aspect-video">
                <img
                  src={images[activeIndex]}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />

                {showNavigation && (
                  <>
                    <div className="absolute inset-y-0 left-2 flex items-center">
                      <Button
                        size="icon"
                        variant="secondary"
                        className="rounded-full shadow-md"
                        onClick={handlePrev}
                      >
                        {isRtl ? "›" : "‹"}
                      </Button>
                    </div>
                    <div className="absolute inset-y-0 right-2 flex items-center">
                      <Button
                        size="icon"
                        variant="secondary"
                        className="rounded-full shadow-md"
                        onClick={handleNext}
                      >
                        {isRtl ? "‹" : "›"}
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </div>

            {images.length > 1 && (
              <div
                className="flex gap-2 w-fit mx-auto overflow-x-auto px-4 py-2 justify-start scrollbar-transparent"
                ref={thumbnailContainerRef}
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor: "rgba(255,255,255,0.1) transparent",
                }}
              >
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`relative flex-shrink-0 rounded-md overflow-hidden transition-all border-2 ${
                      idx === activeIndex
                        ? "border-primary"
                        : "opacity-60 hover:opacity-100"
                    }`}
                    aria-label={`Go to image ${idx + 1}`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className="h-12 w-16 object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <section className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-foreground mb-3">
              {language === "ar" ? "نظرة عامة" : "Overview"}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {language === "ar" && project.descriptionAr
                ? project.descriptionAr
                : project.description}
            </p>
          </section>

          {(project.detailedDescriptionAr || project.detailedDescription) && (
            <section className="rounded-2xl border bg-card p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                {language === "ar" ? "الوصف" : "Description"}
              </h2>
              <div className="prose prose-sm md:prose-base max-w-none dark:prose-invert">
                <DetailedDescription
                  text={
                    language === "ar" && project.detailedDescriptionAr
                      ? project.detailedDescriptionAr
                      : project.detailedDescription || ""
                  }
                />
              </div>
            </section>
          )}

          <section className="rounded-2xl border bg-card p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              {language === "ar" ? "التقنيات المستخدمة" : "Technologies Used"}
            </h2>
            <div className="space-y-6">
              {skillCategories && skillCategories.length > 0
                ? skillCategories
                    .map((cat) => {
                      const items = (cat.skills || []).filter((s) =>
                        (project.skills || []).includes(s.name)
                      );
                      return { cat, items };
                    })
                    .filter((group) => group.items.length > 0)
                    .map(({ cat, items }) => (
                      <InfoCard
                        key={cat.id || cat.title}
                        title={
                          language === "ar" && cat.arTitle
                            ? cat.arTitle
                            : cat.title
                        }
                        items={items}
                        language={language}
                      />
                    ))
                : null}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

type DetailedDescriptionProps = {
  text: string;
};

const DetailedDescription = ({ text }: DetailedDescriptionProps) => {
  const lines = text.split("\n");

  return (
    <div className="space-y-3">
      {lines.map((line, idx) => {
        // Detect section titles (lines ending with ":" or all-caps lines)
        const isSectionTitle =
          line.trim().endsWith(":") ||
          (line.trim().length > 0 &&
            line.trim().length < 50 &&
            line.trim() === line.trim().toUpperCase() &&
            /^[A-Z\s&-]+$/.test(line.trim()));

        if (isSectionTitle) {
          return (
            <h3
              key={idx}
              className="text-lg font-semibold text-foreground mt-4 mb-2"
            >
              {line}
            </h3>
          );
        }

        // Skip empty lines
        if (!line.trim()) {
          return <div key={idx} className="h-2" />;
        }

        // Regular content
        return (
          <p key={idx} className="text-muted-foreground leading-relaxed">
            {line}
          </p>
        );
      })}
    </div>
  );
};

type InfoCardProps = {
  title: string;
  items: Skill[];
  language: string;
};

const InfoCard = ({ title, items, language }: InfoCardProps) => {
  return (
    <section className="rounded-2xl border bg-card p-5 shadow-sm space-y-3">
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      {items && items.length > 0 ? (
        <div className="flex flex-wrap gap-3">
          {items.map((skill) => (
            <motion.div
              key={skill.name}
              whileHover={{ scale: 1.05, y: -3 }}
              className="group inline-flex items-center gap-2 rounded-full border border-border/40 bg-background/70 px-3 py-1.5 text-xs font-medium backdrop-blur cursor-default"
            >
              <div
                className="flex h-7 w-7 items-center justify-center rounded-full text-[0.7rem] font-bold shadow-sm transition-transform duration-200 group-hover:rotate-3"
                style={{
                  backgroundColor: `${skill.color}20`,
                  color: skill.color,
                }}
              >
                {skill.icon}
              </div>
              <span className="text-[0.78rem] text-foreground/90">
                {language === "ar" && skill.arName ? skill.arName : skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-muted-foreground">Details coming soon.</p>
      )}
    </section>
  );
};

export default ProjectDetails;
