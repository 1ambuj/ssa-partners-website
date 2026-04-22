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
              <Image
                className="about-img-5 top_image_bounce"
                src={Three}
                alt="about"
              />
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
                Sandeep Singla & Associates is an established professional
                services firm with over a decade of experience delivering
                comprehensive solutions across key business domains. The firm
                specializes in Audit & Assurance, Taxation, Advisory, Goods and
                Services Tax (GST), and Legal Consulting.
              </p>

              {/* Paragraph 2 */}
              <p className="content mb-4">
                We have developed strong expertise in assisting clients with the
                establishment and operation of liaison offices, project offices,
                subsidiaries, and joint ventures in India. Our deep understanding
                of regulatory frameworks enables us to support both domestic and
                international businesses in navigating complex compliance
                environments.
              </p>

              {/* Paragraph 3 */}
              <p className="content">
                Beyond core services, we provide strategic advisory in capital
                structuring, business strategy, taxation laws, corporate finance,
                and compliance management—delivering integrated, value-driven
                solutions aligned with evolving business needs.
              </p>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutTax;
