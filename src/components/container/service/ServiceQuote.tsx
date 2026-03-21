import React from "react";
import Image from "next/image";

import One from "public/images/about/15.png";
import Two from "public/images/about/16.png";
const ServiceQuote = () => {
  return (
    <div className="quote-area pd-bottom-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 bg-black">
            <div className="media p-4 pt-lg-5 pb-lg-5">
              <div className="media-left pe-md-4 mb-3 mb-lg-0">
                <Image src={One} alt="img" />
              </div>
              <div className="media-body align-self-center">
                <h3 className="text-white mb-md-4">3k Problems Solved</h3>
                <p className="text-white mb-0">
                  There are many variations of passages of Lorem Ipsum
                  available, but the alteration in some form,{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-6 bg-base">
            <div className="media p-4 pt-lg-5 pb-lg-5">
              <div className="media-body align-self-center">
                <h3 className="text-white mb-0">Have An Emergency?</h3>
                <h5 className="text-white mb-3">+11 44-45-4789</h5>
                <p className="text-white mb-0">
                  There are many variations of passages of Lorem Ipsum
                  available,
                </p>
              </div>
              <div className="media-left ps-md-4 mt-3 mt-lg-0">
                <Image src={Two} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceQuote;
