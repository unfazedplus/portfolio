import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="section-wrap section-block projects-section">
      <div className="section-heading section-heading-split" data-reveal>
        <div>
          <p className="section-index">03 / Selected work</p>
          <h2>Projects shaped by real problems and curious thinking.</h2>
        </div>
        <p>
          A selection of product, mobile, and machine-learning work. Detailed
          case studies and live links will be added as each project ships.
        </p>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
