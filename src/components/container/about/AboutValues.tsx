import React from "react";

const values = [
  {
    title: "Client interests first",
    icon: "fa-user-shield",
    description:
      "Services are aligned with clients' regulatory objectives and operational requirements in each engagement.",
  },
  {
    title: "Integrity & transparency",
    icon: "fa-balance-scale",
    description:
      "The firm upholds honesty, fairness, and openness in all professional interactions, in accordance with ICAI's Code of Ethics.",
  },
  {
    title: "Commitment to quality",
    icon: "fa-award",
    description:
      "Work is conducted in adherence to professional standards prescribed by ICAI and applicable regulatory frameworks.",
  },
  {
    title: "Accountability",
    icon: "fa-tasks",
    description:
      "Each engagement is managed with defined responsibilities, documented deliverables, and structured review mechanisms.",
  },
  {
    title: "Confidentiality",
    icon: "fa-lock",
    description:
      "Client information is handled with strict confidentiality, controlled access, and secure systems in compliance with ICAI requirements.",
  },
  {
    title: "Continuous improvement",
    icon: "fa-chart-line",
    description:
      "The firm monitors legislative and regulatory updates to ensure services remain current and compliant with evolving requirements.",
  },
];

const AboutValues = () => {
  return (
    <section className="about-values-area pd-top-110 pd-bottom-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="section-title text-center">
              <h6 className="sub-title">// PROFESSIONAL VALUES</h6>
              <h2 className="title">Our Values</h2>
              <p className="content">
                Principles that guide every audit, advisory, taxation, and compliance engagement.
              </p>
            </div>
          </div>
        </div>
        <div className="about-values-panel">
          <div className="row align-items-stretch about-values-split">
            <div className="col-md-7">
              <div className="about-values-panel-content">
                <h3>Professional values that guide every engagement</h3>
                <p className="about-values-intro">
                  Our work is grounded in ethics, quality standards, and practical client outcomes.
                </p>
                <div className="about-values-list">
                  {values.map((value) => (
                    <article key={value.title} className="about-value-simple">
                      <div className="about-value-icon" aria-hidden="true">
                        <i className={`fas ${value.icon}`}></i>
                      </div>
                      <div className="about-value-text">
                        <h4>{value.title}</h4>
                        <p>{value.description}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="about-values-panel-image">
                <img
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80"
                  alt="Professional team workspace"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
