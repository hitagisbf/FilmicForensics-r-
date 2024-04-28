import "react-responsive-carousel/lib/styles/carousel.min.css";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import './Standardcarousel.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import Ratings from "./Ratings";

const StandardCarousel = () => {
  const [movieList, setMovieList] = useState([]);
  const Trending = () => {
    fetch(
      "https://api.themoviedb.org/3/trending/all/day?api_key=d98b6a4a470bc2415959e8cfff5c445e"
    )
      .then((res) => res.json())
      .then((json) => setMovieList(json.results));
  };

  useEffect(() => {
    Trending();
  }, []);

  return (
    <Carousel
      autoPlay="true"
      interval="3000"
      width="100%"
      margin="100px"
      infiniteLoop="true"
    >
      {movieList.map((item) => (
      <Link to={`/movie/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
            alt={`${item.original_title ? item.original_title : item.name}`}
          />
          <div class="movie-info">
            <p class="movie-title">
              {`${item.original_title ? item.original_title : item.name}`}
            </p>
            <p class="movie-desc">{`${item.overview}`}</p>

            <Ratings val={`${item.vote_average}`}> </Ratings>

            <div class="movie-action">
              <span class="movie-play">
                <a href="./.">
                  <FontAwesomeIcon icon={faPlayCircle} /> Play Trailer
                </a>
              </span>
              <span class="movie-reviews">
                <a href="./.">
                  <FontAwesomeIcon icon={faCircleInfo} /> Reviews
                </a>
              </span>
            </div>
          </div>
        </div>
      </Link>
      ))}
    </Carousel>
  );
}

export default StandardCarousel;
