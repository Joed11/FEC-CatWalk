import AddReviewsModal from '../../components/RatingsAndReviews/AddReviewsModal';
import store from '../../store/store.js';
import { connect } from 'react-redux';

const mapStateToProps = (store) => ({
  primaryProductMetadata: store.primaryProductMetadata,
});

var AddReviewModalContainer = connect(mapStateToProps, null)(AddReviewsModal);

export default AddReviewModalContainer;