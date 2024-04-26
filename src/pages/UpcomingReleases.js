import React from "react";
import "./Home.css";
import "./MovieReviews.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

function UpcomingReleases() {
  return (
    <body className="app">
      <Header tasteProfileOn="true" />
      <div> UpcomingReleases</div>;
      <Footer />
    </body>
  );
}

export default UpcomingReleases;
