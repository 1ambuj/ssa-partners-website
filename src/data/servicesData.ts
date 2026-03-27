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
      "Our Audit & Assurance practice provides an independent and objective opinion on your financial statements and internal controls, in line with Indian corporate laws and ICAI Standards on Auditing.",
      "We go beyond checklist‑based audits to focus on risk, controls, and business processes, helping management and stakeholders gain confidence in reported numbers and governance frameworks.",
      "Engagements are executed with strict independence, integrity, and confidentiality, supported by structured documentation and review mechanisms.",
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
        summary:
          "Company, LLP, and entity‑level audits conducted under the Companies Act, LLP Act, and other applicable statutes.",
        items: [
          "Statutory audit of companies, LLPs, and other entities",
          "Review of financial reporting frameworks and disclosures",
          "Evaluation of compliance with corporate and sectoral laws",
          "Issue of audit reports for regulatory and stakeholder use",
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
        summary:
          "Tax Audits under the Income Tax Act, 1961 including reporting under Section 44AB and related rules.",
        items: [
          "Tax audit under Section 44AB for eligible assessees",
          "Verification of books, depreciation, and disallowances",
          "Review of TDS, advance tax, and tax reconciliations",
          "Preparation and e‑filing of tax audit reports",
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
        summary:
          "Risk‑focused internal audits to assess and improve internal controls, processes, and operational efficiency.",
        items: [
          "Assessment of internal controls and risk management",
          "Review of financial, operational, and compliance processes",
          "Fraud risk assessment and control gap analysis",
          "Actionable recommendations for process improvement",
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
        slug: "special-purpose-audit",
        title: "Special Purpose Audits",
        summary:
          "Bespoke audits including management, operational, stock, and fixed asset verification.",
        items: [
          "Management and operational audits",
          "Stock and inventory audits",
          "Fixed asset verification and tagging",
          "Special attestation and agreed‑upon procedures",
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
        slug: "ngo-society-audit",
        title: "Societies, Trusts & NGO Audit",
        summary:
          "Audit and certification for societies, trusts, NGOs, and not‑for‑profit entities.",
        items: [
          "Audit of NGOs, societies, and charitable trusts",
          "Verification of grants, donations, and utilisation",
          "Compliance with governing laws and reporting formats",
          "Certification for regulatory and donor requirements",
        ],
        metaTitle:
          "NGO, Trust & Society Audit Services – Sandeep Singla & Associates",
        metaDescription:
          "Audit and certification services for NGOs, trusts, and societies, ensuring compliant and transparent utilisation of funds.",
        keywords: ["ngo audit", "trust audit", "society audit", "charity audit"],
      },
      {
        slug: "regulatory-certifications",
        title: "Regulatory Certifications & Compliance",
        summary:
          "Regulatory certifications under FEMA, RBI, GST, export regulations, and other statutory frameworks.",
        items: [
          "Certificates for foreign remittances and exports",
          "Certifications under FEMA and RBI regulations",
          "GST and indirect tax related certifications",
          "Other statutory and banking certifications",
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
    title: "Direct Taxation & Income Tax",
    href: "/services/taxation",
    icon: icon3 as unknown as string,
    img1: seven as unknown as string,
    img2: six as unknown as string,
    mainImg: seven as unknown as string,
    animImg1: two as unknown as string,
    animImg2: three as unknown as string,
    description:
      "Comprehensive direct tax advisory, compliance, and representation for individuals, corporates, NGOs, and trusts.",

    metaTitle:
      "Direct Taxation & Income Tax Services | Planning, Filing & Representation",
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
      "We provide end‑to‑end direct tax services under the Income Tax Act, 1961 for companies, LLPs, professionals, NGOs, and individuals.",
      "Our team combines structured documentation, correct legal interpretation, and strong representation support to minimise tax risk while remaining fully compliant.",
      "Engagements are executed with reference to CBDT notifications, judicial precedents, and evolving legislative changes.",
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
        slug: "tax-planning-compliance",
        title: "Tax Planning & Compliance",
        summary:
          "Holistic income tax and corporate tax planning aligned with your operations and objectives.",
        items: [
          "Design of tax‑efficient structures and remuneration",
          "Advisory on capital gains, deductions, MAT/AMT",
          "Tax planning for NGOs, trusts, and special entities",
          "Ongoing advisory on complex or one‑time transactions",
        ],
        metaTitle:
          "Income Tax Planning & Compliance – Individuals, Corporates, NGOs",
        metaDescription:
          "Strategic direct tax planning and advisory for corporates, individuals, NGOs, and trusts, aligned with the Income Tax Act.",
        keywords: [
          "income tax planning",
          "corporate tax planning",
          "capital gains planning",
        ],
      },
      {
        slug: "return-filing",
        title: "Return Preparation & Filing",
        summary:
          "Accurate, timely preparation and electronic filing of income tax returns for all categories of assessees.",
        items: [
          "Preparation and e‑filing of ITRs for all assessee types",
          "Advance tax computation and payment support",
          "Reconciliation with Form 26AS, AIS, and TDS statements",
          "Review of disclosures and schedules for accuracy",
        ],
        metaTitle:
          "Income Tax Return Filing Services | ITR for Individuals & Corporates",
        metaDescription:
          "End‑to‑end ITR preparation and filing services, including advance tax, reconciliations, and accurate disclosures.",
        keywords: [
          "income tax filing service",
          "ITR filing CA",
          "advance tax computation",
        ],
      },
      {
        slug: "representation-litigation",
        title: "Representation & Litigation Support",
        summary:
          "Professional representation before tax authorities, from scrutiny to appeals.",
        items: [
          "Representation before Assessing Officers and CIT(A)",
          "Support in drafting responses to notices and assessments",
          "Assistance in refunds and rectification applications",
          "Support for matters before ITAT through legal partners",
        ],
        metaTitle:
          "Income Tax Representation & Litigation Support – Scrutiny & Appeals",
        metaDescription:
          "Representation before income tax authorities for scrutiny, assessments, appeals, refunds, and dispute resolution.",
        keywords: [
          "income tax scrutiny",
          "tax litigation support",
          "CIT appeal support",
        ],
      },
      {
        slug: "tax-registrations-approvals",
        title: "Tax Registrations & Approvals",
        summary:
          "Support for Section 80G, employee benefit schemes, and trust registrations.",
        items: [
          "Registrations and approvals under Section 80G",
          "Support for recognised provident funds and gratuity funds",
          "Trust registration and exemption‑related liaison",
          "Advisory on tax treatment of employee benefit schemes",
        ],
        metaTitle:
          "Tax Registrations & Approvals | 80G, Trusts & Benefit Schemes",
        metaDescription:
          "Assistance with Section 80G registration, employee benefit approvals, and trust‑related tax registrations.",
        keywords: [
          "80G registration",
          "trust registration",
          "employee benefit fund approval",
        ],
      },
      {
        slug: "tax-due-diligence",
        title: "Tax Due Diligence",
        summary:
          "Independent review of historical tax compliance and exposures for deals and restructuring.",
        items: [
          "Review of historical tax filings and assessments",
          "Identification of tax risks and exposures",
          "Evaluation of TDS, withholding, and procedural gaps",
          "Due diligence reports for transactions and investors",
        ],
        metaTitle:
          "Tax Due Diligence Services | Risk Review for Deals & Restructuring",
        metaDescription:
          "Tax due diligence services to assess historical tax risks and exposures for mergers, investments, and restructurings.",
        keywords: [
          "tax due diligence",
          "tax risk review",
          "CA due diligence report",
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