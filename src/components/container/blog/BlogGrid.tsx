/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import One from "public/images/blog/1.png";
import Two from "public/images/blog/2.png";
import Three from "public/images/blog/3.png";
import Four from "public/images/blog/4.png";
import Five from "public/images/blog/5.png";
import {
  formatBlogDate,
  type BlogPost,
} from "@/data/blogPost";

const blogImages = [One, Two, Three, Four, Five, Three] as const;

export interface BlogGridProps {
  posts: BlogPost[];
  title?: string;
  subTitle?: string;
  /** When set, category links point to /services/{serviceSlug} */
  categoryLinkServiceSlug?: string;
  /** When true, category links point to /blog?cat=CategoryName */
  useCategoryFilter?: boolean;
  showViewAll?: boolean;
}

const BlogGrid = ({
  posts,
  title = "Latest Articles",
  subTitle = "News & Blog",
  categoryLinkServiceSlug,
  useCategoryFilter = false,
  showViewAll = false,
}: BlogGridProps) => {
  if (posts.length === 0) return null;

  const categoryHref = (cat: string) => {
    if (categoryLinkServiceSlug) return `/services/${categoryLinkServiceSlug}`;
    if (useCategoryFilter) return `/blog?cat=${encodeURIComponent(cat)}`;
    return "/blog";
  };

  return (
    <div className="blog-area bg-relative">
      <div className="container">
        {(title || subTitle) && (
          <div className="section-title">
            <h6 className="sub-title">{subTitle}</h6>
            <h2 className="title">{title}</h2>
          </div>
        )}
        <div className="row">
          {posts.map((post, idx) => (
            <div key={post.slug} className="col-lg-4 col-md-6">
              <div className="single-blog-inner style-2">
                <div className="thumb">
                  <Image
                    src={blogImages[idx % blogImages.length]}
                    alt={post.title}
                  />
                </div>
                <div className="details">
                  <div className="cat-wrap mb-2">
                    <Link
                      className="color-main"
                      href={categoryHref(post.categories[0] || "News")}
                    >
                      {post.categories[0] || "News"}
                    </Link>
                  </div>
                  <h4>
                    <Link href={`/blog-details/${post.slug}`}>{post.title}</Link>
                  </h4>
                  <p className="date">{formatBlogDate(post.date)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {showViewAll && (
          <div className="text-center mt-4">
            <Link className="btn btn-base border-radius" href="/blog">
              View All Articles
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogGrid;
