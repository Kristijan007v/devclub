import React from "react";
import { getAllPostsWithSlug, getPosts } from "../../lib/backend/api";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";

interface Props {
  children: React.ReactNode;
  searchResults: string[];
}

export default function Skeleton({ children, searchResults }: Props) {
  return (
    <>
      <Navigation autoComplete={searchResults} />
      {children}
      <Footer />
    </>
  );
}
