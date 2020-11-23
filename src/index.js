import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from 'react-redux';
import { initializeStore, store } from './store/store.js';


//call intializeStore from store file before mounting app this will populate the store with an initial api call before rendering the page
initializeStore(1, () => {
  var mountNode = document.getElementById("app");
  ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  mountNode);
})