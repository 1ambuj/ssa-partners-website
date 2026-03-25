"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/lib/AuthContext";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

const PartnerDashboard: React.FC = () => {
  const { isPartner, userData, loading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isPartner) {
      router.replace("/login?role=partner");
    }
  }, [loading, isPartner, router]);

  const handleLogout = async () => {
    await logout();
    router.replace("/login?role=partner");
  };

  if (loading) {
    return (
      <Layout header={true} sidebar={false} footer={false} bodyClass={true}>
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

  if (!isPartner) return null;

  return (
    <Layout
      meta="Partner Dashboard - SSA"
      header={true}
      sidebar={true}
      footer={true}
      bodyClass={true}
    >
      <div className="banner-area pd-bottom-80 banner-small-inner bg-light bg-relative bg-cover">
        <div className="container">
          <h4>Partner Portal</h4>
          <h3>Welcome, {userData?.name || userData?.email?.split("@")[0] || "Partner"}</h3>
          <p>Access your resources and tools.</p>
        </div>
      </div>

      <div className="container pd-bottom-80">
        <div className="row g-4">
          <div className="col-md-6 col-lg-4">
            <Link href="/blog" className="text-decoration-none">
              <div className="card h-100 shadow-sm border-0 hover-lift">
                <div className="card-body text-center p-4">
                  <i className="fas fa-blog fa-2x mb-3" style={{ color: "var(--main-color)" }} />
                  <h5 className="card-title">Blog & Resources</h5>
                  <p className="card-text text-muted small">Read insights and updates</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-6 col-lg-4">
            <Link href="/contact" className="text-decoration-none">
              <div className="card h-100 shadow-sm border-0 hover-lift">
                <div className="card-body text-center p-4">
                  <i className="fas fa-envelope fa-2x mb-3" style={{ color: "var(--main-color)" }} />
                  <h5 className="card-title">Contact</h5>
                  <p className="card-text text-muted small">Get in touch with the team</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-6 col-lg-4">
            <button
              className="card h-100 w-100 border-0 shadow-sm bg-light text-start"
              onClick={handleLogout}
              style={{ cursor: "pointer" }}
            >
              <div className="card-body text-center p-4">
                <i className="fas fa-sign-out-alt fa-2x text-secondary mb-3" />
                <h5 className="card-title">Logout</h5>
                <p className="card-text text-muted small">Sign out of your account</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PartnerDashboard;
