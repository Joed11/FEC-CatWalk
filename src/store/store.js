import axios from 'axios';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';

var store = {};

function initializeStore(id, callback) {
  return axios
    .get(`/catwalk/${id}`)
    .then((response) => {
      var data = response.data;
      var defaultState = {
        primaryProduct: data.primaryProduct,
        currentStyles: data.primaryProductStyles.results,
        currentStyle: data.primaryProductStyles.results[0],
        currentImages: data.primaryProductStyles.results[0].photos,
        currentImage: data.primaryProductStyles.results[0].photos[0],
        productQuestions: data.primaryProductQuestions.results,
        sortingMethod: 'relevance',
        reviews: data.primaryProductReviews.results,
        primaryProductMetadata: data.primaryProductReviewsNumbers,
      };

      store = createStore(rootReducer, defaultState, applyMiddleware(thunk));
    })
    .then(() => {
      callback();
    })
    .catch((err) => {
      console.log('error creating the store', err);
    });
}

export { store, initializeStore };
