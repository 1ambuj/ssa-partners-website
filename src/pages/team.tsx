import React from "react";
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
    </Layout>
  );
};

export default TeamPage;
