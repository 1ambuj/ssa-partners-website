/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Image from "next/image";
import Link from "next/link";

import One from "public/images/case-study/1.png";
import Two from "public/images/case-study/2.png";
import Three from "public/images/case-study/3.png";

const CaseStudyTwo = () => {
  return (
    <div className="case-study-area pd-top-110 pd-bottom-90">
      <div className="container">
        <div className="section-title">
          <div className="row">
            <div className="col-lg-7 pe-xl-5 align-self-center">
              <h6 className="sub-title">// Case Study</h6>
              <h2 className="title">
                Delivering our clients more project clarity, greater insight,
                and less chaos.
              </h2>
            </div>
            <div className="col-lg-5 align-self-end">
              <p className="content">
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, search for &apos;lorem
                ipsum&apos; will uncover{" "}
              </p>
              <div className="btn-wrap">
                <Link className="btn btn-base border-radius/ me-2" href="about">
                  View All Project
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single-case-study-inner">
              <div className="thumb">
                <Image src={One} alt="img" />
                <Link className="case-view-btn" href="/case-study-details">
                  <span>View Projects</span> +
                </Link>
              </div>
              <div className="details">
                <p>Project</p>
                <h4>
                  <Link href="/case-study-details">
                    Permissive Tax Planning
                  </Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-case-study-inner">
              <div className="thumb">
                <Image src={Two} alt="img" />
                <Link className="case-view-btn" href="/case-study-details">
                  <span>View Projects</span> +
                </Link>
              </div>
              <div className="details">
                <p>Project</p>
                <h4>
                  <Link href="/case-study-details">
                    Short-range Tax Planning
                  </Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-case-study-inner">
              <div className="thumb">
                <Image src={Three} alt="img" />
                <Link className="case-view-btn" href="/case-study-details">
                  <span>View Projects</span> +
                </Link>
              </div>
              <div className="details">
                <p>Project</p>
                <h4>
                  <Link href="/case-study-details">Planning Expenditures</Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyTwo;
