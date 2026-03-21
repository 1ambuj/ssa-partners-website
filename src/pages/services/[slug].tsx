/**
 * Dynamic service pages: /services/audit, /services/advisory, etc.
 * Edit this file to add/remove components on these pages.
 */
import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Layout from "@/components/layout/Layout";
import ServiceDetailsBanner from "@/components/container/service-details/ServiceDetailsBanner";
import ServiceDetailsArea from "@/components/container/service-details/ServiceDetailsArea";
import { servicesList, getServiceBySlug } from "@/data/servicesData";

interface ServiceDetailsPageProps {
  service: NonNullable<ReturnType<typeof getServiceBySlug>>;
}

const ServiceDetailsPage = ({ service }: ServiceDetailsPageProps) => {
  return (
    <Layout
      meta={`${service.title} - SS Partners Chartered Accountants`}
      header={false}
      sidebar={true}
      footer={true}
      bodyClass={1}
    >
      <ServiceDetailsBanner service={service} />
      <ServiceDetailsArea service={service} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = servicesList.map((s) => ({
    params: { slug: s.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { notFound: true };
  }

  return {
    props: { service },
  };
};

export default ServiceDetailsPage;
