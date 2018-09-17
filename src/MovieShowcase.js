import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {
  // ✓ renders at least one <MovieCard /> component
  // ✓ renders 9 <MovieCard /> components
  // ✓ passes all 4 props to every component
  // ✓ has generated the correct prop values for the first movie
  // ✓ has generated the correct prop values for the last movie

  generateMovieCards = () => {
    return movieData.map(function(movieObj){
     return(
       <MovieCard
         key={movieObj.title}
         title={movieObj.title}
         IMDBRating={movieObj.IMDBRating}
         genres={movieObj.genres}
         poster={movieObj.poster}
       />
     )
   })
 }
  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
