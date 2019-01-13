import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Career from './Career'
import Careers from './Careers'
import CareerInput from './CareerInput'

class CareerRoutes extends React.Component {
render () {
    return(
        <div>
            <Switch>
                <Route exact path="/Careers/CareerInput" component={CareerInput}/>
                <Route path="/Careers/:id" component={Career}/>
                <Route exact path="/Careers" component={Careers}/>
            </Switch>
        </div>
    )
}
}
export default CareerRoutes