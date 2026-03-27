import React from "react";
import Layout from "@/components/layout/Layout";
import AboutBanner from "@/components/container/about/AboutBanner";
import AboutBannerVideo from "@/components/container/about/AboutBannerVideo";
import AboutIntro from "@/components/container/about/AboutIntro";
import AboutTax from "@/components/container/about/AboutTax";
import AboutTab from "@/components/container/about/AboutTab";
import AboutTeam from "@/components/container/about/AboutTeam";
import AboutCta from "@/components/container/about/AboutCta";
import AboutCustomer from "@/components/container/about/AboutCustomer";

const about = () => {
  return (
    <Layout
      meta="SSA - Chartered Accountants"
      header={false}
      sidebar={true}
      footer={true}
      bodyClass={true}
    >
      <AboutBanner />
      <AboutBannerVideo />
      <AboutIntro />
      <AboutTax />
     
      <AboutTab />
      <AboutTeam />
      <AboutCta />
      <AboutCustomer />
      {/* <ContactClient />
      <ContactInstagram /> */}
    </Layout>
  );
};

export default about;
