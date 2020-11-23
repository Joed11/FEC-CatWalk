import React from 'react';
import ReviewsRatingBarGraph from './ReviewsRatingBarGraph.jsx';
import Characteristics from './Characteristics';
import StarRating from '../StarRatingLogic';
import '../../../dist/stylesheets/RatingsAndReviews.css';

const ReviewsBreakDown = (props) => {
  let recommends = props.primaryProductMetadata.recommended;
  let recommendedPercentage = Math.round(
    (recommends[1] / (recommends[0] + recommends[1])) * 100
  );
  if (!recommends[0]) {
    recommendedPercentage = 100
  }
  let reviewCount = 0;
  let aggregateTotal = 0;
  let modeRatings = 0;

  for (let i = 1; i <= 5; i++) {
    if (props.primaryProductMetadata.ratings[i]) {
      reviewCount += props.primaryProductMetadata.ratings[i];
      aggregateTotal += i * props.primaryProductMetadata.ratings[i];
      if (props.primaryProductMetadata.ratings[i] > modeRatings) {
        modeRatings = props.primaryProductMetadata.ratings[i];
      }
    }
  }
  let overAllReviews = Math.round((aggregateTotal / reviewCount) * 10) / 10;
  if (isNaN(recommendedPercentage)) {
    recommendedPercentage = 0
  }
  return (
    <div>
      <div className='review-score'>
        <b className='review-score-text'>{overAllReviews}</b>
        <StarRating number={overAllReviews} />
      </div>
      <div className='recommends-product'>
        {recommendedPercentage}% of reviews recommend this products
      </div>
      <div>
        <ReviewsRatingBarGraph
          ratings={props.primaryProductMetadata.ratings}
          modeRatings={modeRatings}
        />
      </div>
      <div className='Characteristics-bars'>
        <Characteristics
          characteristics={props.primaryProductMetadata.characteristics}
        />
      </div>
    </div>
  );
};

ReviewsBreakDown.prototypes = {};

export default ReviewsBreakDown;
