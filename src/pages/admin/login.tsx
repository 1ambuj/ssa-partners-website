import React, { useEffect } from "react";
import { useRouter } from "next/router";

const AdminLoginRedirect: React.FC = () => {
  const router = useRouter();
  useEffect(() => {
    router.replace("/login?role=admin");
  }, [router]);
  return null;
};

export default AdminLoginRedirect;
