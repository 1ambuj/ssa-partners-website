import React from "react";
import type { GetStaticPaths, GetStaticProps } from "next";
import Layout from "@/components/layout/Layout";
import BlogDetailsBanner from "@/components/container/blog-details/BlogDetailsBanner";
import BlogDetailsArea from "@/components/container/blog-details/BlogDetailsArea";
import { blogPosts, getBlogPostBySlug, type BlogPost } from "@/data/blogPost";

interface BlogDetailsPageProps {
  post: BlogPost;
}

const BlogDetailsPage = ({ post }: BlogDetailsPageProps) => {
  return (
    <Layout
      meta={`${post.title} - SSA Chartered Accountants`}
      header={false}
      sidebar={true}
      footer={true}
      bodyClass={0}
    >
      <BlogDetailsBanner post={post} />
      <BlogDetailsArea post={post} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = blogPosts.map((post) => ({
    params: { slug: post.slug },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<BlogDetailsPageProps> = async ({
  params,
}) => {
  const slug = params?.slug as string;
  const post = getBlogPostBySlug(slug);

  if (!post) return { notFound: true };

  return {
    props: { post },
  };
};

export default BlogDetailsPage;

