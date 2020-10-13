import React from 'react';
import {Switch, Route} from 'react-router-dom';
import FullInterview from './FullInterview'
import InterviewInput from './InterviewInput'
import InterviewsContainer from '../../containers/InterviewsContainer';

class InterviewRoutes extends React.Component {
render () {
    return(
        <div>
            <Switch>
                <Route exact path="/Interviews/InterviewInput" component={InterviewInput}/>
                <Route path="/Interviews/:id" component={FullInterview} />
                <Route exact path="/Interviews" component={InterviewsContainer}/>
            </Switch>
        </div>
    )
}
}
export default InterviewRoutes