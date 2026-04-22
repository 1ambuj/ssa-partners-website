/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Image from "next/image";
import Link from "next/link";

import One from "public/images/case-study/1.png";
import Two from "public/images/case-study/2.png";
import Three from "public/images/case-study/3.png";

const CaseStudyTwo = () => {
  const articles = [
    {
      category: "Direct Tax",
      title: "Key Changes in Income Tax Provisions — Finance Act 2025",
      date: "April 10, 2025",
      excerpt:
        "An overview of the amendments to the Income Tax Act, 1961 introduced under the Finance Act 2025, covering changes to deductions, rates, and compliance requirements for individuals and corporates.",
      href: "/blog-details/direct-taxation-overview",
      image: One,
    },
    {
      category: "GST",
      title: "GST Annual Return (GSTR-9) — Filing Requirements and Common Errors",
      date: "March 28, 2025",
      excerpt:
        "A reference guide to the GST annual return filing requirements under GSTR-9 and GSTR-9C, including common errors observed in reconciliation and documentation.",
      href: "/blog-details/indirect-taxation-basics",
      image: Two,
    },
    {
      category: "FEMA & RBI",
      title: "Setting Up a Liaison Office in India — Regulatory Requirements under FEMA",
      date: "February 17, 2025",
      excerpt:
        "An outline of the Reserve Bank of India and FEMA requirements for foreign entities seeking to establish a Liaison Office or Branch Office in India, including approval procedures and ongoing compliance obligations.",
      href: "/blog-details/nri-tax-planning-basics",
      image: Three,
    },
  ];

  return (
    <div className="case-study-area knowledge-case-modern pd-top-80 pd-bottom-90">
      <div className="container">
        <div className="section-title">
          <div className="row">
            <div className="col-lg-7 pe-xl-5 align-self-center">
              <h6 className="sub-title">// Knowledge Articles</h6>
              <h2 className="title">
                Regulatory updates &amp; professional articles
              </h2>
            </div>
            <div className="col-lg-5 align-self-end">
              <p className="content">
                Professional knowledge and updates on taxation, GST, and
                compliance regulations.
              </p>
              <div className="btn-wrap">
                <Link className="btn btn-base border-radius/ me-2" href="/blog">
                  View all articles →
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-4">
          {articles.map((article) => (
            <div key={article.title} className="col-lg-4 col-md-6 d-flex">
              <div className="single-case-study-inner h-100">
                <div className="thumb">
                  <Image src={article.image} alt={article.title} />
                  <div className="knowledge-hover-top">
                    <p className="knowledge-hover-meta">
                      {article.category} · {article.date}
                    </p>
                    <p className="knowledge-hover-text">{article.excerpt}</p>
                  </div>
                  <Link className="case-view-btn" href={article.href}>
                    <span>Read Article</span>
                  </Link>
                </div>
                <div className="details">
                  <p className="knowledge-category">{article.category}</p>
                  <h4>
                    <Link href={article.href}>{article.title}</Link>
                  </h4>
                  <p className="knowledge-date">{article.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyTwo;
