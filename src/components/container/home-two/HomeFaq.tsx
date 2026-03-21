/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from "react";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const HomeFaq = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const [imgTab, setImgTab] = useState(0);

  return (
    <div className="faq-area pd-top-110 bg-cover pd-bottom-120 cus-fa cus-faq">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <div className="section-title style-white mb-0 pe-xl-5">
              <h6 className="sub-title">// Frequently Asked Questions</h6>
              <h2 className="title">
                Providing exceptional tax advisor & financial consulting and
                insight from the start.
              </h2>
              <p className="content mb-4">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour,
              </p>
              <div className="row">
                <div className="col-md-6 border-right-1-light  pe-xl-4">
                  <h5 className="section-counter">
                    <span>
                      <span className="counter" ref={ref}>
                        {inView && <CountUp start={0} end={25} duration={3} />}
                      </span>
                      K
                    </span>{" "}
                    Daily Visitor
                  </h5>
                </div>
                <div className="col-md-6 ps-xl-4">
                  <h5 className="section-counter">
                    <span>
                      <span className="counter" ref={ref}>
                        {inView && <CountUp start={0} end={50} duration={3} />}
                      </span>
                      +
                    </span>{" "}
                    Customer
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 ps-xl-4">
            <div
              className="accordion attax-accordion mt-5 mt-lg-0 style-white"
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
                    1. Where Can I Find Information?
                  </button>
                </h2>
                <div
                  className={`accordion-collapse collapse${
                    imgTab === 0 ? " show " : ""
                  }`}
                >
                  <div className="accordion-body">
                    Many desktop publishing packages and web page editors now
                    use Lorem Ipsum as their default model text, search for
                    &apos;lorem ipsum&apos; will uncover
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
                    2. What Are Your Terms And Conditions?
                  </button>
                </h2>
                <div
                  className={`accordion-collapse collapse${
                    imgTab === 1 ? " show " : ""
                  }`}
                >
                  <div className="accordion-body">
                    Many desktop publishing packages and web page editors now
                    use Lorem Ipsum as their default model text, search for
                    &apos;lorem ipsum&apos; will uncover
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
                    3. Can I Buy Directly From The Factory?
                  </button>
                </h2>
                <div
                  className={`accordion-collapse collapse${
                    imgTab === 2 ? " show " : ""
                  }`}
                >
                  <div className="accordion-body">
                    Many desktop publishing packages and web page editors now
                    use Lorem Ipsum as their default model text, search for
                    &apos;lorem ipsum&apos; will uncover
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
                    4. What Kinds of Payment Do You Accept?
                  </button>
                </h2>
                <div
                  className={`accordion-collapse collapse${
                    imgTab === 3 ? " show " : ""
                  }`}
                >
                  <div className="accordion-body">
                    Many desktop publishing packages and web page editors now
                    use Lorem Ipsum as their default model text, search for
                    &apos;lorem ipsum&apos; will uncover
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
