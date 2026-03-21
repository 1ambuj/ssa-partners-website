import React, { useState } from "react";
import Image from "next/image";

import twentyFour from "public/images/about/24.png";
import twentyFive from "public/images/about/25.png";

const Team = () => {
  const [imgTab, setImgTab] = useState(0);

  return (
    <div className="team-area pd-top-120 pd-bottom-120">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 align-self-center "
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="300"
          >
            <div className="section-title mb-0 mt-4 mt-lg-0">
              <h6 className="sub-title">Expert team members</h6>
              <h2 className="title">We&apos;re here to help you</h2>
            </div>
            <ul
              className="service-tab-inner style-2 nav nav-tabs mt-lg-5 mt-4"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className={
                    (imgTab == 0 ? " active color-black" : " ") + " nav-link"
                  }
                  onClick={() => setImgTab(0)}
                >
                  Carmen C. McCurdy
                  <span>Financial consultant</span>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={
                    (imgTab == 1 ? " active color-black" : " ") + " nav-link"
                  }
                  onClick={() => setImgTab(1)}
                >
                  Carmen C. McCurdy<span>Business development manager</span>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={
                    (imgTab == 2 ? " active color-black" : " ") + " nav-link"
                  }
                  onClick={() => setImgTab(2)}
                >
                  Audit & Assurancy<span>Financial Manager</span>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={
                    (imgTab == 3 ? " active color-black" : " ") + " nav-link"
                  }
                  onClick={() => setImgTab(3)}
                >
                  Strategic Planning<span>IT support eng.</span>
                </button>
              </li>
            </ul>
          </div>
          <div
            className="col-lg-6 "
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="500"
          >
            <div className="tab-content" id="myTabContent">
              <div
                className={`tab-pane fade${
                  imgTab === 0 ? " show active fade-inc" : ""
                }`}
                role="tabpanel"
              >
                <Image src={twentyFour} alt="img" />
              </div>
              <div
                className={`tab-pane fade${
                  imgTab === 1 ? " show active fade-inc" : ""
                }`}
                role="tabpanel"
              >
                <Image src={twentyFive} alt="img" />
              </div>
              <div
                className={`tab-pane fade${
                  imgTab === 2 ? " show active fade-inc" : ""
                }`}
                role="tabpanel"
              >
                <Image src={twentyFour} alt="img" />
              </div>
              <div
                className={`tab-pane fade${
                  imgTab === 3 ? " show active fade-inc" : ""
                }`}
                role="tabpanel"
              >
                <Image src={twentyFive} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
