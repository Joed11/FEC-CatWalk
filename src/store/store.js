import { createStore } from 'redux';
import rootReducer from './../reducers/main.js';

var defaultState = {
  primaryProduct: null,
  currentStyles: null,
  currentStyle: null,
  currentImages: null,
  currentImage: null,
  productQuestions: null,
  sortingMethod: null,
  reviews: null,
  primaryProductMetadata: null,
};

const store = createStore(rootReducer, defaultState);

export default store;