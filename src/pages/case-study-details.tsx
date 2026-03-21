import React from "react";
import Layout from "@/components/layout/Layout";
import ContactClient from "@/components/container/contact/ContactClient";
import CaseStudyDetailsArea from "@/components/container/case/CaseStudyDetailsArea";

const CaseStudyDetails = () => {
  return (
    <Layout
      meta="SSA - Chartered Accountants"
      header={false}
      sidebar={true}
      footer={true}
      bodyClass={1}
    >
      <CaseStudyDetailsArea />
      <ContactClient />
    </Layout>
  );
};

export default CaseStudyDetails;
