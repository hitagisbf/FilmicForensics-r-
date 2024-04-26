import React from "react";
import "./Home.css";
import "./MovieReviews.css";
import Footer from "../components/Footer";
import MovieReviews from "./MovieReviews";
import Header from "../components/Header";
import StandardCarousel from "../components/StandardCarousel";

function Tvshows() {
  return (
    <body className="app">
      <Header tasteProfileOn="true" />
      <div> TV Shows</div>;
      <Footer />
    </body>
  );
}

export default Tvshows;
