import React, { useState, useEffect } from "react";
import AnswerListEntryContainer from "../../../containers/QandA/AnswerListEntryContainer.js";
import InteractionTracker from "../../Utility/InteractionTracker.jsx";
import '../../../../dist/stylesheets/QandAstyles.css';

var AnswerList = (props) => {
  if (props.answers.length) {
    var answerList = props.answers.slice(0);
    answerList.sort(sortAnswersByMostHelpful);

    const [numToDisplay, setNumtoDisplay] = useState(2);

    var displayList = [];

   for(let i = 0; i < numToDisplay; i++) {
     if (answerList[i]) {
      displayList.push(answerList[i]);
     }
   }

    useEffect(() => {
    setAnswersToDisplay(displayList);
    }, [numToDisplay])

    const [answersToDisplay, setAnswersToDisplay] = useState(displayList);

    if (numToDisplay < props.answers.length) {
      return (
        <div className="answer-list">
          {buildAnswerList(answersToDisplay)}
          <div className="answer-load-more Q-grid-container">
          <InteractionTracker widget="QandA" element="Load-more-answers"
           render={({ postInteraction }) => (
          <a className="answer-load-more-link Q-col-2" onClick={() => {
            setNumtoDisplay(numToDisplay + 2);
            postInteraction();
          }}>LOAD MORE ANSWERS...</a>
            )} />
          </div>
        </div>
      );
    } else {
      return (
        <div className="answer-list">
          {buildAnswerList(answersToDisplay)}
        </div>
      );
    }
  } else {
    return (
      <div className="answer-list-default Q-grid-container">
        <p className="no-answer-default Q-col-2">No answers yet...</p>
      </div>
    );
  }
};

var sortAnswersByMostHelpful = (answer1, answer2) => {
  if (answer1.helpfulness < answer2.helpfulness) {
    return 1;
  } else if (answer1.helpfulness > answer2.helpfulness) {
    return -1;
  } else {
    return 0;
  }
}

var buildAnswerList = (listOfAnswers) => {
  return listOfAnswers.map((currAnswer) => {
    return <AnswerListEntryContainer answer={currAnswer} key={currAnswer.id}/>
  })
}

AnswerList.propTypes = {};

export default AnswerList;