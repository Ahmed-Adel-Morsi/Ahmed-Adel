import { Button } from "@/ui/button";

import { CirclePlay } from "lucide-react";
import { GithubIcon } from "@/ui/icons";
import { useLanguage } from "@/contexts/LanguageContext";

const ProjectButtonGroup = ({ repoUrl, demoUrl }) => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-wrap gap-2">
      <Button
        asChild
        size="sm"
        variant="outline"
        className="rounded-full hover:bg-muted hover:text-foreground"
      >
        <a href={repoUrl} target="_blank">
          <GithubIcon />
          {t("viewDetails")}
        </a>
      </Button>
      <Button
        asChild
        size="sm"
        variant="secondary"
        className="rounded-full hover:bg-secondary/80"
      >
        <a href={demoUrl} target="_blank" rel="noopener noreferrer">
          <CirclePlay />
          {t("liveDemo")}
        </a>
      </Button>
    </div>
  );
};

export default ProjectButtonGroup;
