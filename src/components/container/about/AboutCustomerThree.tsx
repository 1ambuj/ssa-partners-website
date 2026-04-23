/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

import One from "public/images/about/8.png";
import Three from "public/images/about/6.png";
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
      <div className="testimonial-area pd-top-120 testim-cus  pd-bottom-100">
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
                <h6 className="sub-title">//Our engagement approach
                </h6>
                <h2 className="title">
                The 6S methodology — applied across all engagements
                </h2>
                <p>The firm follows a structured 6S framework across all engagements — Scan, Study, Strategize, Structure, Support, and Sustain — ensuring systematic, compliant, and consistent service delivery tailored to each client's regulatory and operational requirements</p>
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
                      Diagnostic assessment of business structure, regulatory environment, internal controls, and compliance status.
                      </p>
                      <h4>Scan</h4>
                     
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="single-testimonial-inner">
                      <div className="thumb">
                        <Image src={One} alt="img" />
                      </div>
                      <p className="content">
                      Analysis of financial data, tax exposures, and compliance records to identify risks and gaps
                      </p>
                      <h4>Study</h4>
                    
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="single-testimonial-inner">
                      <div className="thumb">
                        <Image src={One} alt="img" />
                      </div>
                      <p className="content">
                      Development of customised solutions covering tax planning, restructuring, and compliance measures.

                      </p>
                      <h4>Strategize</h4>
                     
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="single-testimonial-inner">
                      <div className="thumb">
                        <Image src={One} alt="img" />
                      </div>
                      <p className="content">
                      Design of implementation frameworks with reporting tools, timelines, and checkpoints.
                      </p>
                      <h4>Structure</h4>
                     
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="single-testimonial-inner">
                      <div className="thumb">
                        <Image src={One} alt="img" />
                      </div>
                      <p className="content">
                      Delivery of audits, compliance filings, legal documentation, and advisory with continuous guidance.
                      </p>
                      <h4>Support</h4>
                      
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="single-testimonial-inner">
                      <div className="thumb">
                        <Image src={One} alt="img" />
                      </div>
                      <p className="content">
                      Long-term integration through training, periodic reviews, and embedding compliance in business operations.

                      </p>
                      <h4>Sustain</h4>
                      
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
              <div className="about-thumb-area about-thumb-area-six pb-0 pe-0 mt-4 mt-lg-0">
                <div className="six-module-image-frame">
                  <span className="six-module-tag">6S Module</span>
                  <Image
                    className="about-img-1 six-module-main-image"
                    src={Three}
                    alt="6S module framework visual"
                  />
                  <span className="six-module-accent six-module-accent-one"></span>
                  <span className="six-module-accent six-module-accent-two"></span>
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
