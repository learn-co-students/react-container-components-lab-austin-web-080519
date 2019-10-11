import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${process.env.REACT_APP_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {
    constructor(){
        super();
        this.state = {
            reviews: []
        }
    }

    componentDidMount(){
        return fetch(URL)
        .then(res => res.json())
        .then((json) => {
            let reviews = json.results.map(review => [review.display_title, review.summary_short, review.link.url])
            this.setState({
                reviews: reviews
            })
        })
        .catch(error => console.log(error))
    }

    render(){
        return(
            <div className="latest-movie-reviews">
                <h1>Latest movies</h1>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }

}