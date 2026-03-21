/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Image from "next/image";
import Link from "next/link";

import shape from "public/images/bg/shape2.png";

const Cta = () => {
  return (
    <div className="call-to-action-area bg-parallax pd-top-120 pd-bottom-120 cus-sha">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-7 col-md-10 align-self-center">
            <div className="section-title style-white mb-0 text-center">
              <h6 className="sub-title">// Tax Problems Solved</h6>
              <h2 className="title">
                Solve All Your Tax Problems Under One Room
              </h2>
              <div className="btn-wrap">
                <Link
                  className="btn btn-black border-radius me-2"
                  href="/about"
                >
                  Work With Us
                </Link>
                <Link className="btn btn-base border-radius" href="/about">
                  Get Started
                </Link>
                <Image className="top_image_bounce" src={shape} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
