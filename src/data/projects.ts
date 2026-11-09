import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "kora",
    title: "Kora",
    description:
      "A Flutter mobile app for browsing university courses, structured around a Department → Programme → Level → Semester hierarchy.",
    stack: ["Flutter", "Dart"],
    status: "in-progress",
  },
  {
    id: "ecommerce",
    title: "E-Commerce Platform",
    description:
      "A web storefront covering product browsing, cart management, and checkout flow.",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    status: "in-progress",
  },
  {
    id: "newsletter",
    title: "Company Newsletter",
    description:
      "A newsletter platform built for a company to manage and distribute content to subscribers.",
    stack: ["React", "JavaScript", "CSS"],
    status: "in-progress",
  },
  {
    id: "thesis",
    title: "Oil Palm Yield Predictor",
    description:
      "Final-year thesis project, extended: improved the SVR baseline (R² 0.14) to a Random Forest (R² 0.71), running live in the browser.",
    stack: ["Python", "scikit-learn", "Random Forest", "React", "TypeScript"],
    status: "live",
    link: "https://palm-yield-predictor.vercel.app",
    repo: "https://github.com/unfazedplus/palm-yield-predictor",
  },
];
