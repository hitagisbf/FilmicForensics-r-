import "react-responsive-carousel/lib/styles/carousel.min.css";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import Ratings from "./Ratings";
import Trailerlink from "./Trailerlink";

function StandardCarousel() {
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
    <Carousel autoPlay="true" interval="2500" width="100%" infiniteLoop="true">
      {movieList.map((item) => (
        //<Link
        //  to={`/movie/${item.id}`}
        // style={{ textDecoration: "none", color: "inherit" }}
        //>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w300/${item.backdrop_path}`}
            alt={`${item.original_title ? item.original_title : item.name}`}
          />

          <div class="movie-info">
            <p class="movie-title">
              {`${item.original_title ? item.original_title : item.name}`}
              <span>
                {" "}
                {`${yearOnly(item.release_date ? item.release_date : item.first_air_date)}`}{" "}
              </span>
            </p>
            <p class="movie-desc">{`${item.overview}`}</p>

            <Ratings val={`${item.vote_average}`}> </Ratings>

            <div class="movie-action">
              <span class="movie-play">
                <Trailerlink
                  mediaId={`${item.id}`}
                  mediaType={`${item.media_type}`}
                />
              </span>
              <span class="movie-reviews">
                <a href="./.">
                  <FontAwesomeIcon icon={faCircleInfo} /> Reviews
                </a>
              </span>
            </div>
          </div>
        </div>
        // </Link>
      ))}
    </Carousel>
  );
}
function yearOnly(aDate) {
  return aDate.split("-")[0];
}

async function returnTrailerYoutubeVideoLink(movieId) {
  var json = await fetchJSON(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=d98b6a4a470bc2415959e8cfff5c445e&language=en-US`
  );
  console.log(json?.results[0]?.key);
  let youtubeKey = "29zQBzteAh0";
  return `https://www.youtube.com/watch?v=${youtubeKey}`;
}

function fetchJSON(url) {
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => {
      console.log(error);
    });
}

export default StandardCarousel;
