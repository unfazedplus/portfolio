import { useEffect, useState } from "react";

type ThemeMode = "system" | "light" | "dark";

const modes: ThemeMode[] = ["system", "light", "dark"];

function getInitialTheme(): ThemeMode {
  const storedTheme = localStorage.getItem("theme");
  return modes.includes(storedTheme as ThemeMode) ? (storedTheme as ThemeMode) : "system";
}

function applyTheme(mode: ThemeMode) {
  const root = document.documentElement;
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  const isLight = mode === "light" || (mode === "system" && prefersLight);
  root.classList.toggle("light", isLight);
}

function ThemeIcon({ mode }: { mode: ThemeMode }) {
  if (mode === "light") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="3.5" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" />
      </svg>
    );
  }

  if (mode === "dark") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20 15.1A8.5 8.5 0 0 1 8.9 4a8.5 8.5 0 1 0 11.1 11.1Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="4" width="18" height="13" rx="1" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}

export default function ThemeToggle() {
  const [mode, setMode] = useState<ThemeMode>(getInitialTheme);

  useEffect(() => {
    applyTheme(mode);
    localStorage.setItem("theme", mode);

    if (mode === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");
      const handleChange = () => applyTheme("system");
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, [mode]);

  const labels: Record<ThemeMode, string> = {
    system: "System",
    light: "Light",
    dark: "Dark",
  };

  const selectNextMode = () => {
    const currentIndex = modes.indexOf(mode);
    setMode(modes[(currentIndex + 1) % modes.length]);
  };

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={selectNextMode}
      aria-label={`Theme: ${labels[mode]}. Activate to change theme.`}
      title={`Theme: ${labels[mode]}`}
    >
      <span className="theme-toggle-icon">
        <ThemeIcon mode={mode} />
      </span>
      <span className="theme-toggle-label">{labels[mode]}</span>
    </button>
  );
}
