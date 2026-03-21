import React from "react";
import Layout from "@/components/layout/Layout";
import ServiceBanner from "@/components/container/service/ServiceBanner";
import ServiceArea from "@/components/container/service/ServiceArea";
import ProcessTwo from "@/components/container/service/Process";
import IndustriesServed from "@/components/container/service/IndustriesServed";

const Service = () => {
  return (
    <Layout
      meta="SSA - Chartered Accountants"
      header={false}
      sidebar={true}
      footer={true}
      bodyClass={true}
    >
      <ServiceBanner />
      <ServiceArea />
      <ProcessTwo />
      <IndustriesServed />
      {/* <ContactClient />
      <ContactInstagram /> */}
    </Layout>
  );
};

export default Service;
