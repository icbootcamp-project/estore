import React  from 'react';
import { string,number } from "prop-types";

function renderRating(rat){
    const stars = [];
    
    for( let i =1; i <= rat; i += 1 ){
        stars.push(
            <img src="./img/products-page-details/star_rating.png" height="25" width="25" alt="Rating" />
        );
    }

    return stars;
}

const Review =(props) => (
    <div className="review-content">
        <h2>{props.name}</h2>
        <p>
            {props.comment}
        </p>
        <span>{props.time}</span>
        <div className="rating">
        { renderRating(props.rating) }
        </div>
    </div>

    );
Review.propTypes = {
    name:string.isRequired,
    comment:string.isRequired,
    rating:number.isRequired,
    time:string.isRequired

}
export default Review;