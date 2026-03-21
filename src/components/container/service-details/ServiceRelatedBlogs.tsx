/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import BlogGrid from "@/components/container/blog/BlogGrid";
import { getBlogsByServiceSlug } from "@/data/blogPost";

interface ServiceRelatedBlogsProps {
  serviceSlug: string;
  serviceTitle: string;
}

const ServiceRelatedBlogs = ({
  serviceSlug,
  serviceTitle,
}: ServiceRelatedBlogsProps) => {
  const posts = getBlogsByServiceSlug(serviceSlug);

  return (
    <div className="pd-top-90 pd-bottom-90">
      <BlogGrid
        posts={posts}
        title={`Blogs on ${serviceTitle}`}
        subTitle="// Related Articles"
        categoryLinkServiceSlug={serviceSlug}
        showViewAll
      />
    </div>
  );
};

export default ServiceRelatedBlogs;
