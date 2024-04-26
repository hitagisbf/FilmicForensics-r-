import React from "react";
import "./Home.css";
import Footer from "../components/Footer";
//import MovieReviews from "./MovieReviews";  <MovieReviews />
import Header from "../components/Header";
import StandardCarousel from "../components/StandardCarousel";

function Home() {
  return (
    <body className="app">
      <Header tasteProfileOn="true" />
      <StandardCarousel />

      <section>
        <h1>Trending Now</h1>
        <ul className="trend-now-list">
          <div className="card">
            <p>Image Here</p>
            <p>Enlarges When Hovering</p>
            <p className="title">Title (Release Year)</p>
          </div>
          <div className="card">
            <p>Image Here</p>
            <p>Enlarges When Hovering</p>
            <p className="title">Title (Release Year)</p>
          </div>
          <div className="card">
            <p>Image Here</p>
            <p>Enlarges When Hovering</p>
            <p className="title">Title (Release Year)</p>
          </div>
          <div className="card">
            <p>Image Here</p>
            <p>Enlarges When Hovering</p>
            <p className="title">Title (Release Year)</p>
          </div>
          <div className="card">
            <p>Image Here</p>
            <p>Enlarges When Hovering</p>
            <p className="title">Title (Release Year)</p>
          </div>
        </ul>
      </section>

      <section>
        <h1>Trending Reviews</h1>
        <ul className="review-list">
          <div className="review-card">
            <div className="review-star"></div>
            <div className="heart"></div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="review-card">
            <div className="review-star"></div>
            <div className="heart"></div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="review-card">
            <div className="review-star"></div>
            <div className="heart"></div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </ul>
        <ul className="review-list">
          <div className="review-card">
            <div className="review-star"></div>
            <div className="heart"></div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="review-card">
            <div className="review-star"></div>
            <div className="heart"></div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="review-card">
            <div className="review-star"></div>
            <div className="heart"></div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </ul>
      </section>

      <section>
        <h1>Oscars Awarded</h1>
        <ul className="oscar-list">
          <div className="card">
            <p>Image Here</p>
            <p>Enlarges When Hovering</p>
            <p className="title">Title (Release Year)</p>
          </div>
          <div className="card">
            <p>Image Here</p>
            <p>Enlarges When Hovering</p>
            <p className="title">Title (Release Year)</p>
          </div>
          <div className="card">
            <p>Image Here</p>
            <p>Enlarges When Hovering</p>
            <p className="title">Title (Release Year)</p>
          </div>
          <div className="card">
            <p>Image Here</p>
            <p>Enlarges When Hovering</p>
            <p className="title">Title (Release Year)</p>
          </div>
          <div className="card">
            <p>Image Here</p>
            <p>Enlarges When Hovering</p>
            <p className="title">Title (Release Year)</p>
          </div>
        </ul>
      </section>

      <section>
        <h1>Coming Soon</h1>
        <ul className="upcoming-release-list">
          <div className="card">
            <p>Image Here</p>
            <p>Enlarges When Hovering</p>
            <p className="title">Title (Release Year)</p>
          </div>
          <div className="card">
            <p>Image Here</p>
            <p>Enlarges When Hovering</p>
            <p className="title">Title (Release Year)</p>
          </div>
          <div className="card">
            <p>Image Here</p>
            <p>Enlarges When Hovering</p>
            <p className="title">Title (Release Year)</p>
          </div>
          <div className="card">
            <p>Image Here</p>
            <p>Enlarges When Hovering</p>
            <p className="title">Title (Release Year)</p>
          </div>
          <div className="card">
            <p>Image Here</p>
            <p>Enlarges When Hovering</p>
            <p className="title">Title (Release Year)</p>
          </div>
        </ul>
      </section>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </body>
  );
}
export default Home;
