/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";

const AboutThree = () => {
  const approachItems = [
    {
      title: "Scan",
      description:
        "Diagnostic assessment of business structure, regulatory environment, internal controls, and compliance status.",
    },
    {
      title: "Study",
      description:
        "Analysis of financial data, tax exposures, and compliance records to identify risks and gaps.",
    },
    {
      title: "Strategize",
      description:
        "Development of customised solutions covering tax planning, restructuring, and compliance measures.",
    },
    {
      title: "Structure",
      description:
        "Design of implementation frameworks with reporting tools, timelines, and checkpoints.",
    },
    {
      title: "Support",
      description:
        "Delivery of audits, compliance filings, legal documentation, and advisory with continuous guidance.",
    },
    {
      title: "Sustain",
      description:
        "Long-term integration through training, periodic reviews, and embedding compliance in business operations.",
    },
  ];

  return (
    <div className="about-area bg-sky pd-top-120 pd-bottom-90 about-three-approach">
      <div className="container">
        <div className="row">
          <div className="col-lg-5" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="100">
            <div className="section-title mb-0 approach-intro-panel">
              <h6 className="sub-title">// Our Engagement Approach</h6>
              <h2 className="title">
                The 6S methodology — applied across all engagements
              </h2>
              <p className="content mb-0">
                The firm follows a structured 6S framework across all engagements —
                Scan, Study, Strategize, Structure, Support, and Sustain —
                ensuring systematic, compliant, and consistent service delivery
                tailored to each client&apos;s regulatory and operational requirements.
              </p>
              <div className="approach-intro-meta mt-4">
                <span>6-step method</span>
                <span>Compliance-led</span>
                <span>Long-term support</span>
              </div>
            </div>
          </div>
          <div className="col-lg-7 ps-lg-4 mt-5 mt-lg-0">
            <div className="row g-3">
              {approachItems.map((item, idx) => (
                <div
                  key={item.title}
                  className="col-md-6"
                  data-aos="fade-left"
                  data-aos-duration="1500"
                  data-aos-delay={200 + idx * 70}
                >
                  <div className="approach-item">
                    <div className="approach-item-head">
                      <h4>{item.title}</h4>
                    </div>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutThree;
