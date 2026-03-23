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
    name,
    shortName,
    addresses,
    email: emails,
    phone,
    social,
    workingHours,
    footer,
  } = siteConfig;

  return (
    <footer id="contact" className="footer-area bg-cover">
      <div className="container">
        <div className="footer-top">
          <div className="row">
            <div className="col-lg-6 align-self-center mb-4 mb-lg-0">
              <h2 className="animate-text-footer">
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
              </h2>

              <p>
                {footer.tagline},{" "}
                <Link href="/contact">Contact us</Link>.
              </p>
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
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="widget widget_about pe-xl-4">
              <h4 className="widget-title">The Address</h4>
              <div className="details">
               <div className="mb-5"> <p>{addresses.gurgaon.full}</p></div>
                <div> <p>{addresses.delhi.full}</p></div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="widget widget_about">
              <h4 className="widget-title">The Email</h4>
              <div className="details">
                <p>
                  <a href={`mailto:${emails.info}`}>{emails.info}</a>
                </p>
                <p>
                  <a href={`mailto:${emails.sandeep}`}>{emails.sandeep}</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="widget widget_about">
              <h4 className="widget-title">The Phone</h4>
              <div className="details">
                <p>
                  <a href={`tel:${phone.main.replace(/\s/g, "")}`}>{phone.main}</a>
                </p>
                <p>
                  <a href={`tel:${phone.gurgaon.replace(/\s/g, "")}`}>{phone.gurgaon}</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="widget widget_about">
              <h4 className="widget-title">Working Hours</h4>
              <div className="details">
                <p>{workingHours}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="footer-bottom">
          <div className="row">
            <div className="col-lg-4 align-self-center mb-1 mb-lg-0">
              <p>
                Copyright © {new Date().getFullYear()} {shortName}. All rights reserved.
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
