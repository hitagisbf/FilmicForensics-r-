import React, { useState } from 'react';
import './ReviewForm.css'; // Import the CSS file for custom styles

const ReviewForm = ({ onClose }) => {
  // State variables to store form input values
  const [headline, setHeadline] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [spoilers, setSpoilers] = useState(false); // Spoilers state

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Submitting review:', { headline, reviewText, spoilers });
    // Reset form fields after submission 
    setHeadline('');
    setReviewText('');
    setSpoilers(false);
    // Close the popup
    onClose();
  };

  return (
    <div className="review-form-wrapper">
      <div className="review-overlay" onClick={onClose}></div> {/* Overlay */}
      <div className="review-form-popup">
        <span className="close" onClick={onClose}>&times;</span>
          {/* <div className="star-rating">
            <h3>Movie Title (YYYY)</h3>
            <p>YOUR RATING</p>
            {[...Array(5)].map((_, index) => (
              <span key={index} className={`star ${index < 3 ? 'filled' : ''}`}>&#9733;</span>
            ))}
          </div> */}
        <div className="movie-info">
          
        </div>
        <form onSubmit={handleSubmit}>
          <label className="headline-label">
            Your Review
            <input
              type="text"
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
              required
              placeholder="Write your username..."
            />
          </label>
          <label>
            <textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              required
              placeholder="Write your review here..."
            ></textarea>
          </label>
          <button type="submit" className="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ReviewForm;
