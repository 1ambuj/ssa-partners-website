import React from "react";
import Layout from "@/components/layout/Layout";
import ContactBanner from "@/components/container/contact/ContactBanner";
import ContactForm from "@/components/container/contact/ContactForm";
import ContactClient from "@/components/container/contact/ContactClient";

const Contact = () => {
  return (
    <Layout
      meta="SSA - Chartered Accountants"
      header={false}
      sidebar={true}
      footer={true}
      bodyClass={true}
    >
      <ContactBanner />
      <ContactForm />
      <ContactClient />
    </Layout>
  );
};

export default Contact;
