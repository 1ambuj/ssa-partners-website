"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/router";
import FeedbackForm from "@/components/feedback/FeedbackForm";
import Layout from "@/components/layout/Layout";
import { useAuth } from "@/lib/AuthContext";

const FeedbackPage: React.FC = () => {
  const { isClient, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isClient) {
      router.replace("/login?role=client");
    }
  }, [loading, isClient, router]);

  if (loading) {
    return (
      <Layout meta="Client Feedback - SSA" header={true} sidebar={true} footer={true} bodyClass={true}>
        <div className="container py-5">
          <div className="d-flex justify-content-center">
            <div className="spinner-border" style={{ color: "var(--main-color)" }} role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!isClient) {
    return null;
  }

  return (
    <Layout
      meta="Client Feedback - SSA"
      header={true}
      sidebar={true}
      footer={true}
      bodyClass={true}
    >
      <FeedbackForm />
    </Layout>
  );
};

export default FeedbackPage;
