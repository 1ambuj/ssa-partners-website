/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Pagination } from "swiper";
import Image from "next/image";

import One from "public/images/about/8.png";
import Two from "public/images/about/5.png";
import Three from "public/images/about/6.png";
import Four from "public/images/about/7.png";
import Seven from "public/images/about/10.png";
import Eight from "public/images/about/9.png";

const AboutCustomerThree = () => {
  useEffect(() => {
    SwiperCore.use([Pagination, Autoplay]);
  }, []);

  const [currentTwoSlide, setCurrentTwoSlide] = useState(0);
  const [totalTwoSlides, setTotalTwoSlides] = useState(0);

  const handleSlideChange = (swiper: any) => {
    if (swiper) {
      const currentIndex = swiper.realIndex + 1;
      setCurrentTwoSlide(currentIndex);
      setTotalTwoSlides(swiper.slides.length);
    }
  };

  return (
    <>
      <div className="testimonial-area pd-top-120 testim-cus">
        <Image className="tm-img-animation-1" src={Seven} alt="img" />
        <Image
          className="tm-img-animation-2 top_image_bounce"
          src={Eight}
          alt="img"
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-title mb-0">
                <h6 className="sub-title">// CUSTOMERS FEEDBACK</h6>
                <h2 className="title">
                  What they&apos;re talking about services
                </h2>
                <Swiper
                  spaceBetween={0}
                  slidesPerView={1}
                  loop={true}
                  navigation={false}
                  className="testimonial-slider mt-4"
                  pagination={{
                    type: "progressbar",
                    el: ".abo-cus-pag",
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
                    <div className="single-testimonial-inner">
                      <div className="thumb">
                        <Image src={One} alt="img" />
                      </div>
                      <p className="content">
                        All the Lorem Ipsum generators on the Internet tend
                        repeat predefined chunks as necessary, making this the
                        generator on the Internet. It uses a dictionary of over
                        Latin combined with a handful of model sentence
                        structures,
                      </p>
                      <h4>David D. Rethman</h4>
                      <p className="designation">CEO & Founder</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="single-testimonial-inner">
                      <div className="thumb">
                        <Image src={One} alt="img" />
                      </div>
                      <p>
                        All the Lorem Ipsum generators on the Internet tend
                        repeat predefined chunks as necessary, making this the
                        generator on the Internet. It uses a dictionary of over
                        Latin combined with a handful of model sentence
                        structures,
                      </p>
                      <h4>David D. Rethman</h4>
                      <p className="designation">CEO & Founder</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="single-testimonial-inner">
                      <div className="thumb">
                        <Image src={One} alt="img" />
                      </div>
                      <p>
                        All the Lorem Ipsum generators on the Internet tend
                        repeat predefined chunks as necessary, making this the
                        generator on the Internet. It uses a dictionary of over
                        Latin combined with a handful of model sentence
                        structures,
                      </p>
                      <h4>David D. Rethman</h4>
                      <p className="designation">CEO & Founder</p>
                    </div>
                  </SwiperSlide>
                </Swiper>

                <div className="testimonial-slider-control">
                  <span id="currentTwo" className="current">
                    {currentTwoSlide}
                  </span>
                  <div className="cus-pag abo-cus-pag"></div>
                  <span id="totalTwo" className="total">
                    {totalTwoSlides}
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1 col-md-8">
              <div className="about-thumb-area pb-0 pe-0 mt-4 mt-lg-0">
                <Image className="about-img-1" src={Three} alt="img" />
                <Image
                  className="about-img-5 top_image_bounce"
                  src={Two}
                  alt="img"
                />
                <Image
                  className="about-img-6 top_image_bounce"
                  src={Four}
                  alt="img"
                />
                <div className="avg-ratting-wrap">
                  <div className="avg-ratting-inner">
                    <h2>4.8 +</h2>
                    <p>Avg Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutCustomerThree;
