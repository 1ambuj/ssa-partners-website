import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Pagination } from "swiper";
import Link from "next/link";
import Image from "next/image";

import shapeOne from "public/images/bg/shape1.png";

import { MdOutlineClose } from "react-icons/md";
import YoutubeEmbed from "../youtube/YoutubeEmbed";

const BannerVideoTwo = () => {
  useEffect(() => {
    SwiperCore.use([Pagination, Autoplay]);
  }, []);

  const [currentThreeSlide, setCurrentThreeSlide] = useState(0);
  const [totalThreeSlides, setTotalThreeSlides] = useState(0);

  const handleSlideChange = (swiper: any) => {
    if (swiper) {
      const currentIndex = swiper.realIndex + 1;
      setCurrentThreeSlide(currentIndex);
      setTotalThreeSlides(swiper.slides.length);
    }
  };

  const [videoActive, setVideoActive] = useState(false);

  return (
    <div className="banner-video-area cus-vid-ban-two asd-fc">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        navigation={false}
        className="slider banner-slider mt-4 "
        pagination={{
          type: "progressbar",
          el: ".abo-cus-page",
        }}
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 9000,
          disableOnInteraction: false,
        }}
        onInit={(swiper) => handleSlideChange(swiper)}
        onSlideChange={(swiper) => handleSlideChange(swiper)}
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
      <div className="video-controls">
        <span id="currentThree" className="current">
          {currentThreeSlide}
        </span>
        <div className="cus-pag abo-cus-page"></div>
        <span id="totalThree" className="total">
          {totalThreeSlides}
        </span>
      </div>

      <div className="banner-content-area bg-sky">
        <h3>Let&apos;s work together</h3>
        <Link href="/contact">Contact Us</Link>
      </div>
      <Image
        className="top_image_bounce banner-animate-image"
        src={shapeOne}
        alt="img"
      />

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

export default BannerVideoTwo;
