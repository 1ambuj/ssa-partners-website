import React from "react";
import { GetServerSideProps } from "next";
import { teamMembers } from "@/data/teamMembers";

const TeamDetailsIndex = () => null;

export const getServerSideProps: GetServerSideProps = async () => {
  const firstMember = teamMembers[0];
  return {
    redirect: {
      destination: firstMember ? `/team-details/${firstMember.slug}` : "/team",
      permanent: false,
    },
  };
};

export default TeamDetailsIndex;
