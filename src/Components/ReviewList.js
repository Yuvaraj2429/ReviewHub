import React, { useEffect, useState } from 'react';
import animation from "./animation.json";
import Lottie from "lottie-react";

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch the reviews from the backend API or localStorage
    // For this example, we'll use localStorage
    const existingReviews = JSON.parse(localStorage.getItem('reviews')) || [];
    setReviews(existingReviews);
  }, []);


  return (
    <div class="master">
      <div class="banner-main">
        <h1>
          Latest Reviews
        </h1>
      </div>
      <div class="lottie">
        <div style={{ width: "10%" }}>
          <Lottie loop={true} animationData={animation} />
        </div>
        </div>
        <h2 class="latest">Reviews</h2>
        {reviews.length === 0 ? (
          <p class="no">No reviews yet.</p>
        ) : (
          <div class="mystery">
            <ul>
              {reviews.map((review, index) => (
                <li key={index}>
                  <h3>{review.name}</h3>
                  <p>Rating: {review.rating}</p>
                  <p>Category:{review.category}</p>
                  <p>{review.comment}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>


      );
};

      export default ReviewList;
