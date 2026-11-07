import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#skills" },
  { label: "Work", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [activeSection, setActiveSection] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter((section): section is Element => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) setActiveSection(visibleEntry.target.id);
      },
      { rootMargin: "-35% 0px -55%", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const closeMenu = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", closeMenu);
    return () => window.removeEventListener("keydown", closeMenu);
  }, []);

  return (
    <header className="site-header">
      <div className="nav-wrap">
        <a href="#top" className="brand" aria-label="Chimah, back to top">
          <span className="brand-mark">CH</span>
          <span className="brand-copy">
            <strong>Chimah</strong>
            <small>Software Engineer</small>
          </span>
        </a>

        <nav
          id="primary-navigation"
          className={menuOpen ? "nav-links is-open" : "nav-links"}
          aria-label="Primary navigation"
        >
          {links.map((link, index) => {
            const sectionId = link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={activeSection === sectionId ? "is-active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                <span>0{index + 1}</span>
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="nav-actions">
          <ThemeToggle />
          <button
            type="button"
            className={menuOpen ? "menu-toggle is-open" : "menu-toggle"}
            aria-label="Toggle navigation"
            aria-controls="primary-navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
