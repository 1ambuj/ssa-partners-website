import React from "react";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Image from "next/image";

import seven from "public/images/about/7.png";
import nine from "public/images/about/9.png";

const ErrorPage = () => {
  return (
    <Layout
      meta="SSA - Chartered Accountants"
      header={true}
      sidebar={true}
      footer={true}
      bodyClass={true}
    >
      <div className="error-area pd-bottom-120 bg-relative text-center">
        <Image
          src={seven}
          alt="Image"
          className="left_image_bounce position-bottom-left"
          priority
        />
        <Image
          src={nine}
          alt="Image"
          className="left_image_bounce position-center-right"
          priority
        />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <h2>404</h2>
              <h3>
                We are sorry. But the page you are looking for cannot be found.
              </h3>
              <Link href="/" className="btn btn-black border-radius">
                Back To Homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ErrorPage;
