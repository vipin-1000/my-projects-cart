import { StrictMode } from "react";
import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import reducers from "./reducers/reducers";

import App from "./App";
import CartApp from "./containers/CartApp"

import {saveState} from "./utils/utils";

const rootReducer = combineReducers({
  ...reducers
});

const enhancedCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootElement = document.getElementById("app");
const store=createStore(rootReducer, enhancedCompose(applyMiddleware(thunkMiddleware)))
store.subscribe(()=>{
  saveState(store.getState())
})

ReactDOM.render(
  <StrictMode>
  <Provider store={store}>
    <CartApp />
    </Provider>
  </StrictMode>,
  rootElement
);
