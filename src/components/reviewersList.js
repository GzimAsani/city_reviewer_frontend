import React from 'react';
import { fetchReviews } from '../Actions';
import { connect } from 'react-redux';


class ReviewsList extends React.Component {
  componentDidMount() {
    this.props.fetchReviews(this.props.reviewId);

  }

  render() {
    const reviewa = this.props.reviews.find((review) => review.relationships.reviews.data.id === this.props.reviewId
    );

    if (!reviewa) {
      return null;
    }


    return (
      <div>

        <p>{reviewa.title}</p>
        {/* <p>{returnReviews}</p> */}
      </div>
    );
  };
};

const mapStateToProps = (state) => ({
  reviews: state.reviews
});

export default connect(mapStateToProps, { fetchReviews })(ReviewsList);