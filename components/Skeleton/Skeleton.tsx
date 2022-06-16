import React from "react";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";

interface Props {
  children: React.ReactNode;
}

export default function Skeleton({ children }: Props) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
}
