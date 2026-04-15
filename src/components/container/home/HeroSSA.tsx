import { useEffect, useState } from "react";
import Link from "next/link";

const heroSliderSlides = [
  {
    id: 1,
    bg: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2200&q=80",
    title: "Audit & Assurance",
    highlight: "for Better Governance",
    subtitle:
      "Independent assurance engagements that improve reporting quality, controls, and stakeholder confidence.",
  },
  {
    id: 2,
    bg: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2200&q=80",
    title: "Business & Financial",
    highlight: "Advisory Services",
    subtitle:
      "Practical, data-backed advisory support for growth planning, structuring, and strategic decisions.",
  },
  {
    id: 3,
    bg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2200&q=80",
    title: "Taxation &",
    highlight: "GST Compliance",
    subtitle:
      "End-to-end direct and indirect tax compliance with a strong focus on risk control and efficiency.",
  },
  {
    id: 4,
    bg: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2200&q=80",
    title: "NRI Services &",
    highlight: "BPO Support",
    subtitle:
      "Reliable support for non-resident compliance and outsourced finance operations with timely execution.",
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
    }, 7000);
    return () => window.clearInterval(timer);
  }, []);

  const slide = heroSliderSlides[sliderIndex];

  return (
    <section className="ssa-hero">
      <div className="container ssa-hero-top image-first-hero">
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
          <div className="ssa-hero-progress" aria-hidden>
            <span key={sliderIndex} />
          </div>

          <div className="ssa-hero-content">
            <div key={sliderIndex} className="ssa-hero-copy" style={{ maxWidth: "48rem" }}>
              <h2>
                {slide.title} <span className="text-white">{slide.highlight}</span>
              </h2>
              <p>{slide.subtitle}</p>
              <p className="ssa-hero-service-line">
                Audit & Assurance • Advisory • Taxation • GST • NRI • BPO
              </p>
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
            href="#about-area"
            className="ssa-hero-scroll"
            aria-label="Scroll to about section"
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
