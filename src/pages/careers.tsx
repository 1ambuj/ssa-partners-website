import type { GetServerSideProps } from "next";

/**
 * Legacy URL: careers now lives on `/pricing` (same UI as the former pricing page).
 */
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/carrer",
      permanent: false,
    },
  };
};

export default function CareersRedirect() {
  return null;
}
