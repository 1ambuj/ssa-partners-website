"use client";

import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

type BlogContactSectionProps = {
  blogTitle: string;
};

const BlogContactSection = ({ blogTitle }: BlogContactSectionProps) => {
  const { addresses, email, phone } = siteConfig;
  const encodedSubject = encodeURIComponent(`Blog enquiry: ${blogTitle}`);
  const encodedBody = encodeURIComponent(
    `Hello SSA Team,\n\nI would like to discuss this topic: ${blogTitle}\n\nPlease contact me.\n`,
  );

  return (
    <div className="widget blog-contact-widget">
      <h4 className="widget-title">Need Help?</h4>
      <p className="blog-contact-copy">
        Want to discuss {blogTitle}? Reach out to our team for audit, tax, GST, and advisory help.
      </p>
      <div className="blog-contact-actions">
        <a className="btn btn-base border-radius w-100" href="/contact">
          Contact Us
        </a>
        <a className="btn btn-border-black border-radius w-100" href={`tel:${phone.main.replace(/\s/g, "")}`}>
          Call {phone.main}
        </a>
        <a
          className="btn btn-black border-radius w-100"
          href={`mailto:${email.info}?subject=${encodedSubject}&body=${encodedBody}`}
        >
          Mail Us
        </a>
      </div>
      <div className="blog-contact-meta">
        <p>
          <strong>Email:</strong> <a href={`mailto:${email.info}`}>{email.info}</a>
        </p>
        <p>
          <strong>Gurgaon:</strong> {addresses.gurgaon.full}
        </p>
        <p className="mb-0">
          <strong>Delhi:</strong> {addresses.delhi.full}
        </p>
      </div>
      <div className="blog-contact-inline-link">
        <Link href="/contact">Open full contact page</Link>
      </div>
    </div>
  );
};

export default BlogContactSection;
