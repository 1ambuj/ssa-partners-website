import React, { useState } from "react";

const ServiceFaq = () => {
  const [imgTab, setImgTab] = useState(0);

  return (
    <div className="faq-area cus-faq pd-top-110 bg-sky pd-bottom-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center">
              <h2 className="title">Solutions: all your questions answered</h2>
            </div>
          </div>
        </div>
        <div
          className="accordion attax-accordion style-2 mt-5 mt-lg-0 pd-bottom-120"
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
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, search for &apos;lorem
                ipsum&apos; will uncover
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
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, search for &apos;lorem
                ipsum&apos; will uncover
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
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, search for &apos;lorem
                ipsum&apos; will uncover
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
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, search for &apos;lorem
                ipsum&apos; will uncover
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceFaq;
