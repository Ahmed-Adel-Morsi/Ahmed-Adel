import { Badge } from "@/ui/badge";

const ProjectSkillItem = ({ skill }) => {
  return (
    <Badge
      variant="outline"
      className="rounded-full px-3 py-0.5 text-xs font-medium transition-colors cursor-default"
    >
      {skill}
    </Badge>
  );
};

export default ProjectSkillItem;
