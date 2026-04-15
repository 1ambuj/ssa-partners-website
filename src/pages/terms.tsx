import React from "react";
import Layout from "@/components/layout/Layout";
import LegalContent from "@/components/container/legal/LegalContent";
import { termsContent } from "@/data/terms";
import { siteConfig } from "@/data/siteConfig";

const TermsPage = () => {
  return (
    <Layout
      meta={`Terms & Conditions - ${siteConfig.shortName}`}
      header={false}
      sidebar={true}
      footer={true}
      bodyClass={true}
    >
      <LegalContent
        title="Terms & Conditions"
        intro="Please read these terms carefully before using this Website."
        sections={termsContent}
      />
    </Layout>
  );
};

export default TermsPage;
