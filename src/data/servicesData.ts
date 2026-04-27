// imports – keep your existing paths
import one from "public/images/service/1.png";
import two from "public/images/service/2.png";
import three from "public/images/service/3.png";
import four from "public/images/service/4.png";
import five from "public/images/service/5.png";
import six from "public/images/service/6.png";
import seven from "public/images/service/7.png";

// Icons for cards (service-icon)
import icon1 from "public/images/service-icon/1.png";
import icon2 from "public/images/service-icon/2.png";
import icon3 from "public/images/service-icon/3.png";
import icon4 from "public/images/service-icon/4.png";
import icon5 from "public/images/service-icon/5.png";

export type Subservice = {
  slug: string;
  title: string;
  summary: string | string[];
  scope?: string;
  items: string[];
  // extra SEO fields for sub-service page
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
};

export type Service = {
  slug: string;
  title: string;
  href: string;
  icon: string;
  img1: string;
  img2: string;
  mainImg: string;
  animImg1: string;
  animImg2: string;
  description: string;
  overviewTitle?: string;
  details: string[];
  approach: string[];
  benefits: string[];
  industries: string[];
  tools: string[];
  subservices: Subservice[];
  cta: {
    title: string;
    subtitle: string;
    buttonText: string;
  };
  faqs?: {
    q: string;
    a: string;
  }[];
  // optional SEO fields for main service page
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
};

