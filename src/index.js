import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import manageCareer from './reducers/manageCareer';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  manageCareer,
  composeEnhancer(applyMiddleware(thunk)),
  );


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root')
)