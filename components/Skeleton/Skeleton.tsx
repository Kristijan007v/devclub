import React from "react";
import { getAllPostsWithSlug, getPosts } from "../../lib/backend/api";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";

interface Props {
  children: React.ReactNode;
}

export default function Skeleton({ children }: Props) {
  return (
    <>
      <Navigation autoComplete={["test"]} />
      {children}
      <Footer />
    </>
  );
}
