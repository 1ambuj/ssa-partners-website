/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import One from "public/images/blog/1.png";
import Two from "public/images/blog/2.png";
import Three from "public/images/blog/3.png";
import {
  getUniqueCategories,
  getRecentPosts,
  formatBlogDate,
} from "@/data/blogPost";

const recentImages = [One, Two, Three] as const;

const BlogSidebar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const categories = getUniqueCategories();
  const recentPosts = getRecentPosts(5);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/blog?search=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  return (
    <aside className="td-sidebar">
      <div className="widget widget_search">
        <h4 className="widget-title">Search</h4>
        <form
          className="search-form"
          onSubmit={handleSearch}
          role="search"
        >
          <div className="form-group">
            <input
              type="text"
              placeholder="Search in blog..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search blog"
            />
            <button type="submit" aria-label="Search">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </form>
      </div>

      <div className="widget widget_catagory">
        <h4 className="widget-title">Categories</h4>
        <ul>
          {categories.map((cat) => (
            <li key={cat}>
              <Link href={`/blog?cat=${encodeURIComponent(cat)}`}>
                {cat}
                <i className="fa fa-angle-right"></i>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="widget widget-recent-post">
        <h4 className="widget-title">Recent Posts</h4>
        <ul>
          {recentPosts.map((post, idx) => (
            <li key={post.slug}>
              <div className="media">
                <div className="media-left">
                  <Image
                    src={recentImages[idx % recentImages.length]}
                    alt={post.title}
                    width={70}
                    height={70}
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="media-body">
                  <Link href={`/blog-details/${post.slug}`} className="title">
                    {post.title}
                  </Link>
                  <div className="post-info">
                    <span>{formatBlogDate(post.date)}</span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default BlogSidebar;
