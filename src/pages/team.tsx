import React from "react";
import ContactClient from "@/components/container/contact/ContactClient";
import Layout from "@/components/layout/Layout";
import TeamArea from "@/components/container/team/TeamArea";

const TeamPage = () => {
  return (
    <Layout
      meta="SSA - Chartered Accountants"
      header={false}
      sidebar={true}
      footer={true}
      bodyClass={true}
    >
      <TeamArea />
      <ContactClient />
    </Layout>
  );
};

export default TeamPage;
