import React from "react";
import Image from "next/image";
import Link from "next/link";

import One from "public/images/blog/1.png";
import Up from "public/images/right-up.png";
import Two from "public/images/blog/2.png";
import Three from "public/images/blog/3.png";
import Four from "public/images/blog/4.png";
import Five from "public/images/blog/5.png";

import SearchIcon from "public/images/search.png";
import { blogPosts, formatBlogDate } from "@/data/blogPost";

const BlogNewsForm = () => {
  const posts = blogPosts.slice(0, 6);
  const images = [One, Two, Three, Four, Five, Three] as const;
  return (
    <div className="blog-area bg-relative bg-light pd-top-115">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="section-title text-center">
              <h2 className="title">Blog & News From Us!</h2>
              <div className="widget-search mt-4">
                <input type="text" placeholder="Search In Blog" />
                <Link href="/">
                  <Image src={SearchIcon} alt="img" />
                </Link>
              </div>
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
                  <p className="mb-0">{post.excerpt}</p>
                  <p className="date">
                    {formatBlogDate(post.date)}
                    {post.commentsLabel ? ` . ${post.commentsLabel}` : ""}
                  </p>
                </div>
                <div className="thumb">
                  <Image src={images[idx % images.length]} alt="img" />
                </div>
                <Link className="read-more" href={`/blog-details/${post.slug}`}>
                  Read More <Image src={Up} alt="img" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-2">
          <div className="paginations">
            <Link className="prev page-numbers" href="/">
              <i className="fa fa-angle-left"></i>
            </Link>
            <Link className="page-numbers" href="/">
              1
            </Link>
            <span className="page-numbers current">2</span>
            <Link className="page-numbers" href="/">
              3
            </Link>
            <Link className="next page-numbers" href="/">
              <i className="fa fa-angle-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogNewsForm;
