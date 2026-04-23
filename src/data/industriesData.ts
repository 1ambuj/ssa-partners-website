import {
  FaRocket,
  FaFilm,
  FaLaptopCode,
  FaTruck,
  FaHardHat,
  FaGraduationCap,
  FaPlane,
  FaHandHoldingHeart,
  FaShoppingCart,
  FaHotel,
  FaChartLine,
  FaBriefcase,
} from "react-icons/fa";
import { IconType } from "react-icons";

export type IndustryItem = {
  slug: string;
  icon: IconType;
  title: string;
  description: string;
  image: string;
  highlights: string[];
};

export const industriesList: IndustryItem[] = [
  {
    slug: "startups",
    icon: FaRocket,
    title: "Startups",
    description:
      "Comprehensive advisory and compliance solutions tailored for emerging businesses and entrepreneurs.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",
    highlights: ["Entity structuring", "Fundraise readiness", "Tax and GST setup"],
  },
  {
    slug: "media-entertainment",
    icon: FaFilm,
    title: "Media & Entertainment",
    description:
      "Specialized support for media houses, production companies, and entertainment platforms.",
    image:
      "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?auto=format&fit=crop&w=1400&q=80",
    highlights: ["Contract and royalty review", "GST on rights", "Production accounting"],
  },
  {
    slug: "technology",
    icon: FaLaptopCode,
    title: "Technology",
    description:
      "Tax planning, regulatory, and audit services for IT, SaaS, and technology-driven companies.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
    highlights: ["SaaS tax advisory", "Revenue recognition", "Cross-border structuring"],
  },
  {
    slug: "transport-logistics",
    icon: FaTruck,
    title: "Transport and Logistics",
    description:
      "GST, compliance, and operational advisory for logistics, transport, and supply chain businesses.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80",
    highlights: ["E-way and GST process", "Fleet cost controls", "Vendor compliance"],
  },
  {
    slug: "building-construction",
    icon: FaHardHat,
    title: "Building and Construction",
    description:
      "End-to-end financial, tax, and regulatory support for construction and infrastructure projects.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80",
    highlights: ["Project accounting", "Contractor taxation", "Regulatory filings"],
  },
  {
    slug: "education-skill-development",
    icon: FaGraduationCap,
    title: "Education and Skill Development",
    description:
      "Advisory for educational institutions, EdTech, and skill development organizations.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=80",
    highlights: ["Trust and society compliance", "Fee process controls", "Audit and governance"],
  },
  {
    slug: "travel",
    icon: FaPlane,
    title: "Travel",
    description:
      "Compliance, GST, and audit services for travel agencies, tour operators, and hospitality partners.",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1400&q=80",
    highlights: ["Tour package taxation", "Agent reconciliation", "Vendor settlement controls"],
  },
  {
    slug: "non-profit-charitable-trusts",
    icon: FaHandHoldingHeart,
    title: "Non Profit & Charitable Trusts",
    description:
      "Registration, compliance, and audit for NGOs, non-profits, and charitable trusts.",
    image: "/images/blog/6.png",
    highlights: ["12A/80G support", "Utilisation compliance", "Donor reporting"],
  },
  {
    slug: "retail-consumer-market",
    icon: FaShoppingCart,
    title: "Retail & Consumer Market",
    description:
      "Bookkeeping, GST, and tax solutions for retail and consumer-focused businesses.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=80",
    highlights: ["Inventory and margin analysis", "POS tax controls", "Multi-branch reporting"],
  },
  {
    slug: "hospitality",
    icon: FaHotel,
    title: "Hopitality",
    description:
      "Specialized support for hotels, restaurants, and hospitality service providers.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=80",
    highlights: ["Outlet-level MIS", "Food and service GST", "Payroll and compliance"],
  },
  {
    slug: "private-equity",
    icon: FaChartLine,
    title: "Private Equity",
    description:
      "Structuring, compliance, and advisory for private equity funds and portfolio companies.",
    image:
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=1400&q=80",
    highlights: ["Due diligence support", "Transaction structuring", "Portfolio monitoring"],
  },
  {
    slug: "professional-services",
    icon: FaBriefcase,
    title: "Professional Services",
    description:
      "Tailored solutions for consultancies, agencies, and professional service firms.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
    highlights: ["Engagement profitability", "Billing controls", "Compliance and audit"],
  },
];

export const getIndustryBySlug = (slug: string) =>
  industriesList.find((industry) => industry.slug === slug);
