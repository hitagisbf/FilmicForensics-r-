import React, { useEffect, useState } from 'react';
import './MovieReviews.css'; // Import the CSS file for styles
import ReviewForm from './ReviewForm'; // Import the ReviewForm component
import { useParams } from 'react-router-dom';

// review box
const UserReview = ({ review }) => {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };
  return (
    <div className="user-review">
      <div className="star-rating">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < review.rating ? "star" : "star-empty"}>&#9733;</span>
        ))}
      </div>
      <h3 style={{ color: 'white' }}>{review.author}</h3>
      <p style={{ color: 'white' }}>
        {showFullContent ? review.content : `${review.content.slice(0, 500)}...`}
        {review.content.length > 500 && (
          <span style={{fontWeight: 'bold', cursor: 'pointer'}} onClick={toggleContent}>
            {showFullContent ? " See less" : " See more"}
          </span>
        )}
      </p>
    </div>
  );
};

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [showReviewForm, setShowReviewForm] = useState(false); // State to toggle review form display
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 5; // Number of reviews to display per page
  const API_KEY = '1544ad476fda7fac67106a42cd220a58';
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Fetch movie details from API
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        // Set the retrieved movie details to the state
        setMovie(data);
      })
      .catch(error => {
        console.error('Error fetching movie details:', error);
      });

    // Fetch movie reviews from API
    fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        // Set the retrieved reviews to the state
        setReviews(data.results);
      })
      .catch(error => {
        console.error('Error fetching reviews:', error);
      });
  }, [API_KEY, id]); // Empty dependency array ensures the effect runs only once, similar to componentDidMount

  // Function to open the review form popup
  const openReviewForm = () => {
    setShowReviewForm(true);
  };

  // Function to close the review form popup
  const closeReviewForm = () => {
    setShowReviewForm(false);
  };

  // Pagination:
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="reviewsContainer">
      <div className="banner">
        {movie && movie.poster_path && (
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Movie Poster" />
        )}
        {movie && <h2>{movie.title}</h2>}
        
      </div>
      <div className="review-link">
        {/* Toggle the review form visibility when the link or heart icon is clicked */}
      </div>
        
      {showReviewForm && <ReviewForm onClose={closeReviewForm} />}
      <div className="UserReviews">
        <h2>Reviews</h2>
        <button className="trailer-button" onClick={openReviewForm}>
          {/* <div className="trailer-icon"> */}
            <h3 onClick={openReviewForm}>+</h3>
            {/* <img src={HeartIcon} alt="Heart Icon" className="heart-icon" onClick={openReviewForm} /> */}
          {/* </div> */}
        </button>
        
        <div className="user-reviews-container">
          {reviews.length > 0 ? (
            reviews.slice((currentPage - 1) * reviewsPerPage, currentPage * reviewsPerPage).map((review, index) => (
              <UserReview key={index} review={review} />
            ))
          ) : (
            <p style={{ color: 'white' }}>No reviews available.</p>
          )}
        </div>
      </div>

      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>&laquo; Prev</button>
        <span>{currentPage} / {totalPages}</span>
        <button onClick={nextPage} disabled={currentPage === totalPages}>Next &raquo;</button>
      </div>
    </div>
  );
}


export default MovieReviews;
