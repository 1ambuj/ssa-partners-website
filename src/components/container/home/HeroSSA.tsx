import { useEffect, useState } from "react";
import Link from "next/link";

const heroSliderSlides = [
  {
    id: 1,
    bg: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=80",
    title: "Audit & Assurance",
    highlight: "with Integrity",
    subtitle:
      "Comprehensive audit and assurance services tailored to enhance financial transparency.",
  },
  {
    id: 2,
    bg: "https://images.unsplash.com/photo-1523958203904-cdcb402031fd?auto=format&fit=crop&w=1920&q=80",
    title: "Expert",
    highlight: "Advisory Services",
    subtitle:
      "Navigate complexities with strategic advisory and data-driven decision making.",
  },
  {
    id: 3,
    bg: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1920&q=80",
    title: "Simplifying",
    highlight: "Taxation",
    subtitle:
      "Stay compliant and optimize tax strategies with our expert-led taxation services.",
  },
  {
    id: 4,
    bg: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80",
    title: "Business Process",
    highlight: "Outsourcing",
    subtitle:
      "Streamline your business with efficient and cost-effective outsourcing solutions.",
  },
];

const HeroSSA = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  useEffect(() => {
    const id = "montserrat-font-link";
    if (typeof document !== "undefined" && !document.getElementById(id)) {
      const link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;900&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSliderIndex((prev) => (prev + 1) % heroSliderSlides.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, []);

  const slide = heroSliderSlides[sliderIndex];

  return (
    <section className="ssa-hero">
      <div className="container ssa-hero-top">
        <div className="row position-relative">
          <div className="ssa-hero-accent-bar" aria-hidden />
          <div className="col-12 mb-3">
            <div className="ssa-hero-badge">
              <span className="ssa-hero-badge-dot" aria-hidden />
              Hi, we&apos;re SSA
            </div>
          </div>

          <div className="col-lg-8 position-relative">
           
            <h1 className="ssa-hero-heading text-[var(--primary-dark)]">
              Trusted Chartered Accountants for Finance, Tax & Compliance
            </h1>
          </div>
          <div className="col-lg-4 d-flex flex-column justify-content-center pe-lg-4">
            <p className="ssa-hero-desc">
              Delivering professional audit, taxation, and financial advisory
              services to help businesses grow with confidence while ensuring
              full regulatory compliance and strategic financial guidance.
            </p>
          </div>
        </div>

        <div className="ssa-hero-slider-wrap position-relative">
          <div className="position-absolute w-100 h-100 overflow-hidden">
            {heroSliderSlides.map((s, i) => (
              <div
                key={s.id}
                className={`ssa-hero-slide ${i === sliderIndex ? "active" : ""}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.bg}
                  alt=""
                  loading={i === 0 ? "eager" : "lazy"}
                />
                <div className="ssa-hero-slide-overlay" aria-hidden />
              </div>
            ))}
          </div>

          <div className="ssa-hero-content">
            <div style={{ maxWidth: "48rem" }}>
              <h2>
                {slide.title} <span className="text-white">{slide.highlight}</span>
              </h2>
              <p>{slide.subtitle}</p>
              <div className="ssa-hero-btns">
                <Link href="/service" className="ssa-btn-primary">
                  Explore Services
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.2}
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
                <Link href="/contact" className="ssa-btn-outline">
                  Talk to us
                </Link>
              </div>
            </div>
          </div>

          <a
            href="#service-area"
            className="ssa-hero-scroll"
            aria-label="Scroll to services"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth={2.2}
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 5v14m0 0l6-6m-6 6l-6-6"
              />
            </svg>
          </a>

          <div className="ssa-hero-dots">
            {heroSliderSlides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setSliderIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={sliderIndex === i ? "active" : ""}
              >
                {sliderIndex === i && <span />}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSSA;
