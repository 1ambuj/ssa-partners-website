import React from "react";
import Layout from "@/components/layout/Layout";
import { siteConfig } from "@/data/siteConfig";
import HeroSSA from "@/components/container/home/HeroSSA";
import BannerVideo from "@/components/container/home/BannerVideo";
import Tax from "@/components/container/home/Tax";
import ServiceArea from "@/components/container/service/ServiceArea";
import AboutUsOne from "@/components/container/home/AboutUsOne";
import Marqueue from "@/components/container/home/Marqueue";
import Strategy from "@/components/container/home/Strategy";
import Case from "@/components/container/home/Case";
import Team from "@/components/container/home/Team";
import Testimonial from "@/components/container/home/Testimonial";
import Blog from "@/components/container/home/Blog";
import ContactClientThree from "@/components/container/contact/ContactClientThree";

const Home = () => {
  return (
    <Layout
      meta={`${siteConfig.shortName} - Chartered Accountants | Tax Advisory & Audit`}
      header={true}
      sidebar={true}
      footer={true}
      bodyClass={true}
    >
      <HeroSSA />
      <BannerVideo />
      <ServiceArea />
      <Tax />
      <AboutUsOne />
      <Marqueue />
      <Strategy />
      <Case />
      <Team />
      <Testimonial />
      <Blog />
      <ContactClientThree />
    </Layout>
  );
};

export default Home;
