import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import AnswerList from './AnswerList';
import sampleResponse from '../../../sampleData/QandAsampleResponse';



describe('Answer List Component', () => {

  var props = {}

  beforeEach(() => {
    props = {
      answers: sampleResponse.productQuestions.results[1].answers
    }
  })

  afterEach(cleanup);

  it('renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<AnswerList answers={props.answers}/>, div);
  });

});
