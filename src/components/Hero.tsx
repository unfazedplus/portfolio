export default function Hero() {
  return (
    <section id="top" className="hero section-wrap">
      <div className="hero-eyebrow" data-reveal>
        <span>Portfolio / 2026</span>
        <span className="hero-eyebrow-line" />
        <span className="availability"><i /> Available for select opportunities</span>
      </div>

      <div className="hero-grid">
        <div className="hero-copy" data-reveal>
          <p className="hero-role">Software Engineer · Applied ML</p>
          <h1>
            I build digital products with
            <span> clarity, intent, and craft.</span>
          </h1>
          <p className="hero-intro">
            I’m Chimah — a computing student creating thoughtful web and mobile
            experiences with React, TypeScript, Flutter, and machine learning.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="button button-primary">
              Explore selected work
              <span aria-hidden="true">↗</span>
            </a>
            <a href="mailto:chimahobiekunnie@gmail.com" className="text-link">
              Start a conversation <span aria-hidden="true">→</span>
            </a>
          </div>

          <dl className="hero-metrics">
            <div>
              <dt>Selected projects</dt>
              <dd>04</dd>
            </div>
            <div>
              <dt>Academic CGPA</dt>
              <dd>3.84</dd>
            </div>
            <div>
              <dt>Core disciplines</dt>
              <dd>03</dd>
            </div>
          </dl>
        </div>

        <aside className="portrait-column" data-reveal>
          <div className="portrait-index" aria-hidden="true">01 — Profile</div>
          <div className="portrait-frame">
            <img
              src="/profile.jpg"
              alt="Chimah"
              className="portrait-image"
            />
            <span className="portrait-corner portrait-corner-top" />
            <span className="portrait-corner portrait-corner-bottom" />
          </div>
          <div className="portrait-caption">
            <span>Engineering useful ideas into real products.</span>
            <span>Available / Remote</span>
          </div>
        </aside>
      </div>

      <a href="#about" className="scroll-cue" aria-label="Scroll to about section">
        <span>Scroll to discover</span>
        <i aria-hidden="true" />
      </a>
    </section>
  );
}
