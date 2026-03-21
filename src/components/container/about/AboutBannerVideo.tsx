import React, { useState } from "react";
import Image from "next/image";

import One from "public/images/bg/shape1.png";
import { MdOutlineClose } from "react-icons/md";
import YoutubeEmbed from "../youtube/YoutubeEmbed";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

const AboutBannerVideo = () => {
  const [videoActive, setVideoActive] = useState(false);

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
                <button
                  className="video-play-btn my-cus-btn"
                  aria-label="open video modal"
                  onClick={() => setVideoActive(true)}
                >
                  <i className="fa fa-play"></i>
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-item text-center">
                <button
                  className="video-play-btn my-cus-btn"
                  aria-label="open video modal"
                  onClick={() => setVideoActive(true)}
                >
                  <i className="fa fa-play"></i>
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-item text-center">
                <button
                  className="video-play-btn my-cus-btn"
                  aria-label="open video modal"
                  onClick={() => setVideoActive(true)}
                >
                  <i className="fa fa-play"></i>
                </button>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="banner-content-area">
            <p>From</p>
            <h2>1990</h2>
          </div>
          <Image
            className="top_image_bounce banner-animate-image"
            src={One}
            alt="img"
          />
        </div>
      </div>
      <div
        className={(videoActive ? " video-zoom-in" : " ") + " video-backdrop"}
        onClick={() => setVideoActive(false)}
      >
        <div className="video-inner">
          <div
            className="video-container"
            onClick={(e: any) => e.stopPropagation()}
          >
            {videoActive && <YoutubeEmbed embedId="RvreULjnzFo" />}
            <button
              aria-label="close video popup"
              className="close-video-popup"
              onClick={() => setVideoActive(false)}
            >
              <MdOutlineClose />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBannerVideo;
