import React from "react";
import Image from "next/image";

import one from "public/images/client/1.png";
import two from "public/images/client/2.png";
import three from "public/images/client/3.png";
import four from "public/images/client/4.png";
import five from "public/images/client/5.png";
import six from "public/images/client/2.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

const ContactClientThree = () => {
  return (
    <div className="client-area pd-top-120 pd-bottom-90">
      <div className="container text-center">
        <h2>We worked with global largest brands </h2>
      </div>
      <div className="container">
        <Swiper
        spaceBetween={0}
        slidesPerView={2}
          pagination={false}
          loop={true}
          navigation={false}
          className="client-slider"
          modules={[Autoplay]}
          autoplay={{
            delay: 9000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            600: {
              slidesPerView: 3,
            },
            800: {
              slidesPerView: 4,
            },
            1100: {
              slidesPerView: 5,
            },
          }}
        >
          <SwiperSlide>
            <div className="thumb">
              <Image src={one} alt="img" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="thumb">
              <Image src={two} alt="img" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="thumb">
              <Image src={three} alt="img" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="thumb">
              <Image src={four} alt="img" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="thumb">
              <Image src={five} alt="img" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="thumb">
              <Image src={six} alt="img" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="thumb">
              <Image src={one} alt="img" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="thumb">
              <Image src={two} alt="img" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="thumb">
              <Image src={three} alt="img" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="thumb">
              <Image src={four} alt="img" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="thumb">
              <Image src={five} alt="img" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="thumb">
              <Image src={six} alt="img" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ContactClientThree;
