import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/all.json?`
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {
    state = { 
        reviews: [],
        searchTerm: ""
     }

     componentDidMount() {
         this.fetchSearchedReviews();
     }

    fetchSearchedReviews = () => {
        fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}` + `api-key=${NYT_API_KEY}`)
        .then(response => response.json())
        .then(reviewsList => {
            this.setState({
                reviews: reviewsList.results
            })
        })
    }

    handleChange = (event) => {
    this.setState({
        searchTerm: event.target.value
    })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.fetchSearchedReviews();
    }

    render() { 
        return ( 
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="text"></input>
                    <input type="submit" value="Search Reviews"></input>
                </form>
                <div className="searched-movie-reviews">
                    <MovieReviews reviews={this.state.reviews}/>
                </div>
            </div>

         );
    }
}
 
export default SearchableMovieReviewsContainer;