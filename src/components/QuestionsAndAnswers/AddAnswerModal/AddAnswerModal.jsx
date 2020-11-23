import React, { useState, useEffect } from "react";
import axios from "axios";
import InteractionTracker from "../../Utility/InteractionTracker.jsx";
import '../../../../dist/stylesheets/QandAstyles.css';

var AddAnswerModal = (props) => {
  var { product, questionBody, questionId, onClose, populateQuestions } = props;

  const [images, setImages] = useState([]);

  useEffect(() => {
    console.log(images);
    if (images.length) {
      document.getElementById("QandA-clear-photos").style.visibility = "visible";
    } else {
      document.getElementById("QandA-clear-photos").style.visibility = "hidden";
    }
  }, [images]);

  return (
    <div className="QandA-modal-body">
      <p className="modal-header">Submit your Answer</p>
      <p className="modal-sub-header"> {product.name}: {questionBody}</p>
      <form id="submit-answer-form" className="QandA-modal-form">
        <label htmlFor="your-answer">YOUR ANSWER*:</label>
        <br></br>
        <textarea type="text" id="your-answer" name="your-answer" maxLength="1000" placeholder="Your answer here..." required></textarea>
        <br></br>
        <label htmlFor="answer-nickname">WHAT IS YOUR NICKNAME*:</label>
        <br></br>
        <input type="text" id="answer-nickname" name="answer-nickname" maxLength="60" placeholder="Example: jack543!" required></input>
        <br></br>
        <p className="modal-privacy-warning">For privacy reasons, do not use your full name or email address</p>
        <br></br>
        <label htmlFor="answer-email">YOUR E-MAIL*:</label>
        <br></br>
        <input type="text" id="answer-email" name="answer-email" maxLength="60" placeholder="Example: jack@email.com" required></input>
        <br></br>
        <p className="modal-email-warning">For authentication reasons, you will not be emailed</p>
        <br></br>
        <label className="QandA-photo-upload" id="uploaded-answer-photos-psuedo-button" htmlFor="file-upload" onClick={() => getFiles()}>UPLOAD PHOTOS
        <br></br>
          <input id="uploaded-answer-photos" type="file" name="file-upload" accept="image/*" multiple onChange={() => {
            setImages([]);
            handlePhotoUploadChange(setImages);
          }}></input>
        </label>
        <br></br>
        <div className="photo-upload-preview-container" id="photo-upload-preview-container">
        </div>
        <button className="QandA-clear-photos" id="QandA-clear-photos" onClick={(e) => {
          e.preventDefault();
          setImages([]);
          document.getElementById('photo-upload-preview-container').innerHTML= '';
          document.getElementById('uploaded-answer-photos-psuedo-button').style.visibility = "visible";
          }}>CLEAR PHOTOS</button>
          <br></br>
        <InteractionTracker widget="QandA" element="Submit-answer"
           render={({ postInteraction }) => (
        <input className="QandA-submit" type="submit" value="SUBMIT" onClick={(e) => {
            e.preventDefault();
            if (checkVaild()) {
              handleSubmit(questionId, product.id, images, populateQuestions);
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

var getFiles = () => {
  document.getElementById("uploaded-answer-photos").click();
}

var handlePhotoUploadChange = (callback) => {
  var files = document.getElementById('uploaded-answer-photos').files

  document.getElementById('photo-upload-preview-container').innerHTML= '';

  var fileList = [];

  for (let i = 0; i < files.length && i < 5; i++) {
    var reader = new FileReader();
    reader.addEventListener("load", function () {
      var image = new Image();
      image.src = this.result;
      fileList.push(this.result);
      image.setAttribute('class', 'upload-photo-thumbnail');
      document.getElementById('photo-upload-preview-container').appendChild( image );
      if (i === files.length-1 || i === 4) {
        callback(fileList);
      }
    }, false);

    reader.readAsDataURL(files[i]);

    if (i >= 4) {
      document.getElementById('uploaded-answer-photos-psuedo-button').style.visibility = "hidden";
    }
  }
}

var handleSubmit = (id, productId, photoURLS, populateQuestions) => {
  var body = document.getElementById('your-answer').value;
  var nickname = document.getElementById('answer-nickname').value;
  var email = document.getElementById('answer-email').value;
  var files = document.getElementById('uploaded-answer-photos').files
  var photos = photoURLS
  var questionId = id;

  axios.post(`/catwalk/qa/answers/${questionId}`, {
    'body': body,
    'name': nickname,
    'email': email,
    'photos': photos
  })
    .then((response) => {
      console.log('success', response);
    })
    .catch((err) => {
      console.log('error posting answer', err);
    })
    .then(() => {
      return axios.get(`/catwalk/qa/questions/${productId}`)
    })
    .then((response) => {
      console.log('success getting updated quesitons');
      console.log(response.data.results);
      populateQuestions(response.data.results);
    })
    .catch((err) => {
      console.log('error getting new question list', err);
    })
}

var checkVaild = () => {
  var body = document.getElementById('your-answer').value;
  var nickname = document.getElementById('answer-nickname').value;
  var email = document.getElementById('answer-email').value;

  if (body.length <= 0) {
    alert('You must enter the following: Answer');
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

AddAnswerModal.propTypes = {};

export default AddAnswerModal;