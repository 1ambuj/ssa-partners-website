import React from "react";
import Layout from "@/components/layout/Layout";
import AboutTopStrip from "@/components/container/about/AboutTopStrip";
import AboutBanner from "@/components/container/about/AboutBanner";
import AboutBannerVideo from "@/components/container/about/AboutBannerVideo";
import AboutIntro from "@/components/container/about/AboutIntro";
import AboutTax from "@/components/container/about/AboutTax";
import AboutTab from "@/components/container/about/AboutTab";
import AboutValues from "@/components/container/about/AboutValues";
import AboutValuesAlt from "@/components/container/about/AboutValuesAlt";
import AboutTeam from "@/components/container/about/AboutTeam";
import AboutCta from "@/components/container/about/AboutCta";

const about = () => {
  return (
    <Layout
      meta="SSA - Chartered Accountants"
      header={false}
      sidebar={true}
      footer={true}
      bodyClass={true}
    >
      <div className="about-page-polish">
        {/* <AboutTopStrip /> */}
        <AboutBanner />
        <AboutBannerVideo />
        <AboutIntro />
        <AboutTax />
        <AboutTab />
        <AboutValues />
        <AboutValuesAlt />
        <AboutTeam />
        {/* <AboutCta /> */}
        {/* <ContactClient />
        <ContactInstagram /> */}
      </div>
    </Layout>
  );
};

export default about;
