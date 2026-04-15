/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";

import Two from "public/images/about/5.png";
import Three from "public/images/about/6.png";
import Four from "public/images/about/7.png";
import Eight from "public/images/about/9.png";

const AboutCustomer = () => {
  const swiperRef = useRef<SwiperCore | null>(null);
  const sixSItems = [
    {
      step: "01. Scan",
      title: "Initial Assessment",
      description:
        "We begin by conducting diagnostic assessments of your business structure, regulatory environment, internal controls, and compliance status to get a comprehensive view of existing frameworks.",
    },
    {
      step: "02. Study",
      title: "Detailed Analysis",
      description:
        "In the Study phase, we analyze financial data, tax exposures, and compliance records in detail. This allows us to identify inefficiencies, areas of improvement, and potential risks that may impact performance or regulatory standing.",
    },
    {
      step: "03. Strategize",
      title: "Solution Planning",
      description:
        "Based on these insights, we develop customized and practical solutions. These may include tax planning strategies, restructuring recommendations, compliance enhancement measures, governance improvements, and process optimization plans tailored to the organization's objectives.",
    },
    {
      step: "04. Structure",
      title: "Execution Framework",
      description:
        "We design implementation structures including reporting mechanisms, workflow tools, timelines, and checkpoints to deliver seamless execution and monitoring.",
    },
    {
      step: "05. Support",
      title: "Ongoing Assistance",
      description:
        "Our team delivers expert-led services such as audits, compliance filings, legal documentation, advisory, and process improvements with continuous guidance and timely updates.",
    },
    {
      step: "06. Sustain",
      title: "Long-Term Success",
      description:
        "We focus on long-term effectiveness. We integrate systems into regular operations, provide training and periodic reviews, and ensure that compliance and governance practices remain embedded within the organization.",
    },
  ];

  useEffect(() => {
    SwiperCore.use([Pagination, Autoplay]);
  }, []);

  const [currentTwoSlide, setCurrentTwoSlide] = useState(0);
  const [totalTwoSlides, setTotalTwoSlides] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleSlideChange = (swiper: { realIndex: number }) => {
    if (swiper) {
      const currentIndex = swiper.realIndex + 1;
      setCurrentTwoSlide(currentIndex);
      setTotalTwoSlides(sixSItems.length);
    }
  };

  const pauseAutoplay = () => {
    setIsPaused(true);
    // Stop immediately so user can read without movement.
    swiperRef.current?.autoplay?.stop();
  };

  const resumeAutoplay = () => {
    setIsPaused(false);
    // Force restart after manual stop on click/hover.
    setTimeout(() => {
      swiperRef.current?.autoplay?.start();
    }, 50);
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
              <div
                className="testimonial-slider-wrap"
                onMouseEnter={pauseAutoplay}
                onMouseLeave={resumeAutoplay}
                onPointerDown={pauseAutoplay}
                onTouchStart={pauseAutoplay}
                onClickCapture={pauseAutoplay}
              >
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
                  autoplay={
                    isPaused
                      ? false
                      : {
                          delay: 4000,
                          disableOnInteraction: false,
                          pauseOnMouseEnter: false,
                        }
                  }
                  onInit={(swiper) => {
                    swiperRef.current = swiper;
                    handleSlideChange(swiper);
                  }}
                  onSlideChange={(swiper) => handleSlideChange(swiper)}
                >
                  {sixSItems.map((item) => (
                    <SwiperSlide key={item.step}>
                      <div className="single-testimonial-inner">
                        <p>{item.description}</p>
                        <h4>{item.step}</h4>
                        <p className="designation">{item.title}</p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

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