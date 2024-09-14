import React from 'react';

const StarRating = ({ rating }) => {
  return (
    <div
      className="stars-landing"
      style={{ '--rating': rating }}
      aria-label={`Rating of this product is ${rating} out of 5.`}
    >
      {/* <span className='fs-6'>{rating}/5</span> */}
    </div>
  );
};

export default StarRating;
