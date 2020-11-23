//import exampleAction from '../actions/example.action.js'
import store from '../../store/store.js';
import { connect } from 'react-redux';
import changeProductQuestions from '../../actions/changeProductQuestions.js';
import AnswerListEntry from '../../components/QuestionsAndAnswers/AnswerListEntry/AnswerListEntry.jsx';

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

var AnswerListEntryContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AnswerListEntry)

export default AnswerListEntryContainer;