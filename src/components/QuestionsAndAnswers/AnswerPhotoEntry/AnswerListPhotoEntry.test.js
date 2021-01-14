
import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import AnswerPhotoEntry from './AnswerPhotoEntry';

describe('Answer Photo Entry Component', () => {

  var props = {}

  beforeEach(() => {

  })

  afterEach(cleanup);

  it('renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<AnswerPhotoEntry/>, div);
  });

});