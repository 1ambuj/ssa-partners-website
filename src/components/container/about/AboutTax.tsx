/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Image from "next/image";

import One from "public/images/about/7.png";
import Two from "public/images/about/13.png";
import Three from "public/images/about/5.png";

const AboutTax = () => {
  return (
    <div className="about-area pd-top-80 bg-relative pd-bottom-80">
      
      {/* Background Shape */}
      {/* <Image
        className="top_image_bounce position-bottom-left"
        src={One}
        alt="img"
      /> */}

      <div className="container">
        <div className="row">

          {/* RIGHT IMAGE SIDE */}
          <div
            className="col-lg-6 col-md-9 order-lg-last"
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-delay="300"
          >
            <div className="about-thumb-area pb-0 pe-0 mt-4 mt-lg-0 me-0">
              <Image className="about-img-1" src={Two} alt="about" />
              {/* <Image
                className="about-img-5 top_image_bounce"
                src={Three}
                alt="about"
              /> */}
            </div>
          </div>

          {/* LEFT CONTENT SIDE */}
          <div
            className="col-lg-6 align-self-center"
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-delay="300"
          >
            <div className="section-title me-xl-5 mb-0 mt-5 mt-lg-0">

              {/* Small Title */}
              <h6 className="sub-title">// About Us</h6>

              {/* Main Title */}
              <h2 className="title">
                A Trusted Partner in Financial & Legal Consulting
              </h2>

              {/* Paragraph 1 */}
              <p className="content mb-4">
              Sandeep Singla & Associates is a Chartered Accountant firm providing professional services in
              Audit & Assurance, Taxation, Advisory, Goods and Services Tax (GST), and Legal Consulting.
              The firm is registered with the Institute of Chartered Accountants of India (ICAI) and operates
              from offices in New Delhi and Gurgaon.
              </p>

              {/* Paragraph 2 */}
              <p className="content mb-4">
              The firm assists clients in establishing and operating liaison offices, project offices, subsidiaries,
                        and joint ventures in India. Services are provided to both domestic and international entities in
                        accordance with applicable provisions of the Foreign Exchange Management Act (FEMA),
                        Reserve Bank of India (RBI) regulations, the Companies Act, 2013, and the Income Tax Act,
              </p>

              {/* Paragraph 3 */}
              <p className="content">
              Beyond core audit and tax services, the firm provides advisory in Capital Structuring, Business
Strategy, Tax Law Interpretation, Corporate Accounting & Finance Reporting, Management
Advisory, Compensation Structuring, Statutory Compliance Management, and Process Design
and Internal Control Structuring.
              </p>
              <p className="content">
              All engagements are conducted through a structured 6S framework — Scan, Study, Strategize,
Structure, Support, and Sustain — ensuring systematic, compliant, and consistent service
delivery tailored to each client's regulatory and operational requirements.
              </p>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutTax;
