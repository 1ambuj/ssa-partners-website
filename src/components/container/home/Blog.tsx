import React from "react";
import BlogGrid from "@/components/container/blog/BlogGrid";
import { blogPosts, getBlogsByServiceSlug, type BlogPost } from "@/data/blogPost";

export interface BlogProps {
  /** Filter posts by service slug. If omitted, shows latest 3 posts. */
  serviceSlug?: string;
  /** Service title for heading when filtering by service */
  serviceTitle?: string;
  /** Custom posts. If provided, overrides serviceSlug filter and default. */
  posts?: BlogPost[];
  /** Section title. Default: "Attax News & Blog" */
  title?: string;
  /** Section subtitle. Default: "Latest Articles" */
  subTitle?: string;
  /** Show "View All Articles" button */
  showViewAll?: boolean;
  /** Use category filter links (for home). When false and serviceSlug set, links to service page */
  useCategoryFilter?: boolean;
  /** Add bottom padding (default: true for service details, false for home) */
  bottomPadding?: boolean;
}

const Blog = ({
  serviceSlug,
  serviceTitle,
  posts: postsProp,
  title,
  subTitle,
  showViewAll = false,
  useCategoryFilter,
  bottomPadding = true,
}: BlogProps) => {
  const posts = postsProp ?? (serviceSlug ? getBlogsByServiceSlug(serviceSlug) : blogPosts.slice(0, 3));

  if (posts.length === 0) return null;

  const effectiveTitle = title ?? (serviceTitle ? `Blogs on ${serviceTitle}` : "Attax News & Blog");
  const effectiveSubTitle = subTitle ?? (serviceSlug ? "// Related Articles" : "Latest Articles");
  const enableCategoryFilter = serviceSlug ? false : (useCategoryFilter ?? true);

  return (
    <div className={`blog-section-standard pd-top-115${bottomPadding ? " pd-bottom-90" : ""}`}>
      <BlogGrid
        posts={posts}
        title={effectiveTitle}
        subTitle={effectiveSubTitle}
        categoryLinkServiceSlug={serviceSlug}
        useCategoryFilter={enableCategoryFilter}
        showViewAll={showViewAll}
      />
    </div>
  );
};

export default Blog;
