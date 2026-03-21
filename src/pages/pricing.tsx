import React from "react";
import Layout from "@/components/layout/Layout";
import AboutCustomer from "@/components/container/about/AboutCustomer";
import ContactClient from "@/components/container/contact/ContactClient";
import PricingArea from "@/components/container/case/PricingArea";

const Pricing = () => {
  return (
    <Layout
      meta="SSA - Chartered Accountants"
      header={false}
      sidebar={true}
      footer={true}
      bodyClass={true}
    >
      <PricingArea />
      <AboutCustomer />
      <ContactClient />
    </Layout>
  );
};

export default Pricing;
