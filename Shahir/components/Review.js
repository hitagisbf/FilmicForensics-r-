import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieReviews from '../brit/MovieReviews';


const DetailedMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=d98b6a4a470bc2415959e8cfff5c445e`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error('Error fetching movie:', error);
      }
    };

    fetchMovie();
  }, [id]);

  useEffect(() => {
    const fetchShow = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=d98b6a4a470bc2415959e8cfff5c445e`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error('Error fetching movie:', error);
      }
    };

    fetchShow();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p style={{color: 'white'}}>{movie.overview}</p>
      {/* Add review form here */}
      <MovieReviews/>
    </div>
  );
};

export default DetailedMovie;
