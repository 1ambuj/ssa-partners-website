import React, { FormEvent, useMemo, useState } from "react";
import type { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Layout from "@/components/layout/Layout";
import Blog from "@/components/container/home/Blog";
import {
  servicesList,
  getServiceBySlug,
  Service,
} from "@/data/servicesData";
import BannerShape from "public/images/about/4.png";
import BannerBg from "public/images/bg/14.png";
import styles from "./service-detail.module.scss";

type Props = {
  service: Service;
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

function firstSentence(text: string) {
  const parts = text.split(".");
  return parts[0] ? `${parts[0]}.` : text;
}

function resolveImageUrl(image: unknown) {
  if (typeof image === "string") return image;
  if (image && typeof image === "object" && "src" in image) {
    const src = (image as { src?: unknown }).src;
    return typeof src === "string" ? src : "";
  }
  return "";
}

const ServiceDetailPage = ({ service }: Props) => {
  const scheduleLabel = "Schedule a Call";
  const [openModal, setOpenModal] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );
  const [error, setError] = useState("");
  const [activeSubservice, setActiveSubservice] = useState<number>(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: service.title,
    message: `Hi Team,\nI would like to schedule a consultation for ${service.title}.`,
  });

  const timelineItems = service.approach.map((line, idx) => ({
    step: `Step ${String(idx + 1).padStart(2, "0")}`,
    title: firstSentence(line),
    description: line,
  }));

  const faqs = [
    {
      q: "What is statutory audit?",
      a: "A statutory audit is an independent review of financial statements required under applicable laws to ensure true and fair presentation.",
    },
    {
      q: "How often should internal audits be conducted?",
      a: "Frequency depends on risk profile and industry, but most organizations run quarterly or half-yearly internal audits.",
    },
    {
      q: "How long does an audit engagement usually take?",
      a: "Timeline varies by complexity, records readiness, and entity size. A typical mid-size engagement takes 2-6 weeks.",
    },
    {
      q: "What documents should we keep ready before audit?",
      a: "Trial balance, ledgers, bank statements, invoices, contracts, statutory registers, and prior compliance records are usually required.",
    },
    {
      q: "Can audit observations help improve operations?",
      a: "Yes. A good audit identifies control gaps, process inefficiencies, and practical improvements for compliance and governance.",
    },
  ];

  const introParagraphs = useMemo(() => service.details.slice(0, 3), [service.details]);
  const bannerImageUrl = resolveImageUrl(service.mainImg);
  const industriesImageUrl = resolveImageUrl(service.img2 || service.img1 || service.mainImg);

  const onFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const submitSchedule = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await res.json()) as { ok: boolean; error?: string };
      if (!res.ok || !data.ok) throw new Error(data.error || "Failed to send");
      setStatus("success");
      setForm((prev) => ({
        ...prev,
        name: "",
        email: "",
        mobile: "",
      }));
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Failed to send message");
    }
  };

  return (
    <Layout
      meta={{
        title: service.metaTitle || `${service.title} | SSA`,
        description: service.metaDescription || service.description,
        keywords: service.keywords?.join(", "),
      }}
      header={false}
      sidebar={true}
      footer={true}
      bodyClass={true}
    >
      <main className={styles.page}>
        <section className={styles.topBannerWrap}>
          <div className={`banner-area bg-relative pd-bottom-120 banner-small-inner bg-light bg-relative bg-cover text-center ${styles.topBanner}`}>
            <Image
              className="left_image_bounce position-bottom-left"
              src={BannerShape}
              alt="img"
            />
            <div className="container">
              <motion.div initial="hidden" animate="show" variants={fadeUp} className={styles.heroContent}>
                <div className={styles.breadcrumbs}>
                  <Link href="/" className={styles.breadcrumbLink}>
                    Home
                  </Link>
                  <span>/</span>
                  <Link href="/service" className={styles.breadcrumbLink}>
                    Services
                  </Link>
                  <span>/</span>
                  <span className={styles.breadcrumbCurrent}>{service.title}</span>
                </div>
                <h4 className={styles.bannerKicker}>Service Detail</h4>
                <h3 className={styles.bannerTitle}>{service.title}</h3>
                <p className={styles.bannerDesc}>{service.description}</p>
                <div className={styles.heroActions}>
                  <button
                    className={`btn btn-base border-radius ${styles.scheduleBtn}`}
                    onClick={() => setOpenModal(true)}
                  >
                    {scheduleLabel}
                  </button>
                  <Link href="/contact" className={`btn btn-base border-radius ${styles.contactBtn}`}>
                    Contact Page
                  </Link>
                </div>
                <div className="scroll-down top_image_bounce mt-3">
                  <a href="#service-detail-content" aria-label="Scroll down to content">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="40"
                      height="80"
                      viewBox="0 0 40 80"
                    >
                      <image
                        id="scroll"
                        width="40"
                        height="80"
                        xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAABQCAYAAABrjzfBAAADwElEQVRoge2bP1LbQBTGP5xQsCoiThD7BIgTxL5BOEGcE0CqlIaSytClg5wA0qUzOQHmBEY3EIW2JfM833oW2bIl78rSJPpmdjwGefent3/13tOeOjjAluoDiAB84mfIIkoAPLM8AXhgWVKq9drWywIKwCmAMwBTq/EpoRLrui5LnzcR8toLgs/lC1AqHwEYArgGcGs3UlACe07YBegmwE6BusViMwAvAHpspCwc+Bu5wQGAGMCE39dqkwXHAD4DOGE3+lSXkPep1t/y6s2zYMgfHwI4rgAOtKjU3Q2UegyUClddlAc4YTcMrYFfhZJU6xNOtruigGNrvOxEqdbSVhwoNc629z7zfcgxd7wrOEuydElXx6nWV+bP9iQxg3aw5SzdSvYyEygVkaGXaj0fWnYXyzr3c5dwWaVaT7nOjsy/jAVrsR5W7CSczTNjRWPBEVf32qxnxK695phcWHBWh/WQsxcHSkmPPqZaH3a4mSdNsJ5RqrWwTAOl+gbwTzPQ3kgW70gAj/LOajVLmOYW7Dapey3JknPUZECZF6HM4leZzXVRrDuwBkq9Fjmw1qoW0FUtoKv+O8CZ5/raLnZWC+iqFtBVLaCrWkBXtYCuagFd9c8BRg5tmeBOKZUFfAQgz9E3JRqL6CCfbXOgLQu4R//1Hhsbbbj+lDcVM9ZS2kGQdaIX0ZTOdok4TXj9xYrfmdBZz8W14jJJpNGBFRmwNbTCXk5+H9dZbCDHVigWtJ4Xj62PZeaZ0YEzfh/6jBb48m6FnKlmZhe23q68W3Yg+8mnv9HnTvKLgPce6/QKaPzcXkO3PgGfM59etM1CnaekCldye9xyVQvoqhbQVR0TcmoaGCPviQH80ACmrOYxxA63pjrSUDZJAOMOg9n9BgIK09RY8KgBQFnN0/g6PIXIo+HHppAxqSJMtX4wy4ykgXytmcuWSZNZpKUskmkqznZb0orEnkWSkWR/GAsmmQefOvVFrMfUlDfJZaGV4FNFQuNGC2ath8xWl9BDcFfHzsKdQ+AuDBxyclivuLPsZNIYCwZKiWEkd/DNMMtLsp3wGaNySAEMlBJvWZRqvbSj5Z1mTiy3WZXdHRKuy7G/pDzAhPtzTPdZacdjAUWs+yXVemAyLrN6t7+/v66q30zwvqElYw/rpNTzHcAPAJep1ufrLi5yYL2l+Xscm2W8q7a63CFmzM/ucUKuVdHnYpO23LUcl2JJ2Y7kNGTefLB9NFLstyWkyJZaardyfV1DipyEzJsP9usaUmTBlxuQz/KvawD4CybGJEiPys7UAAAAAElFTkSuQmCC"
                      />
                    </svg>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
          <div className={styles.topBannerImage}>
            <Image src={BannerBg} alt="img" />
            <div
              className={styles.bannerServiceImage}
              style={{ backgroundImage: `url(${bannerImageUrl})` }}
            />
          </div>
        </section>

        <section className={styles.section} id="service-detail-content">
          <div className="container">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
              <div className="section-title mb-0">
                <h6 className="sub-title">OVERVIEW</h6>
                <h2 className={styles.sectionTitle}>Introduction</h2>
              </div>
              <div className={styles.introText}>
                {introParagraphs.map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-8">
                <div className="section-title mb-0">
                  <h6 className="sub-title">PROCESS</h6>
                  <h2 className={styles.sectionTitle}>Our Approach</h2>
                </div>
                <div className={styles.processCard}>
                  <ol className={styles.timeline}>
                    {timelineItems.map((item, idx) => (
                      <li key={`${item.step}-${idx}`} className={styles.timelineItem}>
                        <span className={styles.timelineDot} />
                        <p className={styles.timelineStep}>{item.step}</p>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="section-title mb-0">
                  <h6 className="sub-title">SECTORS</h6>
                  <h2 className={styles.sectionTitle}>Industries We Serve</h2>
                </div>
                <div
                  className={styles.industriesVisual}
                  style={{ backgroundImage: `url(${industriesImageUrl})` }}
                />
                <div className={styles.chipsWrap}>
                  {service.industries.map((industry, idx) => (
                    <span key={idx} className={styles.chip}>
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.altSection}`}>
          <div className="container">
            <div className="section-title mb-0">
              <h6 className="sub-title">OFFERINGS</h6>
              <h2 className={styles.sectionTitle}>Subservices</h2>
            </div>
            <div className={styles.subserviceList}>
              {service.subservices.map((sub, idx) => {
                const isOpen = activeSubservice === idx;
                return (
                  <div key={sub.slug} className={styles.subserviceItem}>
                    <button
                      className={styles.subserviceHeader}
                      type="button"
                      onClick={() => setActiveSubservice(isOpen ? -1 : idx)}
                      aria-expanded={isOpen}
                    >
                      <span className={styles.subserviceTitleWrap}>
                        <span className={styles.subserviceTitle}>{sub.title}</span>
                      </span>
                      <span className={`${styles.subserviceToggle} ${isOpen ? styles.open : ""}`}>
                        <i className="fa fa-angle-down" aria-hidden="true" />
                      </span>
                    </button>
                    {isOpen && (
                      <div className={styles.subserviceBody}>
                        <p className={styles.cardSummary}>{sub.summary}</p>
                        <ul className={styles.cardList}>
                          {sub.items.slice(0, 3).map((item, itemIdx) => (
                            <li key={itemIdx}>{item}</li>
                          ))}
                        </ul>
                        <Link
                          href={`/service-detail/${service.slug}/${sub.slug}`}
                          className={styles.subserviceLink}
                        >
                          Read More
                        </Link>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.ctaBand}`}>
          <div className="container">
            <div className={styles.ctaInner}>
              <div>
                <p className={styles.ctaCaption}>Next Step</p>
                <h2>{service.cta.title}</h2>
                <p>{service.cta.subtitle}</p>
              </div>
              <button className={styles.primaryBtn} onClick={() => setOpenModal(true)}>
                {scheduleLabel}
              </button>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <div className="section-title mb-0">
              <h6 className="sub-title">SUPPORT</h6>
              <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            </div>
            <div className={styles.faqWrap}>
              {faqs.map((faq, idx) => (
                <details
                  key={idx}
                  className={styles.faqItem}
                  open={activeFaq === idx}
                  onToggle={(e) =>
                    setActiveFaq((e.currentTarget as HTMLDetailsElement).open ? idx : null)
                  }
                >
                  <summary>{faq.q}</summary>
                  <div>{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <Blog
          serviceSlug={service.slug}
          serviceTitle={service.title}
          showViewAll
          bottomPadding={false}
        />

        {openModal && (
          <div className={styles.modalBackdrop} onClick={() => setOpenModal(false)}>
            <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
              <button className={styles.modalClose} onClick={() => setOpenModal(false)} aria-label="Close">
                ×
              </button>
              <h3>Schedule a Consultation</h3>
              <p className={styles.modalSubtitle}>
                Send us your details and we will get back to you.
              </p>
              <form onSubmit={submitSchedule} className={styles.modalForm}>
                <input name="name" placeholder="Name *" value={form.name} onChange={onFormChange} required />
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  value={form.email}
                  onChange={onFormChange}
                  required
                />
                <input name="mobile" placeholder="Mobile" value={form.mobile} onChange={onFormChange} />
                <input name="subject" placeholder="Subject" value={form.subject} onChange={onFormChange} />
                <textarea
                  name="message"
                  placeholder="Message *"
                  value={form.message}
                  onChange={onFormChange}
                  rows={4}
                  required
                />
                {status === "success" && <p className={styles.successMsg}>Message sent successfully.</p>}
                {status === "error" && <p className={styles.errorMsg}>{error || "Failed to send message."}</p>}
                <button className={`btn btn-base border-radius ${styles.modalSubmitBtn}`} type="submit" disabled={status === "sending"}>
                  {status === "sending" ? "Sending..." : "Send Request"}
                </button>
              </form>
            </div>
          </div>
        )}
      </main>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = servicesList.map((s) => ({
    params: { slug: s.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug as string;
  const service = getServiceBySlug(slug);
  if (!service) return { notFound: true };
  return { props: { service } };
};

export default ServiceDetailPage;

