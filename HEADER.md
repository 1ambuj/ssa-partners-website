import { useEffect, useState } from "react";
import facebookIcon from "../assets/facebook.png";
import twitterIcon from "../assets/twitter.png";
import linkedinIcon from "../assets/linkedin.png";
import whatsappIcon from "../assets/whatsapp.png";
import { Link } from "react-router-dom";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    // Scroll animation: reveal on intersect
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 }
    );

    const observeElements = (elements) => {
      if (!elements) return;
      elements.forEach((el) => {
        if (el instanceof Element) observer.observe(el);
      });
    };

    // Observe currently existing elements
    observeElements(document.querySelectorAll(".animate-on-scroll"));

    // Watch for newly added elements (e.g. when navigating between routes)
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return;
          // If the added node itself has the class, observe it
          if (node.classList && node.classList.contains("animate-on-scroll")) {
            observer.observe(node);
          }
          // Also observe any descendants with the class
          const descendants = node.querySelectorAll && node.querySelectorAll(".animate-on-scroll");
          if (descendants && descendants.length) observeElements(descendants);
        });
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  function handleSubscribe(e) {
    e.preventDefault();
    setStatusMessage("");
    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setStatusMessage("Please enter a valid email address.");
      return;
    }

    // Simulate async subscribe
    setStatusMessage("Sending...");
    setTimeout(() => {
      setStatusMessage("Thanks — you’re now subscribed!");
      setEmail("");
    }, 800);
  }

  return (
    <footer
      id="contact"
      className="bg-[#0f2f46] text-gray-100 animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-700"
    >
      <div className="container py-14 md:py-16">
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand / About */}
          <div className="space-y-4 flex flex-col h-full">
            <h3 className="text-2xl font-extrabold tracking-tight text-white flex items-center gap-2">
              <span className="inline-block">Sandeep Singla & Associates</span>
            </h3>
            <p className="text-gray-200 leading-relaxed text-base">
              Specialized services in Audit & Assurance, Advisory, Taxation
              and GST. We combine deep expertise with a modern approach to
              help businesses grow.
            </p>
            <div className="flex items-center gap-3 mt-3">
              <a href="https://www.facebook.com/sandeepsinglaca" aria-label="Facebook" className="group rounded-full bg-white/10 hover:bg-white/20 transition p-2 shadow-sm">
                <img src={facebookIcon} alt="facebook" className="w-5 h-5 group-hover:scale-110 transition" />
              </a>
              <a href="https://x.com/casandeepsingla" aria-label="Twitter" className="group rounded-full bg-white/10 hover:bg-white/20 transition p-2 shadow-sm">
                <img src={twitterIcon} alt="twitter" className="w-5 h-5 group-hover:scale-110 transition" />
              </a>
              <a href="https://www.linkedin.com/in/casandeepsingla/" aria-label="LinkedIn" className="group rounded-full bg-white/10 hover:bg-white/20 transition p-2 shadow-sm">
                <img src={linkedinIcon} alt="linkedin" className="w-5 h-5 group-hover:scale-110 transition" />
              </a>
              <a href="https://api.whatsapp.com/send?phone=919560181790&text=Hello" aria-label="WhatsApp" className="group rounded-full bg-white/10 hover:bg-white/20 transition p-2 shadow-sm">
                <img src={whatsappIcon} alt="whatsapp" className="w-5 h-5 group-hover:scale-110 transition" />
              </a>
            </div>
            <div className="flex-1" />
          </div>

          {/* Quick Links */}
          <div className="flex flex-col h-full">
            <h4 className="text-lg font-semibold text-white tracking-wide">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-gray-200">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About us" },
                { to: "/services", label: "Services" },
                { to: "/services/audit", label: "Audit & Assurance" },
                { to: "/services/advisory", label: "Advisory" },
                { to: "/services/taxation", label: "Taxation" },
                { to: "/services/gst", label: "GST" },
                { to: "/services/nri", label: "Non-resident" },
                { to: "/services/bpo", label: "Business Process Outsourcing" },
                { to: "/contact", label: "Contact" },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="block px-3 rounded-lg font-medium transition-all duration-200 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30"
                    style={{ marginBottom: "0.5rem" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex-1" />
          </div>

          {/* Contact Addresses */}
          <div className="flex flex-col h-full">
            <h4 className="text-lg font-semibold text-white tracking-wide">Contact</h4>
            <div className="mt-4 text-gray-200 space-y-3 text-sm">
              <div>
                <strong>Gurgaon</strong>
                <div className="text-gray-200/80">E-127, Ground Floor, Sushant Shopping Arcade, Sushant Lok-1, Gurgaon, Haryana - 122009</div>
                <div className="text-gray-200/80 mt-1">+91 124-4287217</div>
                <div className="text-gray-200/80">
                  <a href="mailto:sandeep@sspartners.in" className="hover:text-white">sandeep@sspartners.in</a>
                </div>
              </div>
              <div>
                <strong>Delhi</strong>
                <div className="text-gray-200/80">V-8, Green Park Extension, New Delhi - 110016</div>
                <div className="text-gray-200/80 mt-1">+91 9211551857</div>
                <div className="text-gray-200/80">
                  <a href="mailto:ca.shalini.sgupta@gmail.com" className="hover:text-white">ca.shalini.sgupta@gmail.com</a>
                </div>
              </div>
              <div>
                <div className="mt-2">
                  <a href="mailto:info@sspartners.in" className="hover:text-white">info@sspartners.in</a>
                </div>
                <div>
                  <a href="tel:+919560181790" className="hover:text-white">+91 9560181790</a>
                </div>
              </div>
            </div>
            <div className="flex-1" />
          </div>

          {/* Newsletter / Subscribe */}
          <div className="flex flex-col h-full">
            <h4 className="text-lg font-semibold text-white tracking-wide">Subscribe</h4>
            <p className="mt-3 text-gray-200 text-sm">
              Get latest updates and insights. No spam — unsubscribe anytime.
            </p>
            <form
              onSubmit={handleSubscribe}
              className="mt-4 flex flex-col sm:flex-row sm:items-center sm:space-x-3"
            >
              <label htmlFor="footer-email" className="sr-only">
                Email
              </label>
              <input
                id="footer-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/15 placeholder-gray-200/60 text-white focus:outline-none focus:ring-2 focus:ring-white/30 shadow-sm"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="mt-3 sm:mt-0 inline-block px-5 py-2 bg-[#f37920] text-white rounded-lg font-semibold shadow-sm hover:bg-[#ff8a3a] transition focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                Send
              </button>
            </form>

            {statusMessage && (
              <div className="mt-3 text-sm text-white/80">{statusMessage}</div>
            )}
            <div className="flex-1" />
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/15 flex flex-col md:flex-row items-center justify-between text-sm text-white/70">
          <div className="mb-3 md:mb-0">
            &copy; {new Date().getFullYear()}{" "}
            <span className="font-semibold text-white">SS Partners</span>. All rights reserved.
          </div>
          <div className="flex items-center space-x-3">
            <a
              href="/privacy"
              className="text-white hover:text-white hover:bg-white/10 px-4 py-2 mb-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/30"
              style={{ marginBottom: "0.5rem" }}
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-white hover:text-white hover:bg-white/10 px-4 py-2 mb-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/30"
              style={{ marginBottom: "0.5rem" }}
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
