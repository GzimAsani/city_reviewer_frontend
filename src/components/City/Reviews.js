import React from 'react';
import Rating from '../rating/rating';
import '../../stylecss/reviews.css';

const Reviews = (props) => {
  const { score, title, description, email } = props.attributes;

  return (
    <div className=" rating-container2 mb-3">
      <div className="rating-container2-score card-body">
        <Rating score={score} />
      </div>
      <div className="card-title">
        {title}
      </div>
      <div className="card-text">
        {description}
      </div>
      {email}
    </div>
  );
};

export default Reviews;
