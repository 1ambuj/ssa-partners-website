import React from "react";
import Image from "next/image";

import One from "public/images/bg/shape1.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const AboutBannerVideo = () => {
  return (
    <div className="bg-light cus-abo-vid">
      <div className="container">
        <div className="banner-video-area banner-video-area-2">
          <Image
            className="top_image_bounce banner-animate-image-1"
            src={One}
            alt="img"
          />
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            pagination={false}
            loop={true}
            navigation={false}
            className="slider banner-slider"
            modules={[Autoplay]}
            autoplay={{
              delay: 9000,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <div className="slide-item text-center">
                <span className="video-play-btn my-cus-btn" style={{ cursor: "default" }}>
                  <i className="fa fa-play"></i>
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-item text-center">
                <span className="video-play-btn my-cus-btn" style={{ cursor: "default" }}>
                  <i className="fa fa-play"></i>
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-item text-center">
                <span className="video-play-btn my-cus-btn" style={{ cursor: "default" }}>
                  <i className="fa fa-play"></i>
                </span>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="banner-content-area">
            <p>From</p>
            <h2>2010</h2>
          </div>
          <Image
            className="top_image_bounce banner-animate-image"
            src={One}
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutBannerVideo;
