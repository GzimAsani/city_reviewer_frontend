import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import '../../stylecss/reviewform.css';
import styled from 'styled-components';
import Gray from './Stars/Gray';
import Selected from './Stars/Selected';
import Hover from './Stars/hover';

const RatingBox = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  position: relative;

  input {
    display: none
  }

  label {
    cursor: pointer;
    width: 40px;
    height: 40px;
    background-image: url("data:image/svg+xml;charset=UTF-8,${Gray}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 70%
  }

  input:checked ~ label,
  input:checked ~ label ~ label {
    background-image: url("data:image/svg+xml;charset=UTF-8,${Selected}")
  }
  input:not(:checked) ~ label:hover,
  input:not(:checked) ~ label:hover ~ label {
    background-image: url("data:image/svg+xml;charset=UTF-8,${Hover}")
  }

`;

const ReviewForm = (props) => {
  const ratingOptions = [5, 4, 3, 2, 1].map((score, index) => (
    <Fragment key={props.attributes.index}>
      <input type="radio" value={score} checked={props.review.score === score} name="rating" onChange={() => console.log('selected:', score)} id={`rating-${score}`} />
      <label onClick={props.setRating.bind(this, score)} />
    </Fragment>
  ));
  return (
    <div className="wrapper-form">
      <form onSubmit={props.handleSubmit}>
        <h1 className="form-h1">Add your review!</h1>
        <div className="review-title d-flex mb-5">
          Have you ever visited
          {props.attributes.name}
          {' '}
          ? If so, please share your experience!
        </div>
        <div className="field title1 mb-3 d-flex">
          <input className="input" onChange={props.handleChange} value={props.review.title} type="text" name="title" placeholder="Review title" />
        </div>
        <div className="field d-flex">
          <input className="description1" onChange={props.handleChange} value={props.review.description} type="text" name="description" placeholder="Review description" />
        </div>
        <div className="field">
          <div className="rating-container">
            <div className="rating-text">Rate this City</div>
            <RatingBox className="rating-box">
              {ratingOptions}
            </RatingBox>
            <button className="submit-button mt-3" type="submit"> Submit your review! </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;

ReviewForm.propTypes = {
  type: PropTypes.string.isRequired,
};
