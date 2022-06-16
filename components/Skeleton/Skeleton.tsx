import React from "react";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";

interface Props {
  children: React.ReactNode;
  searchProps: string[];
}

export default function Skeleton({ children, searchProps }: Props) {
  return (
    <>
      <Navigation autoComplete={searchProps} />
      {children}
      <Footer />
    </>
  );
}
