import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import AnswerListEntry from './AnswerListEntry';
import sampleResponse from '../../../sampleData/QandAsampleResponse';

describe('Answer List Entry Component', () => {

  var props = {}

  beforeEach(() => {
    props = {
      answer: Object.values(sampleResponse.productQuestions.results[1].answers)[0]
    }
  })

  afterEach(cleanup);

  it('renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<AnswerListEntry answer={props.answer} />, div);
  });

});