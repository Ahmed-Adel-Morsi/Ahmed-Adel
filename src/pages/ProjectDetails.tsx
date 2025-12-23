import { useParams, useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { getProjects } from "@/lib/projects";
import { Button } from "@/components/ui/button";

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t, direction } = useLanguage();
  const projects = getProjects(t);
  const isRtl = direction === "rtl";

  const project = projects.find((p) => p.id === id);
  const images = useMemo(
    () =>
      project?.gallery && project.gallery.length > 0
        ? project.gallery
        : [project?.image ?? ""],
    [project?.gallery, project?.image]
  );
  const [activeIndex, setActiveIndex] = useState(0);

  const showNavigation = images.length > 1;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold text-foreground">
              {t("projectNotFound")}
            </h1>
            <Button onClick={() => navigate("/")} className="rounded-full">
              {t("backToProjects")}
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 px-6">
        <div className="container mx-auto max-w-6xl space-y-10">
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-wide text-muted-foreground">
                {t("viewDetails")}
              </p>
              <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                {project.title}
              </h1>
            </div>
            <Button
              variant="outline"
              className="rounded-full"
              onClick={() => {
                navigate("/");
                setTimeout(() => {
                  const projectsSection = document.getElementById("projects");
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: "smooth" });
                  }
                }, 100);
              }}
            >
              {t("backToProjects")}
            </Button>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] items-start">
            <div className="rounded-2xl bg-muted/40 p-4 shadow-lg">
              <div className="relative overflow-hidden rounded-xl bg-muted aspect-[16/9]">
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

                <div className="absolute bottom-3 inset-x-0 flex justify-center gap-2">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className={`h-2.5 w-2.5 rounded-full transition-all ${
                        idx === activeIndex
                          ? "bg-primary shadow ring-2 ring-primary/40"
                          : "bg-white/60 hover:bg-white"
                      }`}
                      aria-label={`Go to image ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <section className="rounded-2xl border bg-card p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  Description
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Button asChild className="rounded-full" variant="default">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t("liveDemo")}
                    </a>
                  </Button>
                </div>
              </section>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <InfoCard
              title="Libraries & Tools"
              items={project.libraries ?? project.technologies ?? []}
            />
            <InfoCard
              title="Skills Applied"
              items={project.skills ?? project.technologies ?? []}
            />
            <InfoCard
              title="Technologies Used"
              items={project.technologies ?? []}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

type InfoCardProps = {
  title: string;
  items: string[];
};

const InfoCard = ({ title, items }: InfoCardProps) => {
  return (
    <section className="rounded-2xl border bg-card p-5 shadow-sm space-y-3">
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      {items && items.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {items.map((item) => (
            <span
              key={item}
              className="inline-flex items-center rounded-full border bg-muted/60 px-3 py-1 text-xs font-medium text-foreground"
            >
              {item}
            </span>
          ))}
        </div>
      ) : (
        <p className="text-sm text-muted-foreground">Details coming soon.</p>
      )}
    </section>
  );
};

export default ProjectDetails;
