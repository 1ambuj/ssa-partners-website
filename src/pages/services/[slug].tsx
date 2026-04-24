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
import SsaBrochureMark from "@/components/ui/SsaBrochureMark";

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

  const approachSteps = service.approach.map((line, idx) => ({
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
  const overviewCards = useMemo(
    () =>
      service.benefits.slice(0, 3).map((benefit, idx) => ({
        code: service.tools[idx] || `Point ${idx + 1}`,
        title: firstSentence(benefit),
        description: benefit,
      })),
    [service.benefits, service.tools]
  );
  const activeSub = service.subservices[activeSubservice] || service.subservices[0];
  const standards = useMemo(() => service.tools.slice(0, 6), [service.tools]);

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
          <div
            className={`banner-area bg-relative pd-bottom-120 banner-small-inner bg-light bg-relative bg-cover text-center ${styles.topBanner}`}
          >
            <Image
              className="left_image_bounce position-bottom-left"
              src={BannerShape}
              alt="img"
            />
            <div className="container">
              <motion.div
                initial="hidden"
                animate="show"
                variants={fadeUp}
                className={styles.heroContent}
              >
                {/* <div className={styles.breadcrumbs}>
                  <Link href="/" className={styles.breadcrumbLink}>
                    Home
                  </Link>
                  <span>/</span>
                  <Link href="/service" className={styles.breadcrumbLink}>
                    Services
                  </Link>
                  <span>/</span>
                  <span className={styles.breadcrumbCurrent}>{service.title}</span>
                </div> */}
                <div>
                  <SsaBrochureMark size="sm" />
                   <h4 className={styles.bannerKicker}>Service Detail</h4>
                </div>
                <h3 className={styles.bannerTitle}>{service.title}</h3>
                <p className={styles.bannerDesc}>{service.description}</p>
              </motion.div>
            </div>
          </div>
          <div className={styles.topBannerImage}>
            <Image src={BannerBg} alt="img" />
          </div>
        </section>

        

        <section className={styles.section} id="service-detail-content">
          <div className="container">
            <div className={styles.twoCol}>
              <div>
                <div className="section-title mb-0">
                  <h6 className="sub-title">OVERVIEW</h6>
                  <h2 className={styles.sectionTitle}>What This Service Covers</h2>
                </div>
                <div className={styles.introText}>
                  {introParagraphs.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
              </div>
              <div className={styles.overviewCards}>
                {overviewCards.map((item, idx) => (
                  <article key={`${item.code}-${idx}`} className={styles.overviewCard}>
                    <p className={styles.overviewCode}>{item.code}</p>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.altSection}`} id="service-offerings">
          <div className="container">
            <div className="section-title mb-0">
              <h6 className="sub-title">OUR OFFERINGS</h6>
              <h2 className={styles.sectionTitle}>Service Modules</h2>
            </div>
            <div className={styles.offeringsWrap}>
              <div className={styles.tabsBar}>
                {service.subservices.map((sub, idx) => (
                  <button
                    key={sub.slug}
                    type="button"
                    className={activeSubservice === idx ? styles.tabActive : ""}
                    onClick={() => setActiveSubservice(idx)}
                  >
                    {sub.title}
                  </button>
                ))}
              </div>
              <div className={styles.offeringPanel}>
                <div>
                  <h3>{activeSub.title}</h3>
                  <p className={styles.panelSummary}>{activeSub.summary}</p>
                  <ul className={styles.panelList}>
                    {activeSub.items.map((item, idx) => (
                      <li key={`${item}-${idx}`}>{item}</li>
                    ))}
                  </ul>
                  <Link
                    href={`/service-detail/${service.slug}/${activeSub.slug}`}
                    className={styles.subserviceLink}
                  >
                    Read detailed page
                  </Link>
                </div>
                <div>
                  <div className={styles.standardsBox}>
                    <h4>Applicable Frameworks</h4>
                    <ul>
                      {standards.map((tool, idx) => (
                        <li key={`${tool}-${idx}`}>{tool}</li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.deliverablesBox}>
                    <h4>Key Deliverables</h4>
                    <ul>
                      {activeSub.items.slice(0, 5).map((item, idx) => (
                        <li key={`${item}-${idx}`}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <div className="section-title mb-0">
              <h6 className="sub-title">SECTORS</h6>
              <h2 className={styles.sectionTitle}>Industries We Serve</h2>
            </div>
            <div className={styles.sectorsGrid}>
              {service.industries.map((industry, idx) => (
                <article key={`${industry}-${idx}`} className={styles.sectorCard}>
                  <h3>{industry}</h3>
                  <p>
                    Service execution adapted to the operating and compliance context of{" "}
                    {industry.toLowerCase()} businesses.
                  </p>
                </article>
              ))}
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

