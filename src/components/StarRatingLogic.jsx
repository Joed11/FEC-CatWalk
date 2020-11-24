import React from 'react';
import '../../dist/stylesheets/RatingsAndReviews.css';

let StarRating = (props) => {
  var { number } = props;
  console.log(number);
  if (isNaN(number)) {
    number = 0;
  }
  const renderedStars = Math.floor(number);
  const starDetermination = number - renderedStars;
  const prop = Math.floor(starDetermination * 4);

  let returner = [];

  for (let i = 0; i < renderedStars; i++) {
    returner.push(<Stars prop={4} />);
  }
  if (renderedStars !== 5) {
    returner.push(<Stars prop={prop}/>);
  }

  if (renderedStars !== 5) {
    for (let i = renderedStars + 1; i < 5; i++) {
      returner.push(<Stars prop={0} />);
    }
  }

  return <div className="starContainer">{returner}</div>;
};

let Stars = (props) => {
  const { prop } = props;
  if (prop === 4) {
    return (
      <svg
        width='.88vw'
        height='.8vw'
        viewBox='0 0 300 275'
        xmlns='http://www.w3.org/2000/svg'
        version='1.1'
      >
        <polygon
          fill='#414141'
          stroke='#414141'
          strokeWidth='15'
          points='150,25  179,111 269,111 197,165
                    223,251  150,200 77,251  103,165
                    31,111 121,111'
        />
      </svg>
    );
  }

  if (prop === 1) {
    return (
      <svg
        width='.88vw'
        height='.8vw'
        viewBox='0 0 300 275'
        xmlns='http://www.w3.org/2000/svg'
        version='1.1'
      >
        <clipPath id='empty'>
          <rect x='110' y='0' width='190' height='275' />
        </clipPath>
        <clipPath id='filled'>
          <rect x='0' y='0' width='110' height='275' />
        </clipPath>
        <polygon
          fill='none'
          stroke='#414141'
          strokeWidth='15'
          strokeOpacity='0.37647060'
          points='150,25 179,111 269,111 197,165 223,251 150,200 77,251 103,165 31,111 121,111'
          clipPath='url(#empty)'
        />
        <polygon
          fill='#414141'
          stroke='#414141'
          strokeWidth='15'
          points='150,25 179,111 269,111 197,165 223,251 150,200 77,251 103,165 31,111 121,111'
          clipPath='url(#filled)'
        />
      </svg>
    );
  }
  if (prop === 2) {
    return (
      <svg
        width='.88vw'
        height='.8vw'
        viewBox='0 0 300 275'
        xmlns='http://www.w3.org/2000/svg'
        version='1.1'
      >
        <clipPath id='empty'>
          <rect x='150' y='0' width='150' height='275' />
        </clipPath>
        <clipPath id='filled'>
          <rect x='0' y='0' width='150' height='275' />
        </clipPath>
        <polygon
          fill='none'
          stroke='#414141'
          strokWidth='15'
          strokeOpacity='0.37647060'
          points='150,25 179,111 269,111 197,165 223,251 150,200 77,251 103,165 31,111 121,111'
          clipPath='url(#empty)'
        />
        <polygon
          fill='#414141'
          stroke='#414141'
          strokeWidth='15'
          points='150,25 179,111 269,111 197,165 223,251 150,200 77,251 103,165 31,111 121,111'
          clipPath='url(#filled)'
        />
      </svg>
    );
  }
  if (prop === 3) {
    return (
      <svg
        width='.88vw'
        height='.8vw'
        viewBox='0 0 300 275'
        xmlns='http://www.w3.org/2000/svg'
        version='1.1'
      >
        <clipPath id='empty'>
          <rect x='190' y='0' width='110' height='275' />
        </clipPath>
        <clipPath id='filled'>
          <rect x='0' y='0' width='190' height='275' />
        </clipPath>
        <polygon
          fill='none'
          stroke='#414141'
          strokeWidth='15'
          strokeOpacity='0.37647060'
          points='150,25 179,111 269,111 197,165 223,251 150,200 77,251 103,165 31,111 121,111'
          clipPath='url(#empty)'
        />
        <polygon
          fill='#414141'
          stroke='#414141'
          strokeWidth='15'
          points='150,25 179,111 269,111 197,165 223,251 150,200 77,251 103,165 31,111 121,111'
          clipPath='url(#filled)'
        />
      </svg>
    );
  }
  if (prop === 0) {
    return (
      <svg
        width='.88vw'
        height='.8vw'
        viewBox='0 0 300 275'
        xmlns='http://www.w3.org/2000/svg'
        version='1.1'
      >
        <polygon
          fill='none'
          stroke='#414141'
          strokeWidth='15'
          strokeOpacity='0.37647060'
          points='150,25 179,111 269,111 197,165 223,251 150,200 77,251 103,165 31,111 121,111'
        />
      </svg>
    );
  }
};

export default StarRating;
