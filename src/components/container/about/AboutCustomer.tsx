/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";

import One from "public/images/about/8.png";
import Two from "public/images/about/5.png";
import Three from "public/images/about/6.png";
import Four from "public/images/about/7.png";
import Seven from "public/images/about/10.png";
import Eight from "public/images/about/9.png";

const AboutCustomer = () => {
  useEffect(() => {
    SwiperCore.use([Pagination, Autoplay]);
  }, []);

  const [currentTwoSlide, setCurrentTwoSlide] = useState(0);
  const [totalTwoSlides, setTotalTwoSlides] = useState(0);

  const handleSlideChange = (swiper) => {
    if (swiper) {
      const currentIndex = swiper.realIndex + 1;
      setCurrentTwoSlide(currentIndex);
      setTotalTwoSlides(swiper.slides.length);
    }
  };

  return (
    <div className="testimonial-area bg-light pd-top-120 pd-bottom-120 testim-cus">
      
      {/* Background Images */}
      {/* <Image className="tm-img-animation-1" src={Seven} alt="img" /> */}
      <Image
        className="tm-img-animation-2 top_image_bounce"
        src={Eight}
        alt="img"
      />

      <div className="container pd-bottom-120">
        <div className="row">

          {/* LEFT CONTENT */}
          <div className="col-lg-6">
            <div className="section-title mb-0">

              {/* Title */}
              <h6 className="sub-title">// Our Approach</h6>
              <h2 className="title">Our 6S Model</h2>

              {/* Intro Paragraph */}
              <p className="content mb-4">
                Our structured 6S methodology ensures every engagement is
                customized, scalable, and built for long-term success. We go
                beyond compliance to deliver practical, value-driven solutions
                aligned with business objectives.
              </p>

              {/* SLIDER */}
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
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                onInit={(swiper) => handleSlideChange(swiper)}
                onSlideChange={(swiper) => handleSlideChange(swiper)}
              >

                {/* 1 */}
                <SwiperSlide>
                  <div className="single-testimonial-inner">
                    <p className="">
                    We begin by conducting diagnostic
                    assessments of your business structure,
                    regulatory environment, internal controls,
                    and compliance status to get a comprehensive
                    view of existing frameworks
                    </p>
                    <h4>01. Scan</h4>
                    <p className="designation">Initial Assessment</p>
                  </div>
                </SwiperSlide>

                {/* 2 */}
                <SwiperSlide>
                  <div className="single-testimonial-inner">
                    <p>
                    In the Study phase, we analyze financial
                    data, tax exposures, and compliance
                    records in detail. This allows us to identify
                    inefficiencies, areas of improvement,
                    and potential risks that may impact
                    performance or regulatory standing
                    </p>
                    <h4>02. Study</h4>
                    <p className="designation">Detailed Analysis</p>
                  </div>
                </SwiperSlide>

                {/* 3 */}
                <SwiperSlide>
                  <div className="single-testimonial-inner">
                    <p>
                    Based on these insights, we develop customized
                      and practical solutions. These may include tax
                      planning strategies, restructuring recommendations,
                      compliance enhancement measures, governance
                      improvements, and process optimization plans
                      tailored to the organization’s objectives.
                    </p>
                    <h4>03. Strategize</h4>
                    <p className="designation">Solution Planning</p>
                  </div>
                </SwiperSlide>

                {/* 4 */}
                <SwiperSlide>
                  <div className="single-testimonial-inner">
                    <p>
                    We design implementation structures
                      including reporting mechanisms, workflow
                      tools, timelines and checkpoints to deliver
                      seamless execution and monitoring.
                    </p>
                    <h4>04. Structure</h4>
                    <p className="designation">Execution Framework</p>
                  </div>
                </SwiperSlide>

                {/* 5 */}
                <SwiperSlide>
                  <div className="single-testimonial-inner">
                    <p>
                    Our team delivers expert-led services such as
                      audits, compliance filings, legal documentation,
                      advisory, and process improvements with
                      continuous guidance and updates
                    </p>
                    <h4>05. Support</h4>
                    <p className="designation">Ongoing Assistance</p>
                  </div>
                </SwiperSlide>

                {/* 6 */}
                <SwiperSlide>
                  <div className="single-testimonial-inner">
                    <p>
                    We focus on long-term effectiveness.
                    We integrate systems into regular operations,
                    provide training, periodic reviews, and ensure
                    that compliance and governance practices
                    remain embedded within the organization.
                    This ensures that improvements are not
                    temporary but become part of the business
                    culture.
                    </p>
                    <h4>06. Sustain</h4>
                    <p className="designation">Long-Term Success</p>
                  </div>
                </SwiperSlide>

              </Swiper>

              {/* Progress Indicator */}
              <div className="testimonial-slider-control">
                <span className="current">{currentTwoSlide}</span>
                <div className="cus-pag abo-cus-pag"></div>
                <span className="total">{totalTwoSlides}</span>
              </div>

            </div>
          </div>

          {/* RIGHT IMAGE SIDE */}
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
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutCustomer;