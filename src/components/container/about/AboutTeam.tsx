/* eslint-disable react/jsx-no-comment-textnodes */
import Image from "next/image";
import Link from "next/link";
import { teamMembers } from "@/data/teamMembers";

import twelve from "public/images/about/12.png";

const AboutTeam = () => {
  return (
    <div className="team-area pd-top-115 pd-bottom-100 mb-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="section-title text-center">
              <h6 className="sub-title">// Our Team</h6>
              <h2 className="title">Meet the Professionals</h2>
              {/* <p className="content mb-4">
              The firm's partners are qualified Chartered Accountants registered with the Institute of Chartered
Accountants of India (ICAI), with professional experience in audit, taxation, advisory, and
regulatory compliance services.
              </p> */}
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
  );
};

export default AboutTeam;
