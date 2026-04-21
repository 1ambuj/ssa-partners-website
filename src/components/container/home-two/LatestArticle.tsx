/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import SsaBrochureMark from "@/components/ui/SsaBrochureMark";

import Two from "public/images/about/5.png";
import Three from "public/images/about/7.png";

import Four from "public/images/blog/1.png";
import Six from "public/images/blog/2.png";
import Seven from "public/images/blog/3.png";
import Five from "public/images/right-up.png";
import Eight from "public/images/Picture6.png";
import { blogPosts, formatBlogDate } from "@/data/blogPost";

const LatestArticle = () => {
  const posts = blogPosts.slice(0, 3);
  const images = [Four, Six, Seven] as const;
  return (
    <>
      <div className="blog-area bg-relative bg-sky pd-top-115 pd-bottom-120">
        <SsaBrochureMark
          className="top_image_bounce position-top-right"
          size="lg"
          tone="blue"
        />
       
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center">
                <h6 className="sub-title">// Latest Articles</h6>
                <h2 className="title">Blog & News From Us!</h2>
                <p className="content mb-4">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour,
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {posts.map((post, idx) => (
              <div key={post.slug} className="col-lg-4 col-md-6">
                <div className="single-blog-inner">
                  <div className="details">
                    <div className="cat-wrap">
                      {(post.categories || []).slice(0, 2).map((cat) => (
                        <Link key={cat} href="/">
                          {cat}
                        </Link>
                      ))}
                    </div>
                    <h4>
                      <Link href={`/blog-details/${post.slug}`}>{post.title}</Link>
                    </h4>
                    <p className="date">
                      {formatBlogDate(post.date)}
                      {post.commentsLabel ? ` . ${post.commentsLabel}` : ""}
                    </p>
                  </div>
                  <div className="thumb">
                    <Image src={images[idx % images.length]} alt="img" />
                  </div>
                  <Link className="read-more" href={`/blog-details/${post.slug}`}>
                    Read More <Image src={Five} alt="img" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="btn-wrap text-center mb-5 ssa-home-latest-blog__image-wrap">
        <Link
          className="ssa-home-latest-blog__image-link"
          href="/blog"
          aria-label="Explore blog"
        >
          <Image className="ssa-home-latest-blog__image-link-icon" src={Eight} alt="Explore blog" />
          <span className="ssa-home-latest-blog__image-link-text">Explore Blog</span>
        </Link>
      </div>
    </>
  );
};

export default LatestArticle;
