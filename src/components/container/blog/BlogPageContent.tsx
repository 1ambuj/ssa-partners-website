/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import One from "public/images/blog/1.png";
import Two from "public/images/blog/2.png";
import Three from "public/images/blog/3.png";
import Four from "public/images/blog/4.png";
import Five from "public/images/blog/5.png";
import Up from "public/images/right-up.png";
import SearchIcon from "public/images/search.png";
import {
  blogPosts,
  formatBlogDate,
  getBlogsByCategory,
  searchBlogs,
  type BlogPost,
} from "@/data/blogPost";

const POSTS_PER_PAGE = 12;
const images = [One, Two, Three, Four, Five, Three] as const;

const buildQuery = (params: { cat?: string; search?: string; page?: number }) => {
  const q = new URLSearchParams();
  if (params.cat) q.set("cat", params.cat);
  if (params.search) q.set("search", params.search);
  if (params.page && params.page > 1) q.set("page", String(params.page));
  const s = q.toString();
  return s ? `?${s}` : "";
};

const BlogPageContent = () => {
  const router = useRouter();
  const { cat, search, page } = router.query;
  const [searchInput, setSearchInput] = useState(
    typeof search === "string" ? search : ""
  );

  const catStr = typeof cat === "string" ? cat : "";
  const searchStr = typeof search === "string" ? search : "";
  const currentPage = Math.max(1, parseInt(String(page || "1"), 10) || 1);

  const { filteredPosts, totalPages } = useMemo(() => {
    let posts: BlogPost[] = blogPosts;
    if (searchStr) {
      posts = searchBlogs(searchStr);
    } else if (catStr) {
      posts = getBlogsByCategory(catStr);
    }
    const total = posts.length;
    const totalPages = Math.max(1, Math.ceil(total / POSTS_PER_PAGE));
    const safePage = Math.min(Math.max(1, currentPage), totalPages);
    const start = (safePage - 1) * POSTS_PER_PAGE;
    const paginatedPosts = posts.slice(start, start + POSTS_PER_PAGE);
    return { filteredPosts: paginatedPosts, totalPages };
  }, [catStr, searchStr, currentPage]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const term = searchInput.trim();
    router.push(`/blog${buildQuery({ search: term || undefined, cat: catStr || undefined })}`);
  };

  const categoryHref = (category: string) =>
    `/blog${buildQuery({ cat: category })}`;

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
                <button
                  type="submit"
                  className="widget-search-submit"
                  aria-label="Search"
                >
                  <Image src={SearchIcon} alt="Search" />
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="row">
          {filteredPosts.map((post, idx) => (
            <div key={post.slug} className="col-lg-4 col-md-6">
              <div className="single-blog-inner">
                <div className="details">
                  <div className="cat-wrap">
                    {(post.categories || []).slice(0, 2).map((c) => (
                      <Link key={c} href={categoryHref(c)}>
                        {c}
                      </Link>
                    ))}
                  </div>
                  <h4>
                    <Link href={`/blog-details/${post.slug}`}>{post.title}</Link>
                  </h4>
                  <p className="mb-0">{post.excerpt}</p>
                  <p className="date">
                    {formatBlogDate(post.date)}
                    {post.commentsLabel ? ` . ${post.commentsLabel}` : ""}
                  </p>
                </div>
                <div className="thumb">
                  <Image src={images[idx % images.length]} alt={post.title} />
                </div>
                <Link className="read-more" href={`/blog-details/${post.slug}`}>
                  Read More <Image src={Up} alt="" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        {filteredPosts.length === 0 && (
          <p className="text-center text-muted py-5">
            No articles found. Try a different search or category.
          </p>
        )}
        {filteredPosts.length > 0 && totalPages > 1 && (
          <div className="text-center mt-2 mb-5">
            <div className="paginations">
              {currentPage > 1 ? (
                <Link
                  className="prev page-numbers"
                  href={`/blog${buildQuery({
                    cat: catStr || undefined,
                    search: searchStr || undefined,
                    page: currentPage - 1,
                  })}`}
                >
                  <i className="fa fa-angle-left"></i>
                </Link>
              ) : (
                <span className="prev page-numbers disabled">
                  <i className="fa fa-angle-left"></i>
                </span>
              )}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (p) =>
                  p === currentPage ? (
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
                  )
              )}
              {currentPage < totalPages ? (
                <Link
                  className="next page-numbers"
                  href={`/blog${buildQuery({
                    cat: catStr || undefined,
                    search: searchStr || undefined,
                    page: currentPage + 1,
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
        )}
      </div>
    </div>
  );
};

export default BlogPageContent;
