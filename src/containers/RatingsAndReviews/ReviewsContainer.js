import ReviewsList from '../../components/RatingsAndReviews/ReviewsList.jsx';
import store from '../../store/store.js';
import { connect } from 'react-redux';
import changeReviews from '../../actions/changeReviews'

const mapStateToProps = (store) => ({
  reviews: store.reviews,
  primaryProduct: store.primaryProduct,
});

const mapDispatchToProps = (dispatch) => ({
  updateReviewsList: (data) => {
    dispatch(changeReviews(data));
  },
});

var ReviewsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewsList);

export default ReviewsContainer;
