import React, { useEffect } from "react";
import { useRouter } from "next/router";

/**
 * Shows a thin progress bar at the top during route changes.
 * Gives instant visual feedback when clicking nav links.
 */
export default function RouteProgress() {
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
      const bar = document.getElementById("route-progress-bar");
      if (bar) {
        bar.classList.add("active");
      }
    };

    const handleComplete = () => {
      const bar = document.getElementById("route-progress-bar");
      if (bar) {
        bar.classList.add("complete");
        const t = setTimeout(() => {
          bar.classList.remove("active", "complete");
          clearTimeout(t);
        }, 300);
      }
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router.events]);

  return (
    <div
      id="route-progress-bar"
      className="route-progress-bar"
      aria-hidden="true"
    />
  );
}
