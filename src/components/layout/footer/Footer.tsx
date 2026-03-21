import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

const Footer = () => {
  const backToTopButtonRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const btn = backToTopButtonRef.current;
    if (!btn) return;
    const handleClick = () => window.scrollTo({ top: 0, behavior: "smooth" });
    btn.addEventListener("click", handleClick);
    return () => btn.removeEventListener("click", handleClick);
  }, []);

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setStatus("error");
      setError("Please enter a valid email address.");
      return;
    }
    setStatus("sending");
    setError(null);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "Failed to send");
      setStatus("success");
      setEmail("");
      timeoutRef.current = setTimeout(() => setStatus("idle"), 3000);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Failed to send");
    }
  }

  return (
    <footer className="footer-area bg-cover">
      <div className="container">
        <div className="footer-top">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="footer-cta-title">Let&apos;s Get In Touch</h2>
              <p className="footer-cta-text">
                For further info &amp; support, <Link href="/contact">Contact us</Link>.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="footer-subscribe">
                <form onSubmit={handleSubscribe}>
                  <div className="single-input-inner">
                    <input
                      className="input-field"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={status === "sending"}
                    />
                    <button type="submit" className="btn btn-white" disabled={status === "sending"}>
                      {status === "sending" ? "Sending..." : "Send"}
                    </button>
                  </div>
                </form>
                <span>We&apos;ll contact you shortly</span>
                {status === "success" && <div className="text-white mt-2 small">Thanks! We&apos;ll be in touch soon.</div>}
                {status === "error" && error && <div className="text-white mt-2 small" style={{ opacity: 0.9 }}>{error}</div>}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="footer-quick-links">
          <div className="footer-quick-links__col">
            <h4 className="footer-quick-links__heading">Navigate</h4>
            <ul className="footer-quick-links__list">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About us</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-quick-links__col">
            <h4 className="footer-quick-links__heading">Services</h4>
            <ul className="footer-quick-links__list">
              <li><Link href="/services/audit">Audit & Assurance</Link></li>
              <li><Link href="/services/advisory">Advisory</Link></li>
              <li><Link href="/services/taxation">Taxation</Link></li>
              <li><Link href="/services/gst">GST</Link></li>
              <li><Link href="/services/nri">Non-resident</Link></li>
              <li><Link href="/services/bpo">BPO</Link></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="widget widget_about pe-xl-4">
              <h4 className="widget-title">Gurgaon Office</h4>
              <div className="details">
                <p>{siteConfig.addresses.gurgaon.full}</p>
                <p>
                  <a href={`tel:${siteConfig.addresses.gurgaon.phone.replace(/\s/g, "")}`} style={{ color: "inherit" }}>
                    {siteConfig.addresses.gurgaon.phone}
                  </a>
                </p>
                <p>
                  <a href={`mailto:${siteConfig.addresses.gurgaon.email}`} style={{ color: "var(--main-color)" }}>
                    {siteConfig.addresses.gurgaon.email}
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="widget widget_about">
              <h4 className="widget-title">Delhi Office</h4>
              <div className="details">
                <p>{siteConfig.addresses.delhi.full}</p>
                <p>
                  <a href={`tel:${siteConfig.addresses.delhi.phone.replace(/\s/g, "")}`} style={{ color: "inherit" }}>
                    {siteConfig.addresses.delhi.phone}
                  </a>
                </p>
                <p>
                  <a href={`mailto:${siteConfig.addresses.delhi.email}`} style={{ color: "var(--main-color)" }}>
                    {siteConfig.addresses.delhi.email}
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="widget widget_about">
              <h4 className="widget-title">General Contact</h4>
              <div className="details">
                <p>
                  <a href={`mailto:${siteConfig.email.info}`} style={{ color: "var(--main-color)" }}>
                    {siteConfig.email.info}
                  </a>
                </p>
                <p>
                  <a href={`tel:${siteConfig.phone.main.replace(/\s/g, "")}`} style={{ color: "inherit" }}>
                    {siteConfig.phone.main}
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="widget widget_about">
              <h4 className="widget-title">Working Hours</h4>
              <div className="details">
                <p>{siteConfig.workingHours}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="footer-bottom">
          <div className="row">
            <div className="col-lg-4 align-self-center mb-1 mb-lg-0">
              <p>Copyright © {new Date().getFullYear()} {siteConfig.shortName}. All rights reserved.</p>
            </div>
            <div className="col-lg-5 align-self-center text-lg-center mb-3 mb-lg-0">
              <p>
                <Link href="/privacy" style={{ color: "inherit", marginRight: "1rem" }}>Privacy Policy</Link>
                / <Link href="/terms" style={{ color: "inherit", marginLeft: "0.5rem" }}>Terms & Services</Link>
              </p>
            </div>
            <div className="col-lg-3 text-lg-end">
              <ul className="social-media">
                <li><a className="facebook" href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                <li><a className="twitter" href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="fab fa-twitter"></i></a></li>
                <li><a className="linkedin" href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a></li>
                <li><a className="whatsapp" href={siteConfig.social.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a></li>
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
