// Skills type definitions for Firebase
export type Skill = {
  name: string;
  arName?: string;
  icon: string;
  color: string;
  visible?: boolean; // controls display on home page
};

export type SkillCategory = {
  id?: string;
  title: string;
  arTitle?: string;
  accent: string;
  skills: Skill[];
  order?: number;
};
