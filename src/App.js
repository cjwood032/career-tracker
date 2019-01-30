import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header'
import Main from './components/MainRouter'
class App extends Component {
  
  render() {
    return (
      <div className="flex-container">
          <Router>
            <div>
              <Header />
              <Main />
            </div>
          </Router>
        </div>
    );
  }
};

export default App
