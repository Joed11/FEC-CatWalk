import ReviewsBreakDown from '../../components/RatingsAndReviews/ReviewsBreakDown.jsx';
import store from '../../store/store.js';
import { connect } from 'react-redux';

const mapStateToProps = (store) => ({
  reviews: store.reviews,
  primaryProductMetadata: store.primaryProductMetadata,
});

var ReviewsBreakDownContainer = connect(mapStateToProps, null)(ReviewsBreakDown);

export default ReviewsBreakDownContainer;
