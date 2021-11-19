import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import Header from "components/Header";
import SiteInfo from "components/Siteinfo";
import Footer from "components/Footer";

export default function Layout(props) {
  const router = useRouter();

  if (props.isAuth) {
    return (
      <Head>
        <title>WalletKU | {props.pageTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:type" content={props.metaType} />
        <meta name="description" content={props.metaDescription} />
        <meta property="og:title" content={props.metaTitle} />
        <meta name="keywords" content={props.metaKeyword} />
        <meta property="og:url" content={props.metaOgUrl} />
        <meta property="og:description" content={props.metaOgDescription} />
        <meta property="og:image" content={props.metaOgImage} />

        {props.children}
      </Head>
    );
  }

  return (
    <Head>
      <title>WalletKU | {props.pageTitle}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:type" content={props.metaType} />
      <meta name="description" content={props.metaDescription} />
      <meta property="og:title" content={props.metaTitle} />
      <meta name="keywords" content={props.metaKeyword} />
      <meta property="og:url" content={props.metaOgUrl} />
      <meta property="og:description" content={props.metaOgDescription} />
      <meta property="og:image" content={props.metaOgImage} />
      {router.pathname !== "/" ? (
        <Header className="header__home" />
      ) : (
        <Header />
      )}
      {props.children}
      {router.pathname !== "/" ? (
        <Footer className="footer__home" />
      ) : (
        <SiteInfo />
      )}
    </Head>
  );
}
