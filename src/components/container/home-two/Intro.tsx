import React from "react";

import one from "public/images/icon/1.png";
import two from "public/images/icon/2.png";
import three from "public/images/icon/3.png";

import Image from "next/image";

const Intro = () => {
  return (
    <div className="intro-area bg-sky pd-top-120 pd-bottom-90">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="intro-area-inner border-right-1 ps-lg-3">
              <div className="thumb mb-4">
                <Image src={one} alt="img" width={one.width} height={one.height} />
              </div>
              <div className="details">
                <h4>Best Taxation Service</h4>
                <p>
                  Duis aute irure dolor in voluptate velit esse cillum dolore eu
                  fugiat nulla Excepteur sint occaecat cupidatat
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="intro-area-inner border-right-1 ps-lg-3 pe-lg-3">
              <div className="thumb mb-4">
                <Image src={two} alt="img" width={two.width} height={two.height} />
              </div>
              <div className="details">
                <h4>Business Strategy & Growth</h4>
                <p>
                  Duis aute irure dolor in voluptate velit esse cillum dolore eu
                  fugiat nulla Excepteur sint occaecat cupidatat
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="intro-area-inner ps-lg-3">
              <div className="thumb mb-4">
                <Image src={three} alt="img" width={three.width} height={three.height} />
              </div>
              <div className="details">
                <h4>Highly Dedicated Worker</h4>
                <p>
                  Duis aute irure dolor in voluptate velit esse cillum dolore eu
                  fugiat nulla Excepteur sint occaecat cupidatat
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
