import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { useAuth } from "@/lib/AuthContext";
import { siteConfig } from "@/data/siteConfig";

const SERVICES_LINKS = [
  { href: "/services/audit", label: "Audit & Assurance" },
  { href: "/services/advisory", label: "Advisory" },
  { href: "/services/taxation", label: "Taxation" },
  { href: "/services/gst", label: "GST" },
  { href: "/services/nri", label: "Services for non-resident" },
  { href: "/services/bpo", label: "Business Process Outsourcing" },
];

const HeaderSSA = () => {
  const router = useRouter();
  const { isAdmin, isPartner, isClient, userData, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [servicesPinned, setServicesPinned] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const servicesCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isLoggedIn = isAdmin || isPartner || isClient;
  const displayRole = isAdmin ? "Admin" : isPartner ? "Partner" : isClient ? "Client" : null;

  function openServicesWithCancel() {
    if (servicesCloseTimer.current) {
      clearTimeout(servicesCloseTimer.current);
      servicesCloseTimer.current = null;
    }
    setServicesOpen(true);
  }

  function closeServicesWithDelay() {
    if (servicesPinned) return;
    if (servicesCloseTimer.current) clearTimeout(servicesCloseTimer.current);
    servicesCloseTimer.current = setTimeout(() => {
      setServicesOpen(false);
      setServicesPinned(false);
      servicesCloseTimer.current = null;
    }, 150);
  }

  function onServicesClick() {
    if (servicesCloseTimer.current) {
      clearTimeout(servicesCloseTimer.current);
      servicesCloseTimer.current = null;
    }
    if (!servicesOpen) {
      setServicesOpen(true);
      setServicesPinned(true);
      return;
    }
    if (servicesPinned) {
      setServicesOpen(false);
      setServicesPinned(false);
      return;
    }
    setServicesPinned(true);
  }

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(e.target as Node)
      ) {
        setServicesOpen(false);
        setServicesPinned(false);
        if (servicesCloseTimer.current) {
          clearTimeout(servicesCloseTimer.current);
          servicesCloseTimer.current = null;
        }
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    setServicesOpen(false);
    setServicesPinned(false);
    setMobileOpen(false);
  }, [router.pathname]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="ssa-header">
      <div className="container">
        <div className="ssa-header-inner">
          <Link href="/" className="ssa-logo">
            <span className="ssa-logo-box">
              <Image
                src={siteConfig.logo}
                alt={`${siteConfig.shortName} Logo`}
                width={40}
                height={40}
              />
            </span>
            <div className="ssa-logo-text">
              <div className="ssa-logo-title">SSA</div>
              <div className="ssa-logo-sub">Chartered Accountants</div>
            </div>
          </Link>

          <nav className="ssa-nav">
            <Link href="/index-two" className="ssa-nav-link">
              Home
            </Link>
            <Link href="/about" className="ssa-nav-link">
              About
            </Link>

            <div
              ref={servicesRef}
              className="ssa-services-wrap"
              onMouseEnter={openServicesWithCancel}
              onMouseLeave={closeServicesWithDelay}
            >
              <button
                type="button"
                onClick={onServicesClick}
                className={`ssa-services-btn ${servicesOpen ? "active" : ""}`}
                aria-expanded={servicesOpen}
                aria-haspopup="menu"
              >
                <span>Services</span>
                <span className="ssa-services-plus">
                  {servicesOpen ? "−" : "+"}
                </span>
              </button>
              <div
                className={`ssa-services-dropdown ${
                  servicesOpen ? "visible" : "hidden"
                }`}
                onMouseEnter={openServicesWithCancel}
                onMouseLeave={closeServicesWithDelay}
                aria-hidden={!servicesOpen}
              >
                {SERVICES_LINKS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => {
                      setServicesOpen(false);
                      setServicesPinned(false);
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/service" className="ssa-nav-link">
              Services
            </Link>
            <Link href="/blog" className="ssa-nav-link">
              Blog
            </Link>
            <Link href="/contact" className="ssa-nav-link">
              Contact
            </Link>
            <Link href="/carrer" className="ssa-nav-link">
              Careers
            </Link>
            {isLoggedIn ? (
              <div className="ssa-nav-link d-flex align-items-center gap-2">
                <span className="small text-muted">{displayRole}</span>
                <Link href={isAdmin ? "/admin/blog-dashboard" : isPartner ? "/partner-dashboard" : "/feedback"} className="ssa-nav-link">
                  Dashboard
                </Link>
                <button
                  type="button"
                  className="btn btn-link p-0 border-0 text-decoration-none ssa-nav-link"
                  onClick={() => logout()}
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link href="/login" className="ssa-nav-link">
                Login
              </Link>
            )}
          </nav>

          <button
            type="button"
            className="ssa-mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Open menu"
          >
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="ssa-mobile-menu open">
          <div className="ssa-mobile-menu-inner">
            <Link href="/" onClick={closeMobile}>
              Home
            </Link>
            <Link href="/service" onClick={closeMobile}>
              Services
            </Link>
            <Link href="/about" onClick={closeMobile}>
              About
            </Link>
            <Link href="/blog" onClick={closeMobile}>
              Blog
            </Link>
            <Link href="/contact" onClick={closeMobile}>
              Contact
            </Link>
            <div className="ssa-mobile-divider">
              <Link href="/carrer" onClick={closeMobile}>
                Careers
              </Link>
              {isLoggedIn ? (
                <>
                  <Link href={isAdmin ? "/admin/blog-dashboard" : isPartner ? "/partner-dashboard" : "/feedback"} onClick={closeMobile}>
                    Dashboard
                  </Link>
                  <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); closeMobile(); logout(); }}
                    style={{ cursor: "pointer" }}
                  >
                    Logout
                  </a>
                </>
              ) : (
                <Link href="/login" onClick={closeMobile}>
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderSSA;
