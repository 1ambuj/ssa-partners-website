"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

import DefaultDetail from "public/images/blog/09.png";
import Two from "public/images/icon/7.png";
import BlogContactSection from "@/components/container/blog-details/BlogContactSection";
import { BlogService } from "@/lib/blogService";
import { formatBlogLongDate, toJsDate } from "@/lib/blogDateUtils";
import type { BlogPost } from "@/lib/types";
import { sanitizeRichHtml } from "@/lib/security";

function getBlogRecentSortTime(post: BlogPost): number {
  const createdTime = toJsDate(post.createdAt).getTime();
  if (!Number.isNaN(createdTime)) return createdTime;

  const publishTime = toJsDate(post.publishDate).getTime();
  if (!Number.isNaN(publishTime)) return publishTime;

  const updatedTime = toJsDate(post.updatedAt).getTime();
  if (!Number.isNaN(updatedTime)) return updatedTime;

  return 0;
}

interface BlogFirebaseDetailsAreaProps {
  post: BlogPost;
}

const BlogFirebaseDetailsArea = ({ post }: BlogFirebaseDetailsAreaProps) => {
  const slug = post.slug || post.id || "";
  const [allBlogs, setAllBlogs] = useState<BlogPost[]>([]);
  const rowRef = useRef<HTMLDivElement | null>(null);
  const stickyShellRef = useRef<HTMLDivElement | null>(null);
  const stickyInnerRef = useRef<HTMLDivElement | null>(null);
  const [contactFixed, setContactFixed] = useState(false);
  const [contactWidth, setContactWidth] = useState<number | undefined>(undefined);
  const [contactHeight, setContactHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const list = await BlogService.getAllBlogs();
        if (!cancelled) setAllBlogs(list);
      } catch (e) {
        console.error("Failed to load recent blogs", e);
        if (!cancelled) setAllBlogs([]);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const topOffset = 100;
    const syncSticky = () => {
      const rowEl = rowRef.current;
      const shellEl = stickyShellRef.current;
      const innerEl = stickyInnerRef.current;
      if (!rowEl || !shellEl || !innerEl) return;

      if (window.innerWidth < 992) {
        setContactFixed(false);
        setContactWidth(undefined);
        setContactHeight(undefined);
        return;
      }

      const shellRect = shellEl.getBoundingClientRect();
      const rowRect = rowEl.getBoundingClientRect();
      const innerHeight = innerEl.offsetHeight;
      const shouldFix = shellRect.top <= topOffset && rowRect.bottom > topOffset + innerHeight + 16;

      setContactFixed(shouldFix);
      if (shouldFix) {
        setContactWidth(shellEl.clientWidth);
        setContactHeight(innerHeight);
      } else {
        setContactWidth(undefined);
        setContactHeight(undefined);
      }
    };

    syncSticky();
    window.addEventListener("scroll", syncSticky, { passive: true });
    window.addEventListener("resize", syncSticky);
    return () => {
      window.removeEventListener("scroll", syncSticky);
      window.removeEventListener("resize", syncSticky);
    };
  }, []);

  const recent = useMemo(() => {
    return [...allBlogs]
      .filter((b) => (b.slug || b.id) !== slug)
      .sort((a, b) => getBlogRecentSortTime(b) - getBlogRecentSortTime(a))
      .slice(0, 3);
  }, [allBlogs, slug]);

  const postHref = (b: BlogPost) => `/blog/${b.slug || b.id}`;

  return (
    <div className="blog-area pd-bottom-120 pd-top-60">
      <div className="container">
        <div className="row blog-layout-row" ref={rowRef}>
          <div className="col-xl-9 col-lg-8 blog-main-col">
            <div className="blog-details-page-content">
              <div className="single-blog-inner">
                <div className="thumb">
                  <Image
                    src={post.thumbnail || DefaultDetail}
                    alt={post.title}
                    width={800}
                    height={480}
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                </div>
                <div className="details">
                  <div
                    className="blog-dynamic-content"
                    dangerouslySetInnerHTML={{ __html: sanitizeRichHtml(post.content) }}
                  />
                  {post.subtitle?.trim() ? (
                    <blockquote>
                      <Image src={Two} alt="" />
                      <p>{post.subtitle}</p>
                      <Link href="/blog">{post.author || "SSA Team"}</Link>
                    </blockquote>
                  ) : null}
                  {/* <Image className="mt-4" src={Three} alt="" /> */}
                  <div className="tag-and-share">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="tags d-inline-block">
                          <strong>Tags : </strong>
                          <Link href={`/blog?cat=${encodeURIComponent(post.category)}`}>
                            {post.category}
                          </Link>
                        </div>
                      </div>
                      <div className="col-md-6 mt-3 mt-sm-0 text-sm-end align-self-center">
                        <div className="blog-share">
                          <strong>Share This : </strong>
                          <ul>
                            <li>
                              <Link href="/" aria-label="Facebook">
                                <i className="fab fa-facebook-f" aria-hidden="true"></i>
                              </Link>
                            </li>
                            <li>
                              <Link href="/" aria-label="Twitter">
                                <i className="fab fa-twitter" aria-hidden="true"></i>
                              </Link>
                            </li>
                            <li>
                              <Link href="/" aria-label="Instagram">
                                <i className="fab fa-instagram" aria-hidden="true"></i>
                              </Link>
                            </li>
                            <li>
                              <Link href="/" aria-label="LinkedIn">
                                <i className="fab fa-linkedin" aria-hidden="true"></i>
                              </Link>
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
                    <li key={p.id || p.slug}>
                      <div className="post-info">{formatBlogLongDate(p.publishDate)}</div>
                      <h6 className="title">
                        <Link href={postHref(p)}>{p.title}</Link>
                      </h6>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="blog-contact-sticky-shell"
                ref={stickyShellRef}
                style={contactFixed && contactHeight ? { minHeight: `${contactHeight}px` } : undefined}
              >
                <div
                  ref={stickyInnerRef}
                  className={`blog-contact-sticky-inner${contactFixed ? " is-fixed" : ""}`}
                  style={contactFixed && contactWidth ? { width: `${contactWidth}px` } : undefined}
                >
                  <BlogContactSection blogTitle={post.title} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="prev-next-post">
          <Link href="/blog" className="btn btn-base border-radius">
            ← Back to Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogFirebaseDetailsArea;
