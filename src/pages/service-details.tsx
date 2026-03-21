import React from "react";
import Layout from "@/components/layout/Layout";
import ServiceDetailsBanner from "@/components/container/service-details/ServiceDetailsBanner";
import ServiceDetailsArea from "@/components/container/service-details/ServiceDetailsArea";
import { getServiceBySlug } from "@/data/servicesData";

/**
 * /service-details - shows Audit service (legacy route).
 * For other services use /services/[slug] e.g. /services/taxation
 */
const ServiceDetails = () => {
  const service = getServiceBySlug("audit");
  if (!service) return null;

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

export default ServiceDetails;
