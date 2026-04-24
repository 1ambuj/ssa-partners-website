import React from "react";

const modules = [
  {
    icon: "fa-search",
    title: "Scan",
    description:
      "We assess business, process, and regulatory context to define compliance and reporting priorities.",
  },
  {
    icon: "fa-microscope",
    title: "Study",
    description:
      "We analyze records, risks, and control gaps to establish a clear and evidence-based diagnostic view.",
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
            </div>
          </div>
        </div>

        <div className="about-approach-circle-wrap">
          <div className="about-approach-center">
            <span>6S</span>
            <small>Framework</small>
          </div>
          {modules.map((item, idx) => (
            <article
              key={item.title}
              className={`about-values-alt-card about-approach-card about-approach-card-${idx + 1}`}
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay={Math.min(idx * 90, 360)}
            >
              <div className="about-values-alt-icon" aria-hidden="true">
                <i className={`fas ${item.icon}`}></i>
              </div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValuesAlt;
