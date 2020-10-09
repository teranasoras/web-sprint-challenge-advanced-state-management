import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {Myreducer} from './reducer'


const store = createStore(Myreducer, applyMiddleware(thunk));
const ownThunk = (store) => (next) => (action) => {
    if (typeof action === 'object') {
      next(action);
    } else if (typeof action === 'function') {
      action(store.dispatch)
    }
  }


ReactDOM.render(
<Provider store = {store}>
<App />
</Provider>,
document.getElementById("root"));
