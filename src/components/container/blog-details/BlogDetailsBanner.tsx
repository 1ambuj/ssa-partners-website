import Image from "next/image";
import Link from "next/link";

import One from "public/images/team/1.png";
import type { BlogPost } from "@/data/blogPost";
import { formatBlogDate } from "@/data/blogPost";

interface BlogDetailsBannerProps {
  post: BlogPost;
}

const BlogDetailsBanner = ({ post }: BlogDetailsBannerProps) => {
  return (
    <div className="blog-details-area pd-top-120 pd-bottom-120">
      <div className="container">
        <Link className="cat" href="/">
          {post.categories[0] || "Blog"}
        </Link>
        <h2>{post.title}</h2>
        <div className="author-meta">
          <Image src={One} alt="img" />
          <p>
            <span>{post.authorName || "SSA Team"} . </span>{" "}
            {formatBlogDate(post.date)}
            {post.commentsLabel ? ` . ${post.commentsLabel}` : ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsBanner;
