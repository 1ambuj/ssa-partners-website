import React from "react";
import Layout from "@/components/layout/Layout";
import ServiceBanner from "@/components/container/service/ServiceBanner";
import ServiceArea from "@/components/container/service/ServiceArea";
import ProcessTwo from "@/components/container/service/Process";
import IndustriesShowcase from "@/components/container/home-two/IndustriesShowcase";

const Service = () => {
  return (
    <Layout
      meta="SSA - Chartered Accountants"
      header={false}
      sidebar={true}
      footer={true}
      bodyClass={true}
    >
      <div className="ssa-services-page">
        <ServiceBanner />
        <ServiceArea />
        <ProcessTwo />
        <IndustriesShowcase />
      </div>
      {/* <ContactClient />
      <ContactInstagram /> */}
    </Layout>
  );
};

export default Service;
