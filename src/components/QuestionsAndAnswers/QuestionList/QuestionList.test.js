import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store, initializeStore } from '../../../store/store.js';
import "@testing-library/jest-dom/extend-expect";
import QuestionList from './QuestionList';
import sampleResponse from '../../../sampleData/QandAsampleResponse';


describe('Question List Component', () => {

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
        <QuestionList questionList={props.questionList} product={props.primaryProduct} searchInput={props.searchInput} />
      </Provider>, div);
    });
  });
});