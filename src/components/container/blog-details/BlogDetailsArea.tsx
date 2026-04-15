import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import One from "public/images/blog/09.png";
import Two from "public/images/icon/7.png";
import Three from "public/images/blog/10.png";
import Four from "public/images/team/1.png";
import Five from "public/images/team/2.png";
import Six from "public/images/widget/1.png";
import Seven from "public/images/widget/2.png";
import Eight from "public/images/widget/3.png";
import type { BlogPost } from "@/data/blogPost";
import { blogPosts, formatBlogDate } from "@/data/blogPost";
import { normalizeExternalUrl } from "@/lib/security";

interface BlogDetailsAreaProps {
  post: BlogPost;
}

type BlogComment = {
  id: string;
  name: string;
  email: string;
  website?: string;
  message: string;
  createdAt: string; // ISO string
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

const BlogDetailsArea = ({ post }: BlogDetailsAreaProps) => {
  const categories = Array.from(
    new Set(blogPosts.flatMap((p) => p.categories || [])),
  );
  const recent = [...blogPosts]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 3);
  const recentImages = [Six, Seven, Eight] as const;
  const tagCandidates = post.tags?.length ? post.tags : post.categories;

  const avatarImages = useMemo(() => [Four, Five] as const, []);
  const [comments, setComments] = useState<BlogComment[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [message, setMessage] = useState("");
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = window.localStorage.getItem(commentsStorageKey(post.slug));
      if (!raw) {
        setComments([]);
        return;
      }
      const parsed = JSON.parse(raw) as BlogComment[];
      setComments(Array.isArray(parsed) ? parsed : []);
    } catch {
      setComments([]);
    }
  }, [post.slug]);

  function persist(next: BlogComment[]) {
    setComments(next);
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(
        commentsStorageKey(post.slug),
        JSON.stringify(next),
      );
    } catch {
      // ignore
    }
  }

  function onSubmit(e: React.FormEvent) {
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
  }
  return (
    <div className="blog-area pd-bottom-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
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
                  <Image className="mt-4" src={Three} alt="img" />
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
                              <Link href="/">
                                <i
                                  className="fab fa-facebook-f"
                                  aria-hidden="true"
                                ></i>
                              </Link>
                            </li>
                            <li>
                              <Link href="/">
                                <i
                                  className="fab fa-twitter"
                                  aria-hidden="true"
                                ></i>
                              </Link>
                            </li>
                            <li>
                              <Link href="/">
                                <i
                                  className="fab fa-instagram"
                                  aria-hidden="true"
                                ></i>
                              </Link>
                            </li>
                            <li>
                              <Link href="/">
                                <i
                                  className="fab fa-linkedin"
                                  aria-hidden="true"
                                ></i>
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
                          <p className="mb-0">
                            No comments yet. Be the first to comment.
                          </p>
                        </div>
                      </article>
                    </li>
                  ) : (
                    comments.map((c, idx) => {
                      const safeWebsite = normalizeExternalUrl(c.website);
                      return (
                      <li key={c.id} className="comment">
                        <article className="comment-body">
                          <footer className="comment-meta">
                            <div className="comment-author vcard">
                              <Image
                                className="avatar"
                                alt=""
                                src={avatarImages[idx % avatarImages.length]}
                              />
                              {safeWebsite ? (
                                <a
                                  href={safeWebsite}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="ms-2"
                                >
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
                            <span className="comment-reply-link">
                              {formatCommentDate(c.createdAt)}
                            </span>
                          </div>
                        </article>
                      </li>
                    )})
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
                    <button className="btn btn-black border-radius">
                      Post Comment
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div className="td-sidebar">
              <div className="widget widget_search">
                <form className="search-form">
                  <div className="form-group">
                    <input type="text" placeholder="Search" />
                  </div>
                  <button className="submit-btn" type="submit">
                    <i className="fa fa-search"></i>
                  </button>
                </form>
              </div>
              <div className="widget widget_catagory">
                <h4 className="widget-title">Catagory</h4>
                <ul className="catagory-items">
                  {categories.map((cat) => (
                    <li key={cat}>
                      <Link href="/blog">
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
                    <li key={p.slug}>
                      <div className="media">
                        <div className="media-left">
                          <Image
                            src={recentImages[idx % recentImages.length]}
                            alt="blog"
                          />
                        </div>
                        <div className="media-body align-self-center">
                          <div className="post-info">{formatBlogDate(p.date)}</div>
                          <h6 className="title">
                            <Link href={`/blog-details/${p.slug}`}>{p.title}</Link>
                          </h6>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="widget widget_tag_cloud mb-0">
                <h4 className="widget-title">Tags</h4>
                <div className="tagcloud">
                  {(tagCandidates || []).slice(0, 12).map((t) => (
                    <Link key={t} href="/">
                      {t}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsArea;
