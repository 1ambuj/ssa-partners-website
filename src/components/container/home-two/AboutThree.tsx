/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";

const engagementSteps = [
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

const AboutThree = () => {
  return (
    <div className="about-area bg-sky pd-top-120 pd-bottom-90">
      <div className="container">
        <div className="row g-4 align-items-start">
          <div
            className="col-lg-5 ssa-method-left-col"
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-delay="100"
          >
            <div className="section-title mb-0">
              <h6 className="sub-title">// Our engagement approach</h6>
              <h2 className="title">
                The 6S methodology - applied across all engagements
              </h2>
              <p className="content mb-4">
                The firm follows a structured 6S framework across all
                engagements - Scan, Study, Strategize, Structure, Support, and
                Sustain - ensuring systematic, compliant, and consistent service
                delivery tailored to each client's regulatory and operational
                requirements.
              </p>
              {/* <div className="ssa-method-overview">
                {engagementSteps.map((step) => (
                  <div key={step.title} className="ssa-method-overview-item">
                    <span>{step.title}</span>
                  </div>
                ))}
              </div> */}
            </div>
          </div>
          <div className="col-lg-7 ssa-method-right-col mt-5 mt-lg-0">
            {engagementSteps.map((step, index) => (
              <div
                key={step.title}
                className="media progressbar-media ssa-method-media"
                data-aos="fade-left"
                data-aos-duration="1500"
                data-aos-delay={300 + index * 100}
              >
                <div className="media-left">
                  <div className="circle-counter">
                    <div className="percent">
                      <svg>
                        <circle cx="50" cy="50" r="45"></circle>
                        <circle
                          cx="50"
                          cy="50"
                          r="45"
                          style={{ "--percent": 92 } as React.CSSProperties}
                        ></circle>
                      </svg>
                      <div className="number">
                        <h4>{step.title}</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="media-body align-self-center">
                  {/* <h4>{step.title}</h4> */}
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutThree;
