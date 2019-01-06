import React, { Component } from 'react';
import CareersContainer from './containers/CareersContainer'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './App.css';

class App extends Component {
  componentDidMount() {
    fetch('http://localhost:3001/api/careers')
        .then(response => response.json())
        .then(careers => console.log(careers));
}
  render() {
    return (
      <div className="App">
        <CareersContainer />
      </div>
    );
  }
};

export default App
