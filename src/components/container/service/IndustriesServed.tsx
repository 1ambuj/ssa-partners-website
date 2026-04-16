/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";

import "swiper/css";
import "swiper/css/pagination";

import { industriesList } from "@/data/industriesData";

const IndustriesServed = () => {
  return (
    <div className="industries-area pd-top-115 pd-bottom-90 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center">
              <h6 className="sub-title">// Industries We Served</h6>
              <h2 className="title">Explore Services by Industry</h2>
              <p className="content mt-3">
                We deliver tailored audit, tax, GST, and advisory solutions across diverse sectors.
              </p>
            </div>
          </div>
        </div>
        <div className="industries-slider-wrap">
          <Swiper
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              576: { slidesPerView: 2 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 3 },
            }}
            className="industries-swiper"
          >
            {industriesList.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <SwiperSlide key={index}>
                  <div className="single-industry-card">
                    <div className="industry-card-top">
                      <div className="industry-icon">
                        <IconComponent />
                      </div>
                      <span className="industry-index">#{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <h4>{industry.title}</h4>
                    <p>{industry.description}</p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="text-center mt-5">
          <Link className="btn btn-base border-radius" href="/service">
            View All Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IndustriesServed;
