import React from "react";
import Image from "next/image";

import twentyOne from "public/images/about/21.png";
import twentyTwo from "public/images/about/22.png";

const Strategy = () => {
  return (
    <div id="home-services" className="planning-area bg-sky pd-top-120 pd-bottom-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-title mb-0 mt-5 mt-lg-0">
              <h6
                className="sub-title "
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="100"
              >
                What we do
              </h6>
              <h2
                className="title mb-4 "
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="150"
              >
                We will provide you with the best strategy
              </h2>
              <p
                className="content "
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="200"
              >
                These cases are perfectly simple and easy to distinguish. In a
                free hour, when our power of choice is untrammelled and when
                nothing prevents our being able to do what we like best, every
                pleasure is to be welcomed and
              </p>
              <ul
                className="single-list-inner ps-3 mt-4 mb-4 "
                data-aos="fade-up"
                data-aos-duration="1500"
                data-ao-delay="250s"
              >
                <li>
                  <strong>692%</strong> Campaign ROI Exceeds
                </li>
                <li>
                  <strong>8x</strong> the number of keywords sending traffic to
                  your site
                </li>
                <li>
                  <strong>296%</strong> increase in organic traffic
                </li>
              </ul>
              <Image
                className=""
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="300"
                src={twentyOne}
                alt="img"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-9 mt-4 mt-lg-0 align-self-center">
            <div
              className="about-thumb-area pe-0 pb-0 px-lg-5 ms-xl-5 "
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="300"
            >
              <div className="left-content">support@attaxinfo.com</div>
              <Image
                className=""
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="300"
                src={twentyTwo}
                alt="img"
              />
              <p className="mt-3">
                Highly qualified tax consultants with many years of experience
                in the field offer a full range of services to help you build a
                sound financial future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Strategy;
