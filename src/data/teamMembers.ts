export interface TeamMember {
  name: string;
  slug: string;
  role: string;
  img: string | null;
  bio: string;
  detailBio: string;
  specialization: string | null;
  linkedin: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Sandeep Singla",
    slug: "sandeep-singla",
    role: "Partner – Audit, Taxation & Corporate Advisory",
    img: "/images/team/3.png",
    bio: "CA. Sandeep Singla, FCA, brings over 15 years of expertise in audit, taxation, and corporate advisory.",
    detailBio: `CA. Sandeep Singla is a Fellow member of The Institute of Chartered Accountants of India (ICAI) with years of post-qualification expertise in various professions and fields.

    In the domains of audit and taxation, he has experience of more than 15 years and has provided advice and specialized services to businesses. His professional background also covers litigation experience in the fields of direct and indirect taxation.

    He has worked closely with start-ups, promoters, and corporates in developing and evaluating business plans for determining financial objectives, operational risk consulting including evaluation of business risks, and developing policies and procedures to facilitate internal financial controls, thereby establishing sustainable processes to fill structural gaps.

    He has extensive knowledge and experience dealing with trusts and non-profit organizations, including registration, compliance monitoring, and FCRA regulations, among other things.

    Furthermore, Sandeep Singla uses his management and coordination skills to tackle the operations of mergers and acquisitions, slump sales, demergers, company law, overseas subsidiaries, due diligence, and transaction taxes. His problem-solving techniques let him carry out these services conveniently.`,
    specialization: null,
    linkedin: "https://www.linkedin.com/in/casandeepsingla/",
  },
  {
    name: "Vinod Kumar Mehndiratta",
    slug: "vinod-kumar-mehndiratta",
    role: "Partner – Audit, Taxation & Corporate Advisory",
    img: "/images/team/4.png",
    bio: "Senior FCA with 15+ years of experience in taxation, statutory audits, and corporate consultancy.",
    detailBio: `CA. Mehndiratta is a fellow Member of The Institute of Chartered Accountants of India, senior partner in the firm with more than 15 years of experience in the field of Consultancy, a Chartered Accountant by profession. He has vast experience in the field of Taxation, Corporate advisory, Management Representations. He has worked in large Automobile corporate as MIS Reporting Head.`,
    specialization: "Tax Representation, Audit and Assurance, Statutory Audits, Internal Audits",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "CA. Gunjan Hirani",
    slug: "gunjan-hirani",
    role: "Partner – International & Domestic Taxation",
    img: "/images/team/1.png",
    bio: "FCA with 10+ years of expertise in international taxation, transfer pricing, and corporate tax advisory.",
    detailBio: `CA. Gunjan Hirani is a Fellow Member of The Institute of Chartered Accountants of India and having more than 10 years of experience of international and domestic taxation and has worked in EY – Big Four Accounting firm in International Taxation and later on in Mohinder Puri & Co. in Corporate Taxation.
She has significant work experience on a variety of direct tax matters, including expatriate taxation, international taxation and transfer pricing. She had qualified as a Chartered Accountant in the year 2012. She has experience in establishment and operationalization of various start-up companies, LLPs, project offices, liaison offices and branch offices.`,
    specialization: "Tax and Regulatory Direct Taxes, Tax Strategy, International Taxation, Domestic / International Taxation Advisory, Finance and Accounting Outsourcing Services",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "CA. S.K. Gupta",
    slug: "sk-gupta",
    role: "Partner – Taxation & Corporate Strategy",
    img: "/images/team/2.png",
    bio: "FCA with 40+ years of expertise in taxation, company law, risk management, and organizational strategy.",
    detailBio: `CA. S.K. Gupta is a Fellow member of The Institute of Chartered Accountants of India (ICAI) with over 40 years of knowledge in the areas of accounting, taxation and company law matters.
His areas of competence include business and income tax issues, organizational strategy, systems and processes, risk management drafting, and liaising with various government departments. He has also worked with tax officers at various levels on the filing of direct and indirect tax assessments, as well as income tax audits.
S.K. Gupta has surely taken multiple shapes with his leadership skills, from joining forces to engaging in a project or sharing technical opinions and resources amongst companies. Whatever a company does, he finds the correct agreement that benefits both sides.`,
    specialization: "Taxation, Corporate Strategy, Risk Management, Company Law",
    linkedin: "https://www.linkedin.com/",
  },
  // {
  //   name: "CA. Monika Makkar",
  //   slug: "monika-makkar",
  //   role: "Partner – Corporate Advisory & Outsourcing",
  //   img: "/images/team/1.png",
  //   bio: "ACA with 10+ years of experience in finance outsourcing, taxation, and corporate advisory services.",
  //   detailBio: `CA. Monika Makkar is an Associate member of The Institute of Chartered Accountants of India with more than 10 years of experience in finance outsourcing, taxation, and corporate advisory services. She has significant work experience in corporate advisory, finance and accounting outsourcing, and internal audit.`,
  //   specialization: "Corporate Advisory and Consulting, Finance and Accounting Outsourcing, Internal Audit",
  //   linkedin: "https://www.linkedin.com/",
  // },
];

export function getTeamMemberBySlug(slug: string): TeamMember | undefined {
  return teamMembers.find((m) => m.slug === slug);
}
