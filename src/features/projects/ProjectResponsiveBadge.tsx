import { useLanguage } from "@/contexts/LanguageContext";

interface ProjectResponsiveBadgeProps {
  responsive?: boolean;
}

const ProjectResponsiveBadge = ({ responsive }: ProjectResponsiveBadgeProps) => {
  const { t } = useLanguage();

  return (
    <div className="absolute top-3 right-3 z-10">
      <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
        <span
          className={`h-2 w-2 rounded-full ${responsive ? "bg-green-400" : "bg-amber-400"}`}
        />
        {responsive ? t("responsive") : t("desktopOnly")}
      </span>
    </div>
  );
};

export default ProjectResponsiveBadge;
