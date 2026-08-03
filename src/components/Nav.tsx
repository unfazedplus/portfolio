import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  const links = ["About", "Skills", "Projects", "Contact"];
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-[var(--glass-bg-soft)] border-b border-[var(--glass-border)]">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-6 py-4 gap-4">
        <span className="font-mono text-accent">chimah.dev</span>
        <div className="flex items-center gap-6">
          <div className="hidden sm:flex gap-6 font-mono text-sm text-muted">
            {links.map((l) => (
              <a
                key={l}
                href={"#" + l.toLowerCase()}
                className="relative hover:text-accent active:text-accent active:scale-95 transition-all duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full active:after:w-full"
              >
                {l}
              </a>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}