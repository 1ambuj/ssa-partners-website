import React from "react";
import type { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import {
  industriesList,
  getIndustryBySlug,
  type IndustryItem,
} from "@/data/industriesData";

type IndustryPageData = Omit<IndustryItem, "icon">;

type Props = {
  industry: IndustryPageData;
};

const IndustryDetailPage = ({ industry }: Props) => {
  const Icon = getIndustryBySlug(industry.slug)?.icon;

  return (
    <Layout
      meta={`${industry.title} | Industries We Serve`}
      header={false}
      sidebar={true}
      footer={true}
      bodyClass={true}
    >
      <section className="banner-area banner-small-inner bg-light bg-relative bg-cover pd-bottom-60">
        <div className="container">
          <div className="section-title text-center">
            <h6 className="sub-title">// INDUSTRIES WE SERVE</h6>
            <h2 className="title">{industry.title}</h2>
            <p className="content mx-auto" style={{ maxWidth: 760 }}>
              {industry.description}
            </p>
          </div>
        </div>
      </section>

      <section className="pd-top-80 pd-bottom-110 bg-light">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <div className="industry-detail-image-wrap">
                <img src={industry.image} alt={industry.title} loading="lazy" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="industry-detail-content">
                <div className="industry-showcase-icon mb-3">
                  {Icon ? <Icon /> : null}
                </div>
                <h3 className="mb-3">How we support this sector</h3>
                <ul className="industry-detail-list">
                  {industry.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="mt-4 d-flex gap-3 flex-wrap">
                  <Link href="/contact" className="btn btn-base border-radius">
                    Discuss Requirements
                  </Link>
                  <Link href="/#industries-showcase" className="btn btn-black border-radius">
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = industriesList.map((industry) => ({
    params: { slug: industry.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug as string;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return { notFound: true };
  }

  const { icon: _icon, ...safeIndustry } = industry;

  return {
    props: { industry: safeIndustry },
  };
};

export default IndustryDetailPage;
