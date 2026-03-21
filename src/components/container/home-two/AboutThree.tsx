/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Link from "next/link";

const AboutThree = () => {
  return (
    <div className="about-area bg-sky pd-top-120 pd-bottom-90">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 align-self-center "
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-delay="100"
          >
            <div className="section-title mb-0">
              <h6 className="sub-title">// About Attax</h6>
              <h2 className="title">Helping You Put Systems in that Work</h2>
              <p className="content mb-4">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour,
              </p>
              <div className="row">
                <div className="col-md-4 align-self-center">
                  <div className="ratting-inner">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                </div>
                <div className="col-md-8">
                  <strong>
                    99.9% Customer Satisfaction Based on 750+ Reviews and 20,000
                    Objective Resource
                  </strong>
                </div>
              </div>
              <div className="btn-wrap">
                <Link
                  className="btn btn-black border-radius me-2"
                  href="/about"
                >
                  Explore More
                </Link>
                <Link className="btn btn-base border-radius" href="/about">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 ps-lg-5 mt-5 mt-lg-0">
            <div
              className="media progressbar-media ps-lg-5 "
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-delay="300"
            >
              <div className="media-left">
                <div className="circle-counter">
                  <div className="percent">
                    <svg>
                      <circle cx="50" cy="50" r="45"></circle>
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        style={{ "--percent": 75 } as React.CSSProperties}
                      ></circle>
                    </svg>
                    <div className="number">
                      <h4>
                        95<span>%</span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="media-body align-self-center">
                <h4>Business Consulting</h4>
                <p>
                  There are many variations of passages Lorem Ipsum available,
                </p>
              </div>
            </div>
            <div
              className="media progressbar-media pe-lg-5 "
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-delay="400"
            >
              <div className="media-left">
                <div className="circle-counter">
                  <div className="percent">
                    <svg>
                      <circle cx="50" cy="50" r="45"></circle>
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        style={{ "--percent": 65 } as React.CSSProperties}
                      ></circle>
                    </svg>
                    <div className="number">
                      <h4>
                        85<span>%</span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="media-body align-self-center">
                <h4>Financial Advising</h4>
                <p>
                  There are many variations of passages Lorem Ipsum available,
                </p>
              </div>
            </div>
            <div
              className="media progressbar-media ps-lg-5 "
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-delay="500"
            >
              <div className="media-left">
                <div className="circle-counter">
                  <div className="percent">
                    <svg>
                      <circle cx="50" cy="50" r="45"></circle>
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        style={{ "--percent": 65 } as React.CSSProperties}
                      ></circle>
                    </svg>
                    <div className="number">
                      <h4>
                        75<span>%</span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="media-body align-self-center">
                <h4>Brand Consulting</h4>
                <p>
                  There are many variations of passages Lorem Ipsum available,
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutThree;
