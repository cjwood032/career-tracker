import React from 'react';
import Home from './Home';
import About from '../components/About';
import { Route, Switch } from 'react-router-dom';
import CareerRoutes from '../components/careers/Routes'
import CareersContainer from '../containers/CareersContainer';
import DocumentsContainer from '../containers/DocumentsContainer';
const Main = () => (
        <main>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/Careers" component={CareerRoutes} />
          <Route path ="/About" component={About} />
          <Route path ="/Documents" component={DocumentsContainer} />
          </Switch>
        </main>
)
export default Main
