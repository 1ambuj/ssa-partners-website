"use client";

import React, { useState, useEffect } from "react";
import { useAuth } from "@/lib/AuthContext";
import { formatBlogDateTime, toJsDate } from "@/lib/blogDateUtils";
import { BlogService } from "@/lib/blogService";
import { BlogPost } from "@/lib/types";
import BlogModal from "./BlogModal";

const BlogDashboard: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const { currentUser, isAdmin } = useAuth();

  useEffect(() => {
    if (!isAdmin || !currentUser) return;
    setLoading(true);
    loadBlogs();
  }, [isAdmin, currentUser]);

  const loadBlogs = async () => {
    const allBlogs = await BlogService.getAllBlogs();
    const sortedBlogs = [...allBlogs].sort(
      (a, b) => toJsDate(b.publishDate).getTime() - toJsDate(a.publishDate).getTime(),
    );
    setBlogs(sortedBlogs);
    setLoading(false);
  };

  const handleNewBlog = () => {
    setEditingBlog(null);
    setShowModal(true);
  };

  const handleEditBlog = (blog: BlogPost) => {
    setEditingBlog(blog);
    setShowModal(true);
  };

  const handleDeleteBlog = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this blog post?")) {
      const result = await BlogService.deleteBlog(id);
      if (result.success) {
        setBlogs(blogs.filter((blog) => blog.id !== id));
      }
    }
  };

  const handleSaveBlog = async (blog: BlogPost) => {
    let result;
    if (editingBlog) {
      result = await BlogService.updateBlog(editingBlog.id!, blog);
    } else {
      result = await BlogService.createBlog(blog);
    }

    if (result.success) {
      setShowModal(false);
      setEditingBlog(null);
      await loadBlogs();
    }
  };

  if (!isAdmin || !currentUser) {
    return <div className="alert alert-danger">Access denied. Admin login required.</div>;
  }

  return (
    <div className="blog-dashboard p-4">
      <div className="admin-blog-shell">
        <div className="admin-blog-header d-flex flex-wrap justify-content-between align-items-center gap-3 mb-3">
          <h1 className="mb-0 admin-blog-title">Blog Management</h1>
          <button className="btn btn-base border-radius btn-sm admin-new-blog-btn" onClick={handleNewBlog}>
            + New Blog Post
          </button>
        </div>

        {loading ? (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <div className="table-responsive admin-blog-table-wrap">
            <table className="table table-hover admin-blog-table">
              <thead className="table-light">
                <tr>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {blogs.map((blog) => (
                  <tr key={blog.id}>
                    <td>
                      <strong>{blog.title}</strong>
                      <br />
                      <small className="text-muted">{blog.subtitle}</small>
                    </td>
                    <td>{blog.category}</td>
                    <td>
                      {blog.featured ? (
                        <span className="badge rounded-pill admin-status-badge admin-status-badge--featured">Featured</span>
                      ) : (
                        <span className="badge rounded-pill admin-status-badge admin-status-badge--standard">Standard</span>
                      )}
                    </td>
                    <td>{formatBlogDateTime(blog.publishDate) || "-"}</td>
                    <td>
                      <div className="admin-blog-actions">
                        <button
                          className="btn btn-sm btn-border-black border-radius"
                          onClick={() => handleEditBlog(blog)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-sm btn-danger border-radius"
                          onClick={() => handleDeleteBlog(blog.id!)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <BlogModal
        show={showModal}
        onHide={() => {
          setShowModal(false);
          setEditingBlog(null);
        }}
        blog={editingBlog}
        onSave={handleSaveBlog}
      />
    </div>
  );
};

export default BlogDashboard;
