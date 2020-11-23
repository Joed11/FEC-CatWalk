import React, { useState, useEffect } from "react";
import AnswerPhotoEntry from '../AnswerPhotoEntry/AnswerPhotoEntry.jsx';
import axios from "axios";
import moment from 'moment';
import InteractionTracker from "../../Utility/InteractionTracker.jsx";
import '../../../../dist/stylesheets/QandAstyles.css';

var AnswerListEntry = (props) => {
  var { answer, product, populateQuestions } = props
  var date = answer.date
  var formattedDate = moment(date).format('MMMM D, YYYY')
  var photoList = buildPhotoList(answer.photos)

  const [helpfulness, setHelpfulness] = useState(answer.helpfulness);
  const [isMarkedHelpful, setIsMarkedHelpful] = useState(false);
  const [isReported, setIsReported] = useState(false);

  return (
    <div className="answer-list-entry Q-grid-container">
      <p className="answer-label Q-col-1">A:</p>
      <div className="answer-body Q-col-2">{answer.body}</div>
      {photoList}
      <div className="answer-utility-container Q-col-2">
        {highlightSeller(answer.answerer_name)}
        <p className="answer-utility-date">{formattedDate}</p>
        <p className="answer-utility-break">|</p>
        <p className="answer-utility-text">Helpful?</p>
        <InteractionTracker widget="QandA" element="Mark-answer-helpful"
           render={({ postInteraction }) => (
        <a className="answer-utility-link" id="answer-helpful" onClick={(e) => {
            if (!isMarkedHelpful) {
              setHelpfulness(helpfulness + 1);
              setIsMarkedHelpful(true);
              e.target.innerHTML = 'Thanks!';
              postInteraction();
              postHelpfulness(answer.id, product.id, populateQuestions);
            }
          }
        }>Yes</a>
        )} />
        <p className="answer-utility-count">({helpfulness})</p>
        <p className="answer-utility-break">|</p>
        <InteractionTracker widget="QandA" element="Report-answer"
           render={({ postInteraction }) => (
        <a className="answer-utility-link" onClick={(e) => {
            if (!isReported) {
              setIsReported(true);
              e.target.innerHTML = 'Reported!';
              postInteraction();
              postReported(answer.id, product.id, populateQuestions);
            }
          }
        }>Report</a>
        )} />
      </div>
    </div>
  );
};

var buildPhotoList = (photoArray) => {
  if (photoArray.length) {
    return (
    <div className="answer-photo-gallery Q-col-2">
      {photoArray.map((photo) =>{
        return <AnswerPhotoEntry photo={photo} key={photo}/>
      })}
    </div>
    )
  } else {
    return null
  }
}

var highlightSeller = (name) => {
  if (name.toLowerCase() === 'seller') {
    return (
      <p className="answer-utility-text">by <b>{name}</b> ,</p>
    )
  } else {
    return (
      <p className="answer-utility-text">by {name} ,</p>
    )
  }
}

var postHelpfulness = (answerId, productId, populateQuestions) => {
  axios.put(`/catwalk/qa/answers/helpful/${answerId}`)
    .then((response) => {
      console.log('success', response);
    })
    .catch((err) => {
      console.log('error marking answer helpful', err);
    })
    .then(() => {
      return axios.get(`/catwalk/qa/questions/${productId}`)
    })
    .then((response) => {
      populateQuestions(response.data.results);
    })
    .catch((err) => {
      console.log('error getting new question list', err);
    })
}

var postReported = (answerId, productId, populateQuestions) => {
  axios.put(`/catwalk/qa/answers/report/${answerId}`)
    .then((response) => {
    console.log('success', response);
    })
    .catch((err) => {
      console.log('error reporting answer', err);
    })
    .then(() => {
      return axios.get(`/catwalk/qa/questions/${productId}`)
    })
    .then((response) => {
      populateQuestions(response.data.results);
    })
    .catch((err) => {
      console.log('error getting new question list', err);
    })
}

AnswerListEntry.propTypes = {};

export default AnswerListEntry;