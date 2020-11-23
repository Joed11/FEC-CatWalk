import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import { Provider } from 'react-redux';
import { store, initializeStore } from '../../../store/store.js';
import QuestionListEntry from './QuestionListEntry';
import sampleResponse from '../../../sampleData/QandAsampleResponse';

describe('Question List Entry Component', () => {

  var props = {}

  beforeEach(() => {
    props = {
      question: sampleResponse.productQuestions.results[1]
    }

  })

  afterEach(cleanup);

  it('renders without crashing', () => {
    const div = document.createElement("div");
    initializeStore(() => {
    ReactDOM.render(
      <Provider store={store}>
        <QuestionListEntry question={props.question} />
      </Provider>, div);
    });
  });
});