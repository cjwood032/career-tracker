import React, { Component } from 'react';
import CareersContainer from './containers/CareersContainer'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <CareersContainer />
      </div>
    );
  }
};

export default App
