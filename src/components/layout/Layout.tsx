import React, { useState, Fragment } from "react";
import Head from "next/head";
import Header from "./header/Header";
import HeaderTwo from "./header/HeaderTwo";
import HeaderSSA from "./header/HeaderSSA";
import Sidebar from "./sidebar/Sidebar";
import Footer from "./footer/Footer";
import Search from "./search/Search";
import { siteConfig } from "@/data/siteConfig";

type layoutProps = {
  children: React.ReactNode;
  meta?: string | { title?: string; keywords?: string; description?: string };
  header: React.ReactNode;
  footer: React.ReactNode;
  sidebar: React.ReactNode;
  bodyClass: any;
};

const Layout = ({
  children,
  meta,
  header,
  sidebar,
  footer,
  bodyClass,
}: layoutProps) => {
  const metaObj = typeof meta === "string" ? { title: meta } : meta || {};
  const Meta = {
    title: `${siteConfig.shortName} - ${siteConfig.tagline}`,
    keywords: siteConfig.keywords,
    description: siteConfig.description,
    ...metaObj,
  };

  const [searchToggle, setSearchToggle] = useState(false);

  const handleSearch = () => {
    setSearchToggle(!searchToggle);
  };

  const closeSearch = () => {
    setSearchToggle(false);
  };

  const [sidebarToggle, setSidebarToggle] = useState(false);

  const handleSidebar = () => {
    setSidebarToggle(!sidebarToggle);
  };

  const closeSidebar = () => {
    setSidebarToggle(false);
  };

  return (
    <Fragment>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="shortcut icon"
          href={siteConfig.favicon}
          type="image/png"
          sizes="32x32"
        />
        <link
          rel="icon"
          href={siteConfig.favicon}
          type="image/png"
          sizes="32x32"
        />
        <title>{Meta.title}</title>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Syne:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="keywords" content={Meta.keywords || siteConfig.keywords} />
        <meta name="description" content={Meta.description || siteConfig.description} />
      </Head>

      <div
        className={
          (bodyClass === 0
            ? "bg-light2"
            : bodyClass === 1
            ? "bg-light"
            : "") + " app"
        }
      >
        <Search
          handleSearch={handleSearch}
          closeSearch={closeSearch}
          searchToggle={searchToggle}
        />
        <HeaderSSA />
        {sidebar ? (
          <Sidebar sidebarToggle={sidebarToggle} closeSidebar={closeSidebar} />
        ) : null}
        <main>{children}</main>
        {footer ? <Footer /> : null}
      </div>
    </Fragment>
  );
};

export default Layout;
