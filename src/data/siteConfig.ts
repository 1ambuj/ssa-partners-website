/**
 * Central site configuration for SS Partners / Sandeep Singla & Associates
 * CA Firm - Tax Advisory, Audit & Assurance, GST, Advisory
 */
export const siteConfig = {
  name: "Sandeep Singla & Associates",
  shortName: "SSA Partners",
  logo: "/images/logo.png",
  favicon: "/images/logo.png",
  tagline: "Chartered Accountants | Audit, Taxation & Advisory",
  description:
    "SSA Partners - Leading CA firm in Delhi NCR. Expert services in Audit & Assurance, Tax Advisory, GST, Advisory, and Business Process Outsourcing. Chartered Accountants helping businesses grow.",
  keywords:
    "SSA website, SSA Partners, Sandeep Singla, Chartered Accountants, CA firm Delhi, CA firm Gurgaon, tax advisory, tax consultant, GST services, audit and assurance, CA advisory, income tax, corporate advisory, NRI taxation, BPO services",
  url: "https://ssapartners.in",
  email: {
    info: "info@ssapartners.in",
    sandeep: "sandeep@ssapartners.in",
    shalini: "ca.shalini.sgupta@gmail.com",
  },
  phone: {
    main: "+91 9560181790",
    gurgaon: "+91 124-4287217",
    delhi: "+91 9211551857",
  },
  addresses: {
    gurgaon: {
      label: "Gurgaon",
      full: "E-127, Ground Floor, Sushant Shopping Arcade, Sushant Lok-1, Gurgaon, Haryana - 122009",
      phone: "+91 124-4287217",
      email: "sandeep@ssapartners.in",
    },
    delhi: {
      label: "Delhi",
      full: "V-8, Green Park Extension, New Delhi - 110016",
      phone: "+91 9211551857",
      email: "ca.shalini.sgupta@gmail.com",
    },
  },
  social: {
    facebook: "https://www.facebook.com/sandeepsinglaca",
    twitter: "https://x.com/casandeepsingla",
    linkedin: "https://www.linkedin.com/in/casandeepsingla/",
    whatsapp: "https://api.whatsapp.com/send?phone=919560181790&text=Hello",
  },
  workingHours: "Mon - Saturday: 9 AM - 6 PM | Sunday: Closed",
  footerLinks: [
    { to: "/", label: "Home" },
    { to: "/about", label: "About us" },
    { to: "/services", label: "Services" },
    { to: "/services/audit", label: "Audit & Assurance" },
    { to: "/services/advisory", label: "Advisory" },
    { to: "/services/taxation", label: "Taxation" },
    { to: "/services/gst", label: "GST" },
    { to: "/services/nri", label: "Non-resident" },
    { to: "/services/bpo", label: "Business Process Outsourcing" },
    { to: "/contact", label: "Contact" },
  ],
  contact: {
    subjects: [
      "General Enquiry",
      "Audit & Assurance",
      "Advisory",
      "Taxation",
      "GST",
      "Services for non-residents",
    ],
    mapEmbedUrl:
      "https://maps.google.com/maps?width=100%25&height=500&hl=en&q=E-127%20GF%20Sushant%20Shopping%20Arcade%20Sushant%20Lok-1%20Gurgaon&t=&z=16&ie=UTF8&iwloc=B&output=embed",
  },
  footer: {
    about:
      "Specialized services in Audit & Assurance, Advisory, Taxation and GST. We combine deep expertise with a modern approach to help businesses grow.",
    tagline: "For further info & support",
    subscribePlaceholder: "Enter your email",
    subscribeButton: "Send",
    subscribeHint: "We'll contact you shortly",
    legalLinks: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms & Conditions" },
    ],
  },
} as const;
