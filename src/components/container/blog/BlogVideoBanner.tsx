import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Pagination } from "swiper";

const BlogVideoBanner = () => {
  useEffect(() => {
    SwiperCore.use([Pagination, Autoplay]);
  }, []);

  const [currentOneSlide, setCurrentOneSlide] = useState(0);
  const [totalOneSlides, setTotalOneSlides] = useState(0);

  const handleSlideChange = (swiper: any) => {
    if (swiper) {
      const currentIndex = swiper.realIndex + 1;
      setCurrentOneSlide(currentIndex);
      setTotalOneSlides(swiper.slides.length);
    }
  };

  return (
    <div className="bg-light blog-cus-vid-area">
      <div className="container">
        <div className="banner-video-area banner-video-area-3">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            navigation={false}
            className="slider banner-slider"
            pagination={{
              type: "progressbar",
              el: ".blog-cus-pag",
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
              <div className="slide-item text-center blog-cus-one"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-item text-center blog-cus-one"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-item text-center blog-cus-one"></div>
            </SwiperSlide>
          </Swiper>
          <div className="container">
            <div className="banner-slider-control">
              <span id="current" className="current">
                {currentOneSlide}
              </span>
              <div className="cus-pag blog-cus-pag"></div>
              <span id="total" className="total">
                {totalOneSlides}
              </span>
            </div>
          </div>
          <div className="banner-content-area">
            <p className="meta">
              <strong>Taxation</strong> . January 19, 2023
            </p>
            <h4>
              Filing payroll taxes electronically makes good business sense
            </h4>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form,{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogVideoBanner;
