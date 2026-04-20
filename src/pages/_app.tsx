import React, { Suspense, useEffect } from "react";
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// font awesome free
import "@fortawesome/fontawesome-free/css/all.min.css";

import "@/styles/style.scss";
// import '@/styles/style-black.scss'
import "@/styles/responsive.scss";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import AOS from "aos";
import "aos/dist/aos.css";
import { AuthProvider } from "@/lib/AuthContext";
import RouteProgress from "@/components/layout/RouteProgress";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-out-cubic",
    });

    const handleRouteDone = () => {
      // Ensure newly rendered page sections get registered for animations.
      AOS.refreshHard();
    };

    router.events.on("routeChangeComplete", handleRouteDone);
    return () => {
      router.events.off("routeChangeComplete", handleRouteDone);
    };
  }, [router.events]);

  useEffect(() => {
    const onUnhandledRejection = (event: PromiseRejectionEvent) => {
      const reason = event.reason as { message?: string; code?: string } | undefined;
      const msg = String(reason?.message || "");
      const code = String(reason?.code || "");
      const isFirestorePermissionError =
        msg.includes("Missing or insufficient permissions") || code.includes("permission-denied");
      if (isFirestorePermissionError) {
        event.preventDefault();
        console.warn("Suppressed Firestore permission error at runtime.");
      }
    };

    window.addEventListener("unhandledrejection", onUnhandledRejection);
    return () => {
      window.removeEventListener("unhandledrejection", onUnhandledRejection);
    };
  }, []);

  return (
    <AuthProvider>
      <RouteProgress />
      <Suspense>
        <Component {...pageProps} />
      </Suspense>
    </AuthProvider>
  );
}
