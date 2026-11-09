import type { Project } from "../types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const destination = project.link ?? project.repo;

  return (
    <article className="project-card" data-reveal>
      <div className="project-card-topline">
        <span className="project-number">0{index + 1}</span>
        <span className={`project-status project-status-${project.status}`}>
          <i /> {project.status === "live" ? "Live" : "In progress"}
        </span>
      </div>

      <div className="project-card-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>

      <div className="project-card-footer">
        <div className="project-stack">
          {project.stack.map((technology) => <span key={technology}>{technology}</span>)}
        </div>
        {destination ? (
          <div className="project-links">
            <a href={destination} target="_blank" rel="noreferrer" className="project-link">
              {project.link && project.repo ? "View live demo" : "View project"} <span aria-hidden="true">↗</span>
            </a>
            {project.link && project.repo && (
              <a href={project.repo} target="_blank" rel="noreferrer" className="project-link">
                View code <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        ) : (
          <span className="project-link project-link-muted">Case study soon</span>
        )}
      </div>
    </article>
  );
}
