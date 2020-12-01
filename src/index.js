import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./AppRouter";
import { Provider } from 'react-redux';
import store from './store/store.js';


//call intializeStore from store file before mounting app this will populate the store with an initial api call before rendering the page
var mountNode = document.getElementById("app");
ReactDOM.render(
  <Provider store={store}>
    <AppRouter/>
  </Provider>,
mountNode);