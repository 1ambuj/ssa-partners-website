import React, { FormEvent, useMemo, useState } from "react";
import type { GetStaticPaths, GetStaticProps } from "next";
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

function moduleTabLabel(slug: string) {
  const shortLabels: Record<string, string> = {
    "special-purpose": "Special Purpose",
    "special-purpose-audit": "Special Purpose",
    "ngo-trust": "NGO / Trust",
    "ngo-society-audit": "NGO Audit",
    "regulatory-certifications": "Regulatory",
    "regulatory-compliance-advisory": "Regulatory",
    "corporate-structuring": "Structuring",
    "performance-improvement": "Performance",
    "finance-accounts-outsourcing": "FAO",
    "legal-process-outsourcing": "LPO",
    "payroll-outsourcing": "Payroll",
  };

  if (shortLabels[slug]) return shortLabels[slug];

  return slug
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function summaryParagraphs(summary: string | string[]) {
  return Array.isArray(summary) ? summary : [summary];
}

const ServiceDetailPage = ({ service }: Props) => {
  const isNri = service.slug === "nri";
  const isTaxation = service.slug === "taxation";
  const useAccordionModules =
    service.slug === "taxation" || service.slug === "gst" || service.slug === "nri";
  const scheduleLabel = "Schedule a Call";
  const [openModal, setOpenModal] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );
  const [error, setError] = useState("");
  const [activeSubservice, setActiveSubservice] = useState<number>(0);
  const [openSubservices, setOpenSubservices] = useState<number[]>([0]);
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

  const defaultFaqs = [
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
  const faqs = service.faqs && service.faqs.length > 0 ? service.faqs : defaultFaqs;

  const introParagraphs = useMemo(() => service.details, [service.details]);
  const overviewCards = useMemo(
    () =>
      service.benefits.slice(0, isNri ? 4 : 3).map((benefit, idx) => ({
        code: `Point ${String(idx + 1).padStart(2, "0")}`,
        title: service.tools[idx] || firstSentence(benefit),
        description: benefit,
      })),
    [isNri, service.benefits, service.tools]
  );
  const activeSub = service.subservices[activeSubservice] || service.subservices[0];
  const standards = useMemo(() => service.tools.slice(0, 6), [service.tools]);
  const nriModuleFrameworks: Record<string, string[]> = {
    "business-setup-india": [
      "FEMA 1999 S.6 and RBI Foreign Investment Master Direction",
      "Companies Act 2013 compliance for foreign-owned entities",
      "Consolidated FDI policy and sectoral route checks",
      "RBI annual FLA reporting and FC-GPR/FC-TRS lifecycle control",
    ],
    "international-tax": [
      "Sec 6 residency tests and RNOR framework",
      "Sec 90/90A DTAA claim rules with TRC and Form 10F",
      "Sec 195 withholding analysis and Rule 37BB compliance",
      "Capital gains framework under Sec 112/112A with treaty overlay",
    ],
    "remittance-repatriation": [
      "RBI remittance rules for NRIs/PIOs and account-route planning",
      "Rule 37BB and Form 15CA/15CB submission controls",
      "Sec 206C(1G) TCS implications for LRS-linked remittances",
      "FEMA compounding pathway for legacy non-compliance",
    ],
    "nri-legal-regulatory": [
      "FEMA immovable property permissions for NRIs/PIOs",
      "Sec 54/54F reinvestment and capital gains optimization",
      "Sec 194-IA withholding in NRI-linked property transfers",
      "Succession and inherited asset treatment with FEMA interface",
    ],
  };
  const nriRegulatoryCards = [
    {
      icon: "fa-landmark",
      law: "FEMA 1999 · RBI Master Directions",
      title: "Foreign Exchange Management",
      body: "Governs all inbound and outbound capital flows — remittances, investments, loans, property transactions, and repatriation. Non-compliance attracts compounding penalties under FEMA Sec 13. RBI Master Directions 2016 set the detailed operational framework for each transaction category.",
    },
    {
      icon: "fa-chart-line",
      law: "Income Tax Act 1961 / ITA 2025",
      title: "Non-Resident Taxation",
      body: "NRI tax liability is restricted to Indian-sourced income — but TDS deductions, capital gains computation, DTAA claims, and return filing obligations must all be managed correctly. Sec 195 TDS on payments to NRIs and the new ITA 2025 provisions for residency and RNOR status are particularly critical areas.",
    },
    {
      icon: "fa-building",
      law: "Companies Act 2013 · SEBI Regulations",
      title: "Corporate & Securities Law",
      body: "Foreign entities setting up in India must navigate Companies Act requirements for subsidiaries, branch offices, liaison offices, and project offices — each with distinct MCA registration, filing, and compliance obligations. SEBI FPI and FDI regulations also apply to portfolio investment and listed company holdings.",
    },
    {
      icon: "fa-handshake",
      law: "Double Taxation Avoidance Agreements",
      title: "Tax Treaties — India's DTAA Network",
      body: "India has active DTAAs with 90+ countries. Treaty benefits — reduced withholding rates, source-country exemptions, PE definitions — require a Tax Residency Certificate (TRC), Form 10F filing, and a structured treaty analysis before any payment or return is processed. Treaty shopping is subject to PPT (Principal Purpose Test) under BEPS.",
    },
    {
      icon: "fa-scale-balanced",
      law: "Transfer Pricing · Sec 92-92F",
      title: "Related-Party Cross-Border Pricing",
      body: "Transactions between an NRI-controlled Indian entity and overseas affiliates — management fees, royalties, interest, cost allocations — must be priced at arm's length and supported by a Transfer Pricing Study Report (Form 3CEB). The Accountant's Report must be issued by a Chartered Accountant as defined under ITA.",
    },
    {
      icon: "fa-university",
      law: "NRO · NRE · FCNR(B) Banking",
      title: "NRI Banking & Repatriation Routes",
      body: "The choice between NRO and NRE accounts determines repatriability of funds. Repatriation from NRO accounts (up to USD 1 million per year) requires Form 15CA/CB, an undertaking to the AD bank, and income tax compliance documentation. Structuring the account type correctly at inception avoids complex unwinding later.",
    },
  ];
  const nriClientSegments = [
    {
      title: "NRIs & Persons of Indian Origin (PIOs)",
      body: "Individuals holding Indian passports or of Indian origin, residing overseas — managing income from Indian property, investments, and savings. Key concerns include RNOR planning, capital gains on property sales, DTAA claims, and annual ITR filing obligations in India.",
      icon: "fa-earth-asia",
      tone: "teal",
    },
    {
      title: "Foreign Nationals & Expatriates in India",
      body: "Professionals and employees on assignment in India — navigating salary split arrangements, RNOR status, Section 195 deductions, social security treaty applicability, and repatriation of accumulated savings at the end of their India tenure.",
      icon: "fa-id-card",
      tone: "green",
    },
    {
      title: "Foreign Companies & Multinationals Entering India",
      body: "Overseas entities establishing a presence in India — evaluating entry options (subsidiary, branch, liaison, project office), managing Permanent Establishment risk, structuring management fee and royalty arrangements, and meeting first-year MCA and FEMA compliance requirements.",
      icon: "fa-building",
      tone: "blue",
    },
    {
      title: "NRI Entrepreneurs & HNIs with India Assets",
      body: "High-net-worth individuals with inherited or acquired Indian property, stock portfolios, or business interests — requiring integrated advice on capital gains structuring, succession planning under Hindu law or FEMA, and ongoing NRO/NRE management for rental and investment income.",
      icon: "fa-briefcase",
      tone: "amber",
    },
  ];
  const nriSixModel = [
    {
      title: "Assess",
      desc: "Residency status, income sources, prior FEMA exposures, and treaty scope before execution.",
      ref: "Sec 6 · FEMA 1999 · DTAA",
    },
    {
      title: "Structure",
      desc: "Optimal transaction route with FEMA, DTAA, and banking treatment aligned from day one.",
      ref: "FDI Policy · Sec 90/90A",
    },
    {
      title: "Compute",
      desc: "Tax and withholding computation with treaty override, capital gains logic, and evidence trail.",
      ref: "Sec 112 · Sec 195",
    },
    {
      title: "Document",
      desc: "Working-paper quality file with TRC, Form 10F, declarations, and certification support.",
      ref: "Rule 37BB · ICAI GN",
    },
    {
      title: "File & Report",
      desc: "15CA/CB, ITR, RBI, and MCA reporting delivered on timeline with complete disclosures.",
      ref: "Form 15CA/CB · FLA",
    },
    {
      title: "Defend",
      desc: "Prepared representation for scrutiny, appeal, and FEMA proceedings with pre-built records.",
      ref: "FEMA Sec 13 · ITA",
    },
  ];
  const nriWhyCards = [
    {
      code: "FEMA + ITA",
      title: "Integrated, Not Siloed",
      body: "Most advisors handle FEMA or tax — not both. Our practice integrates FEMA compliance, income tax advisory, and corporate law into a single engagement team. You get one coordinated view, not three different advisors with three different answers.",
    },
    {
      code: "ICAI GN",
      title: "Certificates You Can Stand Behind",
      body: "Form 15CB certifications issued by SSA are based on genuine examination of all relevant documents, DTAA applicability, and FEMA compliance — consistent with ICAI's Guidance Note on Certificates. We do not issue certificates without completing the underlying examination.",
    },
    {
      code: "6×",
      title: "Documentation-First Practice",
      body: "Every position taken in an NRI engagement is documented at the time it is taken — not reconstructed later. When RBI or Income Tax scrutiny arrives, our clients are prepared. The 6× model ensures documentation quality is built into every step.",
    },
    {
      code: "ITA 25",
      title: "ITA 2025 Ready",
      body: "The Income Tax Act 2025 revises NRI residency provisions, RNOR conditions, and treaty benefit procedures effective AY 2026-27. Our team has completed a full mapping of the NRI-specific changes. All advisory from 2025 onwards is aligned to the new Act's structure.",
    },
    {
      code: "90+",
      title: "Treaty Depth",
      body: "We maintain working knowledge of India's bilateral tax treaties with key NRI corridors — USA, UK, UAE, Canada, Australia, Singapore, Germany, and others. Treaty analysis is not generic; it is country-specific, updated for MLI modifications, and backed by written documentation.",
    },
    {
      code: "↔",
      title: "One India Contact Point",
      body: "Managing Indian tax, banking, FEMA, and property matters from abroad requires a single, reliable contact in India who understands the full picture. Our NRI practice is structured to be that partner — responsive, proactive, and accountable.",
    },
  ];
  const nriMethodology = [
    {
      title: "Intake Assessment — Residency, History & Exposure Mapping",
      desc: "We begin every NRI engagement with a structured intake — mapping residency status across the past 10 years, identifying all India-sourced income streams, cataloguing FEMA-relevant transactions, and surfacing any prior compliance gaps. This is not a form-filling exercise; it is a forensic review of your India regulatory footprint. The output is a clear engagement scope memo.",
      output: "Output: Engagement scope memo · Residency determination · FEMA exposure map",
    },
    {
      title: "Transaction Structuring & Treaty Analysis",
      desc: "For each transaction — whether a property sale, remittance, investment, or business setup — we prepare a structuring note that addresses the FEMA route, applicable DTAA provisions, Indian tax treatment, and documentation requirements simultaneously. No transaction is processed without a written structuring note signed off by the engagement partner.",
      output: "Output: Structuring note · DTAA analysis · FEMA compliance checklist",
    },
    {
      title: "Documentation Package Preparation",
      desc: "Cross-border transactions require a layered documentation package — tax computations, FEMA declarations, bank undertakings, CA certificates, and regulatory filings. We prepare the complete package in a format that satisfies AD bank requirements, income tax scrutiny, and FEMA inquiry standards simultaneously. Documents are prepared to ICAI's Guidance Note on Certificates standard.",
      output: "Output: Form 15CA/CB · TRC/Form 10F · Bank documentation file · Working papers",
    },
    {
      title: "Filing — Tax Returns, RBI Reporting & MCA Filings",
      desc: "We manage the full filing calendar across Income Tax, RBI, and MCA — ensuring ITR deadlines, FLA filings, FCGPR and FCTRS timelines, and all associated reporting are met without exception. Each return is filed with complete disclosure and documentation alignment.",
      output: "Output: Filed ITR · RBI returns · MCA filings · Confirmation archive",
    },
    {
      title: "Proactive Monitoring — Regulatory Updates & Alerts",
      desc: "FEMA regulations, DTAA amendments, RBI circulars, and Income Tax Act changes affecting NRIs are tracked continuously. Clients receive structured impact alerts — with clear explanation of what changed, how it affects their position, and what action is required.",
      output: "Output: Regulatory impact notes · Periodic compliance bulletin",
    },
    {
      title: "Representation & Dispute Management",
      desc: "NRI income tax scrutiny and FEMA show-cause notices are increasing. When a notice arrives, our documentation-first approach means we are ready — not reconstructing records under pressure. We prepare written submissions, appear before the Income Tax Department, and where required, handle FEMA compounding applications.",
    },
  ];

  const toggleSubservice = (idx: number) => {
    setOpenSubservices((current) =>
      current.includes(idx)
        ? current.filter((item) => item !== idx)
        : [...current, idx]
    );
  };

  const renderModulePanel = (sub: Service["subservices"][number]) => (
    <div className={styles.offeringPanel}>
      <div>
        <p className={styles.panelEyebrow}>Module Overview</p>
        <h3>{sub.title}</h3>
        <div className={styles.panelSummary}>
          {summaryParagraphs(sub.summary).map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </div>
        <ul className={styles.panelList}>
          {sub.items.map((item, idx) => (
            <li key={`${item}-${idx}`}>{item}</li>
          ))}
        </ul>
      </div>
      <div className={styles.panelSide}>
        <div className={styles.standardsBox}>
          <h4>Service Scope & Frameworks</h4>
          {sub.scope ? (
            <div className={styles.blueScope}>
              <p className={styles.blueScopeLabel}>Scope</p>
              <p className={styles.blueScopeText}>{sub.scope}</p>
            </div>
          ) : null}
          <ul className={styles.frameworkList}>
            {(isNri && nriModuleFrameworks[sub.slug]
              ? nriModuleFrameworks[sub.slug]
              : standards
            ).map((tool, idx) => (
              <li key={`${tool}-${idx}`}>{tool}</li>
            ))}
          </ul>
          <div className={styles.blueKeyWrap}>
            <p className={styles.blueKeyLabel}>Key Points</p>
            <div className={styles.blueKeyList}>
              {sub.items.slice(0, 4).map((item, idx) => (
                <span key={`${item}-${idx}`}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

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

        

        <section className={`${styles.section} ${styles.surfaceSection}`} id="service-detail-content">
          <div className="container">
            <div className={styles.twoCol}>
              <div>
                <div className="section-title mb-0">
                  <h6 className="sub-title">OVERVIEW</h6>
                  <h2 className={styles.sectionTitle}>
                    {service.overviewTitle || "What This Service Covers"}
                  </h2>
                  <span className={styles.sectionMiniRule} aria-hidden="true" />
                </div>
                <div className={styles.introText}>
                  {introParagraphs.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
                {isNri ? (
                  <div className={styles.nriNotice}>
                    <p className={styles.nriNoticeTitle}>ITA 2025 — Impact on NRIs</p>
                    <p className={styles.nriNoticeText}>
                      The Income Tax Act 2025 (effective AY 2026-27) restructures provisions
                      governing NRI taxation, RNOR status, residency determination, and Sec 195
                      TDS obligations. All our NRI advisory and return filing work from AY
                      2026-27 is mapped to the new Act's structure. We advise clients proactively
                      on impact assessments before filing deadlines.
                    </p>
                  </div>
                ) : null}
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

        {isNri ? (
          <>
            <section className={`${styles.section} ${styles.altSection}`}>
              <div className="container">
                <div className="section-title mb-0">
                  <h6 className="sub-title">Regulatory Framework</h6>
                  <h2 className={styles.sectionTitle}>The Laws That Govern Your India Connection</h2>
                  <span className={styles.sectionMiniRule} aria-hidden="true" />
                </div>
                <p className={styles.nriRegIntro}>
                  Cross-border transactions in India sit at the intersection of multiple regulatory
                  frameworks. Each must be addressed simultaneously, not in isolation.
                </p>
                <div className={styles.nriRegGrid}>
                  {nriRegulatoryCards.map((card) => (
                    <article key={card.title} className={styles.nriRegCard}>
                      <span className={styles.nriRegIcon} aria-hidden="true">
                        <i className={`fa-solid ${card.icon}`}></i>
                      </span>
                      <p className={styles.nriRegLaw}>{card.law}</p>
                      <h3>{card.title}</h3>
                      <p>{card.body}</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section className={`${styles.section} ${styles.nriClientsSection}`}>
              <div className="container">
                <div className="section-title mb-0">
                  <h6 className="sub-title">Clients</h6>
                  <h2 className={styles.sectionTitle}>Who This Practice Serves</h2>
                  <span className={styles.sectionMiniRule} aria-hidden="true" />
                </div>
                <div className={styles.nriClientsGrid}>
                  {nriClientSegments.map((segment) => (
                    <article key={segment.title} className={styles.nriClientCard}>
                      <span
                        className={`${styles.nriClientIcon} ${
                          segment.tone === "green"
                            ? styles.nriClientIconGreen
                            : segment.tone === "blue"
                            ? styles.nriClientIconBlue
                            : segment.tone === "amber"
                            ? styles.nriClientIconAmber
                            : styles.nriClientIconTeal
                        }`}
                        aria-hidden="true"
                      >
                        <i className={`fa-solid ${segment.icon}`}></i>
                      </span>
                      <div>
                        <h3>{segment.title}</h3>
                        <p>{segment.body}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          </>
        ) : null}

        <section
          className={`${styles.section} ${styles.altSection} ${isTaxation ? styles.taxationOfferings : ""}`}
          id="service-offerings"
        >
          <div className="container">
            <div className="section-title mb-0">
              <h6 className="sub-title">OUR OFFERINGS</h6>
              <h2 className={styles.sectionTitle}>Service Modules</h2>
              <span className={styles.sectionMiniRule} aria-hidden="true" />
            </div>
            <div className={styles.offeringsWrap}>
              {useAccordionModules ? (
                <div className={styles.moduleAccordion}>
                  {service.subservices.map((sub, idx) => {
                    const isOpen = openSubservices.includes(idx);

                    return (
                      <article key={sub.slug} className={styles.moduleAccordionItem}>
                        <button
                          type="button"
                          className={`${styles.moduleAccordionHeader} ${
                            isOpen ? styles.moduleAccordionHeaderOpen : ""
                          }`}
                          onClick={() => toggleSubservice(idx)}
                          aria-expanded={isOpen}
                        >
                          <span>
                            <span className={styles.moduleAccordionKicker}>
                              Module {String(idx + 1).padStart(2, "0")}
                            </span>
                            <span className={styles.moduleAccordionTitle}>{sub.title}</span>
                          </span>
                          <span className={styles.moduleAccordionIcon}>
                            {isOpen ? "-" : "+"}
                          </span>
                        </button>
                        {isOpen ? (
                          <div className={styles.moduleAccordionBody}>
                            {renderModulePanel(sub)}
                          </div>
                        ) : null}
                      </article>
                    );
                  })}
                </div>
              ) : (
                <>
                  <div className={styles.tabsBar}>
                    {service.subservices.map((sub, idx) => (
                      <button
                        key={sub.slug}
                        type="button"
                        className={activeSubservice === idx ? styles.tabActive : ""}
                        onClick={() => setActiveSubservice(idx)}
                      >
                        {moduleTabLabel(sub.slug)}
                      </button>
                    ))}
                  </div>
                  {renderModulePanel(activeSub)}
                </>
              )}
            </div>
          </div>
        </section>

        {isNri ? (
          <>
            <section className={`${styles.section} ${styles.nriFrameworkSection}`}>
              <div className="container">
                <div className="section-title mb-0">
                  <h6 className="sub-title">SSA Service Framework</h6>
                  <h2 className={styles.sectionTitle}>The 6× Model for NRI & Cross-Border Engagements</h2>
                  <span className={styles.sectionMiniRule} aria-hidden="true" />
                </div>
                <div className={styles.nriFrameworkShell}>
                  <div className={styles.nriFrameworkLeft}>
                    <p>
                    Cross-border engagements are inherently multi-dimensional — a single transaction triggers obligations under FEMA, Income Tax, and sometimes MCA simultaneously. Our 6× delivery model ensures every dimension is assessed, every position is documented, and every filing is defensible.
                    </p>
                    <p>
                    The model is not a workflow — it is a quality standard. Each step has a defined output, and no engagement moves forward without completing the prior step's deliverable.
                    </p>
                    <div className={styles.nriProcessStrip}>
                      {nriSixModel.map((step, idx) => (
                        <span key={step.title}>
                          <small>{String(idx + 1).padStart(2, "0")}</small>
                          {step.title}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className={styles.nriFrameworkRight}>
                    <p className={styles.nriFrameworkLead}>Six Steps. No Exceptions.</p>
                    <div className={styles.nriFrameworkGrid}>
                      {nriSixModel.map((step, idx) => (
                        <article key={step.title} className={styles.nriFrameworkCard}>
                          <p className={styles.nriFrameworkNum}>
                            {String(idx + 1).padStart(2, "0")}
                          </p>
                          <h3>{step.title}</h3>
                          <p>{step.desc}</p>
                          <p className={styles.nriFrameworkRef}>{step.ref}</p>
                        </article>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className={`${styles.section} ${styles.surfaceSection} ${styles.nriMethodSection}`}>
              <div className="container">
                <div className="section-title mb-0">
                  <h6 className="sub-title">Methodology</h6>
                  <h2 className={styles.sectionTitle}>
                    How We Engage — From First Enquiry to Ongoing Compliance
                  </h2>
                  <span className={styles.sectionMiniRule} aria-hidden="true" />
                </div>
                <div className={styles.nriMethodList}>
                  {nriMethodology.map((step, idx) => (
                    <article key={`${step.title}-${idx}`} className={styles.nriMethodItem}>
                      <span className={styles.nriMethodNum}>{String(idx + 1).padStart(2, "0")}</span>
                      <div>
                        <h3>{step.title}</h3>
                        <p>{step.desc}</p>
                        {step.output ? (
                          <p className={styles.nriMethodOutput}>{step.output}</p>
                        ) : null}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section className={`${styles.section} ${styles.altSection}`}>
              <div className="container">
                <div className="section-title mb-0">
                  <h6 className="sub-title">Why SSA</h6>
                  <h2 className={styles.sectionTitle}>What Sets Our NRI Practice Apart</h2>
                  <span className={styles.sectionMiniRule} aria-hidden="true" />
                </div>
                <div className={styles.whyGrid}>
                  {nriWhyCards.map((item) => (
                    <article key={item.title} className={styles.whyItem}>
                      <p className={styles.whyNum}>{item.code}</p>
                      <h3>{item.title}</h3>
                      <p>{item.body}</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          </>
        ) : null}

        <section className={`${styles.section} ${styles.faqSection}`}>
          <div className="container">
            <div className="section-title mb-0">
              <h6 className="sub-title">SUPPORT</h6>
              <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
              <span className={styles.sectionMiniRule} aria-hidden="true" />
            </div>
            <div className={`${styles.faqWrap} ${isTaxation ? styles.taxationFaqWrap : ""}`}>
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

        <div className={styles.blogSectionWrap}>
          <Blog
            serviceSlug={service.slug}
            title="Latest Articles"
            subTitle="News & Blog"
            showViewAll
            bottomPadding={false}
          />
        </div>

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

