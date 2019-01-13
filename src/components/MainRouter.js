import React from 'react';
import Home from './Home';
import About from '../components/About';
import { Route, Switch } from 'react-router-dom';
import CareersContainer from '../containers/CareersContainer';
const Main = () => (
        <main>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/Careers" component={CareersContainer} />
          <Route path ="/About" component={About} />
          </Switch>
        </main>
)
export default Main
