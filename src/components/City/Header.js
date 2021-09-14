import React from 'react';
import '../../stylecss/header.css';
import { Link } from 'react-router-dom';

const Header = (props) => {
  
  const { name, image_url, average_score } = props.attributes;
  const total = props.reviews.length;
  return (
    <div className="wrapper">
      <h1 className="mb-5 image-name">
        <img className="image" src={image_url} />
        {name}
      </h1>
      <div className="">
        <div className="totalReviews mb-3">
          Total:
          {total}
          {' '}
          User reviews
        </div>
        <div className="totalOutof mb-3">
          Rating:
          {average_score}
          {' '}
          out of 5
        </div>
      </div>
      <Link className="linkk" to="/">Go back!</Link>
    </div>
  );
};

export default Header;
