import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const URL = (query) => 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `query=${query}&api-key=${process.env.REACT_APP_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
    constructor(){
        super();
        this.state = {
            reviews: [],
            searchTerm: ""
        }
    }

    handleChange = (event) => {
        event.persist();
        this.setState({searchTerm: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        return fetch(URL(this.state.searchTerm))
        .then(res => res.json())
        .then((json) => {
            let reviews = json.results.map((review) => [review.display_title, review.summary_short, review.link.url])
            this.setState({reviews: reviews})
        })
        .catch(error => console.log(error))
    }

    render(){
        return(
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.searchTerm} onChange={this.handleChange}/>
                    <input type="submit" />
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}
