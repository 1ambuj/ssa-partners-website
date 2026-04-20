import Image from "next/image";
import Link from "next/link";

import SandeepImage from "public/images/team/3.png";
import { formatBlogDate } from "@/data/blogPost";
import type { BlogPost } from "@/data/blogPost";
import { formatBlogDateTime } from "@/lib/blogDateUtils";
import type { BlogPost as FirebaseBlogPost } from "@/lib/types";

export interface BlogDetailsBannerProps {
  title: string;
  category: string;
  dateLabel: string;
  authorName?: string;
  commentsLabel?: string;
  exploreTopics?: string[];
}

const BlogDetailsBanner = ({
  title,
  category,
  dateLabel,
  authorName = "SSA Team",
  commentsLabel,
  exploreTopics = [],
}: BlogDetailsBannerProps) => {
  return (
    <div className="blog-details-area pd-top-120 pd-bottom-120">
      <div className="container">
        <Link className="cat" href="/blog">
          {category || "Blog"}
        </Link>
        <h2>{title}</h2>
        <div className="author-meta">
          <div className="author-meta-left">
            <Image src={SandeepImage} alt={authorName} />
            <p>
              <span>{authorName} . </span> {dateLabel}
              {commentsLabel ? ` . ${commentsLabel}` : ""}
            </p>
          </div>
          <div className="author-meta-right">
            <span className="topic-label">Explore Topics</span>
            <div className="topic-chip-list">
              <Link href="/blog" className="topic-chip">
                All
              </Link>
              {(exploreTopics.length ? exploreTopics : [category || "Blog"]).map((topic) => (
                <Link
                  key={topic}
                  href={`/blog?cat=${encodeURIComponent(topic)}`}
                  className="topic-chip"
                >
                  {topic}
                </Link>
              ))}
            </div>
          </div>
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
    exploreTopics={["Advisory", "BPO", "GST", "LPO", "Other", "Taxation"]}
  />
);

/** Firebase / CMS posts (`lib/types`). */
export const BlogDetailsBannerFromFirebase = ({ post }: { post: FirebaseBlogPost }) => (
  <BlogDetailsBanner
    title={post.title}
    category={post.category || "Blog"}
    dateLabel={formatBlogDateTime(post.publishDate)}
    authorName={post.author || "Sandeep Singla"}
    exploreTopics={["Advisory", "BPO", "GST", "LPO", "Other", "Taxation"]}
  />
);

export default BlogDetailsBanner;
