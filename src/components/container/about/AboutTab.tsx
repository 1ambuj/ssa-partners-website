/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from "react";
import Image from "next/image";
import Two from "public/images/about/14.png";

const AboutTab = () => {
  const [imgTab, setImgTab] = useState(0);
  const tabItems = [
    {
      label: "Our Vision",
      content:
        "To provide professional Audit, Taxation, Advisory, and Compliance services in accordance with the standards prescribed by the Institute of Chartered Accountants of India — serving domestic and international clients with integrity, confidentiality, and adherence to applicable regulatory frameworks.",
    },
    {
      label: "Our Mission",
      content:
        "To provide client-centric, compliant, and structured financial and regulatory services by integrating professional expertise with current technology — ensuring accuracy, transparency,. and adherence to applicable statutory and professional standards in every engagement.",
    },
    {
      label: "Our Culture",
      content:
        "Since inception, the firm has focused on maintaining high professional standards and providing personalised service to clients, with attention to overall statutory and regulatory compliance. Engagements are conducted with a comprehensive view of clients' legal and compliance obligations, in line with their operational context.",
    },
  ];

  return (
    <div
      id="about-area"
      className="about-area about-tab-modern bg-sky bg-relative pd-bottom-90"
    >
      <div className="container">
        <div className="row align-items-center g-4">
          <div
            className="col-lg-6 col-md-9"
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-delay="300"
          >
            <div className="about-thumb-area pb-0 pe-0 me-0">
              <Image className="about-img-1" src={Two} alt="img" />
            </div>
          </div>
          <div
            className="col-lg-6"
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-delay="300"
          >
            <div className="section-title about-section-title about-tab-panel mb-0">
              <h2 className="title title-small">
              Our Vision, Mission & Culture
              </h2>
              <ul className="mission-vision-tab about-tab-list mb-0 mt-3">
                {tabItems.map((item, index) => (
                  <li className="nav-item" role="presentation" key={item.label}>
                    <button
                      className={
                        (imgTab == index ? " active " : " ") +
                        " nav-link about-tab-link"
                      }
                      onClick={() => setImgTab(index)}
                    >
                      <span>{item.label}</span>
                      <span className="about-tab-arrow">→</span>
                    </button>
                    <div
                      className={`mission-vision-content${
                        imgTab === index ? " is-open" : ""
                      }`}
                    >
                      <p>{item.content}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTab;
