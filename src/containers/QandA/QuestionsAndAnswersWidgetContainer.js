//import exampleAction from '../actions/example.action.js'
import store from '../../store/store.js';
import QuestionsAndAnswers from '../../components/QuestionsAndAnswers/QuestionsAndAnswers/QuestionsAndAnswers.jsx';
import { connect } from 'react-redux';
import changeProductQuestions from '../../actions/changeProductQuestions.js';
import changePrimaryProduct from '../../actions/changePrimaryProduct.js';

const mapDispatchToProps = (dispatch) => {
    return {
        populateQuestions: (productQuestions) => {
          dispatch(changeProductQuestions(productQuestions))
        },
    }
}

const mapStateToProps = (store) => ({
  productQuestions: store.productQuestions,
  primaryProduct: store.primaryProduct
})

var QuestionsAndAnswersWidgetContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(QuestionsAndAnswers)

export default QuestionsAndAnswersWidgetContainer;