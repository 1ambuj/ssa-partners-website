import React from "react";
import { useRouter } from "next/router";
import Login from "@/components/auth/Login";
import Layout from "@/components/layout/Layout";

type LoginRole = "admin" | "partner" | "client";

const validRoles: LoginRole[] = ["admin", "partner", "client"];

const LoginPage: React.FC = () => {
  const router = useRouter();
  const roleParam = router.query.role as string;
  const role: LoginRole = validRoles.includes(roleParam as LoginRole) ? (roleParam as LoginRole) : "admin";

  return (
    <Layout
      meta="Login - SSA Chartered Accountants"
      header={true}
      sidebar={false}
      footer={false}
      bodyClass={true}
    >
      <Login initialRole={role} />
    </Layout>
  );
};

export default LoginPage;
