import React from "react";
import Layout from "@/components/layout/Layout";
import CareersPageContent from "@/components/container/careers/CareersPageContent";

import CareerBanner from "@/components/container/careers/CareerBanner";

/** Canonical careers route (intentional spelling): `/carrer` */
const CarrerPage = () => {
  return (
    <Layout
      meta="Careers - Join Our Team | SSA Chartered Accountants"
      header={true}
      sidebar={true}
      footer={true}
      bodyClass={true}
    >
      <CareerBanner />
      <CareersPageContent />
    </Layout>
  );
};

export default CarrerPage;

