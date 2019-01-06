import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import manageCareer from './reducers/manageCareer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import thunk from 'redux-thunk'
const store = createStore(manageCareer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root')
)