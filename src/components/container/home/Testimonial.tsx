import React from "react";

import Image from "next/image";

import eighteen from "public/images/icon/18.svg";
import twentysix from "public/images/about/26.png";

import teamOne from "public/images/team/1.png";
import teamTwo from "public/images/team/2.png";
import teamThree from "public/images/team/3.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Testimonial = () => {
  return (
    <div className="testimonial-area bg-sky pd-top-120 pd-bottom-120 custt-test">
      <div className="container">
        <div className="section-title text-center">
          <h6 className="sub-title">Client&apos;s Feedbacks</h6>
          <h2 className="title">Peoples say&apos;s about us</h2>
        </div>
        <div className="testimonial-wrap">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            modules={[Autoplay]}
            pagination={{
              clickable: false,
            }}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            navigation={false}
            className="testimonial-slider-2 test-cus"
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
          >
            <SwiperSlide>
              <div className="single-testimonial-inner style-2">
                <h5>
                  <Image
                    className="me-2 d-inline-block"
                    src={eighteen}
                    alt="img"
                  />
                  Corporate Party Band
                </h5>
                <p className="pb-3">
                  Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco.
                </p>
                <Image src={twentysix} alt="img" />
                <div className="media">
                  <div className="media-left me-3">
                    <Image src={teamOne} alt="img" />
                  </div>
                  <div className="media-body align-self-center">
                    <h6>David D. Rethman</h6>
                    <p className="designation mb-0">CEO & Founder</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-testimonial-inner style-2">
                <h5>
                  <Image
                    className="me-2 d-inline-block"
                    src={eighteen}
                    alt="img"
                  />
                  Wedding Party band
                </h5>
                <p className="pb-3">
                  Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco.
                </p>
                <Image src={twentysix} alt="img" />
                <div className="media">
                  <div className="media-left me-3">
                    <Image src={teamThree} alt="img" />
                  </div>
                  <div className="media-body align-self-center">
                    <h6>Lany. Rethman</h6>
                    <p className="designation mb-0">CEO & Founder</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-testimonial-inner style-2">
                <h5>
                  <Image
                    className="me-2 d-inline-block"
                    src={eighteen}
                    alt="img"
                  />
                  Corporate Party Band
                </h5>
                <p className="pb-3">
                  Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco.
                </p>
                <Image src={twentysix} alt="img" />
                <div className="media">
                  <div className="media-left me-3">
                    <Image src={teamTwo} alt="img" />
                  </div>
                  <div className="media-body align-self-center">
                    <h6>David D. Rethman</h6>
                    <p className="designation mb-0">CEO & Founder</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-testimonial-inner style-2">
                <h5>
                  <Image
                    className="me-2 d-inline-block"
                    src={eighteen}
                    alt="img"
                  />
                  Corporate Party Band
                </h5>
                <p className="pb-3">
                  Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco.
                </p>
                <Image src={twentysix} alt="img" />
                <div className="media">
                  <div className="media-left me-3">
                    <Image src={teamOne} alt="img" />
                  </div>
                  <div className="media-body align-self-center">
                    <h6>David D. Rethman</h6>
                    <p className="designation mb-0">CEO & Founder</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-testimonial-inner style-2">
                <h5>
                  <Image
                    className="me-2 d-inline-block"
                    src={eighteen}
                    alt="img"
                  />
                  Wedding Party band
                </h5>
                <p className="pb-3">
                  Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco.
                </p>
                <Image src={twentysix} alt="img" />
                <div className="media">
                  <div className="media-left me-3">
                    <Image src={teamThree} alt="img" />
                  </div>
                  <div className="media-body align-self-center">
                    <h6>Lany. Rethman</h6>
                    <p className="designation mb-0">CEO & Founder</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-testimonial-inner style-2">
                <h5>
                  <Image
                    className="me-2 d-inline-block"
                    src={eighteen}
                    alt="img"
                  />
                  Corporate Party Band
                </h5>
                <p className="pb-3">
                  Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco.
                </p>
                <Image src={twentysix} alt="img" />
                <div className="media">
                  <div className="media-left me-3">
                    <Image src={teamTwo} alt="img" />
                  </div>
                  <div className="media-body align-self-center">
                    <h6>David D. Rethman</h6>
                    <p className="designation mb-0">CEO & Founder</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <div className="testimonial-slider-control">
            <div className="slider-dots"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
