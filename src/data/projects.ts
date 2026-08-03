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
    title: "Oil Palm Yield Prediction (Final Year Project)",
    description:
      "A machine learning system using Support Vector Machines to predict oil palm plantation yield from ten agronomic and environmental inputs.",
    stack: ["Python", "Scikit-learn", "SVM"],
    status: "in-progress",
  },
];