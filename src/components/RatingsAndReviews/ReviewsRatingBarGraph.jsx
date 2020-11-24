import React, { useState } from 'react';
import '../../../dist/stylesheets/RatingsAndReviews.css';

const ReviewsRatingBarGraph = (props) => {
  console.log(props)
  const data = props.ratings
  const barHeight = props.modeRatings ;

  let returner = [];

  for (let i = 5; i >= 1; i--) {

    let variable
    if (!data[i]) {
      variable = 0.01
    }
    else {
      variable = data[i]
    }
    console.log(variable)
    returner.push(
      <div>
        <BarGraphComponents
          value={i}
          data={variable}
          barHeight={barHeight}
        />
      </div>
    );
  }

  return <div>{returner}</div>;
};

const BarGraphComponents = (props) => {
  let completed = Math.floor((props.data / props.barHeight) * 100);
  const containerStyles = {
    height: ".52vw",
    width: '11vw',
    backgroundColor: '#e0e0de',
    borderRadius: 30,
    marginTop: '8px',
  };

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: '#696969',
    borderRadius: 'inherit',
    textAlign: 'right',
  };

  return (
    <div className="barGraph"><p className="rating-num">
      {props.value} Stars
      </p>
      <div style={containerStyles}>
        <div style={fillerStyles}></div>
      </div>
    </div>
  );
};

ReviewsRatingBarGraph.prototype = {};
export default ReviewsRatingBarGraph;
