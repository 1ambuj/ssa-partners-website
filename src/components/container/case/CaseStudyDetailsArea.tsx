import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import One from "public/images/bg/15.png";
import Two from "public/images/about/15.png";
import Three from "public/images/about/16.png";

import { MdOutlineClose } from "react-icons/md";
import YoutubeEmbed from "../youtube/YoutubeEmbed";

const CaseStudyDetailsArea = () => {
  const [videoActive, setVideoActive] = useState(false);

  const [imgTab, setImgTab] = useState(0);

  return (
    <>
      <div className="banner-area bg-sky pd-bottom-120 banner-small-inner  text-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11">
              <h4>Short-range Tax Planning</h4>
              <h3>Short-range Tax Planning</h3>
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

      <div id="case-study-area" className="project-details bg-sky pd-bottom-90">
        <div className="container">
          <Image src={One} alt="img" />
          <div className="row">
            <div className="col-lg-8 pe-xl-5">
              <h2>Project Overview</h2>
              <p>
                On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled and demoralized by the charms of
                pleasure of the moment, so blinded by desire, that they cannot
                foresee the pain and trouble that are bound to ensue; and equal
                blame belongs to those who fail in their duty through weakness
                of will, which is the same as from toil and pain. These cases
                are perfectly simple and easy to distinguish. In a free hour,
                when our power of choice is untrammelled
              </p>
              <p>
                Every pleasure is to be welcomed and every pain avoided. But in
                certain circumstances and owing to the claims of duty the
                obligations of business it will frequently occur that pleasures
                have to be repudiated and annoyances accepted. wise man
                therefore always holds in these
              </p>
            </div>
            <div className="col-lg-4">
              <div className="project-info">
                <h3>Project Info</h3>
                <div className="row">
                  <div className="col-6">
                    <h6>Clients</h6>
                    <p>Porter Victoria</p>
                  </div>
                  <div className="col-6">
                    <h6>Category</h6>
                    <p>Tax Planning</p>
                  </div>
                  <div className="col-6">
                    <h6>Date</h6>
                    <p>20 January, 2023</p>
                  </div>
                  <div className="col-6">
                    <h6>Location</h6>
                    <p>Cakung, Jakarta</p>
                  </div>
                </div>
                <ul className="social-media">
                  <li>
                    <Link className="facebook" href="/">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link className="twitter" href="/">
                      <i className="fab fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link className="instagram" href="/">
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link className="youtube" href="/">
                      <i className="fab fa-youtube"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12">
              <h2>Services Provided</h2>
              <p>
                Every pleasure is to be welcomed and every pain avoided. But in
                certain circumstances and owing to the claims of duty the
                obligations of business it will frequently occur that pleasures
                have to be repudiated and annoyances accepted. wise man
                therefore always holds in these matters to this principle of
                selection: he rejects pleasures to secure other pleasures, or
                else he endures pains to avoid worse{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="call-to-action-area bg-parallax pd-top-120 pd-bottom-120 cas-det-cus">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-7 col-md-10 align-self-center">
              <div className="section-title style-white mb-0 text-center">
                <button
                  className="video-play-btn my-cus-btn"
                  aria-label="open video modal"
                  onClick={() => setVideoActive(true)}
                >
                  <i className="fa fa-play"></i>
                </button>
                <h2 className="title mt-5">
                  Caring For Your Taxes, So You Don&apos;t Have To
                </h2>
                <div className="btn-wrap">
                  <Link className="btn btn-base border-radius" href="/about">
                    Discover More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={(videoActive ? " video-zoom-in" : " ") + " video-backdrop"}
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

      <div className="faq-area cus-faq pd-top-110 bg-sky pd-bottom-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center">
                <h2 className="title">
                  Solutions: all your questions answered
                </h2>
              </div>
            </div>
          </div>
          <div
            className="accordion attax-accordion style-2 mt-5 mt-lg-0 pd-bottom-120"
            id="accordionExample"
          >
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className={
                    (imgTab == 0 ? "  " : " collapsed") + " accordion-button"
                  }
                  onClick={() => setImgTab(imgTab === 0 ? -1 : 0)}
                >
                  1. Where Can I Find Information?
                </button>
              </h2>
              <div
                className={`accordion-collapse collapse${
                  imgTab === 0 ? " show " : ""
                }`}
              >
                <div className="accordion-body">
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, search for
                  &apos;lorem ipsum&apos; will uncover
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className={
                    (imgTab == 1 ? "  " : " collapsed") + " accordion-button"
                  }
                  onClick={() => setImgTab(imgTab === 1 ? -1 : 1)}
                >
                  2. What Are Your Terms And Conditions?
                </button>
              </h2>
              <div
                className={`accordion-collapse collapse${
                  imgTab === 1 ? " show " : ""
                }`}
              >
                <div className="accordion-body">
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, search for
                  &apos;lorem ipsum&apos; will uncover
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className={
                    (imgTab == 2 ? "  " : " collapsed") + " accordion-button"
                  }
                  onClick={() => setImgTab(imgTab === 2 ? -1 : 2)}
                >
                  3. Can I Buy Directly From The Factory?
                </button>
              </h2>
              <div
                className={`accordion-collapse collapse${
                  imgTab === 2 ? " show " : ""
                }`}
              >
                <div className="accordion-body">
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, search for
                  &apos;lorem ipsum&apos; will uncover
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className={
                    (imgTab == 3 ? "  " : " collapsed") + " accordion-button"
                  }
                  onClick={() => setImgTab(imgTab === 3 ? -1 : 3)}
                >
                  4. What Kinds of Payment Do You Accept?
                </button>
              </h2>
              <div
                className={`accordion-collapse collapse${
                  imgTab === 3 ? " show " : ""
                }`}
              >
                <div className="accordion-body">
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, search for
                  &apos;lorem ipsum&apos; will uncover
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="quote-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 bg-black">
              <div className="media p-4 pt-lg-5 pb-lg-5">
                <div className="media-left pe-md-4 mb-3 mb-lg-0">
                  <Image src={Two} alt="img" />
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
                  <Image src={Three} alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudyDetailsArea;
