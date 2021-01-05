import axios from 'axios';
import { createStore } from 'redux';
import rootReducer from './../reducers/main.js';

const defaultState = {
  primaryProduct: null,
  currentStyles: null,
  currentStyle:  null,
  currentImages: null,
  currentImage: null,
  relatedProducts: null,
  productQuestions: null,
  reviews: null,
  primaryProductMetadata: null
}

const store = createStore(rootReducer, defaultState);

export default store;
