import { useLanguage } from "@/contexts/LanguageContext";
import { Tooltip } from "@/ui/tooltip";
import ProjectSkillItem from "./ProjectSkillItem";

const ProjectSkillsList = ({ skills }) => {
  const { t } = useLanguage();

  return (
    <>
      {skills && skills.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {skills.slice(0, 2).map((skill) => (
            <ProjectSkillItem skill={skill} key={`p1-${skill}`} />
          ))}
          {skills.length > 2 && (
            <Tooltip
              icon={<ProjectSkillItem skill={`+${skills.length - 2}`} />}
            >
              <div className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground text-center">
                {t("technologies")}
              </div>
              <div className="flex flex-wrap justify-center gap-1.5">
                {skills.map((skill) => (
                  <ProjectSkillItem skill={skill} key={skill} />
                ))}
              </div>
            </Tooltip>
          )}
        </div>
      )}
    </>
  );
};

export default ProjectSkillsList;
