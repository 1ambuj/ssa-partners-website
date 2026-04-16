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
              <h6 className="sub-title">// Why SSA</h6>
              <h2 className="title">Helping You Put Systems That Work</h2>
              <p className="content mb-4">
                As chartered accountants, we help you build clear processes for
                books, compliance, and reporting—so statutory audits, tax filings,
                and board or investor reviews run smoothly, not as last-minute
                firefighting.
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
                    Structured delivery across audit, tax, GST, and advisory—
                    with emphasis on timelines, documentation, and outcomes you
                    can stand behind.
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
                <Link className="btn btn-base border-radius" href="/contact">
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
                        style={{ "--percent": 95 } as React.CSSProperties}
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
                <h4>Audit &amp; assurance</h4>
                <p>
                  Statutory, tax, and internal audits with clear observations,
                  action items, and support through closure.
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
                        style={{ "--percent": 85 } as React.CSSProperties}
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
                <h4>Direct tax &amp; GST</h4>
                <p>
                  Planning, returns, assessments, and reconciliations aligned
                  with current law and your operating model.
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
                        style={{ "--percent": 75 } as React.CSSProperties}
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
                <h4>Advisory &amp; compliance</h4>
                <p>
                  Corporate structuring, regulatory filings, NRI matters, and
                  ongoing compliance support for growing businesses.
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
