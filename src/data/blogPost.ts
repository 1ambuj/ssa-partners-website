export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // YYYY-MM-DD
  categories: string[];
  serviceSlugs?: string[]; // Links to services (audit, advisory, taxation, gst, nri, bpo)
  commentsLabel?: string;
  authorName?: string;
  content: string[];
  tags?: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "budget-2022-direct-tax",
    title: "Budget 2022: Direct Tax Highlights",
    excerpt:
      "Clarification on cess/surcharge treatment and key direct tax updates introduced in Budget 2022—what businesses should watch and how to stay compliant.",
    date: "2022-02-06",
    categories: ["Taxation", "Direct Tax"],
    serviceSlugs: ["taxation"],
    commentsLabel: "02 Comments",
    authorName: "SSA Team",
    content: [
      "Budget 2022 introduced a set of direct tax changes aimed at improving compliance and providing clarity on key deductions and disallowances.",
      "One important clarification relates to the treatment of cess and surcharge under Section 40 and how these items should be considered while computing taxable income.",
      "For businesses, the practical takeaway is to review year-end provisions, tax computations, and prior positions taken—especially where cess/surcharge treatment may impact expenses.",
      "If you would like a review of your current tax positions or support in implementing these changes, our team can help you align documentation and filings to the latest guidance.",
    ],
    tags: ["Tax", "Budget 2022", "Compliance"],
  },
  {
    slug: "budget-2022-gst",
    title: "Budget 2022: GST Updates You Should Know",
    excerpt:
      "A summary of GST-related amendments introduced in the Finance Bill, 2022 and how they may affect registrations, returns, and day-to-day compliance.",
    date: "2022-02-06",
    categories: ["GST", "Compliance"],
    serviceSlugs: ["gst"],
    commentsLabel: "02 Comments",
    authorName: "SSA Team",
    content: [
      "The Finance Bill, 2022 proposed multiple GST amendments, many of which apply from dates to be notified.",
      "Businesses should track the notified effective dates and prepare internal processes for return filing, reconciliations, and credit documentation.",
      "We recommend periodic GST health checks to identify mismatches early and reduce interest/penalty exposure.",
    ],
    tags: ["GST", "Budget 2022", "Returns"],
  },
  {
    slug: "budget-2022-vda",
    title: "Budget 2022: Virtual Digital Assets (VDA) Taxation",
    excerpt:
      "Virtual digital assets gained massive traction—Budget 2022 introduced a specific taxation framework. Here’s what it means for transactions and reporting.",
    date: "2022-02-06",
    categories: ["Advisory", "Taxation"],
    serviceSlugs: ["advisory", "taxation"],
    commentsLabel: "02 Comments",
    authorName: "SSA Team",
    content: [
      "Virtual digital assets (VDAs) have seen significant adoption and higher trading volumes in recent years.",
      "Budget 2022 introduced specific provisions for taxation of VDA transfers and related reporting expectations.",
      "If you or your business deals with VDAs, it’s important to document transactions, determine tax positions, and ensure timely reporting to avoid future disputes.",
    ],
    tags: ["VDA", "Crypto", "Tax"],
  },
  {
    slug: "direct-taxation-overview",
    title: "Understanding Direct Taxation in India",
    excerpt:
      "Direct taxes are levied directly on individuals and organizations. This overview covers key concepts, compliance requirements, and common pitfalls.",
    date: "2023-05-15",
    categories: ["Direct Tax", "Taxation"],
    serviceSlugs: ["taxation"],
    commentsLabel: "02 Comments",
    authorName: "SSA Team",
    content: [
      "Direct taxation includes income tax, corporate tax, and other taxes directly imposed on the taxpayer.",
      "A strong compliance process includes accurate bookkeeping, timely advance tax calculations, and reconciliation of TDS/TCS credits.",
      "Regular reviews help identify exposures early, especially for businesses with multiple revenue streams or cross-border transactions.",
    ],
    tags: ["Income Tax", "Corporate Tax", "TDS"],
  },
  {
    slug: "indirect-taxation-basics",
    title: "Basics of Indirect Taxation",
    excerpt:
      "Indirect taxes like GST and customs duties impact pricing and working capital. Learn the structure, compliance basics, and practical implications.",
    date: "2023-06-10",
    categories: ["Indirect Tax", "GST"],
    serviceSlugs: ["gst", "taxation"],
    commentsLabel: "02 Comments",
    authorName: "SSA Team",
    content: [
      "Indirect taxes are collected through transactions and typically passed on to the end consumer.",
      "For GST compliance, invoice discipline, correct classification, and periodic reconciliations are critical for input tax credit (ITC) integrity.",
      "A consistent process reduces notices and improves readiness during departmental audits.",
    ],
    tags: ["GST", "ITC", "Compliance"],
  },
  {
    slug: "audit-assurance-updates",
    title: "Recent Updates in Audit & Assurance",
    excerpt:
      "A practical view of recent audit and assurance updates and best practices to strengthen controls, reporting, and governance.",
    date: "2023-08-05",
    categories: ["Audit", "Assurance"],
    serviceSlugs: ["audit"],
    commentsLabel: "02 Comments",
    authorName: "SSA Team",
    content: [
      "Audit readiness depends heavily on documentation quality, internal controls, and timely closing processes.",
      "We suggest implementing periodic internal reviews, strengthening maker-checker processes, and maintaining audit trails for key balances.",
      "These steps help reduce audit cycles and improve confidence for stakeholders and lenders.",
    ],
    tags: ["Audit", "Internal Controls", "Reporting"],
  },
  {
    slug: "nri-tax-planning-basics",
    title: "NRI Taxation: Key Considerations",
    excerpt:
      "A brief guide to tax implications for NRIs, DTAA benefits, and compliance requirements for non-resident Indians.",
    date: "2023-09-12",
    categories: ["NRI", "Taxation"],
    serviceSlugs: ["nri"],
    commentsLabel: "01 Comment",
    authorName: "SSA Team",
    content: [
      "NRIs have specific tax obligations in India based on residential status and source of income.",
      "DTAA provisions can help avoid double taxation—understanding treaty benefits is essential for optimal planning.",
      "Correct TDS treatment and timely filing of returns are critical for NRIs with Indian income.",
    ],
    tags: ["NRI", "DTAA", "Tax"],
  },
  {
    slug: "outsourcing-accounting-benefits",
    title: "Why Outsource Your Accounting & Compliance?",
    excerpt:
      "Explore the benefits of outsourcing finance, accounting, and compliance functions for growing businesses.",
    date: "2023-10-01",
    categories: ["BPO", "Compliance"],
    serviceSlugs: ["bpo"],
    commentsLabel: "01 Comment",
    authorName: "SSA Team",
    content: [
      "Outsourcing enables businesses to focus on core operations while experts handle routine finance and compliance.",
      "Scalability, cost efficiency, and access to specialized skills are key advantages of a structured BPO engagement.",
      "A clear SLA and regular reporting ensure transparency and control over outsourced processes.",
    ],
    tags: ["BPO", "Accounting", "Compliance"],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

/** Get blogs related to a service by slug (audit, advisory, taxation, gst, nri, bpo) */
export function getBlogsByServiceSlug(serviceSlug: string): BlogPost[] {
  return blogPosts.filter(
    (p) => p.serviceSlugs?.includes(serviceSlug) ?? false
  );
}

/** Get unique categories from all blog posts */
export function getUniqueCategories(): string[] {
  const set = new Set<string>();
  blogPosts.forEach((p) =>
    (p.categories || []).forEach((c) => set.add(c))
  );
  return Array.from(set).sort();
}

/** Get recent posts sorted by date (newest first) */
export function getRecentPosts(limit = 5): BlogPost[] {
  return [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

/** Get blogs by category name */
export function getBlogsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((p) =>
    (p.categories || []).some(
      (c) => c.toLowerCase() === category.toLowerCase()
    )
  );
}

/** Search blogs by title or excerpt */
export function searchBlogs(query: string): BlogPost[] {
  const q = query.toLowerCase().trim();
  if (!q) return blogPosts;
  return blogPosts.filter(
    (p) =>
      p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q)
  );
}

export function formatBlogDate(date: string) {
  // date is expected YYYY-MM-DD
  const [y, m, d] = date.split("-").map((v) => Number(v));
  if (!y || !m || !d) return date;
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthNames[m - 1];
  if (!month) return date;
  return `${month} ${String(d).padStart(2, "0")}, ${y}`;
}
