//import exampleAction from '../actions/example.action.js'
import store from '../../store/store.js';
import { connect } from 'react-redux';
import changePrimaryProduct from '../../actions/changePrimaryProduct.js';
import changeProductQuestions from '../../actions/changeProductQuestions.js';
import changeStyle from '../../actions/changeStyle.js';
import changeAllStyles from '../../actions/changeAllStyles.js';
import Navbar from '../../components/Navigation/Navbar.jsx';
import changeReviews from '../../actions/changeReviews.js'
import changeReviewsMetaData from '../../actions/changeReviewMetaData.js'

const mapDispatchToProps = (dispatch) => {
    return {
        updatePrimaryProduct: (product) => {
          dispatch(changePrimaryProduct(product))
        },
        updateQuestions: (productQuestions) => {
          dispatch(changeProductQuestions(productQuestions))
        },
        updateStyles: (newStyles) => {
          dispatch(changeAllStyles(newStyles))
        },
        updateCurrentStyle: (newStyle) => {
          dispatch(changeStyle(newStyle))
        },

        updateReviewsList: (data) => {
          dispatch(changeReviews(data))
        },

        updateReviewsData: (info) => {
          dispatch(changeReviewsMetaData(info))
        }
    }
}

var NavbarContainer = connect(
    null,
    mapDispatchToProps
)(Navbar)

export default NavbarContainer;