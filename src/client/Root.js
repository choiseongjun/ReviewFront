import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "../shared/App";
import { Provider } from "react-redux";
import rootReducer from "../modules";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(rootReducer, composeWithDevTools());

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

export default Root;
