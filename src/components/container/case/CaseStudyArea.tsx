/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Image from "next/image";
import Link from "next/link";

import One from "public/images/bg/14.png";

import Two from "public/images/about/4.png";
import Three from "public/images/case-study/1.png";
import Four from "public/images/case-study/2.png";
import Five from "public/images/case-study/3.png";
import Six from "public/images/case-study/4.png";
import Seven from "public/images/case-study/5.png";
import Eight from "public/images/case-study/6.png";

import shape from "public/images/bg/shape2.png";

import Nine from "public/images/about/15.png";
import Ten from "public/images/about/16.png";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const CaseStudyArea = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <>
      <div className="banner-area bg-relative pd-bottom-120 banner-small-inner bg-light bg-relative bg-cover text-center">
        <Image
          className="left_image_bounce position-bottom-left"
          src={Two}
          alt="img"
        />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <h4>Case Study</h4>
              <h3>
                Delivering our clients more project clarity, greater insight,
                and less chaos.
              </h3>
              <div className="scroll-down top_image_bounce">
                <Link href="#case-study-area">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="40"
                    height="80"
                    viewBox="0 0 40 80"
                  >
                    <image
                      id="scroll"
                      width="40"
                      height="80"
                      xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAABQCAYAAABrjzfBAAADwElEQVRoge2bP1LbQBTGP5xQsCoiThD7BIgTxL5BOEGcE0CqlIaSytClg5wA0qUzOQHmBEY3EIW2JfM833oW2bIl78rSJPpmdjwGefent3/13tOeOjjAluoDiAB84mfIIkoAPLM8AXhgWVKq9drWywIKwCmAMwBTq/EpoRLrui5LnzcR8toLgs/lC1AqHwEYArgGcGs3UlACe07YBegmwE6BusViMwAvAHpspCwc+Bu5wQGAGMCE39dqkwXHAD4DOGE3+lSXkPep1t/y6s2zYMgfHwI4rgAOtKjU3Q2UegyUClddlAc4YTcMrYFfhZJU6xNOtruigGNrvOxEqdbSVhwoNc629z7zfcgxd7wrOEuydElXx6nWV+bP9iQxg3aw5SzdSvYyEygVkaGXaj0fWnYXyzr3c5dwWaVaT7nOjsy/jAVrsR5W7CSczTNjRWPBEVf32qxnxK695phcWHBWh/WQsxcHSkmPPqZaH3a4mSdNsJ5RqrWwTAOl+gbwTzPQ3kgW70gAj/LOajVLmOYW7Dapey3JknPUZECZF6HM4leZzXVRrDuwBkq9Fjmw1qoW0FUtoKv+O8CZ5/raLnZWC+iqFtBVLaCrWkBXtYCuagFd9c8BRg5tmeBOKZUFfAQgz9E3JRqL6CCfbXOgLQu4R//1Hhsbbbj+lDcVM9ZS2kGQdaIX0ZTOdok4TXj9xYrfmdBZz8W14jJJpNGBFRmwNbTCXk5+H9dZbCDHVigWtJ4Xj62PZeaZ0YEzfh/6jBb48m6FnKlmZhe23q68W3Yg+8mnv9HnTvKLgPce6/QKaPzcXkO3PgGfM59etM1CnaekCldye9xyVQvoqhbQVR0TcmoaGCPviQH80ACmrOYxxA63pjrSUDZJAOMOg9n9BgIK09RY8KgBQFnN0/g6PIXIo+HHppAxqSJMtX4wy4ykgXytmcuWSZNZpKUskmkqznZb0orEnkWSkWR/GAsmmQefOvVFrMfUlDfJZaGV4FNFQuNGC2ath8xWl9BDcFfHzsKdQ+AuDBxyclivuLPsZNIYCwZKiWEkd/DNMMtLsp3wGaNySAEMlBJvWZRqvbSj5Z1mTiy3WZXdHRKuy7G/pDzAhPtzTPdZacdjAUWs+yXVemAyLrN6t7+/v66q30zwvqElYw/rpNTzHcAPAJep1ufrLi5yYL2l+Xscm2W8q7a63CFmzM/ucUKuVdHnYpO23LUcl2JJ2Y7kNGTefLB9NFLstyWkyJZaardyfV1DipyEzJsP9usaUmTBlxuQz/KvawD4CybGJEiPys7UAAAAAElFTkSuQmCC"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="banner-area">
        <Image src={One} alt="img" />
      </div>

      <div
        id="case-study-area"
        className="case-study-area bg-sky pd-top-110 pd-bottom-90 bg-relative"
      >
        <Image
          className="left_image_bounce position-top-right"
          src={Two}
          alt="img"
        />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center">
                <h6 className="sub-title">// Case Study</h6>
                <h2 className="title">Showing You the Way of Success</h2>
              </div>
            </div>
          </div>
          <div className="row">
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
                  <Image src={Four} alt="img" />
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
                  <Image src={Five} alt="img" />
                  <Link className="case-view-btn" href="/case-study-details">
                    <span>View Projects</span> +
                  </Link>
                </div>
                <div className="details">
                  <p>Project</p>
                  <h4>
                    <Link href="/case-study-details">
                      Planning Expenditures
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-case-study-inner">
                <div className="thumb">
                  <Image src={Six} alt="img" />
                  <Link className="case-view-btn" href="/case-study-details">
                    <span>View Projects</span> +
                  </Link>
                </div>
                <div className="details">
                  <p>Project</p>
                  <h4>
                    <Link href="/case-study-details">
                      Range Tax Expenditures
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-case-study-inner">
                <div className="thumb">
                  <Image src={Seven} alt="img" />
                  <Link className="case-view-btn" href="/case-study-details">
                    <span>View Projects</span> +
                  </Link>
                </div>
                <div className="details">
                  <p>Project</p>
                  <h4>
                    <Link href="/case-study-details">
                      Expenditures Short Tax
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-case-study-inner">
                <div className="thumb">
                  <Image src={Eight} alt="img" />
                  <Link className="case-view-btn" href="/case-study-details">
                    <span>View Projects</span> +
                  </Link>
                </div>
                <div className="details">
                  <p>Project</p>
                  <h4>
                    <Link href="/case-study-details">
                      Planning View Projects
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="call-to-action-area bg-parallax pd-top-120 pd-bottom-120 ad-tt">
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

      <div className="counter-area bg-sky pd-top-90 pd-bottom-120">
        <div className="container">
          <div className="counter-area-inner pd-bottom-120">
            <h2 className="overlay-title">Company</h2>
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="single-counter-inner text-center">
                  <h2>
                    <span className="counter" ref={ref}>
                      {inView && <CountUp start={0} end={12} duration={3} />}
                    </span>{" "}
                    k
                  </h2>
                  <h6>Successfully Project Done</h6>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-counter-inner text-center">
                  <h2>
                    <span className="counter" ref={ref}>
                      {inView && <CountUp start={0} end={450} duration={3} />}
                    </span>
                  </h2>
                  <h6>Saticfied Global Clients</h6>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-counter-inner text-center">
                  <h2>
                    <span className="counter" ref={ref}>
                      {inView && <CountUp start={0} end={25} duration={3} />}
                    </span>{" "}
                    m
                  </h2>
                  <h6>3,280 avg Rating</h6>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-counter-inner text-center">
                  <h2>
                    <span className="counter" ref={ref}>
                      {inView && <CountUp start={0} end={358} duration={3} />}
                    </span>{" "}
                    +
                  </h2>
                  <h6>Successfully Project Done</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="quote-area pd-bottom-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 bg-black">
              <div className="media p-4 pt-lg-5 pb-lg-5">
                <div className="media-left pe-md-4 mb-3 mb-lg-0">
                  <Image src={Nine} alt="img" />
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
                  <Image src={Ten} alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudyArea;
