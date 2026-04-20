import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";

import One from "public/images/blog/09.png";
import Two from "public/images/icon/7.png";
import Four from "public/images/team/1.png";
import Five from "public/images/team/2.png";
import BlogContactSection from "@/components/container/blog-details/BlogContactSection";
import type { BlogPost } from "@/data/blogPost";
import { blogPosts, formatBlogDate } from "@/data/blogPost";
import { useBlogPostComments } from "@/hooks/useBlogPostComments";
import { normalizeExternalUrl } from "@/lib/security";

interface BlogDetailsAreaProps {
  post: BlogPost;
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
  const recent = [...blogPosts]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 3);
  const commentPostKey = post.slug ? `static:${post.slug}` : "";
  const { comments, addComment, removeComment, canModerate } = useBlogPostComments(
    commentPostKey,
    post.slug,
  );

  const avatarImages = useMemo(() => [Four, Five] as const, []);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [message, setMessage] = useState("");
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error" | "network"
  >("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitStatus("idle");

    if (!name.trim() || !email.trim() || !message.trim()) {
      setSubmitStatus("error");
      return;
    }
    if (!commentPostKey) {
      setSubmitStatus("network");
      return;
    }

    const result = await addComment({
      name: name.trim(),
      email: email.trim(),
      website: website.trim() || undefined,
      message: message.trim(),
    });
    if (!result.success) {
      setSubmitStatus("network");
      return;
    }

    setSubmitStatus("success");
    setName("");
    setEmail("");
    setWebsite("");
    setMessage("");
  }

  async function handleDeleteComment(commentId: string) {
    if (!canModerate) return;
    if (!window.confirm("Delete this comment?")) return;
    const result = await removeComment(commentId);
    if (!result.success) {
      window.alert(
        result.message ||
          "Could not delete. Sign in as admin and deploy latest Firestore rules.",
      );
    }
  }
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
                          <div className="date blog-comment-date-row">
                            <span className="comment-reply-link">
                              {formatCommentDate(c.createdAt)}
                            </span>
                            {canModerate ? (
                              <button
                                type="button"
                                className="btn btn-sm btn-outline-danger border-radius blog-comment-delete"
                                onClick={() => void handleDeleteComment(c.id)}
                              >
                                Delete
                              </button>
                            ) : null}
                          </div>
                        </article>
                      </li>
                    )})
                  )}
                </ul>
              </div>
              <div className="row g-4 blog-comment-layout">
                <div className="col-12">
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
                        {submitStatus === "network" ? (
                          <div className="alert alert-danger mb-3" role="alert">
                            Could not save comment. Check your connection and Firestore rules, then try again.
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
