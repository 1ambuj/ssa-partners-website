"use client";

import React, { useState, useEffect, useCallback } from "react";
import { BlogService } from "@/lib/blogService";
import { BlogPost } from "@/lib/types";
import Link from "next/link";

interface BlogListProps {
  featured?: boolean;
  category?: string;
  limit?: number;
}

const BlogList: React.FC<BlogListProps> = ({ featured = false, category, limit }) => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  const loadBlogs = useCallback(async () => {
    setLoading(true);
    let allBlogs: BlogPost[] = [];

    if (featured) {
      allBlogs = await BlogService.getFeaturedBlogs(limit || 3);
    } else if (category) {
      allBlogs = await BlogService.getBlogsByCategory(category);
    } else {
      allBlogs = await BlogService.getAllBlogs();
    }

    if (limit && !featured) {
      allBlogs = allBlogs.slice(0, limit);
    }

    setBlogs(allBlogs);
    setLoading(false);
  }, [featured, category, limit]);

  useEffect(() => {
    loadBlogs();
  }, [loadBlogs]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (blogs.length === 0) {
    return (
      <div className="alert alert-info" role="alert">
        No blog posts available.
      </div>
    );
  }

  return (
    <div className="blog-list">
      <div className="row g-4">
        {blogs.map((blog) => (
          <div key={blog.id} className="col-md-6 col-lg-4">
            <div className="blog-card card h-100 shadow-sm border" style={{ overflow: "hidden", transition: "all 0.3s ease" }}>
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <span className="badge rounded-pill px-3 py-1" style={{ background: "var(--heading-color)", color: "#fff" }}>{blog.category}</span>
                  {blog.featured && <span className="badge rounded-pill px-3 py-1" style={{ background: "var(--main-color)", color: "#fff" }}>Featured</span>}
                </div>
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text text-muted small">{blog.subtitle}</p>
                <div
                  className="blog-excerpt text-muted"
                  style={{
                    fontSize: "14px",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: blog.content
                      .replace(/<[^>]*>/g, "")
                      .substring(0, 150) + "...",
                  }}
                />
              </div>
              <div className="card-footer border-top-0 bg-transparent">
                <div className="d-flex justify-content-between align-items-center">
                  <small className="text-muted">
                    {new Date(blog.publishDate).toLocaleDateString()}
                  </small>
                  <Link href={`/blog/${blog.slug}`} className="btn btn-sm btn-border-black border-radius">
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
