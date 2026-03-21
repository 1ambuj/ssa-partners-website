import React from "react";
import Layout from "@/components/layout/Layout";
import CaseStudyArea from "@/components/container/case/CaseStudyArea";
import ContactClient from "@/components/container/contact/ContactClient";

const CaseStudy = () => {
  return (
    <Layout
      meta="SSA - Chartered Accountants"
      header={false}
      sidebar={true}
      footer={true}
      bodyClass={true}
    >
      <CaseStudyArea />
      <ContactClient />
    </Layout>
  );
};

export default CaseStudy;
