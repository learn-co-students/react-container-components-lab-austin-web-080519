// Code MovieReviews Here
import React from 'react';

function MovieReviews(props) {
    return (
        <div className="review-list">
                {props.reviews.map((review) => {return (
                    <div className="review">
                        <h1>{review[0]}</h1>
                        <p>{review[1]}</p>
                        <a href={review[2]}>Link</a>
                    </div>
                )})}
            </div>
    )
}

export default MovieReviews;