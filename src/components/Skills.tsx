import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-24">
      <p className="font-mono text-accent text-sm mb-2">02 — Skills</p>
      <h2 className="text-2xl sm:text-3xl font-bold mb-8">What I work with</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {skillGroups.map((g) => (
          <div
            key={g.label}
            className="bg-[var(--glass-bg-strong)] backdrop-blur-xl border border-[var(--glass-border)] rounded-xl p-5 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:border-accent/40 hover:-translate-y-1 active:scale-[1.02] active:border-accent/40 transition-all duration-300"
          >
            <p className="font-mono text-xs text-accent mb-3">{g.label}</p>
            <div className="flex flex-wrap gap-2">
              {g.items.map((item) => (
                <span
                  key={item}
                  className="text-xs font-mono bg-[var(--glass-bg-soft)] backdrop-blur-sm border border-[var(--glass-border)] rounded-full px-3 py-1 hover:border-accent/50 hover:text-accent active:scale-105 active:border-accent/50 active:text-accent transition-colors duration-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}