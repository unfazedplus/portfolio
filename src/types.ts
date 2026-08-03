export type ProjectStatus = "live" | "in-progress";

export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  status: ProjectStatus;
  link?: string;
  repo?: string;
}