import React from "react";

const values = [
  {
    icon: "fa-user-shield",
    title: "Client interests first",
    description:
      "Services are aligned with clients' regulatory objectives and operational requirements in each engagement.",
  },
  {
    icon: "fa-balance-scale",
    title: "Integrity & transparency",
    description:
      "The firm upholds honesty, fairness, and openness in all professional interactions, in accordance with ICAI's Code of Ethics.",
  },
  {
    icon: "fa-award",
    title: "Commitment to quality",
    description:
      "Work is conducted in adherence to professional standards prescribed by ICAI and applicable regulatory frameworks.",
  },
  {
    icon: "fa-tasks",
    title: "Accountability",
    description:
      "Each engagement is managed with defined responsibilities, documented deliverables, and structured review mechanisms.",
  },
  {
    icon: "fa-lock",
    title: "Confidentiality",
    description:
      "Client information is handled with strict confidentiality, controlled access, and secure systems in compliance with ICAI requirements.",
  },
  {
    icon: "fa-chart-line",
    title: "Continuous improvement",
    description:
      "The firm monitors legislative and regulatory updates to ensure services remain current and compliant with evolving requirements.",
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
              <h6 className="sub-title">// PROFESSIONAL VALUES</h6>
              <h2 className="title">Core Values in Every Engagement</h2>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {values.map((item, idx) => (
            <div
              key={item.title}
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay={Math.min(idx * 90, 360)}
            >
              <article className="about-values-alt-card h-100">
                <div className="about-values-alt-icon" aria-hidden="true">
                  <i className={`fas ${item.icon}`}></i>
                </div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValuesAlt;
