/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { teamMembers } from "@/data/teamMembers";

import one from "public/images/about/4.png";
import two from "public/images/bg/14.png";
import twelve from "public/images/about/12.png";
import fourteen from "public/images/about/9.png";
import fifteen from "public/images/about/15.png";
import sixteen from "public/images/about/16.png";
const TeamArea = () => {
  return (
    <>
      <div className="banner-area bg-relative pd-bottom-120 banner-small-inner bg-light bg-relative bg-cover text-center">
        <Image
          className="left_image_bounce position-bottom-left"
          src={one}
          alt="img"
        />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h4>Meet Our Team</h4>
              <h3>We create some things for your success future</h3>
              <div className="scroll-down top_image_bounce">
                <Link href="#team-area">
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
        <Image src={two} alt="img" />
      </div>

      <div
        id="team-area"
        className="team-area bg-relative pd-top-110 pd-bottom-90 ad-o"
      >
        <Image
          className="top_image_bounce position-top-right"
          src={one}
          alt="img"
        />
        <div className="container">
          <div className="row justify-content-center items-center">
            <div className="col-lg-7 ">
              <div className="section-title text-center">
                <h6 className="sub-title">// Our Team</h6>
                <h2 className="title">Meet the Professionals</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {teamMembers.map((member) => (
              <div key={member.slug} className="col-lg-4 col-md-6">
                <div className="single-team-inner text-center">
                  <Image className="hover-img" src={twelve} alt="" />
                  <div className="thumb">
                    {member.img ? (
                      <Image
                        src={member.img}
                        alt={member.name}
                        width={400}
                        height={400}
                      />
                    ) : (
                      <div
                        className="d-flex align-items-center justify-content-center bg-light"
                        style={{ width: 400, height: 400 }}
                        aria-label={member.name}
                      >
                        <span className="display-1 text-muted">
                          {member.name.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="details">
                    <h4>
                      <Link href={`/team-details/${member.slug}`}>
                        {member.name}
                      </Link>
                    </h4>
                    <p>{member.role}</p>
                    <div className="social">
                      {member.linkedin ? (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="LinkedIn"
                        >
                          <i className="fab fa-linkedin" aria-hidden="true"></i>
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="call-to-action-area bg-relative pd-top-110 pd-bottom-120">
        <Image
          className="top_image_bounce position-top-right"
          src={fourteen}
          alt="img"
        />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-7 col-md-10 align-self-center">
              <div className="section-title mb-0 text-center">
                <h2 className="title">
                  Join us & shine the world with you skill
                </h2>
                <h5 className="small-title">
                  Our nearly <span>7,000+</span> committed staff members are
                  ready to help.
                </h5>
                <div className="btn-wrap">
                  <Link className="btn btn-black border-radius" href="/about">
                    Join Now !
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="quote-area pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 bg-black">
              <div className="media p-4 pt-lg-5 pb-lg-5">
                <div className="media-left pe-md-4 mb-3 mb-lg-0">
                  <Image src={fifteen} alt="img" />
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
                  <Image src={sixteen} alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamArea;
