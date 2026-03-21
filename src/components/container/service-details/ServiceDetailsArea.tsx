import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import One from "public/images/bg/15.png";
import ServiceRelatedBlogs from "./ServiceRelatedBlogs";
import ServiceClients from "./ServiceClients";

interface Subservice {
  slug: string;
  title: string;
  summary: string;
  items: string[];
}

interface ServiceDetailsAreaProps {
  service: {
    slug: string;
    title: string;
    description: string;
    details: string[];
    subservices?: Subservice[];
  };
}

const ServiceDetailsArea = ({ service }: ServiceDetailsAreaProps) => {
  const [imgTab, setImgTab] = useState(0);

  return (
    <>
      {/* 1. Overview */}
      <div
        id="service-details-area"
        className="service-details bg-sky pd-top-50 pd-bottom-70"
      >
        <div className="container">
          <div className="service-details-img-wrap">
            <Image src={One} alt="" />
          </div>
          <h2>{service.title}</h2>
          <p className="lead">{service.description}</p>
          {service.details.map((para, i) => (
            <p
              key={i}
              className={
                i === service.details.length - 1 &&
                (!service.subservices || service.subservices.length === 0)
                  ? "mb-0"
                  : ""
              }
            >
              {para}
            </p>
          ))}
        </div>
      </div>

      {/* 2. Key Offerings (Accordion) */}
      {service.subservices && service.subservices.length > 0 && (
        <div className="faq-area cus-faq pd-top-80 pd-bottom-80 bg-sky">
          <div className="container">
            <div
              className="accordion attax-accordion style-2 mt-4 pd-bottom-0"
              id="accordionExample"
            >
              {service.subservices.map((sub, index) => (
                <div key={sub.slug} className="accordion-item">
                  <h2 className="accordion-header" id={`heading${index}`}>
                    <button
                      className={
                        (imgTab === index ? "  " : " collapsed") +
                        " accordion-button"
                      }
                      onClick={() =>
                        setImgTab(imgTab === index ? -1 : index)
                      }
                    >
                      {index + 1}. {sub.title}
                    </button>
                  </h2>
                  <div
                    className={`accordion-collapse collapse${
                      imgTab === index ? " show " : ""
                    }`}
                  >
                    <div className="accordion-body">
                      <p className="mb-2">{sub.summary}</p>
                      <ul className="mb-2" style={{ paddingLeft: "18px" }}>
                        {sub.items.map((item, j) => (
                          <li key={j}>{item}</li>
                        ))}
                      </ul>
                      <Link
                        href={`/service-detail/${service.slug}/${sub.slug}`}
                        className="btn btn-base border-radius btn-view-details-sm"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 3. Related Blogs */}
      <ServiceRelatedBlogs
        serviceSlug={service.slug}
        serviceTitle={service.title}
      />

      {/* 4. Clients */}
      <ServiceClients />
    </>
  );
};

export default ServiceDetailsArea;
