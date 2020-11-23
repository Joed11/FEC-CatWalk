//import exampleAction from '../actions/example.action.js'
import store from '../../store/store.js';
import { connect } from 'react-redux';
import changeProductQuestions from '../../actions/changeProductQuestions.js';
import AddAnswerModal from '../../components/QuestionsAndAnswers/AddAnswerModal/AddAnswerModal.jsx';

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

var AddAnswerModalContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddAnswerModal)

export default AddAnswerModalContainer;