import projectWarehouse from "@/assets/project-warehouse.png";
import projectZwajIslamy from "@/assets/project-zwaj-islamy.png";
import projectStickyNotes from "@/assets/project-sticky-notes.png";
import projectTimerAndSW from "@/assets/project-timer-and-sw.png";
import projectLanding from "@/assets/project-landing-page.png";

export interface Project {
  id: string | number;
  title: string;
  description: string;
  image: string;
  demoUrl: string;
  technologies?: string[];
}

export const getProjects = (t: (key: string) => string): Project[] => {
  return [
    {
      id: "1",
      title: t("warehouse"),
      description: t("warehouseDesc"),
      image: projectWarehouse,
      demoUrl: "https://mywarehouse.vercel.app/",
      technologies: [
        "React",
        "Redux Toolkit",
        "Bootstrap CSS",
        "Rest API",
        "Node.js",
        "Express.js",
        "JWT",
        "MongoDB",
        "React Bootstrap",
        "Yup",
      ],
    },
    {
      id: "2",
      title: t("zwaj"),
      description: t("zwajDesc"),
      image: projectZwajIslamy,
      demoUrl: "https://zwaj-islamy.vercel.app/",
      technologies: [
        "React",
        "Swiper.js",
        "Tailwind CSS",
        "Html2canvas",
        "ReactMediaRecorder",
      ],
    },
    {
      id: "3",
      title: t("sticky"),
      description: t("stickyDesc"),
      image: projectStickyNotes,
      demoUrl: "https://ahmed-adel-morsi.github.io/Sticky-Notes/",
      technologies: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    },
    {
      id: "4",
      title: t("timer"),
      description: t("timerDesc"),
      image: projectTimerAndSW,
      demoUrl: "https://ahmed-adel-morsi.github.io/Timer-and-Stopwatch/",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: "5",
      title: t("landing"),
      description: t("landingDesc"),
      image: projectLanding,
      demoUrl: "https://ahmed-adel-morsi.github.io/Data-Science-Zep/",
      technologies: ["HTML", "CSS"],
    },
  ];
};
