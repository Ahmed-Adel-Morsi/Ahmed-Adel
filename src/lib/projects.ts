// Project type definition for Firebase
export interface Project {
  id: string | number;
  title: string;
  titleAr?: string; // Arabic title
  description: string;
  descriptionAr?: string; // Arabic description
  detailedDescription?: string;
  detailedDescriptionAr?: string;
  image: string;
  demoUrl: string;
  skills?: string[];
  gallery?: string[];
  order?: number;
}
