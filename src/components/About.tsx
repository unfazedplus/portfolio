export default function About() {
  return (
    <section id="about" className="section-wrap section-block about-section">
      <div className="section-heading" data-reveal>
        <p className="section-index">01 / Background</p>
        <h2>Good technology should feel clear, useful, and considered.</h2>
      </div>

      <div className="about-grid">
        <div className="about-copy" data-reveal>
          <p className="lead-copy">
            I’m an undergraduate in the Department of Computing at Topfaith
            University, Mkpatak, with a CGPA of 3.84.
          </p>
          <p>
            My academic work explores applied machine learning, including a
            final-year project that uses Support Vector Machines to predict oil
            palm plantation yield. Beyond research, I design and build web and
            mobile products with React, TypeScript, and Flutter.
          </p>
          <p>
            I enjoy the full process: understanding the problem, shaping a
            sensible interface, and engineering the details that make a product
            dependable.
          </p>
        </div>

        <div className="principles" data-reveal>
          <article>
            <span>01</span>
            <div>
              <h3>Product thinking</h3>
              <p>Start with the user and the outcome, not the technology.</p>
            </div>
          </article>
          <article>
            <span>02</span>
            <div>
              <h3>Technical clarity</h3>
              <p>Prefer maintainable systems over unnecessary complexity.</p>
            </div>
          </article>
          <article>
            <span>03</span>
            <div>
              <h3>Thoughtful craft</h3>
              <p>Use detail, motion, and typography to make software feel better.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
