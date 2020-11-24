//import exampleAction from '../actions/example.action.js'
import store from '../../store/store.js';
import { connect } from 'react-redux';
import changeProductQuestions from '../../actions/changeProductQuestions.js';
import QuestionListEntry from '../../components/QuestionsAndAnswers/QuestionListEntry/QuestionListEntry.jsx';

const mapDispatchToProps = (dispatch) => {
    return {
        populateQuestions: (productQuestions) => {
          dispatch(changeProductQuestions(productQuestions))
        },
    }
}

const mapStateToProps = (store) => ({
    product: store.primaryProduct
  })

var QuestionListEntryContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(QuestionListEntry)

export default QuestionListEntryContainer;