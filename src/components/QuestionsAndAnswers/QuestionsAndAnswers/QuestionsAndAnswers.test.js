import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import { Provider } from 'react-redux';
import { store, initializeStore } from '../../../store/store.js';
import QuestionsAndAnswers from './QuestionsAndAnswers';
import sampleResponse from '../../../sampleData/QandAsampleResponse';

describe('Question and Answers Component', () => {

  var props = {}

  beforeEach(() => {
    props = {
      primaryProduct: sampleResponse.primaryProduct,
      questionList: sampleResponse.productQuestions.results,
      searchInput: ''
    }
  })

  afterEach(cleanup);

  it('renders without crashing', () => {
    const div = document.createElement("div");
    initializeStore(() => {
    ReactDOM.render(
      <Provider store={store}>
        <QuestionsAndAnswers productQuestions={props.questionList} primaryProduct={props.primaryProduct} searchInput={props.searchInput} />
      </Provider>, div);
    });
  });
});