const servicesList: Service[] = [
  {
    slug: "audit",
    title: "Audit & Assurance",
    href: "/services/audit",
    icon: icon1 as unknown as string,
    img1: one as unknown as string,
    img2: six as unknown as string,
    mainImg: one as unknown as string,
    animImg1: two as unknown as string,
    animImg2: three as unknown as string,
    description:
      "Independent, ethical, and compliant audit & assurance services that strengthen transparency, governance, and stakeholder confidence.",

    metaTitle:
      "Audit & Assurance Services | Statutory, Tax & Internal Audit – Sandeep Singla & Associates",
    metaDescription:
      "Chartered Accountant firm offering Statutory Audit, Tax Audit, Internal Audit, Special Purpose Audits, and Regulatory Certifications for companies, LLPs, NGOs, and trusts in India.",
    keywords: [
      "statutory audit",
      "tax audit",
      "internal audit",
      "CA firm audit",
      "audit and assurance Gurgaon",
      "audit and assurance Delhi",
      "ICAI Standards on Auditing",
    ],

    details: [
      "Our Audit & Assurance practice provides an independent and objective opinion on financial statements and internal controls, in line with Indian corporate laws and ICAI Standards on Auditing. We go beyond checklist-based audits to focus on risk, controls, and business processes.",
      "Every engagement is executed with strict independence, integrity, and confidentiality — underpinned by a structured engagement quality control review process as required by SA 220 and SQC 1.",
      "We serve companies, LLPs, trusts, NGOs, startups, and regulated entities across multiple sectors, bringing sector-specific knowledge and professional scepticism to every engagement.",
    ],

    approach: [
      "Scanning business model, risk profile, and regulatory environment",
      "Designing a risk‑based audit strategy aligned with ICAI standards",
      "Evaluating internal controls and process effectiveness",
      "Performing detailed testing and analytical procedures",
      "Issuing clear, insight‑driven reports and recommendations",
    ],

    benefits: [
      "Greater financial transparency and reliability of reports",
      "Stronger internal control and risk management frameworks",
      "Improved readiness for lenders, investors, and regulators",
      "Reduced likelihood of non‑compliance and penalties",
    ],

    industries: [
      "Manufacturing",
      "Startups & MSMEs",
      "Real Estate & Infrastructure",
      "Healthcare & Pharma",
      "NGOs, Societies & Trusts",
      "Professional & Service Firms",
    ],

    tools: [
      "ICAI Standards on Auditing",
      "Companies Act & LLP Act",
      "Internal Control & Risk Frameworks",
      "Data‑driven analytical procedures",
    ],

    subservices: [
      {
        slug: "statutory-audit",
        title: "Statutory Audit",
        summary: [
          "The statutory audit is a legally required independent examination of a company's financial statements under the Companies Act 2013. It applies to all registered companies regardless of size. Our audit goes beyond compliance — it provides management with genuine insight into financial risks, control gaps, and governance quality.",
          "The audit opinion is issued under SA 700 (Revised) and includes an Internal Financial Controls (IFC) opinion under Section 143(3)(i), CARO 2020 reporting, Key Audit Matters under SA 701 (listed entities), and audit trail compliance reporting under MCA Rule 11(g)."
        ],
        items: [
          "Risk identification and assessment per SA 315 — entity, environment, and assertion level",
          "Materiality determination — planning and performance materiality per SA 320",
          "Test of controls and substantive procedures per SA 330",
          "Fraud risk assessment and reporting per SA 240",
          "Going concern evaluation per SA 570 (Revised)",
          "Key Audit Matters communication per SA 701 (listed companies)",
      "CARO 2020 — full 21-clause reporting for applicable companies",
      "IFC audit opinion under Section 143(3)(i) for all companies",
      "Audit trail (edit log) reporting per MCA Rule 11(g) — ICAI IG 2024",
      "Management letter with internal control observations",
        ],
        metaTitle:
          "Statutory Audit Services under Companies Act & LLP Act – Sandeep Singla & Associates",
        metaDescription:
          "End‑to‑end statutory audit services for companies and LLPs under Indian corporate laws, focused on true and fair financial reporting and regulatory compliance.",
        keywords: [
          "statutory audit services",
          "company audit",
          "LLP audit",
          "Companies Act audit",
          "financial statement audit",
        ],
      },
      {
        slug: "tax-audit",
        title: "Tax Audit",
        summary: [
          "Tax Audit under Section 44AB of the Income Tax Act, 1961 is mandatory for businesses and professionals whose turnover or gross receipts cross the prescribed thresholds. The audit is reported through Form 3CA/3CB (opinion) and Form 3CD — a 44-clause detailed factual report covering every aspect of the taxpayer's accounts.",
         "ICAI's Guidance Note on Tax Audit u/s 44AB (Revised 2023) governs how this audit is conducted and reported. From FY 2026-27, the tax audit limit is capped at 60 per member per year per revised ICAI norms effective April 2026.",
          
        ],
        items: [
          "Applicability assessment — Sec 44AB, 44ADA, 44AE thresholds",
          "Verification of books of accounts, turnover, and receipts",
          "Depreciation verification — WDV, additional depreciation, block-wise schedule",
          "Disallowances review — Sec 40A(3), 40(a)(ia), 43B, 269SS/T",
          "GST turnover reconciliation with books of accounts",
          "TDS compliance check — Sec 194C, 194I, 194J, 194Q, etc.",
          "Advance tax and self-assessment tax reconciliation",
          "Related party transactions and transfer pricing observation",
          "Form 3CD — all 44 clauses (comprehensive factual reporting)",
          "Form 3CEB — Transfer Pricing Report u/s 92E where applicable",
        ],
        metaTitle:
          "Tax Audit under Section 44AB | Income Tax Act 1961 – Sandeep Singla & Associates",
        metaDescription:
          "Tax audit services under Section 44AB of the Income Tax Act, covering tax computations, reconciliations, and compliance‑ready audit reports.",
        keywords: [
          "tax audit",
          "Section 44AB",
          "income tax audit",
          "tax audit report",
        ],
      },
      {
        slug: "internal-audit",
        title: "Internal Audit",
        summary:[
          "Internal Audit is a systematic, independent, and documented process providing assurance on risk management, internal controls, and governance. Under Section 138 of the Companies Act 2013, specified classes of companies must appoint an internal auditor.",
          "ICAI's Internal Audit Standards Board (IASB — renamed March 2025) governs internal audit through the SIA series: SIA 100 (Concepts), SIA 200 (Execution), and SIA 300 (Reporting). These principle-based standards are mandatory for CA firms conducting internal audits.",
        ],
        items: [
          "Risk-based internal audit plan aligned with entity risk register",
          "Process-level controls assessment — design and operating effectiveness",
          "Procurement, AP and AR process audits",
          "Payroll, HR, and expense process reviews",
          "IT general controls and application controls review",
          "Revenue assurance and billing cycle audits",
          "Compliance audits — GST, TDS, labour laws, FEMA",
          "Fraud risk assessments and red flag identification",
          "Internal Audit Report per SIA 300 series",
          "Audit Committee presentations — quarterly or half-yearly",
        ],
        metaTitle:
          "Internal Audit Services | Process & Control Review – Sandeep Singla & Associates",
        metaDescription:
          "Internal audit services focused on governance, risk, and controls, helping businesses strengthen systems and improve operational efficiency.",
        keywords: [
          "internal audit",
          "process audit",
          "risk based internal audit",
          "internal control review",
        ],
      },
      {
        slug: "special-purpose",
        title: "Special Purpose Audits & Certifications",
        summary:[
          "Special purpose audit engagements are commissioned for a specific user or purpose — lender certifications, regulatory submissions, grant utilisation, IPO-related work, and project audits. ICAI issued Revised SA 800, SA 805, and SA 810 effective from FY 2024-25 onwards.",
          "These audits require the auditor to clearly understand the special purpose framework, the intended users, and the restrictions on distribution of the report as required under the revised standards.",
        ],
        items: [
          "Net worth certificates for banks and financial institutions",
          "Stock audit / inventory verification for bank borrowers",
          "Utilisation certificates for grants, CSR funds, and government schemes",
          "Turnover and profitability certificates for tenders",
          "Forensic audit support and fraud investigation reports",
          "Financial and tax due diligence reports",
          "Limited review of quarterly financial results (listed entities)",
          "Branch audits and component audits under SA 600",
        ],
        metaTitle:
          "Special Purpose Audits | Management, Stock & Fixed Asset Audit",
        metaDescription:
          "Special purpose audit services including management audits, stock audits, and fixed asset verification tailored to specific regulatory or management requirements.",
        keywords: [
          "special purpose audit",
          "management audit",
          "stock audit",
          "fixed asset verification",
        ],
      },
      {
        slug: "NGO/Trust",
        title: "Societies, Trusts & NGO Audit",
        summary:[
          "Charitable institutions, societies, and trusts are subject to a distinct audit framework combining the Income Tax Act 1961 (Sec 12A, 12AB, 10(23C)), the Societies Registration Act, and FCRA 2010 for foreign contributions. ICAI's Technical Guide on Audit of Charitable Institutions (2022) covers these requirements comprehensively.",
          "The new re-registration regime under Sec 12AB and revised Form 10B/10BB formats (applicable from AY 2024-25) have added significant compliance obligations for trusts and institutions.",
        ],
        items: [
          "Audit of charitable and religious trusts registered u/s 12A/12AB",
          "Form 10B / Form 10BB certification (AY 2024-25 revised formats)",
          "Application of income verification — 85% application rule",
          "Accumulation of income — Form 10 filing u/s 11(2)",
          "Corpus donations receipt and utilisation verification",
          "FCRA audit — foreign contribution receipt and utilisation",
          "80G / 35AC trust audit and certification",
          "CSR fund utilisation audit — Sec 135, Companies Act 2013",
          "Educational institution audit u/s 10(23C)",
          "Annual statement of accounts for registered societies",
        ],
        metaTitle:
          "NGO, Trust & Society Audit Services – Sandeep Singla & Associates",
        metaDescription:
          "Audit and certification services for NGOs, trusts, and societies, ensuring compliant and transparent utilisation of funds.",
        keywords: ["ngo audit", "trust audit", "society audit", "charity audit"],
      },
      {
        slug: "Reg. certifications",
        title: "Regulatory Certifications & Compliance",
        summary:[
          "Regulatory bodies in India — SEBI, RBI, MCA, IRDAI, and state governments — require periodic certifications and compliance reports from independent Chartered Accountants. These engagements demand precise knowledge of the applicable regulatory framework and structured reporting that withstands regulatory scrutiny.",
          "Our team is experienced in XBRL financial filings, NBFC compliance certificates, bank regulatory returns, and capital adequacy certifications.",
        ],
        items: [
          "XBRL financial statement certification (ICAI GN on XBRL Certification)",   
          "SEBI LODR compliance certificate for listed companies",
          "RBI regulatory returns certification for NBFCs and banks",
          "Capital adequacy and net-owned funds certificates (NBFC)",
          "IRDAI compliance and solvency margin certificates",
          "MCA annual return certifications — Form MGT-8 for large companies",
          "State government grant and scheme fund certifications",
          "GST annual reconciliation — GSTR-9C certified by CA",
          "FEMA / RBI certification for foreign investment compliance",
          "Secretarial audit support and compliance review",
        ],
        metaTitle:
          "Regulatory Certifications under FEMA, RBI, GST & Export Laws",
        metaDescription:
          "Regulatory certification and compliance support for FEMA, RBI, GST, export regulations, and other statutory requirements.",
        keywords: [
          "FEMA certificates",
          "RBI certificates",
          "export remittance certification",
          "CA certification",
        ],
      },
    ],

    faqs: [
      {
        q: "Who is mandatorily required to get a statutory audit done?",
        a: "All companies registered under the Companies Act 2013 — private limited, public limited, OPC — must get their accounts audited by a Chartered Accountant, regardless of turnover or size. LLPs are required under Section 34(2) of the LLP Act 2008 if their turnover exceeds ₹40 lakh or capital contribution exceeds ₹25 lakh. The audit must be conducted under ICAI's Standards on Auditing.\n\nLaw: Sec 139-148, Companies Act 2013 · Standard: SA 200, SA 700 (Revised)",
      },
      {
        q: "What is the audit trail requirement under MCA Rule 11(g)?",
        a: "From FY 2023-24 onwards, every company using accounting software must ensure the software features an audit trail (edit log) that records every transaction and any change, with date and time stamp. The auditor must specifically report on whether the audit trail was enabled throughout the year, whether it was tampered with, and whether records were preserved. ICAI issued an Implementation Guide on Audit Trail (Revised 2024 Edition) under Rule 11(g).\n\nLaw: MCA Rule 11(g), Companies (Audit & Auditors) Rules 2014 · ICAI: Implementation Guide on Audit Trail (2024)",
      },
      {
        q: "What is the difference between an IFC audit and a statutory audit?",
        a: "A statutory audit provides an opinion on whether financial statements present a true and fair view. An IFC audit, required under Section 143(3)(i) of the Companies Act 2013, provides a separate opinion on whether the company has adequate Internal Financial Controls in place and whether they were operating effectively. Both opinions are typically issued as part of the consolidated auditor's report.\n\nLaw: Sec 143(3)(i), Companies Act 2013 · ICAI: GN on Audit of IFC over Financial Reporting",
      },
      {
        q: "When is a tax audit mandatory and what changed in 2026?",
        a: "Tax Audit u/s 44AB is mandatory when business turnover exceeds ₹1 crore (₹10 crore if 95%+ transactions are digital) or professional receipts exceed ₹50 lakh. It is also mandatory when income is declared lower than the presumptive income under Sec 44AD/44ADA/44AE. Effective from 1 April 2026, ICAI confirmed the audit limit stays at 60 per member per year. The limit cannot be distributed among partners, and revised tax audit reports are excluded from the count.\n\nLaw: Sec 44AB, ITA 1961 · ICAI: GN on Tax Audit u/s 44AB (Revised 2023) · ICAI Circular, July 2025",
      },
      {
        q: "What changed in NGO/trust audit for AY 2024-25?",
        a: "Significant changes apply from AY 2024-25: Form 10B (for trusts with income above ₹5 crore, or foreign contribution, or corpus application) was substantially revised with detailed disclosure requirements. Form 10BB applies to other educational and medical institutions. The audit report must now be filed separately before the return of income. ICAI issued a Guidance Note on Reports of Audit u/s 12A/10(23C) (July 2024) covering the revised requirements. Trusts must also have completed re-registration under the Sec 12AB regime.\n\nLaw: Sec 12A/12AB/10(23C), ITA 1961 · ICAI: GN on Reports of Audit u/s 12A/10(23C) (July 2024)",
      },
      {
        q: "How do the revised SA 800, 805, and 810 affect our engagement?",
        a: "ICAI issued revised SA 800, 805, and 810 effective from FY 2024-25 (1 April 2024 onwards). SA 800 (Revised) covers audits under special purpose frameworks, requiring the auditor to clearly evaluate the appropriateness of the framework and restrict distribution of the report to intended users. SA 805 (Revised) addresses single financial statements. SA 810 (Revised) governs reporting on summary financial statements, emphasising that summary statements must adequately convey the information in the full audited statements.\n\nICAI: SA 800, SA 805, SA 810 (All Revised) — applicable from FY 2024-25 (Notified 7 Feb 2024)",
      },
    ],

    cta: {
      title: "Ensure Financial Accuracy & Compliance",
      subtitle: "Get an independent audit that builds trust with regulators, lenders, and investors.",
      buttonText: "Schedule an Audit Call",
    },
  },

  {
    slug: "advisory",
    title: "Advisory & Consulting",
    href: "/services/advisory",
    icon: icon2 as unknown as string,
    img1: six as unknown as string,
    img2: seven as unknown as string,
    mainImg: six as unknown as string,
    animImg1: two as unknown as string,
    animImg2: three as unknown as string,
    description:
      "Strategic legal, financial, and regulatory advisory that helps you structure, grow, and future‑proof your business.",

    metaTitle:
      "Advisory Services | Transaction, Corporate Structuring & Regulatory – Sandeep Singla & Associates",
    metaDescription:
      "End‑to‑end advisory services covering transaction advisory, corporate structuring, regulatory compliance, tax structuring, financial advisory, and performance improvement.",
    keywords: [
      "transaction advisory",
      "corporate structuring",
      "regulatory advisory",
      "financial advisory",
      "business consulting CA firm",
    ],

    details: [
      "We advise promoters, management teams, and investors on complex legal, tax, and financial decisions across the full business lifecycle.",
      "Our advisory engagements are aligned with ICAI professional standards and Indian regulatory frameworks, combining technical depth with practical, implementation‑ready solutions.",
      "From deal structuring and capital design to governance, compliance, and performance improvement, we act as a long‑term strategic partner to your business.",
    ],

    approach: [
      "Understanding business model, goals, and constraints",
      "Scanning legal, tax, and regulatory landscape",
      "Designing optimal structures, options, and scenarios",
      "Implementing strategies with documentation and filings",
      "Ongoing review as laws and business needs evolve",
    ],

    benefits: [
      "Right‑sized structures for growth and capital raising",
      "Reduced transaction and regulatory risk",
      "Better decision‑making backed by financial analysis",
      "More efficient, future‑ready operating model",
    ],

    industries: [
      "Startups & Scale‑ups",
      "MSMEs & Family Businesses",
      "Corporate Groups",
      "Real Estate & Infrastructure",
      "IT, E‑commerce & Services",
    ],

    tools: [
      "Financial modelling & valuations",
      "Companies Act, FEMA, SEBI regulations",
      "Sector benchmarks & best practices",
    ],

    subservices: [
      {
        slug: "transaction-advisory",
        title: "Transaction Advisory",
        summary:
          "End‑to‑end support for mergers, demergers, acquisitions, business transfers, and restructuring schemes.",
        items: [
          "Evaluation of transaction options and structures",
          "Financial, tax, and regulatory impact analysis",
          "Support on mergers, demergers, slump sales, and hive‑offs",
          "End‑to‑end assistance through closing and post‑deal integration",
        ],
        metaTitle:
          "Transaction Advisory | Mergers, Demergers & Business Transfers",
        metaDescription:
          "Transaction advisory support for mergers, demergers, acquisitions, business transfers, and restructuring with integrated tax, legal, and financial perspectives.",
        keywords: [
          "transaction advisory",
          "merger demerger support",
          "slump sale advisory",
          "business acquisition advisory",
        ],
      },
      {
        slug: "corporate-structuring",
        title: "Corporate Structuring",
        summary:
          "Designing legal entity and capital structures aligned with business and regulatory requirements.",
        items: [
          "Choice of entity type and holding structures",
          "Capital structuring and re‑structuring",
          "Group re‑organisation and rationalisation",
          "Alignment with Companies Act, FEMA, and tax laws",
        ],
        metaTitle:
          "Corporate Structuring Advisory | Entity & Capital Structure Design",
        metaDescription:
          "Corporate structuring services to design legal and capital structures that are tax‑efficient, compliant, and scalable.",
        keywords: [
          "corporate structuring",
          "group restructuring",
          "capital restructuring",
          "entity structuring advisory",
        ],
      },
      {
        slug: "regulatory-compliance-advisory",
        title: "Regulatory Compliance Advisory",
        summary:
          "Guidance on corporate laws, FEMA, SEBI, and sector regulations, with representation support.",
        items: [
          "Advisory on Companies Act, FEMA, SEBI, and sectoral regulations",
          "Review of compliance frameworks and responsibilities",
          "Liaison and representation with regulators",
          "Design of practical compliance roadmaps",
        ],
        metaTitle:
          "Regulatory Compliance Advisory | Companies Act, FEMA, SEBI",
        metaDescription:
          "Regulatory advisory services covering Companies Act, FEMA, SEBI and sectoral laws, with practical compliance frameworks and representation support.",
        keywords: [
          "regulatory compliance advisory",
          "FEMA advisory",
          "SEBI compliance",
          "corporate law advisory",
        ],
      },
      {
        slug: "tax-structuring",
        title: "Tax Structuring & Advisory",
        summary:
          "Direct and indirect tax planning aligned with operations and long‑term business objectives.",
        items: [
          "Design of tax‑efficient business and transaction structures",
          "Alignment of supply chains and contracts with tax outcomes",
          "Mitigation of tax risk within applicable legal framework",
          "Ongoing advisory on new transactions and expansions",
        ],
        metaTitle:
          "Tax Structuring & Advisory | Direct & Indirect Tax Planning",
        metaDescription:
          "Tax structuring and advisory services for direct and indirect taxes, focusing on efficiency, risk mitigation, and regulatory alignment.",
        keywords: [
          "tax structuring",
          "direct tax planning",
          "indirect tax planning",
          "tax advisory services",
        ],
      },
      {
        slug: "financial-advisory",
        title: "Financial Advisory",
        summary:
          "Valuation, cash‑flow assessment, and strategic financial planning for informed decisions.",
        items: [
          "Business and equity valuation support",
          "Cash‑flow and funding assessments",
          "Scenario analysis for strategic decisions",
          "Support for board and investor communications",
        ],
        metaTitle:
          "Financial Advisory | Valuation & Cash Flow Planning – Sandeep Singla & Associates",
        metaDescription:
          "Financial advisory services covering valuation, cash‑flow analysis, and strategic planning for data‑backed business decisions.",
        keywords: [
          "financial advisory",
          "business valuation",
          "cashflow advisory",
          "CA valuation support",
        ],
      },
      {
        slug: "performance-improvement",
        title: "Performance & Process Improvement",
        summary:
          "Diagnostic review and process advisory to improve finance, accounts, and procurement performance.",
        items: [
          "Process mapping and gap identification",
          "Design of control and approval workflows",
          "KPI‑driven performance improvement plans",
          "Implementation support and periodic health checks",
        ],
        metaTitle:
          "Performance Improvement Advisory | Finance & Process Optimisation",
        metaDescription:
          "Performance and process improvement advisory focused on finance, accounts, and procurement, aligned with internal control and industry benchmarks.",
        keywords: [
          "performance improvement",
          "process advisory",
          "finance process optimisation",
        ],
      },
    ],

    cta: {
      title: "Transform Decisions Into Strategic Advantage",
      subtitle:
        "Work with advisors who blend regulatory depth with practical business insight.",
      buttonText: "Talk to an Advisor",
    },
  },

  {
    slug: "taxation",
    title: "Direct Taxation ",
    href: "/services/taxation",
    icon: icon3 as unknown as string,
    img1: seven as unknown as string,
    img2: six as unknown as string,
    mainImg: seven as unknown as string,
    animImg1: two as unknown as string,
    animImg2: three as unknown as string,
    description:"End-to-end direct tax advisory, compliance, and representation for corporates, LLPs, professionals, NGOs, and individuals — executed with structured documentation, correct legal interpretation, and strong representation suppor    description:t.",

    metaTitle:
      "Direct Taxation | Planning, Filing & Representation",
    metaDescription:
      "Direct taxation services under the Income Tax Act, 1961 – covering tax planning, ITR filing, assessments, litigation support, registrations, and due diligence.",
    keywords: [
      "direct taxation services",
      "income tax filing",
      "corporate tax advisory",
      "tax litigation support",
      "CA for income tax",
    ],

    details: [
      "We provide end-to-end direct tax services under the Income Tax Act, 1961 — and now under the new Income Tax Act 2025 (effective AY 2026-27) — for companies, LLPs, professionals, NGOs, and individuals.",
      "Our team combines structured documentation, correct legal interpretation, and strong representation support to minimise tax risk while remaining fully compliant. Engagements are executed with reference to CBDT notifications, judicial precedents, and evolving legislative changes.",
      "We believe tax advisory must be proactive, not reactive. Every engagement is anchored to your business model, income profile, and long-term financial objectives — not a generic compliance checklist",
    ],

    approach: [
      "Understanding income profile, business model, and past tax positions",
      "Planning tax‑efficient structures within the legal framework",
      "Ensuring accurate computation, documentation, and filing",
      "Representing you in assessments, appeals, and queries",
      "Monitoring law changes to proactively refine strategy",
    ],

    benefits: [
      "Optimised effective tax rate while staying compliant",
      "Lower exposure to interest, penalties, and litigation",
      "Better visibility on tax cash‑flows and risks",
      "Peace of mind through professional representation",
    ],

    industries: [
      "Corporates & LLPs",
      "Professionals & Consultants",
      "NGOs, Trusts & Societies",
      "High‑net‑worth Individuals",
    ],

    tools: [
      "Income Tax Act, 1961",
      "CBDT circulars & notifications",
      "Tax portals and AIS/26AS data",
    ],

    subservices: [
      {
        slug: "tax-planning-advisory",
        title: "Tax Planning & Advisory",
        summary:
          "Holistic income tax and corporate tax planning aligned with business objectives",
        scope:
          "Strategic tax planning covering corporate tax, capital gains, deductions, and entity structuring within legal framework.",
        items: [
          "Corporate tax planning — domestic and cross-border",
          "MAT/AMT computation and planning",
          "Capital gains planning — short and long term",
          "Deductions advisory — Sec 80C, 80D, 80G",
          "Entity structuring — company, LLP, trust",
          "New vs old tax regime optimisation",
          "NGO and trust tax compliance",
          "Year-end tax review before filing",
        ],
      },
      {
        slug: "return-filing",
        title: "Return Preparation & Filing",
        summary:
          "Comprehensive ITR preparation and filing with AIS/TIS reconciliation",
        scope:
          "Comprehensive return preparation across all ITR forms with pre-filing AIS/TIS reconciliation to avoid mismatches. Every return is supported by documented workings for income, deductions, TDS credit, and advance tax",
        items: [
         " ITR-1/2/3/4/5/6/7 — all forms for all taxpayer categories",
        "AIS/TIS reconciliation before filing — transaction matching",
        "Form 26AS verification — TDS credit and advance tax",
        "Corporate return — Ind AS/AS to tax reconciliation",
        "LP return — partner remuneration and interest verification",
        "Trust return — ITR-7, Form 10B/10BB, application of income",
        "Non-resident return — ITR-2/3, DTAA positions, FEMA compliance",
        "Revised return and updated return u/s 139(8A)",
        "Advane tax computation and self-assessment tax reconciliation",
        "Form 10-IC / 10-ID — new tax regime option filings",
        ],  },
      {
        slug: "tax-audit",
        title: "Tax Audit — Setion 44AB",
        summary:
          "Independent audit of books of accounts under Income Tax Act",
        scope:
          "Tax Audit u/s 44AB is mandatory for businesses whose turnover exceeds ₹1 crore (₹10 crore for 95%+ digital transactions) and professionals above ₹50 lakh gross receipts. The audit is governed by ICAI's Guidance Note on Tax Audit u/s 44AB (Revised 2023). Effective 1 April 2026, the limit remains 60 tax audits per member per year per ICAI Council.",
        items: [
          "Applicability assessment — Sec 44AB, 44ADA, 44AE thresholds",
          "Form 3CA (statutory audit entity) or 3CB (other) — audit report",
          "Form 3CD — all 44 reporting clauses with full factual support",
          "Depreciation schedule verification — WDV, block-wise, additional",
          "Disallowances — Sec 40A(3), 40(a)(ia), 43B, 269SS/T",
          "GST turnover reconciliation with books of accounts",
          "TDS compliance gap review — Sec 194C/194I/194J/194Q",
          "Related party transactions and transfer pricing observation",
          "Form 3CEB — Transfer Pricing report u/s 92E (where applicable)",
          "MSME payments — Sec 43B(h) verification from FY 2023-24"

        ],
      },
      {
        slug: "representation-litigation",
        title: "Representation & Litigation Support",
        summary:
          "Assessment, appeals, and litigation support before tax authorities",
        scope:
          "Faceless Assessments, CIT(A) appeals, ITAT appearances, and High Court support — backed by documented legal positions, judicial precedents, and well-structured submissions. We specialise in preparing strong factual and legal grounds at the first stage to minimise prolonged litigation.",
        items: [
          "Faceless Assessment — response to notices u/s 143(2), 148, 131",
          "Scrutiny assessment submissions with documentation",
          "CIT(A) appeals — grounds of appeal and written submissions",
          "ITAT representation and briefing support",
          "Rectification applications u/s 154 — computational errors",
          "Stay of demand applications before assessing authority",
          "Penalty proceedings defence — Sec 270A, 271A, 271B",
          "TDS default notices — Sec 201 representations",
          "Compounding of offences applications — CBDT guidelines",
          "Response to AIS/TIS mismatch notices from CPC"
        ],
      },
      {
        slug: "Tax Registrations &amp; Approvals",
        title: "Tax Registrations & Approvals",
        summary:
          "End-to-end support for tax registrations and statutory approvals",
        scope:
          "Obtaining and maintaining statutory registrations, exemption approvals, and certifications required under the Income Tax Act. We manage the full application lifecycle — from documentation to approval and compliance post-registration.",
        items: [
          "PAN and TAN application and corrections",
          "Trust / NGO registration — Sec 12AB (new re-registration regime)",
          "80G approval for donation receipts — Form 10AC/10BD",
          "80G donor certificates — Form 10BE",
          "Sec 10(23C) approval for educational / medical institutions",
          "35AC / 35(1)(ii) scientific research approvals",
          "Tax Residency Certificates (TRC) for DTAA benefits",
          "Lower deduction / nil deduction certificates — Sec 197",
          ""
        ],
      },
      {
        slug: "tax-due-diligence",
        title: "Tax Due Diligence",
        summary:
          "Comprehensive tax risk review for transactions and restructuring",
        scope:
          "Identification of tax risks, compliance gaps, and exposures for business decisions.",
        items: [
          "Review of past tax filings",
          "Assessment and demand analysis",
          "TDS compliance review",
          "Transfer pricing exposure check",
          "Loss carry forward analysis",
          "Transaction risk evaluation",
        ],
      },
    ],

    cta: {
      title: "Make Every Tax Decision Strategic",
      subtitle:
        "Plan, file, and defend your tax position with an experienced Chartered Accountant team.",
      buttonText: "Talk to a Tax Expert",
    },
  },

  {
    slug: "gst",
    title: "GST & Indirect Tax",
    href: "/services/gst",
    icon: icon4 as unknown as string,
    img1: four as unknown as string,
    img2: five as unknown as string,
    mainImg: four as unknown as string,
    animImg1: two as unknown as string,
    animImg2: three as unknown as string,
    description:
      "End-to-end GST and indirect tax support — registration, compliance, advisory, departmental representation, and legacy VAT/Service Tax/Excise matters — executed through our structured 6× Delivery Model.",
    overviewTitle: "India's Most Dynamic Indirect Tax Regime — Managed Expertly",

    metaTitle:
      "GST & Indirect Tax Services | Registration, Filing & Advisory – India",
    metaDescription:
      "Comprehensive GST and indirect tax services including registration, GSTR filings, ITC reconciliations, opinions, retainership, and legacy VAT/Service Tax support.",
    keywords: [
      "GST registration",
      "GST filing",
      "GST advisory",
      "indirect tax services",
      "GST retainership",
    ],

    details: [
      "GST, introduced on 1 July 2017, subsumed more than 17 central and state levies into a unified framework. Yet it remains one of the most amendment-intensive statutes in Indian taxation — with over 1,000 CBIC circulars, notifications, and clarifications issued since inception.",
      "Our team works closely with your finance and operations functions to align GST positions with actual supply chains, commercial contracts, and business models — not standard interpretations detached from commercial reality.",
      "We also assist with legacy VAT, Service Tax, and Central Excise matters, including transitional credit disputes, pending assessments, and pre-GST litigation carried into the current era.",
    ],

    approach: [
      "Mapping transactions and supply chains for GST impact",
      "Ensuring accurate registration, classification, and documentation",
      "Managing periodic return filing and reconciliations",
      "Advising on complex positions, ITC, and place of supply",
      "Representing you in audits, assessments, and disputes",
    ],

    benefits: [
      "Taxpayers with aggregate turnover exceeding ₹2 crore in a financial year are required to get accounts audited under GST. The GSTR-9C reconciliation statement, where applicable, must be certified by a Chartered Accountant or Cost Accountant. SSA issues GSTR-9C in accordance with the ICAI Guidance Note on GST Audit.",
      "The Finance Act, 2024 merged Section 73 (non-fraud) and Section 74 (fraud) demand provisions into a single Section 73, effective FY 2024-25 onwards. The penalty structure and limitation periods have changed significantly. Clients with pending notices must reassess their response strategy immediately.",
      "CBIC Circular 210 clarified the place of supply for services received by SEZ units / developers. This has significant ITC implications for exporters and SEZ-based clients. SSA's advisory team assists in restructuring invoicing to align with this circular.",
      "ITC eligibility is now linked to GSTR-2B auto-populated data. Vendor non-compliance directly impacts your ITC claims. SSA's GST health-check process includes periodic vendor reconciliation protocols to safeguard your ITC position and avoid exposure to demand notices.",
    ],

    industries: [
      "Manufacturing & Trading",
      "E‑commerce & Marketplaces",
      "Real Estate & Construction",
      "Service Providers & Agencies",
      "Exporters & Importers",
    ],

    tools: [
      "GST Audit — Who Must Comply",
      "Demand, Penalty & Limitation Changes",
      "Place of Supply — Services to SEZ",
      "ITC Matching — The New Reality"
    ],

    subservices: [
      {
        slug: "gst-registration-filing",
        title: "GST Registration & Return Filing",
        summary:
          "From new registration to periodic GSTR filings and reconciliations.",
        scope:
        "From new GST registration to periodic GSTR filings, ITC reconciliation, and GSTR-9/9C, we manage the full compliance lifecycle so your team can focus on business operations without the risk of penalties, interest, or blocked ITC.",
        items: [
          " GST registration for regular and composition taxpayers",
          "Preparation and filing of GSTR-1 (outward supplies), GSTR-3B (summary return), GSTR-2B reconciliation",
          "GSTR-9 (Annual Return) and GSTR-9C (Reconciliation Statement / GST Audit) under Sec 35",
          "E-invoice compliance and IRN generation — mandatory for notified turnover thresholds",
          "E-way bill compliance framework and documentation protocols",
          "Periodic ITC health-check and vendor reconciliation to protect ITC under Sec 16(2)(aa)",
          "GST refund filing — exports (IGST paid / LUT), inverted duty structure (Sec 54), and UN/embassy refunds",
          "Composition scheme applicability assessment, filing of GSTR-4",
        ],
        metaTitle:
          "GST Registration & GSTR Filing Services – Regular & Composition",
        metaDescription:
          "GST registration and end‑to‑end GSTR return filing services, including reconciliations and ledger management.",
        keywords: [
          "GST registration service",
          "file GSTR-1",
          "GSTR-3B filing",
          "GST annual return",
        ],
      },
      {
        slug: "gst-advisory-opinions",
        title: "GST Advisory & Opinions",
        summary:
          "Industry‑specific GST advisory on classification, ITC, place of supply, and complex transactions.",
        scope:
        "GST advisory at SSA is delivered in writing, with full statutory references, a clear conclusion, and an explanation of risk. We do not provide verbal opinions on disputed GST positions. Every advisory engagement results in a documented memo that can be retained as a bona fide defence under Sec 270A(9)(b) equivalent provisions and penalty mitigation arguments.",
        items: [
          "HSN / SAC classification opinions — including composite and mixed supplies under Sec 8",
          "Place of supply determination (Sec 10–13 IGST Act) — especially for software, online, and cross-border services",
          "ITC eligibility review — blocked credits (Sec 17(5)), business use vs personal use, employee benefits",
          "GST implications of M&A transactions — slump sales, demergers, stock transfers, licence agreements",
          "Time of supply analysis for deferred payment structures, advances, and milestone billing",
          "Contract structuring to optimise GST outflow — back-to-back arrangements, pure agent provisions",
          "Applicability of reverse charge mechanism (RCM) — Sec 9(3) and 9(4) analysis",
          "GST on real estate transactions — Sec 7, Schedule II, and residential vs commercial distinctions",
        ],
        metaTitle:
          "GST Advisory & Opinions | ITC, Classification & Place of Supply",
        metaDescription:
          "Expert GST advisory on classification, ITC eligibility, place of supply, and industry‑specific questions.",
        keywords: [
          "GST advisory",
          "GST opinion",
          "ITC advisory",
          "place of supply",
        ],
      },
      {
        slug: "gst-retainership",
        title: "GST Retainership & Health Check",
        summary:
          "Ongoing GST compliance management under a structured retainership model.",
        scope:
        "Our retainership and GST health-check service provides clients with continuous support and a structured periodic review — catching issues before they crystallise into demands. Engagements are scoped to client size, filing frequency, and risk profile.",

        items: [
          "Monthly / quarterly GST health check — GSTR-1 vs GSTR-3B variance analysis",
          "Vendor compliance monitoring — identifying non-filers in your supplier base whose non-compliance creates ITC exposure",
          "ITC lapsing review — time-barred credits under Sec 16(4) and remediation opportunities",
          "GST liability reconciliation — books vs GST returns — to identify under-declared or over-declared liabilities",
          "E-invoice and e-way bill exceptions report and remediation",
          "Retainership advisory — 24-hour turnaround on written queries within agreed scope",
          "Pre-audit assessment — readiness review before departmental scrutiny or GSTR-9C certification",
        ],
        metaTitle:
          "GST Retainership Services | Ongoing Compliance & Health Checks",
        metaDescription:
          "GST retainership services for continuous compliance management, notices, reconciliations, and departmental audits.",
        keywords: [
          "GST retainership",
          "GST health check",
          "ongoing GST compliance",
        ],
      },
      {
        slug: "legacy-indirect-tax",
        title: "GST Litigation  Departmental Representation",
        summary:
          "Advisory and support on pre‑GST VAT, Service Tax, and Excise issues.",
        scope:
        "GST litigation requires an intersection of legal analysis, factual investigation, and procedural rigour. Our team handles the full spectrum — from drafting replies to show-cause notices to managing High Court writ petitions challenging illegal demands and jurisdictional overreach.",

        items: [
          "Reply to show-cause notices (SCN) under Sec 73 (non-fraud) and Sec 74 (fraud / wilful misstatement) — merging into unified Sec 73 from FY 2024-25",
          "Personal hearing representation before Adjudicating Authority (proper officer)",
          "GST Appeal — Form APL-01 before Appellate Authority (Commissioner Appeals)",
          "GSTAT (GST Appellate Tribunal) — now operational; handling first batch of tribunal matters",
          "High Court writ petitions — challenging Section 83 (provisional attachment), blocking of ITC under Rule 86A, jurisdictional excess",
          "Advance Ruling applications before State/Central AAR and AAAR for certainty on positions",
          "Anti-profiteering proceedings — representation before National Anti-Profiteering Authority (NAPA)",
          "DRC-03 voluntary payment strategy to mitigate interest and penalty exposure",
        ],
        metaTitle:
          "Legacy VAT, Service Tax & Excise Support – Transitional & Litigation",
        metaDescription:
          "Support for legacy VAT, Service Tax, and Excise matters including assessments, transitional credits, and refunds.",
        keywords: [
          "VAT litigation",
          "Service Tax issues",
          "Excise transitional credit",
        ],
      },
    ],

    faqs: [
      {
        q: "What is GST Audit under Section 35 of the CGST Act?",
        a: "Under Section 35(5) of the CGST Act (now Section 35 read with Section 44), taxpayers with aggregate annual turnover exceeding ₹2 crore are required to get their accounts audited by a Chartered Accountant or Cost Accountant and furnish a copy of the audited annual accounts along with a reconciliation statement in Form GSTR-9C. SSA conducts GST Audits in accordance with the ICAI Guidance Note on GST Audit, which applies SA principles mutatis mutandis. The GSTR-9C certification is an attestation function governed by ICAI ethics — we do not certify without adequate audit evidence.\n\nCGST Sec 35 · CGST Sec 44 · ICAI Guidance Note on GST Audit",
      },
      {
        q: "How has the Finance Act, 2024 changed GST demand and penalty provisions?",
        a: "The Finance Act, 2024 made two significant structural changes effective FY 2024-25 onwards: (1) Sections 73 (non-fraud) and 74 (fraud) have been merged into a single Section 73 with a revised penalty structure — the distinction between fraud and non-fraud demands is now reflected in the penalty rate rather than separate sections; (2) A new Section 74A has been introduced for specific circumstances. Additionally, Section 16(5) and 16(6) were inserted retrospectively, allowing ITC that was previously time-barred in certain situations to be availed. Taxpayers should review their past positions against these amendments urgently.\n\nCGST Sec 73 (amended) · CGST Sec 16(5) & 16(6) · Finance Act, 2024",
      },
      {
        q: "What is the ITC matching requirement under Section 16(2)(aa)?",
        a: "Section 16(2)(aa) of the CGST Act, inserted by the Finance Act 2021, requires that ITC can only be availed if the details of the invoice appear in the auto-populated GSTR-2B statement. This means if your supplier has not filed GSTR-1 or GSTR-3B, the corresponding ITC will not appear in GSTR-2B and cannot be legally claimed by you — even if you hold a valid tax invoice and have paid the supplier. SSA's GST health-check includes quarterly vendor compliance monitoring to identify at-risk suppliers before the ITC is lost.\n\nCGST Sec 16(2)(aa) · CBIC Circular 183/15/2022",
      },
      {
        q: "Is the GST Appellate Tribunal (GSTAT) now operational?",
        a: "Yes. The GST Appellate Tribunal (GSTAT) became operationally functional in 2024, approximately seven years after GST implementation. GSTAT operates under Section 109 of the CGST Act. Taxpayers who had High Court matters pending solely because no alternative appellate forum was available may need to evaluate whether those matters should now proceed before GSTAT instead. The Tribunal provides a specialist forum for GST disputes, and its constitution reduces the burden on High Courts for purely factual or valuation disputes. SSA is advising clients on GSTAT strategy for pending matters.\n\nCGST Sec 109 · CGST Sec 110 · CGST Sec 112",
      },
      {
        q: "How are transitional credits under TRAN-1 / TRAN-2 treated after the Supreme Court ruling?",
        a: "The Supreme Court, in Union of India v. Filco Trade Centre Pvt. Ltd. (2022), directed that the GST portal be reopened for filing and revision of TRAN-1 and TRAN-2 forms, rejecting the Government's position that the time limit for transitional credit was final. Taxpayers who could not avail their pre-GST CENVAT / VAT credits due to technical glitches or administrative issues were given a window to file / revise. SSA assists clients in reviewing eligibility, preparing and filing TRAN-1/2, and handling any departmental scrutiny of transitional credit claims.\n\nCGST Sec 140 · SC: Filco Trade Centre (2022) · CBIC Order dt. 22 Sept 2022",
      },
      {
        q: "What documents must be retained for a GST scrutiny or audit?",
        a: "Under Section 36 of the CGST Act, every registered person must maintain books of account at the principal place of business for a period of 72 months (6 years) from the due date of filing the annual return for the year to which they relate. Records must include: tax invoices, debit and credit notes, import / export records, stock register, ITC register, GSTR-2B workings, e-way bill logs, and e-invoice data. Where a departmental audit is initiated under Section 65 or a special audit under Section 66 is ordered, all supporting documentation must be produced within 15 working days of notice.\n\nCGST Sec 35 · CGST Sec 36 · CGST Sec 65 · CGST Sec 66",
      },
    ],

    cta: {
      title: "Simplify GST & Indirect Tax Compliance",
      subtitle:
        "Let a specialised GST team handle filings, reconciliations, and departmental interactions for you.",
      buttonText: "Get GST Support",
    },
  },

  {
    slug: "nri",
    title: "Non‑Resident & International Services",
    href: "/services/nri",
    icon: icon5 as unknown as string,
    img1: five as unknown as string,
    img2: one as unknown as string,
    mainImg: five as unknown as string,
    animImg1: two as unknown as string,
    animImg2: three as unknown as string,
    description:
      "A structured, documentation-driven practice for NRIs, foreign nationals, and overseas entities operating in India — covering FEMA, DTAA, inbound investments, RBI compliance, and tax representation.",
    overviewTitle: "One Partner for Every India-Related Cross-Border Matter",

    metaTitle:
      "Non-Resident & International Services | FEMA, DTAA, RBI & Cross-Border Advisory",
    metaDescription:
      "End-to-end advisory for NRIs, foreign nationals, and overseas entities doing business in India — FEMA, DTAA, RBI compliance, cross-border taxation, remittance structuring, and representation.",
    keywords: [
      "non-resident international services",
      "NRI taxation India",
      "FEMA RBI compliance",
      "DTAA advisory India",
      "cross-border tax structuring India",
    ],

    details: [
      "India's cross-border regulatory framework is layered across FEMA, the Income Tax Act, the Companies Act, and RBI Master Directions that frequently intersect. A remittance decision is also a tax event. A property acquisition triggers FEMA reporting. An office setup carries PE risk.",
      "We help NRIs, foreign nationals, and overseas businesses navigate this intersection with clarity through technical depth, structured documentation, and proactive regulatory tracking — so compliance gaps are identified before they become disputes.",
      "Whether you are repatriating sale proceeds, setting up a wholly-owned subsidiary, or managing capital gains exposure on Indian assets, our 6-step model ensures every position is assessed, structured, documented, and defensible.",
      "The Income Tax Act 2025 (effective AY 2026-27) restructures provisions governing NRI taxation, RNOR status, residency determination, and Section 195 TDS obligations. All NRI advisory and return filing is mapped to this revised framework.",
    ],

    approach: [
      "Intake assessment: residency determination, transaction history, and FEMA exposure mapping",
      "Transaction structuring: FEMA route, DTAA position, Indian tax treatment, and documentation checklist",
      "Documentation preparation: Form 15CA/CB, TRC/Form 10F, bank undertakings, and complete working papers",
      "Filing execution: ITR, RBI reporting, and MCA filings with full disclosure and timeline control",
      "Regulatory monitoring: proactive impact alerts on FEMA, DTAA, RBI, and Income Tax changes",
      "Representation and defence: notice handling, scrutiny replies, appeals, and FEMA compounding support",
    ],

    benefits: [
      "Every cross-border transaction — remittance, investment, loan, property sale — must be structured within FEMA 1999 and RBI Master Directions. We map the transaction, identify the applicable route, prepare the required documentation, and coordinate with authorised dealer banks.",
      "India's tax treaties with 90+ countries provide relief from double taxation — but treaty benefits require proactive claim, proper certification (TRC, Form 10F), and alignment with both domestic law and the treaty text. Unclaimed benefits are permanently lost.",
      "RBI and income tax scrutiny of NRI transactions is increasing. Every repatriation, remittance, and property transaction must be backed by a clear, structured documentation trail — one that can withstand banking review, income tax scrutiny, and FEMA inquiry simultaneously.",
      "NRI, RNOR, and resident status determines tax incidence, FEMA applicability, and banking permissions. The determination requires careful analysis of physical presence across multiple years — a single error can result in unexpected tax exposure on global income.",
    ],

    industries: [
      "NRIs & Persons of Indian Origin (PIOs)",
      "Foreign Nationals & Expatriates in India",
      "Foreign Companies & Multinationals Entering India",
      "NRI Entrepreneurs & HNIs with India Assets",
    ],

    tools: [
      "FEMA & RBI Compliance — Non-Negotiable",
      "Sec 90/90A treaty framework and DTAA network",
      "Documentation is the First Line of Defence",
      "Residency Status Changes Everything",
    ],

    subservices: [
      {
        slug: "business-setup-india",
        title: "Business Setup & Entry Structuring",
        summary: [
          "Entry into India involves a multi-step regulatory process spanning FEMA, Companies Act, and RBI approvals that must be sequenced correctly.",
          "We evaluate the right entry vehicle, execute incorporation and registration, and manage the first-year compliance calendar end-to-end.",
        ],
        scope:
          "Incorporation, RBI/FEMA approvals, MCA compliance, and governance support for foreign entities entering India.",
        items: [
          "Entry vehicle evaluation — subsidiary, branch, liaison office, project office, LLP",
          "FDI route analysis — automatic route vs government approval and sectoral caps",
          "MCA incorporation filings and RBI approvals where applicable",
          "FC-GPR and FC-TRS filings for issuance and transfer of equity instruments",
          "Director identification, governance setup, and registered office compliance",
          "Annual compliance calendar — MCA filings, FEMA annual returns (FLA), AGM obligations",
          "PE risk review for liaison and project office activity scope",
          "ICAI-aligned certification support under FEMA reporting requirements",
        ],
        metaTitle:
          "Business Setup in India for Foreign Companies & NRIs – Subsidiary, Branch, LO, PO",
        metaDescription:
          "End‑to‑end business setup services in India for foreign companies and NRIs, including subsidiaries, branch offices, liaison offices, and project offices.",
        keywords: [
          "setup subsidiary in India",
          "NRI company registration India",
          "liaison office RBI approval",
        ],
      },
      {
        slug: "international-tax",
        title: "International Taxation & Return Filing",
        summary: [
          "NRI taxation requires parallel interpretation of Indian domestic law and the applicable DTAA.",
          "We begin with residency determination and income characterisation, then compute tax and execute filings with complete disclosure.",
        ],
        scope:
          "DTAA analysis, capital gains structuring, NRI return filing, and Section 195 withholding advisory.",
        items: [
          "Residency determination — NRI, RNOR, or Resident — under Sec 6 ITA and ITA 2025",
          "DTAA analysis — treaty entitlement, TRC verification, Form 10F filing",
          "Capital gains computation on Indian property, equity, and mutual funds with correct cost-basis and indexation",
          "Advisory on royalty, interest, FTS (Fee for Technical Services), and dividend income under DTAA",
          "Sec 195 TDS advisory — determining applicable rate, preparing Form 15CA/CB, coordinating with deductor",
          "ITR filing — ITR-2, ITR-3, or ITR-5 as applicable — with Schedule FA (foreign assets) and Schedule FSI",
          "Representation in case of notices from Income Tax Department, AIS/TIS reconciliation",
        ],
        metaTitle:
          "International Tax & NRI Return Filing | DTAA & Cross‑Border Taxation",
        metaDescription:
          "International tax advisory and return filing services for NRIs and foreign entities, with DTAA‑aligned planning and representation.",
        keywords: [
          "NRI tax return",
          "DTAA advisory India",
          "international tax India",
        ],
      },
      {
        slug: "remittance-repatriation",
        title: "Remittance & Repatriation Advisory",
        summary: [
          "Repatriation requires accurate classification of repatriable funds, RBI limits, and tax clearance requirements.",
          "We structure the transaction, prepare complete documentation packs, and liaise with AD banks through closure.",
        ],
        scope:
          "Structuring, documentation, and bank coordination for remittances from NRO accounts, inherited assets, and property proceeds.",
        items: [
          "NRO to NRE transfer structuring — income vs capital receipts, USD 1 million per year limit", 
          "Repatriation of property sale proceeds — FEMA compliance, 15CA/CB, income tax clearance",
          "Repatriation of inherited assets — Section 6(5) FEMA, succession documentation",
          "Remittance under LRS (Liberalised Remittance Scheme) for resident individuals — structuring and TCS management",
          "NRO/NRE account structuring at account opening stage — avoiding future repatriation restrictions",
          "Coordination with authorised dealer (AD) banks on documentation requirements",
          "RBI compounding of FEMA violations — guidance and representation where prior non-compliance exists",
        ],
        metaTitle:
          "Remittance & Repatriation Support for NRIs | NRO/NRE, LRS, RBI",
        metaDescription:
          "Advisory on NRO/NRE transactions, LRS remittances, and repatriation of income and assets in compliance with FEMA and RBI.",
        keywords: [
          "NRO to NRE transfer",
          "NRI repatriation of funds",
          "LRS remittance India",
        ],
      },
      {
        slug: "nri-legal-regulatory",
        title: "NRI Legal, Property & Regulatory Advisory",
        summary: [
          "NRIs with Indian real estate, business interests, or inherited assets face overlapping tax, FEMA, and succession obligations.",
          "We integrate tax, FEMA, and documentation dimensions into one advisory stream for complete visibility of India obligations.",
        ],
        scope:
          "Property tax compliance, agreement review, inherited asset support, and representation before ITD, RBI, and MCA.",
        items: [
         " Tax compliance on rental income from Indian property — ITR filing, advance tax, TDS reconciliation",
          "Capital gains planning on property sale — pre-sale structuring, Section 54/54F reinvestment, DTAA applicability",
          "FEMA permissions for acquisition and sale of Indian property by NRIs and PIOs",
          "Review and advisory on sale deeds, lease agreements, and joint development arrangements",
          "Inherited and gifted asset compliance — FEMA permissions, succession certificate assistance, tax computation",
          "Power of Attorney structuring for NRI property management",
          "Representation before Income Tax Department — notices, scrutiny assessment, appeal management",
          "Representation before RBI/Enforcement Directorate in FEMA matters",
        ],
        metaTitle:
          "Legal & Regulatory Consulting for NRIs | Property, Contracts & Compliance",
        metaDescription:
          "Legal and regulatory consulting for NRIs on Indian property, rental income taxation, contracts, and representations before authorities.",
        keywords: [
          "NRI property tax India",
          "NRI legal advisory India",
          "NRI rental income compliance",
        ],
      },
    ],

    faqs: [
      {
        q: "Am I an NRI? How is NRI status determined under Indian tax law?",
        a: "Under Section 6 of the Income Tax Act, an individual is a non-resident in a tax year if they do not satisfy the prescribed physical presence tests. A separate category — RNOR (Resident but Not Ordinarily Resident) — applies where historical presence thresholds are met, often offering partial non-resident style treatment for foreign income. ITA 2025 revises these conditions from AY 2026-27, so status should be evaluated annually. NRI determination under FEMA uses a different definition, which can create planning conflicts that require transaction-level structuring.\n\nLaw: Sec 6, ITA 1961 / ITA 2025 · FEMA 1999 Sec 2(w)",
      },
      {
        q: "What is Form 15CA and Form 15CB? Who is responsible for filing them?",
        a: "Form 15CA is an online declaration by the remitter before payment to a non-resident. Form 15CB is a Chartered Accountant certificate confirming remittance nature, applicable tax rate (domestic or treaty), and withholding position. The CA is responsible for a proper examination of underlying documents, taxability, and DTAA applicability; it is not a routine issuance. Some remittances may be exempt from 15CB, but the correct 15CA part classification must still be established.\n\nLaw: Rule 37BB, Income Tax Rules · Sec 195, ITA · ICAI GN on Form 15CB",
      },
      {
        q: "Can an NRI buy and sell property in India? What FEMA rules apply?",
        a: "NRIs and PIOs can generally purchase residential and commercial property in India under FEMA rules, while agricultural land, plantation property, and farmhouses remain restricted except in permitted circumstances. On sale, repatriation depends on source of acquisition funds, FEMA conditions, and documentary compliance. NRO-linked repatriation is typically subject to annual limits and requires Form 15CA/15CB with tax clearance. Inherited property and gifted assets involve additional FEMA and succession considerations.\n\nLaw: FEMA Notification 5(R)/2016 · RBI Master Directions · Sec 195, ITA",
      },
      {
        q: "How does a DTAA reduce tax on Indian income, and what documents are needed?",
        a: "A DTAA can reduce withholding and final tax incidence on specified incomes, including interest, dividends, royalties, technical services, and certain capital gains, where treaty provisions are more beneficial than domestic law. Claiming treaty relief requires a valid Tax Residency Certificate (TRC), Form 10F compliance, and treaty-article level analysis. With MLI and PPT standards now embedded in many treaties, substance and purpose analysis is often necessary before claiming reduced rates.\n\nLaw: Sec 90/90A, ITA · TRC/Form 10F framework · MLI/PPT standards",
      },
      {
        q: "Is it mandatory for NRIs to file an income tax return in India?",
        a: "If taxable Indian-source income exceeds the applicable threshold, return filing is generally mandatory. In many cases, filing is advisable even below threshold to claim TDS refunds or document treaty positions. Typical income heads include rental income, capital gains, NRO interest, dividends, and business-linked Indian income. Non-filing can trigger interest, penalties, and prolonged compliance exposure during banking or regulatory review.\n\nLaw: Sec 139(1), ITA · Penalty and prosecution provisions as applicable",
      },
      {
        q: "What is the FLA return and who is required to file it?",
        a: "The Annual Return on Foreign Liabilities and Assets (FLA) is filed with RBI by eligible Indian entities with foreign liabilities and/or foreign assets. It captures annual stock positions and is distinct from transactional filings like FC-GPR or FC-TRS. Filing is generally due by July 15 each year and non-compliance can attract FEMA consequences. Businesses with prior foreign investment exposure should review FLA applicability every year, including transitional years.",
      },
    ],

    cta: {
      title: "Manage Your India Interests with Confidence",
      subtitle:
        "A single CA partner for your tax, FEMA, banking, and regulatory needs in India — structured, documented, and defensible at every step.",
      buttonText: "Schedule an NRI Advisory Call",
    },
  },

  {
    slug: "bpo",
    title: "Outsourcing, FAO, LPO & Payroll",
    href: "/services/bpo",
    icon: icon5 as unknown as string,
    img1: one as unknown as string,
    img2: six as unknown as string,
    mainImg: one as unknown as string,
    animImg1: two as unknown as string,
    animImg2: three as unknown as string,
    description:
      "Scalable outsourcing solutions across finance & accounts, legal processes, and payroll – delivered by a Chartered Accountant‑led team.",

    metaTitle:
      "Business Process Outsourcing (BPO), Finance & Accounts Outsourcing, LPO & Payroll",
    metaDescription:
      "Outsource finance & accounts, legal process (LPO), and payroll to a CA‑led team with 6S‑driven methodology, MIS reporting, and SLA‑based delivery.",
    keywords: [
      "finance and accounts outsourcing",
      "legal process outsourcing LPO",
      "payroll outsourcing",
      "BPO for accounting",
      "CA firm outsourcing",
    ],

    details: [
      "We provide integrated outsourcing solutions covering bookkeeping, reporting, compliance, legal documentation support, and payroll processing.",
      "Our 6S model (Scan, Study, Strategize, Structure, Support, Sustain) ensures each outsourcing engagement is well‑designed, controlled, and scalable, not just low‑cost staffing.",
      "Engagements are SLA‑driven with strong data security, documented processes, and dedicated relationship management.",
    ],

    approach: [
      "Scanning current processes, systems, and control gaps",
      "Studying transaction volumes, complexity, and reporting needs",
      "Strategizing a customised outsourcing roadmap and SLAs",
      "Structuring workflows, tools, and access rights",
      "Providing ongoing support, monitoring, and continuous improvement",
    ],

    benefits: [
      "Lower cost vs. in‑house hiring and training",
      "Faster, more accurate reporting and compliance",
      "Access to CA‑led expertise and best‑practice processes",
      "Scalable model that grows with your business",
    ],

    industries: [
      "Startups & MSMEs",
      "Growing Corporates",
      "Professional Firms",
      "E‑commerce & D2C",
      "Manufacturing & Services",
    ],

    tools: [
      "Tally, QuickBooks, and cloud ERPs",
      "MIS dashboards and analytics",
      "Secure document management and workflows",
    ],

    subservices: [
      {
        slug: "finance-accounts-outsourcing",
        title: "Finance & Accounts Outsourcing (FAO)",
        summary:
          "End‑to‑end finance & accounts outsourcing including bookkeeping, reporting, taxation, and MIS.",
        items: [
          "Day‑to‑day bookkeeping and ledger management",
          "Monthly, quarterly, and annual financial reporting",
          "Accounts payable and receivable management",
          "MIS dashboards, cash‑flow and fund‑flow analysis",
        ],
        metaTitle:
          "Finance & Accounts Outsourcing | Bookkeeping, Reporting & MIS",
        metaDescription:
          "Comprehensive finance & accounts outsourcing services including bookkeeping, financial reporting, AP/AR, taxation, and MIS reporting.",
        keywords: [
          "accounting outsourcing",
          "bookkeeping BPO",
          "finance and accounting outsourcing India",
        ],
      },
      {
        slug: "legal-process-outsourcing",
        title: "Legal Process Outsourcing (LPO)",
        summary:
          "Outsourced legal and compliance support across contracts, corporate compliance, taxation, and financial analysis.",
        items: [
          "Preparation and consolidation of financial and MIS reports",
          "ROC, MCA, FEMA, RBI, and SEBI compliance support",
          "Drafting and review of commercial and employment contracts",
          "Direct and indirect tax advisory and filing support",
        ],
        metaTitle:
          "Legal Process Outsourcing (LPO) | Contracts, Compliance & Tax",
        metaDescription:
          "LPO services combining legal, tax, and corporate compliance support, including contracts, secretarial services, and tax filings.",
        keywords: [
          "legal process outsourcing",
          "LPO India",
          "corporate secretarial outsourcing",
        ],
      },
      {
        slug: "payroll-outsourcing",
        title: "Payroll Outsourcing",
        summary:
          "Fully managed payroll processing with statutory compliance and secure data handling.",
        items: [
          "Monthly payroll processing and CTC structuring",
          "TDS computation, deduction, and Form 16 issuance",
          "PF, ESI, PT, LWF, gratuity, and bonus compliance",
          "Cloud‑enabled payroll reporting and employee‑wise MIS",
        ],
        metaTitle:
          "Payroll Outsourcing Services | Salary, PF/ESI, TDS & Compliance",
        metaDescription:
          "Payroll outsourcing services covering salary processing, PF/ESI, PT, LWF, TDS, Form 16, and labour law compliance with a 6S‑based model.",
        keywords: [
          "payroll outsourcing",
          "PF ESI compliance",
          "Form 16 processing",
          "outsourced payroll",
        ],
      },
    ],

    cta: {
      title: "Outsource Operations, Keep Control",
      subtitle:
        "Build a lean, tech‑enabled finance, legal, and payroll backbone without adding headcount.",
      buttonText: "Discuss Outsourcing",
    },
  },
];

export { servicesList };

export const getServiceBySlug = (slug: string) =>
  servicesList.find((s) => s.slug === slug) ?? null;

export const getSubserviceBySlugs = (serviceSlug: string, subSlug: string) => {
  const service = getServiceBySlug(serviceSlug);
  const sub = service?.subservices?.find((s) => s.slug === subSlug);
  return service && sub ? { service, subservice: sub } : null;
};

export const getAllSubservicePaths = () =>
  servicesList.flatMap((s) =>
    (s.subservices ?? []).map((sub) => ({
      serviceSlug: s.slug,
      subSlug: sub.slug,
    })),
  );

export default servicesList;

// NOTE: Service themes and sub-service coverage are aligned to the official
// Sandeep Singla & Associates firm profile PDF (Audit & Assurance, Advisory,
// Direct & Indirect Tax, NRI Services, FAO, LPO, Payroll). [file:2]