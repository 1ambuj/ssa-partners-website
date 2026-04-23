import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { industriesList } from "@/data/industriesData";
import "swiper/css";
import "swiper/css/pagination";

const IndustriesShowcase = () => {
  return (
    <section
      id="industries-showcase"
      className="industries-showcase-area pd-top-110 pd-bottom-100 bg-light"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center">
              <h6 className="sub-title">// INDUSTRIES</h6>
              <h2 className="title">Industries and sectors served by the firm</h2>
              <p className="content">
                Audit, tax, GST, and compliance support across a range of business and institutional sectors.
              </p>
            </div>
          </div>
        </div>

        <Swiper
          className="industries-showcase-slider"
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3800, disableOnInteraction: false }}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            576: { slidesPerView: 2 },
            992: { slidesPerView: 2.6 },
            1200: { slidesPerView: 3.4 },
            1600: { slidesPerView: 4.4 },
          }}
        >
          {industriesList.map((industry) => {
            const Icon = industry.icon;
            return (
              <SwiperSlide key={industry.slug}>
                <Link href={`/industries/${industry.slug}`} className="industry-showcase-card">
                  <div className="industry-showcase-thumb">
                    <img src={industry.image} alt={industry.title} loading="lazy" />
                  </div>
                  <div className="industry-showcase-body">
                    <div className="industry-showcase-icon">
                      <Icon />
                    </div>
                    <h4>{industry.title}</h4>
                    <p>{industry.description}</p>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default IndustriesShowcase;
