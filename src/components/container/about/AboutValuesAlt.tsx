import React from "react";

const modules = [
  {
    icon: "fa-microscope",
    title: "Study",
    description:
      "We analyse records, transactions, and control design to establish a clear, evidence-based baseline.",
  },
  {
    icon: "fa-search",
    title: "Scan",
    description:
      "We map business processes, statutory exposure, and risk hotspots to define the engagement focus.",
  },
  {
    icon: "fa-lightbulb",
    title: "Strategize",
    description:
      "We define practical tax, audit, and compliance strategies aligned with legal and operational requirements.",
  },
  {
    icon: "fa-sitemap",
    title: "Structure",
    description:
      "We design workflows, responsibilities, and documentation standards for consistent execution and governance.",
  },
  {
    icon: "fa-hands-helping",
    title: "Support",
    description:
      "We assist teams through implementation, reviews, and regulatory interactions across the engagement lifecycle.",
  },
  {
    icon: "fa-sync-alt",
    title: "Sustain",
    description:
      "We monitor outcomes, update controls, and keep the framework current with evolving statutory requirements.",
  },
];

const AboutValuesAlt = () => {
  return (
    <section className="about-values-alt-area pd-top-110 pd-bottom-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div
              className="section-title text-center"
              data-aos="fade-up"
              data-aos-duration="900"
            >
            <h6 className="sub-title">// OUR APPROACH</h6>
            <h2 className="title">The 6S Engagement Model</h2>
            <p className="content mt-3">
              A structured step-by-step execution model used across all assignments to ensure
              consistency, compliance, and measurable outcomes.
            </p>
            </div>
          </div>
        </div>

        <div className="about-approach-premium-shell">
          <ol className="about-approach-structured-list">
            {modules.map((item, idx) => (
              <li
                key={item.title}
                className="about-approach-structured-item"
                data-aos="fade-up"
                data-aos-duration="900"
                data-aos-delay={Math.min(idx * 90, 360)}
              >
                <div className="about-approach-step-count">{String(idx + 1).padStart(2, "0")}</div>
                <div className="about-approach-premium-card">
                  <div className="about-values-alt-icon" aria-hidden="true">
                    <i className={`fas ${item.icon}`}></i>
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default AboutValuesAlt;
