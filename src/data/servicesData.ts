import one from "public/images/service/1.png";
import two from "public/images/service/2.png";
import three from "public/images/service/3.png";
import six from "public/images/service/6.png";
import seven from "public/images/service/7.png";
import four from "public/images/service/4.png";
import five from "public/images/service/5.png";

// Icons for cards (service-icon) - keep same as currently used
import icon1 from "public/images/service-icon/1.png";
import icon2 from "public/images/service-icon/2.png";
import icon3 from "public/images/service-icon/3.png";
import icon4 from "public/images/service-icon/4.png";
import icon5 from "public/images/service-icon/5.png";

const servicesList = [
  {
    slug: "audit",
    title: "Audit & Assurance",
    href: "/services/audit",
    icon: icon1,
    img1: one,
    img2: six,
    mainImg: one,
    animImg1: two,
    animImg2: three,
    description:
      "Independent, compliant, and insight-driven audit services ensuring transparency and regulatory confidence.",

    details: [
      "Our Audit & Assurance services are designed to provide independent, accurate, and transparent financial reporting. We go beyond traditional compliance to deliver insights that strengthen governance and internal controls.",
      "Using a risk-based audit methodology aligned with ICAI standards, we identify inefficiencies, detect financial risks, and provide actionable recommendations for better decision-making.",
    ],

    approach: [
      "Understanding business model and risks",
      "Planning audit strategy",
      "Evaluating internal controls",
      "Detailed financial verification",
      "Reporting insights",
    ],

    benefits: [
      "Improved financial transparency",
      "Stronger internal controls",
      "Regulatory compliance",
      "Enhanced stakeholder trust",
    ],

    industries: ["Manufacturing", "SMEs", "Real Estate", "Healthcare"],

    tools: ["ICAI Standards", "Companies Act", "ERP Systems"],

    subservices: [
      {
        slug: "statutory-audit",
        title: "Statutory Audit",
        summary: "Audits as per Companies Act and regulations.",
        items: [
          "Company audits",
          "Tax audits",
          "Regulatory reporting",
          "Financial verification",
        ],
      },
      {
        slug: "internal-audit",
        title: "Internal Audit",
        summary: "Improving controls and efficiency.",
        items: [
          "Risk assessment",
          "Process audits",
          "Compliance checks",
          "Fraud detection",
        ],
      },
      {
        slug: "special-audit",
        title: "Special Audits",
        summary: "Focused audit services.",
        items: [
          "Stock audits",
          "Operational audits",
          "Management audits",
        ],
      },
    ],

    cta: {
      title: "Ensure Financial Accuracy",
      subtitle: "Partner with experts for audit excellence.",
      buttonText: "Get Consultation",
    },
  },

  {
    slug: "advisory",
    title: "Advisory Services",
    href: "/services/advisory",
    icon: icon2,
    img1: six,
    img2: seven,
    mainImg: six,
    animImg1: two,
    animImg2: three,
    description:
      "Strategic advisory services to support business growth and decisions.",

    details: [
      "Our advisory services help businesses navigate financial and operational challenges with strategic insights.",
      "We provide solutions that improve efficiency, reduce risks, and support long-term business growth.",
    ],

    approach: [
      "Understanding business needs",
      "Analyzing financial data",
      "Developing strategies",
      "Implementing solutions",
    ],

    benefits: [
      "Better decision-making",
      "Improved performance",
      "Reduced risks",
      "Business growth",
    ],

    industries: ["Startups", "Corporates", "Finance", "Tech"],

    tools: ["Financial Models", "Valuation Methods"],

    subservices: [
      {
        slug: "corporate-structuring",
        title: "Corporate Structuring",
        summary: "Optimizing business structure.",
        items: [
          "Entity structuring",
          "Capital restructuring",
          "Business planning",
        ],
      },
      {
        slug: "transaction-advisory",
        title: "Transaction Advisory",
        summary: "Support for M&A and deals.",
        items: ["M&A advisory", "Business transfers", "Due diligence"],
      },
      {
        slug: "financial-advisory",
        title: "Financial Advisory",
        summary: "Improving financial performance.",
        items: [
          "Valuation",
          "Cash flow analysis",
          "Performance improvement",
        ],
      },
    ],

    cta: {
      title: "Grow with Expert Advisory",
      subtitle: "Make smarter business decisions.",
      buttonText: "Talk to Advisor",
    },
  },

  {
    slug: "taxation",
    title: "Taxation Services",
    href: "/services/taxation",
    icon: icon3,
    img1: seven,
    img2: six,
    mainImg: seven,
    animImg1: two,
    animImg2: three,
    description:
      "Comprehensive taxation services ensuring compliance and optimization.",

    details: [
      "We provide end-to-end taxation services covering direct and indirect taxes.",
      "Our focus is on compliance, optimization, and minimizing tax liabilities.",
    ],

    approach: [
      "Analyzing tax position",
      "Strategic planning",
      "Return filing",
      "Representation",
    ],

    benefits: [
      "Reduced tax burden",
      "Full compliance",
      "Lower risk",
      "Efficient planning",
    ],

    industries: ["SMEs", "Corporates", "Professionals"],

    tools: ["Income Tax Act", "GST Systems"],

    subservices: [
      {
        slug: "direct-tax",
        title: "Direct Tax",
        summary: "Income tax services.",
        items: ["Tax planning", "Return filing", "Assessments"],
      },
      {
        slug: "indirect-tax",
        title: "Indirect Tax (GST)",
        summary: "GST services.",
        items: ["GST filing", "ITC advisory", "GST audits"],
      },
    ],

    cta: {
      title: "Optimize Your Taxes",
      subtitle: "Stay compliant and save more.",
      buttonText: "Consult Now",
    },
  },

  {
    slug: "gst",
    title: "GST & Indirect Tax",
    href: "/services/gst",
    icon: icon4,
    img1: four,
    img2: five,
    mainImg: four,
    description:
      "Complete GST compliance, advisory, and litigation support.",

    details: [
      "We help businesses manage GST compliance efficiently.",
      "Our services include filing, advisory, and litigation handling.",
    ],

    approach: [
      "GST registration",
      "Return filing",
      "Advisory",
      "Litigation handling",
    ],

    benefits: [
      "Accurate compliance",
      "Reduced penalties",
      "Optimized credits",
    ],

    industries: ["Retail", "E-commerce", "Manufacturing"],

    tools: ["GST Portal", "E-invoicing"],

    subservices: [
      {
        slug: "gst-compliance",
        title: "GST Compliance",
        summary: "Filing and reporting.",
        items: ["GSTR filing", "Reconciliation", "Returns"],
      },
      {
        slug: "gst-advisory",
        title: "GST Advisory",
        summary: "Planning and support.",
        items: ["ITC planning", "Classification", "Litigation"],
      },
    ],

    cta: {
      title: "Simplify GST",
      subtitle: "Let experts manage GST for you.",
      buttonText: "Get GST Help",
    },
  },

  {
    slug: "nri",
    title: "International & NRI Services",
    href: "/services/nri",
    icon: icon5,
    img1: five,
    img2: one,
    mainImg: five,
    description:
      "Specialized services for NRIs and international businesses.",

    details: [
      "We assist NRIs and foreign clients with taxation and compliance.",
      "Our expertise ensures smooth cross-border operations.",
    ],

    approach: [
      "Understanding residency",
      "Planning taxes",
      "Compliance",
      "Reporting",
    ],

    benefits: [
      "Global compliance",
      "Smooth transactions",
      "Tax efficiency",
    ],

    industries: ["NRIs", "Foreign Investors"],

    tools: ["FEMA", "DTAA", "RBI Guidelines"],

    subservices: [
      {
        slug: "business-setup",
        title: "Business Setup",
        summary: "Setting up in India.",
        items: ["Company registration", "FDI compliance"],
      },
      {
        slug: "nri-tax",
        title: "NRI Taxation",
        summary: "Tax services for NRIs.",
        items: ["Return filing", "Capital gains", "DTAA"],
      },
    ],

    cta: {
      title: "Manage Global Finances",
      subtitle: "Expert NRI solutions.",
      buttonText: "Contact Us",
    },
  },

  {
    slug: "bpo",
    title: "Outsourcing Services",
    href: "/services/bpo",
    icon: icon5,
    img1: one,
    img2: six,
    mainImg: one,
    description:
      "Outsourcing solutions for accounting, payroll, and compliance.",

    details: [
      "We help businesses streamline financial operations.",
      "Our outsourcing improves efficiency and reduces costs.",
    ],

    approach: [
      "Understanding needs",
      "Setting systems",
      "Managing operations",
      "Reporting",
    ],

    benefits: [
      "Cost savings",
      "Efficiency",
      "Accuracy",
    ],

    industries: ["Startups", "SMEs"],

    tools: ["Tally", "QuickBooks"],

    subservices: [
      {
        slug: "accounting",
        title: "Accounting",
        summary: "Bookkeeping services.",
        items: ["Bookkeeping", "Reports", "MIS"],
      },
      {
        slug: "payroll",
        title: "Payroll",
        summary: "Salary management.",
        items: ["Salary processing", "TDS", "Reports"],
      },
      {
        slug: "compliance",
        title: "Compliance",
        summary: "Regulatory filings.",
        items: ["ROC filing", "GST compliance"],
      },
    ],

    cta: {
      title: "Focus on Growth",
      subtitle: "We handle operations.",
      buttonText: "Start Now",
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
    (s.subservices ?? []).map((sub) => ({ serviceSlug: s.slug, subSlug: sub.slug }))
  );

export default servicesList;