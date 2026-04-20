/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import SsaBrochureMark from "@/components/ui/SsaBrochureMark";
import { servicesList } from "@/data/servicesData";

const ServiceTwo = () => {
  const [imgTab, setImgTab] = useState(0);

  return (
    <>
      <div className="service-area bg-header-style pd-top-100 pd-bottom-100">
        <div className="container">
          <div className="row">

            {/* LEFT */}
            <div className="col-lg-4 col-md-8">
              <div className="tab-content">

                {servicesList.map((service, index) => (
                  <div
                    key={index}
                    className={`tab-pane fade ${
                      imgTab === index ? "show active fade-inc" : ""
                    }`}
                  >
                    <div className="single-service-inner-2">

                      <div className="thumb">
                        <Image src={service.mainImg} alt="Main service" />
                      </div>
                      {service.animImg2 && (
                        <div className="animate-img-2">
                          <Image src={service.animImg2} alt="Animated 2" />
                        </div>
                      )}
                      <div className="animate-img-1" aria-hidden>
                        <SsaBrochureMark size="lg" tone="blue" />
                      </div>

                      <div className="details">
                        <div className="details-inner">
                          <h2>{String(index + 1).padStart(2, "0")}.</h2>
                          <p>{service.description}</p>
                          <Link href={service.href}>Discover More</Link>
                        </div>
                      </div>

                    </div>
                  </div>
                ))}

              </div>
            </div>

            {/* RIGHT */}
            <div className="col-lg-6 offset-lg-2 align-self-center">
              <div className="section-title style-white mb-0 mt-2 mt-lg-0">
                <h6 className="sub-title">// OUR SERVICES</h6>
                <h2 className="title">Expert Taxation, Audit & Advisory Services</h2>
              </div>

              <ul className="service-tab-inner nav nav-tabs mt-lg-5 mt-4">

                {servicesList.map((service, index) => (
                  <li key={index} className="nav-item">
                    <button
                      className={`nav-link ${
                        imgTab === index ? "active" : ""
                      }`}
                      onClick={() => setImgTab(index)}
                    >
                      {service.title}
                    </button>
                  </li>
                ))}

              </ul>
            </div>

          </div>
        </div>
      </div>

      <div className="btn-wrap bg-sky text-center">
        <Link
          className="btn btn-base border-radius mt--30 left_image_bounce"
          href="/service"
        >
          View All Services
        </Link>
      </div>
    </>
  );
};

export default ServiceTwo;