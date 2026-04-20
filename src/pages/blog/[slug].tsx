import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/layout/Layout";
import { BlogDetailsBannerFromFirebase } from "@/components/container/blog-details/BlogDetailsBanner";
import BlogFirebaseDetailsArea from "@/components/container/blog-details/BlogFirebaseDetailsArea";
import { BlogService } from "@/lib/blogService";
import { BlogPost } from "@/lib/types";

const BlogDetailPage: React.FC = () => {
  const router = useRouter();
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  useEffect(() => {
    if (!router.isReady) return;

    const loadBlog = async () => {
      try {
        setLoadError("");
        const { slug } = router.query;
        if (slug) {
          const blogPost = await BlogService.getBlogBySlug(slug as string);
          setBlog(blogPost);
        }
      } catch (e) {
        console.error("Failed to load blog detail", e);
        setBlog(null);
        setLoadError("Could not load this blog post right now.");
      } finally {
        setLoading(false);
      }
    };

    loadBlog();
  }, [router.isReady, router.query]);

  if (loading) {
    return (
      <Layout
        meta="Blog Post - SSA"
        header={false}
        sidebar={true}
        footer={true}
        bodyClass={0}
      >
        <div className="blog-area pd-top-120 pd-bottom-90">
          <div className="container">
            <div className="d-flex justify-content-center py-5">
              <div className="spinner-border text-secondary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
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
        header={false}
        sidebar={true}
        footer={true}
        bodyClass={0}
      >
        <div className="blog-details-area pd-top-120 pd-bottom-120">
          <div className="container">
            {loadError ? (
              <p className="alert alert-danger mb-0" role="alert">
                {loadError}
              </p>
            ) : (
              <p className="alert alert-warning mb-0" role="alert">
                Blog post not found.
              </p>
            )}
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout
      meta={blog.title}
      header={false}
      sidebar={true}
      footer={true}
      bodyClass={0}
    >
      <BlogDetailsBannerFromFirebase post={blog} />
      <BlogFirebaseDetailsArea post={blog} />
    </Layout>
  );
};

export default BlogDetailPage;
