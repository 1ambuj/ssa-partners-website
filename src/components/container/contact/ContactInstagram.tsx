import React from "react";

import Link from "next/link";
import Image from "next/image";

import one from "public/images/instagram/1.png";
import two from "public/images/instagram/2.png";
import three from "public/images/instagram/3.png";
import four from "public/images/instagram/4.png";
import five from "public/images/instagram/5.png";
import six from "public/images/instagram/6.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

const ContactInstagram = () => {
  return (
    <div className="instagram-area pd-bottom-120 cus-con-ins test-ins">
      <div className="container">
        <Swiper
          spaceBetween={24}
          slidesPerView={2}
          pagination={false}
          loop={true}
          navigation={false}
          className="instagram-slider"
          modules={[Autoplay]}
          autoplay={{
            delay: 9000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            600: {
              slidesPerView: 4,
            },

            1024: {
              slidesPerView: 5,
            },

            1500: {
              slidesPerView: 6,
            },
          }}
        >
          <SwiperSlide>
            <div className="item-wrap">
              <div className="thumb">
                <Image src={one} alt="img" />
                <Link href="/">Instagram</Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item-wrap">
              <div className="thumb">
                <Image src={two} alt="img" />
                <Link href="/">Instagram</Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item-wrap">
              <div className="thumb">
                <Image src={three} alt="img" />
                <Link href="/">Instagram</Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item-wrap">
              <div className="thumb">
                <Image src={four} alt="img" />
                <Link href="/">Instagram</Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item-wrap">
              <div className="thumb">
                <Image src={five} alt="img" />
                <Link href="/">Instagram</Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item-wrap">
              <div className="thumb">
                <Image src={six} alt="img" />
                <Link href="/">Instagram</Link>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item-wrap">
              <div className="thumb">
                <Image src={one} alt="img" />
                <Link href="/">Instagram</Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item-wrap">
              <div className="thumb">
                <Image src={two} alt="img" />
                <Link href="/">Instagram</Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item-wrap">
              <div className="thumb">
                <Image src={three} alt="img" />
                <Link href="/">Instagram</Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item-wrap">
              <div className="thumb">
                <Image src={four} alt="img" />
                <Link href="/">Instagram</Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item-wrap">
              <div className="thumb">
                <Image src={five} alt="img" />
                <Link href="/">Instagram</Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item-wrap">
              <div className="thumb">
                <Image src={six} alt="img" />
                <Link href="/">Instagram</Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ContactInstagram;
