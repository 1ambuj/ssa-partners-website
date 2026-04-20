import React from "react";
import AdminDashboard from "@/components/admin/AdminDashboard";
import Layout from "@/components/layout/Layout";

const AdminDashboardPage: React.FC = () => {
  return (
    <Layout
      meta="Admin Dashboard - SSA"
      header={true}
      sidebar={true}
      footer={true}
      bodyClass={true}
    >
      <div className="container ">
        <AdminDashboard />
      </div>
    </Layout>
  );
};

export default AdminDashboardPage;
