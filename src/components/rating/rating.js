import React from 'react';
import './Rating.css';

const Rating = (props) => {
  // const score = (props.score / 5) * 100
  const { score } = props;

  return (
    <span className="star-wrapper">
      <span className="stars">
        *
        {score} -
        STARS*
      </span>
    </span>
  );
};

export default Rating;
