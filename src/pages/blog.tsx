import React from "react";
import BlogBanner from "@/components/container/blog/BlogBanner";
import BlogVideoBanner from "@/components/container/blog/BlogVideoBanner";
import BlogPageContent from "@/components/container/blog/BlogPageContent";
import Layout from "@/components/layout/Layout";
import ContactClient from "@/components/container/contact/ContactClient";

const BlogPage = () => {
  return (
    <Layout
      meta="News & Blog - SS Partners Chartered Accountants"
      header={false}
      sidebar={true}
      footer={true}
      bodyClass={true}
    >
      <BlogBanner />
      <BlogVideoBanner />
      <BlogPageContent />
      {/* <ContactClient /> */}
    </Layout>
  );
};

export default BlogPage;
