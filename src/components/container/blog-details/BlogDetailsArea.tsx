import Link from "next/link";
import Image from "next/image";

import One from "public/images/blog/09.png";
import Two from "public/images/icon/7.png";
import BlogContactSection from "@/components/container/blog-details/BlogContactSection";
import type { BlogPost } from "@/data/blogPost";
import { blogPosts, formatBlogDate } from "@/data/blogPost";

interface BlogDetailsAreaProps {
  post: BlogPost;
}

const BlogDetailsArea = ({ post }: BlogDetailsAreaProps) => {
  const recent = [...blogPosts]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 3);
  const postUrl = typeof window !== "undefined" ? window.location.href : `/blog-details/${post.slug}`;
  const encodedUrl = encodeURIComponent(postUrl);
  const encodedTitle = encodeURIComponent(post.title);
  return (
    <div className="blog-area pd-bottom-120">
      <div className="container">
        <div className="row blog-layout-row">
          <div className="col-xl-9 col-lg-8 blog-main-col">
            <div className="blog-details-page-content">
              <div className="single-blog-inner">
                <div className="thumb">
                  <Image src={One} alt="img" />
                </div>
                <div className="details">
                  {post.content.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                  <blockquote>
                    <Image src={Two} alt="img" />
                    <p>
                      {post.excerpt}
                    </p>
                    <Link href="/">{post.authorName || "SSA Team"}</Link>
                  </blockquote>
                  {/* Decorative secondary image removed intentionally */}
                  <h4 className="mt-5">{post.title}</h4>
                  <div className="tag-and-share">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="tags d-inline-block">
                          <strong>Tags : </strong>
                          {(post.tags || post.categories).slice(0, 3).map((t, i) => (
                            <Link key={t} href="/">
                              {t}
                              {i < Math.min((post.tags || post.categories).length, 3) - 1 ? "," : ""}
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div className="col-md-6 mt-3 mt-sm-0 text-sm-end align-self-center">
                        <div className="blog-share">
                          <strong>Share This : </strong>
                          <ul>
                            <li>
                              <a
                                href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Share on Facebook"
                              >
                                <i
                                  className="fab fa-facebook-f"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Share on Twitter"
                              >
                                <i
                                  className="fab fa-twitter"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Share on WhatsApp"
                              >
                                <i
                                  className="fab fa-whatsapp"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Share on LinkedIn"
                              >
                                <i
                                  className="fab fa-linkedin"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-12 blog-side-col">
            <div className="td-sidebar blog-modern-sidebar">
              <div className="widget widget-recent-post">
                <h4 className="widget-title">Latest Blog</h4>
                <ul className="blog-latest-clean-list">
                  {recent.map((p) => (
                    <li key={p.slug}>
                      <div className="post-info">{formatBlogDate(p.date)}</div>
                      <h6 className="title">
                        <Link href={`/blog-details/${p.slug}`}>{p.title}</Link>
                      </h6>
                    </li>
                  ))}
                </ul>
              </div>
              <BlogContactSection blogTitle={post.title} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsArea;
