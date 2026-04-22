import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Layout from "@/components/layout/Layout";
import TeamDetailsArea from "@/components/container/team/TeamDetailsArea";
import ContactClientTwo from "@/components/container/contact/ContactClientTwo";
import {
  teamMembers,
  getTeamMemberBySlug,
  TeamMember,
} from "@/data/teamMembers";

interface TeamDetailsPageProps {
  member: TeamMember;
}

const TeamDetailsPage = ({ member }: TeamDetailsPageProps) => {
  return (
    <Layout
      meta={`${member.name} - SSA Chartered Accountants`}
      header={false}
      sidebar={true}
      footer={true}
      bodyClass={1}
    >
      <TeamDetailsArea member={member} />
      <ContactClientTwo />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = teamMembers.map((member) => ({
    params: { slug: member.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const member = getTeamMemberBySlug(slug);

  if (!member) {
    return { notFound: true };
  }

  return {
    props: { member },
  };
};

export default TeamDetailsPage;
