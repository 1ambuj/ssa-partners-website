/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from "react";
import Link from "next/link";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const HomeFaq = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const [imgTab, setImgTab] = useState(0);

  return (
    <div className="faq-area pd-top-110 pd-bottom-120 cus-faq ssa-faq-header-style">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 align-self-center">
            <div className="section-title style-white mb-0 pe-xl-4 faq-left-content">
              <h6 className="sub-title faq-kicker">Frequently Asked Questions</h6>
              <h2 className="title">
                General information about the firm&apos;s services and
                regulatory obligations. For specific queries, please contact the
                firm directly.
              </h2>
            </div>
          </div>
          <div className="col-lg-7 ps-xl-4">
            <div
              className="attax-accordion mt-5 mt-lg-0 style-white faq-accordion-home"
              id="accordionExample"
            >
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className={
                      (imgTab == 0 ? "  " : " collapsed") + " accordion-button"
                    }
                    onClick={() => setImgTab(imgTab === 0 ? -1 : 0)}
                  >
                    1.  What services does the firm provide?
                  </button>
                </h2>
                <div
                  className={`accordion-collapse collapse${
                    imgTab === 0 ? " show " : ""
                  }`}
                >
                  <div className="accordion-body">
                  Sandeep Singla & Associates provides professional services in Audit & Assurance (statutory, tax, internal, and special purpose audits), Direct Taxation (income tax planning, return filing, representation), Indirect Taxation and GST (registration, periodic filings, advisory), Advisory (transaction advisory, corporate structuring, regulatory compliance), Non-Resident Services (business setup in India, FEMA and RBI compliance, NRI tax filing), and Finance & Accounts Outsourcing (bookkeeping, payroll, MIS reporting, and legal process outsourcing).

                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className={
                      (imgTab == 1 ? "  " : " collapsed") + " accordion-button"
                    }
                    onClick={() => setImgTab(imgTab === 1 ? -1 : 1)}
                  >
                    2. Who is required to undergo a statutory audit in India?
                  </button>
                </h2>
                <div
                  className={`accordion-collapse collapse${
                    imgTab === 1 ? " show " : ""
                  }`}
                >
                  <div className="accordion-body">
                  Companies incorporated under the Companies Act, 2013, and Limited Liability Partnerships (LLPs) are required to conduct statutory audits annually. The audit must be conducted by a practising Chartered Accountant appointed in accordance with the applicable provisions of the Companies Act or LLP Act.

                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className={
                      (imgTab == 2 ? "  " : " collapsed") + " accordion-button"
                    }
                    onClick={() => setImgTab(imgTab === 2 ? -1 : 2)}
                  >
                    3. When is a tax audit under Section 44AB required?

                  </button>
                </h2>
                <div
                  className={`accordion-collapse collapse${
                    imgTab === 2 ? " show " : ""
                  }`}
                >
                  <div className="accordion-body">
                  A tax audit under Section 44AB of the Income Tax Act, 1961 is required when a business's total sales, turnover, or gross receipts exceed the prescribed threshold in a financial year, or when a professional's gross receipts exceed the applicable limit. The current thresholds and conditions are specified under the Income Tax Act and are subject to amendment through Finance Acts.

                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className={
                      (imgTab == 3 ? "  " : " collapsed") + " accordion-button"
                    }
                    onClick={() => setImgTab(imgTab === 3 ? -1 : 3)}
                  >
                    4. What are the GST return filing requirements for registered businesses?

                  </button>
                </h2>
                <div
                  className={`accordion-collapse collapse${
                    imgTab === 3 ? " show " : ""
                  }`}
                >
                  <div className="accordion-body">
                  Registered GST taxpayers are generally required to file GSTR-1 (outward supplies), GSTR-3B (summary return and tax payment), and GSTR-9 (annual return) along with GSTR-9C (reconciliation statement) where applicable. Filing frequencies and specific requirements depend on the taxpayer's turnover and registration category.

                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                  <button
                    className={
                      (imgTab == 4 ? "  " : " collapsed") + " accordion-button"
                    }
                    onClick={() => setImgTab(imgTab === 4 ? -1 : 4)}
                  >
                    5. Can a foreign company establish a presence in India, and what approvals are required?
                  </button>
                </h2>
                <div
                  className={`accordion-collapse collapse${
                    imgTab === 4 ? " show " : ""
                  }`}
                >
                  <div className="accordion-body">
                    Yes. Foreign companies may establish a presence in India through various structures, including wholly owned subsidiaries, joint ventures, liaison offices, branch offices, or project offices. Each structure has distinct regulatory requirements under the Companies Act, 2013, and the Foreign Exchange Management Act (FEMA). Approvals may be required from the Reserve Bank of India (RBI) and the Ministry of Corporate Affairs (MCA) depending on the structure chosen.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingSix">
                  <button
                    className={
                      (imgTab == 5 ? "  " : " collapsed") + " accordion-button"
                    }
                    onClick={() => setImgTab(imgTab === 5 ? -1 : 5)}
                  >
                    6. What is the firm&apos;s engagement methodology?
                  </button>
                </h2>
                <div
                  className={`accordion-collapse collapse${
                    imgTab === 5 ? " show " : ""
                  }`}
                >
                  <div className="accordion-body">
                    The firm follows a structured 6S engagement model — Scan,
                    Study, Strategize, Structure, Support, and Sustain —
                    across all service engagements. This framework ensures that
                    each engagement is systematically planned, implemented, and
                    monitored in accordance with applicable regulatory and
                    professional standards.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFaq;
