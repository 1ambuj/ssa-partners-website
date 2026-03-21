import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import {
  getSubserviceBySlugs,
  getAllSubservicePaths,
} from "@/data/servicesData";

interface SubserviceDetailPageProps {
  serviceSlug: string;
  serviceTitle: string;
  subservice: {
    slug: string;
    title: string;
    summary: string;
    items: string[];
  };
}

const SubserviceDetailPage = ({
  serviceSlug,
  serviceTitle,
  subservice,
}: SubserviceDetailPageProps) => {
  return (
    <Layout
      meta={`${subservice.title} - ${serviceTitle} | SS Partners`}
      header={false}
      sidebar={true}
      footer={true}
      bodyClass={1}
    >
      <div className="subservice-detail-page">
        <div className="subservice-detail-banner bg-sky pd-top-80 pd-bottom-60">
          <div className="container">
            <nav className="breadcrumb-nav mb-3">
              <Link href="/service">Services</Link>
              <span className="sep">/</span>
              <Link href={`/services/${serviceSlug}`}>{serviceTitle}</Link>
              <span className="sep">/</span>
              <span>{subservice.title}</span>
            </nav>
            <h1 className="subservice-detail-title">{subservice.title}</h1>
            <p className="subservice-detail-summary">{subservice.summary}</p>
          </div>
        </div>

        <div className="subservice-detail-content bg-light pd-top-80 pd-bottom-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="subservice-detail-card">
                  <h3>What We Offer</h3>
                  <ul className="subservice-items">
                    {subservice.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <Link
                    href={`/services/${serviceSlug}`}
                    className="btn btn-base border-radius mt-4"
                  >
                    ← Back to {serviceTitle}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllSubservicePaths().map(({ serviceSlug, subSlug }) => ({
    params: { serviceSlug, subSlug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const serviceSlug = params?.serviceSlug as string;
  const subSlug = params?.subSlug as string;
  const result = getSubserviceBySlugs(serviceSlug, subSlug);

  if (!result) return { notFound: true };

  return {
    props: {
      serviceSlug,
      serviceTitle: result.service.title,
      subservice: result.subservice,
    },
  };
};

export default SubserviceDetailPage;
