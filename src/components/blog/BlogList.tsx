"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useMemo, useState } from "react";

import One from "public/images/blog/1.png";
import Two from "public/images/blog/2.png";
import Three from "public/images/blog/3.png";
import Four from "public/images/blog/4.png";
import Five from "public/images/blog/5.png";
import Up from "public/images/right-up.png";
import SearchIcon from "public/images/search.png";
import { BlogService } from "@/lib/blogService";
import { formatBlogLongDate, toJsDate } from "@/lib/blogDateUtils";
import type { BlogPost } from "@/lib/types";

const POSTS_PER_PAGE = 12;
const images = [One, Two, Three, Four, Five, Three] as const;

interface BlogListProps {
  featured?: boolean;
  /** When set, fetches only this category from Firestore (efficient). Ignores URL `cat`. */
  category?: string;
  limit?: number;
}

const buildQuery = (params: { cat?: string; search?: string; page?: number }) => {
  const q = new URLSearchParams();
  if (params.cat) q.set("cat", params.cat);
  if (params.search) q.set("search", params.search);
  if (params.page && params.page > 1) q.set("page", String(params.page));
  const s = q.toString();
  return s ? `?${s}` : "";
};

function excerptText(html: string, subtitle: string, maxLen: number): string {
  const sub = subtitle?.trim();
  if (sub) return sub.length <= maxLen ? sub : `${sub.slice(0, maxLen)}…`;
  const t = html.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
  return t.length <= maxLen ? t : `${t.slice(0, maxLen)}…`;
}

