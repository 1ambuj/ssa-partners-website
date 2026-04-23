/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from "react";

const faqItems = [
  {
    question: "What services does the firm provide?",
    answer:
      "Sandeep Singla & Associates provides professional services in Audit & Assurance (statutory, tax, internal, and special purpose audits), Direct Taxation (income tax planning, return filing, representation), Indirect Taxation and GST (registration, periodic filings, advisory), Advisory (transaction advisory, corporate structuring, regulatory compliance), Non-Resident Services (business setup in India, FEMA and RBI compliance, NRI tax filing), and Finance & Accounts Outsourcing (bookkeeping, payroll, MIS reporting, and legal process outsourcing).",
  },
  {
    question: "Who is required to undergo a statutory audit in India?",
    answer:
      "Companies incorporated under the Companies Act, 2013, and Limited Liability Partnerships (LLPs) are required to conduct statutory audits annually. The audit must be conducted by a practising Chartered Accountant appointed in accordance with the applicable provisions of the Companies Act or LLP Act.",
  },
  {
    question: "When is a tax audit under Section 44AB required?",
    answer:
      "A tax audit under Section 44AB of the Income Tax Act, 1961 is required when a business's total sales, turnover, or gross receipts exceed the prescribed threshold in a financial year, or when a professional's gross receipts exceed the applicable limit. The current thresholds and conditions are specified under the Income Tax Act and are subject to amendment through Finance Acts.",
  },
  {
    question:
      "What are the GST return filing requirements for registered businesses?",
    answer:
      "Registered GST taxpayers are generally required to file GSTR-1 (outward supplies), GSTR-3B (summary return and tax payment), and GSTR-9 (annual return) along with GSTR-9C (reconciliation statement) where applicable. Filing frequencies and specific requirements depend on the taxpayer's turnover and registration category.",
  },
  {
    question:
      "Can a foreign company establish a presence in India, and what approvals are required?",
    answer:
      "Yes. Foreign companies may establish a presence in India through various structures, including wholly owned subsidiaries, joint ventures, liaison offices, branch offices, or project offices. Each structure has distinct regulatory requirements under the Companies Act, 2013, and the Foreign Exchange Management Act (FEMA). Approvals may be required from the Reserve Bank of India (RBI) and the Ministry of Corporate Affairs (MCA) depending on the structure chosen.",
  },
  {
    question: "What is the firm's engagement methodology?",
    answer:
      "The firm follows a structured 6S engagement model — Scan, Study, Strategize, Structure, Support, and Sustain — across all service engagements. This framework ensures that each engagement is systematically planned, implemented, and monitored in accordance with applicable regulatory and professional standards.",
  },
];

const HomeFaq = () => {
  const [imgTab, setImgTab] = useState(-1);

  return (
    <div className="faq-area pd-top-110 pd-bottom-120 cus-faq ssa-faq-header-style">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 align-self-center mb-5 mb-lg-0">
            <div className="section-title style-white mb-0 pe-xl-5 faq-left-content">
              <h6 className="sub-title faq-kicker">// Frequently Asked Questions</h6>
              <h2 className="title">
                General information about the firm&apos;s services and
                regulatory obligations. For specific queries, please contact the
                firm directly.
              </h2>
            </div>
          </div>
          <div className="col-lg-5 ps-xl-3">
            <div
              className="attax-accordion mt-5 mt-lg-0 style-white faq-accordion-home"
              id="accordionExample"
            >
              {faqItems.map((item, index) => (
                <div className="accordion-item" key={item.question}>
                  <h2
                    className="accordion-header"
                    id={`heading-${index + 1}`}
                  >
                    <button
                      className={
                        (imgTab === index ? "  " : " collapsed") +
                        " accordion-button"
                      }
                      onClick={() => setImgTab(imgTab === index ? -1 : index)}
                    >
                      {item.question}
                    </button>
                  </h2>
                  <div
                    className={`accordion-collapse collapse${
                      imgTab === index ? " show " : ""
                    }`}
                  >
                    <div className="accordion-body">{item.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFaq;
