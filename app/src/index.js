import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { appReducer } from "./reducers";
import { Provider } from "react-redux";

import Title from "./components/Title";
import Dogs from "./components/Dogs";
import "./App.css";

const logger = ({ getState }) => next => action => {
  console.log("Dispatching action:", action);
  next(action);
};

let store = createStore(appReducer, applyMiddleware(logger, thunk));

function App() {
  return (
    <div className="App">
      <Title />
      <Dogs />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
