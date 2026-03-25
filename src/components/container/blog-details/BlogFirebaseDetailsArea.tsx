"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";

import DefaultDetail from "public/images/blog/09.png";
import Two from "public/images/icon/7.png";
import Three from "public/images/blog/10.png";
import Six from "public/images/widget/1.png";
import Seven from "public/images/widget/2.png";
import Eight from "public/images/widget/3.png";
import { BlogService } from "@/lib/blogService";
import { formatBlogLongDate, toJsDate } from "@/lib/blogDateUtils";
import type { BlogPost } from "@/lib/types";

const recentImages = [Six, Seven, Eight] as const;

type BlogComment = {
  id: string;
  name: string;
  email: string;
  website?: string;
  message: string;
  createdAt: string;
};

function commentsStorageKey(slug: string) {
  return `ssa_blog_comments:${slug}`;
}

function formatCommentDate(iso: string) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
}

interface BlogFirebaseDetailsAreaProps {
  post: BlogPost;
}

const BlogFirebaseDetailsArea = ({ post }: BlogFirebaseDetailsAreaProps) => {
  const slug = post.slug || post.id || "";
  const [allBlogs, setAllBlogs] = useState<BlogPost[]>([]);
  const [comments, setComments] = useState<BlogComment[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [message, setMessage] = useState("");
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const list = await BlogService.getAllBlogs();
      if (!cancelled) setAllBlogs(list);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const categories = useMemo(() => {
    const s = new Set<string>();
    allBlogs.forEach((b) => {
      if (b.category) s.add(b.category);
    });
    return Array.from(s).sort();
  }, [allBlogs]);

  const recent = useMemo(() => {
    return [...allBlogs]
      .filter((b) => (b.slug || b.id) !== slug)
      .sort((a, b) => toJsDate(b.publishDate).getTime() - toJsDate(a.publishDate).getTime())
      .slice(0, 3);
  }, [allBlogs, slug]);

  useEffect(() => {
    if (typeof window === "undefined" || !slug) return;
    try {
      const raw = window.localStorage.getItem(commentsStorageKey(slug));
      if (!raw) {
        setComments([]);
        return;
      }
      const parsed = JSON.parse(raw) as BlogComment[];
      setComments(Array.isArray(parsed) ? parsed : []);
    } catch {
      setComments([]);
    }
  }, [slug]);

  const persist = useCallback(
    (next: BlogComment[]) => {
      setComments(next);
      if (typeof window === "undefined" || !slug) return;
      try {
        window.localStorage.setItem(commentsStorageKey(slug), JSON.stringify(next));
      } catch {
        // ignore
      }
    },
    [slug],
  );

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("idle");
    if (!name.trim() || !email.trim() || !message.trim()) {
      setSubmitStatus("error");
      return;
    }
    const next: BlogComment[] = [
      {
        id: `${Date.now()}`,
        name: name.trim(),
        email: email.trim(),
        website: website.trim() || undefined,
        message: message.trim(),
        createdAt: new Date().toISOString(),
      },
      ...comments,
    ];
    persist(next);
    setSubmitStatus("success");
    setName("");
    setEmail("");
    setWebsite("");
    setMessage("");
  };

  const postHref = (b: BlogPost) => `/blog/${b.slug || b.id}`;

  return (
    <div className="blog-area pd-bottom-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
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
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                  {post.subtitle?.trim() ? (
                    <blockquote>
                      <Image src={Two} alt="" />
                      <p>{post.subtitle}</p>
                      <Link href="/blog">{post.author || "SSA Team"}</Link>
                    </blockquote>
                  ) : null}
                  <Image className="mt-4" src={Three} alt="" />
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
              <div className="blog-comment">
                <div className="mb-3">
                  <h3>
                    {comments.length} {comments.length === 1 ? "Comment" : "Comments"}
                  </h3>
                </div>
                <ul className="comment-list">
                  {comments.length === 0 ? (
                    <li className="comment">
                      <article className="comment-body">
                        <div className="comment-content">
                          <p className="mb-0">No comments yet. Be the first to comment.</p>
                        </div>
                      </article>
                    </li>
                  ) : (
                    comments.map((c) => (
                      <li key={c.id} className="comment">
                        <article className="comment-body">
                          <footer className="comment-meta">
                            <div className="comment-author vcard">
                              {c.website ? (
                                <a href={c.website} target="_blank" rel="noopener noreferrer" className="ms-2">
                                  {c.name}
                                </a>
                              ) : (
                                <span className="ms-2">{c.name}</span>
                              )}
                            </div>
                          </footer>
                          <div className="comment-content">
                            <p className="mb-0">{c.message}</p>
                          </div>
                          <div className="date">
                            <span className="comment-reply-link">{formatCommentDate(c.createdAt)}</span>
                          </div>
                        </article>
                      </li>
                    ))
                  )}
                </ul>
              </div>
              <form className="blog-comment-form" onSubmit={onSubmit}>
                <div className="mb-3">
                  <h3>Leave a Reply</h3>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="single-input-inner">
                      <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="single-input-inner">
                      <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="single-input-inner">
                      <input
                        type="url"
                        placeholder="Website (optional)"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="single-input-inner">
                      <textarea
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-12">
                    {submitStatus === "success" ? (
                      <div className="alert alert-success mb-3" role="status">
                        Comment posted.
                      </div>
                    ) : null}
                    {submitStatus === "error" ? (
                      <div className="alert alert-danger mb-3" role="alert">
                        Please fill name, email, and message.
                      </div>
                    ) : null}
                    <button type="submit" className="btn btn-black border-radius">
                      Post Comment
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div className="td-sidebar">
              <div className="widget widget_catagory">
                <h4 className="widget-title">Catagory</h4>
                <ul className="catagory-items">
                  <li key="all">
                    <Link href="/blog">
                      <i className="fa fa-angle-double-right"></i> All
                    </Link>
                  </li>
                  {categories.map((cat) => (
                    <li key={cat}>
                      <Link href={`/blog?cat=${encodeURIComponent(cat)}`}>
                        <i className="fa fa-angle-double-right"></i> {cat}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="widget widget-recent-post">
                <h4 className="widget-title">Recent News</h4>
                <ul>
                  {recent.map((p, idx) => (
                    <li key={p.id || p.slug}>
                      <div className="media">
                        <div className="media-left">
                          {p.thumbnail ? (
                            <Image
                              src={p.thumbnail}
                              alt=""
                              width={80}
                              height={80}
                              style={{ objectFit: "cover" }}
                            />
                          ) : (
                            <Image src={recentImages[idx % recentImages.length]} alt="" width={80} height={80} />
                          )}
                        </div>
                        <div className="media-body align-self-center">
                          <div className="post-info">{formatBlogLongDate(p.publishDate)}</div>
                          <h6 className="title">
                            <Link href={postHref(p)}>{p.title}</Link>
                          </h6>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
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
