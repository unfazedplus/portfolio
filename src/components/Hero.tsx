export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto pt-24">
      <div className="flex flex-col sm:flex-row items-center gap-10">
        <div className="fade-in flex-1">
          <span className="inline-flex items-center gap-2 bg-[var(--glass-bg-strong)] backdrop-blur-md border border-[var(--glass-border-strong)] rounded-full px-4 py-1.5 text-xs font-mono text-muted mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            OPEN TO OPPORTUNITIES
          </span>

          <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
            Hi, I'm <span className="text-accent">Chimah</span>.
          </h1>
          <p className="font-mono text-muted text-sm mt-3">
            Software Engineer &amp; ML Enthusiast
          </p>
          <p className="text-muted mt-4 max-w-md">
            Final-year Computing student building with React, TypeScript, and
            Flutter — with a background in applied machine learning.
          </p>

          <div className="flex gap-4 mt-6 font-mono text-sm">
            <a href="#projects" className="bg-accent/90 backdrop-blur-sm text-base px-5 py-2 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-accent/30 active:scale-95 transition-all duration-200">
              View Projects
            </a>
            <a href="#contact" className="bg-[var(--glass-bg-strong)] backdrop-blur-md border border-[var(--glass-border-strong)] px-5 py-2 rounded-full hover:border-accent/50 hover:text-accent active:scale-95 active:border-accent/50 active:text-accent transition-all duration-200">
              Contact
            </a>
          </div>

          <div className="flex gap-8 mt-10 font-mono">
            <div>
              <p className="text-2xl font-bold text-accent">4</p>
              <p className="text-xs text-muted mt-1">Projects</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-accent">3.84</p>
              <p className="text-xs text-muted mt-1">CGPA</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-accent">2026</p>
              <p className="text-xs text-muted mt-1">Graduate</p>
            </div>
          </div>
        </div>

        <div className="fade-in-delay-1 flex-1 w-full max-w-xs">
          <div className="bg-[var(--glass-bg-strong)] backdrop-blur-xl border border-[var(--glass-border)] rounded-2xl p-3 shadow-[0_8px_32px_rgba(0,0,0,0.35)]">
            <img
              src="/profile.jpg"
              alt="Chimah"
              className="w-full aspect-[4/5] object-cover rounded-xl"
            />
            <div className="flex flex-wrap gap-2 mt-3 px-1 pb-1">
              {["React", "TypeScript", "Flutter", "Python"].map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-mono bg-[var(--glass-bg-soft)] border border-[var(--glass-border)] rounded-full px-2.5 py-1 text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}