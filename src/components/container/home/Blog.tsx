import React from "react";
import BlogGrid from "@/components/container/blog/BlogGrid";
import { blogPosts } from "@/data/blogPost";

const Blog = () => {
  const posts = blogPosts.slice(0, 3);
  return (
    <div className="pd-top-115">
      <BlogGrid
        posts={posts}
        title="Attax News & Blog"
        subTitle="Latest Articles"
        useCategoryFilter
      />
    </div>
  );
};

export default Blog;
