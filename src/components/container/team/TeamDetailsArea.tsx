/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Image from "next/image";
import Link from "next/link";

import Two from "public/images/about/4.png";
import Three from "public/images/service-icon/1.png";
import Four from "public/images/service-icon/2.png";
import Five from "public/images/service-icon/3.png";
import type { TeamMember } from "@/data/teamMembers";

interface TeamDetailsAreaProps {
  member: TeamMember;
}

const TeamDetailsArea = ({ member }: TeamDetailsAreaProps) => {
  return (
    <>
      <div className="banner-area bg-sky pd-bottom-120 banner-small-inner  text-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9">
              <h4
                className=""
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="300"
              >
                Team Details
              </h4>
              <h3
                className=""
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="400"
              >
                {member.name}
              </h3>
              <div
                className="scroll-down top_image_bounce "
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="500"
              >
                <Link href="#team-details-area">
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

      <div
        id="team-details-area"
        className="team-blog-area pd-top-120 pd-bottom-90"
      >
        <div className="container">
          <div className="team-details-page">
            <div className="row">
              <div className="col-lg-5 text-center">
                <div className="thumb mb-4 mb-lg-0">
                  {member.img ? (
                    <Image
                      src={member.img}
                      alt={member.name}
                      width={400}
                      height={480}
                    />
                  ) : (
                    <div
                      className="d-flex align-items-center justify-content-center bg-light"
                      style={{ width: 400, height: 480 }}
                    >
                      <span className="display-1 text-muted">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <div className="col-lg-7 align-self-center ps-xl-5">
                <h3 className="mb-2">{member.name}</h3>
                <span className="designation">{member.role}</span>
                <div className="details mt-4">
                  <h3>About Me</h3>
                  <p>{member.bio}</p>
                  {member.detailBio
                    .split(/\n\n+/)
                    .filter(Boolean)
                    .map((para, i) => (
                      <p key={i}>{para.trim()}</p>
                    ))}
                </div>
                {member.specialization && (
                  <div className="details mt-4">
                    <h3>Specialization</h3>
                    <p>{member.specialization}</p>
                  </div>
                )}
                {member.linkedin && (
                  <ul className="social-media style-base mt-4 pt-2">
                    <li>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                      >
                        <i className="fab fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="service-area bg-relative pd-bottom-90">
        <Image
          className="left_image_bounce position-top-right"
          src={Two}
          alt="img"
        />
        <div className="container">
          <div className="section-title ">
            <h6 className="sub-title">// Service</h6>
            <h2 className="title">My Service Here</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-service-inner">
                <div className="thumb">
                  <Image src={Three} alt="img" />
                </div>
                <div className="details">
                  <h4>
                    <Link href="/service-details">Insurance Tax</Link>
                  </h4>
                  <p>
                    Many desktop publishing packages and web page editors now
                    use Lorem Ipsum as their default model text, and a search
                    for &apos;lorem ipsum&apos; will{" "}
                  </p>
                  <Link className="case-view-btn" href="/case-study-details">
                    <span>Learn More</span> +
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-service-inner">
                <div className="thumb">
                  <Image src={Four} alt="img" />
                </div>
                <div className="details">
                  <h4>
                    <Link href="/service-details">Financial Planning</Link>
                  </h4>
                  <p>
                    Many desktop publishing packages and web page editors now
                    use Lorem Ipsum as their default model text, and a search
                    for &apos;lorem ipsum&apos; will{" "}
                  </p>
                  <Link className="case-view-btn" href="/case-study-details">
                    <span>Learn More</span> +
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-service-inner">
                <div className="thumb">
                  <Image src={Five} alt="img" />
                </div>
                <div className="details">
                  <h4>
                    <Link href="/service-details">Audit & Assurancy</Link>
                  </h4>
                  <p>
                    Many desktop publishing packages and web page editors now
                    use Lorem Ipsum as their default model text, and a search
                    for &apos;lorem ipsum&apos; will{" "}
                  </p>
                  <Link className="case-view-btn" href="/case-study-details">
                    <span>Learn More</span> +
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamDetailsArea;
