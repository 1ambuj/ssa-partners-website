/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Image from "next/image";
import Link from "next/link";

import One from "public/images/about/4.png";
import Two from "public/images/bg/14.png";

const PricingArea = () => {
  return (
    <>
      <div className="banner-area bg-relative pd-bottom-120 banner-small-inner bg-light bg-relative bg-cover text-center">
        <Image
          className="left_image_bounce position-bottom-left"
          src={One}
          alt="img"
        />
        <div className="container">
          <h4>Our Pricing</h4>
          <h3>
            We have all kind of plans for every business that fit with your
            needs
          </h3>
          <div className="scroll-down top_image_bounce">
            <a href="#pricing-area">
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
            </a>
          </div>
        </div>
      </div>

      <div className="banner-area">
        <Image src={Two} alt="img" />
      </div>

      <div
        id="pricing-area"
        className="pricing-area bg-relative pd-top-115 pd-bottom-90 cus-price"
      >
        <Image
          className="top_image_bounce position-top-right"
          src={One}
          alt="img"
        />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center">
                <h6 className="sub-title">// Pricing Plans</h6>
                <h2 className="title">Affordable Pricing Plans</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-pricing-inner text-center">
                <h4>Basic Plan</h4>
                <h2>$99.00</h2>
                <p className="month">Per/Mounth</p>
                <p>Lorem ipsum dolor sit amet, consec tetur adipiscing.</p>
                <ul>
                  <li>Includes all Workbooks</li>
                  <li>Vehicula ut sagittis at</li>
                  <li>Rutrum ac netus gravida</li>
                  <li>24/7 Online Support</li>
                  <li>Cashback Guarantee</li>
                </ul>
                <Link className="btn btn-black border-radius" href="/">
                  Purchase Now{" "}
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-pricing-inner text-center">
                <h4>Advanced Plan</h4>
                <h2>$199.00</h2>
                <p className="month">Per/Mounth</p>
                <p>Lorem ipsum dolor sit amet, consec tetur adipiscing.</p>
                <ul>
                  <li>Includes all Workbooks</li>
                  <li>Vehicula ut sagittis at</li>
                  <li>Rutrum ac netus gravida</li>
                  <li>24/7 Online Support</li>
                  <li>Cashback Guarantee</li>
                </ul>
                <Link className="btn btn-black border-radius" href="/">
                  Purchase Now
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-pricing-inner text-center">
                <h4>Premium Plan</h4>
                <h2>$299.00</h2>
                <p className="month">Per/Mounth</p>
                <p>Lorem ipsum dolor sit amet, consec tetur adipiscing.</p>
                <ul>
                  <li>Includes all Workbooks</li>
                  <li>Vehicula ut sagittis at</li>
                  <li>Rutrum ac netus gravida</li>
                  <li>24/7 Online Support</li>
                  <li>Cashback Guarantee</li>
                </ul>
                <Link className="btn btn-black border-radius" href="/">
                  Purchase Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingArea;
