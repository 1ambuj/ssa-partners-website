import React from "react";
import Image from "next/image";
import One from "public/images/icon/1.png";
import Two from "public/images/icon/2.png";
import Three from "public/images/icon/3.png";

const AboutIntro = () => {
  return (
    <div className="intro-area bg-light pd-top-120 pd-bottom-90">
      <div className="container">
        <div className="row">

          {/* 1 */}
          <div className="col-lg-4 col-md-6">
            <div className="intro-area-inner border-right-1 ps-lg-3">
              <div className="thumb mb-4">
                <Image src={One} alt="icon" />
              </div>
              <div className="details">
                <h4>Chartered Expertise</h4>
                <p>
                  With over a decade of experience, we deliver solutions grounded
                  in regulatory expertise and strategic business insight.
                </p>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className="col-lg-4 col-md-6">
            <div className="intro-area-inner border-right-1 ps-lg-3 pe-lg-3">
              <div className="thumb mb-4">
                <Image src={Two} alt="icon" />
              </div>
              <div className="details">
                <h4>6S Methodology</h4>
                <p>
                  Scan, Study, Strategize, Structure, Support & Sustain — ensuring
                  scalable and long-term business success.
                </p>
              </div>
            </div>
          </div>

          {/* 3 */}
          <div className="col-lg-4 col-md-6">
            <div className="intro-area-inner ps-lg-3">
              <div className="thumb mb-4">
                <Image src={Three} alt="icon" />
              </div>
              <div className="details">
                <h4>Integrated Services</h4>
                <p>
                  Audit, Taxation, FEMA, LPO & BPO — all under one roof for
                  seamless execution and efficiency.
                </p>
              </div>
            </div>
          </div>

          {/* 4 */}
          <div className="col-lg-4 col-md-6 mt-4">
            <div className="intro-area-inner border-right-1 ps-lg-3">
              <div className="thumb mb-4">
                <Image src={One} alt="icon" />
              </div>
              <div className="details">
                <h4>Global Expertise</h4>
                <p>
                  Supporting Indian and international clients with cross-border
                  expansion and regulatory compliance.
                </p>
              </div>
            </div>
          </div>

          {/* 5 */}
          <div className="col-lg-4 col-md-6 mt-4">
            <div className="intro-area-inner border-right-1 ps-lg-3 pe-lg-3">
              <div className="thumb mb-4">
                <Image src={Two} alt="icon" />
              </div>
              <div className="details">
                <h4>Confidential & Ethical</h4>
                <p>
                  We ensure strict data confidentiality, compliance protocols,
                  and ethical practices in every engagement.
                </p>
              </div>
            </div>
          </div>

          {/* 6 */}
          <div className="col-lg-4 col-md-6 mt-4">
            <div className="intro-area-inner ps-lg-3">
              <div className="thumb mb-4">
                <Image src={Three} alt="icon" />
              </div>
              <div className="details">
                <h4>Technology Driven</h4>
                <p>
                  Using digital tools, MIS reporting, and dashboards for real-time
                  visibility and efficiency.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutIntro;
