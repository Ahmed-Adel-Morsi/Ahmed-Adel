import SkillsItem from "./SkillsItem";

const SkillsList = ({ skills }) => {
  return (
    <div className="flex flex-wrap gap-3">
      {skills.map((skill) => (
        <SkillsItem skill={skill} key={skill.name} />
      ))}
    </div>
  );
};

export default SkillsList;
