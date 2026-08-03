import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-24">
      <p className="font-mono text-accent text-sm mb-2">03 — Projects</p>
      <h2 className="text-2xl sm:text-3xl font-bold mb-8">Things I've built</h2>
      <div className="grid sm:grid-cols-2 gap-5">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}