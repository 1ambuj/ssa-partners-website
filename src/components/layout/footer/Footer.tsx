"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

const Footer = () => {
  const backToTopButtonRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState<"idle" | "sending" | "success" | "error">("idle");

  useEffect(() => {
    const backToTopButton = backToTopButtonRef.current;

    if (backToTopButton) {
      const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };
      backToTopButton.addEventListener("click", handleClick);
      return () => backToTopButton.removeEventListener("click", handleClick);
    }
  }, []);

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    setStatusMessage("");
    setStatusType("idle");
    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setStatusMessage("Please enter a valid email address.");
      setStatusType("error");
      return;
    }

    setStatusType("sending");
    setStatusMessage("Sending...");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      });
      const data = (await res.json()) as { ok: boolean; error?: string };

      if (res.ok && data.ok) {
        setStatusMessage("Thanks — you're now subscribed!");
        setStatusType("success");
        setEmail("");
      } else {
        setStatusMessage(data.error || "Something went wrong. Please try again.");
        setStatusType("error");
      }
    } catch {
      setStatusMessage("Something went wrong. Please try again.");
      setStatusType("error");
    }
  }

  const {
    shortName,
    addresses,
    email: emails,
    phone,
    social,
    workingHours,
    footer,
  } = siteConfig;

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/team", label: "Our Team" },
    { href: "/blog", label: "Knowledge Base" },
    { href: "/carrer", label: "Career" },
  ];

  const otherLinks = [
    { href: "/services/audit", label: "Audit & Assurance" },
    { href: "/services/taxation", label: "Income Tax Department" },
    { href: "/services/gst", label: "GST Portal" },
    { href: "/services/advisory", label: "Advisory Services" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <footer id="contact" className="footer-area bg-cover">
      <div className="container">
        <div className="footer-top">
          <div className="row">
            <div className="col-lg-6 align-self-center mb-4 mb-lg-0">
              {/* <h2 className="animate-text-footer">
                <span className="waviy ms-2">
                  <span style={{ "--i": 1 } as React.CSSProperties}>L</span>
                  <span className="ms-1" style={{ "--i": 2 } as React.CSSProperties}>e</span>
                  <span className="ms-1" style={{ "--i": 3 } as React.CSSProperties}>t</span>
                  <span className="ms-1" style={{ "--i": 4 } as React.CSSProperties}>&apos;</span>
                  <span className="ms-1" style={{ "--i": 5 } as React.CSSProperties}>s</span>
                  <span className="ms-2" style={{ "--i": 6 } as React.CSSProperties}>G</span>
                  <span className="ms-1" style={{ "--i": 7 } as React.CSSProperties}>e</span>
                  <span className="ms-1" style={{ "--i": 8 } as React.CSSProperties}>t</span>
                  <span className="ms-1" style={{ "--i": 9 } as React.CSSProperties}>S</span>
                  <span className="ms-1" style={{ "--i": 10 } as React.CSSProperties}>t</span>
                  <span className="ms-1" style={{ "--i": 11 } as React.CSSProperties}>a</span>
                  <span className="ms-1" style={{ "--i": 12 } as React.CSSProperties}>r</span>
                  <span className="ms-1" style={{ "--i": 13 } as React.CSSProperties}>t</span>
                  <span className="ms-1" style={{ "--i": 14 } as React.CSSProperties}>e</span>
                  <span className="ms-1" style={{ "--i": 15 } as React.CSSProperties}>d</span>
                </span>
              </h2> */}
                <div className="details footer-about-block">
                  <h3>About</h3>
                  <p>
                    Specialized services in Audit &amp; Assurance, Advisory, Taxation and GST. We
                    combine deep expertise with a modern approach to help businesses grow.
                  </p>
                  <ul className="social-media mt-4">
                  <li>
                    <a
                      className="facebook"
                      href={social.facebook}
                      aria-label="Facebook"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="twitter"
                      href={social.twitter}
                      aria-label="Twitter"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="linkedin"
                      href={social.linkedin}
                      aria-label="LinkedIn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="whatsapp"
                      href={social.whatsapp}
                      aria-label="WhatsApp"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-whatsapp" />
                    </a>
                  </li>
                  </ul>
                </div>
              {/* <p>
                {footer.tagline},{" "}
                <Link href="/contact">Contact us</Link>.
              </p> */}
            </div>
            <div className="col-lg-6">
              <form onSubmit={handleSubscribe} className="footer-subscribe">
                <div className="single-input-inner">
                  <input
                    type="email"
                    placeholder={footer.subscribePlaceholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={statusType === "sending"}
                    aria-label="Email address"
                  />
                  <button
                    type="submit"
                    className="btn btn-white"
                    disabled={statusType === "sending"}
                  >
                    {footer.subscribeButton}
                  </button>
                </div>
                {statusMessage ? (
                  <span className={statusType === "success" ? "text-success" : statusType === "error" ? "text-danger" : ""}>
                    {statusMessage}
                  </span>
                ) : (
                  <span>{footer.subscribeHint}</span>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row footer-main-grid">
          <div className="col-lg-3 col-md-6 footer-col">
            <div className="widget widget_nav_menu">
              <h4 className="widget-title">Quick Link</h4>
              <ul>
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 footer-col">
            <div className="widget widget_nav_menu">
              <h4 className="widget-title">Other Link</h4>
              <ul>
                {otherLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 footer-col">
            <div className="widget widget_about footer-contact-widget">
              <h4 className="widget-title">Contact Us</h4>
              <div className="details footer-office-grid">
                <div className="footer-office-card">
                  <h6>Gurgaon Office</h6>
                  <p>E-127, Ground Floor</p>
                  <p>Sushant Shopping Arcade</p>
                  <p>Sushant Lok-1, Gurgaon - 122009</p>
                  <p>Haryana</p>
                  <p>
                    Tel: <a href="tel:+919560181790">+91-9560181790</a>
                  </p>
                  <p>
                    Email: <a href="mailto:info@sspartners.in">info@sspartners.in</a>
                  </p>
                </div>
                <div className="footer-office-card">
                  <h6>New Delhi Office</h6>
                  <p>V-8, Green Park Extension</p>
                  <p>New Delhi - 110016</p>
                  <p>
                    Tel: <a href="tel:+919211551857">+91-9211551857</a>
                  </p>
                  <p>
                    Email: <a href="mailto:info@sspartners.in">info@sspartners.in</a>
                  </p>
                  <p>
                    Web: <a href="https://www.sspartners.in" target="_blank" rel="noopener noreferrer">www.sspartners.in</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        {/* <div className="footer-contact-strip">
          <a href={`mailto:${emails.info}`} className="footer-contact-chip">
            <i className="fa fa-envelope" aria-hidden="true" />
            <span>{emails.info}</span>
          </a>
          <a href={`tel:${phone.main.replace(/\s/g, "")}`} className="footer-contact-chip">
            <i className="fa fa-phone" aria-hidden="true" />
            <span>{phone.main}</span>
          </a>
          <div className="footer-contact-chip">
            <i className="fa fa-clock" aria-hidden="true" />
            <span>{workingHours}</span>
          </div>
        </div> */}
      </div>
      <div>
        <div className="footer-bottom">
          <div className="row footer-bottom-row">
            <div className="col-lg-4 align-self-center mb-1 mb-lg-0">
              <p>
                Copyright © {new Date().getFullYear()} {shortName}. All rights reserved.
              </p>
            </div>
            <div className="col-lg-4 align-self-center text-lg-center mb-3 mb-lg-0">
              <p>
                {footer.legalLinks.map((link, i) => (
                  <React.Fragment key={link.href}>
                    {i > 0 && " / "}
                    <Link href={link.href}>{link.label}</Link>
                  </React.Fragment>
                ))}
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <ul className="social-media">
                <li>
                  <a
                    className="facebook"
                    href={social.facebook}
                    aria-label="Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a
                    className="twitter"
                    href={social.twitter}
                    aria-label="Twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a
                    className="linkedin"
                    href={social.linkedin}
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a
                    className="whatsapp"
                    href={social.whatsapp}
                    aria-label="WhatsApp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-whatsapp" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="back-to-top" ref={backToTopButtonRef}>
        <span className="back-top">Back to top</span>
      </div>
    </footer>
  );
};

export default Footer;
