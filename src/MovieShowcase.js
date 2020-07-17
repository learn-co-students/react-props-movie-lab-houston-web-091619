import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'


export default class MovieShowcase extends Component {

  generateMovieCards = () => {
 
    // The MovieShowcase component, then, has access to movieData. 
   
      
  return movieData.map(data=>{    // map over your movieData array and return the correct 
    console.log(data)
    return <MovieCard title={data.title} IMDBRating = {data.IMDBRating} genres = {data.genres} poster = {data.poster}/>
    })  // We want to take this data and, for every object inside, render a MovieCard component, 
            // passing the object data in as props. Don't forget to pass all 4 props

  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }

}

