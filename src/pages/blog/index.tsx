import React from "react";
import Layout from "@/components/layout/Layout";
import BlogList from "@/components/blog/BlogList";

const BlogPage: React.FC = () => {
  return (
    <Layout
      meta="Blog - SSA Chartered Accountants"
      header={true}
      sidebar={true}
      footer={true}
      bodyClass={true}
    >
      <BlogList />
    </Layout>
  );
};

export default BlogPage;
