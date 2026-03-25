import type { GetServerSideProps } from "next";

/** Legacy alias: `/Career` → `/carrer` */
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/carrer",
      permanent: false,
    },
  };
};

export default function CareerUpperRedirect() {
  return null;
}
