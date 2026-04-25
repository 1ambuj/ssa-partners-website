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
  summary: string;
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
      "End‑to‑end GST and indirect tax support – registration, filings, advisory, representation, and legacy matters.",

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
      "We help businesses manage GST and other indirect tax laws across registration, routine compliance, reconciliations, and litigation support.",
      "Our team works closely with your finance and operations teams to align tax positions with supply chains, contracts, and commercial terms.",
      "We also assist with legacy VAT, Service Tax, and Excise matters, including transitional credits and pending assessments.",
    ],

    approach: [
      "Mapping transactions and supply chains for GST impact",
      "Ensuring accurate registration, classification, and documentation",
      "Managing periodic return filing and reconciliations",
      "Advising on complex positions, ITC, and place of supply",
      "Representing you in audits, assessments, and disputes",
    ],

    benefits: [
      "Accurate GST compliance and lower interest/penalty risk",
      "Optimised input tax credit and cash‑flow management",
      "Better control over reconciliations and notices",
      "Reduced effort through structured retainership models",
    ],

    industries: [
      "Manufacturing & Trading",
      "E‑commerce & Marketplaces",
      "Real Estate & Construction",
      "Service Providers & Agencies",
      "Exporters & Importers",
    ],

    tools: [
      "GST Portal & E‑way Bill",
      "E‑invoicing systems",
      "Customs and indirect tax rules",
    ],

    subservices: [
      {
        slug: "gst-registration-filing",
        title: "GST Registration & Return Filing",
        summary:
          "From new registration to periodic GSTR filings and reconciliations.",
        items: [
          "GST registration for regular and composition taxpayers",
          "Preparation and filing of GSTR‑1, GSTR‑3B, GSTR‑9, GSTR‑9C",
          "Reconciliation with GSTR‑2B and vendor data",
          "Cash/credit ledger management and due date tracking",
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
        items: [
          "Advisory on GST impact for sectors like real estate, exports, and e‑commerce",
          "Classification and rate determination",
          "ITC eligibility and structuring of contracts",
          "Written opinions and notes for critical positions",
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
        items: [
          "End‑to‑end GST compliance under monthly/annual retainership",
          "Monitoring GST portal notices and drafting responses",
          "Periodic internal GST health checks and reconciliations",
          "Support in departmental audits and enquiries",
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
        title: "Legacy Indirect Tax Matters",
        summary:
          "Advisory and support on pre‑GST VAT, Service Tax, and Excise issues.",
        items: [
          "Advisory on transitional credits and legacy disputes",
          "Support in VAT, Service Tax, and Excise assessments",
          "Assistance in refunds and rectifications",
          "Coordination with counsel for complex litigation",
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
      "Specialised advisory and compliance services for NRIs, foreign nationals, and overseas entities doing business in India.",

    metaTitle:
      "NRI & International Services | FEMA, RBI, International Tax & Business Setup",
    metaDescription:
      "End‑to‑end support for NRIs and foreign companies including business setup in India, FEMA & RBI compliance, international taxation, remittance, and regulatory consulting.",
    keywords: [
      "NRI taxation India",
      "business setup India for foreign company",
      "FEMA RBI compliance",
      "international tax advisory India",
    ],

    details: [
      "We help NRIs, foreign nationals, and overseas businesses navigate India’s tax, FEMA, RBI, and corporate law frameworks with clarity and confidence.",
      "From setting up subsidiaries, liaison or project offices to managing ongoing tax filings, remittances, and property transactions, we provide a single point of contact in India.",
      "Our services are designed to ensure cross‑border compliance while optimising tax efficiency and ease of doing business.",
    ],

    approach: [
      "Understanding residency status, income profile, and business plans",
      "Mapping applicable Indian regulations: FEMA, RBI, Income Tax, Companies Act",
      "Designing compliant structures for investment and operations",
      "Executing registrations, filings, and documentation with authorities",
      "Providing ongoing support for tax, regulatory, and banking matters",
    ],

    benefits: [
      "Lower regulatory and tax risk for cross‑border activities",
      "Smoother business and investment execution in India",
      "Clear documentation trail for banking and regulatory checks",
      "Single CA partner for tax, FEMA, and compliance needs",
    ],

    industries: [
      "NRIs & Returning NRIs",
      "Foreign Investors & HNIs",
      "Overseas Corporates",
      "Cross‑border Joint Ventures",
    ],

    tools: [
      "FEMA & RBI regulations",
      "Double Taxation Avoidance Agreements (DTAA)",
      "Income Tax Act & Rules",
      "MCA & corporate law frameworks",
    ],

    subservices: [
      {
        slug: "business-setup-india",
        title: "Business Setup in India",
        summary:
          "Incorporation and setup of subsidiaries, branch, liaison, and project offices for foreign entities.",
        items: [
          "Evaluation of suitable entry and entity options",
          "Incorporation of subsidiaries, branch, liaison, and project offices",
          "Approvals and filings with MCA, RBI, and other authorities",
          "Ongoing compliance calendar and governance support",
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
        summary:
          "International tax advisory, DTAA interpretation, and ITR filing for NRIs and foreign entities.",
        items: [
          "Advisory on capital gains, royalty, interest, and fee for technical services",
          "DTAA analysis and treaty benefit evaluation",
          "ITR filing for NRIs, foreign companies, and LLPs with Indian income",
          "Representation before Indian tax authorities as required",
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
        title: "Remittance & Repatriation Support",
        summary:
          "Guidance on remitting funds to and from India in line with RBI and FEMA rules.",
        items: [
          "Advisory on repatriation of income and sale proceeds",
          "Support for foreign remittances under LRS",
          "Structuring and documentation for NRO/NRE account transactions",
          "Liaison with banks for documentation and certificates",
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
        title: "Legal & Regulatory Consulting for NRIs",
        summary:
          "Support for property, rental income, contracts, and regulatory representations in India.",
        items: [
          "Review and drafting of service, investment, and lease agreements",
          "Tax and compliance management for Indian immovable property",
          "Support in sale of inherited or gifted assets",
          "Representation before regulators such as ITD, RBI, and MCA",
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

    cta: {
      title: "Manage Your India Interests with Confidence",
      subtitle:
        "A single CA partner for your tax, FEMA, banking, and regulatory needs in India.",
      buttonText: "Consult for NRI Services",
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