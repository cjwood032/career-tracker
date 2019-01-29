import React from 'react';
import Home from './Home';
import About from '../components/About';
import { Route, Switch } from 'react-router-dom';
import CareerRoutes from '../components/careers/Routes'
import DetailsContainer from '../containers/DetailsContainer'
const Main = () => (
        <main>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/Careers" component={CareerRoutes} />
          <Route path ="/About" component={About} />
          <Route path ="/Details" component={DetailsContainer} />
          </Switch>
        </main>
)
export default Main
