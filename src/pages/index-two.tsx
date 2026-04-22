import React from "react";
import Layout from "@/components/layout/Layout";
import { siteConfig } from "@/data/siteConfig";
import HeroSSA from "@/components/container/home/HeroSSA";
import BannerTwo from "@/components/container/home-two/BannerTwo";
import BannerVideoTwo from "@/components/container/home-two/BannerVideoTwo";
import Intro from "@/components/container/home-two/Intro";
import AboutTwo from "@/components/container/home-two/AboutTwo";
import ServiceTwo from "@/components/container/home-two/ServiceTwo";
import AboutThree from "@/components/container/home-two/AboutThree";
import TeamTwo from "../components/container/home-two/TeamTwo";
import Cta from "@/components/container/home-two/Cta";
import CaseStudyTwo from "@/components/container/home-two/CaseStudyTwo";
import CallBack from "@/components/container/home-two/CallBack";
import LatestArticle from "@/components/container/home-two/LatestArticle";
import AboutCustomerThree from "@/components/container/about/AboutCustomerThree";
import ContactClientThree from "@/components/container/contact/ContactClientThree";
import HomeFaq from "@/components/container/home-two/HomeFaq";

const HomeTwo = () => {
  return (
    <Layout
      meta={`${siteConfig.shortName} - Chartered Accountants | Tax Advisory & Audit`}
      header={false}
      sidebar={true}
      footer={true}
      bodyClass={true}
    >
      <HeroSSA />
      {/* <BannerVideoTwo /> */}
      {/* <Intro /> */}
      <AboutTwo />
      <ServiceTwo />
      <AboutThree />
      <TeamTwo />
      {/* <Cta /> */}
      <AboutCustomerThree />
      <CaseStudyTwo />
      <HomeFaq />
      <CallBack />
      <LatestArticle />
      {/* <ContactClientThree />
      <ContactInstagramTwo /> */}
    </Layout>
  );
};

export default HomeTwo;
