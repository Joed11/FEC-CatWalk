import React from 'react';
import '../../../dist/stylesheets/RatingsAndReviews.css';

class Rating extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      rating: 2,
      temp_rating: null,
    };
  }

  handleMouseover(rating) {
    this.setState((prev) => ({
      rating,
      temp_rating: prev.rating,
    }));
  }

  handleMouseout() {
    this.setState((prev) => ({
      rating: prev.temp_rating,
    }));
  }

  rate(rating) {
    this.setState({
      rating,
      temp_rating: rating,
    });
  }

  render() {
    let hider = {display: 'none'}
    const { rating } = this.state;
    let stars = [];
    for (let i = 0; i < 5; i++) {
      let filledStar = (
        <svg
          width='33px'
          height='30px'
          viewBox='0 0 300 275'
          xmlns='http://www.w3.org/2000/svg'
          version='1.1'
          onMouseOver={() => this.handleMouseover(i)}
          onClick={() => this.rate(i)}
          onMouseOut={() => this.handleMouseout()}
        >
          <polygon
          fill='#808080'
          stroke='#808080'
          stroke-width='15'
          points='150,25  179,111 269,111 197,165
                    223,251  150,200 77,251  103,165
                    31,111 121,111'
        />
        </svg>
      );
      let emptyStar = (
        <svg
          width='33px'
          height='30px'
          viewBox='0 0 300 275'
          xmlns='http://www.w3.org/2000/svg'
          version='1.1'
          onMouseOver={() => this.handleMouseover(i)}
          onClick={() => this.rate(i)}
          onMouseOut={() => this.handleMouseout()}
        >
          <polygon
            fill='none'
            stroke='#808080'
            stroke-width='15'
            stroke-opacity='0.37647060'
            points='150,25 179,111 269,111 197,165 223,251 150,200 77,251 103,165 31,111 121,111'
          />
        </svg>
      );
      let klass = emptyStar;
      if (this.state.rating >= i && this.state.rating !== null) {
        klass = filledStar;
      }
      stars.push(klass);
    }

    let optionArray = ["Poor", "Fair", "Average", "Good", "Great"]

    return (
      <div className='rating'>
      <div>
      <b className="modal-display-stars">{optionArray[this.state.rating]}</b>
      </div>
        <div id="currentRating" style={hider}>{this.state.rating + 1}</div>
        {stars}
      </div>
    );
  }
}

export default Rating;
