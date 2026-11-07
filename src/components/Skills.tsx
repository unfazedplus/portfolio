import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section-wrap section-block skills-section">
      <div className="section-heading section-heading-split" data-reveal>
        <div>
          <p className="section-index">02 / Expertise</p>
          <h2>A practical toolkit for building from idea to interface.</h2>
        </div>
        <p>
          My strongest work sits at the intersection of product engineering,
          frontend systems, mobile development, and applied machine learning.
        </p>
      </div>

      <div className="capability-list">
        {skillGroups.map((group, index) => (
          <article key={group.label} className="capability-row" data-reveal>
            <span className="capability-number">0{index + 1}</span>
            <h3>{group.label}</h3>
            <div className="capability-items">
              {group.items.map((item) => <span key={item}>{item}</span>)}
            </div>
            <span className="capability-mark" aria-hidden="true">↗</span>
          </article>
        ))}
      </div>
    </section>
  );
}
