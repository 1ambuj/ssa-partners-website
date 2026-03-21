import React from "react";
import type { GetServerSideProps } from "next";
import { blogPosts } from "@/data/blogPost";

const BlogDetailsIndex = () => null;

export const getServerSideProps: GetServerSideProps = async () => {
  const first = blogPosts[0];
  return {
    redirect: {
      destination: first ? `/blog-details/${first.slug}` : "/blog",
      permanent: false,
    },
  };
};

export default BlogDetailsIndex;
