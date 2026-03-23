/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Image from "next/image";
import One from "public/images/service/7.png";

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Scan",
    desc: "We assess your business structure, compliance status, and internal controls to understand the current setup.",
  },
  {
    num: "02",
    title: "Study",
    
    desc: "We analyze financial data and identify risks, gaps, and opportunities for improvement.",
  },
  {
    num: "03",
    title: "Strategize",
    desc: "We develop tailored strategies including tax planning, restructuring, and compliance improvements.",
  },
  {
    num: "04",
    title: "Structure",
    desc: "We design workflows, reporting systems, and timelines for smooth execution.",
  },
  {
    num: "05",
    title: "Support",
    desc: "We provide continuous support through audits, compliance, and advisory services.",
  },
  {
    num: "06",
    title: "Sustain",
    desc: "We ensure long-term efficiency through monitoring, training, and continuous improvement.",
  },
];

const ProcessTwo = () => {
  return (
    <div className="work-process bg-black p-4 p-lg-0">
      <div className="row">
        <div className="col-lg-6">
          <div className="work-process-thumb work-process-thumb-image">
            <Image src={One} alt="img " />
            <div className="quote-wrap pd-10 pd-lg-20">
              <h4>Our 6S Methodology</h4>
              <p className="mb-0">Scan, Study, Strategize, Structure, Support & Sustain</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 align-self-center">
          <div className="section-title style-white mb-0 pd-top-100 pd-bottom-100">
            <h6 className="sub-title">// Our Process</h6>
            <h2 className="title">How We Deliver Value</h2>
            <p className="content mb-4">
              Our structured 6S methodology ensures every engagement is customized, scalable, and built for long-term success. We go beyond compliance to deliver practical, value-driven solutions.
            </p>
            {PROCESS_STEPS.map((step) => (
              <div key={step.num} className="media single-list-media style-2 mt-4">
                <div className="media-left">{step.num}</div>
                <div className="media-body align-self-center">
                  <h4>{step.title}</h4>
                 
                  <p className="mb-0">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessTwo;
