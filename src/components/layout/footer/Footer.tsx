"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
    social,
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
          <div className="row align-items-center g-4">
            <div className="col-lg-5">
              <div className="footer-top-brand footer-brand-widget">
                <div className="footer-brand-head">
                  <div className="thumb">
                    <Image
                      src={siteConfig.logo}
                      alt={`${siteConfig.shortName} logo`}
                      width={44}
                      height={44}
                      className="footer-brand-logo-image"
                    />
                  </div>
                  <h4 className="widget-title mb-0">SSA Partners</h4>
                </div>
                <div className="details">
                  <p>
                    Providing professional services in Audit, Taxation,
                    Advisory and Compliance from offices in New Delhi and
                    Gurgaon.
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
              </div>
            </div>
            <div className="col-lg-7">
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
                  <span>Stay us subscribing to our newsletter.</span>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row footer-main-grid g-4 gx-xl-5">
          <div className="col-lg-4 col-md-6 footer-col footer-col-links footer-col-links-left">
            <div className="widget widget_nav_menu footer-widget-block">
              <h4 className="widget-title">Quick Links</h4>
              <ul>
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 footer-col footer-col-links footer-col-links-middle">
            <div className="widget widget_nav_menu footer-widget-block">
              <h4 className="widget-title">Other Links</h4>
              <ul>
                {otherLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 footer-col footer-col-contact">
            <div className="widget widget_about footer-contact-widget footer-widget-block mb-0">
              <h4 className="widget-title">Office Addresses</h4>
              <div className="details">
                <div className="footer-address-item">
                  <i className="fas fa-map-marker-alt" aria-hidden="true" />
                  <p>
                    <strong>{addresses.gurgaon.label}:</strong> {addresses.gurgaon.full}
                  </p>
                </div>
                <div className="footer-address-item">
                  <i className="fas fa-map-marker-alt" aria-hidden="true" />
                  <p>
                    <strong>{addresses.delhi.label}:</strong> {addresses.delhi.full}
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
          <div className="row">
            <div className="col-lg-4 align-self-center mb-1 mb-lg-0">
              <p>
                Copyright © 2026 {shortName}. All rights reserved.
              </p>
            </div>
            <div className="col-lg-5 align-self-center text-lg-center mb-3 mb-lg-0">
              <p>
                {footer.legalLinks.map((link, i) => (
                  <React.Fragment key={link.href}>
                    {i > 0 && " / "}
                    <Link href={link.href}>{link.label}</Link>
                  </React.Fragment>
                ))}
              </p>
            </div>
            <div className="col-lg-3 text-lg-end">
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
