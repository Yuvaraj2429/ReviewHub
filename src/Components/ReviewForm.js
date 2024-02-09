import React, { useState } from 'react';

const ReviewForm = () => {
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [category, setCategory] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Assuming you have an API or backend to send the review data
    // For this example, we'll use localStorage to store the reviews
    const reviewData = { name, rating, category, comment };
    const existingReviews = JSON.parse(localStorage.getItem('reviews')) || [];
    const updatedReviews = [...existingReviews, reviewData];
    localStorage.setItem('reviews', JSON.stringify(updatedReviews));

    setName('');
    setRating('');
    setCategory('');
    setComment('');
  };

  return (
    <>
    <div class="post">
    <div class="banner-main">
    <h1>
        Post Review
    </h1>
</div>
    <div>
      <h2 class="submit">Submit Review</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          id="rating"
          min="1"
          max="5"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          required
        />
        <label htmlFor="category">Category:</label>
<select
  id="category"
  value={category}
  onChange={(e) => setCategory(e.target.value)}
  required
>
  <option value="">Select a category</option>
  <option value="Banking">Banking</option>
  <option value="Travel">Travel</option>
  <option value="Mobile Phones">Mobile Phones</option>
  <option value="Laptop">Laptop</option>
  <option value="Shoes">Shoes</option>
  <option value="Watches">Watches</option>
  <option value="Fashion">Fashion</option>
  <option value="Herbals">Herbals</option>
  {/* Add more options as needed */}
</select>

        <label htmlFor="comment">Comment:</label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        ></textarea>
        <button type="submit">Submit Review</button>
      </form>
    </div>
    </div>
    </>
  );
};

export default ReviewForm;
