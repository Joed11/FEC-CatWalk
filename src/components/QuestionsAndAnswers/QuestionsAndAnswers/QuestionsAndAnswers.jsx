import React, { useState, useEffect } from "react";
import QuestionList from "../QuestionList/QuestionList.jsx";
import InteractionTracker from "../../Utility/InteractionTracker.jsx";
import '../../../../dist/stylesheets/QandAstyles.css';

var QuestionsAndAnswers = (props) => {
  const [searchInput, setSearchInput] = useState('');

  const [searchInputPassed, setSearchInputPassed] = useState('');

  useEffect(() => {
    if (searchInput.length >= 3) {
      setSearchInputPassed(searchInput.toLowerCase());
    }
    if (searchInputPassed.length >= 3 && searchInput.length < 3) {
      setSearchInputPassed(searchInput.toLowerCase());
    }
  }, [searchInput])

  return (
    <div className="QandA-widget" id="QandA-widget">
      <p className="QandA-primary-header">QUESTIONS & ANSWERS</p>
      <div className="QandA-searchbar-container">
      <InteractionTracker widget="QandA" element="Search-questions"
           render={({ postInteraction }) => (
       <input className="QandA-searchbar" type="text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." aria-label="searchbar" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} onClick={() => postInteraction()}>
        </input>
        )} />
      </div>
      <div className="QandA-question-list-container">
        <QuestionList questionList={props.productQuestions} product={props.primaryProduct} searchInput={searchInputPassed} />
      </div>
    </div>
  );
};

QuestionsAndAnswers.propTypes = {};

export default QuestionsAndAnswers;