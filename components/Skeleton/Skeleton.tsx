import React from "react";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import Head from "next/head";

interface Props {
  children: React.ReactNode;
  searchResults: string[];
  title: string;
  metaDescription?: string;
  metaTitle?: string;
  metaShareDescription?: string;
  metaImageURL?: string;
}

export default function Skeleton({
  children,
  searchResults,
  title,
  metaDescription,
  metaTitle,
  metaShareDescription,
  metaImageURL,
}: Props) {
  return (
    <div suppressHydrationWarning>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaShareDescription} />
        <meta property="og:image" content={metaImageURL} />
      </Head>

      {/* Navigation */}
      <Navigation autoComplete={searchResults} />
      {children}
      <Footer />
    </div>
  );
}
