// Project type definition for Firebase
export interface Project {
  id: string | number;
  title: string;
  titleAr?: string; // Arabic title
  description: string;
  descriptionAr?: string; // Arabic description
  image: string;
  demoUrl: string;
  repoUrl: string;
  skills?: string[];
  order?: number;
  responsive?: boolean;
}
