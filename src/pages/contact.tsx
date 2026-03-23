import React from "react";
import Layout from "@/components/layout/Layout";
import ContactBanner from "@/components/container/contact/ContactBanner";
import ContactForm from "@/components/container/contact/ContactForm";
import { siteConfig } from "@/data/siteConfig";

const Contact = () => {
  return (
    <Layout
      meta={`Contact Us - ${siteConfig.shortName} Chartered Accountants`}
      header={false}
      sidebar={true}
      footer={true}
      bodyClass={true}
    >
      <ContactBanner />
      <ContactForm />
    </Layout>
  );
};

export default Contact;
