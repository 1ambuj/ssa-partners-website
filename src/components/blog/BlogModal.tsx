"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { BlogPost } from "@/lib/types";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface BlogModalProps {
  show: boolean;
  onHide: () => void;
  blog: BlogPost | null;
  onSave: (blog: BlogPost) => Promise<void>;
}

const BlogModal: React.FC<BlogModalProps> = ({ show, onHide, blog, onSave }) => {
  const [formData, setFormData] = useState<BlogPost>({
    title: "",
    subtitle: "",
    content: "",
    category: "General",
    featured: false,
    publishDate: new Date(),
    createdAt: new Date(),
  });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (blog) {
      setFormData(blog);
    } else {
      setFormData({
        title: "",
        subtitle: "",
        content: "",
        category: "General",
        featured: false,
        publishDate: new Date(),
        createdAt: new Date(),
      });
    }
  }, [blog, show]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const handleContentChange = (value: string) => {
    setFormData({ ...formData, content: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title || !formData.content) {
      alert("Please fill in all required fields");
      return;
    }

    setSaving(true);
    try {
      await onSave(formData);
      onHide();
    } catch (error) {
      console.error("Error saving blog:", error);
      alert("Failed to save blog post");
    } finally {
      setSaving(false);
    }
  };

  if (!show) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="modal-backdrop fade show"
        style={{ display: "block" }}
        onClick={onHide}
      ></div>

      {/* Modal */}
      <div
        className="modal fade show"
        style={{ display: "block" }}
        tabIndex={-1}
        role="dialog"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                {blog ? "Edit Blog Post" : "Create New Blog Post"}
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={onHide}
                disabled={saving}
              ></button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="modal-body" style={{ maxHeight: "70vh", overflowY: "auto" }}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title *
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="subtitle" className="form-label">
                    Subtitle
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="subtitle"
                    name="subtitle"
                    value={formData.subtitle}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="category" className="form-label">
                    Category
                  </label>
                  <select
                    className="form-select"
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                  >
                    <option value="General">General</option>
                    <option value="News">News</option>
                    <option value="Tutorial">Tutorial</option>
                    <option value="Case Study">Case Study</option>
                    <option value="Update">Update</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="publishDate" className="form-label">
                    Publish Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="publishDate"
                    name="publishDate"
                    value={
                      formData.publishDate instanceof Date
                        ? formData.publishDate.toISOString().split("T")[0]
                        : new Date(formData.publishDate).toISOString().split("T")[0]
                    }
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        publishDate: new Date(e.target.value),
                      })
                    }
                  />
                </div>

                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="featured"
                    name="featured"
                    checked={formData.featured}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="featured">
                    Mark as Featured
                  </label>
                </div>

                <div className="mb-3">
                  <label htmlFor="content" className="form-label">
                    Content * (Use the rich text editor below)
                  </label>
                  <div style={{ backgroundColor: "#fff", marginTop: "10px" }}>
                    <ReactQuill
                      theme="snow"
                      value={formData.content}
                      onChange={handleContentChange}
                      placeholder="Write your blog content here..."
                      modules={{
                        toolbar: [
                          [{ header: [1, 2, 3, false] }],
                          ["bold", "italic", "underline", "strike"],
                          ["blockquote", "code-block"],
                          [{ list: "ordered" }, { list: "bullet" }],
                          [{ script: "sub" }, { script: "super" }],
                          [{ indent: "-1" }, { indent: "+1" }],
                          [{ size: ["small", false, "large", "huge"] }],
                          [{ color: [] }, { background: [] }],
                          [{ font: [] }],
                          [{ align: [] }],
                          ["link", "image", "video"],
                          ["clean"],
                        ],
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-border-black border-radius"
                  onClick={onHide}
                  disabled={saving}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-base border-radius"
                  disabled={saving}
                >
                  {saving ? "Saving..." : "Save Blog Post"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogModal;
