import axios from 'axios';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';

var store = {};

function initializeStore(id, callback) {
  return axios
    .get(`/catwalk/${id}`)
    .then((response) => {
      const data = response.data;
      const styleData = data.primaryProductStyles.results
      styleData.forEach((style) => {
        style.photos.forEach((photo) => {
          if (photo.thumbnail_url === null) {
            photo.thumbnail_url = './attributes/no-img.png';
          }
          if (photo.url === null) {
            photo.url = './attributes/no-img.png';
          }
        })
      })
      var defaultState = {
        primaryProduct: data.primaryProduct,
        currentStyles: styleData,
        currentStyle: styleData[0],
        currentImages: styleData[0].photos,
        currentImage: styleData[0].photos[0],
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
