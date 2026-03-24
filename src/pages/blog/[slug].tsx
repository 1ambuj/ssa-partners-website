import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { BlogService } from "@/lib/blogService";
import { BlogPost } from "@/lib/types";

const BlogDetailPage: React.FC = () => {
  const router = useRouter();
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!router.isReady) return;

    const loadBlog = async () => {
      const { slug } = router.query;
      if (slug) {
        const blogPost = await BlogService.getBlogBySlug(slug as string);
        setBlog(blogPost);
      }
      setLoading(false);
    };

    loadBlog();
  }, [router.isReady, router.query]);

  if (loading) {
    return (
      <Layout
        meta="Blog Post - SSA"
        header={true}
        sidebar={true}
        footer={true}
        bodyClass={true}
      >
        <div className="container mt-5">
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!blog) {
    return (
      <Layout
        meta="Blog Not Found - SSA"
        header={true}
        sidebar={true}
        footer={true}
        bodyClass={true}
      >
        <div className="container mt-5">
          <div className="alert alert-warning">Blog post not found.</div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout
      meta={blog.title}
      header={true}
      sidebar={true}
      footer={true}
      bodyClass={true}
    >
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-lg-8">
            <article className="blog-detail">
              <header className="mb-4">
                <div className="mb-2">
                  <span className="badge bg-primary me-2">{blog.category}</span>
                  <small className="text-muted">
                    {new Date(blog.publishDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </small>
                </div>
                <h1 className="mb-2">{blog.title}</h1>
                <p className="lead text-muted">{blog.subtitle}</p>
              </header>

              <div
                className="blog-content"
                style={{ lineHeight: "1.8", fontSize: "16px" }}
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </article>

            <hr className="my-5" />

            <div className="blog-navigation">
              <Link
                href="/blog"
                className="btn btn-outline-primary"
              >
                ← Back to Blog
              </Link>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="sidebar">
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">Post Information</h5>
                  <p className="mb-2">
                    <strong>Published:</strong> <br />
                    {new Date(blog.publishDate).toLocaleDateString()}
                  </p>
                  <p className="mb-2">
                    <strong>Category:</strong> <br />
                    {blog.category}
                  </p>
                  {blog.author && (
                    <p className="mb-0">
                      <strong>Author:</strong> <br />
                      {blog.author}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogDetailPage;
