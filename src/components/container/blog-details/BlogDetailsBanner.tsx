import Image from "next/image";
import Link from "next/link";

import One from "public/images/team/1.png";
import { formatBlogDate } from "@/data/blogPost";
import type { BlogPost } from "@/data/blogPost";
import { formatBlogLongDate } from "@/lib/blogDateUtils";
import type { BlogPost as FirebaseBlogPost } from "@/lib/types";

export interface BlogDetailsBannerProps {
  title: string;
  category: string;
  dateLabel: string;
  authorName?: string;
  commentsLabel?: string;
}

const BlogDetailsBanner = ({
  title,
  category,
  dateLabel,
  authorName = "SSA Team",
  commentsLabel,
}: BlogDetailsBannerProps) => {
  return (
    <div className="blog-details-area pd-top-120 pd-bottom-120">
      <div className="container">
        <Link className="cat" href="/blog">
          {category || "Blog"}
        </Link>
        <h2>{title}</h2>
        <div className="author-meta">
          <Image src={One} alt="img" />
          <p>
            <span>{authorName} . </span> {dateLabel}
            {commentsLabel ? ` . ${commentsLabel}` : ""}
          </p>
        </div>
      </div>
    </div>
  );
};

/** Static markdown-style posts from `data/blogPost`. */
export const BlogDetailsBannerFromStatic = ({ post }: { post: BlogPost }) => (
  <BlogDetailsBanner
    title={post.title}
    category={post.categories[0] || "Blog"}
    dateLabel={formatBlogDate(post.date)}
    authorName={post.authorName}
    commentsLabel={post.commentsLabel}
  />
);

/** Firebase / CMS posts (`lib/types`). */
export const BlogDetailsBannerFromFirebase = ({ post }: { post: FirebaseBlogPost }) => (
  <BlogDetailsBanner
    title={post.title}
    category={post.category || "Blog"}
    dateLabel={formatBlogLongDate(post.publishDate)}
    authorName={post.author}
  />
);

export default BlogDetailsBanner;
