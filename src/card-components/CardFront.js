import React, { Component } from 'react';

export default class CardFront extends Component {

  render() {
    
    return (
      <div className="card-front" style={{backgroundImage: `url(${this.props.poster})`}}>
      </div>
    )
  }
}
//CardFront will only be used to display the movie poster. CardFront should receive a poster prop,