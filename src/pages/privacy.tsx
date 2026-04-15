import React from "react";
import Layout from "@/components/layout/Layout";
import LegalContent from "@/components/container/legal/LegalContent";
import { privacyContent } from "@/data/privacy";
import { siteConfig } from "@/data/siteConfig";

const PrivacyPage = () => {
  return (
    <Layout
      meta={`Privacy Policy - ${siteConfig.shortName}`}
      header={false}
      sidebar={true}
      footer={true}
      bodyClass={true}
    >
      <LegalContent
        title="Privacy Policy"
        intro="This policy explains how we collect, use, and protect your information."
        sections={privacyContent}
      />
    </Layout>
  );
};

export default PrivacyPage;
