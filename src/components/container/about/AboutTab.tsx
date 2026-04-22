/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from "react";
import Image from "next/image";
import One from "public/images/about/7.png";
import Two from "public/images/about/14.png";

const AboutTab = () => {
  const [imgTab, setImgTab] = useState(0);

  return (
    <div id="about-area" className="about-area bg-sky bg-relative pd-bottom-90">
      <Image
        className="top_image_bounce position-bottom-left"
        src={One}
        alt="img"
      />
      <div className="container">
        <div className="row">
          <div
            className="col-lg-7 col-md-9 "
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-delay="300"
          >
            <div className="about-thumb-area pb-0 pe-0 me-0">
              <Image className="about-img-1" src={Two} alt="img" />
            </div>
          </div>
          <div
            className="col-lg-5 align-self-end "
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-delay="300"
          >
            <div className="section-title about-section-title mb-0">
              <h6 className="sub-title">// TRUSTED COMPANY</h6>
              <h2 className="title title-small">
                Our Vision, Mission & Core Values
              </h2>
              <ul
                className="mission-vision-tab nav nav-pills mb-3 mt-3"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className={
                      (imgTab == 0 ? " active " : " ") +
                      " btn btn-black border-radius nav-link"
                    }
                    onClick={() => setImgTab(0)}
                  >
                    Our Mission
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={
                      (imgTab == 1 ? " active " : " ") +
                      " btn btn-black border-radius nav-link"
                    }
                    onClick={() => setImgTab(1)}
                  >
                    Our Vission
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={
                      (imgTab == 2 ? " active" : " ") +
                      " btn btn-black border-radius nav-link"
                    }
                    onClick={() => setImgTab(2)}
                  >
                    Our Culture
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className={`tab-pane fade${
                    imgTab === 0 ? " show active fade-inc" : ""
                  }`}
                  role="tabpanel"
                >
                  <div className="mission-vision-content">
                    <p>
                    To be a respected and globally-oriented accounting and advisory
                      firm, delivering technology-driven financial solutions with integrity,
                      innovation, and excellence empowering businesses in the evolving
                      financial landscape.
                    </p>
                  </div>
                </div>
                <div
                  className={`tab-pane fade${
                    imgTab === 1 ? " show active fade-inc" : ""
                  }`}
                  role="tabpanel"
                >
                  <div className="mission-vision-content">
                    <p>
                    To provide client-centric compliant, and strategic financial solutions by
                    integrating professional expertise with innovative technologies-enhancing
                    financial performance and enabling sustainable business
                    growth.
                    </p>
                  </div>
                </div>
                <div
                  className={`tab-pane fade${
                    imgTab === 2 ? " show active fade-inc" : ""
                  }`}
                  role="tabpanel"
                >
                  <div className="mission-vision-content">
                    <p>
                    Since inception, we always focused on laying a strong foundation to
                      provide high professional standards and personalized services to our
                      clients with all cares of overall legal compliances of the businesses with
                      a 360-degree view, in line with their strategy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTab;
