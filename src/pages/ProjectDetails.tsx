import { useParams, useNavigate } from "react-router-dom";
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

  const project = projects.find((p) => p.id === id);

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
      {/* <Navbar /> */}
      <main className="flex-1 pt-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <div
            className={`mb-6 flex items-center justify-between gap-4 ${
              direction === "rtl" ? "flex-row-reverse" : ""
            }`}
          >
            <h1
              className={`text-3xl md:text-4xl font-display font-bold text-foreground ${
                direction === "rtl" ? "text-right" : "text-left"
              }`}
            >
              {project.title}
            </h1>
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

          <div className="grid gap-8 md:grid-cols-2 items-start">
            <div className="rounded-xl overflow-hidden shadow-lg bg-muted">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div
              className={`space-y-4 ${
                direction === "rtl" ? "text-right" : "text-left"
              }`}
            >
              <p className="text-muted-foreground text-sm md:text-base">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  size="sm"
                  className="rounded-full"
                  variant="default"
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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetails;
