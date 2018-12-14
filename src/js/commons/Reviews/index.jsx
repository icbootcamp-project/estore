import React from 'react';
import { array } from 'prop-types';

import Review from './components/Review';

function renderReviews(data) {
  return data.map((user) => (
    <Review key={user.name} name={user.name} comment={user.comment} time={user.timeStamp} rating={user.rating} />
  ));
}

const Reviews = (props) => <div id="Review">{renderReviews(props.reviews)}</div>;

Reviews.propTypes = {
  reviews: array.isRequired,
};
export default Reviews;
