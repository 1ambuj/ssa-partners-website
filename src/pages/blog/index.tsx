import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import BlogList from "@/components/blog/BlogList";

const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const categories = [
    "All",
    "General",
    "News",
    "Tutorial",
    "Case Study",
    "Update",
  ];

  return (
    <Layout
      meta="Blog - SSA Chartered Accountants"
      header={true}
      sidebar={true}
      footer={true}
      bodyClass={true}
    >
      <div className="container mt-5 mb-5">
        <div className="row mb-4">
          <div className="col-lg-8">
            <h1 className="mb-2">Blog & Resources</h1>
            <p className="text-muted">
              Insights, updates, and resources from SSA Chartered Accountants
            </p>
          </div>
          <div className="col-lg-4">
            <div className="category-filter">
              <label className="form-label fw-bold">Filter by Category</label>
              <div className="btn-group d-flex flex-wrap" role="group">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    className={`btn btn-outline-primary btn-sm ${
                      selectedCategory === category ||
                      (category === "All" && !selectedCategory)
                        ? "active"
                        : ""
                    }`}
                    onClick={() =>
                      setSelectedCategory(category === "All" ? "" : category)
                    }
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <hr className="my-4" />

        <div className="blog-container">
          <BlogList
            category={selectedCategory || undefined}
          />
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;
