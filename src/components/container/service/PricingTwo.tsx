/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Link from "next/link";

const PricingTwo = () => {
  return (
    <div className="pricing-area pd-top-115 pd-bottom-90 cus-pric">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="section-title text-center">
              <h6 className="sub-title">// Pricing Plans</h6>
              <h2 className="title">Affordable Pricing Plans</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single-pricing-inner text-center">
              <h4>Basic Plan</h4>
              <h2>$99.00</h2>
              <p className="month">Per/Mounth</p>
              <p>Lorem ipsum dolor sit amet, consec tetur adipiscing.</p>
              <ul>
                <li>Includes all Workbooks</li>
                <li>Vehicula ut sagittis at</li>
                <li>Rutrum ac netus gravida</li>
                <li>24/7 Online Support</li>
                <li>Cashback Guarantee</li>
              </ul>
              <Link className="btn btn-black border-radius" href="/">
                Purchase Now
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-pricing-inner text-center">
              <h4>Advanced Plan</h4>
              <h2>$199.00</h2>
              <p className="month">Per/Mounth</p>
              <p>Lorem ipsum dolor sit amet, consec tetur adipiscing.</p>
              <ul>
                <li>Includes all Workbooks</li>
                <li>Vehicula ut sagittis at</li>
                <li>Rutrum ac netus gravida</li>
                <li>24/7 Online Support</li>
                <li>Cashback Guarantee</li>
              </ul>
              <Link className="btn btn-black border-radius" href="/">
                Purchase Now
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-pricing-inner text-center">
              <h4>Premium Plan</h4>
              <h2>$299.00</h2>
              <p className="month">Per/Mounth</p>
              <p>Lorem ipsum dolor sit amet, consec tetur adipiscing.</p>
              <ul>
                <li>Includes all Workbooks</li>
                <li>Vehicula ut sagittis at</li>
                <li>Rutrum ac netus gravida</li>
                <li>24/7 Online Support</li>
                <li>Cashback Guarantee</li>
              </ul>
              <Link className="btn btn-black border-radius" href="/">
                Purchase Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingTwo;
