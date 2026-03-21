import React, { useState } from "react";
import Image from "next/image";

import Link from "next/link";

import twentyThree from "public/images/about/23.png";
import twentySeven from "public/images/icon/17.svg";
import seven from "public/images/case-study/7.png";

import { MdOutlineClose } from "react-icons/md";
import YoutubeEmbed from "../youtube/YoutubeEmbed";

const Case = () => {
  const [videoActive, setVideoActive] = useState(false);

  return (
    <div className="case-study-area bg-black pd-top-110">
      <div className="container">
        <div className="section-title style-white">
          <div className="row">
            <div className="col-lg-6 col-md-10 order-lg-last align-self-center">
              <h6 className="sub-title">Recent case study</h6>
              <h2 className="title">
                Recent completed award winning case study
              </h2>
            </div>
            <div className="col-lg-6 order-lg-first align-self-end">
              <button
                className="video-play-btn-inner"
                onClick={() => setVideoActive(true)}
              >
                <Image className="rotation_image" src={twentyThree} alt="img" />
              </button>
            </div>
            <div
              className={
                (videoActive ? " video-zoom-in" : " ") + " video-backdrop"
              }
              onClick={() => setVideoActive(false)}
            >
              <div className="video-inner">
                <div
                  className="video-container"
                  onClick={(e: any) => e.stopPropagation()}
                >
                  {videoActive && <YoutubeEmbed embedId="RvreULjnzFo" />}
                  <button
                    aria-label="close video popup"
                    className="close-video-popup"
                    onClick={() => setVideoActive(false)}
                  >
                    <MdOutlineClose />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single-case-study-inner style-2">
              <div className="thumb">
                <Image src={seven} alt="img" />
              </div>
              <div className="details">
                <div className="row">
                  <div className="col-8">
                    <h5 className="text-white mb-0">
                      <Link href="/case-study-details">Advisory Meeting</Link>
                    </h5>
                  </div>
                  <div className="col-4 text-end">
                    <Link className="cs-read-more" href="/case-study-details">
                      <Image src={twentySeven} alt="img" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-case-study-inner style-2">
              <div className="thumb">
                <Image src={seven} alt="img" />
              </div>
              <div className="details">
                <div className="row">
                  <div className="col-8">
                    <h5 className="text-white mb-0">
                      <Link href="/case-study-details">Legal advice</Link>
                    </h5>
                  </div>
                  <div className="col-4 text-end">
                    <Link className="cs-read-more" href="/case-study-details">
                      <Image src={twentySeven} alt="img" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-case-study-inner style-2">
              <div className="thumb">
                <Image src={seven} alt="img" />
              </div>
              <div className="details">
                <div className="row">
                  <div className="col-8">
                    <h5 className="text-white mb-0">
                      <Link href="/case-study-details">corporate industry</Link>
                    </h5>
                  </div>
                  <div className="col-4 text-end">
                    <Link className="cs-read-more" href="/case-study-details">
                      <Image src={twentySeven} alt="img" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Case;