const BlogList: React.FC<BlogListProps> = ({ featured = false, category: categoryProp, limit }) => {
  const router = useRouter();
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");

  const { cat, search, page } = router.query;
  const catStr = categoryProp || (typeof cat === "string" ? cat : "");
  const searchStr = typeof search === "string" ? search : "";
  const currentPage = Math.max(1, parseInt(String(page || "1"), 10) || 1);

  useEffect(() => {
    if (router.isReady && typeof search === "string") setSearchInput(search);
  }, [router.isReady, search]);

  const loadBlogs = useCallback(async () => {
    setLoading(true);
    let allBlogs: BlogPost[] = [];
    if (featured) {
      allBlogs = await BlogService.getFeaturedBlogs(limit ?? 10);
    } else if (categoryProp) {
      allBlogs = await BlogService.getBlogsByCategory(categoryProp);
    } else {
      allBlogs = await BlogService.getAllBlogs();
    }
    setBlogs(allBlogs);
    setLoading(false);
  }, [featured, categoryProp, limit]);

  useEffect(() => {
    loadBlogs();
  }, [loadBlogs]);

  const filteredPosts = useMemo(() => {
    let rows = [...blogs];
    if (!featured && !categoryProp) {
      if (catStr) {
        rows = rows.filter((b) => b.category === catStr);
      }
      if (searchStr.trim()) {
        const q = searchStr.toLowerCase();
        rows = rows.filter(
          (b) =>
            b.title.toLowerCase().includes(q) ||
            (b.subtitle || "").toLowerCase().includes(q) ||
            (b.content || "").toLowerCase().includes(q) ||
            (b.category || "").toLowerCase().includes(q),
        );
      }
    }
    rows.sort((a, b) => toJsDate(b.publishDate).getTime() - toJsDate(a.publishDate).getTime());
    return rows;
  }, [blogs, catStr, searchStr, featured, categoryProp]);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);

  const paginatedPosts = useMemo(() => {
    if (featured) {
      const cap = limit ?? filteredPosts.length;
      return filteredPosts.slice(0, cap);
    }
    if (limit != null) {
      return filteredPosts.slice(0, limit);
    }
    const start = (safePage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(start, start + POSTS_PER_PAGE);
  }, [filteredPosts, safePage, featured, limit]);

  const uniqueCategories = useMemo(() => {
    const s = new Set<string>();
    blogs.forEach((b) => {
      if (b.category) s.add(b.category);
    });
    return Array.from(s).sort();
  }, [blogs]);

  const categoryHref = (c: string | null) =>
    `/blog${buildQuery({
      cat: c || undefined,
      search: searchStr || undefined,
    })}`;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const term = searchInput.trim();
    router.push(`/blog${buildQuery({ search: term || undefined, cat: catStr || undefined })}`);
  };

  const postHref = (blog: BlogPost) => `/blog/${blog.slug || blog.id}`;

  const renderCard = (blog: BlogPost, idx: number) => (
    <div key={blog.id || blog.slug} className="col-lg-4 col-md-6">
      <div className="single-blog-inner">
        <div className="details">
          <div className="cat-wrap">
            {blog.category ? (
              <Link href={categoryHref(blog.category)}>{blog.category}</Link>
            ) : null}
          </div>
          <h4>
            <Link href={postHref(blog)}>{blog.title}</Link>
          </h4>
          <p className="mb-0">{excerptText(blog.content || "", blog.subtitle || "", 200)}</p>
          <p className="date">{formatBlogLongDate(blog.publishDate)}</p>
        </div>
        <div className="thumb">
          {blog.thumbnail ? (
            <Image
              src={blog.thumbnail}
              alt={blog.title}
              width={400}
              height={260}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          ) : (
            <Image src={images[idx % images.length]} alt={blog.title} />
          )}
        </div>
        <Link className="read-more" href={postHref(blog)}>
          Read More <Image src={Up} alt="" />
        </Link>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="blog-area bg-relative bg-light pd-top-115 pd-bottom-90">
        <div className="container">
          <div className="d-flex justify-content-center py-5">
            <div className="spinner-border text-secondary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (featured) {
    if (paginatedPosts.length === 0) return null;
    return <div className="row">{paginatedPosts.map((blog, idx) => renderCard(blog, idx))}</div>;
  }

  return (
    <div className="blog-area bg-relative bg-light pd-top-115">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="section-title text-center">
              <h2 className="title">
                {searchStr
                  ? "Search Results"
                  : catStr
                    ? `Articles: ${catStr}`
                    : "Blog & News From Us!"}
              </h2>
              <form
                className="widget-search mt-4 d-flex align-items-center justify-content-center"
                onSubmit={handleSearch}
                role="search"
              >
                <input
                  type="text"
                  placeholder="Search In Blog"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  aria-label="Search blog"
                />
                <button type="submit" className="widget-search-submit" aria-label="Search">
                  <Image src={SearchIcon} alt="" />
                </button>
              </form>
              {!categoryProp && uniqueCategories.length > 0 ? (
                <div className="mt-4 d-flex flex-wrap justify-content-center gap-2 align-items-center">
                  <span className="me-1" style={{ color: "#65645f", fontWeight: 500 }}>
                    Categories:
                  </span>
                  <Link
                    href={categoryHref(null)}
                    className={!catStr ? "read-more" : ""}
                    style={{ fontWeight: !catStr ? undefined : 500, color: !catStr ? undefined : "#65645f" }}
                  >
                    All
                  </Link>
                  {uniqueCategories.map((c) => (
                    <React.Fragment key={c}>
                      <span className="text-muted">|</span>
                      <Link
                        href={categoryHref(c)}
                        className={catStr === c ? "read-more" : ""}
                        style={{
                          fontWeight: catStr === c ? undefined : 500,
                          color: catStr === c ? undefined : "#65645f",
                        }}
                      >
                        {c}
                      </Link>
                    </React.Fragment>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="row">{paginatedPosts.map((blog, idx) => renderCard(blog, idx))}</div>
        {paginatedPosts.length === 0 && (
          <p className="text-center text-muted py-5">No articles found. Try a different search or category.</p>
        )}
        {paginatedPosts.length > 0 && !limit && totalPages > 1 ? (
          <div className="text-center mt-2 mb-5">
            <div className="paginations">
              {safePage > 1 ? (
                <Link
                  className="prev page-numbers"
                  href={`/blog${buildQuery({
                    cat: catStr || undefined,
                    search: searchStr || undefined,
                    page: safePage - 1,
                  })}`}
                >
                  <i className="fa fa-angle-left"></i>
                </Link>
              ) : (
                <span className="prev page-numbers disabled">
                  <i className="fa fa-angle-left"></i>
                </span>
              )}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) =>
                p === safePage ? (
                  <span key={p} className="page-numbers current">
                    {p}
                  </span>
                ) : (
                  <Link
                    key={p}
                    className="page-numbers"
                    href={`/blog${buildQuery({
                      cat: catStr || undefined,
                      search: searchStr || undefined,
                      page: p,
                    })}`}
                  >
                    {p}
                  </Link>
                ),
              )}
              {safePage < totalPages ? (
                <Link
                  className="next page-numbers"
                  href={`/blog${buildQuery({
                    cat: catStr || undefined,
                    search: searchStr || undefined,
                    page: safePage + 1,
                  })}`}
                >
                  <i className="fa fa-angle-right"></i>
                </Link>
              ) : (
                <span className="next page-numbers disabled">
                  <i className="fa fa-angle-right"></i>
                </span>
              )}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default BlogList;
