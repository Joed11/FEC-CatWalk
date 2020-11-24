import React from "react";
import axios from "axios";
import InteractionTracker from "../../Utility/InteractionTracker.jsx";
import '../../../../dist/stylesheets/QandAstyles.css';

var AddQuestionModal = (props) => {
  var {product, onClose, populateQuestions} = props;
  var productName = product.name;
  var productId = product.id;

  return (
    <div className="QandA-modal-body">
      <p className="modal-header">Ask you quesiton</p>
      <p className="modal-sub-header">About the {productName}</p>
      <form id="submit-question-form" className="QandA-modal-form">
        <label className="QandA-modal-label" htmlFor="your-question">YOUR QUESTION*:</label>
        <br></br>
        <textarea type="text" id="your-question" name="your-question" maxLength="1000" placeholder="Why did you like the product or not?" required></textarea>
        <br></br>
        <label className="QandA-modal-label" htmlFor="question-nickname">WHAT IS YOUR NICKNAME*:</label>
        <br></br>
        <input type="text" id="question-nickname" name="question-nickname" maxLength="60" placeholder="Example: jackson11!" required></input>
        <br></br>
        <p className="modal-privacy-warning">For privacy reasons, do not use your full name or email address</p>
        <br></br>
        <label className="QandA-modal-label" htmlFor="question-email">YOUR E-MAIL*:</label>
        <br></br>
        <input type="text" id="question-email" name="question-email" maxLength="60" placeholder="Example: jack@email.com"required></input>
        <br></br>
        <p className="modal-email-warning">For authentication reasons, you will not be emailed</p>
        <br></br>
        <InteractionTracker widget="QandA" element="Submit-question"
           render={({ postInteraction }) => (
        <input className="QandA-submit" type="submit" value="SUBMIT" onClick={(e) => {
            e.preventDefault();
            if (checkVaild()) {
              handleSubmit(productId, populateQuestions);
              postInteraction();
              onClose();
            }
        }}>
        </input>
        )} />
      </form>
    </div>
  );
};

var handleSubmit = (id, populateQuestions) => {
  var body = document.getElementById('your-question').value;
  var nickname = document.getElementById('question-nickname').value;
  var email = document.getElementById('question-email').value;


  axios.post(`/catwalk/qa/questions`, {
    'body': body,
    'name': nickname,
    'email': email,
    'product_id': id
  })
    .then((response) => {
      console.log('success', response);
    })
    .catch((err) => {
      console.log('error posting question', err);
    })
    .then(() => {
      return axios.get(`/catwalk/qa/questions/${id}`)
    })
    .then((response) => {
      console.log(response.data.results);
      console.log('success getting updated quesitons');
      populateQuestions(response.data.results);
    })
    .catch((err) => {
      console.log('error getting new question list', err);
    })
}

var checkVaild = () => {
  var body = document.getElementById('your-question').value;
  var nickname = document.getElementById('question-nickname').value;
  var email = document.getElementById('question-email').value;

  if (body.length <= 0) {
    alert('You must enter the following: Quesiton');
    return false;
  }
  if (nickname.length <= 0) {
    alert('You must enter the following: Nickname');
    return false;
  }
  if (email.length <= 0) {
    alert('You must enter the following: E-mail Address');
    return false;
  }
  if (!validateEmail(email)) {
    alert('Please enter a valid E-mail Address.');
    return false;
  }
  return true;
}

var validateEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

AddQuestionModal.propTypes = {};

export default AddQuestionModal;