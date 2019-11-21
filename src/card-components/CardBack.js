import React, { Component } from 'react';
import zero from '../assets/stars/0-stars.png'
import one from '../assets/stars/1-stars.png'
import two from '../assets/stars/2-stars.png'
import three from '../assets/stars/3-stars.png'
import four from '../assets/stars/4-stars.png'
import five from '../assets/stars/5-stars.png'

const imgMapper = {0: zero, 1: one, 2: two, 3: three, 4: four, 5: five}

export default class CardBack extends Component {
  //For IMDBRating, you will need to finish writing the method generateRatingElement(), which should do the following:
// 

  generateRatingElement = () => {
    if(this.props.IMDBRating === null){ //if the IMDBRating prop is null, 
      return (<h4>No Rating Found</h4>) //return an <h4> with the contents 'No Rating Found'
    } else { //otherwise, 
      return ( // return
        <img src = {imgMapper[this.props.IMDBRating]} alt=""/> // <img src={imgMapper[prop]} alt="" /> (using the correct prop)
      )
    }
  }

// CardBack will display the title, genres and IMDB rating.
  render() {
    return (
      <div className="card-back">
          {/* movie title */}
        <h3 className="title">{this.props.title}</h3>
        <span />
        {/* rating element for movie */}
        {this.generateRatingElement
        ()}
        <span />
        {/*For genres, join each genre together into string with commas separating each.*/}
        <h5 className="genres">{this.props.genres.join(',')}</h5>
      </div>
    )
  }
}

