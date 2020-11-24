//import exampleAction from '../actions/example.action.js'
import store from '../../store/store.js';
import { connect } from 'react-redux';
import changeProductQuestions from '../../actions/changeProductQuestions.js';
import AddQuestionModal from '../../components/QuestionsAndAnswers/AddQuestionModal/AddQuestionModal.jsx';

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

var AddQuestionModalContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddQuestionModal)

export default AddQuestionModalContainer;