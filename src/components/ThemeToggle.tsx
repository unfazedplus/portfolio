import { useEffect, useState } from "react";

type ThemeMode = "system" | "light" | "dark";

function applyTheme(mode: ThemeMode) {
  const root = document.documentElement;
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  const isLight = mode === "light" || (mode === "system" && prefersLight);
  root.classList.toggle("light", isLight);
}

export default function ThemeToggle() {
  const [mode, setMode] = useState<ThemeMode>(
    () => (localStorage.getItem("theme") as ThemeMode) || "system"
  );
  const [open, setOpen] = useState(false);

  useEffect(() => {
    applyTheme(mode);
    localStorage.setItem("theme", mode);

    if (mode === "system") {
      const mq = window.matchMedia("(prefers-color-scheme: light)");
      const handler = () => applyTheme("system");
      mq.addEventListener("change", handler);
      return () => mq.removeEventListener("change", handler);
    }
  }, [mode]);

  const icons: Record<ThemeMode, string> = {
    system: "\u{1F5A5}\u{FE0F}",
    light: "\u{2600}\u{FE0F}",
    dark: "\u{1F319}",
  };

  const labels: Record<ThemeMode, string> = {
    system: "System",
    light: "Light",
    dark: "Dark",
  };

  return (
    <div className="relative font-mono text-xs">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 bg-[var(--glass-bg-strong)] backdrop-blur-md border border-[var(--glass-border)] rounded-full px-3 py-1.5 text-muted hover:border-accent/40 active:scale-95 transition-all duration-200"
      >
        <span>{icons[mode]}</span>
        <span>{labels[mode]}</span>
        <span className={open ? "transition-transform duration-200 rotate-180" : "transition-transform duration-200"}>
          v
        </span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-32 bg-surface backdrop-blur-xl border border-[var(--glass-border)] rounded-xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.35)] z-50">
          {(["system", "light", "dark"] as ThemeMode[]).map((m) => (
            <button
              key={m}
              onClick={() => {
                setMode(m);
                setOpen(false);
              }}
              className={
                "w-full flex items-center gap-2 px-3 py-2 text-left transition-colors duration-150 " +
                (mode === m ? "text-accent" : "text-muted")
              }
            >
              <span>{icons[m]}</span>
              <span>{labels[m]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}