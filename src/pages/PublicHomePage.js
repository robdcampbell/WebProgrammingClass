import React from "react";
import Footer from "../components/Footer";
import PublicHomeContent from "../components/PublicHomeContent";
import Nav from "../components/Nav";

const PublicHomePage = () => {
  return (
    <main>
      <Nav />
      <PublicHomeContent />
      <Footer />
    </main>
  );
};

export default PublicHomePage;
