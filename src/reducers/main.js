import { combineReducers } from 'redux';
import primaryProductReducer from './primaryProductReducer.js';
import currentStylesReducer from './currentStylesReducer.js';
import currentStyleReducer from './currentStyleReducer.js';
import currentImagesReducer from './currentImagesReducer.js';
import currentImageReducer from './currentImageReducer.js';
import relatedProductsReducer from './relatedProductsReducer.js';
import productQuestionsReducer from './productQuestionsReducer.js';
import reviewsReducer from './reviewsReducer.js';
import primaryProductMetadataReducer from './primaryProductMetadataReducer.js';

var rootReducer = combineReducers({
  primaryProduct: primaryProductReducer,
  currentStyles: currentStylesReducer,
  currentStyle:  currentStyleReducer,
  currentImages: currentImagesReducer,
  currentImage: currentImageReducer,
  relatedProducts: relatedProductsReducer,
  productQuestions: productQuestionsReducer,
  reviews: reviewsReducer,
  primaryProductMetadata: primaryProductMetadataReducer
});

export default rootReducer;
