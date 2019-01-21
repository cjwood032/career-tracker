import React from 'react';
import {Switch, Route} from 'react-router-dom';
import FullCareer from './FullCareer'
import Careers from './Careers'
import CareerInput from './CareerInput'
import CareersContainer from '../../containers/CareersContainer';

class CareerRoutes extends React.Component {
render () {
    return(
        <div>
            <Switch>
                <Route exact path="/Careers/CareerInput" component={CareerInput}/>
                <Route path="/Careers/:id" component={FullCareer} />
                <Route exact path="/Careers" component={CareersContainer}/>
            </Switch>
        </div>
    )
}
}
export default CareerRoutes