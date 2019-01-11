import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import manageCareer from './reducers/manageCareer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
const store = createStore(
  manageCareer,
  applyMiddleware(thunk),
  );


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root')
)