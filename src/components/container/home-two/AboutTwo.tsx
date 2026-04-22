/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Image from "next/image";

import One from "public/images/about/1.png";
import Two from "public/images/about/2.png";

const AboutTwo = () => {
  return (
    <div id="about-area" className="about-area pd-top-120 pd-bottom-120">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 col-md-9 "
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-delay="300"
          >
            <div className="about-thumb-area cussi-about-thumber">
              <Image className="about-img-1" src={One} alt="img" />
              <Image className="about-img-2 cus-img-2" src={Two} alt="img" />
              <div className="about-facts-wrap">
                <div className="about-fact-item">
                  <h5>Established 2010</h5>
                  <p>Year of establishment</p>
                </div>
                <div className="about-fact-item">
                  <h5>New Delhi &amp; Gurgaon</h5>
                  <p>Office locations</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 align-self-center "
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-delay="300"
          >
            <div className="section-title mb-0 mt-5 mt-lg-0">
              <h6 className="sub-title">// About Our Company</h6>
              <h2 className="title">
                 Specialized in Audit, Tax, Advisory & Compliance
              </h2>
              <p className="content">
                Sandeep Singla &amp; Associates provides expert services in Audit
                &amp; Assurance, Taxation, Advisory, GST, and Legal Consulting.
                With over a decade of experience, we assist businesses in
                establishing liaison offices, subsidiaries, joint ventures, and
                other legal entities in India.
              </p>
              <p className="content mt-3">
                Beyond core audit and tax services, the firm provides advisory
                in Capital Structuring, Business Strategy, Tax Law
                Interpretation, Corporate Accounting &amp; Finance Reporting,
                Statutory Compliance Management, and Process Design and Internal
                Control Structuring.
              </p>
              <p className="content mt-3 mb-0">
                &quot;Our vision is to be recognized as a trusted partner in
                financial and business consulting, empowering organizations to
                achieve sustainable growth and operational excellence.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTwo;
