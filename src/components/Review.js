import React from 'react';

const Review = ( {title, author, headline, summary }) => (
    <div className="review">
        <h3>{headline}</h3>
        <p>Movie: {title}</p>
        <p>Written By: {author}</p>
        <p>Summary: {summary}</p>
    </div>
)

export default Review;