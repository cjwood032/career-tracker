import React, { Component } from 'react'
import InterviewInput from '../components/interviews/InterviewInput'
import Interviews from '../components/interviews/Interviews'
import {connect} from 'react-redux'
import {fetchInterviews} from '../actions/interviewActions'

class InterviewsContainer extends Component {
componentDidMount(){
  this.props.fetchInterviews() 
}

  render() {
    return (
      <div className="interviewContainer">
        <InterviewInput />
        {/*<Interviews interviews={this.props.interviews} showInterview= {this.props.showInterview} deleteInterview={this.props.deleteInterview}/>*/}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    interviews: state.interviews
  })
}

const mapDispatchToProps = dispatch => {
  return {
    deleteInterview: id => dispatch({type: "DELETE_INTERVIEW", id}),
    //showInterview: id => dispatch({type: "SHOW_INTERVIEW", id}),
    fetchInterviews: () => dispatch(fetchInterviews())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InterviewsContainer)
