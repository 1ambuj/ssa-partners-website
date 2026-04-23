import React from "react";
import Image from "next/image";
import One from "public/images/icon/1.png";
import Two from "public/images/icon/2.png";
import Three from "public/images/icon/3.png";

const AboutIntro = () => {
  return (
    <div className="intro-area bg-light pd-top-120 pd-bottom-60">
      <div className="container">
        <div className="row">

          {/* 1 */}
          <div className="col-lg-4 col-md-6">
            <div className="intro-area-inner border-right-1 ps-lg-3">
              <div className="thumb mb-4">
                <Image src={One} alt="icon" />
              </div>
              <div className="details">
                <h4>Chartered Accountant-led services</h4>
                <p>
                All engagements are conducted by qualified Chartered Accountants in accordance with
                 ICAI standards and the
                applicable Code of Ethics.
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
                  Scan, Study, Strategize, Structure, Support & Sustain —
                  a structured engagement
                  framework applied across all
                  service mandates.
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
                Audit, Taxation, GST, Advisory, FEMA, LPO & BPO — multiple
                  service disciplines within a
                  single professional practice.
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
                <h4>Cross-border regulatory services</h4>
                <p>
                The firm assists Indian and
                international entities with FEMA,
                RBI, MCA, and Income Tax
                compliance requirements
                applicable to cross-border
                business activities.
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
                <h4>Confidential & ethical</h4>
                <p>
                The firm adheres to strict data
                confidentiality standards,
                compliance protocols, and the
                ethical requirements prescribed
                by ICAI in all engagements.
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
                <h4>Technology-supported
                delivery</h4>
                <p>
                The firm uses cloud-based
                  accounting systems, MIS
                  reporting dashboards, and
                  digital compliance monitoring
                  tools in service delivery.
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
