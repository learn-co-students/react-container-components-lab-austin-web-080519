import React from 'react';
import Review from './Review'

const MovieReviews = ( {reviews} ) => {
    console.log(reviews);
    return (
    <div className="review-list">
        { reviews.map( (review, index) => <Review title={review.display_title} author={review.byline} headline={review.headline} summary={review.summary_short} key={index}/> )}
    </div>
    )
}


export default MovieReviews;