/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { servicesList } from "@/data/servicesData";
import One from "public/images/about/5.png";

const ServiceArea = () => {
  return (
    <div id="service-area" className="service-area bg-section-clean pd-top-110 bg-relative">
      <Image className="left_image_bounce position-top-right" src={One} alt="img" />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center">
              <h6 className="sub-title">// Our Services</h6>
              <h2 className="title">
                Expert Taxation, Audit & Advisory Services
              </h2>
              <p className="content mt-3">
                SS Partners delivers comprehensive CA services across audit, taxation, GST, advisory, and more to help your business grow with compliance and confidence.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {servicesList.map((service, index) => (
            <div key={service.slug} className="col-lg-4 col-md-6">
              <div className="single-service-inner">
                <div className="thumb">
                  <Image src={service.icon} alt={service.title} />
                </div>
                <div className="details">
                  <h4>
                    <Link href={service.href}>{service.title}</Link>
                  </h4>
                  <p>{service.description}</p>
                  <Link className="case-view-btn service-plus-btn" href={service.href} aria-label={`View ${service.title}`}>
                    <span className="service-btn-label">View Details</span>
                    <span className="service-btn-plus" aria-hidden="true">+</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceArea;
