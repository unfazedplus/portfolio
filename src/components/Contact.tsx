export default function Contact() {
  return (
    <section id="contact" className="section-wrap contact-section">
      <div className="contact-panel" data-reveal>
        <div className="contact-meta">
          <p className="section-index">04 / Contact</p>
          <span>Open to internships, junior roles, and collaboration.</span>
        </div>

        <h2>Have a meaningful problem to solve?</h2>
        <p className="contact-intro">
          I’m interested in teams that care about useful products, clear
          thinking, and thoughtful execution. Let’s talk about what you’re
          building.
        </p>

        <a href="mailto:chimahobiekunnie@gmail.com" className="contact-link">
          <span>chimahobiekunnie@gmail.com</span>
          <i aria-hidden="true">↗</i>
        </a>
      </div>

      <footer className="site-footer">
        <span>© 2026 Chimah</span>
        <span>Designed with intent. Built with React.</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </section>
  );
}
