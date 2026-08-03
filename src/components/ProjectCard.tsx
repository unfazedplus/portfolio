import type { Project } from "../types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-[var(--glass-bg-strong)] backdrop-blur-xl border border-[var(--glass-border)] rounded-xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.35)] hover:border-accent/50 hover:-translate-y-1 hover:shadow-accent/10 active:scale-[1.02] active:border-accent/50 transition-all duration-300">
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-bold text-lg">{project.title}</h3>
        <span
          className={
            "font-mono text-[10px] px-2 py-1 rounded-full border backdrop-blur-sm " +
            (project.status === "live"
              ? "border-accent/60 text-accent bg-accent/10"
              : "border-[var(--glass-border-strong)] text-muted bg-[var(--glass-bg-soft)]")
          }
        >
          {project.status === "live" ? "LIVE" : "IN PROGRESS"}
        </span>
      </div>
      <p className="text-muted text-sm mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 font-mono text-[11px] text-accent">
        {project.stack.map((s) => (
          <span key={s}>#{s}</span>
        ))}
      </div>
    </div>
  );
}