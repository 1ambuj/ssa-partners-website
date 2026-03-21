import React, { Suspense, useEffect } from "react";
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// font awesome free
import "@fortawesome/fontawesome-free/css/all.min.css";

import "@/styles/style.scss";
// import '@/styles/style-black.scss'
import "@/styles/responsive.scss";
import type { AppProps } from "next/app";

import AOS from "aos";
import "aos/dist/aos.css";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Suspense>
      <Component {...pageProps} />
    </Suspense>
  );
}
